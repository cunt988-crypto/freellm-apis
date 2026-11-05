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

<!-- BEGIN_PERMANENT -->
| Anbieter | Modelle | Karte? | Max. Kontext | Schlüssel holen |
|---|---|---|---|---|
| [OpenRouter](https://www.freellm.site/de/providers/openrouter/?utm_source=github&utm_medium=readme) | 16 | 📧 E-Mail | 1M | [Holen →](https://openrouter.ai/workspaces/default/keys) |
| [Google Gemini](https://www.freellm.site/de/providers/google_gemini/?utm_source=github&utm_medium=readme) | 11 | ✅ Nein | 1M | [Holen →](https://aistudio.google.com/app/apikey) |
| [OpenCode Zen](https://www.freellm.site/de/providers/opencode_zen/?utm_source=github&utm_medium=readme) | 10 | 📧 E-Mail | 1M | [Holen →](https://opencode.ai/auth) |
| [Groq](https://www.freellm.site/de/providers/groq/?utm_source=github&utm_medium=readme) | 9 | ✅ Nein | 131K | [Holen →](https://console.groq.com/keys) |
| [Cloudflare Workers AI](https://www.freellm.site/de/providers/cloudflare/?utm_source=github&utm_medium=readme) | 8 | ✅ Nein | 1M | [Holen →](https://dash.cloudflare.com/profile/api-tokens) |
| [OVHcloud AI Endpoints](https://www.freellm.site/de/providers/ovhcloud_ai/?utm_source=github&utm_medium=readme) | 8 | ✅ Nein | 262K | [Holen →](https://endpoints.ai.cloud.ovh.net) |
| [ElevenLabs](https://www.freellm.site/de/providers/elevenlabs/?utm_source=github&utm_medium=readme) | 6 | ✅ Nein | — | [Holen →](https://elevenlabs.io/app/sign-up) |
| [OrcaRouter](https://www.freellm.site/de/providers/orcarouter/?utm_source=github&utm_medium=readme) | 6 | 📧 E-Mail | — | [Holen →](https://www.orcarouter.ai/models) |
| [Cohere](https://www.freellm.site/de/providers/cohere/?utm_source=github&utm_medium=readme) | 5 | ✅ Nein | 256K | [Holen →](https://dashboard.cohere.com/api-keys) |
| [NVIDIA NIM](https://www.freellm.site/de/providers/nvidia_nim/?utm_source=github&utm_medium=readme) | 5 | 📱 Telefon | 1M | [Holen →](https://build.nvidia.com/settings/api-keys) |
| [SambaNova Cloud](https://www.freellm.site/de/providers/sambanova/?utm_source=github&utm_medium=readme) | 5 | 📧 E-Mail | 131K | [Holen →](https://cloud.sambanova.ai/apis) |
| [Zhipu AI](https://www.freellm.site/de/providers/zhipu_ai/?utm_source=github&utm_medium=readme) | 5 | ✅ Nein | 200K | [Holen →](https://bigmodel.cn) |
| [ModelScope](https://www.freellm.site/de/providers/modelscope/?utm_source=github&utm_medium=readme) | 5 | 📧 E-Mail | 1M | [Holen →](https://modelscope.cn/my/myaccesstoken) |
| [Zenmux](https://www.freellm.site/de/providers/zenmux/?utm_source=github&utm_medium=readme) | 5 | 📧 E-Mail | 524K | [Holen →](https://zenmux.ai) |
| [Mistral AI](https://www.freellm.site/de/providers/mistral/?utm_source=github&utm_medium=readme) | 4 | ✅ Nein | 256K | [Holen →](https://console.mistral.ai/api-keys) |
| [LLM7.io](https://www.freellm.site/de/providers/llm7/?utm_source=github&utm_medium=readme) | 4 | ✅ Nein | 400K | [Holen →](https://dash.llm7.io) |
| [AI Singapore (SEA-LION)](https://www.freellm.site/de/providers/ai_singapore/?utm_source=github&utm_medium=readme) | 4 | 📧 E-Mail | 262K | [Holen →](https://playground.sea-lion.ai) |
| [Z.ai](https://www.freellm.site/de/providers/zai/?utm_source=github&utm_medium=readme) | 3 | ✅ Nein | 200K | [Holen →](https://z.ai/manage-apikey/apikey-list) |
| [SiliconFlow (CN)](https://www.freellm.site/de/providers/siliconflow_cn/?utm_source=github&utm_medium=readme) | 1 | 📧 E-Mail | 262K | [Holen →](https://siliconflow.cn) |
| [SenseNova](https://www.freellm.site/de/providers/sensenova/?utm_source=github&utm_medium=readme) | 1 | 📱 Telefon | — | [Holen →](https://platform.sensenova.cn/login) |
| [iFlytek Spark](https://www.freellm.site/de/providers/iflytek_spark/?utm_source=github&utm_medium=readme) | 1 | 📧 E-Mail | 8K | [Holen →](https://console.xfyun.cn/services/cbm) |
| [Pollinations](https://www.freellm.site/de/providers/pollinations/?utm_source=github&utm_medium=readme) | 1 | ✅ Nein | 131K | [Holen →](https://enter.pollinations.ai) |
| AI4Bharat | 0 | ✅ Nein | — | [Holen →](https://ai4bharat.iitm.ac.in) |
| BharatGen | 0 | ✅ Nein | — | [Holen →](https://bharatgen.com) |
| Wrtn Technologies | 0 | ✅ Nein | — | [Holen →](https://wrtn.ai) |
| H Company | 0 | 📧 E-Mail | — | [Holen →](https://portal.hcompany.ai) |
| DeepL API | 0 | ✅ Nein | — | [Holen →](https://developers.deepl.com) |
| Falcon (TII) | 0 | ✅ Nein | — | [Holen →](https://falconllm.tii.ae) |

<!-- END_PERMANENT -->

### 💰 Kostenloses Guthaben bei Registrierung

<!-- BEGIN_CREDITS -->
| Anbieter | Guthaben | Ablauf | Karte? | Schlüssel holen |
|---|---|---|---|---|
| [xAI (Grok)](https://www.freellm.site/de/providers/xai/?utm_source=github&utm_medium=readme) | $25 | monthly | 📧 E-Mail | [Holen →](https://console.x.ai) |
| [Baichuan AI](https://www.freellm.site/de/providers/baichuan/?utm_source=github&utm_medium=readme) | $11 | 3 months | 📧 E-Mail | [Holen →](https://platform.baichuan-ai.com) |
| [AI21 Labs](https://www.freellm.site/de/providers/ai21/?utm_source=github&utm_medium=readme) | $10 | 3 months | ✅ Nein | [Holen →](https://www.ai21.com) |
| [Novita AI](https://www.freellm.site/de/providers/novita_ai/?utm_source=github&utm_medium=readme) | $10 | 90 days | ✅ Nein | [Holen →](https://novita.ai) |
| [Upstage AI](https://www.freellm.site/de/providers/upstage_ai/?utm_source=github&utm_medium=readme) | $10 | never | ✅ Nein | [Holen →](https://console.upstage.ai) |
| [Cerebras](https://www.freellm.site/de/providers/cerebras/?utm_source=github&utm_medium=readme) | $5 | 30 days | 💳 Ja | [Holen →](https://cloud.cerebras.ai/) |
| [DeepSeek](https://www.freellm.site/de/providers/deepseek/?utm_source=github&utm_medium=readme) | $5 | on signup | 📧 E-Mail | [Holen →](https://platform.deepseek.com/api_keys) |
| Nscale | $5 | on signup | 📧 E-Mail | [Holen →](https://console.nscale.com/) |
| [Sarvam AI](https://www.freellm.site/de/providers/sarvam_ai/?utm_source=github&utm_medium=readme) | $1.1 | never | 📧 E-Mail | [Holen →](https://dashboard.sarvam.ai) |
| [Fireworks AI](https://www.freellm.site/de/providers/fireworks/?utm_source=github&utm_medium=readme) | $1 | never | ✅ Nein | [Holen →](https://app.fireworks.ai/settings/users/api-keys) |
| [Nebius Token Factory](https://www.freellm.site/de/providers/nebius/?utm_source=github&utm_medium=readme) | $1 | 30 days | 💳 Ja | [Holen →](https://tokenfactory.nebius.com) |
| [SiliconFlow](https://www.freellm.site/de/providers/siliconflow/?utm_source=github&utm_medium=readme) | $1 | never | 📧 E-Mail | [Holen →](https://cloud.siliconflow.com) |
| [Stability AI](https://www.freellm.site/de/providers/stability_ai/?utm_source=github&utm_medium=readme) | $0.25 | never | ✅ Nein | [Holen →](https://platform.stability.ai) |
| [Hugging Face](https://www.freellm.site/de/providers/huggingface/?utm_source=github&utm_medium=readme) | $0.1 | monthly | ✅ Nein | [Holen →](https://huggingface.co/settings/tokens) |
| Replicate | — | — | ✅ Nein | [Holen →](https://replicate.com) |
| Fal AI | — | varies (1 week to 1 year) | ✅ Nein | [Holen →](https://fal.ai) |
| [Vercel AI Gateway](https://www.freellm.site/de/providers/vercel_ai_gateway/?utm_source=github&utm_medium=readme) | — | monthly | 📧 E-Mail | [Holen →](https://vercel.com/ai-gateway) |
| [Baseten](https://www.freellm.site/de/providers/baseten/?utm_source=github&utm_medium=readme) | — | never | ✅ Nein | [Holen →](https://app.baseten.co/signup) |
| Krutrim AI | — | never | 📧 E-Mail | [Holen →](https://www.olakrutrim.com) |
| CoRover BharatGPT | — | never | 📧 E-Mail | [Holen →](https://corover.ai) |
| Gnani.ai | — | never | 📧 E-Mail | [Holen →](https://gnani.ai) |
| Soket AI | — | never | 📧 E-Mail | [Holen →](https://soket.ai) |
| Neysa AI | — | never | 📧 E-Mail | [Holen →](https://neysa.ai) |
| [Alibaba DashScope](https://www.freellm.site/de/providers/alibaba_dashscope/?utm_source=github&utm_medium=readme) | — | 90 days | ✅ Nein | [Holen →](https://bailian.console.aliyun.com) |
| [Alibaba Model Studio](https://www.freellm.site/de/providers/alibaba_model_studio/?utm_source=github&utm_medium=readme) | — | 90 days | 📧 E-Mail | [Holen →](https://modelstudio.console.alibabacloud.com) |
| MiniMax | — | never | 📧 E-Mail | [Holen →](https://platform.minimax.io) |
| [Tencent Hunyuan](https://www.freellm.site/de/providers/tencent_hunyuan/?utm_source=github&utm_medium=readme) | — | 1 year | 📧 E-Mail | [Holen →](https://console.cloud.tencent.com/hunyuan) |
| [Baidu ERNIE](https://www.freellm.site/de/providers/baidu_ernie/?utm_source=github&utm_medium=readme) | — | 3 months | 📧 E-Mail | [Holen →](https://console.bce.baidu.com/qianfan) |
| [StepFun](https://www.freellm.site/de/providers/stepfun/?utm_source=github&utm_medium=readme) | — | never | 📧 E-Mail | [Holen →](https://platform.stepfun.com) |
| Volcengine Ark | — | — | 📧 E-Mail | [Holen →](https://console.volcengine.com/ark) |
| Huawei Cloud Pangu | — | never | 📧 E-Mail | [Holen →](https://www.huaweicloud.com) |
| [Naver HyperCLOVA X](https://www.freellm.site/de/providers/naver_hyperclova/?utm_source=github&utm_medium=readme) | — | never | 📧 E-Mail | [Holen →](https://clovastudio.ncloud.com) |
| LG EXAONE | — | never | 📧 E-Mail | [Holen →](https://www.lgresearch.ai) |
| SK Telecom A.X | — | never | 📧 E-Mail | [Holen →](https://www.sktelecom.com) |
| LightOn | — | never | 📧 E-Mail | [Holen →](https://lighton.ai/pricing) |
| [Scaleway AI](https://www.freellm.site/de/providers/scaleway_ai/?utm_source=github&utm_medium=readme) | — | never | 💳 Ja | [Holen →](https://console.scaleway.com/generative-api/models) |
| Inception AI | — | never | 📧 E-Mail | [Holen →](https://inceptionai.ai) |
| GMI Cloud | — | never | 📧 E-Mail | [Holen →](https://console.gmicloud.ai) |
| NCS AI | — | never | 📧 E-Mail | [Holen →](https://www.ncs.co) |
| Sakana AI | — | never | 📧 E-Mail | [Holen →](https://console.sakana.ai) |
| [Preferred Networks](https://www.freellm.site/de/providers/preferred_networks/?utm_source=github&utm_medium=readme) | — | 1 month | 📧 E-Mail | [Holen →](https://plamo.preferredai.jp/api) |
| Fujitsu Kozuchi | — | never | 📧 E-Mail | [Holen →](https://www.fujitsu.com/global/services/business-services/kozuchi) |
| NTT DATA AI | — | never | 📧 E-Mail | [Holen →](https://www.nttdata.com/global/en/) |
| NEC Generative AI | — | never | 📧 E-Mail | [Holen →](https://www.nec.com) |
| Rakuten AI | — | never | 📧 E-Mail | [Holen →](https://global.rakuten.com/corp/) |

<!-- END_CREDITS -->

<!-- BEGIN_REGIONAL -->

---

### 🌍 Regionale Anbieter

<details>
<summary><strong>🇨🇳 China (14)</strong></summary>

| Anbieter | Karte? | Gratis-Angebot | Schlüssel holen |
|---|---|---|---|
| [ModelScope](https://www.freellm.site/de/providers/modelscope/?utm_source=github&utm_medium=readme) | 📧 E-Mail | Gratis-Stufe | [Holen →](https://modelscope.cn/my/myaccesstoken) |
| [Zhipu AI](https://www.freellm.site/de/providers/zhipu_ai/?utm_source=github&utm_medium=readme) | ✅ Nein | Gratis-Stufe | [Holen →](https://bigmodel.cn) |
| [Alibaba DashScope](https://www.freellm.site/de/providers/alibaba_dashscope/?utm_source=github&utm_medium=readme) | ✅ Nein | Guthaben · 90 days | [Holen →](https://bailian.console.aliyun.com) |
| [Alibaba Model Studio](https://www.freellm.site/de/providers/alibaba_model_studio/?utm_source=github&utm_medium=readme) | 📧 E-Mail | Guthaben · 90 days | [Holen →](https://modelstudio.console.alibabacloud.com) |
| [Baichuan AI](https://www.freellm.site/de/providers/baichuan/?utm_source=github&utm_medium=readme) | 📧 E-Mail | $11 · 3 months | [Holen →](https://platform.baichuan-ai.com) |
| [Baidu ERNIE](https://www.freellm.site/de/providers/baidu_ernie/?utm_source=github&utm_medium=readme) | 📧 E-Mail | Guthaben · 3 months | [Holen →](https://console.bce.baidu.com/qianfan) |
| [Tencent Hunyuan](https://www.freellm.site/de/providers/tencent_hunyuan/?utm_source=github&utm_medium=readme) | 📧 E-Mail | Guthaben · 1 year | [Holen →](https://console.cloud.tencent.com/hunyuan) |
| [SenseNova](https://www.freellm.site/de/providers/sensenova/?utm_source=github&utm_medium=readme) | 📱 Telefon | Gratis-Stufe | [Holen →](https://platform.sensenova.cn/login) |
| [SiliconFlow (CN)](https://www.freellm.site/de/providers/siliconflow_cn/?utm_source=github&utm_medium=readme) | 📧 E-Mail | Gratis-Stufe | [Holen →](https://siliconflow.cn) |
| [StepFun](https://www.freellm.site/de/providers/stepfun/?utm_source=github&utm_medium=readme) | 📧 E-Mail | Guthaben · never | [Holen →](https://platform.stepfun.com) |
| [iFlytek Spark](https://www.freellm.site/de/providers/iflytek_spark/?utm_source=github&utm_medium=readme) | 📧 E-Mail | Gratis-Stufe | [Holen →](https://console.xfyun.cn/services/cbm) |
| Huawei Cloud Pangu | 📧 E-Mail | Guthaben · never | [Holen →](https://www.huaweicloud.com) |
| MiniMax | 📧 E-Mail | Guthaben · never | [Holen →](https://platform.minimax.io) |
| Volcengine Ark | 📧 E-Mail | Guthaben | [Holen →](https://console.volcengine.com/ark) |

</details>

<details>
<summary><strong>🇮🇳 Indien (8)</strong></summary>

| Anbieter | Karte? | Gratis-Angebot | Schlüssel holen |
|---|---|---|---|
| [Sarvam AI](https://www.freellm.site/de/providers/sarvam_ai/?utm_source=github&utm_medium=readme) | 📧 E-Mail | $1.1 · never | [Holen →](https://dashboard.sarvam.ai) |
| AI4Bharat | ✅ Nein | Gratis-Stufe | [Holen →](https://ai4bharat.iitm.ac.in) |
| BharatGen | ✅ Nein | Gratis-Stufe | [Holen →](https://bharatgen.com) |
| CoRover BharatGPT | 📧 E-Mail | Guthaben · never | [Holen →](https://corover.ai) |
| Gnani.ai | 📧 E-Mail | Guthaben · never | [Holen →](https://gnani.ai) |
| Krutrim AI | 📧 E-Mail | Guthaben · never | [Holen →](https://www.olakrutrim.com) |
| Neysa AI | 📧 E-Mail | Guthaben · never | [Holen →](https://neysa.ai) |
| Soket AI | 📧 E-Mail | Guthaben · never | [Holen →](https://soket.ai) |

</details>

<details>
<summary><strong>🇪🇺 Europa (7)</strong></summary>

| Anbieter | Karte? | Gratis-Angebot | Schlüssel holen |
|---|---|---|---|
| [OVHcloud AI Endpoints](https://www.freellm.site/de/providers/ovhcloud_ai/?utm_source=github&utm_medium=readme) | ✅ Nein | Gratis-Stufe | [Holen →](https://endpoints.ai.cloud.ovh.net) |
| [Scaleway AI](https://www.freellm.site/de/providers/scaleway_ai/?utm_source=github&utm_medium=readme) | 💳 Ja | Guthaben · never | [Holen →](https://console.scaleway.com/generative-api/models) |
| [ElevenLabs](https://www.freellm.site/de/providers/elevenlabs/?utm_source=github&utm_medium=readme) | ✅ Nein | Gratis-Stufe | [Holen →](https://elevenlabs.io/app/sign-up) |
| [Stability AI](https://www.freellm.site/de/providers/stability_ai/?utm_source=github&utm_medium=readme) | ✅ Nein | $0.25 · never | [Holen →](https://platform.stability.ai) |
| DeepL API | ✅ Nein | Gratis-Stufe | [Holen →](https://developers.deepl.com) |
| H Company | 📧 E-Mail | Gratis-Stufe | [Holen →](https://portal.hcompany.ai) |
| LightOn | 📧 E-Mail | Guthaben · never | [Holen →](https://lighton.ai/pricing) |

</details>

<details>
<summary><strong>🇯🇵 Japan (6)</strong></summary>

| Anbieter | Karte? | Gratis-Angebot | Schlüssel holen |
|---|---|---|---|
| [Preferred Networks](https://www.freellm.site/de/providers/preferred_networks/?utm_source=github&utm_medium=readme) | 📧 E-Mail | Guthaben · 1 month | [Holen →](https://plamo.preferredai.jp/api) |
| Fujitsu Kozuchi | 📧 E-Mail | Guthaben · never | [Holen →](https://www.fujitsu.com/global/services/business-services/kozuchi) |
| NEC Generative AI | 📧 E-Mail | Guthaben · never | [Holen →](https://www.nec.com) |
| NTT DATA AI | 📧 E-Mail | Guthaben · never | [Holen →](https://www.nttdata.com/global/en/) |
| Rakuten AI | 📧 E-Mail | Guthaben · never | [Holen →](https://global.rakuten.com/corp/) |
| Sakana AI | 📧 E-Mail | Guthaben · never | [Holen →](https://console.sakana.ai) |

</details>

<details>
<summary><strong>🇰🇷 Korea (5)</strong></summary>

| Anbieter | Karte? | Gratis-Angebot | Schlüssel holen |
|---|---|---|---|
| [Upstage AI](https://www.freellm.site/de/providers/upstage_ai/?utm_source=github&utm_medium=readme) | ✅ Nein | $10 · never | [Holen →](https://console.upstage.ai) |
| [Naver HyperCLOVA X](https://www.freellm.site/de/providers/naver_hyperclova/?utm_source=github&utm_medium=readme) | 📧 E-Mail | Guthaben · never | [Holen →](https://clovastudio.ncloud.com) |
| LG EXAONE | 📧 E-Mail | Guthaben · never | [Holen →](https://www.lgresearch.ai) |
| SK Telecom A.X | 📧 E-Mail | Guthaben · never | [Holen →](https://www.sktelecom.com) |
| Wrtn Technologies | ✅ Nein | Gratis-Stufe | [Holen →](https://wrtn.ai) |

</details>

<details>
<summary><strong>🇸🇬 Südostasien (3)</strong></summary>

| Anbieter | Karte? | Gratis-Angebot | Schlüssel holen |
|---|---|---|---|
| [AI Singapore (SEA-LION)](https://www.freellm.site/de/providers/ai_singapore/?utm_source=github&utm_medium=readme) | 📧 E-Mail | Gratis-Stufe | [Holen →](https://playground.sea-lion.ai) |
| GMI Cloud | 📧 E-Mail | Guthaben · never | [Holen →](https://console.gmicloud.ai) |
| NCS AI | 📧 E-Mail | Guthaben · never | [Holen →](https://www.ncs.co) |

</details>

<details>
<summary><strong>🇦🇪 Naher Osten (2)</strong></summary>

| Anbieter | Karte? | Gratis-Angebot | Schlüssel holen |
|---|---|---|---|
| Falcon (TII) | ✅ Nein | Gratis-Stufe | [Holen →](https://falconllm.tii.ae) |
| Inception AI | 📧 E-Mail | Guthaben · never | [Holen →](https://inceptionai.ai) |

</details>


<!-- END_REGIONAL -->

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
