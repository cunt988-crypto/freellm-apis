<p align="center">
  <h1 align="center">🆓 मुफ़्त LLM API डायरेक्टरी</h1>
  <p align="center"><strong>70+ प्रदाता · 8 क्षेत्र · स्थायी फ्री टियर + ट्रायल क्रेडिट</strong></p>
</p>

<p align="center">
  <a href="https://www.freellm.site" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/🌐_वेबसाइट-freellm.site-6366f1?style=for-the-badge" alt="वेबसाइट"/></a>
  <a href="https://github.com/khushaljethava/freellm-apis" target="_blank" rel="noopener"><img src="https://img.shields.io/github/stars/khushaljethava/freellm-apis?style=for-the-badge&color=f59e0b" alt="Stars"/></a>
  <img src="https://img.shields.io/badge/प्रदाता-70%2B-ec4899?style=for-the-badge" alt="70+ प्रदाता"/>
</p>

<p align="center">
  <a href="README.md">English</a> · <a href="README.zh.md">简体中文</a> · <strong>हिन्दी</strong> · <a href="README.es.md">Español</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.pt.md">Português</a> · <a href="README.ar.md">العربية</a> · <a href="README.fr.md">Français</a> · <a href="README.de.md">Deutsch</a> · <a href="README.ru.md">Русский</a>
</p>

---

## यह क्यों ज़रूरी है

मुफ़्त LLM API खोजने के लिए दर्जनों वेबसाइट खंगालना, पाँच प्लेटफ़ॉर्म पर साइनअप करना, या यह अनुमान लगाना नहीं होना चाहिए कि कौन सा फ्री टियर अभी भी काम करता है।

यह रिपोज़िटरी हर मुफ़्त LLM API की **संरचित, मशीन-पठनीय डायरेक्टरी** है — क्रेडिट कार्ड की ज़रूरतें, Base URL और सीधे API Key लिंक के साथ।

- ✅ **बिना कार्ड वाले विकल्प पहले** — कौन से प्रदाता को कोई भुगतान जानकारी नहीं चाहिए, यह स्पष्ट रूप से दिखाता है
- ✅ **OpenAI-संगत** — हर प्रदाता `baseURL` प्रतिस्थापन के रूप में काम करता है
- ✅ **70+ प्रदाता** — वैश्विक, भारत, चीन, जापान, कोरिया, यूरोप, मध्य पूर्व, SEA
- ✅ **मशीन-पठनीय डेटा** — स्क्रिप्ट और टूल के लिए `data/providers.json` में JSON

---

## ⚡ तीन चरण में शुरुआत

**1. प्रदाता चुनें** — नीचे [प्रदाता डायरेक्टरी](#-प्रदाता-डायरेक्टरी) देखें। शुरुआत **Groq** से करें (कोई क्रेडिट कार्ड नहीं, 30 RPM मुफ़्त)।

**2. API Key प्राप्त करें** — कोई भी `प्राप्त करें →` लिंक क्लिक करें, ईमेल से साइनअप करें, Key कॉपी करें। 1 मिनट से कम।

**3. उपयोग शुरू करें** — Base URL + मॉडल ID अपने टूल में पेस्ट करें।

---

## 🚀 30 सेकंड में शुरू करें

### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",  # मुफ़्त, कोई क्रेडिट कार्ड नहीं
    api_key="YOUR_GROQ_KEY",                     # console.groq.com/keys पर प्राप्त करें
)

response = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[{"role": "user", "content": "नमस्ते!"}],
)
print(response.choices[0].message.content)
```

### curl

```bash
curl https://api.groq.com/openai/v1/chat/completions \
  -H "Authorization: Bearer $GROQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"llama-3.3-70b-versatile","messages":[{"role":"user","content":"नमस्ते!"}]}'
```

---

## 📋 प्रदाता डायरेक्टरी

### ⚡ स्थायी मुफ़्त टियर

**असीमित मुफ़्त एक्सेस** (रेट-लिमिटेड) — कोई समय सीमा नहीं।

<!-- BEGIN_PERMANENT -->
| प्रदाता | मॉडल | कार्ड? | अधिकतम संदर्भ | Key प्राप्त करें |
|---|---|---|---|---|
| [OpenRouter](https://www.freellm.site/hi/providers/openrouter/?utm_source=github&utm_medium=readme) | 16 | 📧 ईमेल | 1M | [प्राप्त करें →](https://openrouter.ai/workspaces/default/keys) |
| [Google Gemini](https://www.freellm.site/hi/providers/google_gemini/?utm_source=github&utm_medium=readme) | 11 | ✅ नहीं | 1M | [प्राप्त करें →](https://aistudio.google.com/app/apikey) |
| [OpenCode Zen](https://www.freellm.site/hi/providers/opencode_zen/?utm_source=github&utm_medium=readme) | 10 | 📧 ईमेल | 1M | [प्राप्त करें →](https://opencode.ai/auth) |
| [Groq](https://www.freellm.site/hi/providers/groq/?utm_source=github&utm_medium=readme) | 9 | ✅ नहीं | 131K | [प्राप्त करें →](https://console.groq.com/keys) |
| [Cloudflare Workers AI](https://www.freellm.site/hi/providers/cloudflare/?utm_source=github&utm_medium=readme) | 8 | ✅ नहीं | 1M | [प्राप्त करें →](https://dash.cloudflare.com/profile/api-tokens) |
| [OVHcloud AI Endpoints](https://www.freellm.site/hi/providers/ovhcloud_ai/?utm_source=github&utm_medium=readme) | 8 | ✅ नहीं | 262K | [प्राप्त करें →](https://endpoints.ai.cloud.ovh.net) |
| [ElevenLabs](https://www.freellm.site/hi/providers/elevenlabs/?utm_source=github&utm_medium=readme) | 6 | ✅ नहीं | — | [प्राप्त करें →](https://elevenlabs.io/app/sign-up) |
| [OrcaRouter](https://www.freellm.site/hi/providers/orcarouter/?utm_source=github&utm_medium=readme) | 6 | 📧 ईमेल | — | [प्राप्त करें →](https://www.orcarouter.ai/models) |
| [Cohere](https://www.freellm.site/hi/providers/cohere/?utm_source=github&utm_medium=readme) | 5 | ✅ नहीं | 256K | [प्राप्त करें →](https://dashboard.cohere.com/api-keys) |
| [NVIDIA NIM](https://www.freellm.site/hi/providers/nvidia_nim/?utm_source=github&utm_medium=readme) | 5 | 📱 फ़ोन | 1M | [प्राप्त करें →](https://build.nvidia.com/settings/api-keys) |
| [SambaNova Cloud](https://www.freellm.site/hi/providers/sambanova/?utm_source=github&utm_medium=readme) | 5 | 📧 ईमेल | 131K | [प्राप्त करें →](https://cloud.sambanova.ai/apis) |
| [Zhipu AI](https://www.freellm.site/hi/providers/zhipu_ai/?utm_source=github&utm_medium=readme) | 5 | ✅ नहीं | 200K | [प्राप्त करें →](https://bigmodel.cn) |
| [ModelScope](https://www.freellm.site/hi/providers/modelscope/?utm_source=github&utm_medium=readme) | 5 | 📧 ईमेल | 1M | [प्राप्त करें →](https://modelscope.cn/my/myaccesstoken) |
| [Zenmux](https://www.freellm.site/hi/providers/zenmux/?utm_source=github&utm_medium=readme) | 5 | 📧 ईमेल | 524K | [प्राप्त करें →](https://zenmux.ai) |
| [Mistral AI](https://www.freellm.site/hi/providers/mistral/?utm_source=github&utm_medium=readme) | 4 | ✅ नहीं | 256K | [प्राप्त करें →](https://console.mistral.ai/api-keys) |
| [LLM7.io](https://www.freellm.site/hi/providers/llm7/?utm_source=github&utm_medium=readme) | 4 | ✅ नहीं | 400K | [प्राप्त करें →](https://dash.llm7.io) |
| [AI Singapore (SEA-LION)](https://www.freellm.site/hi/providers/ai_singapore/?utm_source=github&utm_medium=readme) | 4 | 📧 ईमेल | 262K | [प्राप्त करें →](https://playground.sea-lion.ai) |
| [Z.ai](https://www.freellm.site/hi/providers/zai/?utm_source=github&utm_medium=readme) | 3 | ✅ नहीं | 200K | [प्राप्त करें →](https://z.ai/manage-apikey/apikey-list) |
| [SiliconFlow (CN)](https://www.freellm.site/hi/providers/siliconflow_cn/?utm_source=github&utm_medium=readme) | 1 | 📧 ईमेल | 262K | [प्राप्त करें →](https://siliconflow.cn) |
| [SenseNova](https://www.freellm.site/hi/providers/sensenova/?utm_source=github&utm_medium=readme) | 1 | 📱 फ़ोन | — | [प्राप्त करें →](https://platform.sensenova.cn/login) |
| [iFlytek Spark](https://www.freellm.site/hi/providers/iflytek_spark/?utm_source=github&utm_medium=readme) | 1 | 📧 ईमेल | 8K | [प्राप्त करें →](https://console.xfyun.cn/services/cbm) |
| [Pollinations](https://www.freellm.site/hi/providers/pollinations/?utm_source=github&utm_medium=readme) | 1 | ✅ नहीं | 131K | [प्राप्त करें →](https://enter.pollinations.ai) |
| AI4Bharat | 0 | ✅ नहीं | — | [प्राप्त करें →](https://ai4bharat.iitm.ac.in) |
| BharatGen | 0 | ✅ नहीं | — | [प्राप्त करें →](https://bharatgen.com) |
| Wrtn Technologies | 0 | ✅ नहीं | — | [प्राप्त करें →](https://wrtn.ai) |
| H Company | 0 | 📧 ईमेल | — | [प्राप्त करें →](https://portal.hcompany.ai) |
| DeepL API | 0 | ✅ नहीं | — | [प्राप्त करें →](https://developers.deepl.com) |
| Falcon (TII) | 0 | ✅ नहीं | — | [प्राप्त करें →](https://falconllm.tii.ae) |

<!-- END_PERMANENT -->

### 💰 साइनअप पर मुफ़्त क्रेडिट

<!-- BEGIN_CREDITS -->
| प्रदाता | क्रेडिट | वैधता | कार्ड? | Key प्राप्त करें |
|---|---|---|---|---|
| [xAI (Grok)](https://www.freellm.site/hi/providers/xai/?utm_source=github&utm_medium=readme) | $25 | monthly | 📧 ईमेल | [प्राप्त करें →](https://console.x.ai) |
| [Baichuan AI](https://www.freellm.site/hi/providers/baichuan/?utm_source=github&utm_medium=readme) | $11 | 3 months | 📧 ईमेल | [प्राप्त करें →](https://platform.baichuan-ai.com) |
| [AI21 Labs](https://www.freellm.site/hi/providers/ai21/?utm_source=github&utm_medium=readme) | $10 | 3 months | ✅ नहीं | [प्राप्त करें →](https://www.ai21.com) |
| [Novita AI](https://www.freellm.site/hi/providers/novita_ai/?utm_source=github&utm_medium=readme) | $10 | 90 days | ✅ नहीं | [प्राप्त करें →](https://novita.ai) |
| [Upstage AI](https://www.freellm.site/hi/providers/upstage_ai/?utm_source=github&utm_medium=readme) | $10 | never | ✅ नहीं | [प्राप्त करें →](https://console.upstage.ai) |
| [Cerebras](https://www.freellm.site/hi/providers/cerebras/?utm_source=github&utm_medium=readme) | $5 | 30 days | 💳 हाँ | [प्राप्त करें →](https://cloud.cerebras.ai/) |
| [DeepSeek](https://www.freellm.site/hi/providers/deepseek/?utm_source=github&utm_medium=readme) | $5 | on signup | 📧 ईमेल | [प्राप्त करें →](https://platform.deepseek.com/api_keys) |
| Nscale | $5 | on signup | 📧 ईमेल | [प्राप्त करें →](https://console.nscale.com/) |
| [Sarvam AI](https://www.freellm.site/hi/providers/sarvam_ai/?utm_source=github&utm_medium=readme) | $1.1 | never | 📧 ईमेल | [प्राप्त करें →](https://dashboard.sarvam.ai) |
| [Fireworks AI](https://www.freellm.site/hi/providers/fireworks/?utm_source=github&utm_medium=readme) | $1 | never | ✅ नहीं | [प्राप्त करें →](https://app.fireworks.ai/settings/users/api-keys) |
| [Nebius Token Factory](https://www.freellm.site/hi/providers/nebius/?utm_source=github&utm_medium=readme) | $1 | 30 days | 💳 हाँ | [प्राप्त करें →](https://tokenfactory.nebius.com) |
| [SiliconFlow](https://www.freellm.site/hi/providers/siliconflow/?utm_source=github&utm_medium=readme) | $1 | never | 📧 ईमेल | [प्राप्त करें →](https://cloud.siliconflow.com) |
| [Stability AI](https://www.freellm.site/hi/providers/stability_ai/?utm_source=github&utm_medium=readme) | $0.25 | never | ✅ नहीं | [प्राप्त करें →](https://platform.stability.ai) |
| [Hugging Face](https://www.freellm.site/hi/providers/huggingface/?utm_source=github&utm_medium=readme) | $0.1 | monthly | ✅ नहीं | [प्राप्त करें →](https://huggingface.co/settings/tokens) |
| Replicate | — | — | ✅ नहीं | [प्राप्त करें →](https://replicate.com) |
| Fal AI | — | varies (1 week to 1 year) | ✅ नहीं | [प्राप्त करें →](https://fal.ai) |
| [Vercel AI Gateway](https://www.freellm.site/hi/providers/vercel_ai_gateway/?utm_source=github&utm_medium=readme) | — | monthly | 📧 ईमेल | [प्राप्त करें →](https://vercel.com/ai-gateway) |
| [Baseten](https://www.freellm.site/hi/providers/baseten/?utm_source=github&utm_medium=readme) | — | never | ✅ नहीं | [प्राप्त करें →](https://app.baseten.co/signup) |
| Krutrim AI | — | never | 📧 ईमेल | [प्राप्त करें →](https://www.olakrutrim.com) |
| CoRover BharatGPT | — | never | 📧 ईमेल | [प्राप्त करें →](https://corover.ai) |
| Gnani.ai | — | never | 📧 ईमेल | [प्राप्त करें →](https://gnani.ai) |
| Soket AI | — | never | 📧 ईमेल | [प्राप्त करें →](https://soket.ai) |
| Neysa AI | — | never | 📧 ईमेल | [प्राप्त करें →](https://neysa.ai) |
| [Alibaba DashScope](https://www.freellm.site/hi/providers/alibaba_dashscope/?utm_source=github&utm_medium=readme) | — | 90 days | ✅ नहीं | [प्राप्त करें →](https://bailian.console.aliyun.com) |
| [Alibaba Model Studio](https://www.freellm.site/hi/providers/alibaba_model_studio/?utm_source=github&utm_medium=readme) | — | 90 days | 📧 ईमेल | [प्राप्त करें →](https://modelstudio.console.alibabacloud.com) |
| MiniMax | — | never | 📧 ईमेल | [प्राप्त करें →](https://platform.minimax.io) |
| [Tencent Hunyuan](https://www.freellm.site/hi/providers/tencent_hunyuan/?utm_source=github&utm_medium=readme) | — | 1 year | 📧 ईमेल | [प्राप्त करें →](https://console.cloud.tencent.com/hunyuan) |
| [Baidu ERNIE](https://www.freellm.site/hi/providers/baidu_ernie/?utm_source=github&utm_medium=readme) | — | 3 months | 📧 ईमेल | [प्राप्त करें →](https://console.bce.baidu.com/qianfan) |
| [StepFun](https://www.freellm.site/hi/providers/stepfun/?utm_source=github&utm_medium=readme) | — | never | 📧 ईमेल | [प्राप्त करें →](https://platform.stepfun.com) |
| Volcengine Ark | — | — | 📧 ईमेल | [प्राप्त करें →](https://console.volcengine.com/ark) |
| Huawei Cloud Pangu | — | never | 📧 ईमेल | [प्राप्त करें →](https://www.huaweicloud.com) |
| [Naver HyperCLOVA X](https://www.freellm.site/hi/providers/naver_hyperclova/?utm_source=github&utm_medium=readme) | — | never | 📧 ईमेल | [प्राप्त करें →](https://clovastudio.ncloud.com) |
| LG EXAONE | — | never | 📧 ईमेल | [प्राप्त करें →](https://www.lgresearch.ai) |
| SK Telecom A.X | — | never | 📧 ईमेल | [प्राप्त करें →](https://www.sktelecom.com) |
| LightOn | — | never | 📧 ईमेल | [प्राप्त करें →](https://lighton.ai/pricing) |
| [Scaleway AI](https://www.freellm.site/hi/providers/scaleway_ai/?utm_source=github&utm_medium=readme) | — | never | 💳 हाँ | [प्राप्त करें →](https://console.scaleway.com/generative-api/models) |
| Inception AI | — | never | 📧 ईमेल | [प्राप्त करें →](https://inceptionai.ai) |
| GMI Cloud | — | never | 📧 ईमेल | [प्राप्त करें →](https://console.gmicloud.ai) |
| NCS AI | — | never | 📧 ईमेल | [प्राप्त करें →](https://www.ncs.co) |
| Sakana AI | — | never | 📧 ईमेल | [प्राप्त करें →](https://console.sakana.ai) |
| [Preferred Networks](https://www.freellm.site/hi/providers/preferred_networks/?utm_source=github&utm_medium=readme) | — | 1 month | 📧 ईमेल | [प्राप्त करें →](https://plamo.preferredai.jp/api) |
| Fujitsu Kozuchi | — | never | 📧 ईमेल | [प्राप्त करें →](https://www.fujitsu.com/global/services/business-services/kozuchi) |
| NTT DATA AI | — | never | 📧 ईमेल | [प्राप्त करें →](https://www.nttdata.com/global/en/) |
| NEC Generative AI | — | never | 📧 ईमेल | [प्राप्त करें →](https://www.nec.com) |
| Rakuten AI | — | never | 📧 ईमेल | [प्राप्त करें →](https://global.rakuten.com/corp/) |

<!-- END_CREDITS -->

<!-- BEGIN_REGIONAL -->

---

### 🌍 क्षेत्रीय प्रदाता

<details>
<summary><strong>🇨🇳 चीन (14)</strong></summary>

| प्रदाता | कार्ड? | मुफ़्त ऑफ़र | Key प्राप्त करें |
|---|---|---|---|
| [ModelScope](https://www.freellm.site/hi/providers/modelscope/?utm_source=github&utm_medium=readme) | 📧 ईमेल | मुफ़्त टियर | [प्राप्त करें →](https://modelscope.cn/my/myaccesstoken) |
| [Zhipu AI](https://www.freellm.site/hi/providers/zhipu_ai/?utm_source=github&utm_medium=readme) | ✅ नहीं | मुफ़्त टियर | [प्राप्त करें →](https://bigmodel.cn) |
| [Alibaba DashScope](https://www.freellm.site/hi/providers/alibaba_dashscope/?utm_source=github&utm_medium=readme) | ✅ नहीं | क्रेडिट · 90 days | [प्राप्त करें →](https://bailian.console.aliyun.com) |
| [Alibaba Model Studio](https://www.freellm.site/hi/providers/alibaba_model_studio/?utm_source=github&utm_medium=readme) | 📧 ईमेल | क्रेडिट · 90 days | [प्राप्त करें →](https://modelstudio.console.alibabacloud.com) |
| [Baichuan AI](https://www.freellm.site/hi/providers/baichuan/?utm_source=github&utm_medium=readme) | 📧 ईमेल | $11 · 3 months | [प्राप्त करें →](https://platform.baichuan-ai.com) |
| [Baidu ERNIE](https://www.freellm.site/hi/providers/baidu_ernie/?utm_source=github&utm_medium=readme) | 📧 ईमेल | क्रेडिट · 3 months | [प्राप्त करें →](https://console.bce.baidu.com/qianfan) |
| [Tencent Hunyuan](https://www.freellm.site/hi/providers/tencent_hunyuan/?utm_source=github&utm_medium=readme) | 📧 ईमेल | क्रेडिट · 1 year | [प्राप्त करें →](https://console.cloud.tencent.com/hunyuan) |
| [SenseNova](https://www.freellm.site/hi/providers/sensenova/?utm_source=github&utm_medium=readme) | 📱 फ़ोन | मुफ़्त टियर | [प्राप्त करें →](https://platform.sensenova.cn/login) |
| [SiliconFlow (CN)](https://www.freellm.site/hi/providers/siliconflow_cn/?utm_source=github&utm_medium=readme) | 📧 ईमेल | मुफ़्त टियर | [प्राप्त करें →](https://siliconflow.cn) |
| [StepFun](https://www.freellm.site/hi/providers/stepfun/?utm_source=github&utm_medium=readme) | 📧 ईमेल | क्रेडिट · never | [प्राप्त करें →](https://platform.stepfun.com) |
| [iFlytek Spark](https://www.freellm.site/hi/providers/iflytek_spark/?utm_source=github&utm_medium=readme) | 📧 ईमेल | मुफ़्त टियर | [प्राप्त करें →](https://console.xfyun.cn/services/cbm) |
| Huawei Cloud Pangu | 📧 ईमेल | क्रेडिट · never | [प्राप्त करें →](https://www.huaweicloud.com) |
| MiniMax | 📧 ईमेल | क्रेडिट · never | [प्राप्त करें →](https://platform.minimax.io) |
| Volcengine Ark | 📧 ईमेल | क्रेडिट | [प्राप्त करें →](https://console.volcengine.com/ark) |

</details>

<details>
<summary><strong>🇮🇳 भारत (8)</strong></summary>

| प्रदाता | कार्ड? | मुफ़्त ऑफ़र | Key प्राप्त करें |
|---|---|---|---|
| [Sarvam AI](https://www.freellm.site/hi/providers/sarvam_ai/?utm_source=github&utm_medium=readme) | 📧 ईमेल | $1.1 · never | [प्राप्त करें →](https://dashboard.sarvam.ai) |
| AI4Bharat | ✅ नहीं | मुफ़्त टियर | [प्राप्त करें →](https://ai4bharat.iitm.ac.in) |
| BharatGen | ✅ नहीं | मुफ़्त टियर | [प्राप्त करें →](https://bharatgen.com) |
| CoRover BharatGPT | 📧 ईमेल | क्रेडिट · never | [प्राप्त करें →](https://corover.ai) |
| Gnani.ai | 📧 ईमेल | क्रेडिट · never | [प्राप्त करें →](https://gnani.ai) |
| Krutrim AI | 📧 ईमेल | क्रेडिट · never | [प्राप्त करें →](https://www.olakrutrim.com) |
| Neysa AI | 📧 ईमेल | क्रेडिट · never | [प्राप्त करें →](https://neysa.ai) |
| Soket AI | 📧 ईमेल | क्रेडिट · never | [प्राप्त करें →](https://soket.ai) |

</details>

<details>
<summary><strong>🇪🇺 यूरोप (7)</strong></summary>

| प्रदाता | कार्ड? | मुफ़्त ऑफ़र | Key प्राप्त करें |
|---|---|---|---|
| [OVHcloud AI Endpoints](https://www.freellm.site/hi/providers/ovhcloud_ai/?utm_source=github&utm_medium=readme) | ✅ नहीं | मुफ़्त टियर | [प्राप्त करें →](https://endpoints.ai.cloud.ovh.net) |
| [Scaleway AI](https://www.freellm.site/hi/providers/scaleway_ai/?utm_source=github&utm_medium=readme) | 💳 हाँ | क्रेडिट · never | [प्राप्त करें →](https://console.scaleway.com/generative-api/models) |
| [ElevenLabs](https://www.freellm.site/hi/providers/elevenlabs/?utm_source=github&utm_medium=readme) | ✅ नहीं | मुफ़्त टियर | [प्राप्त करें →](https://elevenlabs.io/app/sign-up) |
| [Stability AI](https://www.freellm.site/hi/providers/stability_ai/?utm_source=github&utm_medium=readme) | ✅ नहीं | $0.25 · never | [प्राप्त करें →](https://platform.stability.ai) |
| DeepL API | ✅ नहीं | मुफ़्त टियर | [प्राप्त करें →](https://developers.deepl.com) |
| H Company | 📧 ईमेल | मुफ़्त टियर | [प्राप्त करें →](https://portal.hcompany.ai) |
| LightOn | 📧 ईमेल | क्रेडिट · never | [प्राप्त करें →](https://lighton.ai/pricing) |

</details>

<details>
<summary><strong>🇯🇵 जापान (6)</strong></summary>

| प्रदाता | कार्ड? | मुफ़्त ऑफ़र | Key प्राप्त करें |
|---|---|---|---|
| [Preferred Networks](https://www.freellm.site/hi/providers/preferred_networks/?utm_source=github&utm_medium=readme) | 📧 ईमेल | क्रेडिट · 1 month | [प्राप्त करें →](https://plamo.preferredai.jp/api) |
| Fujitsu Kozuchi | 📧 ईमेल | क्रेडिट · never | [प्राप्त करें →](https://www.fujitsu.com/global/services/business-services/kozuchi) |
| NEC Generative AI | 📧 ईमेल | क्रेडिट · never | [प्राप्त करें →](https://www.nec.com) |
| NTT DATA AI | 📧 ईमेल | क्रेडिट · never | [प्राप्त करें →](https://www.nttdata.com/global/en/) |
| Rakuten AI | 📧 ईमेल | क्रेडिट · never | [प्राप्त करें →](https://global.rakuten.com/corp/) |
| Sakana AI | 📧 ईमेल | क्रेडिट · never | [प्राप्त करें →](https://console.sakana.ai) |

</details>

<details>
<summary><strong>🇰🇷 कोरिया (5)</strong></summary>

| प्रदाता | कार्ड? | मुफ़्त ऑफ़र | Key प्राप्त करें |
|---|---|---|---|
| [Upstage AI](https://www.freellm.site/hi/providers/upstage_ai/?utm_source=github&utm_medium=readme) | ✅ नहीं | $10 · never | [प्राप्त करें →](https://console.upstage.ai) |
| [Naver HyperCLOVA X](https://www.freellm.site/hi/providers/naver_hyperclova/?utm_source=github&utm_medium=readme) | 📧 ईमेल | क्रेडिट · never | [प्राप्त करें →](https://clovastudio.ncloud.com) |
| LG EXAONE | 📧 ईमेल | क्रेडिट · never | [प्राप्त करें →](https://www.lgresearch.ai) |
| SK Telecom A.X | 📧 ईमेल | क्रेडिट · never | [प्राप्त करें →](https://www.sktelecom.com) |
| Wrtn Technologies | ✅ नहीं | मुफ़्त टियर | [प्राप्त करें →](https://wrtn.ai) |

</details>

<details>
<summary><strong>🇸🇬 दक्षिण-पूर्व एशिया (3)</strong></summary>

| प्रदाता | कार्ड? | मुफ़्त ऑफ़र | Key प्राप्त करें |
|---|---|---|---|
| [AI Singapore (SEA-LION)](https://www.freellm.site/hi/providers/ai_singapore/?utm_source=github&utm_medium=readme) | 📧 ईमेल | मुफ़्त टियर | [प्राप्त करें →](https://playground.sea-lion.ai) |
| GMI Cloud | 📧 ईमेल | क्रेडिट · never | [प्राप्त करें →](https://console.gmicloud.ai) |
| NCS AI | 📧 ईमेल | क्रेडिट · never | [प्राप्त करें →](https://www.ncs.co) |

</details>

<details>
<summary><strong>🇦🇪 मध्य पूर्व (2)</strong></summary>

| प्रदाता | कार्ड? | मुफ़्त ऑफ़र | Key प्राप्त करें |
|---|---|---|---|
| Falcon (TII) | ✅ नहीं | मुफ़्त टियर | [प्राप्त करें →](https://falconllm.tii.ae) |
| Inception AI | 📧 ईमेल | क्रेडिट · never | [प्राप्त करें →](https://inceptionai.ai) |

</details>


<!-- END_REGIONAL -->

---

## 🤝 योगदान

1. इस रिपोज़िटरी को **Fork** करें
2. `data/providers.json` को [schema](data/schema.md) के अनुसार **संपादित** करें
3. संक्षिप्त विवरण के साथ **PR सबमिट** करें

विस्तृत दिशानिर्देश के लिए [CONTRIBUTING.md](CONTRIBUTING.md) देखें।

---

<p align="center">
  <strong>अगर यह उपयोगी लगा तो ⭐ Star दें!</strong><br/>
  <a href="https://github.com/khushaljethava/freellm-apis">github.com/khushaljethava/freellm-apis</a>
</p>

---

MIT License · [LICENSE](LICENSE) · © 2026 freellm.site
