import sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from track_changes import diff_providers, diff_models

base = {"id": "x", "name": "X", "notes": "n", "free_type": "permanent", "credit_card_required": "no",
        "credit_amount_usd": None, "credit_expiry": None, "seo": {"title": "a"}}

# seo churn and None<->"never" expiry are not changes
assert list(diff_providers([base], [{**base, "seo": {"title": "b"}, "credit_expiry": "never"}])) == []
# field changes merge into one readable line
[(pid, _, kind, d)] = diff_providers([base], [{**base, "free_type": "credits", "credit_card_required": "yes", "credit_amount_usd": 5}])
assert (pid, kind) == ("x", "changed") and d == "X: free type permanent → credits; sign-up requirement nothing → credit card; free credits none → $5", d
assert [c[2] for c in diff_providers([], [base])] == ["added"]
assert [c[2] for c in diff_providers([base], [])] == ["removed"]

m = {"provider_id": "x", "model_id": "m1", "rpm": 30, "rpd": 1000, "tpm": None, "context_window": 131072, "deprecated": False}
assert [c[3] for c in diff_models([m], [{**m, "rpd": 500}], {"x": "X"})] == ["X m1: requests/day 1,000 → 500"]
# deprecating a model reads as "no longer listed"
assert [c[2] for c in diff_models([m], [{**m, "deprecated": True}], {})] == ["model_removed"]
print("track_changes: all checks passed")
