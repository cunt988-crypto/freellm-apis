import subprocess, pathlib

ROOT = pathlib.Path(__file__).parent.parent

def test_generates_tables():
    result = subprocess.run(
        ["python3", "scripts/generate_readme.py"],
        cwd=ROOT, capture_output=True, text=True
    )
    assert result.returncode == 0, result.stderr
    readme = (ROOT / "README.md").read_text()
    assert "Groq" in readme
    assert "Together AI" in readme
    assert "2026-06-28" in readme
    assert "<!-- BEGIN_PERMANENT -->" in readme
    assert "<!-- BEGIN_CREDITS -->" in readme
    assert "Cloudflare Workers AI" in readme.split("<!-- BEGIN_IMAGE_APIS -->")[1]

def test_stats_injected():
    readme = (ROOT / "README.md").read_text()
    assert "providers" in readme
    assert "models" in readme

def test_localized_tables_match_data():
    import json, re
    providers = json.loads((ROOT / "data" / "providers.json").read_text())
    for loc in "es zh hi ja ko pt ar fr de ru".split():
        readme = (ROOT / f"README.{loc}.md").read_text()
        for marker, kind in (("PERMANENT", "permanent"), ("CREDITS", "credits")):
            block = readme.split(f"<!-- BEGIN_{marker} -->")[1].split(f"<!-- END_{marker} -->")[0]
            got = {re.sub(r"^\[|\]\(.*$", "", r.split(" | ")[0][2:]) for r in block.strip().split("\n")[2:]}
            want = {p["name"] for p in providers if p["free_type"] == kind}
            assert got == want, (loc, marker, got ^ want)

if __name__ == "__main__":
    test_generates_tables()
    test_stats_injected()
    test_localized_tables_match_data()
    print("All tests passed.")
