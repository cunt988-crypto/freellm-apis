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

<!-- BEGIN_PERMANENT -->
| Provedor | Modelos | Cartão? | Contexto máx. | Obter chave |
|---|---|---|---|---|
| [OpenRouter](https://www.freellm.site/pt/providers/openrouter/?utm_source=github&utm_medium=readme) | 16 | 📧 Email | 1M | [Obter →](https://openrouter.ai/workspaces/default/keys) |
| [Google Gemini](https://www.freellm.site/pt/providers/google_gemini/?utm_source=github&utm_medium=readme) | 11 | ✅ Não | 1M | [Obter →](https://aistudio.google.com/app/apikey) |
| [OpenCode Zen](https://www.freellm.site/pt/providers/opencode_zen/?utm_source=github&utm_medium=readme) | 10 | 📧 Email | 1M | [Obter →](https://opencode.ai/auth) |
| [Groq](https://www.freellm.site/pt/providers/groq/?utm_source=github&utm_medium=readme) | 9 | ✅ Não | 131K | [Obter →](https://console.groq.com/keys) |
| [Cloudflare Workers AI](https://www.freellm.site/pt/providers/cloudflare/?utm_source=github&utm_medium=readme) | 8 | ✅ Não | 1M | [Obter →](https://dash.cloudflare.com/profile/api-tokens) |
| [OVHcloud AI Endpoints](https://www.freellm.site/pt/providers/ovhcloud_ai/?utm_source=github&utm_medium=readme) | 8 | ✅ Não | 262K | [Obter →](https://endpoints.ai.cloud.ovh.net) |
| [ElevenLabs](https://www.freellm.site/pt/providers/elevenlabs/?utm_source=github&utm_medium=readme) | 6 | ✅ Não | — | [Obter →](https://elevenlabs.io/app/sign-up) |
| [OrcaRouter](https://www.freellm.site/pt/providers/orcarouter/?utm_source=github&utm_medium=readme) | 6 | 📧 Email | — | [Obter →](https://www.orcarouter.ai/models) |
| [Cohere](https://www.freellm.site/pt/providers/cohere/?utm_source=github&utm_medium=readme) | 5 | ✅ Não | 256K | [Obter →](https://dashboard.cohere.com/api-keys) |
| [NVIDIA NIM](https://www.freellm.site/pt/providers/nvidia_nim/?utm_source=github&utm_medium=readme) | 5 | 📱 Telefone | 1M | [Obter →](https://build.nvidia.com/settings/api-keys) |
| [SambaNova Cloud](https://www.freellm.site/pt/providers/sambanova/?utm_source=github&utm_medium=readme) | 5 | 📧 Email | 131K | [Obter →](https://cloud.sambanova.ai/apis) |
| [Zhipu AI](https://www.freellm.site/pt/providers/zhipu_ai/?utm_source=github&utm_medium=readme) | 5 | ✅ Não | 200K | [Obter →](https://bigmodel.cn) |
| [ModelScope](https://www.freellm.site/pt/providers/modelscope/?utm_source=github&utm_medium=readme) | 5 | 📧 Email | 1M | [Obter →](https://modelscope.cn/my/myaccesstoken) |
| [Zenmux](https://www.freellm.site/pt/providers/zenmux/?utm_source=github&utm_medium=readme) | 5 | 📧 Email | 524K | [Obter →](https://zenmux.ai) |
| [Mistral AI](https://www.freellm.site/pt/providers/mistral/?utm_source=github&utm_medium=readme) | 4 | ✅ Não | 256K | [Obter →](https://console.mistral.ai/api-keys) |
| [LLM7.io](https://www.freellm.site/pt/providers/llm7/?utm_source=github&utm_medium=readme) | 4 | ✅ Não | 400K | [Obter →](https://dash.llm7.io) |
| [AI Singapore (SEA-LION)](https://www.freellm.site/pt/providers/ai_singapore/?utm_source=github&utm_medium=readme) | 4 | 📧 Email | 262K | [Obter →](https://playground.sea-lion.ai) |
| [Z.ai](https://www.freellm.site/pt/providers/zai/?utm_source=github&utm_medium=readme) | 3 | ✅ Não | 200K | [Obter →](https://z.ai/manage-apikey/apikey-list) |
| [SiliconFlow (CN)](https://www.freellm.site/pt/providers/siliconflow_cn/?utm_source=github&utm_medium=readme) | 1 | 📧 Email | 262K | [Obter →](https://siliconflow.cn) |
| [SenseNova](https://www.freellm.site/pt/providers/sensenova/?utm_source=github&utm_medium=readme) | 1 | 📱 Telefone | — | [Obter →](https://platform.sensenova.cn/login) |
| [iFlytek Spark](https://www.freellm.site/pt/providers/iflytek_spark/?utm_source=github&utm_medium=readme) | 1 | 📧 Email | 8K | [Obter →](https://console.xfyun.cn/services/cbm) |
| [Pollinations](https://www.freellm.site/pt/providers/pollinations/?utm_source=github&utm_medium=readme) | 1 | ✅ Não | 131K | [Obter →](https://enter.pollinations.ai) |
| AI4Bharat | 0 | ✅ Não | — | [Obter →](https://ai4bharat.iitm.ac.in) |
| BharatGen | 0 | ✅ Não | — | [Obter →](https://bharatgen.com) |
| Wrtn Technologies | 0 | ✅ Não | — | [Obter →](https://wrtn.ai) |
| H Company | 0 | 📧 Email | — | [Obter →](https://portal.hcompany.ai) |
| DeepL API | 0 | ✅ Não | — | [Obter →](https://developers.deepl.com) |
| Falcon (TII) | 0 | ✅ Não | — | [Obter →](https://falconllm.tii.ae) |

<!-- END_PERMANENT -->

### 💰 Créditos gratuitos no cadastro

<!-- BEGIN_CREDITS -->
| Provedor | Créditos | Validade | Cartão? | Obter chave |
|---|---|---|---|---|
| [xAI (Grok)](https://www.freellm.site/pt/providers/xai/?utm_source=github&utm_medium=readme) | $25 | monthly | 📧 Email | [Obter →](https://console.x.ai) |
| [Baichuan AI](https://www.freellm.site/pt/providers/baichuan/?utm_source=github&utm_medium=readme) | $11 | 3 months | 📧 Email | [Obter →](https://platform.baichuan-ai.com) |
| [AI21 Labs](https://www.freellm.site/pt/providers/ai21/?utm_source=github&utm_medium=readme) | $10 | 3 months | ✅ Não | [Obter →](https://www.ai21.com) |
| [Novita AI](https://www.freellm.site/pt/providers/novita_ai/?utm_source=github&utm_medium=readme) | $10 | 90 days | ✅ Não | [Obter →](https://novita.ai) |
| [Upstage AI](https://www.freellm.site/pt/providers/upstage_ai/?utm_source=github&utm_medium=readme) | $10 | never | ✅ Não | [Obter →](https://console.upstage.ai) |
| [Cerebras](https://www.freellm.site/pt/providers/cerebras/?utm_source=github&utm_medium=readme) | $5 | 30 days | 💳 Sim | [Obter →](https://cloud.cerebras.ai/) |
| [DeepSeek](https://www.freellm.site/pt/providers/deepseek/?utm_source=github&utm_medium=readme) | $5 | on signup | 📧 Email | [Obter →](https://platform.deepseek.com/api_keys) |
| Nscale | $5 | on signup | 📧 Email | [Obter →](https://console.nscale.com/) |
| [Sarvam AI](https://www.freellm.site/pt/providers/sarvam_ai/?utm_source=github&utm_medium=readme) | $1.1 | never | 📧 Email | [Obter →](https://dashboard.sarvam.ai) |
| [Fireworks AI](https://www.freellm.site/pt/providers/fireworks/?utm_source=github&utm_medium=readme) | $1 | never | ✅ Não | [Obter →](https://app.fireworks.ai/settings/users/api-keys) |
| [Nebius Token Factory](https://www.freellm.site/pt/providers/nebius/?utm_source=github&utm_medium=readme) | $1 | 30 days | 💳 Sim | [Obter →](https://tokenfactory.nebius.com) |
| [SiliconFlow](https://www.freellm.site/pt/providers/siliconflow/?utm_source=github&utm_medium=readme) | $1 | never | 📧 Email | [Obter →](https://cloud.siliconflow.com) |
| [Stability AI](https://www.freellm.site/pt/providers/stability_ai/?utm_source=github&utm_medium=readme) | $0.25 | never | ✅ Não | [Obter →](https://platform.stability.ai) |
| [Hugging Face](https://www.freellm.site/pt/providers/huggingface/?utm_source=github&utm_medium=readme) | $0.1 | monthly | ✅ Não | [Obter →](https://huggingface.co/settings/tokens) |
| Replicate | — | — | ✅ Não | [Obter →](https://replicate.com) |
| Fal AI | — | varies (1 week to 1 year) | ✅ Não | [Obter →](https://fal.ai) |
| [Vercel AI Gateway](https://www.freellm.site/pt/providers/vercel_ai_gateway/?utm_source=github&utm_medium=readme) | — | monthly | 📧 Email | [Obter →](https://vercel.com/ai-gateway) |
| [Baseten](https://www.freellm.site/pt/providers/baseten/?utm_source=github&utm_medium=readme) | — | never | ✅ Não | [Obter →](https://app.baseten.co/signup) |
| Krutrim AI | — | never | 📧 Email | [Obter →](https://www.olakrutrim.com) |
| CoRover BharatGPT | — | never | 📧 Email | [Obter →](https://corover.ai) |
| Gnani.ai | — | never | 📧 Email | [Obter →](https://gnani.ai) |
| Soket AI | — | never | 📧 Email | [Obter →](https://soket.ai) |
| Neysa AI | — | never | 📧 Email | [Obter →](https://neysa.ai) |
| [Alibaba DashScope](https://www.freellm.site/pt/providers/alibaba_dashscope/?utm_source=github&utm_medium=readme) | — | 90 days | ✅ Não | [Obter →](https://bailian.console.aliyun.com) |
| [Alibaba Model Studio](https://www.freellm.site/pt/providers/alibaba_model_studio/?utm_source=github&utm_medium=readme) | — | 90 days | 📧 Email | [Obter →](https://modelstudio.console.alibabacloud.com) |
| MiniMax | — | never | 📧 Email | [Obter →](https://platform.minimax.io) |
| [Tencent Hunyuan](https://www.freellm.site/pt/providers/tencent_hunyuan/?utm_source=github&utm_medium=readme) | — | 1 year | 📧 Email | [Obter →](https://console.cloud.tencent.com/hunyuan) |
| [Baidu ERNIE](https://www.freellm.site/pt/providers/baidu_ernie/?utm_source=github&utm_medium=readme) | — | 3 months | 📧 Email | [Obter →](https://console.bce.baidu.com/qianfan) |
| [StepFun](https://www.freellm.site/pt/providers/stepfun/?utm_source=github&utm_medium=readme) | — | never | 📧 Email | [Obter →](https://platform.stepfun.com) |
| Volcengine Ark | — | — | 📧 Email | [Obter →](https://console.volcengine.com/ark) |
| Huawei Cloud Pangu | — | never | 📧 Email | [Obter →](https://www.huaweicloud.com) |
| [Naver HyperCLOVA X](https://www.freellm.site/pt/providers/naver_hyperclova/?utm_source=github&utm_medium=readme) | — | never | 📧 Email | [Obter →](https://clovastudio.ncloud.com) |
| LG EXAONE | — | never | 📧 Email | [Obter →](https://www.lgresearch.ai) |
| SK Telecom A.X | — | never | 📧 Email | [Obter →](https://www.sktelecom.com) |
| LightOn | — | never | 📧 Email | [Obter →](https://lighton.ai/pricing) |
| [Scaleway AI](https://www.freellm.site/pt/providers/scaleway_ai/?utm_source=github&utm_medium=readme) | — | never | 💳 Sim | [Obter →](https://console.scaleway.com/generative-api/models) |
| Inception AI | — | never | 📧 Email | [Obter →](https://inceptionai.ai) |
| GMI Cloud | — | never | 📧 Email | [Obter →](https://console.gmicloud.ai) |
| NCS AI | — | never | 📧 Email | [Obter →](https://www.ncs.co) |
| Sakana AI | — | never | 📧 Email | [Obter →](https://console.sakana.ai) |
| [Preferred Networks](https://www.freellm.site/pt/providers/preferred_networks/?utm_source=github&utm_medium=readme) | — | 1 month | 📧 Email | [Obter →](https://plamo.preferredai.jp/api) |
| Fujitsu Kozuchi | — | never | 📧 Email | [Obter →](https://www.fujitsu.com/global/services/business-services/kozuchi) |
| NTT DATA AI | — | never | 📧 Email | [Obter →](https://www.nttdata.com/global/en/) |
| NEC Generative AI | — | never | 📧 Email | [Obter →](https://www.nec.com) |
| Rakuten AI | — | never | 📧 Email | [Obter →](https://global.rakuten.com/corp/) |

<!-- END_CREDITS -->

<!-- BEGIN_REGIONAL -->

---

### 🌍 Provedores regionais

<details>
<summary><strong>🇨🇳 China (14)</strong></summary>

| Provedor | Cartão? | Oferta gratuita | Obter chave |
|---|---|---|---|
| [ModelScope](https://www.freellm.site/pt/providers/modelscope/?utm_source=github&utm_medium=readme) | 📧 Email | Nível gratuito | [Obter →](https://modelscope.cn/my/myaccesstoken) |
| [Zhipu AI](https://www.freellm.site/pt/providers/zhipu_ai/?utm_source=github&utm_medium=readme) | ✅ Não | Nível gratuito | [Obter →](https://bigmodel.cn) |
| [Alibaba DashScope](https://www.freellm.site/pt/providers/alibaba_dashscope/?utm_source=github&utm_medium=readme) | ✅ Não | Créditos · 90 days | [Obter →](https://bailian.console.aliyun.com) |
| [Alibaba Model Studio](https://www.freellm.site/pt/providers/alibaba_model_studio/?utm_source=github&utm_medium=readme) | 📧 Email | Créditos · 90 days | [Obter →](https://modelstudio.console.alibabacloud.com) |
| [Baichuan AI](https://www.freellm.site/pt/providers/baichuan/?utm_source=github&utm_medium=readme) | 📧 Email | $11 · 3 months | [Obter →](https://platform.baichuan-ai.com) |
| [Baidu ERNIE](https://www.freellm.site/pt/providers/baidu_ernie/?utm_source=github&utm_medium=readme) | 📧 Email | Créditos · 3 months | [Obter →](https://console.bce.baidu.com/qianfan) |
| [Tencent Hunyuan](https://www.freellm.site/pt/providers/tencent_hunyuan/?utm_source=github&utm_medium=readme) | 📧 Email | Créditos · 1 year | [Obter →](https://console.cloud.tencent.com/hunyuan) |
| [SenseNova](https://www.freellm.site/pt/providers/sensenova/?utm_source=github&utm_medium=readme) | 📱 Telefone | Nível gratuito | [Obter →](https://platform.sensenova.cn/login) |
| [SiliconFlow (CN)](https://www.freellm.site/pt/providers/siliconflow_cn/?utm_source=github&utm_medium=readme) | 📧 Email | Nível gratuito | [Obter →](https://siliconflow.cn) |
| [StepFun](https://www.freellm.site/pt/providers/stepfun/?utm_source=github&utm_medium=readme) | 📧 Email | Créditos · never | [Obter →](https://platform.stepfun.com) |
| [iFlytek Spark](https://www.freellm.site/pt/providers/iflytek_spark/?utm_source=github&utm_medium=readme) | 📧 Email | Nível gratuito | [Obter →](https://console.xfyun.cn/services/cbm) |
| Huawei Cloud Pangu | 📧 Email | Créditos · never | [Obter →](https://www.huaweicloud.com) |
| MiniMax | 📧 Email | Créditos · never | [Obter →](https://platform.minimax.io) |
| Volcengine Ark | 📧 Email | Créditos | [Obter →](https://console.volcengine.com/ark) |

</details>

<details>
<summary><strong>🇮🇳 Índia (8)</strong></summary>

| Provedor | Cartão? | Oferta gratuita | Obter chave |
|---|---|---|---|
| [Sarvam AI](https://www.freellm.site/pt/providers/sarvam_ai/?utm_source=github&utm_medium=readme) | 📧 Email | $1.1 · never | [Obter →](https://dashboard.sarvam.ai) |
| AI4Bharat | ✅ Não | Nível gratuito | [Obter →](https://ai4bharat.iitm.ac.in) |
| BharatGen | ✅ Não | Nível gratuito | [Obter →](https://bharatgen.com) |
| CoRover BharatGPT | 📧 Email | Créditos · never | [Obter →](https://corover.ai) |
| Gnani.ai | 📧 Email | Créditos · never | [Obter →](https://gnani.ai) |
| Krutrim AI | 📧 Email | Créditos · never | [Obter →](https://www.olakrutrim.com) |
| Neysa AI | 📧 Email | Créditos · never | [Obter →](https://neysa.ai) |
| Soket AI | 📧 Email | Créditos · never | [Obter →](https://soket.ai) |

</details>

<details>
<summary><strong>🇪🇺 Europa (7)</strong></summary>

| Provedor | Cartão? | Oferta gratuita | Obter chave |
|---|---|---|---|
| [OVHcloud AI Endpoints](https://www.freellm.site/pt/providers/ovhcloud_ai/?utm_source=github&utm_medium=readme) | ✅ Não | Nível gratuito | [Obter →](https://endpoints.ai.cloud.ovh.net) |
| [Scaleway AI](https://www.freellm.site/pt/providers/scaleway_ai/?utm_source=github&utm_medium=readme) | 💳 Sim | Créditos · never | [Obter →](https://console.scaleway.com/generative-api/models) |
| [ElevenLabs](https://www.freellm.site/pt/providers/elevenlabs/?utm_source=github&utm_medium=readme) | ✅ Não | Nível gratuito | [Obter →](https://elevenlabs.io/app/sign-up) |
| [Stability AI](https://www.freellm.site/pt/providers/stability_ai/?utm_source=github&utm_medium=readme) | ✅ Não | $0.25 · never | [Obter →](https://platform.stability.ai) |
| DeepL API | ✅ Não | Nível gratuito | [Obter →](https://developers.deepl.com) |
| H Company | 📧 Email | Nível gratuito | [Obter →](https://portal.hcompany.ai) |
| LightOn | 📧 Email | Créditos · never | [Obter →](https://lighton.ai/pricing) |

</details>

<details>
<summary><strong>🇯🇵 Japão (6)</strong></summary>

| Provedor | Cartão? | Oferta gratuita | Obter chave |
|---|---|---|---|
| [Preferred Networks](https://www.freellm.site/pt/providers/preferred_networks/?utm_source=github&utm_medium=readme) | 📧 Email | Créditos · 1 month | [Obter →](https://plamo.preferredai.jp/api) |
| Fujitsu Kozuchi | 📧 Email | Créditos · never | [Obter →](https://www.fujitsu.com/global/services/business-services/kozuchi) |
| NEC Generative AI | 📧 Email | Créditos · never | [Obter →](https://www.nec.com) |
| NTT DATA AI | 📧 Email | Créditos · never | [Obter →](https://www.nttdata.com/global/en/) |
| Rakuten AI | 📧 Email | Créditos · never | [Obter →](https://global.rakuten.com/corp/) |
| Sakana AI | 📧 Email | Créditos · never | [Obter →](https://console.sakana.ai) |

</details>

<details>
<summary><strong>🇰🇷 Coreia (5)</strong></summary>

| Provedor | Cartão? | Oferta gratuita | Obter chave |
|---|---|---|---|
| [Upstage AI](https://www.freellm.site/pt/providers/upstage_ai/?utm_source=github&utm_medium=readme) | ✅ Não | $10 · never | [Obter →](https://console.upstage.ai) |
| [Naver HyperCLOVA X](https://www.freellm.site/pt/providers/naver_hyperclova/?utm_source=github&utm_medium=readme) | 📧 Email | Créditos · never | [Obter →](https://clovastudio.ncloud.com) |
| LG EXAONE | 📧 Email | Créditos · never | [Obter →](https://www.lgresearch.ai) |
| SK Telecom A.X | 📧 Email | Créditos · never | [Obter →](https://www.sktelecom.com) |
| Wrtn Technologies | ✅ Não | Nível gratuito | [Obter →](https://wrtn.ai) |

</details>

<details>
<summary><strong>🇸🇬 Sudeste Asiático (3)</strong></summary>

| Provedor | Cartão? | Oferta gratuita | Obter chave |
|---|---|---|---|
| [AI Singapore (SEA-LION)](https://www.freellm.site/pt/providers/ai_singapore/?utm_source=github&utm_medium=readme) | 📧 Email | Nível gratuito | [Obter →](https://playground.sea-lion.ai) |
| GMI Cloud | 📧 Email | Créditos · never | [Obter →](https://console.gmicloud.ai) |
| NCS AI | 📧 Email | Créditos · never | [Obter →](https://www.ncs.co) |

</details>

<details>
<summary><strong>🇦🇪 Oriente Médio (2)</strong></summary>

| Provedor | Cartão? | Oferta gratuita | Obter chave |
|---|---|---|---|
| Falcon (TII) | ✅ Não | Nível gratuito | [Obter →](https://falconllm.tii.ae) |
| Inception AI | 📧 Email | Créditos · never | [Obter →](https://inceptionai.ai) |

</details>


<!-- END_REGIONAL -->

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
