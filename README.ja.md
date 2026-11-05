<p align="center">
  <h1 align="center">🆓 無料 LLM API 一覧</h1>
  <p align="center"><strong>90以上のプロバイダー · 8地域 · 永久無料枠 + トライアルクレジット</strong></p>
</p>

<p align="center">
  <a href="https://www.freellm.site" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/🌐_サイト-freellm.site-6366f1?style=for-the-badge" alt="サイト"/></a>
  <a href="https://github.com/khushaljethava/freellm-apis" target="_blank" rel="noopener"><img src="https://img.shields.io/github/stars/khushaljethava/freellm-apis?style=for-the-badge&color=f59e0b" alt="Stars"/></a>
  <img src="https://img.shields.io/badge/プロバイダー-90%2B-ec4899?style=for-the-badge" alt="90+プロバイダー"/>
</p>

<p align="center">
  <a href="README.md">English</a> · <a href="README.zh.md">简体中文</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.es.md">Español</a> · <strong>日本語</strong> · <a href="README.ko.md">한국어</a> · <a href="README.pt.md">Português</a> · <a href="README.ar.md">العربية</a> · <a href="README.fr.md">Français</a> · <a href="README.de.md">Deutsch</a> · <a href="README.ru.md">Русский</a>
</p>

---

## なぜこのプロジェクトが必要か

無料の LLM API を探すために、何十ものウェブサイトを調べたり、5つのプラットフォームに登録したり、どの無料枠がまだ使えるかを推測したりする必要はありません。

このリポジトリは、すべての無料 LLM API の**構造化された機械可読ディレクトリ**です — クレジットカード要件、ベース URL、直接 API キーリンク付き。

- ✅ **カード不要の選択肢を優先** — どのプロバイダーが支払い情報不要かを明確に表示
- ✅ **OpenAI 互換** — すべてのプロバイダーが `baseURL` 置換として機能
- ✅ **90以上のプロバイダー** — グローバル、インド、中国、日本、韓国、ヨーロッパ、中東、SEA
- ✅ **機械可読データ** — `data/providers.json` の構造化 JSON

---

## ⚡ 3ステップで始める

**1. プロバイダーを選ぶ** — 下の[プロバイダーディレクトリ](#-プロバイダーディレクトリ)を参照。**Groq** から始めましょう（クレジットカード不要、30 RPM 無料）。

**2. API キーを取得** — `取得 →` リンクをクリックし、メールで登録してキーをコピー。1分以内に完了。

**3. 接続する** — Base URL + モデル ID をツールにペーストするだけ。

---

## 🚀 30秒で始める

### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",  # 無料、クレジットカード不要
    api_key="YOUR_GROQ_KEY",                     # console.groq.com/keys で取得
)

response = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[{"role": "user", "content": "こんにちは！"}],
)
print(response.choices[0].message.content)
# Groq 無料枠: 毎分30リクエスト、1日14,400リクエスト
```

### curl

```bash
curl https://api.groq.com/openai/v1/chat/completions \
  -H "Authorization: Bearer $GROQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"llama-3.3-70b-versatile","messages":[{"role":"user","content":"こんにちは！"}]}'
```

---

## 📋 プロバイダーディレクトリ

### ⚡ 永久無料枠

**無制限の無料アクセス**（レート制限あり）— 期限なし。

| プロバイダー | カード | 備考 | 最大コンテキスト | キーを取得 |
|---|---|---|---|---|
| Groq | ✅ 不要 | 30 RPM · 14,400 RPD | 262K | <a href="https://console.groq.com/keys" target="_blank" rel="noopener">取得 →</a> |
| GitHub Models | ✅ 不要 | GitHub アカウント必要 | 1M | <a href="https://github.com/marketplace/models" target="_blank" rel="noopener">取得 →</a> |
| Google Gemini | ✅ 不要 | Flash で 200万トークン | 2M | <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">取得 →</a> |
| Mistral AI | ✅ 不要 | レート制限付き | 256K | <a href="https://console.mistral.ai/api-keys" target="_blank" rel="noopener">取得 →</a> |
| Cerebras | ✅ 不要 | 超高速推論 | 131K | <a href="https://cloud.cerebras.ai/" target="_blank" rel="noopener">取得 →</a> |
| Cohere | ✅ 不要 | 毎分20コール | 256K | <a href="https://dashboard.cohere.com/api-keys" target="_blank" rel="noopener">取得 →</a> |
| Hugging Face | ✅ 不要 | 無料推論 API | 131K | <a href="https://huggingface.co/settings/tokens" target="_blank" rel="noopener">取得 →</a> |
| Cloudflare Workers AI | ✅ 不要 | 1日10,000ニューロン | 10M | <a href="https://dash.cloudflare.com/profile/api-tokens" target="_blank" rel="noopener">取得 →</a> |
| OpenRouter | 📧 登録 | 100以上の無料モデル | 1M | <a href="https://openrouter.ai/workspaces/default/keys" target="_blank" rel="noopener">取得 →</a> |
| NVIDIA NIM | 📱 電話 | 75以上のモデル | 1M | <a href="https://build.nvidia.com/settings/api-keys" target="_blank" rel="noopener">取得 →</a> |
| Zhipu AI | ✅ 不要 | GLM-4.7-Flash と GLM-4.5-Flash が無料 | 128K | <a href="https://open.bigmodel.cn" target="_blank" rel="noopener">取得 →</a> |

### 💰 登録時無料クレジット

| プロバイダー | クレジット | 期限 | カード | キーを取得 |
|---|---|---|---|---|
| xAI (Grok) | $25 | 毎月 | 📧 登録 | <a href="https://console.x.ai" target="_blank" rel="noopener">取得 →</a> |
| Modal | $30 | 毎月 | ✅ 不要 | <a href="https://modal.com" target="_blank" rel="noopener">取得 →</a> |
| Hyperbolic | $10 | 無期限 | ✅ 不要 | <a href="https://app.hyperbolic.xyz/settings" target="_blank" rel="noopener">取得 →</a> |
| Lambda AI | $10 | 無期限 | ✅ 不要 | <a href="https://lambda.ai" target="_blank" rel="noopener">取得 →</a> |
| DeepSeek | $5 | 登録時 | 📧 登録 | <a href="https://platform.deepseek.com/api_keys" target="_blank" rel="noopener">取得 →</a> |
| Anthropic | $5 | 無期限 | 💳 必要 | <a href="https://console.anthropic.com" target="_blank" rel="noopener">取得 →</a> |
| Together AI | $1 | 無期限 | ✅ 不要 | <a href="https://api.together.ai/settings/api-keys" target="_blank" rel="noopener">取得 →</a> |

---

<details>
<summary><strong>🇯🇵 日本のプロバイダー (5)</strong></summary>

| プロバイダー | 特徴 | 登録 |
|---|---|---|
| Sakana AI | 日本の AI 研究所 | <a href="https://sakana.ai" target="_blank" rel="noopener">→</a> |
| Preferred Networks | PLaMo モデル | <a href="https://www.preferred.jp" target="_blank" rel="noopener">→</a> |
| Fujitsu Kozuchi | 富士通エンタープライズ AI | <a href="https://www.fujitsu.com/global/services/business-services/kozuchi" target="_blank" rel="noopener">→</a> |
| SB Intuitions | ソフトバンク日本語 LLM | <a href="https://www.sbintuitions.co.jp" target="_blank" rel="noopener">→</a> |
| Rakuten AI | 楽天 AI モデル | <a href="https://global.rakuten.com/corp/" target="_blank" rel="noopener">→</a> |

</details>

---

## 🤝 コントリビュート

1. このリポジトリを **Fork** する
2. [schema](data/schema.md) に従って `data/providers.json` を **編集** する
3. 簡単な説明と共に **PR を送る**

詳細は [CONTRIBUTING.md](CONTRIBUTING.md) を参照してください。

---

<p align="center">
  <strong>役に立ったら ⭐ スターをお願いします！</strong><br/>
  <a href="https://github.com/khushaljethava/freellm-apis">github.com/khushaljethava/freellm-apis</a>
</p>

---

MIT License · [LICENSE](LICENSE) · © 2026 freellm.site
