<p align="center">
  <h1 align="center">🆓 無料 LLM API 一覧</h1>
  <p align="center"><strong>70以上のプロバイダー · 8地域 · 永久無料枠 + トライアルクレジット</strong></p>
</p>

<p align="center">
  <a href="https://www.freellm.site" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/🌐_サイト-freellm.site-6366f1?style=for-the-badge" alt="サイト"/></a>
  <a href="https://github.com/khushaljethava/freellm-apis" target="_blank" rel="noopener"><img src="https://img.shields.io/github/stars/khushaljethava/freellm-apis?style=for-the-badge&color=f59e0b" alt="Stars"/></a>
  <img src="https://img.shields.io/badge/プロバイダー-70%2B-ec4899?style=for-the-badge" alt="70+プロバイダー"/>
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
- ✅ **70以上のプロバイダー** — グローバル、インド、中国、日本、韓国、ヨーロッパ、中東、SEA
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
# Groq 無料枠: 毎分30リクエスト、1日1,000リクエスト
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

<!-- BEGIN_PERMANENT -->
| プロバイダー | モデル | カード | 最大コンテキスト | キーを取得 |
|---|---|---|---|---|
| [OpenRouter](https://www.freellm.site/ja/providers/openrouter/?utm_source=github&utm_medium=readme) | 16 | 📧 登録 | 1M | [取得 →](https://openrouter.ai/workspaces/default/keys) |
| [Google Gemini](https://www.freellm.site/ja/providers/google_gemini/?utm_source=github&utm_medium=readme) | 11 | ✅ 不要 | 1M | [取得 →](https://aistudio.google.com/app/apikey) |
| [OpenCode Zen](https://www.freellm.site/ja/providers/opencode_zen/?utm_source=github&utm_medium=readme) | 10 | 📧 登録 | 1M | [取得 →](https://opencode.ai/auth) |
| [Groq](https://www.freellm.site/ja/providers/groq/?utm_source=github&utm_medium=readme) | 9 | ✅ 不要 | 131K | [取得 →](https://console.groq.com/keys) |
| [Cloudflare Workers AI](https://www.freellm.site/ja/providers/cloudflare/?utm_source=github&utm_medium=readme) | 8 | ✅ 不要 | 1M | [取得 →](https://dash.cloudflare.com/profile/api-tokens) |
| [OVHcloud AI Endpoints](https://www.freellm.site/ja/providers/ovhcloud_ai/?utm_source=github&utm_medium=readme) | 8 | ✅ 不要 | 262K | [取得 →](https://endpoints.ai.cloud.ovh.net) |
| [ElevenLabs](https://www.freellm.site/ja/providers/elevenlabs/?utm_source=github&utm_medium=readme) | 6 | ✅ 不要 | — | [取得 →](https://elevenlabs.io/app/sign-up) |
| [OrcaRouter](https://www.freellm.site/ja/providers/orcarouter/?utm_source=github&utm_medium=readme) | 6 | 📧 登録 | — | [取得 →](https://www.orcarouter.ai/models) |
| [Cohere](https://www.freellm.site/ja/providers/cohere/?utm_source=github&utm_medium=readme) | 5 | ✅ 不要 | 256K | [取得 →](https://dashboard.cohere.com/api-keys) |
| [NVIDIA NIM](https://www.freellm.site/ja/providers/nvidia_nim/?utm_source=github&utm_medium=readme) | 5 | 📱 電話 | 1M | [取得 →](https://build.nvidia.com/settings/api-keys) |
| [SambaNova Cloud](https://www.freellm.site/ja/providers/sambanova/?utm_source=github&utm_medium=readme) | 5 | 📧 登録 | 131K | [取得 →](https://cloud.sambanova.ai/apis) |
| [Zhipu AI](https://www.freellm.site/ja/providers/zhipu_ai/?utm_source=github&utm_medium=readme) | 5 | ✅ 不要 | 200K | [取得 →](https://bigmodel.cn) |
| [ModelScope](https://www.freellm.site/ja/providers/modelscope/?utm_source=github&utm_medium=readme) | 5 | 📧 登録 | 1M | [取得 →](https://modelscope.cn/my/myaccesstoken) |
| [Zenmux](https://www.freellm.site/ja/providers/zenmux/?utm_source=github&utm_medium=readme) | 5 | 📧 登録 | 524K | [取得 →](https://zenmux.ai) |
| [Mistral AI](https://www.freellm.site/ja/providers/mistral/?utm_source=github&utm_medium=readme) | 4 | ✅ 不要 | 256K | [取得 →](https://console.mistral.ai/api-keys) |
| [LLM7.io](https://www.freellm.site/ja/providers/llm7/?utm_source=github&utm_medium=readme) | 4 | ✅ 不要 | 400K | [取得 →](https://dash.llm7.io) |
| [AI Singapore (SEA-LION)](https://www.freellm.site/ja/providers/ai_singapore/?utm_source=github&utm_medium=readme) | 4 | 📧 登録 | 262K | [取得 →](https://playground.sea-lion.ai) |
| [Z.ai](https://www.freellm.site/ja/providers/zai/?utm_source=github&utm_medium=readme) | 3 | ✅ 不要 | 200K | [取得 →](https://z.ai/manage-apikey/apikey-list) |
| [SiliconFlow (CN)](https://www.freellm.site/ja/providers/siliconflow_cn/?utm_source=github&utm_medium=readme) | 1 | 📧 登録 | 262K | [取得 →](https://siliconflow.cn) |
| [SenseNova](https://www.freellm.site/ja/providers/sensenova/?utm_source=github&utm_medium=readme) | 1 | 📱 電話 | — | [取得 →](https://platform.sensenova.cn/login) |
| [iFlytek Spark](https://www.freellm.site/ja/providers/iflytek_spark/?utm_source=github&utm_medium=readme) | 1 | 📧 登録 | 8K | [取得 →](https://console.xfyun.cn/services/cbm) |
| [Pollinations](https://www.freellm.site/ja/providers/pollinations/?utm_source=github&utm_medium=readme) | 1 | ✅ 不要 | 131K | [取得 →](https://enter.pollinations.ai) |
| AI4Bharat | 0 | ✅ 不要 | — | [取得 →](https://ai4bharat.iitm.ac.in) |
| BharatGen | 0 | ✅ 不要 | — | [取得 →](https://bharatgen.com) |
| Wrtn Technologies | 0 | ✅ 不要 | — | [取得 →](https://wrtn.ai) |
| H Company | 0 | 📧 登録 | — | [取得 →](https://portal.hcompany.ai) |
| DeepL API | 0 | ✅ 不要 | — | [取得 →](https://developers.deepl.com) |
| Falcon (TII) | 0 | ✅ 不要 | — | [取得 →](https://falconllm.tii.ae) |

<!-- END_PERMANENT -->

### 💰 登録時無料クレジット

<!-- BEGIN_CREDITS -->
| プロバイダー | クレジット | 期限 | カード | キーを取得 |
|---|---|---|---|---|
| [xAI (Grok)](https://www.freellm.site/ja/providers/xai/?utm_source=github&utm_medium=readme) | $25 | monthly | 📧 登録 | [取得 →](https://console.x.ai) |
| [Baichuan AI](https://www.freellm.site/ja/providers/baichuan/?utm_source=github&utm_medium=readme) | $11 | 3 months | 📧 登録 | [取得 →](https://platform.baichuan-ai.com) |
| [AI21 Labs](https://www.freellm.site/ja/providers/ai21/?utm_source=github&utm_medium=readme) | $10 | 3 months | ✅ 不要 | [取得 →](https://www.ai21.com) |
| [Novita AI](https://www.freellm.site/ja/providers/novita_ai/?utm_source=github&utm_medium=readme) | $10 | 90 days | ✅ 不要 | [取得 →](https://novita.ai) |
| [Upstage AI](https://www.freellm.site/ja/providers/upstage_ai/?utm_source=github&utm_medium=readme) | $10 | never | ✅ 不要 | [取得 →](https://console.upstage.ai) |
| [Cerebras](https://www.freellm.site/ja/providers/cerebras/?utm_source=github&utm_medium=readme) | $5 | 30 days | 💳 必要 | [取得 →](https://cloud.cerebras.ai/) |
| [DeepSeek](https://www.freellm.site/ja/providers/deepseek/?utm_source=github&utm_medium=readme) | $5 | on signup | 📧 登録 | [取得 →](https://platform.deepseek.com/api_keys) |
| Nscale | $5 | on signup | 📧 登録 | [取得 →](https://console.nscale.com/) |
| [Sarvam AI](https://www.freellm.site/ja/providers/sarvam_ai/?utm_source=github&utm_medium=readme) | $1.1 | never | 📧 登録 | [取得 →](https://dashboard.sarvam.ai) |
| [Fireworks AI](https://www.freellm.site/ja/providers/fireworks/?utm_source=github&utm_medium=readme) | $1 | never | ✅ 不要 | [取得 →](https://app.fireworks.ai/settings/users/api-keys) |
| [Nebius Token Factory](https://www.freellm.site/ja/providers/nebius/?utm_source=github&utm_medium=readme) | $1 | 30 days | 💳 必要 | [取得 →](https://tokenfactory.nebius.com) |
| [SiliconFlow](https://www.freellm.site/ja/providers/siliconflow/?utm_source=github&utm_medium=readme) | $1 | never | 📧 登録 | [取得 →](https://cloud.siliconflow.com) |
| [Stability AI](https://www.freellm.site/ja/providers/stability_ai/?utm_source=github&utm_medium=readme) | $0.25 | never | ✅ 不要 | [取得 →](https://platform.stability.ai) |
| [Hugging Face](https://www.freellm.site/ja/providers/huggingface/?utm_source=github&utm_medium=readme) | $0.1 | monthly | ✅ 不要 | [取得 →](https://huggingface.co/settings/tokens) |
| Replicate | — | — | ✅ 不要 | [取得 →](https://replicate.com) |
| Fal AI | — | varies (1 week to 1 year) | ✅ 不要 | [取得 →](https://fal.ai) |
| [Vercel AI Gateway](https://www.freellm.site/ja/providers/vercel_ai_gateway/?utm_source=github&utm_medium=readme) | — | monthly | 📧 登録 | [取得 →](https://vercel.com/ai-gateway) |
| [Baseten](https://www.freellm.site/ja/providers/baseten/?utm_source=github&utm_medium=readme) | — | never | ✅ 不要 | [取得 →](https://app.baseten.co/signup) |
| Krutrim AI | — | never | 📧 登録 | [取得 →](https://www.olakrutrim.com) |
| CoRover BharatGPT | — | never | 📧 登録 | [取得 →](https://corover.ai) |
| Gnani.ai | — | never | 📧 登録 | [取得 →](https://gnani.ai) |
| Soket AI | — | never | 📧 登録 | [取得 →](https://soket.ai) |
| Neysa AI | — | never | 📧 登録 | [取得 →](https://neysa.ai) |
| [Alibaba DashScope](https://www.freellm.site/ja/providers/alibaba_dashscope/?utm_source=github&utm_medium=readme) | — | 90 days | ✅ 不要 | [取得 →](https://bailian.console.aliyun.com) |
| [Alibaba Model Studio](https://www.freellm.site/ja/providers/alibaba_model_studio/?utm_source=github&utm_medium=readme) | — | 90 days | 📧 登録 | [取得 →](https://modelstudio.console.alibabacloud.com) |
| MiniMax | — | never | 📧 登録 | [取得 →](https://platform.minimax.io) |
| [Tencent Hunyuan](https://www.freellm.site/ja/providers/tencent_hunyuan/?utm_source=github&utm_medium=readme) | — | 1 year | 📧 登録 | [取得 →](https://console.cloud.tencent.com/hunyuan) |
| [Baidu ERNIE](https://www.freellm.site/ja/providers/baidu_ernie/?utm_source=github&utm_medium=readme) | — | 3 months | 📧 登録 | [取得 →](https://console.bce.baidu.com/qianfan) |
| [StepFun](https://www.freellm.site/ja/providers/stepfun/?utm_source=github&utm_medium=readme) | — | never | 📧 登録 | [取得 →](https://platform.stepfun.com) |
| Volcengine Ark | — | — | 📧 登録 | [取得 →](https://console.volcengine.com/ark) |
| Huawei Cloud Pangu | — | never | 📧 登録 | [取得 →](https://www.huaweicloud.com) |
| [Naver HyperCLOVA X](https://www.freellm.site/ja/providers/naver_hyperclova/?utm_source=github&utm_medium=readme) | — | never | 📧 登録 | [取得 →](https://clovastudio.ncloud.com) |
| LG EXAONE | — | never | 📧 登録 | [取得 →](https://www.lgresearch.ai) |
| SK Telecom A.X | — | never | 📧 登録 | [取得 →](https://www.sktelecom.com) |
| LightOn | — | never | 📧 登録 | [取得 →](https://lighton.ai/pricing) |
| [Scaleway AI](https://www.freellm.site/ja/providers/scaleway_ai/?utm_source=github&utm_medium=readme) | — | never | 💳 必要 | [取得 →](https://console.scaleway.com/generative-api/models) |
| Inception AI | — | never | 📧 登録 | [取得 →](https://inceptionai.ai) |
| GMI Cloud | — | never | 📧 登録 | [取得 →](https://console.gmicloud.ai) |
| NCS AI | — | never | 📧 登録 | [取得 →](https://www.ncs.co) |
| Sakana AI | — | never | 📧 登録 | [取得 →](https://console.sakana.ai) |
| [Preferred Networks](https://www.freellm.site/ja/providers/preferred_networks/?utm_source=github&utm_medium=readme) | — | 1 month | 📧 登録 | [取得 →](https://plamo.preferredai.jp/api) |
| Fujitsu Kozuchi | — | never | 📧 登録 | [取得 →](https://www.fujitsu.com/global/services/business-services/kozuchi) |
| NTT DATA AI | — | never | 📧 登録 | [取得 →](https://www.nttdata.com/global/en/) |
| NEC Generative AI | — | never | 📧 登録 | [取得 →](https://www.nec.com) |
| Rakuten AI | — | never | 📧 登録 | [取得 →](https://global.rakuten.com/corp/) |

<!-- END_CREDITS -->

<!-- BEGIN_REGIONAL -->

---

### 🌍 地域別プロバイダー

<details>
<summary><strong>🇨🇳 中国 (14)</strong></summary>

| プロバイダー | カード | 無料枠 | キーを取得 |
|---|---|---|---|
| [ModelScope](https://www.freellm.site/ja/providers/modelscope/?utm_source=github&utm_medium=readme) | 📧 登録 | 無料枠 | [取得 →](https://modelscope.cn/my/myaccesstoken) |
| [Zhipu AI](https://www.freellm.site/ja/providers/zhipu_ai/?utm_source=github&utm_medium=readme) | ✅ 不要 | 無料枠 | [取得 →](https://bigmodel.cn) |
| [Alibaba DashScope](https://www.freellm.site/ja/providers/alibaba_dashscope/?utm_source=github&utm_medium=readme) | ✅ 不要 | クレジット · 90 days | [取得 →](https://bailian.console.aliyun.com) |
| [Alibaba Model Studio](https://www.freellm.site/ja/providers/alibaba_model_studio/?utm_source=github&utm_medium=readme) | 📧 登録 | クレジット · 90 days | [取得 →](https://modelstudio.console.alibabacloud.com) |
| [Baichuan AI](https://www.freellm.site/ja/providers/baichuan/?utm_source=github&utm_medium=readme) | 📧 登録 | $11 · 3 months | [取得 →](https://platform.baichuan-ai.com) |
| [Baidu ERNIE](https://www.freellm.site/ja/providers/baidu_ernie/?utm_source=github&utm_medium=readme) | 📧 登録 | クレジット · 3 months | [取得 →](https://console.bce.baidu.com/qianfan) |
| [Tencent Hunyuan](https://www.freellm.site/ja/providers/tencent_hunyuan/?utm_source=github&utm_medium=readme) | 📧 登録 | クレジット · 1 year | [取得 →](https://console.cloud.tencent.com/hunyuan) |
| [SenseNova](https://www.freellm.site/ja/providers/sensenova/?utm_source=github&utm_medium=readme) | 📱 電話 | 無料枠 | [取得 →](https://platform.sensenova.cn/login) |
| [SiliconFlow (CN)](https://www.freellm.site/ja/providers/siliconflow_cn/?utm_source=github&utm_medium=readme) | 📧 登録 | 無料枠 | [取得 →](https://siliconflow.cn) |
| [StepFun](https://www.freellm.site/ja/providers/stepfun/?utm_source=github&utm_medium=readme) | 📧 登録 | クレジット · never | [取得 →](https://platform.stepfun.com) |
| [iFlytek Spark](https://www.freellm.site/ja/providers/iflytek_spark/?utm_source=github&utm_medium=readme) | 📧 登録 | 無料枠 | [取得 →](https://console.xfyun.cn/services/cbm) |
| Huawei Cloud Pangu | 📧 登録 | クレジット · never | [取得 →](https://www.huaweicloud.com) |
| MiniMax | 📧 登録 | クレジット · never | [取得 →](https://platform.minimax.io) |
| Volcengine Ark | 📧 登録 | クレジット | [取得 →](https://console.volcengine.com/ark) |

</details>

<details>
<summary><strong>🇮🇳 インド (8)</strong></summary>

| プロバイダー | カード | 無料枠 | キーを取得 |
|---|---|---|---|
| [Sarvam AI](https://www.freellm.site/ja/providers/sarvam_ai/?utm_source=github&utm_medium=readme) | 📧 登録 | $1.1 · never | [取得 →](https://dashboard.sarvam.ai) |
| AI4Bharat | ✅ 不要 | 無料枠 | [取得 →](https://ai4bharat.iitm.ac.in) |
| BharatGen | ✅ 不要 | 無料枠 | [取得 →](https://bharatgen.com) |
| CoRover BharatGPT | 📧 登録 | クレジット · never | [取得 →](https://corover.ai) |
| Gnani.ai | 📧 登録 | クレジット · never | [取得 →](https://gnani.ai) |
| Krutrim AI | 📧 登録 | クレジット · never | [取得 →](https://www.olakrutrim.com) |
| Neysa AI | 📧 登録 | クレジット · never | [取得 →](https://neysa.ai) |
| Soket AI | 📧 登録 | クレジット · never | [取得 →](https://soket.ai) |

</details>

<details>
<summary><strong>🇪🇺 ヨーロッパ (7)</strong></summary>

| プロバイダー | カード | 無料枠 | キーを取得 |
|---|---|---|---|
| [OVHcloud AI Endpoints](https://www.freellm.site/ja/providers/ovhcloud_ai/?utm_source=github&utm_medium=readme) | ✅ 不要 | 無料枠 | [取得 →](https://endpoints.ai.cloud.ovh.net) |
| [Scaleway AI](https://www.freellm.site/ja/providers/scaleway_ai/?utm_source=github&utm_medium=readme) | 💳 必要 | クレジット · never | [取得 →](https://console.scaleway.com/generative-api/models) |
| [ElevenLabs](https://www.freellm.site/ja/providers/elevenlabs/?utm_source=github&utm_medium=readme) | ✅ 不要 | 無料枠 | [取得 →](https://elevenlabs.io/app/sign-up) |
| [Stability AI](https://www.freellm.site/ja/providers/stability_ai/?utm_source=github&utm_medium=readme) | ✅ 不要 | $0.25 · never | [取得 →](https://platform.stability.ai) |
| DeepL API | ✅ 不要 | 無料枠 | [取得 →](https://developers.deepl.com) |
| H Company | 📧 登録 | 無料枠 | [取得 →](https://portal.hcompany.ai) |
| LightOn | 📧 登録 | クレジット · never | [取得 →](https://lighton.ai/pricing) |

</details>

<details>
<summary><strong>🇯🇵 日本 (6)</strong></summary>

| プロバイダー | カード | 無料枠 | キーを取得 |
|---|---|---|---|
| [Preferred Networks](https://www.freellm.site/ja/providers/preferred_networks/?utm_source=github&utm_medium=readme) | 📧 登録 | クレジット · 1 month | [取得 →](https://plamo.preferredai.jp/api) |
| Fujitsu Kozuchi | 📧 登録 | クレジット · never | [取得 →](https://www.fujitsu.com/global/services/business-services/kozuchi) |
| NEC Generative AI | 📧 登録 | クレジット · never | [取得 →](https://www.nec.com) |
| NTT DATA AI | 📧 登録 | クレジット · never | [取得 →](https://www.nttdata.com/global/en/) |
| Rakuten AI | 📧 登録 | クレジット · never | [取得 →](https://global.rakuten.com/corp/) |
| Sakana AI | 📧 登録 | クレジット · never | [取得 →](https://console.sakana.ai) |

</details>

<details>
<summary><strong>🇰🇷 韓国 (5)</strong></summary>

| プロバイダー | カード | 無料枠 | キーを取得 |
|---|---|---|---|
| [Upstage AI](https://www.freellm.site/ja/providers/upstage_ai/?utm_source=github&utm_medium=readme) | ✅ 不要 | $10 · never | [取得 →](https://console.upstage.ai) |
| [Naver HyperCLOVA X](https://www.freellm.site/ja/providers/naver_hyperclova/?utm_source=github&utm_medium=readme) | 📧 登録 | クレジット · never | [取得 →](https://clovastudio.ncloud.com) |
| LG EXAONE | 📧 登録 | クレジット · never | [取得 →](https://www.lgresearch.ai) |
| SK Telecom A.X | 📧 登録 | クレジット · never | [取得 →](https://www.sktelecom.com) |
| Wrtn Technologies | ✅ 不要 | 無料枠 | [取得 →](https://wrtn.ai) |

</details>

<details>
<summary><strong>🇸🇬 東南アジア (3)</strong></summary>

| プロバイダー | カード | 無料枠 | キーを取得 |
|---|---|---|---|
| [AI Singapore (SEA-LION)](https://www.freellm.site/ja/providers/ai_singapore/?utm_source=github&utm_medium=readme) | 📧 登録 | 無料枠 | [取得 →](https://playground.sea-lion.ai) |
| GMI Cloud | 📧 登録 | クレジット · never | [取得 →](https://console.gmicloud.ai) |
| NCS AI | 📧 登録 | クレジット · never | [取得 →](https://www.ncs.co) |

</details>

<details>
<summary><strong>🇦🇪 中東 (2)</strong></summary>

| プロバイダー | カード | 無料枠 | キーを取得 |
|---|---|---|---|
| Falcon (TII) | ✅ 不要 | 無料枠 | [取得 →](https://falconllm.tii.ae) |
| Inception AI | 📧 登録 | クレジット · never | [取得 →](https://inceptionai.ai) |

</details>


<!-- END_REGIONAL -->

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
