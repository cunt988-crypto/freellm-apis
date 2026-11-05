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

| Поставщик | Карта? | Примечания | Макс. контекст | Получить ключ |
|---|---|---|---|---|
| Groq | ✅ Нет | 30 запросов/мин · 14 400 в день | 262K | <a href="https://console.groq.com/keys" target="_blank" rel="noopener">Получить →</a> |
| GitHub Models | ✅ Нет | Требуется аккаунт GitHub | 1M | <a href="https://github.com/marketplace/models" target="_blank" rel="noopener">Получить →</a> |
| Google Gemini | ✅ Нет | 2M токенов на Flash | 2M | <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">Получить →</a> |
| Mistral AI | ✅ Нет | Бесплатный уровень с лимитами | 256K | <a href="https://console.mistral.ai/api-keys" target="_blank" rel="noopener">Получить →</a> |
| Cerebras | ✅ Нет | Сверхбыстрый инференс | 131K | <a href="https://cloud.cerebras.ai/" target="_blank" rel="noopener">Получить →</a> |
| Cohere | ✅ Нет | 20 вызовов/мин | 256K | <a href="https://dashboard.cohere.com/api-keys" target="_blank" rel="noopener">Получить →</a> |
| Hugging Face | ✅ Нет | Бесплатный API инференса | 131K | <a href="https://huggingface.co/settings/tokens" target="_blank" rel="noopener">Получить →</a> |
| Cloudflare Workers AI | ✅ Нет | 10 000 нейронов/день | 10M | <a href="https://dash.cloudflare.com/profile/api-tokens" target="_blank" rel="noopener">Получить →</a> |
| OpenRouter | 📧 Email | 100+ постоянно бесплатных моделей | 1M | <a href="https://openrouter.ai/workspaces/default/keys" target="_blank" rel="noopener">Получить →</a> |
| Chutes AI | ✅ Нет | Бесплатный общественный уровень | 131K | <a href="https://chutes.ai" target="_blank" rel="noopener">Получить →</a> |
| NVIDIA NIM | 📱 Телефон | 75+ моделей | 1M | <a href="https://build.nvidia.com/settings/api-keys" target="_blank" rel="noopener">Получить →</a> |
| Zhipu AI | ✅ Нет | GLM-4.7-Flash и GLM-4.5-Flash бесплатно | 128K | <a href="https://open.bigmodel.cn" target="_blank" rel="noopener">Получить →</a> |

### 💰 Бесплатные кредиты при регистрации

| Поставщик | Кредиты | Срок | Карта? | Получить ключ |
|---|---|---|---|---|
| xAI (Grok) | $25 | Ежемесячно | 📧 Email | <a href="https://console.x.ai" target="_blank" rel="noopener">Получить →</a> |
| Modal | $30 | Ежемесячно | ✅ Нет | <a href="https://modal.com" target="_blank" rel="noopener">Получить →</a> |
| Hyperbolic | $10 | Никогда | ✅ Нет | <a href="https://app.hyperbolic.xyz/settings" target="_blank" rel="noopener">Получить →</a> |
| Lambda AI | $10 | Никогда | ✅ Нет | <a href="https://lambda.ai" target="_blank" rel="noopener">Получить →</a> |
| DeepSeek | $5 | При регистрации | 📧 Email | <a href="https://platform.deepseek.com/api_keys" target="_blank" rel="noopener">Получить →</a> |
| Anthropic | $5 | Никогда | 💳 Да | <a href="https://console.anthropic.com" target="_blank" rel="noopener">Получить →</a> |
| SiliconFlow | $2 | Никогда | 📧 Email | <a href="https://cloud.siliconflow.cn/account/ak" target="_blank" rel="noopener">Получить →</a> |
| Together AI | $1 | Никогда | ✅ Нет | <a href="https://api.together.ai/settings/api-keys" target="_blank" rel="noopener">Получить →</a> |
| Fireworks AI | $1 | Никогда | ✅ Нет | <a href="https://app.fireworks.ai/settings/users/api-keys" target="_blank" rel="noopener">Получить →</a> |

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
