<p align="center">
  <h1 align="center">🆓 Бесплатные LLM API</h1>
  <p align="center"><strong>70+ поставщиков · 8 регионов · Постоянные бесплатные уровни + пробные кредиты</strong></p>
</p>

<p align="center">
  <a href="https://www.freellm.site" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/🌐_Сайт-freellm.site-6366f1?style=for-the-badge" alt="Сайт"/></a>
  <a href="https://github.com/khushaljethava/freellm-apis" target="_blank" rel="noopener"><img src="https://img.shields.io/github/stars/khushaljethava/freellm-apis?style=for-the-badge&color=f59e0b" alt="Stars"/></a>
  <img src="https://img.shields.io/badge/Поставщики-70%2B-ec4899?style=for-the-badge" alt="70+ поставщиков"/>
</p>

<p align="center">
  <a href="README.md">English</a> · <a href="README.zh.md">简体中文</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.es.md">Español</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.pt.md">Português</a> · <a href="README.ar.md">العربية</a> · <a href="README.fr.md">Français</a> · <a href="README.de.md">Deutsch</a> · <strong>Русский</strong>
</p>

---

## Почему этот проект существует

Найти бесплатный LLM API не должно означать поиск по десяткам сайтов, регистрацию на пяти платформах или угадывание, какой бесплатный уровень ещё работает.

Этот репозиторий — **структурированный, машиночитаемый каталог** каждого бесплатного LLM API — с требованиями к кредитным картам, базовыми URL и прямыми ссылками на API-ключи.

- ✅ **Варианты без карты — в первую очередь** — чётко показывает, какие поставщики не требуют платёжных данных
- ✅ **Совместимость с OpenAI** — все поставщики работают как замена `baseURL`
- ✅ **70+ поставщиков** — глобальные, Индия, Китай, Япония, Корея, Европа, Ближний Восток, ЮВА
- ✅ **Машиночитаемые данные** — структурированный JSON в `data/providers.json`

---

## ⚡ Как использовать — 3 шага

**1. Выберите поставщика** — см. [Каталог поставщиков](#-каталог-поставщиков). Начните с **Groq** (без кредитной карты, 30 запросов/мин бесплатно).

**2. Получите API-ключ** — нажмите любую ссылку `Получить →`, зарегистрируйтесь по email, скопируйте ключ. Менее 1 минуты.

**3. Подключитесь** — вставьте Base URL + ID модели в свой инструмент.

---

## 🚀 Быстрый старт — 30 секунд

### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",  # бесплатно, без кредитной карты
    api_key="ВАШ_GROQ_КЛЮЧ",                    # получите на console.groq.com/keys
)

response = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[{"role": "user", "content": "Привет!"}],
)
print(response.choices[0].message.content)
# Бесплатный уровень Groq: 30 запросов/мин, 14 400 запросов/день
```

### curl

```bash
curl https://api.groq.com/openai/v1/chat/completions \
  -H "Authorization: Bearer $GROQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"llama-3.3-70b-versatile","messages":[{"role":"user","content":"Привет!"}]}'
```

---

## 📋 Каталог поставщиков

### ⚡ Постоянные бесплатные уровни

**Неограниченный бесплатный доступ** (с ограничением скорости) — без срока истечения.

<!-- BEGIN_PERMANENT -->
| Поставщик | Модели | Карта? | Макс. контекст | Получить ключ |
|---|---|---|---|---|
| [OpenRouter](https://www.freellm.site/ru/providers/openrouter/?utm_source=github&utm_medium=readme) | 16 | 📧 Email | 1M | [Получить →](https://openrouter.ai/workspaces/default/keys) |
| [Google Gemini](https://www.freellm.site/ru/providers/google_gemini/?utm_source=github&utm_medium=readme) | 11 | ✅ Нет | 1M | [Получить →](https://aistudio.google.com/app/apikey) |
| [OpenCode Zen](https://www.freellm.site/ru/providers/opencode_zen/?utm_source=github&utm_medium=readme) | 10 | 📧 Email | 1M | [Получить →](https://opencode.ai/auth) |
| [Groq](https://www.freellm.site/ru/providers/groq/?utm_source=github&utm_medium=readme) | 9 | ✅ Нет | 131K | [Получить →](https://console.groq.com/keys) |
| [Cloudflare Workers AI](https://www.freellm.site/ru/providers/cloudflare/?utm_source=github&utm_medium=readme) | 8 | ✅ Нет | 1M | [Получить →](https://dash.cloudflare.com/profile/api-tokens) |
| [OVHcloud AI Endpoints](https://www.freellm.site/ru/providers/ovhcloud_ai/?utm_source=github&utm_medium=readme) | 8 | ✅ Нет | 262K | [Получить →](https://endpoints.ai.cloud.ovh.net) |
| [ElevenLabs](https://www.freellm.site/ru/providers/elevenlabs/?utm_source=github&utm_medium=readme) | 6 | ✅ Нет | — | [Получить →](https://elevenlabs.io/app/sign-up) |
| [OrcaRouter](https://www.freellm.site/ru/providers/orcarouter/?utm_source=github&utm_medium=readme) | 6 | 📧 Email | — | [Получить →](https://www.orcarouter.ai/models) |
| [Cohere](https://www.freellm.site/ru/providers/cohere/?utm_source=github&utm_medium=readme) | 5 | ✅ Нет | 256K | [Получить →](https://dashboard.cohere.com/api-keys) |
| [NVIDIA NIM](https://www.freellm.site/ru/providers/nvidia_nim/?utm_source=github&utm_medium=readme) | 5 | 📱 Телефон | 1M | [Получить →](https://build.nvidia.com/settings/api-keys) |
| [SambaNova Cloud](https://www.freellm.site/ru/providers/sambanova/?utm_source=github&utm_medium=readme) | 5 | 📧 Email | 131K | [Получить →](https://cloud.sambanova.ai/apis) |
| [Zhipu AI](https://www.freellm.site/ru/providers/zhipu_ai/?utm_source=github&utm_medium=readme) | 5 | ✅ Нет | 200K | [Получить →](https://bigmodel.cn) |
| [ModelScope](https://www.freellm.site/ru/providers/modelscope/?utm_source=github&utm_medium=readme) | 5 | 📧 Email | 1M | [Получить →](https://modelscope.cn/my/myaccesstoken) |
| [Zenmux](https://www.freellm.site/ru/providers/zenmux/?utm_source=github&utm_medium=readme) | 5 | 📧 Email | 524K | [Получить →](https://zenmux.ai) |
| [Mistral AI](https://www.freellm.site/ru/providers/mistral/?utm_source=github&utm_medium=readme) | 4 | ✅ Нет | 256K | [Получить →](https://console.mistral.ai/api-keys) |
| [LLM7.io](https://www.freellm.site/ru/providers/llm7/?utm_source=github&utm_medium=readme) | 4 | ✅ Нет | 400K | [Получить →](https://dash.llm7.io) |
| [AI Singapore (SEA-LION)](https://www.freellm.site/ru/providers/ai_singapore/?utm_source=github&utm_medium=readme) | 4 | 📧 Email | 262K | [Получить →](https://playground.sea-lion.ai) |
| [Z.ai](https://www.freellm.site/ru/providers/zai/?utm_source=github&utm_medium=readme) | 3 | ✅ Нет | 200K | [Получить →](https://z.ai/manage-apikey/apikey-list) |
| [SiliconFlow (CN)](https://www.freellm.site/ru/providers/siliconflow_cn/?utm_source=github&utm_medium=readme) | 1 | 📧 Email | 262K | [Получить →](https://siliconflow.cn) |
| [SenseNova](https://www.freellm.site/ru/providers/sensenova/?utm_source=github&utm_medium=readme) | 1 | 📱 Телефон | — | [Получить →](https://platform.sensenova.cn/login) |
| [iFlytek Spark](https://www.freellm.site/ru/providers/iflytek_spark/?utm_source=github&utm_medium=readme) | 1 | 📧 Email | 8K | [Получить →](https://console.xfyun.cn/services/cbm) |
| [Pollinations](https://www.freellm.site/ru/providers/pollinations/?utm_source=github&utm_medium=readme) | 1 | ✅ Нет | 131K | [Получить →](https://enter.pollinations.ai) |
| AI4Bharat | 0 | ✅ Нет | — | [Получить →](https://ai4bharat.iitm.ac.in) |
| BharatGen | 0 | ✅ Нет | — | [Получить →](https://bharatgen.com) |
| Wrtn Technologies | 0 | ✅ Нет | — | [Получить →](https://wrtn.ai) |
| H Company | 0 | 📧 Email | — | [Получить →](https://portal.hcompany.ai) |
| DeepL API | 0 | ✅ Нет | — | [Получить →](https://developers.deepl.com) |
| Falcon (TII) | 0 | ✅ Нет | — | [Получить →](https://falconllm.tii.ae) |

<!-- END_PERMANENT -->

### 💰 Бесплатные кредиты при регистрации

<!-- BEGIN_CREDITS -->
| Поставщик | Кредиты | Срок | Карта? | Получить ключ |
|---|---|---|---|---|
| [xAI (Grok)](https://www.freellm.site/ru/providers/xai/?utm_source=github&utm_medium=readme) | $25 | monthly | 📧 Email | [Получить →](https://console.x.ai) |
| [Baichuan AI](https://www.freellm.site/ru/providers/baichuan/?utm_source=github&utm_medium=readme) | $11 | 3 months | 📧 Email | [Получить →](https://platform.baichuan-ai.com) |
| [AI21 Labs](https://www.freellm.site/ru/providers/ai21/?utm_source=github&utm_medium=readme) | $10 | 3 months | ✅ Нет | [Получить →](https://www.ai21.com) |
| [Novita AI](https://www.freellm.site/ru/providers/novita_ai/?utm_source=github&utm_medium=readme) | $10 | 90 days | ✅ Нет | [Получить →](https://novita.ai) |
| [Upstage AI](https://www.freellm.site/ru/providers/upstage_ai/?utm_source=github&utm_medium=readme) | $10 | never | ✅ Нет | [Получить →](https://console.upstage.ai) |
| [Cerebras](https://www.freellm.site/ru/providers/cerebras/?utm_source=github&utm_medium=readme) | $5 | 30 days | 💳 Да | [Получить →](https://cloud.cerebras.ai/) |
| [DeepSeek](https://www.freellm.site/ru/providers/deepseek/?utm_source=github&utm_medium=readme) | $5 | on signup | 📧 Email | [Получить →](https://platform.deepseek.com/api_keys) |
| Nscale | $5 | on signup | 📧 Email | [Получить →](https://console.nscale.com/) |
| [Sarvam AI](https://www.freellm.site/ru/providers/sarvam_ai/?utm_source=github&utm_medium=readme) | $1.1 | never | 📧 Email | [Получить →](https://dashboard.sarvam.ai) |
| [Fireworks AI](https://www.freellm.site/ru/providers/fireworks/?utm_source=github&utm_medium=readme) | $1 | never | ✅ Нет | [Получить →](https://app.fireworks.ai/settings/users/api-keys) |
| [Nebius Token Factory](https://www.freellm.site/ru/providers/nebius/?utm_source=github&utm_medium=readme) | $1 | 30 days | 💳 Да | [Получить →](https://tokenfactory.nebius.com) |
| [SiliconFlow](https://www.freellm.site/ru/providers/siliconflow/?utm_source=github&utm_medium=readme) | $1 | never | 📧 Email | [Получить →](https://cloud.siliconflow.com) |
| [Stability AI](https://www.freellm.site/ru/providers/stability_ai/?utm_source=github&utm_medium=readme) | $0.25 | never | ✅ Нет | [Получить →](https://platform.stability.ai) |
| [Hugging Face](https://www.freellm.site/ru/providers/huggingface/?utm_source=github&utm_medium=readme) | $0.1 | monthly | ✅ Нет | [Получить →](https://huggingface.co/settings/tokens) |
| Replicate | Бесплатный уровень | — | ✅ Нет | [Получить →](https://replicate.com) |
| Fal AI | Бесплатный уровень | varies (1 week to 1 year) | ✅ Нет | [Получить →](https://fal.ai) |
| [Vercel AI Gateway](https://www.freellm.site/ru/providers/vercel_ai_gateway/?utm_source=github&utm_medium=readme) | Бесплатный уровень | monthly | 📧 Email | [Получить →](https://vercel.com/ai-gateway) |
| [Baseten](https://www.freellm.site/ru/providers/baseten/?utm_source=github&utm_medium=readme) | Бесплатный уровень | never | ✅ Нет | [Получить →](https://app.baseten.co/signup) |
| Krutrim AI | Бесплатный уровень | never | 📧 Email | [Получить →](https://www.olakrutrim.com) |
| CoRover BharatGPT | Бесплатный уровень | never | 📧 Email | [Получить →](https://corover.ai) |
| Gnani.ai | Бесплатный уровень | never | 📧 Email | [Получить →](https://gnani.ai) |
| Soket AI | Бесплатный уровень | never | 📧 Email | [Получить →](https://soket.ai) |
| Neysa AI | Бесплатный уровень | never | 📧 Email | [Получить →](https://neysa.ai) |
| [Alibaba DashScope](https://www.freellm.site/ru/providers/alibaba_dashscope/?utm_source=github&utm_medium=readme) | Бесплатный уровень | 90 days | ✅ Нет | [Получить →](https://bailian.console.aliyun.com) |
| [Alibaba Model Studio](https://www.freellm.site/ru/providers/alibaba_model_studio/?utm_source=github&utm_medium=readme) | Бесплатный уровень | 90 days | 📧 Email | [Получить →](https://modelstudio.console.alibabacloud.com) |
| MiniMax | Бесплатный уровень | never | 📧 Email | [Получить →](https://platform.minimax.io) |
| [Tencent Hunyuan](https://www.freellm.site/ru/providers/tencent_hunyuan/?utm_source=github&utm_medium=readme) | Бесплатный уровень | 1 year | 📧 Email | [Получить →](https://console.cloud.tencent.com/hunyuan) |
| [Baidu ERNIE](https://www.freellm.site/ru/providers/baidu_ernie/?utm_source=github&utm_medium=readme) | Бесплатный уровень | 3 months | 📧 Email | [Получить →](https://console.bce.baidu.com/qianfan) |
| [StepFun](https://www.freellm.site/ru/providers/stepfun/?utm_source=github&utm_medium=readme) | Бесплатный уровень | never | 📧 Email | [Получить →](https://platform.stepfun.com) |
| Volcengine Ark | Бесплатный уровень | — | 📧 Email | [Получить →](https://console.volcengine.com/ark) |
| Huawei Cloud Pangu | Бесплатный уровень | never | 📧 Email | [Получить →](https://www.huaweicloud.com) |
| [Naver HyperCLOVA X](https://www.freellm.site/ru/providers/naver_hyperclova/?utm_source=github&utm_medium=readme) | Бесплатный уровень | never | 📧 Email | [Получить →](https://clovastudio.ncloud.com) |
| LG EXAONE | Бесплатный уровень | never | 📧 Email | [Получить →](https://www.lgresearch.ai) |
| SK Telecom A.X | Бесплатный уровень | never | 📧 Email | [Получить →](https://www.sktelecom.com) |
| LightOn | Бесплатный уровень | never | 📧 Email | [Получить →](https://lighton.ai/pricing) |
| [Scaleway AI](https://www.freellm.site/ru/providers/scaleway_ai/?utm_source=github&utm_medium=readme) | Бесплатный уровень | never | 💳 Да | [Получить →](https://console.scaleway.com/generative-api/models) |
| Inception AI | Бесплатный уровень | never | 📧 Email | [Получить →](https://inceptionai.ai) |
| GMI Cloud | Бесплатный уровень | never | 📧 Email | [Получить →](https://console.gmicloud.ai) |
| NCS AI | Бесплатный уровень | never | 📧 Email | [Получить →](https://www.ncs.co) |
| Sakana AI | Бесплатный уровень | never | 📧 Email | [Получить →](https://console.sakana.ai) |
| [Preferred Networks](https://www.freellm.site/ru/providers/preferred_networks/?utm_source=github&utm_medium=readme) | Бесплатный уровень | 1 month | 📧 Email | [Получить →](https://plamo.preferredai.jp/api) |
| Fujitsu Kozuchi | Бесплатный уровень | never | 📧 Email | [Получить →](https://www.fujitsu.com/global/services/business-services/kozuchi) |
| NTT DATA AI | Бесплатный уровень | never | 📧 Email | [Получить →](https://www.nttdata.com/global/en/) |
| NEC Generative AI | Бесплатный уровень | never | 📧 Email | [Получить →](https://www.nec.com) |
| Rakuten AI | Бесплатный уровень | never | 📧 Email | [Получить →](https://global.rakuten.com/corp/) |

<!-- END_CREDITS -->

---

## 🤝 Вклад в проект

1. **Форкните** этот репозиторий
2. **Отредактируйте** `data/providers.json` согласно [schema](data/schema.md)
3. **Отправьте PR** с кратким описанием

Подробности в [CONTRIBUTING.md](CONTRIBUTING.md).

---

<p align="center">
  <strong>Если это сэкономило вам время — поставьте ⭐ звезду!</strong><br/>
  <a href="https://github.com/khushaljethava/freellm-apis">github.com/khushaljethava/freellm-apis</a>
</p>

---

MIT License · [LICENSE](LICENSE) · © 2026 freellm.site
