#!/usr/bin/env python3
"""Build data/changes.json: free-tier changes, derived from git history of the data files.

Every run rebuilds the whole log from git (no hand-kept state to drift). The output is
committed because Vercel's shallow clone has no history to derive it from at build time.

    python3 scripts/track_changes.py                    # rewrite data/changes.json
    python3 scripts/track_changes.py --since 2026-10-01 # also print post-ready lines
"""
import json, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).parent.parent
OUT = ROOT / "data" / "changes.json"
# Only fields a user of the free tier cares about. seo/last_verified churn is ignored.
P_FIELDS = {"free_type": "free type", "credit_card_required": "sign-up requirement",
            "credit_amount_usd": "free credits", "credit_expiry": "credit expiry"}
M_FIELDS = {"rpm": "RPM", "rpd": "requests/day", "tpm": "TPM", "context_window": "context window"}


def git(*args):
    return subprocess.run(["git", *args], cwd=ROOT, capture_output=True, text=True, check=True).stdout


def versions(path):
    """(date, parsed json) for every commit touching path, oldest first."""
    out = []
    for line in git("log", "--reverse", "--format=%H %ad", "--date=short", "--", path).splitlines():
        sha, day = line.split()
        try:
            out.append((day, json.loads(git("show", f"{sha}:{path}"))))
        except (subprocess.CalledProcessError, json.JSONDecodeError):
            continue  # file absent or broken in that commit (e.g. a bad merge): skip it
    return out


SIGNUP = {"no": "nothing", "registration": "email signup", "phone": "phone number", "yes": "credit card"}
SAME = {None, "never"}  # "no expiry" is written both ways; not a change


def fmt(f, v):
    if v is None:
        return "none"
    if f == "credit_card_required":
        return SIGNUP.get(v, v)
    if f == "credit_amount_usd":
        return f"${v:g}"
    if f == "context_window":
        return f"{v // 1000}K" if v < 1_000_000 else f"{v / 1_000_000:g}M"
    return f"{v:,}" if isinstance(v, int) else str(v)


def field_diff(old, new, fields):
    parts = []
    for f, label in fields.items():
        a, b = old.get(f), new.get(f)
        if a != b and not (f == "credit_expiry" and {a, b} <= SAME):
            parts.append(f"{label} {fmt(f, a)} → {fmt(f, b)}")
    return "; ".join(parts)


def diff_providers(old, new):
    o, n = {p["id"]: p for p in old}, {p["id"]: p for p in new}
    for pid in n.keys() - o.keys():
        yield pid, n[pid]["name"], "added", f"{n[pid]['name']} now listed: {n[pid]['notes']}"
    for pid in o.keys() - n.keys():
        yield pid, o[pid]["name"], "removed", f"{o[pid]['name']} no longer listed"
    for pid in o.keys() & n.keys():
        if d := field_diff(o[pid], n[pid], P_FIELDS):
            yield pid, n[pid]["name"], "changed", f"{n[pid]['name']}: {d}"


def diff_models(old, new, names):
    key = lambda m: (m["provider_id"], m["model_id"])
    o = {key(m): m for m in old if not m.get("deprecated")}
    n = {key(m): m for m in new if not m.get("deprecated")}
    nm = lambda k: names.get(k[0], k[0])
    for k in n.keys() - o.keys():
        yield k[0], nm(k), "model_added", f"{nm(k)}: free model {k[1]} now listed"
    for k in o.keys() - n.keys():
        yield k[0], nm(k), "model_removed", f"{nm(k)}: free model {k[1]} no longer listed"
    for k in o.keys() & n.keys():
        if d := field_diff(o[k], n[k], M_FIELDS):
            yield k[0], nm(k), "limit_changed", f"{nm(k)} {k[1]}: {d}"


def build():
    pv = versions("data/providers.json")
    names = {p["id"]: p["name"] for _, ps in pv for p in ps}
    changes = []
    for series, differ in ((pv, diff_providers), (versions("data/models.json"), lambda a, b: diff_models(a, b, names))):
        first_day = series[0][0] if series else None
        for (_, old), (day, new) in zip(series, series[1:]):
            if day == first_day:
                continue  # initial import, not a change
            changes += [{"date": day, "provider_id": pid, "provider": name, "kind": kind, "detail": d}
                        for pid, name, kind, d in differ(old, new)]
    # Newest first; stable order inside a day so reruns produce byte-identical output.
    return sorted(changes, key=lambda c: (c["date"], c["provider_id"], c["detail"]), reverse=True)


def main():
    changes = build()
    OUT.write_text(json.dumps(changes, indent=2, ensure_ascii=False) + "\n")
    print(f"{OUT.relative_to(ROOT)}: {len(changes)} changes", file=sys.stderr)
    if "--since" in sys.argv:
        since = sys.argv[sys.argv.index("--since") + 1]
        for c in (c for c in changes if c["date"] >= since):
            print(f"- {c['date']}: {c['detail']}")


if __name__ == "__main__":
    main()
