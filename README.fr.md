<p align="center">
  <h1 align="center">🆓 APIs LLM Gratuites</h1>
  <p align="center"><strong>70+ fournisseurs · 8 régions · Niveaux gratuits permanents + crédits d'essai</strong></p>
</p>

<p align="center">
  <a href="https://www.freellm.site" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/🌐_Site_Web-freellm.site-6366f1?style=for-the-badge" alt="Site Web"/></a>
  <a href="https://github.com/khushaljethava/freellm-apis" target="_blank" rel="noopener"><img src="https://img.shields.io/github/stars/khushaljethava/freellm-apis?style=for-the-badge&color=f59e0b" alt="Stars"/></a>
  <img src="https://img.shields.io/badge/Fournisseurs-70%2B-ec4899?style=for-the-badge" alt="70+ Fournisseurs"/>
</p>

<p align="center">
  <a href="README.md">English</a> · <a href="README.zh.md">简体中文</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.es.md">Español</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.pt.md">Português</a> · <a href="README.ar.md">العربية</a> · <strong>Français</strong> · <a href="README.de.md">Deutsch</a> · <a href="README.ru.md">Русский</a>
</p>

---

## Pourquoi ce projet existe

Trouver une API LLM gratuite ne devrait pas signifier parcourir des dizaines de sites, s'inscrire sur cinq plateformes ou deviner quel niveau gratuit fonctionne encore.

Ce dépôt est un **répertoire structuré et lisible par machine** de chaque API LLM gratuite — avec les exigences de carte de crédit, les URLs de base et les liens directs vers les clés API.

- ✅ **Options sans carte en premier** — indique clairement quels fournisseurs ne nécessitent aucune information de paiement
- ✅ **Compatible OpenAI** — tous les fournisseurs fonctionnent comme remplacement de `baseURL`
- ✅ **70+ fournisseurs** — mondial, Inde, Chine, Japon, Corée, Europe, Moyen-Orient, SEA
- ✅ **Données lisibles par machine** — JSON structuré dans `data/providers.json`

---

## ⚡ Comment utiliser — 3 étapes

**1. Choisissez un fournisseur** — voir [Répertoire des fournisseurs](#-répertoire-des-fournisseurs). Commencez avec **Groq** (sans carte, 30 RPM gratuit).

**2. Obtenez votre clé API** — cliquez sur n'importe quel lien `Obtenir →`, inscrivez-vous avec un email et copiez votre clé. Moins d'1 minute.

**3. Connectez** — copiez le Base URL + l'ID du modèle dans votre outil.

---

## 🚀 Démarrage rapide — 30 secondes

### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",  # gratuit, sans carte
    api_key="VOTRE_CLE_GROQ",                    # obtenez sur console.groq.com/keys
)

response = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[{"role": "user", "content": "Bonjour !"}],
)
print(response.choices[0].message.content)
# Niveau gratuit Groq : 30 RPM, 14 400 RPD
```

### curl

```bash
curl https://api.groq.com/openai/v1/chat/completions \
  -H "Authorization: Bearer $GROQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"llama-3.3-70b-versatile","messages":[{"role":"user","content":"Bonjour !"}]}'
```

---

## 📋 Répertoire des fournisseurs

### ⚡ Niveaux gratuits permanents

**Accès illimité** (avec limite de débit) — sans expiration.

<!-- BEGIN_PERMANENT -->
| Fournisseur | Modèles | Carte ? | Contexte max. | Obtenir la clé |
|---|---|---|---|---|
| [OpenRouter](https://www.freellm.site/fr/providers/openrouter/?utm_source=github&utm_medium=readme) | 16 | 📧 Email | 1M | [Obtenir →](https://openrouter.ai/workspaces/default/keys) |
| [Google Gemini](https://www.freellm.site/fr/providers/google_gemini/?utm_source=github&utm_medium=readme) | 11 | ✅ Non | 1M | [Obtenir →](https://aistudio.google.com/app/apikey) |
| [OpenCode Zen](https://www.freellm.site/fr/providers/opencode_zen/?utm_source=github&utm_medium=readme) | 10 | 📧 Email | 1M | [Obtenir →](https://opencode.ai/auth) |
| [Groq](https://www.freellm.site/fr/providers/groq/?utm_source=github&utm_medium=readme) | 9 | ✅ Non | 131K | [Obtenir →](https://console.groq.com/keys) |
| [Cloudflare Workers AI](https://www.freellm.site/fr/providers/cloudflare/?utm_source=github&utm_medium=readme) | 8 | ✅ Non | 1M | [Obtenir →](https://dash.cloudflare.com/profile/api-tokens) |
| [OVHcloud AI Endpoints](https://www.freellm.site/fr/providers/ovhcloud_ai/?utm_source=github&utm_medium=readme) | 8 | ✅ Non | 262K | [Obtenir →](https://endpoints.ai.cloud.ovh.net) |
| [ElevenLabs](https://www.freellm.site/fr/providers/elevenlabs/?utm_source=github&utm_medium=readme) | 6 | ✅ Non | — | [Obtenir →](https://elevenlabs.io/app/sign-up) |
| [OrcaRouter](https://www.freellm.site/fr/providers/orcarouter/?utm_source=github&utm_medium=readme) | 6 | 📧 Email | — | [Obtenir →](https://www.orcarouter.ai/models) |
| [Cohere](https://www.freellm.site/fr/providers/cohere/?utm_source=github&utm_medium=readme) | 5 | ✅ Non | 256K | [Obtenir →](https://dashboard.cohere.com/api-keys) |
| [NVIDIA NIM](https://www.freellm.site/fr/providers/nvidia_nim/?utm_source=github&utm_medium=readme) | 5 | 📱 Téléphone | 1M | [Obtenir →](https://build.nvidia.com/settings/api-keys) |
| [SambaNova Cloud](https://www.freellm.site/fr/providers/sambanova/?utm_source=github&utm_medium=readme) | 5 | 📧 Email | 131K | [Obtenir →](https://cloud.sambanova.ai/apis) |
| [Zhipu AI](https://www.freellm.site/fr/providers/zhipu_ai/?utm_source=github&utm_medium=readme) | 5 | ✅ Non | 200K | [Obtenir →](https://bigmodel.cn) |
| [ModelScope](https://www.freellm.site/fr/providers/modelscope/?utm_source=github&utm_medium=readme) | 5 | 📧 Email | 1M | [Obtenir →](https://modelscope.cn/my/myaccesstoken) |
| [Zenmux](https://www.freellm.site/fr/providers/zenmux/?utm_source=github&utm_medium=readme) | 5 | 📧 Email | 524K | [Obtenir →](https://zenmux.ai) |
| [Mistral AI](https://www.freellm.site/fr/providers/mistral/?utm_source=github&utm_medium=readme) | 4 | ✅ Non | 256K | [Obtenir →](https://console.mistral.ai/api-keys) |
| [LLM7.io](https://www.freellm.site/fr/providers/llm7/?utm_source=github&utm_medium=readme) | 4 | ✅ Non | 400K | [Obtenir →](https://dash.llm7.io) |
| [AI Singapore (SEA-LION)](https://www.freellm.site/fr/providers/ai_singapore/?utm_source=github&utm_medium=readme) | 4 | 📧 Email | 262K | [Obtenir →](https://playground.sea-lion.ai) |
| [Z.ai](https://www.freellm.site/fr/providers/zai/?utm_source=github&utm_medium=readme) | 3 | ✅ Non | 200K | [Obtenir →](https://z.ai/manage-apikey/apikey-list) |
| [SiliconFlow (CN)](https://www.freellm.site/fr/providers/siliconflow_cn/?utm_source=github&utm_medium=readme) | 1 | 📧 Email | 262K | [Obtenir →](https://siliconflow.cn) |
| [SenseNova](https://www.freellm.site/fr/providers/sensenova/?utm_source=github&utm_medium=readme) | 1 | 📱 Téléphone | — | [Obtenir →](https://platform.sensenova.cn/login) |
| [iFlytek Spark](https://www.freellm.site/fr/providers/iflytek_spark/?utm_source=github&utm_medium=readme) | 1 | 📧 Email | 8K | [Obtenir →](https://console.xfyun.cn/services/cbm) |
| [Pollinations](https://www.freellm.site/fr/providers/pollinations/?utm_source=github&utm_medium=readme) | 1 | ✅ Non | 131K | [Obtenir →](https://enter.pollinations.ai) |
| AI4Bharat | 0 | ✅ Non | — | [Obtenir →](https://ai4bharat.iitm.ac.in) |
| BharatGen | 0 | ✅ Non | — | [Obtenir →](https://bharatgen.com) |
| Wrtn Technologies | 0 | ✅ Non | — | [Obtenir →](https://wrtn.ai) |
| H Company | 0 | 📧 Email | — | [Obtenir →](https://portal.hcompany.ai) |
| DeepL API | 0 | ✅ Non | — | [Obtenir →](https://developers.deepl.com) |
| Falcon (TII) | 0 | ✅ Non | — | [Obtenir →](https://falconllm.tii.ae) |

<!-- END_PERMANENT -->

### 💰 Crédits gratuits à l'inscription

<!-- BEGIN_CREDITS -->
| Fournisseur | Crédits | Expiration | Carte ? | Obtenir la clé |
|---|---|---|---|---|
| [xAI (Grok)](https://www.freellm.site/fr/providers/xai/?utm_source=github&utm_medium=readme) | $25 | monthly | 📧 Email | [Obtenir →](https://console.x.ai) |
| [Baichuan AI](https://www.freellm.site/fr/providers/baichuan/?utm_source=github&utm_medium=readme) | $11 | 3 months | 📧 Email | [Obtenir →](https://platform.baichuan-ai.com) |
| [AI21 Labs](https://www.freellm.site/fr/providers/ai21/?utm_source=github&utm_medium=readme) | $10 | 3 months | ✅ Non | [Obtenir →](https://www.ai21.com) |
| [Novita AI](https://www.freellm.site/fr/providers/novita_ai/?utm_source=github&utm_medium=readme) | $10 | 90 days | ✅ Non | [Obtenir →](https://novita.ai) |
| [Upstage AI](https://www.freellm.site/fr/providers/upstage_ai/?utm_source=github&utm_medium=readme) | $10 | never | ✅ Non | [Obtenir →](https://console.upstage.ai) |
| [Cerebras](https://www.freellm.site/fr/providers/cerebras/?utm_source=github&utm_medium=readme) | $5 | 30 days | 💳 Oui | [Obtenir →](https://cloud.cerebras.ai/) |
| [DeepSeek](https://www.freellm.site/fr/providers/deepseek/?utm_source=github&utm_medium=readme) | $5 | on signup | 📧 Email | [Obtenir →](https://platform.deepseek.com/api_keys) |
| Nscale | $5 | on signup | 📧 Email | [Obtenir →](https://console.nscale.com/) |
| [Sarvam AI](https://www.freellm.site/fr/providers/sarvam_ai/?utm_source=github&utm_medium=readme) | $1.1 | never | 📧 Email | [Obtenir →](https://dashboard.sarvam.ai) |
| [Fireworks AI](https://www.freellm.site/fr/providers/fireworks/?utm_source=github&utm_medium=readme) | $1 | never | ✅ Non | [Obtenir →](https://app.fireworks.ai/settings/users/api-keys) |
| [Nebius Token Factory](https://www.freellm.site/fr/providers/nebius/?utm_source=github&utm_medium=readme) | $1 | 30 days | 💳 Oui | [Obtenir →](https://tokenfactory.nebius.com) |
| [SiliconFlow](https://www.freellm.site/fr/providers/siliconflow/?utm_source=github&utm_medium=readme) | $1 | never | 📧 Email | [Obtenir →](https://cloud.siliconflow.com) |
| [Stability AI](https://www.freellm.site/fr/providers/stability_ai/?utm_source=github&utm_medium=readme) | $0.25 | never | ✅ Non | [Obtenir →](https://platform.stability.ai) |
| [Hugging Face](https://www.freellm.site/fr/providers/huggingface/?utm_source=github&utm_medium=readme) | $0.1 | monthly | ✅ Non | [Obtenir →](https://huggingface.co/settings/tokens) |
| Replicate | Niveau gratuit | — | ✅ Non | [Obtenir →](https://replicate.com) |
| Fal AI | Niveau gratuit | varies (1 week to 1 year) | ✅ Non | [Obtenir →](https://fal.ai) |
| [Vercel AI Gateway](https://www.freellm.site/fr/providers/vercel_ai_gateway/?utm_source=github&utm_medium=readme) | Niveau gratuit | monthly | 📧 Email | [Obtenir →](https://vercel.com/ai-gateway) |
| [Baseten](https://www.freellm.site/fr/providers/baseten/?utm_source=github&utm_medium=readme) | Niveau gratuit | never | ✅ Non | [Obtenir →](https://app.baseten.co/signup) |
| Krutrim AI | Niveau gratuit | never | 📧 Email | [Obtenir →](https://www.olakrutrim.com) |
| CoRover BharatGPT | Niveau gratuit | never | 📧 Email | [Obtenir →](https://corover.ai) |
| Gnani.ai | Niveau gratuit | never | 📧 Email | [Obtenir →](https://gnani.ai) |
| Soket AI | Niveau gratuit | never | 📧 Email | [Obtenir →](https://soket.ai) |
| Neysa AI | Niveau gratuit | never | 📧 Email | [Obtenir →](https://neysa.ai) |
| [Alibaba DashScope](https://www.freellm.site/fr/providers/alibaba_dashscope/?utm_source=github&utm_medium=readme) | Niveau gratuit | 90 days | ✅ Non | [Obtenir →](https://bailian.console.aliyun.com) |
| [Alibaba Model Studio](https://www.freellm.site/fr/providers/alibaba_model_studio/?utm_source=github&utm_medium=readme) | Niveau gratuit | 90 days | 📧 Email | [Obtenir →](https://modelstudio.console.alibabacloud.com) |
| MiniMax | Niveau gratuit | never | 📧 Email | [Obtenir →](https://platform.minimax.io) |
| [Tencent Hunyuan](https://www.freellm.site/fr/providers/tencent_hunyuan/?utm_source=github&utm_medium=readme) | Niveau gratuit | 1 year | 📧 Email | [Obtenir →](https://console.cloud.tencent.com/hunyuan) |
| [Baidu ERNIE](https://www.freellm.site/fr/providers/baidu_ernie/?utm_source=github&utm_medium=readme) | Niveau gratuit | 3 months | 📧 Email | [Obtenir →](https://console.bce.baidu.com/qianfan) |
| [StepFun](https://www.freellm.site/fr/providers/stepfun/?utm_source=github&utm_medium=readme) | Niveau gratuit | never | 📧 Email | [Obtenir →](https://platform.stepfun.com) |
| Volcengine Ark | Niveau gratuit | — | 📧 Email | [Obtenir →](https://console.volcengine.com/ark) |
| Huawei Cloud Pangu | Niveau gratuit | never | 📧 Email | [Obtenir →](https://www.huaweicloud.com) |
| [Naver HyperCLOVA X](https://www.freellm.site/fr/providers/naver_hyperclova/?utm_source=github&utm_medium=readme) | Niveau gratuit | never | 📧 Email | [Obtenir →](https://clovastudio.ncloud.com) |
| LG EXAONE | Niveau gratuit | never | 📧 Email | [Obtenir →](https://www.lgresearch.ai) |
| SK Telecom A.X | Niveau gratuit | never | 📧 Email | [Obtenir →](https://www.sktelecom.com) |
| LightOn | Niveau gratuit | never | 📧 Email | [Obtenir →](https://lighton.ai/pricing) |
| [Scaleway AI](https://www.freellm.site/fr/providers/scaleway_ai/?utm_source=github&utm_medium=readme) | Niveau gratuit | never | 💳 Oui | [Obtenir →](https://console.scaleway.com/generative-api/models) |
| Inception AI | Niveau gratuit | never | 📧 Email | [Obtenir →](https://inceptionai.ai) |
| GMI Cloud | Niveau gratuit | never | 📧 Email | [Obtenir →](https://console.gmicloud.ai) |
| NCS AI | Niveau gratuit | never | 📧 Email | [Obtenir →](https://www.ncs.co) |
| Sakana AI | Niveau gratuit | never | 📧 Email | [Obtenir →](https://console.sakana.ai) |
| [Preferred Networks](https://www.freellm.site/fr/providers/preferred_networks/?utm_source=github&utm_medium=readme) | Niveau gratuit | 1 month | 📧 Email | [Obtenir →](https://plamo.preferredai.jp/api) |
| Fujitsu Kozuchi | Niveau gratuit | never | 📧 Email | [Obtenir →](https://www.fujitsu.com/global/services/business-services/kozuchi) |
| NTT DATA AI | Niveau gratuit | never | 📧 Email | [Obtenir →](https://www.nttdata.com/global/en/) |
| NEC Generative AI | Niveau gratuit | never | 📧 Email | [Obtenir →](https://www.nec.com) |
| Rakuten AI | Niveau gratuit | never | 📧 Email | [Obtenir →](https://global.rakuten.com/corp/) |

<!-- END_CREDITS -->

---

<details>
<summary><strong>🇪🇺 Fournisseurs européens (11)</strong></summary>

| Fournisseur | Pays | Spécialité | S'inscrire |
|---|---|---|---|
| Mistral AI | France | Leader européen des LLM | <a href="https://console.mistral.ai/api-keys" target="_blank" rel="noopener">→</a> |
| Aleph Alpha | Allemagne | Modèles Luminous | <a href="https://aleph-alpha.com" target="_blank" rel="noopener">→</a> |
| DeepL API | Allemagne | Traduction — 500K chars/mois gratuit | <a href="https://developers.deepl.com" target="_blank" rel="noopener">→</a> |
| ElevenLabs | Pologne | Synthèse vocale | <a href="https://elevenlabs.io" target="_blank" rel="noopener">→</a> |
| Stability AI | Royaume-Uni | Modèles image/audio/vidéo | <a href="https://stability.ai" target="_blank" rel="noopener">→</a> |
| Scaleway AI | France | Llama & Mistral sur cloud européen | <a href="https://www.scaleway.com" target="_blank" rel="noopener">→</a> |
| OVHcloud AI | France | Modèles open-source | <a href="https://www.ovhcloud.com" target="_blank" rel="noopener">→</a> |
| LightOn | France | Modèles Alfred | <a href="https://lighton.ai" target="_blank" rel="noopener">→</a> |
| Silo AI | Finlande | Modèles Poro finlandais | <a href="https://www.silo.ai" target="_blank" rel="noopener">→</a> |
| PolyAI | Royaume-Uni | IA conversationnelle | <a href="https://poly.ai" target="_blank" rel="noopener">→</a> |
| H Company | France | Startup française d'IA | <a href="https://hcompany.ai" target="_blank" rel="noopener">→</a> |

</details>

---

## 🤝 Contribuer

1. **Forkez** ce dépôt
2. **Modifiez** `data/providers.json` en suivant le [schema](data/schema.md)
3. **Envoyez une PR** avec une brève description

Consultez [CONTRIBUTING.md](CONTRIBUTING.md) pour plus de détails.

---

<p align="center">
  <strong>Si cela vous a fait gagner du temps, ⭐ étoilez le dépôt !</strong><br/>
  <a href="https://github.com/khushaljethava/freellm-apis">github.com/khushaljethava/freellm-apis</a>
</p>

---

MIT License · [LICENSE](LICENSE) · © 2026 freellm.site
