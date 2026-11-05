#!/usr/bin/env python3
import json
from pathlib import Path
from datetime import date

ROOT = Path(__file__).parent.parent
PROVIDERS_FILE = ROOT / "data" / "providers.json"
MODELS_FILE = ROOT / "data" / "models.json"
IMAGE_FILE = ROOT / "data" / "image_apis.json"
README_FILE = ROOT / "README.md"


def load():
    providers = json.loads(PROVIDERS_FILE.read_text())
    models = json.loads(MODELS_FILE.read_text())
    return providers, models


def model_count(pid, models):
    return sum(1 for m in models if m["provider_id"] == pid and not m["deprecated"])


def max_context(pid, models):
    ctxs = [m["context_window"] for m in models if m["provider_id"] == pid and not m["deprecated"] and m["context_window"]]
    if not ctxs:
        return "—"
    c = max(ctxs)
    return f"{c // 1_000_000}M" if c >= 1_000_000 else f"{c // 1_000}K"


def modalities_str(pid, models):
    mods = set()
    for m in models:
        if m["provider_id"] == pid and not m["deprecated"]:
            mods.update(m["modalities"])
    return ", ".join(sorted(mods)) or "text"


SITE = "https://www.freellm.site"
UTM = "?utm_source=github&utm_medium=readme"


def provider_cell(p, models):
    """Link to the site page only when it's indexable (has models); otherwise plain name."""
    # ponytail: same rule as web/src/lib/seo.mjs isProviderIndexable; keep them in sync.
    if model_count(p["id"], models):
        return f"[{p['name']}]({SITE}/providers/{p['id']}/{UTM})"
    return p["name"]


CARD = {"no": "✅ No", "registration": "📧 Email", "phone": "📱 Phone", "yes": "💳 Yes"}


def inject(content, marker, table):
    s, e = f"<!-- BEGIN_{marker} -->", f"<!-- END_{marker} -->"
    if s not in content or e not in content:
        print(f"warning: README has no {marker} markers, skipped")
        return content
    return content.split(s)[0] + s + "\n" + table + "\n" + e + content.split(e)[1]


def permanent_table(providers, models):
    rows = sorted([p for p in providers if p["free_type"] == "permanent"],
                  key=lambda p: -model_count(p["id"], models))
    out = "| Provider | Models | Card? | Max Context | Modalities | Last Verified | Get Key |\n"
    out += "|---|---|---|---|---|---|---|\n"
    for p in rows:
        out += (f"| {provider_cell(p, models)} | {model_count(p['id'], models)} | {CARD.get(p['credit_card_required'], p['credit_card_required'])} "
                f"| {max_context(p['id'], models)} | {modalities_str(p['id'], models)} "
                f"| {p['last_verified']} | [Get Key →]({p['signup_url']}) |\n")
    return out


def credits_table(providers, models):
    rows = sorted([p for p in providers if p["free_type"] == "credits"],
                  key=lambda p: -(p["credit_amount_usd"] or 0))
    out = "| Provider | Credits (USD) | Expiry | Card? | Models | Last Verified | Get Key |\n"
    out += "|---|---|---|---|---|---|---|\n"
    for p in rows:
        amount = f"${p['credit_amount_usd']}" if p["credit_amount_usd"] else "Free tier"
        out += (f"| {provider_cell(p, models)} | {amount} | {p['credit_expiry'] or '—'} "
                f"| {CARD.get(p['credit_card_required'], p['credit_card_required'])} "
                f"| {model_count(p['id'], models)} | {p['last_verified']} "
                f"| [Get Key →]({p['signup_url']}) |\n")
    return out


def base_urls_table(providers):
    out = "| Provider | Base URL | Get Key |\n|---|---|---|\n"
    for p in sorted(providers, key=lambda x: x["name"]):
        out += f"| {p['name']} | `{p['base_url']}` | [→]({p['signup_url']}) |\n"
    return out


def image_table(apis):
    out = "| Provider | Free allowance | Card? | Recurring? | OpenAI-compatible | Get Key |\n"
    out += "|---|---|---|---|---|---|\n"
    for a in apis:
        if a["free_type"] == "none":
            continue
        out += (f"| {a['name']} | {a['free_allowance']} | {CARD.get(a['credit_card_required'], a['credit_card_required'])} "
                f"| {'Yes' if a['free_type'] == 'permanent' else 'No'} | {'Yes' if a['openai_compatible'] else 'No'} "
                f"| [Get Key →]({a['signup_url']}) |\n")
    gone = ", ".join(a["name"] for a in apis if a["free_type"] == "none")
    return out + f"\n**No longer free:** {gone}.\n" if gone else out


def stats_block(providers, models):
    total_p = len(providers)
    total_m = sum(1 for m in models if not m["deprecated"])
    return (f'<p align="center"><strong>{total_p} providers · '
            f'{total_m} models · last verified {date.today().isoformat()}</strong></p>\n')


def main():
    providers, models = load()
    content = README_FILE.read_text()
    content = inject(content, "STATS", stats_block(providers, models))
    content = inject(content, "PERMANENT", permanent_table(providers, models))
    content = inject(content, "CREDITS", credits_table(providers, models))
    content = inject(content, "BASE_URLS", base_urls_table(providers))
    content = inject(content, "IMAGE_APIS", image_table(json.loads(IMAGE_FILE.read_text())))
    README_FILE.write_text(content)
    total_m = sum(1 for m in models if not m["deprecated"])
    print(f"README.md updated — {len(providers)} providers, {total_m} models.")


if __name__ == "__main__":
    main()
