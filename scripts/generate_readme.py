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


def provider_cell(p, models, loc="en"):
    """Link to the site page only when it's indexable (has models); otherwise plain name."""
    # ponytail: same rule as web/src/lib/seo.mjs isProviderIndexable; keep them in sync.
    if model_count(p["id"], models):
        prefix = "" if loc == "en" else f"/{loc}"
        return f"[{p['name']}]({SITE}{prefix}/providers/{p['id']}/{UTM})"
    return p["name"]


CARD = {"no": "✅ No", "registration": "📧 Email", "phone": "📱 Phone", "yes": "💳 Yes"}

# Table labels per README. Headers reuse each translated README's original wording.
# ponytail: credit_expiry values ("30 days", "monthly") stay English; translate when it's a structured field.
L = {
    "en": dict(provider="Provider", models="Models", card="Card?", ctx="Max Context", mods="Modalities", verified="Last Verified",
               get="Get Key", get_link="Get Key →", credits="Credits (USD)", expiry="Expiry", free_tier="Free tier", cards=CARD),
    "es": dict(provider="Proveedor", models="Modelos", card="¿Tarjeta?", ctx="Contexto máx.", get="Obtener clave", get_link="Obtener →",
               credits="Créditos", expiry="Caducidad", free_tier="Nivel gratuito",
               cards={"no": "✅ No", "registration": "📧 Email", "phone": "📱 Teléfono", "yes": "💳 Sí"}),
    "zh": dict(provider="提供商", models="模型", card="信用卡要求", ctx="最大上下文", get="获取 Key", get_link="获取 →",
               credits="积分", expiry="有效期", free_tier="免费套餐",
               cards={"no": "✅ 无需", "registration": "📧 注册", "phone": "📱 手机验证", "yes": "💳 需要"}),
    "hi": dict(provider="प्रदाता", models="मॉडल", card="कार्ड?", ctx="अधिकतम संदर्भ", get="Key प्राप्त करें", get_link="प्राप्त करें →",
               credits="क्रेडिट", expiry="वैधता", free_tier="मुफ़्त टियर",
               cards={"no": "✅ नहीं", "registration": "📧 ईमेल", "phone": "📱 फ़ोन", "yes": "💳 हाँ"}),
    "ja": dict(provider="プロバイダー", models="モデル", card="カード", ctx="最大コンテキスト", get="キーを取得", get_link="取得 →",
               credits="クレジット", expiry="期限", free_tier="無料枠",
               cards={"no": "✅ 不要", "registration": "📧 登録", "phone": "📱 電話", "yes": "💳 必要"}),
    "ko": dict(provider="제공업체", models="모델", card="카드?", ctx="최대 컨텍스트", get="키 받기", get_link="받기 →",
               credits="크레딧", expiry="만료", free_tier="무료 티어",
               cards={"no": "✅ 불필요", "registration": "📧 이메일", "phone": "📱 전화", "yes": "💳 필요"}),
    "pt": dict(provider="Provedor", models="Modelos", card="Cartão?", ctx="Contexto máx.", get="Obter chave", get_link="Obter →",
               credits="Créditos", expiry="Validade", free_tier="Nível gratuito",
               cards={"no": "✅ Não", "registration": "📧 Email", "phone": "📱 Telefone", "yes": "💳 Sim"}),
    "ar": dict(provider="المزود", models="النماذج", card="بطاقة؟", ctx="أقصى سياق", get="احصل على المفتاح", get_link="احصل →",
               credits="الرصيد", expiry="انتهاء الصلاحية", free_tier="طبقة مجانية",
               cards={"no": "✅ لا", "registration": "📧 بريد", "phone": "📱 هاتف", "yes": "💳 نعم"}),
    "fr": dict(provider="Fournisseur", models="Modèles", card="Carte ?", ctx="Contexte max.", get="Obtenir la clé", get_link="Obtenir →",
               credits="Crédits", expiry="Expiration", free_tier="Niveau gratuit",
               cards={"no": "✅ Non", "registration": "📧 Email", "phone": "📱 Téléphone", "yes": "💳 Oui"}),
    "de": dict(provider="Anbieter", models="Modelle", card="Karte?", ctx="Max. Kontext", get="Schlüssel holen", get_link="Holen →",
               credits="Guthaben", expiry="Ablauf", free_tier="Gratis-Stufe",
               cards={"no": "✅ Nein", "registration": "📧 E-Mail", "phone": "📱 Telefon", "yes": "💳 Ja"}),
    "ru": dict(provider="Поставщик", models="Модели", card="Карта?", ctx="Макс. контекст", get="Получить ключ", get_link="Получить →",
               credits="Кредиты", expiry="Срок", free_tier="Бесплатный уровень",
               cards={"no": "✅ Нет", "registration": "📧 Email", "phone": "📱 Телефон", "yes": "💳 Да"}),
}


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
        amount = f"${p['credit_amount_usd']}" if p["credit_amount_usd"] else "—"  # credits, amount not published
        out += (f"| {provider_cell(p, models)} | {amount} | {p['credit_expiry'] or '—'} "
                f"| {CARD.get(p['credit_card_required'], p['credit_card_required'])} "
                f"| {model_count(p['id'], models)} | {p['last_verified']} "
                f"| [Get Key →]({p['signup_url']}) |\n")
    return out


def permanent_table_loc(providers, models, loc):
    t = L[loc]
    rows = sorted([p for p in providers if p["free_type"] == "permanent"], key=lambda p: -model_count(p["id"], models))
    out = f"| {t['provider']} | {t['models']} | {t['card']} | {t['ctx']} | {t['get']} |\n|---|---|---|---|---|\n"
    for p in rows:
        out += (f"| {provider_cell(p, models, loc)} | {model_count(p['id'], models)} | {t['cards'][p['credit_card_required']]} "
                f"| {max_context(p['id'], models)} | [{t['get_link']}]({p['signup_url']}) |\n")
    return out


def credits_table_loc(providers, models, loc):
    t = L[loc]
    rows = sorted([p for p in providers if p["free_type"] == "credits"], key=lambda p: -(p["credit_amount_usd"] or 0))
    out = f"| {t['provider']} | {t['credits']} | {t['expiry']} | {t['card']} | {t['get']} |\n|---|---|---|---|---|\n"
    for p in rows:
        amount = f"${p['credit_amount_usd']}" if p["credit_amount_usd"] else "—"
        out += (f"| {provider_cell(p, models, loc)} | {amount} | {p['credit_expiry'] or '—'} "
                f"| {t['cards'][p['credit_card_required']]} | [{t['get_link']}]({p['signup_url']}) |\n")
    return out


FLAG = {"india": "🇮🇳", "china": "🇨🇳", "japan": "🇯🇵", "korea": "🇰🇷", "europe": "🇪🇺", "middle_east": "🇦🇪", "sea": "🇸🇬"}
# Region names, the "free offer" column, and (translated READMEs only) the section heading.
R = {
    "en": (["India", "China", "Japan", "Korea", "Europe", "Middle East", "Southeast Asia"], "Free offer", None),
    "es": (["India", "China", "Japón", "Corea", "Europa", "Oriente Medio", "Sudeste Asiático"], "Oferta gratuita", "Proveedores regionales"),
    "zh": (["印度", "中国", "日本", "韩国", "欧洲", "中东", "东南亚"], "免费额度", "区域提供商"),
    "hi": (["भारत", "चीन", "जापान", "कोरिया", "यूरोप", "मध्य पूर्व", "दक्षिण-पूर्व एशिया"], "मुफ़्त ऑफ़र", "क्षेत्रीय प्रदाता"),
    "ja": (["インド", "中国", "日本", "韓国", "ヨーロッパ", "中東", "東南アジア"], "無料枠", "地域別プロバイダー"),
    "ko": (["인도", "중국", "일본", "한국", "유럽", "중동", "동남아시아"], "무료 제공", "지역별 제공업체"),
    "pt": (["Índia", "China", "Japão", "Coreia", "Europa", "Oriente Médio", "Sudeste Asiático"], "Oferta gratuita", "Provedores regionais"),
    "ar": (["الهند", "الصين", "اليابان", "كوريا", "أوروبا", "الشرق الأوسط", "جنوب شرق آسيا"], "العرض المجاني", "المزودون الإقليميون"),
    "fr": (["Inde", "Chine", "Japon", "Corée", "Europe", "Moyen-Orient", "Asie du Sud-Est"], "Offre gratuite", "Fournisseurs régionaux"),
    "de": (["Indien", "China", "Japan", "Korea", "Europa", "Naher Osten", "Südostasien"], "Gratis-Angebot", "Regionale Anbieter"),
    "ru": (["Индия", "Китай", "Япония", "Корея", "Европа", "Ближний Восток", "Юго-Восточная Азия"], "Бесплатно", "Региональные поставщики"),
}


def regional_block(providers, models, loc):
    """One collapsed table per non-global region, biggest region first."""
    t, (names, offer, heading) = L[loc], R[loc]
    region_name = dict(zip(FLAG, names))
    out = f"\n---\n\n### 🌍 {heading}\n\n" if heading else ""
    regions = sorted(FLAG, key=lambda r: -sum(p["region"] == r for p in providers))
    for r in regions:
        rows = sorted([p for p in providers if p["region"] == r], key=lambda p: (-model_count(p["id"], models), p["name"]))
        if not rows:
            continue
        out += (f"<details>\n<summary><strong>{FLAG[r]} {region_name[r]} ({len(rows)})</strong></summary>\n\n"
                f"| {t['provider']} | {t['card']} | {offer} | {t['get']} |\n|---|---|---|---|\n")
        for p in rows:
            if p["free_type"] == "permanent":
                free = t["free_tier"]
            else:
                free = f"${p['credit_amount_usd']:g}" if p["credit_amount_usd"] else t["credits"].replace(" (USD)", "")
                free += f" · {p['credit_expiry']}" if p["credit_expiry"] else ""
            out += (f"| {provider_cell(p, models, loc)} | {t['cards'][p['credit_card_required']]} | {free} "
                    f"| [{t['get_link']}]({p['signup_url']}) |\n")
        out += "\n</details>\n\n"
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
    content = inject(content, "REGIONAL", regional_block(providers, models, "en"))
    content = inject(content, "IMAGE_APIS", image_table(json.loads(IMAGE_FILE.read_text())))
    README_FILE.write_text(content)
    for loc in L:
        if loc == "en":
            continue
        f = ROOT / f"README.{loc}.md"
        c = inject(f.read_text(), "PERMANENT", permanent_table_loc(providers, models, loc))
        c = inject(c, "CREDITS", credits_table_loc(providers, models, loc))
        f.write_text(inject(c, "REGIONAL", regional_block(providers, models, loc)))
    total_m = sum(1 for m in models if not m["deprecated"])
    print(f"README.md updated — {len(providers)} providers, {total_m} models.")


if __name__ == "__main__":
    main()
