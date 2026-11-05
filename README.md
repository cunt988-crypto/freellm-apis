<p align="center">
  <h1 align="center">🆓 Free LLM APIs</h1>
  <p align="center"><strong>70+ free LLM API providers across 8 regions</strong> — find, compare & start calling AI models in seconds.</p>
</p>

<p align="center">
  <a href="https://www.freellm.site" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/🌐_Live_Site-freellm.site-6366f1?style=for-the-badge" alt="Live Site"/></a>
  <a href="https://github.com/khushaljethava/freellm-apis" target="_blank" rel="noopener"><img src="https://img.shields.io/github/stars/khushaljethava/freellm-apis?style=for-the-badge&color=f59e0b" alt="Stars"/></a>
  <a href="https://github.com/khushaljethava/freellm-apis/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge" alt="MIT License"/></a>
  <img src="https://img.shields.io/badge/Providers-70%2B-ec4899?style=for-the-badge" alt="70+ Providers"/>
  <img src="https://img.shields.io/badge/Updated-2026--06--28-3b82f6?style=for-the-badge" alt="Last Updated"/>
</p>

<p align="center">
  <a href="https://www.freellm.site" target="_blank" rel="noopener"><strong>🌐 freellm.site</strong></a> ·
  <a href="data/providers.json">providers.json</a> ·
  <a href="data/models.json">models.json</a> ·
  <a href="CONTRIBUTING.md">Contribute</a>
</p>

<p align="center">📊 <a href="https://www.freellm.site/state-of-free-llm-apis/?utm_source=github&utm_medium=readme"><strong>State of Free LLM APIs report</strong></a>: which free tiers need a card, which are permanent, and who has the biggest context windows</p>

<p align="center">
  <strong>English</strong> · <a href="README.zh.md">简体中文</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.es.md">Español</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.pt.md">Português</a> · <a href="README.ar.md">العربية</a> · <a href="README.fr.md">Français</a> · <a href="README.de.md">Deutsch</a> · <a href="README.ru.md">Русский</a>
</p>

---

## Why This Exists

Finding a free LLM API shouldn't mean hunting through dozens of websites, signing up on five platforms, or guessing which free tier still works.

This repo is a **structured, machine-readable directory** of every free LLM API — with credit card requirements, base URLs, and direct API key links. All in one place.

- ✅ **No-card options first** — clearly shows which providers need zero payment info
- ✅ **OpenAI-compatible** — every provider works as a drop-in `baseURL` replacement
- ✅ **70+ providers** — global, India, China, Japan, Korea, Europe, Middle East, SEA
- ✅ **Machine-readable** — structured JSON in `data/providers.json` for scripts & tools
- ✅ **Community-maintained** — PRs welcome to add or update providers

---

## ⚡ How to Use — 3 Steps

**1. Pick a provider** — see [Provider Directory](#-provider-directory) below. Start with **Groq** (no credit card, 30 RPM free).

**2. Get your API key** — click any `Get Key →` link, sign up (most need just an email), copy your key. Takes < 1 minute.

**3. Plug it in** — copy the base URL + model ID into your tool.

---

## 🚀 Quick Start — Use Any Free API in 30 Seconds

All providers below expose an **OpenAI-compatible endpoint**. Any tool that accepts `baseURL` + `apiKey` works.

### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",  # free, no credit card
    api_key="YOUR_GROQ_KEY",                     # get at console.groq.com/keys
)

response = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[{"role": "user", "content": "Hello!"}],
)
print(response.choices[0].message.content)
# Groq free tier: 30 RPM, 1,000 RPD
```

### Node.js (OpenAI SDK)

```javascript
import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.groq.com/openai/v1",  // free, no credit card
  apiKey: process.env.GROQ_API_KEY,            // get at console.groq.com/keys
});

const response = await client.chat.completions.create({
  model: "llama-3.3-70b-versatile",
  messages: [{ role: "user", content: "Hello!" }],
});
console.log(response.choices[0].message.content);
```

### curl

```bash
curl https://api.groq.com/openai/v1/chat/completions \
  -H "Authorization: Bearer $GROQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama-3.3-70b-versatile",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

### Claude Code / Cursor / Codex

```bash
# Point any OpenAI-compatible tool at a free provider:
export OPENAI_BASE_URL="https://api.groq.com/openai/v1"
export OPENAI_API_KEY="your-groq-key"  # console.groq.com/keys
```

> **Tip:** Swap `base_url` to any provider in the tables below — same code, different provider, zero cost.

---

## 📋 Provider Directory

> 🔗 **Click a provider name** for its page on [freellm.site](https://www.freellm.site/?utm_source=github&utm_medium=readme): every free model, per-model rate limits, a copy-paste code snippet, and comparisons.

### ⚡ Permanent Free Tiers

Providers with **unlimited free access** (rate-limited) — no time expiry.

<!-- BEGIN_PERMANENT -->
| Provider | Models | Card? | Max Context | Modalities | Last Verified | Get Key |
|---|---|---|---|---|---|---|
| [OpenRouter](https://www.freellm.site/providers/openrouter/?utm_source=github&utm_medium=readme) | 16 | 📧 Email | 1M | audio, code, image, text, video | 2026-11-05 | [Get Key →](https://openrouter.ai/workspaces/default/keys) |
| [Google Gemini](https://www.freellm.site/providers/google_gemini/?utm_source=github&utm_medium=readme) | 11 | ✅ No | 1M | audio, code, image, text, video | 2026-09-29 | [Get Key →](https://aistudio.google.com/app/apikey) |
| [OpenCode Zen](https://www.freellm.site/providers/opencode_zen/?utm_source=github&utm_medium=readme) | 10 | 📧 Email | 1M | audio, code, image, text, video | 2026-11-05 | [Get Key →](https://opencode.ai/auth) |
| [Groq](https://www.freellm.site/providers/groq/?utm_source=github&utm_medium=readme) | 9 | ✅ No | 131K | audio, code, image, text | 2026-09-29 | [Get Key →](https://console.groq.com/keys) |
| [Cloudflare Workers AI](https://www.freellm.site/providers/cloudflare/?utm_source=github&utm_medium=readme) | 8 | ✅ No | 1M | image, text | 2026-09-29 | [Get Key →](https://dash.cloudflare.com/profile/api-tokens) |
| [OVHcloud AI Endpoints](https://www.freellm.site/providers/ovhcloud_ai/?utm_source=github&utm_medium=readme) | 8 | ✅ No | 262K | embedding, image, text | 2026-09-29 | [Get Key →](https://endpoints.ai.cloud.ovh.net) |
| [ElevenLabs](https://www.freellm.site/providers/elevenlabs/?utm_source=github&utm_medium=readme) | 6 | ✅ No | — | audio, text | 2026-09-29 | [Get Key →](https://elevenlabs.io/app/sign-up) |
| [OrcaRouter](https://www.freellm.site/providers/orcarouter/?utm_source=github&utm_medium=readme) | 6 | 📧 Email | — | text | 2026-11-05 | [Get Key →](https://www.orcarouter.ai/models) |
| [Cohere](https://www.freellm.site/providers/cohere/?utm_source=github&utm_medium=readme) | 5 | ✅ No | 256K | image, text | 2026-09-29 | [Get Key →](https://dashboard.cohere.com/api-keys) |
| [NVIDIA NIM](https://www.freellm.site/providers/nvidia_nim/?utm_source=github&utm_medium=readme) | 5 | 📱 Phone | 1M | image, text | 2026-09-29 | [Get Key →](https://build.nvidia.com/settings/api-keys) |
| [SambaNova Cloud](https://www.freellm.site/providers/sambanova/?utm_source=github&utm_medium=readme) | 5 | 📧 Email | 131K | image, text, video | 2026-09-29 | [Get Key →](https://cloud.sambanova.ai/apis) |
| [Zhipu AI](https://www.freellm.site/providers/zhipu_ai/?utm_source=github&utm_medium=readme) | 5 | ✅ No | 200K | image, text | 2026-09-29 | [Get Key →](https://bigmodel.cn) |
| [ModelScope](https://www.freellm.site/providers/modelscope/?utm_source=github&utm_medium=readme) | 5 | 📧 Email | 1M | text | 2026-09-29 | [Get Key →](https://modelscope.cn/my/myaccesstoken) |
| [Zenmux](https://www.freellm.site/providers/zenmux/?utm_source=github&utm_medium=readme) | 5 | 📧 Email | 524K | audio, image, text, video | 2026-11-05 | [Get Key →](https://zenmux.ai) |
| [Mistral AI](https://www.freellm.site/providers/mistral/?utm_source=github&utm_medium=readme) | 4 | ✅ No | 256K | code, image, text | 2026-09-29 | [Get Key →](https://console.mistral.ai/api-keys) |
| [LLM7.io](https://www.freellm.site/providers/llm7/?utm_source=github&utm_medium=readme) | 4 | ✅ No | 400K | code, text | 2026-09-29 | [Get Key →](https://dash.llm7.io) |
| [AI Singapore (SEA-LION)](https://www.freellm.site/providers/ai_singapore/?utm_source=github&utm_medium=readme) | 4 | 📧 Email | 262K | embedding, text | 2026-09-29 | [Get Key →](https://playground.sea-lion.ai) |
| [Z.ai](https://www.freellm.site/providers/zai/?utm_source=github&utm_medium=readme) | 3 | ✅ No | 200K | code, image, text | 2026-11-05 | [Get Key →](https://z.ai/manage-apikey/apikey-list) |
| [SiliconFlow (CN)](https://www.freellm.site/providers/siliconflow_cn/?utm_source=github&utm_medium=readme) | 1 | 📧 Email | 262K | text | 2026-09-29 | [Get Key →](https://siliconflow.cn) |
| [SenseNova](https://www.freellm.site/providers/sensenova/?utm_source=github&utm_medium=readme) | 1 | 📱 Phone | — | image, text | 2026-09-29 | [Get Key →](https://platform.sensenova.cn/login) |
| [iFlytek Spark](https://www.freellm.site/providers/iflytek_spark/?utm_source=github&utm_medium=readme) | 1 | 📧 Email | 8K | text | 2026-09-29 | [Get Key →](https://console.xfyun.cn/services/cbm) |
| [Pollinations](https://www.freellm.site/providers/pollinations/?utm_source=github&utm_medium=readme) | 1 | ✅ No | 131K | code, text | 2026-11-05 | [Get Key →](https://enter.pollinations.ai) |
| AI4Bharat | 0 | ✅ No | — | text | 2026-06-28 | [Get Key →](https://ai4bharat.iitm.ac.in) |
| BharatGen | 0 | ✅ No | — | text | 2026-06-28 | [Get Key →](https://bharatgen.com) |
| Wrtn Technologies | 0 | ✅ No | — | text | 2026-06-28 | [Get Key →](https://wrtn.ai) |
| H Company | 0 | 📧 Email | — | text | 2026-09-29 | [Get Key →](https://portal.hcompany.ai) |
| DeepL API | 0 | ✅ No | — | text | 2026-09-29 | [Get Key →](https://developers.deepl.com) |
| Falcon (TII) | 0 | ✅ No | — | text | 2026-09-29 | [Get Key →](https://falconllm.tii.ae) |

<!-- END_PERMANENT -->

### 💰 Free Credits on Signup

Providers that give **trial credits** at registration — no monthly renewal needed.

<!-- BEGIN_CREDITS -->
| Provider | Credits (USD) | Expiry | Card? | Models | Last Verified | Get Key |
|---|---|---|---|---|---|---|
| [xAI (Grok)](https://www.freellm.site/providers/xai/?utm_source=github&utm_medium=readme) | $25 | monthly | 📧 Email | 5 | 2026-09-29 | [Get Key →](https://console.x.ai) |
| [Baichuan AI](https://www.freellm.site/providers/baichuan/?utm_source=github&utm_medium=readme) | $11 | 3 months | 📧 Email | 3 | 2026-09-29 | [Get Key →](https://platform.baichuan-ai.com) |
| [AI21 Labs](https://www.freellm.site/providers/ai21/?utm_source=github&utm_medium=readme) | $10 | 3 months | ✅ No | 2 | 2026-09-29 | [Get Key →](https://www.ai21.com) |
| [Novita AI](https://www.freellm.site/providers/novita_ai/?utm_source=github&utm_medium=readme) | $10 | 90 days | ✅ No | 5 | 2026-09-29 | [Get Key →](https://novita.ai) |
| [Upstage AI](https://www.freellm.site/providers/upstage_ai/?utm_source=github&utm_medium=readme) | $10 | never | ✅ No | 4 | 2026-09-29 | [Get Key →](https://console.upstage.ai) |
| [Cerebras](https://www.freellm.site/providers/cerebras/?utm_source=github&utm_medium=readme) | $5 | 30 days | 💳 Yes | 2 | 2026-09-29 | [Get Key →](https://cloud.cerebras.ai/) |
| [DeepSeek](https://www.freellm.site/providers/deepseek/?utm_source=github&utm_medium=readme) | $5 | on signup | 📧 Email | 2 | 2026-09-29 | [Get Key →](https://platform.deepseek.com/api_keys) |
| Nscale | $5 | on signup | 📧 Email | 0 | 2026-09-29 | [Get Key →](https://console.nscale.com/) |
| [Sarvam AI](https://www.freellm.site/providers/sarvam_ai/?utm_source=github&utm_medium=readme) | $1.1 | never | 📧 Email | 2 | 2026-09-29 | [Get Key →](https://dashboard.sarvam.ai) |
| [Fireworks AI](https://www.freellm.site/providers/fireworks/?utm_source=github&utm_medium=readme) | $1 | never | ✅ No | 3 | 2026-09-29 | [Get Key →](https://app.fireworks.ai/settings/users/api-keys) |
| [Nebius Token Factory](https://www.freellm.site/providers/nebius/?utm_source=github&utm_medium=readme) | $1 | 30 days | 💳 Yes | 2 | 2026-09-29 | [Get Key →](https://tokenfactory.nebius.com) |
| [SiliconFlow](https://www.freellm.site/providers/siliconflow/?utm_source=github&utm_medium=readme) | $1 | never | 📧 Email | 2 | 2026-09-29 | [Get Key →](https://cloud.siliconflow.com) |
| [Stability AI](https://www.freellm.site/providers/stability_ai/?utm_source=github&utm_medium=readme) | $0.25 | never | ✅ No | 3 | 2026-09-29 | [Get Key →](https://platform.stability.ai) |
| [Hugging Face](https://www.freellm.site/providers/huggingface/?utm_source=github&utm_medium=readme) | $0.1 | monthly | ✅ No | 6 | 2026-09-29 | [Get Key →](https://huggingface.co/settings/tokens) |
| Replicate | — | — | ✅ No | 0 | 2026-09-29 | [Get Key →](https://replicate.com) |
| Fal AI | — | varies (1 week to 1 year) | ✅ No | 0 | 2026-09-29 | [Get Key →](https://fal.ai) |
| [Vercel AI Gateway](https://www.freellm.site/providers/vercel_ai_gateway/?utm_source=github&utm_medium=readme) | — | monthly | 📧 Email | 3 | 2026-09-29 | [Get Key →](https://vercel.com/ai-gateway) |
| [Baseten](https://www.freellm.site/providers/baseten/?utm_source=github&utm_medium=readme) | — | never | ✅ No | 5 | 2026-09-29 | [Get Key →](https://app.baseten.co/signup) |
| Krutrim AI | — | never | 📧 Email | 0 | 2026-06-28 | [Get Key →](https://www.olakrutrim.com) |
| CoRover BharatGPT | — | never | 📧 Email | 0 | 2026-06-28 | [Get Key →](https://corover.ai) |
| Gnani.ai | — | never | 📧 Email | 0 | 2026-06-28 | [Get Key →](https://gnani.ai) |
| Soket AI | — | never | 📧 Email | 0 | 2026-06-28 | [Get Key →](https://soket.ai) |
| Neysa AI | — | never | 📧 Email | 0 | 2026-06-28 | [Get Key →](https://neysa.ai) |
| [Alibaba DashScope](https://www.freellm.site/providers/alibaba_dashscope/?utm_source=github&utm_medium=readme) | — | 90 days | ✅ No | 3 | 2026-09-29 | [Get Key →](https://bailian.console.aliyun.com) |
| [Alibaba Model Studio](https://www.freellm.site/providers/alibaba_model_studio/?utm_source=github&utm_medium=readme) | — | 90 days | 📧 Email | 3 | 2026-09-29 | [Get Key →](https://modelstudio.console.alibabacloud.com) |
| MiniMax | — | never | 📧 Email | 0 | 2026-06-28 | [Get Key →](https://platform.minimax.io) |
| [Tencent Hunyuan](https://www.freellm.site/providers/tencent_hunyuan/?utm_source=github&utm_medium=readme) | — | 1 year | 📧 Email | 3 | 2026-09-29 | [Get Key →](https://console.cloud.tencent.com/hunyuan) |
| [Baidu ERNIE](https://www.freellm.site/providers/baidu_ernie/?utm_source=github&utm_medium=readme) | — | 3 months | 📧 Email | 3 | 2026-09-29 | [Get Key →](https://console.bce.baidu.com/qianfan) |
| [StepFun](https://www.freellm.site/providers/stepfun/?utm_source=github&utm_medium=readme) | — | never | 📧 Email | 1 | 2026-09-29 | [Get Key →](https://platform.stepfun.com) |
| Volcengine Ark | — | — | 📧 Email | 0 | 2026-09-29 | [Get Key →](https://console.volcengine.com/ark) |
| Huawei Cloud Pangu | — | never | 📧 Email | 0 | 2026-06-28 | [Get Key →](https://www.huaweicloud.com) |
| [Naver HyperCLOVA X](https://www.freellm.site/providers/naver_hyperclova/?utm_source=github&utm_medium=readme) | — | never | 📧 Email | 3 | 2026-09-29 | [Get Key →](https://clovastudio.ncloud.com) |
| LG EXAONE | — | never | 📧 Email | 0 | 2026-09-29 | [Get Key →](https://www.lgresearch.ai) |
| SK Telecom A.X | — | never | 📧 Email | 0 | 2026-09-29 | [Get Key →](https://www.sktelecom.com) |
| LightOn | — | never | 📧 Email | 0 | 2026-09-29 | [Get Key →](https://lighton.ai/pricing) |
| [Scaleway AI](https://www.freellm.site/providers/scaleway_ai/?utm_source=github&utm_medium=readme) | — | never | 💳 Yes | 8 | 2026-09-29 | [Get Key →](https://console.scaleway.com/generative-api/models) |
| Inception AI | — | never | 📧 Email | 0 | 2026-06-28 | [Get Key →](https://inceptionai.ai) |
| GMI Cloud | — | never | 📧 Email | 0 | 2026-09-29 | [Get Key →](https://console.gmicloud.ai) |
| NCS AI | — | never | 📧 Email | 0 | 2026-06-28 | [Get Key →](https://www.ncs.co) |
| Sakana AI | — | never | 📧 Email | 0 | 2026-09-29 | [Get Key →](https://console.sakana.ai) |
| [Preferred Networks](https://www.freellm.site/providers/preferred_networks/?utm_source=github&utm_medium=readme) | — | 1 month | 📧 Email | 1 | 2026-09-29 | [Get Key →](https://plamo.preferredai.jp/api) |
| Fujitsu Kozuchi | — | never | 📧 Email | 0 | 2026-06-28 | [Get Key →](https://www.fujitsu.com/global/services/business-services/kozuchi) |
| NTT DATA AI | — | never | 📧 Email | 0 | 2026-06-28 | [Get Key →](https://www.nttdata.com/global/en/) |
| NEC Generative AI | — | never | 📧 Email | 0 | 2026-06-28 | [Get Key →](https://www.nec.com) |
| Rakuten AI | — | never | 📧 Email | 0 | 2026-09-29 | [Get Key →](https://global.rakuten.com/corp/) |

<!-- END_CREDITS -->

---

## 🔗 Quick Reference — Base URLs

<!-- BEGIN_BASE_URLS -->
| Provider | Base URL | Get Key |
|---|---|---|
| AI Singapore (SEA-LION) | `https://api.sea-lion.ai/v1` | [→](https://playground.sea-lion.ai) |
| AI21 Labs | `https://api.ai21.com/studio/v1` | [→](https://www.ai21.com) |
| AI4Bharat | `https://ai4bharat.iitm.ac.in` | [→](https://ai4bharat.iitm.ac.in) |
| Alibaba DashScope | `https://dashscope.aliyuncs.com/compatible-mode/v1` | [→](https://bailian.console.aliyun.com) |
| Alibaba Model Studio | `https://dashscope-intl.aliyuncs.com/compatible-mode/v1` | [→](https://modelstudio.console.alibabacloud.com) |
| Baichuan AI | `https://api.baichuan-ai.com/v1` | [→](https://platform.baichuan-ai.com) |
| Baidu ERNIE | `https://qianfan.baidubce.com/v2` | [→](https://console.bce.baidu.com/qianfan) |
| Baseten | `https://inference.baseten.co/v1` | [→](https://app.baseten.co/signup) |
| BharatGen | `https://bharatgen.com` | [→](https://bharatgen.com) |
| Cerebras | `https://api.cerebras.ai/v1` | [→](https://cloud.cerebras.ai/) |
| Cloudflare Workers AI | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/v1` | [→](https://dash.cloudflare.com/profile/api-tokens) |
| CoRover BharatGPT | `https://corover.ai` | [→](https://corover.ai) |
| Cohere | `https://api.cohere.ai/compatibility/v1` | [→](https://dashboard.cohere.com/api-keys) |
| DeepL API | `https://api-free.deepl.com/v2` | [→](https://developers.deepl.com) |
| DeepSeek | `https://api.deepseek.com/v1` | [→](https://platform.deepseek.com/api_keys) |
| ElevenLabs | `https://api.elevenlabs.io/v1` | [→](https://elevenlabs.io/app/sign-up) |
| Fal AI | `https://fal.run` | [→](https://fal.ai) |
| Falcon (TII) | `https://falconllm.tii.ae` | [→](https://falconllm.tii.ae) |
| Fireworks AI | `https://api.fireworks.ai/inference/v1` | [→](https://app.fireworks.ai/settings/users/api-keys) |
| Fujitsu Kozuchi | `https://www.fujitsu.com/global/services/business-services/kozuchi` | [→](https://www.fujitsu.com/global/services/business-services/kozuchi) |
| GMI Cloud | `https://api.gmi-serving.com/v1` | [→](https://console.gmicloud.ai) |
| Gnani.ai | `https://gnani.ai` | [→](https://gnani.ai) |
| Google Gemini | `https://generativelanguage.googleapis.com/v1beta/openai/` | [→](https://aistudio.google.com/app/apikey) |
| Groq | `https://api.groq.com/openai/v1` | [→](https://console.groq.com/keys) |
| H Company | `https://api.hcompany.ai/v1` | [→](https://portal.hcompany.ai) |
| Huawei Cloud Pangu | `https://infer-modelarts-cn-southwest-2.myhuaweicloud.com/v1` | [→](https://www.huaweicloud.com) |
| Hugging Face | `https://router.huggingface.co/v1` | [→](https://huggingface.co/settings/tokens) |
| Inception AI | `https://inceptionai.ai` | [→](https://inceptionai.ai) |
| Krutrim AI | `https://cloud.olakrutrim.com/v1` | [→](https://www.olakrutrim.com) |
| LG EXAONE | `https://www.lgresearch.ai` | [→](https://www.lgresearch.ai) |
| LLM7.io | `https://api.llm7.io/v1` | [→](https://dash.llm7.io) |
| LightOn | `https://api.lighton.ai/v3` | [→](https://lighton.ai/pricing) |
| MiniMax | `https://api.minimax.io/v1` | [→](https://platform.minimax.io) |
| Mistral AI | `https://api.mistral.ai/v1` | [→](https://console.mistral.ai/api-keys) |
| ModelScope | `https://api-inference.modelscope.cn/v1` | [→](https://modelscope.cn/my/myaccesstoken) |
| NCS AI | `https://www.ncs.co` | [→](https://www.ncs.co) |
| NEC Generative AI | `https://www.nec.com` | [→](https://www.nec.com) |
| NTT DATA AI | `https://www.nttdata.com/global/en/` | [→](https://www.nttdata.com/global/en/) |
| NVIDIA NIM | `https://integrate.api.nvidia.com/v1` | [→](https://build.nvidia.com/settings/api-keys) |
| Naver HyperCLOVA X | `https://clovastudio.stream.ntruss.com/v1/openai` | [→](https://clovastudio.ncloud.com) |
| Nebius Token Factory | `https://api.tokenfactory.nebius.com/v1` | [→](https://tokenfactory.nebius.com) |
| Neysa AI | `https://neysa.ai` | [→](https://neysa.ai) |
| Novita AI | `https://api.novita.ai/openai` | [→](https://novita.ai) |
| Nscale | `https://inference.api.nscale.com/v1` | [→](https://console.nscale.com/) |
| OVHcloud AI Endpoints | `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` | [→](https://endpoints.ai.cloud.ovh.net) |
| OpenCode Zen | `https://opencode.ai/zen/v1` | [→](https://opencode.ai/auth) |
| OpenRouter | `https://openrouter.ai/api/v1` | [→](https://openrouter.ai/workspaces/default/keys) |
| OrcaRouter | `https://api.orcarouter.ai/v1` | [→](https://www.orcarouter.ai/models) |
| Pollinations | `https://text.pollinations.ai/openai` | [→](https://enter.pollinations.ai) |
| Preferred Networks | `https://api.platform.preferredai.jp/v1` | [→](https://plamo.preferredai.jp/api) |
| Rakuten AI | `https://global.rakuten.com/corp/` | [→](https://global.rakuten.com/corp/) |
| Replicate | `https://api.replicate.com/v1` | [→](https://replicate.com) |
| SK Telecom A.X | `https://www.sktelecom.com` | [→](https://www.sktelecom.com) |
| Sakana AI | `https://api.sakana.ai/v1` | [→](https://console.sakana.ai) |
| SambaNova Cloud | `https://api.sambanova.ai/v1` | [→](https://cloud.sambanova.ai/apis) |
| Sarvam AI | `https://api.sarvam.ai/v1` | [→](https://dashboard.sarvam.ai) |
| Scaleway AI | `https://api.scaleway.ai/v1` | [→](https://console.scaleway.com/generative-api/models) |
| SenseNova | `https://token.sensenova.cn/v1` | [→](https://platform.sensenova.cn/login) |
| SiliconFlow | `https://api.siliconflow.com/v1` | [→](https://cloud.siliconflow.com) |
| SiliconFlow (CN) | `https://api.siliconflow.cn/v1` | [→](https://siliconflow.cn) |
| Soket AI | `https://soket.ai` | [→](https://soket.ai) |
| Stability AI | `https://api.stability.ai` | [→](https://platform.stability.ai) |
| StepFun | `https://api.stepfun.com/v1` | [→](https://platform.stepfun.com) |
| Tencent Hunyuan | `https://api.hunyuan.cloud.tencent.com/v1` | [→](https://console.cloud.tencent.com/hunyuan) |
| Upstage AI | `https://api.upstage.ai/v1` | [→](https://console.upstage.ai) |
| Vercel AI Gateway | `https://ai-gateway.vercel.sh/v1` | [→](https://vercel.com/ai-gateway) |
| Volcengine Ark | `https://ark.cn-beijing.volces.com/api/v3` | [→](https://console.volcengine.com/ark) |
| Wrtn Technologies | `https://wrtn.ai` | [→](https://wrtn.ai) |
| Z.ai | `https://api.z.ai/api/paas/v4` | [→](https://z.ai/manage-apikey/apikey-list) |
| Zenmux | `https://zenmux.ai/api/v1` | [→](https://zenmux.ai) |
| Zhipu AI | `https://open.bigmodel.cn/api/paas/v4` | [→](https://bigmodel.cn) |
| iFlytek Spark | `https://spark-api-open.xf-yun.com/v1` | [→](https://console.xfyun.cn/services/cbm) |
| xAI (Grok) | `https://api.x.ai/v1` | [→](https://console.x.ai) |

<!-- END_BASE_URLS -->

---

## 🎨 Free Image Generation APIs

Text-to-image APIs you can call for free, with the limits that actually apply. Full details: [freellm.site/free-image-generation-apis](https://www.freellm.site/free-image-generation-apis/) · data: [image_apis.json](data/image_apis.json)

<!-- BEGIN_IMAGE_APIS -->
| Provider | Free allowance | Card? | Recurring? | OpenAI-compatible | Get Key |
|---|---|---|---|---|---|
| Cloudflare Workers AI | 10,000 neurons/day, resets 00:00 UTC | ✅ No | Yes | No | [Get Key →](https://dash.cloudflare.com/profile/api-tokens) |
| Zhipu AI (CogView-3-Flash) | Free model; concurrency limited by account tier | ✅ No | Yes | Yes | [Get Key →](https://bigmodel.cn) |
| NVIDIA NIM | Trial credits on signup (prototyping only) | 📱 Phone | No | No | [Get Key →](https://build.nvidia.com/settings/api-keys) |
| Pollinations.ai | Free "Quest Pollen" balance; amount not published | 📧 Email | No | Yes | [Get Key →](https://enter.pollinations.ai/keys) |
| ModelScope API-Inference | Daily free Magicube balance (shared with LLM calls) | 📧 Email | Yes | Yes | [Get Key →](https://modelscope.cn/my/myaccesstoken) |
| SiliconFlow | $1 signup credit (international platform) | 📧 Email | No | Yes | [Get Key →](https://cloud.siliconflow.com) |
| Stability AI | 25 credits on signup (1 credit = $0.01) | ✅ No | No | No | [Get Key →](https://platform.stability.ai) |

**No longer free:** Google Gemini (Nano Banana), Together AI, Hugging Face Inference Providers.

<!-- END_IMAGE_APIS -->

---

## 🌍 Regional Providers

<!-- BEGIN_REGIONAL -->
<details>
<summary><strong>🇨🇳 China (14)</strong></summary>

| Provider | Card? | Free offer | Get Key |
|---|---|---|---|
| [ModelScope](https://www.freellm.site/providers/modelscope/?utm_source=github&utm_medium=readme) | 📧 Email | Free tier | [Get Key →](https://modelscope.cn/my/myaccesstoken) |
| [Zhipu AI](https://www.freellm.site/providers/zhipu_ai/?utm_source=github&utm_medium=readme) | ✅ No | Free tier | [Get Key →](https://bigmodel.cn) |
| [Alibaba DashScope](https://www.freellm.site/providers/alibaba_dashscope/?utm_source=github&utm_medium=readme) | ✅ No | Credits · 90 days | [Get Key →](https://bailian.console.aliyun.com) |
| [Alibaba Model Studio](https://www.freellm.site/providers/alibaba_model_studio/?utm_source=github&utm_medium=readme) | 📧 Email | Credits · 90 days | [Get Key →](https://modelstudio.console.alibabacloud.com) |
| [Baichuan AI](https://www.freellm.site/providers/baichuan/?utm_source=github&utm_medium=readme) | 📧 Email | $11 · 3 months | [Get Key →](https://platform.baichuan-ai.com) |
| [Baidu ERNIE](https://www.freellm.site/providers/baidu_ernie/?utm_source=github&utm_medium=readme) | 📧 Email | Credits · 3 months | [Get Key →](https://console.bce.baidu.com/qianfan) |
| [Tencent Hunyuan](https://www.freellm.site/providers/tencent_hunyuan/?utm_source=github&utm_medium=readme) | 📧 Email | Credits · 1 year | [Get Key →](https://console.cloud.tencent.com/hunyuan) |
| [SenseNova](https://www.freellm.site/providers/sensenova/?utm_source=github&utm_medium=readme) | 📱 Phone | Free tier | [Get Key →](https://platform.sensenova.cn/login) |
| [SiliconFlow (CN)](https://www.freellm.site/providers/siliconflow_cn/?utm_source=github&utm_medium=readme) | 📧 Email | Free tier | [Get Key →](https://siliconflow.cn) |
| [StepFun](https://www.freellm.site/providers/stepfun/?utm_source=github&utm_medium=readme) | 📧 Email | Credits · never | [Get Key →](https://platform.stepfun.com) |
| [iFlytek Spark](https://www.freellm.site/providers/iflytek_spark/?utm_source=github&utm_medium=readme) | 📧 Email | Free tier | [Get Key →](https://console.xfyun.cn/services/cbm) |
| Huawei Cloud Pangu | 📧 Email | Credits · never | [Get Key →](https://www.huaweicloud.com) |
| MiniMax | 📧 Email | Credits · never | [Get Key →](https://platform.minimax.io) |
| Volcengine Ark | 📧 Email | Credits | [Get Key →](https://console.volcengine.com/ark) |

</details>

<details>
<summary><strong>🇮🇳 India (8)</strong></summary>

| Provider | Card? | Free offer | Get Key |
|---|---|---|---|
| [Sarvam AI](https://www.freellm.site/providers/sarvam_ai/?utm_source=github&utm_medium=readme) | 📧 Email | $1.1 · never | [Get Key →](https://dashboard.sarvam.ai) |
| AI4Bharat | ✅ No | Free tier | [Get Key →](https://ai4bharat.iitm.ac.in) |
| BharatGen | ✅ No | Free tier | [Get Key →](https://bharatgen.com) |
| CoRover BharatGPT | 📧 Email | Credits · never | [Get Key →](https://corover.ai) |
| Gnani.ai | 📧 Email | Credits · never | [Get Key →](https://gnani.ai) |
| Krutrim AI | 📧 Email | Credits · never | [Get Key →](https://www.olakrutrim.com) |
| Neysa AI | 📧 Email | Credits · never | [Get Key →](https://neysa.ai) |
| Soket AI | 📧 Email | Credits · never | [Get Key →](https://soket.ai) |

</details>

<details>
<summary><strong>🇪🇺 Europe (7)</strong></summary>

| Provider | Card? | Free offer | Get Key |
|---|---|---|---|
| [OVHcloud AI Endpoints](https://www.freellm.site/providers/ovhcloud_ai/?utm_source=github&utm_medium=readme) | ✅ No | Free tier | [Get Key →](https://endpoints.ai.cloud.ovh.net) |
| [Scaleway AI](https://www.freellm.site/providers/scaleway_ai/?utm_source=github&utm_medium=readme) | 💳 Yes | Credits · never | [Get Key →](https://console.scaleway.com/generative-api/models) |
| [ElevenLabs](https://www.freellm.site/providers/elevenlabs/?utm_source=github&utm_medium=readme) | ✅ No | Free tier | [Get Key →](https://elevenlabs.io/app/sign-up) |
| [Stability AI](https://www.freellm.site/providers/stability_ai/?utm_source=github&utm_medium=readme) | ✅ No | $0.25 · never | [Get Key →](https://platform.stability.ai) |
| DeepL API | ✅ No | Free tier | [Get Key →](https://developers.deepl.com) |
| H Company | 📧 Email | Free tier | [Get Key →](https://portal.hcompany.ai) |
| LightOn | 📧 Email | Credits · never | [Get Key →](https://lighton.ai/pricing) |

</details>

<details>
<summary><strong>🇯🇵 Japan (6)</strong></summary>

| Provider | Card? | Free offer | Get Key |
|---|---|---|---|
| [Preferred Networks](https://www.freellm.site/providers/preferred_networks/?utm_source=github&utm_medium=readme) | 📧 Email | Credits · 1 month | [Get Key →](https://plamo.preferredai.jp/api) |
| Fujitsu Kozuchi | 📧 Email | Credits · never | [Get Key →](https://www.fujitsu.com/global/services/business-services/kozuchi) |
| NEC Generative AI | 📧 Email | Credits · never | [Get Key →](https://www.nec.com) |
| NTT DATA AI | 📧 Email | Credits · never | [Get Key →](https://www.nttdata.com/global/en/) |
| Rakuten AI | 📧 Email | Credits · never | [Get Key →](https://global.rakuten.com/corp/) |
| Sakana AI | 📧 Email | Credits · never | [Get Key →](https://console.sakana.ai) |

</details>

<details>
<summary><strong>🇰🇷 Korea (5)</strong></summary>

| Provider | Card? | Free offer | Get Key |
|---|---|---|---|
| [Upstage AI](https://www.freellm.site/providers/upstage_ai/?utm_source=github&utm_medium=readme) | ✅ No | $10 · never | [Get Key →](https://console.upstage.ai) |
| [Naver HyperCLOVA X](https://www.freellm.site/providers/naver_hyperclova/?utm_source=github&utm_medium=readme) | 📧 Email | Credits · never | [Get Key →](https://clovastudio.ncloud.com) |
| LG EXAONE | 📧 Email | Credits · never | [Get Key →](https://www.lgresearch.ai) |
| SK Telecom A.X | 📧 Email | Credits · never | [Get Key →](https://www.sktelecom.com) |
| Wrtn Technologies | ✅ No | Free tier | [Get Key →](https://wrtn.ai) |

</details>

<details>
<summary><strong>🇸🇬 Southeast Asia (3)</strong></summary>

| Provider | Card? | Free offer | Get Key |
|---|---|---|---|
| [AI Singapore (SEA-LION)](https://www.freellm.site/providers/ai_singapore/?utm_source=github&utm_medium=readme) | 📧 Email | Free tier | [Get Key →](https://playground.sea-lion.ai) |
| GMI Cloud | 📧 Email | Credits · never | [Get Key →](https://console.gmicloud.ai) |
| NCS AI | 📧 Email | Credits · never | [Get Key →](https://www.ncs.co) |

</details>

<details>
<summary><strong>🇦🇪 Middle East (2)</strong></summary>

| Provider | Card? | Free offer | Get Key |
|---|---|---|---|
| Falcon (TII) | ✅ No | Free tier | [Get Key →](https://falconllm.tii.ae) |
| Inception AI | 📧 Email | Credits · never | [Get Key →](https://inceptionai.ai) |

</details>


<!-- END_REGIONAL -->

---

## 🗄️ Data Structure

All provider data lives in [`data/providers.json`](data/providers.json). Schema:

```jsonc
{
  "id": "groq",                          // unique slug
  "name": "Groq",                        // display name
  "region": "global",                    // global | india | china | japan | korea | europe | middle_east | sea
  "base_url": "https://api.groq.com/openai/v1",
  "signup_url": "https://console.groq.com/keys",
  "credit_card_required": "no",          // no | registration | phone | yes
  "free_type": "permanent",              // permanent | credits
  "credit_amount_usd": null,             // null for permanent tiers
  "credit_expiry": null,                 // null | "never" | "monthly" | "on signup"
  "notes": "30 RPM free tier",
  "last_verified": "2026-06-28"
}
```

---

## 🤝 Contributing

Contributions are welcome! To add or update a provider:

1. **Fork** this repository
2. **Edit** `data/providers.json` following the [schema](data/schema.md)
3. **Submit a PR** with a brief description

Please verify provider details on their official websites before submitting. See [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines.

---

## 📊 Stats

<p align="center">
  <img src="https://img.shields.io/badge/Total_Providers-70%2B-6366f1?style=flat-square" />
  <img src="https://img.shields.io/badge/Permanent_Free-20%2B-22c55e?style=flat-square" />
  <img src="https://img.shields.io/badge/Free_Credits-30%2B-f59e0b?style=flat-square" />
  <img src="https://img.shields.io/badge/Regions-8-ec4899?style=flat-square" />
  <img src="https://img.shields.io/badge/Last_Verified-2026--06--28-3b82f6?style=flat-square" />
</p>

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

## ⚠️ Disclaimer

This repository is community-maintained and information may become outdated. Always verify provider details on their official websites before using their APIs. Free tier limitations and offerings are subject to change without notice.

---

<p align="center">
  <strong>If this saved you time, please ⭐ star the repo!</strong><br/>
  <a href="https://github.com/khushaljethava/freellm-apis">github.com/khushaljethava/freellm-apis</a>
</p>
