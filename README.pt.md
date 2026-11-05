<p align="center">
  <h1 align="center">🆓 APIs LLM Gratuitas</h1>
  <p align="center"><strong>70+ provedores · 8 regiões · Níveis gratuitos permanentes + créditos de avaliação</strong></p>
</p>

<p align="center">
  <a href="https://www.freellm.site" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/🌐_Site-freellm.site-6366f1?style=for-the-badge" alt="Site"/></a>
  <a href="https://github.com/khushaljethava/freellm-apis" target="_blank" rel="noopener"><img src="https://img.shields.io/github/stars/khushaljethava/freellm-apis?style=for-the-badge&color=f59e0b" alt="Stars"/></a>
  <img src="https://img.shields.io/badge/Provedores-70%2B-ec4899?style=for-the-badge" alt="70+ Provedores"/>
</p>

<p align="center">
  <a href="README.md">English</a> · <a href="README.zh.md">简体中文</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.es.md">Español</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <strong>Português</strong> · <a href="README.ar.md">العربية</a> · <a href="README.fr.md">Français</a> · <a href="README.de.md">Deutsch</a> · <a href="README.ru.md">Русский</a>
</p>

---

## Por que isso existe

Encontrar uma API LLM gratuita não deveria significar pesquisar dezenas de sites, criar conta em cinco plataformas ou adivinhar qual nível gratuito ainda funciona.

Este repositório é um **diretório estruturado e legível por máquinas** de cada API LLM gratuita — com requisitos de cartão de crédito, URLs base e links diretos para chaves de API.

- ✅ **Opções sem cartão primeiro** — mostra claramente quais provedores não exigem dados de pagamento
- ✅ **Compatível com OpenAI** — todos os provedores funcionam como substituto de `baseURL`
- ✅ **70+ provedores** — global, Índia, China, Japão, Coreia, Europa, Oriente Médio, SEA
- ✅ **Dados legíveis por máquinas** — JSON estruturado em `data/providers.json`

---

## ⚡ Como usar — 3 passos

**1. Escolha um provedor** — veja o [Diretório de provedores](#-diretório-de-provedores). Comece com **Groq** (sem cartão, 30 RPM grátis).

**2. Obtenha sua chave API** — clique em qualquer link `Obter →`, cadastre-se com email e copie sua chave. Menos de 1 minuto.

**3. Conecte** — copie o Base URL + ID do modelo para sua ferramenta.

---

## 🚀 Início rápido — 30 segundos

### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",  # grátis, sem cartão
    api_key="SUA_CHAVE_GROQ",                    # obtenha em console.groq.com/keys
)

response = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[{"role": "user", "content": "Olá!"}],
)
print(response.choices[0].message.content)
# Tier gratuito Groq: 30 RPM, 14.400 RPD
```

### curl

```bash
curl https://api.groq.com/openai/v1/chat/completions \
  -H "Authorization: Bearer $GROQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"llama-3.3-70b-versatile","messages":[{"role":"user","content":"Olá!"}]}'
```

---

## 📋 Diretório de provedores

### ⚡ Níveis gratuitos permanentes

**Acesso ilimitado** (com limite de taxa) — sem expiração.

| Provedor | Cartão? | Observações | Contexto máx. | Obter chave |
|---|---|---|---|---|
| Groq | ✅ Não | 30 RPM · 14.400 RPD | 262K | <a href="https://console.groq.com/keys" target="_blank" rel="noopener">Obter →</a> |
| GitHub Models | ✅ Não | Requer conta GitHub | 1M | <a href="https://github.com/marketplace/models" target="_blank" rel="noopener">Obter →</a> |
| Google Gemini | ✅ Não | 2M tokens no Flash | 2M | <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">Obter →</a> |
| Mistral AI | ✅ Não | Tier gratuito com limites | 256K | <a href="https://console.mistral.ai/api-keys" target="_blank" rel="noopener">Obter →</a> |
| Cerebras | ✅ Não | Inferência ultrarrápida | 131K | <a href="https://cloud.cerebras.ai/" target="_blank" rel="noopener">Obter →</a> |
| Cohere | ✅ Não | 20 chamadas/min | 256K | <a href="https://dashboard.cohere.com/api-keys" target="_blank" rel="noopener">Obter →</a> |
| Hugging Face | ✅ Não | API de inferência gratuita | 131K | <a href="https://huggingface.co/settings/tokens" target="_blank" rel="noopener">Obter →</a> |
| Cloudflare Workers AI | ✅ Não | 10.000 neurons/dia | 10M | <a href="https://dash.cloudflare.com/profile/api-tokens" target="_blank" rel="noopener">Obter →</a> |
| OpenRouter | 📧 Email | 100+ modelos gratuitos | 1M | <a href="https://openrouter.ai/workspaces/default/keys" target="_blank" rel="noopener">Obter →</a> |
| Chutes AI | ✅ Não | Tier comunitário gratuito | 131K | <a href="https://chutes.ai" target="_blank" rel="noopener">Obter →</a> |
| Zhipu AI | ✅ Não | GLM-4.7-Flash e GLM-4.5-Flash grátis | 128K | <a href="https://open.bigmodel.cn" target="_blank" rel="noopener">Obter →</a> |

### 💰 Créditos gratuitos no cadastro

| Provedor | Créditos | Validade | Cartão? | Obter chave |
|---|---|---|---|---|
| xAI (Grok) | $25 | Mensal | 📧 Email | <a href="https://console.x.ai" target="_blank" rel="noopener">Obter →</a> |
| Modal | $30 | Mensal | ✅ Não | <a href="https://modal.com" target="_blank" rel="noopener">Obter →</a> |
| Hyperbolic | $10 | Nunca | ✅ Não | <a href="https://app.hyperbolic.xyz/settings" target="_blank" rel="noopener">Obter →</a> |
| Lambda AI | $10 | Nunca | ✅ Não | <a href="https://lambda.ai" target="_blank" rel="noopener">Obter →</a> |
| DeepSeek | $5 | No cadastro | 📧 Email | <a href="https://platform.deepseek.com/api_keys" target="_blank" rel="noopener">Obter →</a> |
| Together AI | $1 | Nunca | ✅ Não | <a href="https://api.together.ai/settings/api-keys" target="_blank" rel="noopener">Obter →</a> |
| Fireworks AI | $1 | Nunca | ✅ Não | <a href="https://app.fireworks.ai/settings/users/api-keys" target="_blank" rel="noopener">Obter →</a> |

---

## 🤝 Contribuir

1. **Fork** este repositório
2. **Edite** `data/providers.json` seguindo o [schema](data/schema.md)
3. **Envie um PR** com uma breve descrição

Consulte [CONTRIBUTING.md](CONTRIBUTING.md) para mais detalhes.

---

<p align="center">
  <strong>Se isso te ajudou, dê uma ⭐ estrela ao repositório!</strong><br/>
  <a href="https://github.com/khushaljethava/freellm-apis">github.com/khushaljethava/freellm-apis</a>
</p>

---

MIT License · [LICENSE](LICENSE) · © 2026 freellm.site
