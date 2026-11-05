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

| प्रदाता | कार्ड? | नोट्स | अधिकतम संदर्भ | Key प्राप्त करें |
|---|---|---|---|---|
| Groq | ✅ नहीं | 30 RPM · 14,400 RPD | 262K | <a href="https://console.groq.com/keys" target="_blank" rel="noopener">प्राप्त करें →</a> |
| GitHub Models | ✅ नहीं | GitHub अकाउंट ज़रूरी | 1M | <a href="https://github.com/marketplace/models" target="_blank" rel="noopener">प्राप्त करें →</a> |
| Google Gemini | ✅ नहीं | Flash पर 2M टोकन | 2M | <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">प्राप्त करें →</a> |
| Mistral AI | ✅ नहीं | रेट-लिमिटेड फ्री टियर | 256K | <a href="https://console.mistral.ai/api-keys" target="_blank" rel="noopener">प्राप्त करें →</a> |
| Cerebras | ✅ नहीं | बहुत तेज़ इन्फरेंस | 131K | <a href="https://cloud.cerebras.ai/" target="_blank" rel="noopener">प्राप्त करें →</a> |
| Cohere | ✅ नहीं | 20 कॉल/मिनट | 256K | <a href="https://dashboard.cohere.com/api-keys" target="_blank" rel="noopener">प्राप्त करें →</a> |
| Hugging Face | ✅ नहीं | मुफ़्त इन्फरेंस API | 131K | <a href="https://huggingface.co/settings/tokens" target="_blank" rel="noopener">प्राप्त करें →</a> |
| Cloudflare Workers AI | ✅ नहीं | 10,000 neurons/दिन | 10M | <a href="https://dash.cloudflare.com/profile/api-tokens" target="_blank" rel="noopener">प्राप्त करें →</a> |
| OpenRouter | 📧 ईमेल | 100+ मुफ़्त मॉडल | 1M | <a href="https://openrouter.ai/workspaces/default/keys" target="_blank" rel="noopener">प्राप्त करें →</a> |
| Zhipu AI | ✅ नहीं | GLM-4.7-Flash और GLM-4.5-Flash मुफ़्त | 128K | <a href="https://open.bigmodel.cn" target="_blank" rel="noopener">प्राप्त करें →</a> |

### 💰 साइनअप पर मुफ़्त क्रेडिट

| प्रदाता | क्रेडिट | वैधता | कार्ड | Key प्राप्त करें |
|---|---|---|---|---|
| xAI (Grok) | $25 | हर महीने | 📧 ईमेल | <a href="https://console.x.ai" target="_blank" rel="noopener">प्राप्त करें →</a> |
| Modal | $30 | हर महीने | ✅ नहीं | <a href="https://modal.com" target="_blank" rel="noopener">प्राप्त करें →</a> |
| Hyperbolic | $10 | कभी नहीं | ✅ नहीं | <a href="https://app.hyperbolic.xyz/settings" target="_blank" rel="noopener">प्राप्त करें →</a> |
| Lambda AI | $10 | कभी नहीं | ✅ नहीं | <a href="https://lambda.ai" target="_blank" rel="noopener">प्राप्त करें →</a> |
| DeepSeek | $5 | साइनअप पर | 📧 ईमेल | <a href="https://platform.deepseek.com/api_keys" target="_blank" rel="noopener">प्राप्त करें →</a> |
| Together AI | $1 | कभी नहीं | ✅ नहीं | <a href="https://api.together.ai/settings/api-keys" target="_blank" rel="noopener">प्राप्त करें →</a> |
| Fireworks AI | $1 | कभी नहीं | ✅ नहीं | <a href="https://app.fireworks.ai/settings/users/api-keys" target="_blank" rel="noopener">प्राप्त करें →</a> |

---

## 🇮🇳 भारतीय AI प्रदाता

<details>
<summary><strong>9 भारतीय प्रदाता देखें</strong></summary>

| प्रदाता | विशेषता | साइनअप |
|---|---|---|
| Sarvam AI | भारतीय भाषा मॉडल | <a href="https://sarvam.ai" target="_blank" rel="noopener">→</a> |
| Krutrim AI | Ola का भारतीय LLM | <a href="https://www.olakrutrim.com" target="_blank" rel="noopener">→</a> |
| AI4Bharat | IIT मद्रास — रिसर्च API | <a href="https://ai4bharat.iitm.ac.in" target="_blank" rel="noopener">→</a> |
| BharatGen | IIT बॉम्बे — रिसर्च API | <a href="https://bharatgen.com" target="_blank" rel="noopener">→</a> |
| Hanooman AI | बहुभाषी भारतीय LLM | <a href="https://www.hanooman.ai" target="_blank" rel="noopener">→</a> |
| Soket AI | भारतीय LLM API | <a href="https://soket.ai" target="_blank" rel="noopener">→</a> |
| Neysa AI | AI क्लाउड प्लेटफ़ॉर्म | <a href="https://neysa.ai" target="_blank" rel="noopener">→</a> |
| CoRover BharatGPT | एंटरप्राइज़ AI | <a href="https://corover.ai" target="_blank" rel="noopener">→</a> |
| Gnani.ai | स्पीच और लैंग्वेज API | <a href="https://gnani.ai" target="_blank" rel="noopener">→</a> |

</details>

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
