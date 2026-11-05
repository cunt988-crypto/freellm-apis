<p align="center">
  <h1 align="center">🆓 APIs LLM Gratuitas</h1>
  <p align="center"><strong>70+ proveedores · 8 regiones · Niveles gratuitos permanentes + créditos de prueba</strong></p>
</p>

<p align="center">
  <a href="https://www.freellm.site" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/🌐_Sitio_Web-freellm.site-6366f1?style=for-the-badge" alt="Sitio Web"/></a>
  <a href="https://github.com/khushaljethava/freellm-apis" target="_blank" rel="noopener"><img src="https://img.shields.io/github/stars/khushaljethava/freellm-apis?style=for-the-badge&color=f59e0b" alt="Stars"/></a>
  <img src="https://img.shields.io/badge/Proveedores-70%2B-ec4899?style=for-the-badge" alt="70+ Proveedores"/>
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
- ✅ **70+ proveedores** — global, India, China, Japón, Corea, Europa, Oriente Medio, SEA
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
# Groq tier gratuito: 30 RPM, 1,000 RPD
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

<!-- BEGIN_PERMANENT -->
| Proveedor | Modelos | ¿Tarjeta? | Contexto máx. | Obtener clave |
|---|---|---|---|---|
| [OpenRouter](https://www.freellm.site/es/providers/openrouter/?utm_source=github&utm_medium=readme) | 16 | 📧 Email | 1M | [Obtener →](https://openrouter.ai/workspaces/default/keys) |
| [Google Gemini](https://www.freellm.site/es/providers/google_gemini/?utm_source=github&utm_medium=readme) | 11 | ✅ No | 1M | [Obtener →](https://aistudio.google.com/app/apikey) |
| [OpenCode Zen](https://www.freellm.site/es/providers/opencode_zen/?utm_source=github&utm_medium=readme) | 10 | 📧 Email | 1M | [Obtener →](https://opencode.ai/auth) |
| [Groq](https://www.freellm.site/es/providers/groq/?utm_source=github&utm_medium=readme) | 9 | ✅ No | 131K | [Obtener →](https://console.groq.com/keys) |
| [Cloudflare Workers AI](https://www.freellm.site/es/providers/cloudflare/?utm_source=github&utm_medium=readme) | 8 | ✅ No | 1M | [Obtener →](https://dash.cloudflare.com/profile/api-tokens) |
| [OVHcloud AI Endpoints](https://www.freellm.site/es/providers/ovhcloud_ai/?utm_source=github&utm_medium=readme) | 8 | ✅ No | 262K | [Obtener →](https://endpoints.ai.cloud.ovh.net) |
| [ElevenLabs](https://www.freellm.site/es/providers/elevenlabs/?utm_source=github&utm_medium=readme) | 6 | ✅ No | — | [Obtener →](https://elevenlabs.io/app/sign-up) |
| [OrcaRouter](https://www.freellm.site/es/providers/orcarouter/?utm_source=github&utm_medium=readme) | 6 | 📧 Email | — | [Obtener →](https://www.orcarouter.ai/models) |
| [Cohere](https://www.freellm.site/es/providers/cohere/?utm_source=github&utm_medium=readme) | 5 | ✅ No | 256K | [Obtener →](https://dashboard.cohere.com/api-keys) |
| [NVIDIA NIM](https://www.freellm.site/es/providers/nvidia_nim/?utm_source=github&utm_medium=readme) | 5 | 📱 Teléfono | 1M | [Obtener →](https://build.nvidia.com/settings/api-keys) |
| [SambaNova Cloud](https://www.freellm.site/es/providers/sambanova/?utm_source=github&utm_medium=readme) | 5 | 📧 Email | 131K | [Obtener →](https://cloud.sambanova.ai/apis) |
| [Zhipu AI](https://www.freellm.site/es/providers/zhipu_ai/?utm_source=github&utm_medium=readme) | 5 | ✅ No | 200K | [Obtener →](https://bigmodel.cn) |
| [ModelScope](https://www.freellm.site/es/providers/modelscope/?utm_source=github&utm_medium=readme) | 5 | 📧 Email | 1M | [Obtener →](https://modelscope.cn/my/myaccesstoken) |
| [Zenmux](https://www.freellm.site/es/providers/zenmux/?utm_source=github&utm_medium=readme) | 5 | 📧 Email | 524K | [Obtener →](https://zenmux.ai) |
| [Mistral AI](https://www.freellm.site/es/providers/mistral/?utm_source=github&utm_medium=readme) | 4 | ✅ No | 256K | [Obtener →](https://console.mistral.ai/api-keys) |
| [LLM7.io](https://www.freellm.site/es/providers/llm7/?utm_source=github&utm_medium=readme) | 4 | ✅ No | 400K | [Obtener →](https://dash.llm7.io) |
| [AI Singapore (SEA-LION)](https://www.freellm.site/es/providers/ai_singapore/?utm_source=github&utm_medium=readme) | 4 | 📧 Email | 262K | [Obtener →](https://playground.sea-lion.ai) |
| [Z.ai](https://www.freellm.site/es/providers/zai/?utm_source=github&utm_medium=readme) | 3 | ✅ No | 200K | [Obtener →](https://z.ai/manage-apikey/apikey-list) |
| [SiliconFlow (CN)](https://www.freellm.site/es/providers/siliconflow_cn/?utm_source=github&utm_medium=readme) | 1 | 📧 Email | 262K | [Obtener →](https://siliconflow.cn) |
| [SenseNova](https://www.freellm.site/es/providers/sensenova/?utm_source=github&utm_medium=readme) | 1 | 📱 Teléfono | — | [Obtener →](https://platform.sensenova.cn/login) |
| [iFlytek Spark](https://www.freellm.site/es/providers/iflytek_spark/?utm_source=github&utm_medium=readme) | 1 | 📧 Email | 8K | [Obtener →](https://console.xfyun.cn/services/cbm) |
| [Pollinations](https://www.freellm.site/es/providers/pollinations/?utm_source=github&utm_medium=readme) | 1 | ✅ No | 131K | [Obtener →](https://enter.pollinations.ai) |
| AI4Bharat | 0 | ✅ No | — | [Obtener →](https://ai4bharat.iitm.ac.in) |
| BharatGen | 0 | ✅ No | — | [Obtener →](https://bharatgen.com) |
| Wrtn Technologies | 0 | ✅ No | — | [Obtener →](https://wrtn.ai) |
| H Company | 0 | 📧 Email | — | [Obtener →](https://portal.hcompany.ai) |
| DeepL API | 0 | ✅ No | — | [Obtener →](https://developers.deepl.com) |
| Falcon (TII) | 0 | ✅ No | — | [Obtener →](https://falconllm.tii.ae) |

<!-- END_PERMANENT -->

### 💰 Créditos gratuitos al registrarse

<!-- BEGIN_CREDITS -->
| Proveedor | Créditos | Caducidad | ¿Tarjeta? | Obtener clave |
|---|---|---|---|---|
| [xAI (Grok)](https://www.freellm.site/es/providers/xai/?utm_source=github&utm_medium=readme) | $25 | monthly | 📧 Email | [Obtener →](https://console.x.ai) |
| [Baichuan AI](https://www.freellm.site/es/providers/baichuan/?utm_source=github&utm_medium=readme) | $11 | 3 months | 📧 Email | [Obtener →](https://platform.baichuan-ai.com) |
| [AI21 Labs](https://www.freellm.site/es/providers/ai21/?utm_source=github&utm_medium=readme) | $10 | 3 months | ✅ No | [Obtener →](https://www.ai21.com) |
| [Novita AI](https://www.freellm.site/es/providers/novita_ai/?utm_source=github&utm_medium=readme) | $10 | 90 days | ✅ No | [Obtener →](https://novita.ai) |
| [Upstage AI](https://www.freellm.site/es/providers/upstage_ai/?utm_source=github&utm_medium=readme) | $10 | never | ✅ No | [Obtener →](https://console.upstage.ai) |
| [Cerebras](https://www.freellm.site/es/providers/cerebras/?utm_source=github&utm_medium=readme) | $5 | 30 days | 💳 Sí | [Obtener →](https://cloud.cerebras.ai/) |
| [DeepSeek](https://www.freellm.site/es/providers/deepseek/?utm_source=github&utm_medium=readme) | $5 | on signup | 📧 Email | [Obtener →](https://platform.deepseek.com/api_keys) |
| Nscale | $5 | on signup | 📧 Email | [Obtener →](https://console.nscale.com/) |
| [Sarvam AI](https://www.freellm.site/es/providers/sarvam_ai/?utm_source=github&utm_medium=readme) | $1.1 | never | 📧 Email | [Obtener →](https://dashboard.sarvam.ai) |
| [Fireworks AI](https://www.freellm.site/es/providers/fireworks/?utm_source=github&utm_medium=readme) | $1 | never | ✅ No | [Obtener →](https://app.fireworks.ai/settings/users/api-keys) |
| [Nebius Token Factory](https://www.freellm.site/es/providers/nebius/?utm_source=github&utm_medium=readme) | $1 | 30 days | 💳 Sí | [Obtener →](https://tokenfactory.nebius.com) |
| [SiliconFlow](https://www.freellm.site/es/providers/siliconflow/?utm_source=github&utm_medium=readme) | $1 | never | 📧 Email | [Obtener →](https://cloud.siliconflow.com) |
| [Stability AI](https://www.freellm.site/es/providers/stability_ai/?utm_source=github&utm_medium=readme) | $0.25 | never | ✅ No | [Obtener →](https://platform.stability.ai) |
| [Hugging Face](https://www.freellm.site/es/providers/huggingface/?utm_source=github&utm_medium=readme) | $0.1 | monthly | ✅ No | [Obtener →](https://huggingface.co/settings/tokens) |
| Replicate | Nivel gratuito | — | ✅ No | [Obtener →](https://replicate.com) |
| Fal AI | Nivel gratuito | varies (1 week to 1 year) | ✅ No | [Obtener →](https://fal.ai) |
| [Vercel AI Gateway](https://www.freellm.site/es/providers/vercel_ai_gateway/?utm_source=github&utm_medium=readme) | Nivel gratuito | monthly | 📧 Email | [Obtener →](https://vercel.com/ai-gateway) |
| [Baseten](https://www.freellm.site/es/providers/baseten/?utm_source=github&utm_medium=readme) | Nivel gratuito | never | ✅ No | [Obtener →](https://app.baseten.co/signup) |
| Krutrim AI | Nivel gratuito | never | 📧 Email | [Obtener →](https://www.olakrutrim.com) |
| CoRover BharatGPT | Nivel gratuito | never | 📧 Email | [Obtener →](https://corover.ai) |
| Gnani.ai | Nivel gratuito | never | 📧 Email | [Obtener →](https://gnani.ai) |
| Soket AI | Nivel gratuito | never | 📧 Email | [Obtener →](https://soket.ai) |
| Neysa AI | Nivel gratuito | never | 📧 Email | [Obtener →](https://neysa.ai) |
| [Alibaba DashScope](https://www.freellm.site/es/providers/alibaba_dashscope/?utm_source=github&utm_medium=readme) | Nivel gratuito | 90 days | ✅ No | [Obtener →](https://bailian.console.aliyun.com) |
| [Alibaba Model Studio](https://www.freellm.site/es/providers/alibaba_model_studio/?utm_source=github&utm_medium=readme) | Nivel gratuito | 90 days | 📧 Email | [Obtener →](https://modelstudio.console.alibabacloud.com) |
| MiniMax | Nivel gratuito | never | 📧 Email | [Obtener →](https://platform.minimax.io) |
| [Tencent Hunyuan](https://www.freellm.site/es/providers/tencent_hunyuan/?utm_source=github&utm_medium=readme) | Nivel gratuito | 1 year | 📧 Email | [Obtener →](https://console.cloud.tencent.com/hunyuan) |
| [Baidu ERNIE](https://www.freellm.site/es/providers/baidu_ernie/?utm_source=github&utm_medium=readme) | Nivel gratuito | 3 months | 📧 Email | [Obtener →](https://console.bce.baidu.com/qianfan) |
| [StepFun](https://www.freellm.site/es/providers/stepfun/?utm_source=github&utm_medium=readme) | Nivel gratuito | never | 📧 Email | [Obtener →](https://platform.stepfun.com) |
| Volcengine Ark | Nivel gratuito | — | 📧 Email | [Obtener →](https://console.volcengine.com/ark) |
| Huawei Cloud Pangu | Nivel gratuito | never | 📧 Email | [Obtener →](https://www.huaweicloud.com) |
| [Naver HyperCLOVA X](https://www.freellm.site/es/providers/naver_hyperclova/?utm_source=github&utm_medium=readme) | Nivel gratuito | never | 📧 Email | [Obtener →](https://clovastudio.ncloud.com) |
| LG EXAONE | Nivel gratuito | never | 📧 Email | [Obtener →](https://www.lgresearch.ai) |
| SK Telecom A.X | Nivel gratuito | never | 📧 Email | [Obtener →](https://www.sktelecom.com) |
| LightOn | Nivel gratuito | never | 📧 Email | [Obtener →](https://lighton.ai/pricing) |
| [Scaleway AI](https://www.freellm.site/es/providers/scaleway_ai/?utm_source=github&utm_medium=readme) | Nivel gratuito | never | 💳 Sí | [Obtener →](https://console.scaleway.com/generative-api/models) |
| Inception AI | Nivel gratuito | never | 📧 Email | [Obtener →](https://inceptionai.ai) |
| GMI Cloud | Nivel gratuito | never | 📧 Email | [Obtener →](https://console.gmicloud.ai) |
| NCS AI | Nivel gratuito | never | 📧 Email | [Obtener →](https://www.ncs.co) |
| Sakana AI | Nivel gratuito | never | 📧 Email | [Obtener →](https://console.sakana.ai) |
| [Preferred Networks](https://www.freellm.site/es/providers/preferred_networks/?utm_source=github&utm_medium=readme) | Nivel gratuito | 1 month | 📧 Email | [Obtener →](https://plamo.preferredai.jp/api) |
| Fujitsu Kozuchi | Nivel gratuito | never | 📧 Email | [Obtener →](https://www.fujitsu.com/global/services/business-services/kozuchi) |
| NTT DATA AI | Nivel gratuito | never | 📧 Email | [Obtener →](https://www.nttdata.com/global/en/) |
| NEC Generative AI | Nivel gratuito | never | 📧 Email | [Obtener →](https://www.nec.com) |
| Rakuten AI | Nivel gratuito | never | 📧 Email | [Obtener →](https://global.rakuten.com/corp/) |

<!-- END_CREDITS -->

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
