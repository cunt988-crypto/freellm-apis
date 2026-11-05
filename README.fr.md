<p align="center">
  <h1 align="center">🆓 APIs LLM Gratuites</h1>
  <p align="center"><strong>90+ fournisseurs · 8 régions · Niveaux gratuits permanents + crédits d'essai</strong></p>
</p>

<p align="center">
  <a href="https://www.freellm.site" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/🌐_Site_Web-freellm.site-6366f1?style=for-the-badge" alt="Site Web"/></a>
  <a href="https://github.com/khushaljethava/freellm-apis" target="_blank" rel="noopener"><img src="https://img.shields.io/github/stars/khushaljethava/freellm-apis?style=for-the-badge&color=f59e0b" alt="Stars"/></a>
  <img src="https://img.shields.io/badge/Fournisseurs-90%2B-ec4899?style=for-the-badge" alt="90+ Fournisseurs"/>
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
- ✅ **90+ fournisseurs** — mondial, Inde, Chine, Japon, Corée, Europe, Moyen-Orient, SEA
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

| Fournisseur | Carte ? | Notes | Contexte max. | Obtenir la clé |
|---|---|---|---|---|
| Groq | ✅ Non | 30 RPM · 14 400 RPD | 262K | <a href="https://console.groq.com/keys" target="_blank" rel="noopener">Obtenir →</a> |
| GitHub Models | ✅ Non | Compte GitHub requis | 1M | <a href="https://github.com/marketplace/models" target="_blank" rel="noopener">Obtenir →</a> |
| Google Gemini | ✅ Non | 2M tokens sur Flash | 2M | <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">Obtenir →</a> |
| Mistral AI | ✅ Non | Niveau gratuit avec limites | 256K | <a href="https://console.mistral.ai/api-keys" target="_blank" rel="noopener">Obtenir →</a> |
| Cerebras | ✅ Non | Inférence ultrarapide | 131K | <a href="https://cloud.cerebras.ai/" target="_blank" rel="noopener">Obtenir →</a> |
| Cohere | ✅ Non | 20 appels/min | 256K | <a href="https://dashboard.cohere.com/api-keys" target="_blank" rel="noopener">Obtenir →</a> |
| Hugging Face | ✅ Non | API d'inférence gratuite | 131K | <a href="https://huggingface.co/settings/tokens" target="_blank" rel="noopener">Obtenir →</a> |
| Cloudflare Workers AI | ✅ Non | 10 000 neurons/jour | 10M | <a href="https://dash.cloudflare.com/profile/api-tokens" target="_blank" rel="noopener">Obtenir →</a> |
| OpenRouter | 📧 Email | 100+ modèles gratuits | 1M | <a href="https://openrouter.ai/workspaces/default/keys" target="_blank" rel="noopener">Obtenir →</a> |
| Chutes AI | ✅ Non | Niveau communautaire gratuit | 131K | <a href="https://chutes.ai" target="_blank" rel="noopener">Obtenir →</a> |
| NVIDIA NIM | 📱 Téléphone | 75+ modèles | 1M | <a href="https://build.nvidia.com/settings/api-keys" target="_blank" rel="noopener">Obtenir →</a> |
| Zhipu AI | ✅ Non | GLM-4.7-Flash et GLM-4.5-Flash gratuits | 128K | <a href="https://open.bigmodel.cn" target="_blank" rel="noopener">Obtenir →</a> |

### 💰 Crédits gratuits à l'inscription

| Fournisseur | Crédits | Expiration | Carte ? | Obtenir la clé |
|---|---|---|---|---|
| xAI (Grok) | 25 $ | Mensuel | 📧 Email | <a href="https://console.x.ai" target="_blank" rel="noopener">Obtenir →</a> |
| Modal | 30 $ | Mensuel | ✅ Non | <a href="https://modal.com" target="_blank" rel="noopener">Obtenir →</a> |
| Hyperbolic | 10 $ | Jamais | ✅ Non | <a href="https://app.hyperbolic.xyz/settings" target="_blank" rel="noopener">Obtenir →</a> |
| Lambda AI | 10 $ | Jamais | ✅ Non | <a href="https://lambda.ai" target="_blank" rel="noopener">Obtenir →</a> |
| DeepSeek | 5 $ | À l'inscription | 📧 Email | <a href="https://platform.deepseek.com/api_keys" target="_blank" rel="noopener">Obtenir →</a> |
| Anthropic | 5 $ | Jamais | 💳 Oui | <a href="https://console.anthropic.com" target="_blank" rel="noopener">Obtenir →</a> |
| Together AI | 1 $ | Jamais | ✅ Non | <a href="https://api.together.ai/settings/api-keys" target="_blank" rel="noopener">Obtenir →</a> |
| Fireworks AI | 1 $ | Jamais | ✅ Non | <a href="https://app.fireworks.ai/settings/users/api-keys" target="_blank" rel="noopener">Obtenir →</a> |

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
