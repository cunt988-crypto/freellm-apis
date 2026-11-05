<p align="center">
  <h1 align="center">🆓 Kostenlose LLM APIs</h1>
  <p align="center"><strong>70+ Anbieter · 8 Regionen · Dauerhaft kostenlose Stufen + Testguthaben</strong></p>
</p>

<p align="center">
  <a href="https://www.freellm.site" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/🌐_Website-freellm.site-6366f1?style=for-the-badge" alt="Website"/></a>
  <a href="https://github.com/khushaljethava/freellm-apis" target="_blank" rel="noopener"><img src="https://img.shields.io/github/stars/khushaljethava/freellm-apis?style=for-the-badge&color=f59e0b" alt="Stars"/></a>
  <img src="https://img.shields.io/badge/Anbieter-70%2B-ec4899?style=for-the-badge" alt="70+ Anbieter"/>
</p>

<p align="center">
  <a href="README.md">English</a> · <a href="README.zh.md">简体中文</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.es.md">Español</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.pt.md">Português</a> · <a href="README.ar.md">العربية</a> · <a href="README.fr.md">Français</a> · <strong>Deutsch</strong> · <a href="README.ru.md">Русский</a>
</p>

---

## Warum dieses Projekt existiert

Eine kostenlose LLM-API zu finden, sollte nicht bedeuten, Dutzende von Websites zu durchsuchen, sich auf fünf Plattformen anzumelden oder zu raten, welche kostenlose Stufe noch funktioniert.

Dieses Repository ist ein **strukturiertes, maschinenlesbares Verzeichnis** jeder kostenlosen LLM-API — mit Kreditkartenanforderungen, Basis-URLs und direkten API-Key-Links.

- ✅ **Optionen ohne Karte zuerst** — zeigt klar, welche Anbieter keine Zahlungsinformationen benötigen
- ✅ **OpenAI-kompatibel** — alle Anbieter funktionieren als `baseURL`-Ersatz
- ✅ **70+ Anbieter** — global, Indien, China, Japan, Korea, Europa, Naher Osten, SEA
- ✅ **Maschinenlesbare Daten** — strukturiertes JSON in `data/providers.json`

---

## ⚡ So nutzen Sie es — 3 Schritte

**1. Anbieter wählen** — siehe [Anbieterverzeichnis](#-anbieterverzeichnis). Beginnen Sie mit **Groq** (keine Kreditkarte, 30 RPM kostenlos).

**2. API-Key holen** — auf einen `Holen →`-Link klicken, mit E-Mail registrieren, Key kopieren. Weniger als 1 Minute.

**3. Verbinden** — Base URL + Modell-ID in Ihr Tool einfügen.

---

## 🚀 Schnellstart — 30 Sekunden

### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",  # kostenlos, keine Kreditkarte
    api_key="IHR_GROQ_KEY",                      # erhalten Sie auf console.groq.com/keys
)

response = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[{"role": "user", "content": "Hallo!"}],
)
print(response.choices[0].message.content)
# Groq kostenlose Stufe: 30 RPM, 14.400 RPD
```

### curl

```bash
curl https://api.groq.com/openai/v1/chat/completions \
  -H "Authorization: Bearer $GROQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"llama-3.3-70b-versatile","messages":[{"role":"user","content":"Hallo!"}]}'
```

---

## 📋 Anbieterverzeichnis

### ⚡ Dauerhaft kostenlose Stufen

**Unbegrenzter kostenloser Zugang** (mit Ratenlimit) — kein Ablaufdatum.

| Anbieter | Karte? | Hinweise | Max. Kontext | Schlüssel holen |
|---|---|---|---|---|
| Groq | ✅ Nein | 30 RPM · 14.400 RPD | 262K | <a href="https://console.groq.com/keys" target="_blank" rel="noopener">Holen →</a> |
| GitHub Models | ✅ Nein | GitHub-Konto erforderlich | 1M | <a href="https://github.com/marketplace/models" target="_blank" rel="noopener">Holen →</a> |
| Google Gemini | ✅ Nein | 2M Token auf Flash | 2M | <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">Holen →</a> |
| Mistral AI | ✅ Nein | Kostenlose Stufe mit Limits | 256K | <a href="https://console.mistral.ai/api-keys" target="_blank" rel="noopener">Holen →</a> |
| Cerebras | ✅ Nein | Ultraschnelle Inferenz | 131K | <a href="https://cloud.cerebras.ai/" target="_blank" rel="noopener">Holen →</a> |
| Cohere | ✅ Nein | 20 Aufrufe/Min | 256K | <a href="https://dashboard.cohere.com/api-keys" target="_blank" rel="noopener">Holen →</a> |
| Hugging Face | ✅ Nein | Kostenlose Inferenz-API | 131K | <a href="https://huggingface.co/settings/tokens" target="_blank" rel="noopener">Holen →</a> |
| Cloudflare Workers AI | ✅ Nein | 10.000 Neuronen/Tag | 10M | <a href="https://dash.cloudflare.com/profile/api-tokens" target="_blank" rel="noopener">Holen →</a> |
| OpenRouter | 📧 E-Mail | 100+ kostenlose Modelle | 1M | <a href="https://openrouter.ai/workspaces/default/keys" target="_blank" rel="noopener">Holen →</a> |
| Chutes AI | ✅ Nein | Community-Gratisstufe | 131K | <a href="https://chutes.ai" target="_blank" rel="noopener">Holen →</a> |
| NVIDIA NIM | 📱 Telefon | 75+ Modelle | 1M | <a href="https://build.nvidia.com/settings/api-keys" target="_blank" rel="noopener">Holen →</a> |
| Zhipu AI | ✅ Nein | GLM-4.7-Flash & GLM-4.5-Flash kostenlos | 128K | <a href="https://open.bigmodel.cn" target="_blank" rel="noopener">Holen →</a> |

### 💰 Kostenloses Guthaben bei Registrierung

| Anbieter | Guthaben | Ablauf | Karte? | Schlüssel holen |
|---|---|---|---|---|
| xAI (Grok) | $25 | Monatlich | 📧 E-Mail | <a href="https://console.x.ai" target="_blank" rel="noopener">Holen →</a> |
| Modal | $30 | Monatlich | ✅ Nein | <a href="https://modal.com" target="_blank" rel="noopener">Holen →</a> |
| Hyperbolic | $10 | Nie | ✅ Nein | <a href="https://app.hyperbolic.xyz/settings" target="_blank" rel="noopener">Holen →</a> |
| Lambda AI | $10 | Nie | ✅ Nein | <a href="https://lambda.ai" target="_blank" rel="noopener">Holen →</a> |
| DeepSeek | $5 | Bei Registrierung | 📧 E-Mail | <a href="https://platform.deepseek.com/api_keys" target="_blank" rel="noopener">Holen →</a> |
| Anthropic | $5 | Nie | 💳 Ja | <a href="https://console.anthropic.com" target="_blank" rel="noopener">Holen →</a> |
| Together AI | $1 | Nie | ✅ Nein | <a href="https://api.together.ai/settings/api-keys" target="_blank" rel="noopener">Holen →</a> |
| Fireworks AI | $1 | Nie | ✅ Nein | <a href="https://app.fireworks.ai/settings/users/api-keys" target="_blank" rel="noopener">Holen →</a> |

---

<details>
<summary><strong>🇪🇺 Europäische Anbieter (11)</strong></summary>

| Anbieter | Land | Spezialität | Registrieren |
|---|---|---|---|
| Mistral AI | Frankreich | Europas führendes LLM | <a href="https://console.mistral.ai/api-keys" target="_blank" rel="noopener">→</a> |
| Aleph Alpha | Deutschland | Luminous-Modelle | <a href="https://aleph-alpha.com" target="_blank" rel="noopener">→</a> |
| DeepL API | Deutschland | Übersetzung — 500K Zeichen/Monat kostenlos | <a href="https://developers.deepl.com" target="_blank" rel="noopener">→</a> |
| ElevenLabs | Polen | Sprachsynthese | <a href="https://elevenlabs.io" target="_blank" rel="noopener">→</a> |
| Stability AI | Großbritannien | Bild/Audio/Video-Modelle | <a href="https://stability.ai" target="_blank" rel="noopener">→</a> |
| Scaleway AI | Frankreich | Llama & Mistral auf europäischer Cloud | <a href="https://www.scaleway.com" target="_blank" rel="noopener">→</a> |
| OVHcloud AI | Frankreich | Open-Source-Modelle | <a href="https://www.ovhcloud.com" target="_blank" rel="noopener">→</a> |
| LightOn | Frankreich | Alfred-Modelle | <a href="https://lighton.ai" target="_blank" rel="noopener">→</a> |
| Silo AI | Finnland | Poro-Modelle | <a href="https://www.silo.ai" target="_blank" rel="noopener">→</a> |
| PolyAI | Großbritannien | Konversations-KI | <a href="https://poly.ai" target="_blank" rel="noopener">→</a> |
| H Company | Frankreich | Französisches KI-Startup | <a href="https://hcompany.ai" target="_blank" rel="noopener">→</a> |

</details>

---

## 🤝 Beitragen

1. Dieses Repository **forken**
2. `data/providers.json` gemäß dem [Schema](data/schema.md) **bearbeiten**
3. **PR einreichen** mit kurzer Beschreibung

Weitere Details in [CONTRIBUTING.md](CONTRIBUTING.md).

---

<p align="center">
  <strong>Wenn das geholfen hat, bitte ⭐ das Repository markieren!</strong><br/>
  <a href="https://github.com/khushaljethava/freellm-apis">github.com/khushaljethava/freellm-apis</a>
</p>

---

MIT License · [LICENSE](LICENSE) · © 2026 freellm.site
