<p align="center">
  <h1 align="center">🆓 دليل واجهات برمجة تطبيقات LLM المجانية</h1>
  <p align="center"><strong>70+ مزوداً · 8 مناطق · طبقات مجانية دائمة + أرصدة تجريبية</strong></p>
</p>

<p align="center">
  <a href="https://www.freellm.site" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/🌐_الموقع-freellm.site-6366f1?style=for-the-badge" alt="الموقع"/></a>
  <a href="https://github.com/khushaljethava/freellm-apis" target="_blank" rel="noopener"><img src="https://img.shields.io/github/stars/khushaljethava/freellm-apis?style=for-the-badge&color=f59e0b" alt="Stars"/></a>
  <img src="https://img.shields.io/badge/المزودون-70%2B-ec4899?style=for-the-badge" alt="70+ مزود"/>
</p>

<p align="center">
  <a href="README.md">English</a> · <a href="README.zh.md">简体中文</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.es.md">Español</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.pt.md">Português</a> · <strong>العربية</strong> · <a href="README.fr.md">Français</a> · <a href="README.de.md">Deutsch</a> · <a href="README.ru.md">Русский</a>
</p>

---

## لماذا يوجد هذا المشروع

لا ينبغي أن يعني إيجاد واجهة برمجة تطبيقات LLM مجانية البحث في عشرات المواقع، أو التسجيل في خمس منصات، أو التخمين بشأن الطبقات المجانية التي لا تزال تعمل.

هذا المستودع هو **دليل منظم وقابل للقراءة آلياً** لكل واجهة برمجة تطبيقات LLM مجانية — مع متطلبات بطاقة الائتمان وروابط API المباشرة.

- ✅ **خيارات بدون بطاقة أولاً** — يوضح أي المزودين لا يحتاجون إلى معلومات دفع
- ✅ **متوافق مع OpenAI** — كل مزود يعمل كبديل `baseURL`
- ✅ **70+ مزود** — عالمي، الهند، الصين، اليابان، كوريا، أوروبا، الشرق الأوسط، جنوب شرق آسيا
- ✅ **بيانات قابلة للقراءة آلياً** — JSON منظم في `data/providers.json`

---

## ⚡ كيفية الاستخدام — 3 خطوات

**1. اختر مزوداً** — انظر [دليل المزودين](#-دليل-المزودين) أدناه. ابدأ بـ **Groq** (بدون بطاقة ائتمان، 30 طلب/دقيقة مجاناً).

**2. احصل على مفتاح API** — انقر على أي رابط `احصل →`، سجّل بالبريد الإلكتروني وانسخ المفتاح. أقل من دقيقة.

**3. ابدأ الاستخدام** — الصق Base URL + معرف النموذج في أداتك.

---

## 🚀 البدء السريع — 30 ثانية

### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",  # مجاني، بدون بطاقة
    api_key="YOUR_GROQ_KEY",                     # احصل عليه من console.groq.com/keys
)

response = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[{"role": "user", "content": "مرحبا!"}],
)
print(response.choices[0].message.content)
# الطبقة المجانية من Groq: 30 طلب/دقيقة، 1,000 طلب/يوم
```

### curl

```bash
curl https://api.groq.com/openai/v1/chat/completions \
  -H "Authorization: Bearer $GROQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"llama-3.3-70b-versatile","messages":[{"role":"user","content":"مرحبا!"}]}'
```

---

## 📋 دليل المزودين

### ⚡ الطبقات المجانية الدائمة

**وصول مجاني غير محدود** (مع حد المعدل) — بدون انتهاء صلاحية.

<!-- BEGIN_PERMANENT -->
| المزود | النماذج | بطاقة؟ | أقصى سياق | احصل على المفتاح |
|---|---|---|---|---|
| [OpenRouter](https://www.freellm.site/ar/providers/openrouter/?utm_source=github&utm_medium=readme) | 16 | 📧 بريد | 1M | [احصل →](https://openrouter.ai/workspaces/default/keys) |
| [Google Gemini](https://www.freellm.site/ar/providers/google_gemini/?utm_source=github&utm_medium=readme) | 11 | ✅ لا | 1M | [احصل →](https://aistudio.google.com/app/apikey) |
| [OpenCode Zen](https://www.freellm.site/ar/providers/opencode_zen/?utm_source=github&utm_medium=readme) | 10 | 📧 بريد | 1M | [احصل →](https://opencode.ai/auth) |
| [Groq](https://www.freellm.site/ar/providers/groq/?utm_source=github&utm_medium=readme) | 9 | ✅ لا | 131K | [احصل →](https://console.groq.com/keys) |
| [Cloudflare Workers AI](https://www.freellm.site/ar/providers/cloudflare/?utm_source=github&utm_medium=readme) | 8 | ✅ لا | 1M | [احصل →](https://dash.cloudflare.com/profile/api-tokens) |
| [OVHcloud AI Endpoints](https://www.freellm.site/ar/providers/ovhcloud_ai/?utm_source=github&utm_medium=readme) | 8 | ✅ لا | 262K | [احصل →](https://endpoints.ai.cloud.ovh.net) |
| [ElevenLabs](https://www.freellm.site/ar/providers/elevenlabs/?utm_source=github&utm_medium=readme) | 6 | ✅ لا | — | [احصل →](https://elevenlabs.io/app/sign-up) |
| [OrcaRouter](https://www.freellm.site/ar/providers/orcarouter/?utm_source=github&utm_medium=readme) | 6 | 📧 بريد | — | [احصل →](https://www.orcarouter.ai/models) |
| [Cohere](https://www.freellm.site/ar/providers/cohere/?utm_source=github&utm_medium=readme) | 5 | ✅ لا | 256K | [احصل →](https://dashboard.cohere.com/api-keys) |
| [NVIDIA NIM](https://www.freellm.site/ar/providers/nvidia_nim/?utm_source=github&utm_medium=readme) | 5 | 📱 هاتف | 1M | [احصل →](https://build.nvidia.com/settings/api-keys) |
| [SambaNova Cloud](https://www.freellm.site/ar/providers/sambanova/?utm_source=github&utm_medium=readme) | 5 | 📧 بريد | 131K | [احصل →](https://cloud.sambanova.ai/apis) |
| [Zhipu AI](https://www.freellm.site/ar/providers/zhipu_ai/?utm_source=github&utm_medium=readme) | 5 | ✅ لا | 200K | [احصل →](https://bigmodel.cn) |
| [ModelScope](https://www.freellm.site/ar/providers/modelscope/?utm_source=github&utm_medium=readme) | 5 | 📧 بريد | 1M | [احصل →](https://modelscope.cn/my/myaccesstoken) |
| [Zenmux](https://www.freellm.site/ar/providers/zenmux/?utm_source=github&utm_medium=readme) | 5 | 📧 بريد | 524K | [احصل →](https://zenmux.ai) |
| [Mistral AI](https://www.freellm.site/ar/providers/mistral/?utm_source=github&utm_medium=readme) | 4 | ✅ لا | 256K | [احصل →](https://console.mistral.ai/api-keys) |
| [LLM7.io](https://www.freellm.site/ar/providers/llm7/?utm_source=github&utm_medium=readme) | 4 | ✅ لا | 400K | [احصل →](https://dash.llm7.io) |
| [AI Singapore (SEA-LION)](https://www.freellm.site/ar/providers/ai_singapore/?utm_source=github&utm_medium=readme) | 4 | 📧 بريد | 262K | [احصل →](https://playground.sea-lion.ai) |
| [Z.ai](https://www.freellm.site/ar/providers/zai/?utm_source=github&utm_medium=readme) | 3 | ✅ لا | 200K | [احصل →](https://z.ai/manage-apikey/apikey-list) |
| [SiliconFlow (CN)](https://www.freellm.site/ar/providers/siliconflow_cn/?utm_source=github&utm_medium=readme) | 1 | 📧 بريد | 262K | [احصل →](https://siliconflow.cn) |
| [SenseNova](https://www.freellm.site/ar/providers/sensenova/?utm_source=github&utm_medium=readme) | 1 | 📱 هاتف | — | [احصل →](https://platform.sensenova.cn/login) |
| [iFlytek Spark](https://www.freellm.site/ar/providers/iflytek_spark/?utm_source=github&utm_medium=readme) | 1 | 📧 بريد | 8K | [احصل →](https://console.xfyun.cn/services/cbm) |
| [Pollinations](https://www.freellm.site/ar/providers/pollinations/?utm_source=github&utm_medium=readme) | 1 | ✅ لا | 131K | [احصل →](https://enter.pollinations.ai) |
| AI4Bharat | 0 | ✅ لا | — | [احصل →](https://ai4bharat.iitm.ac.in) |
| BharatGen | 0 | ✅ لا | — | [احصل →](https://bharatgen.com) |
| Wrtn Technologies | 0 | ✅ لا | — | [احصل →](https://wrtn.ai) |
| H Company | 0 | 📧 بريد | — | [احصل →](https://portal.hcompany.ai) |
| DeepL API | 0 | ✅ لا | — | [احصل →](https://developers.deepl.com) |
| Falcon (TII) | 0 | ✅ لا | — | [احصل →](https://falconllm.tii.ae) |

<!-- END_PERMANENT -->

### 💰 أرصدة مجانية عند التسجيل

<!-- BEGIN_CREDITS -->
| المزود | الرصيد | انتهاء الصلاحية | بطاقة؟ | احصل على المفتاح |
|---|---|---|---|---|
| [xAI (Grok)](https://www.freellm.site/ar/providers/xai/?utm_source=github&utm_medium=readme) | $25 | monthly | 📧 بريد | [احصل →](https://console.x.ai) |
| [Baichuan AI](https://www.freellm.site/ar/providers/baichuan/?utm_source=github&utm_medium=readme) | $11 | 3 months | 📧 بريد | [احصل →](https://platform.baichuan-ai.com) |
| [AI21 Labs](https://www.freellm.site/ar/providers/ai21/?utm_source=github&utm_medium=readme) | $10 | 3 months | ✅ لا | [احصل →](https://www.ai21.com) |
| [Novita AI](https://www.freellm.site/ar/providers/novita_ai/?utm_source=github&utm_medium=readme) | $10 | 90 days | ✅ لا | [احصل →](https://novita.ai) |
| [Upstage AI](https://www.freellm.site/ar/providers/upstage_ai/?utm_source=github&utm_medium=readme) | $10 | never | ✅ لا | [احصل →](https://console.upstage.ai) |
| [Cerebras](https://www.freellm.site/ar/providers/cerebras/?utm_source=github&utm_medium=readme) | $5 | 30 days | 💳 نعم | [احصل →](https://cloud.cerebras.ai/) |
| [DeepSeek](https://www.freellm.site/ar/providers/deepseek/?utm_source=github&utm_medium=readme) | $5 | on signup | 📧 بريد | [احصل →](https://platform.deepseek.com/api_keys) |
| Nscale | $5 | on signup | 📧 بريد | [احصل →](https://console.nscale.com/) |
| [Sarvam AI](https://www.freellm.site/ar/providers/sarvam_ai/?utm_source=github&utm_medium=readme) | $1.1 | never | 📧 بريد | [احصل →](https://dashboard.sarvam.ai) |
| [Fireworks AI](https://www.freellm.site/ar/providers/fireworks/?utm_source=github&utm_medium=readme) | $1 | never | ✅ لا | [احصل →](https://app.fireworks.ai/settings/users/api-keys) |
| [Nebius Token Factory](https://www.freellm.site/ar/providers/nebius/?utm_source=github&utm_medium=readme) | $1 | 30 days | 💳 نعم | [احصل →](https://tokenfactory.nebius.com) |
| [SiliconFlow](https://www.freellm.site/ar/providers/siliconflow/?utm_source=github&utm_medium=readme) | $1 | never | 📧 بريد | [احصل →](https://cloud.siliconflow.com) |
| [Stability AI](https://www.freellm.site/ar/providers/stability_ai/?utm_source=github&utm_medium=readme) | $0.25 | never | ✅ لا | [احصل →](https://platform.stability.ai) |
| [Hugging Face](https://www.freellm.site/ar/providers/huggingface/?utm_source=github&utm_medium=readme) | $0.1 | monthly | ✅ لا | [احصل →](https://huggingface.co/settings/tokens) |
| Replicate | — | — | ✅ لا | [احصل →](https://replicate.com) |
| Fal AI | — | varies (1 week to 1 year) | ✅ لا | [احصل →](https://fal.ai) |
| [Vercel AI Gateway](https://www.freellm.site/ar/providers/vercel_ai_gateway/?utm_source=github&utm_medium=readme) | — | monthly | 📧 بريد | [احصل →](https://vercel.com/ai-gateway) |
| [Baseten](https://www.freellm.site/ar/providers/baseten/?utm_source=github&utm_medium=readme) | — | never | ✅ لا | [احصل →](https://app.baseten.co/signup) |
| Krutrim AI | — | never | 📧 بريد | [احصل →](https://www.olakrutrim.com) |
| CoRover BharatGPT | — | never | 📧 بريد | [احصل →](https://corover.ai) |
| Gnani.ai | — | never | 📧 بريد | [احصل →](https://gnani.ai) |
| Soket AI | — | never | 📧 بريد | [احصل →](https://soket.ai) |
| Neysa AI | — | never | 📧 بريد | [احصل →](https://neysa.ai) |
| [Alibaba DashScope](https://www.freellm.site/ar/providers/alibaba_dashscope/?utm_source=github&utm_medium=readme) | — | 90 days | ✅ لا | [احصل →](https://bailian.console.aliyun.com) |
| [Alibaba Model Studio](https://www.freellm.site/ar/providers/alibaba_model_studio/?utm_source=github&utm_medium=readme) | — | 90 days | 📧 بريد | [احصل →](https://modelstudio.console.alibabacloud.com) |
| MiniMax | — | never | 📧 بريد | [احصل →](https://platform.minimax.io) |
| [Tencent Hunyuan](https://www.freellm.site/ar/providers/tencent_hunyuan/?utm_source=github&utm_medium=readme) | — | 1 year | 📧 بريد | [احصل →](https://console.cloud.tencent.com/hunyuan) |
| [Baidu ERNIE](https://www.freellm.site/ar/providers/baidu_ernie/?utm_source=github&utm_medium=readme) | — | 3 months | 📧 بريد | [احصل →](https://console.bce.baidu.com/qianfan) |
| [StepFun](https://www.freellm.site/ar/providers/stepfun/?utm_source=github&utm_medium=readme) | — | never | 📧 بريد | [احصل →](https://platform.stepfun.com) |
| Volcengine Ark | — | — | 📧 بريد | [احصل →](https://console.volcengine.com/ark) |
| Huawei Cloud Pangu | — | never | 📧 بريد | [احصل →](https://www.huaweicloud.com) |
| [Naver HyperCLOVA X](https://www.freellm.site/ar/providers/naver_hyperclova/?utm_source=github&utm_medium=readme) | — | never | 📧 بريد | [احصل →](https://clovastudio.ncloud.com) |
| LG EXAONE | — | never | 📧 بريد | [احصل →](https://www.lgresearch.ai) |
| SK Telecom A.X | — | never | 📧 بريد | [احصل →](https://www.sktelecom.com) |
| LightOn | — | never | 📧 بريد | [احصل →](https://lighton.ai/pricing) |
| [Scaleway AI](https://www.freellm.site/ar/providers/scaleway_ai/?utm_source=github&utm_medium=readme) | — | never | 💳 نعم | [احصل →](https://console.scaleway.com/generative-api/models) |
| Inception AI | — | never | 📧 بريد | [احصل →](https://inceptionai.ai) |
| GMI Cloud | — | never | 📧 بريد | [احصل →](https://console.gmicloud.ai) |
| NCS AI | — | never | 📧 بريد | [احصل →](https://www.ncs.co) |
| Sakana AI | — | never | 📧 بريد | [احصل →](https://console.sakana.ai) |
| [Preferred Networks](https://www.freellm.site/ar/providers/preferred_networks/?utm_source=github&utm_medium=readme) | — | 1 month | 📧 بريد | [احصل →](https://plamo.preferredai.jp/api) |
| Fujitsu Kozuchi | — | never | 📧 بريد | [احصل →](https://www.fujitsu.com/global/services/business-services/kozuchi) |
| NTT DATA AI | — | never | 📧 بريد | [احصل →](https://www.nttdata.com/global/en/) |
| NEC Generative AI | — | never | 📧 بريد | [احصل →](https://www.nec.com) |
| Rakuten AI | — | never | 📧 بريد | [احصل →](https://global.rakuten.com/corp/) |

<!-- END_CREDITS -->

<!-- BEGIN_REGIONAL -->

---

### 🌍 المزودون الإقليميون

<details>
<summary><strong>🇨🇳 الصين (14)</strong></summary>

| المزود | بطاقة؟ | العرض المجاني | احصل على المفتاح |
|---|---|---|---|
| [ModelScope](https://www.freellm.site/ar/providers/modelscope/?utm_source=github&utm_medium=readme) | 📧 بريد | طبقة مجانية | [احصل →](https://modelscope.cn/my/myaccesstoken) |
| [Zhipu AI](https://www.freellm.site/ar/providers/zhipu_ai/?utm_source=github&utm_medium=readme) | ✅ لا | طبقة مجانية | [احصل →](https://bigmodel.cn) |
| [Alibaba DashScope](https://www.freellm.site/ar/providers/alibaba_dashscope/?utm_source=github&utm_medium=readme) | ✅ لا | الرصيد · 90 days | [احصل →](https://bailian.console.aliyun.com) |
| [Alibaba Model Studio](https://www.freellm.site/ar/providers/alibaba_model_studio/?utm_source=github&utm_medium=readme) | 📧 بريد | الرصيد · 90 days | [احصل →](https://modelstudio.console.alibabacloud.com) |
| [Baichuan AI](https://www.freellm.site/ar/providers/baichuan/?utm_source=github&utm_medium=readme) | 📧 بريد | $11 · 3 months | [احصل →](https://platform.baichuan-ai.com) |
| [Baidu ERNIE](https://www.freellm.site/ar/providers/baidu_ernie/?utm_source=github&utm_medium=readme) | 📧 بريد | الرصيد · 3 months | [احصل →](https://console.bce.baidu.com/qianfan) |
| [Tencent Hunyuan](https://www.freellm.site/ar/providers/tencent_hunyuan/?utm_source=github&utm_medium=readme) | 📧 بريد | الرصيد · 1 year | [احصل →](https://console.cloud.tencent.com/hunyuan) |
| [SenseNova](https://www.freellm.site/ar/providers/sensenova/?utm_source=github&utm_medium=readme) | 📱 هاتف | طبقة مجانية | [احصل →](https://platform.sensenova.cn/login) |
| [SiliconFlow (CN)](https://www.freellm.site/ar/providers/siliconflow_cn/?utm_source=github&utm_medium=readme) | 📧 بريد | طبقة مجانية | [احصل →](https://siliconflow.cn) |
| [StepFun](https://www.freellm.site/ar/providers/stepfun/?utm_source=github&utm_medium=readme) | 📧 بريد | الرصيد · never | [احصل →](https://platform.stepfun.com) |
| [iFlytek Spark](https://www.freellm.site/ar/providers/iflytek_spark/?utm_source=github&utm_medium=readme) | 📧 بريد | طبقة مجانية | [احصل →](https://console.xfyun.cn/services/cbm) |
| Huawei Cloud Pangu | 📧 بريد | الرصيد · never | [احصل →](https://www.huaweicloud.com) |
| MiniMax | 📧 بريد | الرصيد · never | [احصل →](https://platform.minimax.io) |
| Volcengine Ark | 📧 بريد | الرصيد | [احصل →](https://console.volcengine.com/ark) |

</details>

<details>
<summary><strong>🇮🇳 الهند (8)</strong></summary>

| المزود | بطاقة؟ | العرض المجاني | احصل على المفتاح |
|---|---|---|---|
| [Sarvam AI](https://www.freellm.site/ar/providers/sarvam_ai/?utm_source=github&utm_medium=readme) | 📧 بريد | $1.1 · never | [احصل →](https://dashboard.sarvam.ai) |
| AI4Bharat | ✅ لا | طبقة مجانية | [احصل →](https://ai4bharat.iitm.ac.in) |
| BharatGen | ✅ لا | طبقة مجانية | [احصل →](https://bharatgen.com) |
| CoRover BharatGPT | 📧 بريد | الرصيد · never | [احصل →](https://corover.ai) |
| Gnani.ai | 📧 بريد | الرصيد · never | [احصل →](https://gnani.ai) |
| Krutrim AI | 📧 بريد | الرصيد · never | [احصل →](https://www.olakrutrim.com) |
| Neysa AI | 📧 بريد | الرصيد · never | [احصل →](https://neysa.ai) |
| Soket AI | 📧 بريد | الرصيد · never | [احصل →](https://soket.ai) |

</details>

<details>
<summary><strong>🇪🇺 أوروبا (7)</strong></summary>

| المزود | بطاقة؟ | العرض المجاني | احصل على المفتاح |
|---|---|---|---|
| [OVHcloud AI Endpoints](https://www.freellm.site/ar/providers/ovhcloud_ai/?utm_source=github&utm_medium=readme) | ✅ لا | طبقة مجانية | [احصل →](https://endpoints.ai.cloud.ovh.net) |
| [Scaleway AI](https://www.freellm.site/ar/providers/scaleway_ai/?utm_source=github&utm_medium=readme) | 💳 نعم | الرصيد · never | [احصل →](https://console.scaleway.com/generative-api/models) |
| [ElevenLabs](https://www.freellm.site/ar/providers/elevenlabs/?utm_source=github&utm_medium=readme) | ✅ لا | طبقة مجانية | [احصل →](https://elevenlabs.io/app/sign-up) |
| [Stability AI](https://www.freellm.site/ar/providers/stability_ai/?utm_source=github&utm_medium=readme) | ✅ لا | $0.25 · never | [احصل →](https://platform.stability.ai) |
| DeepL API | ✅ لا | طبقة مجانية | [احصل →](https://developers.deepl.com) |
| H Company | 📧 بريد | طبقة مجانية | [احصل →](https://portal.hcompany.ai) |
| LightOn | 📧 بريد | الرصيد · never | [احصل →](https://lighton.ai/pricing) |

</details>

<details>
<summary><strong>🇯🇵 اليابان (6)</strong></summary>

| المزود | بطاقة؟ | العرض المجاني | احصل على المفتاح |
|---|---|---|---|
| [Preferred Networks](https://www.freellm.site/ar/providers/preferred_networks/?utm_source=github&utm_medium=readme) | 📧 بريد | الرصيد · 1 month | [احصل →](https://plamo.preferredai.jp/api) |
| Fujitsu Kozuchi | 📧 بريد | الرصيد · never | [احصل →](https://www.fujitsu.com/global/services/business-services/kozuchi) |
| NEC Generative AI | 📧 بريد | الرصيد · never | [احصل →](https://www.nec.com) |
| NTT DATA AI | 📧 بريد | الرصيد · never | [احصل →](https://www.nttdata.com/global/en/) |
| Rakuten AI | 📧 بريد | الرصيد · never | [احصل →](https://global.rakuten.com/corp/) |
| Sakana AI | 📧 بريد | الرصيد · never | [احصل →](https://console.sakana.ai) |

</details>

<details>
<summary><strong>🇰🇷 كوريا (5)</strong></summary>

| المزود | بطاقة؟ | العرض المجاني | احصل على المفتاح |
|---|---|---|---|
| [Upstage AI](https://www.freellm.site/ar/providers/upstage_ai/?utm_source=github&utm_medium=readme) | ✅ لا | $10 · never | [احصل →](https://console.upstage.ai) |
| [Naver HyperCLOVA X](https://www.freellm.site/ar/providers/naver_hyperclova/?utm_source=github&utm_medium=readme) | 📧 بريد | الرصيد · never | [احصل →](https://clovastudio.ncloud.com) |
| LG EXAONE | 📧 بريد | الرصيد · never | [احصل →](https://www.lgresearch.ai) |
| SK Telecom A.X | 📧 بريد | الرصيد · never | [احصل →](https://www.sktelecom.com) |
| Wrtn Technologies | ✅ لا | طبقة مجانية | [احصل →](https://wrtn.ai) |

</details>

<details>
<summary><strong>🇸🇬 جنوب شرق آسيا (3)</strong></summary>

| المزود | بطاقة؟ | العرض المجاني | احصل على المفتاح |
|---|---|---|---|
| [AI Singapore (SEA-LION)](https://www.freellm.site/ar/providers/ai_singapore/?utm_source=github&utm_medium=readme) | 📧 بريد | طبقة مجانية | [احصل →](https://playground.sea-lion.ai) |
| GMI Cloud | 📧 بريد | الرصيد · never | [احصل →](https://console.gmicloud.ai) |
| NCS AI | 📧 بريد | الرصيد · never | [احصل →](https://www.ncs.co) |

</details>

<details>
<summary><strong>🇦🇪 الشرق الأوسط (2)</strong></summary>

| المزود | بطاقة؟ | العرض المجاني | احصل على المفتاح |
|---|---|---|---|
| Falcon (TII) | ✅ لا | طبقة مجانية | [احصل →](https://falconllm.tii.ae) |
| Inception AI | 📧 بريد | الرصيد · never | [احصل →](https://inceptionai.ai) |

</details>


<!-- END_REGIONAL -->

---

## 🤝 المساهمة

1. **Fork** هذا المستودع
2. **عدّل** `data/providers.json` وفق [schema](data/schema.md)
3. **أرسل PR** مع وصف موجز

راجع [CONTRIBUTING.md](CONTRIBUTING.md) للتفاصيل.

---

<p align="center">
  <strong>إذا وفّر هذا وقتك، امنح المستودع ⭐ نجمة!</strong><br/>
  <a href="https://github.com/khushaljethava/freellm-apis">github.com/khushaljethava/freellm-apis</a>
</p>

---

MIT License · [LICENSE](LICENSE) · © 2026 freellm.site
