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
# الطبقة المجانية من Groq: 30 طلب/دقيقة، 14,400 طلب/يوم
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

| المزود | بطاقة؟ | ملاحظات | أقصى سياق | احصل على المفتاح |
|---|---|---|---|---|
| Groq | ✅ لا | 30 طلب/دقيقة · 14,400 طلب/يوم | 262K | <a href="https://console.groq.com/keys" target="_blank" rel="noopener">احصل →</a> |
| GitHub Models | ✅ لا | يتطلب حساب GitHub | 1M | <a href="https://github.com/marketplace/models" target="_blank" rel="noopener">احصل →</a> |
| Google Gemini | ✅ لا | 2 مليون رمز في Flash | 2M | <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">احصل →</a> |
| Mistral AI | ✅ لا | طبقة مجانية بحد معدل | 256K | <a href="https://console.mistral.ai/api-keys" target="_blank" rel="noopener">احصل →</a> |
| Cerebras | ✅ لا | استنتاج فائق السرعة | 131K | <a href="https://cloud.cerebras.ai/" target="_blank" rel="noopener">احصل →</a> |
| Cohere | ✅ لا | 20 استدعاء/دقيقة | 256K | <a href="https://dashboard.cohere.com/api-keys" target="_blank" rel="noopener">احصل →</a> |
| Hugging Face | ✅ لا | واجهة برمجة استنتاج مجانية | 131K | <a href="https://huggingface.co/settings/tokens" target="_blank" rel="noopener">احصل →</a> |
| Cloudflare Workers AI | ✅ لا | 10,000 نيورون/يوم | 10M | <a href="https://dash.cloudflare.com/profile/api-tokens" target="_blank" rel="noopener">احصل →</a> |
| OpenRouter | 📧 بريد | 100+ نموذج مجاني | 1M | <a href="https://openrouter.ai/workspaces/default/keys" target="_blank" rel="noopener">احصل →</a> |
| NVIDIA NIM | 📱 هاتف | 75+ نموذجاً | 1M | <a href="https://build.nvidia.com/settings/api-keys" target="_blank" rel="noopener">احصل →</a> |
| Zhipu AI | ✅ لا | GLM-4.7-Flash و GLM-4.5-Flash مجانًا | 128K | <a href="https://open.bigmodel.cn" target="_blank" rel="noopener">احصل →</a> |

### 💰 أرصدة مجانية عند التسجيل

| المزود | الرصيد | انتهاء الصلاحية | بطاقة؟ | احصل على المفتاح |
|---|---|---|---|---|
| xAI (Grok) | $25 | شهرياً | 📧 بريد | <a href="https://console.x.ai" target="_blank" rel="noopener">احصل →</a> |
| Modal | $30 | شهرياً | ✅ لا | <a href="https://modal.com" target="_blank" rel="noopener">احصل →</a> |
| Hyperbolic | $10 | لا تنتهي | ✅ لا | <a href="https://app.hyperbolic.xyz/settings" target="_blank" rel="noopener">احصل →</a> |
| Lambda AI | $10 | لا تنتهي | ✅ لا | <a href="https://lambda.ai" target="_blank" rel="noopener">احصل →</a> |
| DeepSeek | $5 | عند التسجيل | 📧 بريد | <a href="https://platform.deepseek.com/api_keys" target="_blank" rel="noopener">احصل →</a> |
| Together AI | $1 | لا تنتهي | ✅ لا | <a href="https://api.together.ai/settings/api-keys" target="_blank" rel="noopener">احصل →</a> |

---

<details>
<summary><strong>🇦🇪 مزودو الشرق الأوسط (4)</strong></summary>

| المزود | الميزة | التسجيل |
|---|---|---|
| Falcon (TII) | نماذج مفتوحة المصدر من الإمارات | <a href="https://falconllm.tii.ae" target="_blank" rel="noopener">→</a> |
| AI71 | نماذج Falcon مع واجهة API | <a href="https://ai71.ai" target="_blank" rel="noopener">→</a> |
| Inception AI | شركة ناشئة للذكاء الاصطناعي، الإمارات | <a href="https://inceptionai.ai" target="_blank" rel="noopener">→</a> |
| Core42 | نموذج JAIS العربي | <a href="https://core42.ai" target="_blank" rel="noopener">→</a> |

</details>

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
