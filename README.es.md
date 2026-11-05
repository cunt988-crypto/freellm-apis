<p align="center">
  <h1 align="center">🆓 APIs LLM Gratuitas</h1>
  <p align="center"><strong>90+ proveedores · 8 regiones · Niveles gratuitos permanentes + créditos de prueba</strong></p>
</p>

<p align="center">
  <a href="https://www.freellm.site" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/🌐_Sitio_Web-freellm.site-6366f1?style=for-the-badge" alt="Sitio Web"/></a>
  <a href="https://github.com/khushaljethava/freellm-apis" target="_blank" rel="noopener"><img src="https://img.shields.io/github/stars/khushaljethava/freellm-apis?style=for-the-badge&color=f59e0b" alt="Stars"/></a>
  <img src="https://img.shields.io/badge/Proveedores-90%2B-ec4899?style=for-the-badge" alt="90+ Proveedores"/>
</p>

<p align="center">
  <a href="README.md">English</a> · <a href="README.zh.md">简体中文</a> · <a href="README.hi.md">हिन्दी</a> · <strong>Español</strong> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.pt.md">Português</a> · <a href="README.ar.md">العربية</a> · <a href="README.fr.md">Français</a> · <a href="README.de.md">Deutsch</a> · <a href="README.ru.md">Русский</a>
</p>

---

## Por qué existe esto

Encontrar una API LLM gratuita no debería significar buscar en docenas de sitios web, registrarse en cinco plataformas o adivinar qué nivel gratuito sigue funcionando.

Este repositorio es un **directorio estructurado y legible por máquinas** de cada API LLM gratuita — con requisitos de tarjeta de crédito, URLs base y enlaces directos a claves API.

- ✅ **Opciones sin tarjeta primero** — muestra claramente qué proveedores no requieren datos de pago
- ✅ **Compatible con OpenAI** — todos los proveedores funcionan como reemplazo de `baseURL`
- ✅ **90+ proveedores** — global, India, China, Japón, Corea, Europa, Oriente Medio, SEA
- ✅ **Datos legibles por máquinas** — JSON estructurado en `data/providers.json`

---

## ⚡ Cómo usar — 3 pasos

**1. Elige un proveedor** — ver [Directorio de proveedores](#-directorio-de-proveedores). Empieza con **Groq** (sin tarjeta, 30 RPM gratis).

**2. Obtén tu clave API** — haz clic en cualquier enlace `Obtener →`, regístrate (la mayoría solo necesitan email) y copia tu clave. Menos de 1 minuto.

**3. Conéctalo** — copia el Base URL + Model ID en tu herramienta.

---

## 🚀 Inicio rápido — 30 segundos

### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",  # gratis, sin tarjeta
    api_key="TU_CLAVE_GROQ",                     # obtén en console.groq.com/keys
)

response = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[{"role": "user", "content": "¡Hola!"}],
)
print(response.choices[0].message.content)
# Groq tier gratuito: 30 RPM, 14,400 RPD
```

### curl

```bash
curl https://api.groq.com/openai/v1/chat/completions \
  -H "Authorization: Bearer $GROQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"llama-3.3-70b-versatile","messages":[{"role":"user","content":"¡Hola!"}]}'
```

> **Consejo:** Cambia `base_url` a cualquier proveedor de las tablas — mismo código, diferente proveedor, costo cero.

---

## 📋 Directorio de proveedores

### ⚡ Niveles gratuitos permanentes

**Acceso ilimitado** (con límite de velocidad) — sin caducidad.

| Proveedor | ¿Tarjeta? | Notas | Contexto máx. | Obtener clave |
|---|---|---|---|---|
| Groq | ✅ No | 30 RPM · 14,400 RPD | 262K | <a href="https://console.groq.com/keys" target="_blank" rel="noopener">Obtener →</a> |
| GitHub Models | ✅ No | Requiere cuenta GitHub | 1M | <a href="https://github.com/marketplace/models" target="_blank" rel="noopener">Obtener →</a> |
| Google Gemini | ✅ No | 2M tokens en Flash | 2M | <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">Obtener →</a> |
| Mistral AI | ✅ No | Tier gratuito con límites | 256K | <a href="https://console.mistral.ai/api-keys" target="_blank" rel="noopener">Obtener →</a> |
| Cerebras | ✅ No | Inferencia ultrarrápida | 131K | <a href="https://cloud.cerebras.ai/" target="_blank" rel="noopener">Obtener →</a> |
| Cohere | ✅ No | 20 llamadas/min | 256K | <a href="https://dashboard.cohere.com/api-keys" target="_blank" rel="noopener">Obtener →</a> |
| Hugging Face | ✅ No | API de inferencia gratuita | 131K | <a href="https://huggingface.co/settings/tokens" target="_blank" rel="noopener">Obtener →</a> |
| Cloudflare Workers AI | ✅ No | 10,000 neurons/día | 10M | <a href="https://dash.cloudflare.com/profile/api-tokens" target="_blank" rel="noopener">Obtener →</a> |
| OpenRouter | 📧 Email | 100+ modelos gratuitos | 1M | <a href="https://openrouter.ai/workspaces/default/keys" target="_blank" rel="noopener">Obtener →</a> |
| Chutes AI | ✅ No | Tier comunitario gratuito | 131K | <a href="https://chutes.ai" target="_blank" rel="noopener">Obtener →</a> |
| NVIDIA NIM | 📱 Teléfono | 75+ modelos | 1M | <a href="https://build.nvidia.com/settings/api-keys" target="_blank" rel="noopener">Obtener →</a> |
| Zhipu AI | ✅ No | GLM-4.7-Flash y GLM-4.5-Flash gratis | 128K | <a href="https://open.bigmodel.cn" target="_blank" rel="noopener">Obtener →</a> |

### 💰 Créditos gratuitos al registrarse

| Proveedor | Créditos | Caducidad | ¿Tarjeta? | Obtener clave |
|---|---|---|---|---|
| xAI (Grok) | $25 | Mensual | 📧 Email | <a href="https://console.x.ai" target="_blank" rel="noopener">Obtener →</a> |
| Modal | $30 | Mensual | ✅ No | <a href="https://modal.com" target="_blank" rel="noopener">Obtener →</a> |
| Hyperbolic | $10 | Nunca | ✅ No | <a href="https://app.hyperbolic.xyz/settings" target="_blank" rel="noopener">Obtener →</a> |
| Lambda AI | $10 | Nunca | ✅ No | <a href="https://lambda.ai" target="_blank" rel="noopener">Obtener →</a> |
| DeepSeek | $5 | Al registrarse | 📧 Email | <a href="https://platform.deepseek.com/api_keys" target="_blank" rel="noopener">Obtener →</a> |
| Anthropic | $5 | Nunca | 💳 Sí | <a href="https://console.anthropic.com" target="_blank" rel="noopener">Obtener →</a> |
| Together AI | $1 | Nunca | ✅ No | <a href="https://api.together.ai/settings/api-keys" target="_blank" rel="noopener">Obtener →</a> |
| Fireworks AI | $1 | Nunca | ✅ No | <a href="https://app.fireworks.ai/settings/users/api-keys" target="_blank" rel="noopener">Obtener →</a> |

---

<details>
<summary><strong>🇪🇺 Proveedores europeos (11)</strong></summary>

| Proveedor | País | Especialidad | Registrarse |
|---|---|---|---|
| Mistral AI | Francia | LLM líder en Europa | <a href="https://console.mistral.ai/api-keys" target="_blank" rel="noopener">→</a> |
| Aleph Alpha | Alemania | Modelos Luminous | <a href="https://aleph-alpha.com" target="_blank" rel="noopener">→</a> |
| DeepL API | Alemania | Traducción — 500K chars/mes gratis | <a href="https://developers.deepl.com" target="_blank" rel="noopener">→</a> |
| ElevenLabs | Polonia | Síntesis de voz | <a href="https://elevenlabs.io" target="_blank" rel="noopener">→</a> |
| Stability AI | UK | Modelos imagen/audio/vídeo | <a href="https://stability.ai" target="_blank" rel="noopener">→</a> |
| Scaleway AI | Francia | Llama & Mistral en cloud europeo | <a href="https://www.scaleway.com" target="_blank" rel="noopener">→</a> |
| OVHcloud AI | Francia | Modelos open-source | <a href="https://www.ovhcloud.com" target="_blank" rel="noopener">→</a> |
| LightOn | Francia | Modelos Alfred | <a href="https://lighton.ai" target="_blank" rel="noopener">→</a> |
| Silo AI | Finlandia | Modelos Poro finlandeses | <a href="https://www.silo.ai" target="_blank" rel="noopener">→</a> |
| PolyAI | UK | IA conversacional | <a href="https://poly.ai" target="_blank" rel="noopener">→</a> |
| H Company | Francia | Startup francesa de IA | <a href="https://hcompany.ai" target="_blank" rel="noopener">→</a> |

</details>

---

## 🤝 Contribuir

1. **Fork** este repositorio
2. **Edita** `data/providers.json` siguiendo el [schema](data/schema.md)
3. **Envía un PR** con una breve descripción

Ver [CONTRIBUTING.md](CONTRIBUTING.md) para más detalles.

---

<p align="center">
  <strong>Si esto te ahorró tiempo, ¡dale una ⭐ estrella al repo!</strong><br/>
  <a href="https://github.com/khushaljethava/freellm-apis">github.com/khushaljethava/freellm-apis</a>
</p>

---

MIT License · [LICENSE](LICENSE) · © 2026 freellm.site
