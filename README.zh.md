<p align="center">
  <h1 align="center">🆓 免费 LLM API 大全</h1>
  <p align="center"><strong>70+ 家提供商 · 8 个地区 · 永久免费套餐 + 试用积分</strong></p>
</p>

<p align="center">
  <a href="https://www.freellm.site" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/🌐_官网-freellm.site-6366f1?style=for-the-badge" alt="官网"/></a>
  <a href="https://github.com/khushaljethava/freellm-apis" target="_blank" rel="noopener"><img src="https://img.shields.io/github/stars/khushaljethava/freellm-apis?style=for-the-badge&color=f59e0b" alt="Stars"/></a>
  <img src="https://img.shields.io/badge/提供商-70%2B-ec4899?style=for-the-badge" alt="70+ 提供商"/>
  <img src="https://img.shields.io/badge/更新于-2026--06--28-3b82f6?style=for-the-badge" alt="更新日期"/>
</p>

<p align="center">
  <a href="README.md">English</a> · <strong>简体中文</strong> · <a href="README.hi.md">हिन्दी</a> · <a href="README.es.md">Español</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.pt.md">Português</a> · <a href="README.ar.md">العربية</a> · <a href="README.fr.md">Français</a> · <a href="README.de.md">Deutsch</a> · <a href="README.ru.md">Русский</a>
</p>

---

## 为什么需要这个项目

寻找免费 LLM API 不应该意味着翻遍几十个网站、在五个平台注册账号，或者猜测哪个免费套餐还能用。

这个仓库是**结构化、机器可读的免费 LLM API 目录**——包含信用卡要求、接入地址和直达 API Key 链接，一站搞定。

- ✅ **无需信用卡的选项优先** — 清晰标注哪些提供商零付款要求
- ✅ **兼容 OpenAI** — 每个提供商均可作为 `baseURL` 直接替换
- ✅ **70+ 家提供商** — 覆盖全球、印度、中国、日本、韩国、欧洲、中东、东南亚
- ✅ **机器可读数据** — 结构化 JSON，方便脚本和工具使用

---

## ⚡ 三步上手

**1. 选择提供商** — 查看下方[提供商目录](#-提供商目录)。新手推荐 **Groq**（无需信用卡，每分钟 30 次请求）。

**2. 获取 API Key** — 点击任意 `获取 →` 链接，用邮箱注册（大多数只需邮箱），复制密钥。全程不超过 1 分钟。

**3. 接入使用** — 将 Base URL + 模型 ID 填入你的工具即可。

---

## 🚀 快速开始 — 30 秒接入

所有提供商均暴露 **OpenAI 兼容接口**，支持 `baseURL` + `apiKey` 的任何工具均可使用。

### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",  # 免费，无需信用卡
    api_key="YOUR_GROQ_KEY",                     # 在 console.groq.com/keys 获取
)

response = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[{"role": "user", "content": "你好！"}],
)
print(response.choices[0].message.content)
# Groq 免费限额：30 RPM，1,000 RPD
```

### curl

```bash
curl https://api.groq.com/openai/v1/chat/completions \
  -H "Authorization: Bearer $GROQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"llama-3.3-70b-versatile","messages":[{"role":"user","content":"你好！"}]}'
```

> **提示：** 只需替换 `base_url` 即可切换至下方任意提供商——代码不变，零成本。

---

## 📋 提供商目录

### ⚡ 永久免费套餐

**无限次使用**（有速率限制），无时间限制。

<!-- BEGIN_PERMANENT -->
| 提供商 | 模型 | 信用卡要求 | 最大上下文 | 获取 Key |
|---|---|---|---|---|
| [OpenRouter](https://www.freellm.site/zh/providers/openrouter/?utm_source=github&utm_medium=readme) | 16 | 📧 注册 | 1M | [获取 →](https://openrouter.ai/workspaces/default/keys) |
| [Google Gemini](https://www.freellm.site/zh/providers/google_gemini/?utm_source=github&utm_medium=readme) | 11 | ✅ 无需 | 1M | [获取 →](https://aistudio.google.com/app/apikey) |
| [OpenCode Zen](https://www.freellm.site/zh/providers/opencode_zen/?utm_source=github&utm_medium=readme) | 10 | 📧 注册 | 1M | [获取 →](https://opencode.ai/auth) |
| [Groq](https://www.freellm.site/zh/providers/groq/?utm_source=github&utm_medium=readme) | 9 | ✅ 无需 | 131K | [获取 →](https://console.groq.com/keys) |
| [Cloudflare Workers AI](https://www.freellm.site/zh/providers/cloudflare/?utm_source=github&utm_medium=readme) | 8 | ✅ 无需 | 1M | [获取 →](https://dash.cloudflare.com/profile/api-tokens) |
| [OVHcloud AI Endpoints](https://www.freellm.site/zh/providers/ovhcloud_ai/?utm_source=github&utm_medium=readme) | 8 | ✅ 无需 | 262K | [获取 →](https://endpoints.ai.cloud.ovh.net) |
| [ElevenLabs](https://www.freellm.site/zh/providers/elevenlabs/?utm_source=github&utm_medium=readme) | 6 | ✅ 无需 | — | [获取 →](https://elevenlabs.io/app/sign-up) |
| [OrcaRouter](https://www.freellm.site/zh/providers/orcarouter/?utm_source=github&utm_medium=readme) | 6 | 📧 注册 | — | [获取 →](https://www.orcarouter.ai/models) |
| [Cohere](https://www.freellm.site/zh/providers/cohere/?utm_source=github&utm_medium=readme) | 5 | ✅ 无需 | 256K | [获取 →](https://dashboard.cohere.com/api-keys) |
| [NVIDIA NIM](https://www.freellm.site/zh/providers/nvidia_nim/?utm_source=github&utm_medium=readme) | 5 | 📱 手机验证 | 1M | [获取 →](https://build.nvidia.com/settings/api-keys) |
| [SambaNova Cloud](https://www.freellm.site/zh/providers/sambanova/?utm_source=github&utm_medium=readme) | 5 | 📧 注册 | 131K | [获取 →](https://cloud.sambanova.ai/apis) |
| [Zhipu AI](https://www.freellm.site/zh/providers/zhipu_ai/?utm_source=github&utm_medium=readme) | 5 | ✅ 无需 | 200K | [获取 →](https://bigmodel.cn) |
| [ModelScope](https://www.freellm.site/zh/providers/modelscope/?utm_source=github&utm_medium=readme) | 5 | 📧 注册 | 1M | [获取 →](https://modelscope.cn/my/myaccesstoken) |
| [Zenmux](https://www.freellm.site/zh/providers/zenmux/?utm_source=github&utm_medium=readme) | 5 | 📧 注册 | 524K | [获取 →](https://zenmux.ai) |
| [Mistral AI](https://www.freellm.site/zh/providers/mistral/?utm_source=github&utm_medium=readme) | 4 | ✅ 无需 | 256K | [获取 →](https://console.mistral.ai/api-keys) |
| [LLM7.io](https://www.freellm.site/zh/providers/llm7/?utm_source=github&utm_medium=readme) | 4 | ✅ 无需 | 400K | [获取 →](https://dash.llm7.io) |
| [AI Singapore (SEA-LION)](https://www.freellm.site/zh/providers/ai_singapore/?utm_source=github&utm_medium=readme) | 4 | 📧 注册 | 262K | [获取 →](https://playground.sea-lion.ai) |
| [Z.ai](https://www.freellm.site/zh/providers/zai/?utm_source=github&utm_medium=readme) | 3 | ✅ 无需 | 200K | [获取 →](https://z.ai/manage-apikey/apikey-list) |
| [SiliconFlow (CN)](https://www.freellm.site/zh/providers/siliconflow_cn/?utm_source=github&utm_medium=readme) | 1 | 📧 注册 | 262K | [获取 →](https://siliconflow.cn) |
| [SenseNova](https://www.freellm.site/zh/providers/sensenova/?utm_source=github&utm_medium=readme) | 1 | 📱 手机验证 | — | [获取 →](https://platform.sensenova.cn/login) |
| [iFlytek Spark](https://www.freellm.site/zh/providers/iflytek_spark/?utm_source=github&utm_medium=readme) | 1 | 📧 注册 | 8K | [获取 →](https://console.xfyun.cn/services/cbm) |
| [Pollinations](https://www.freellm.site/zh/providers/pollinations/?utm_source=github&utm_medium=readme) | 1 | ✅ 无需 | 131K | [获取 →](https://enter.pollinations.ai) |
| AI4Bharat | 0 | ✅ 无需 | — | [获取 →](https://ai4bharat.iitm.ac.in) |
| BharatGen | 0 | ✅ 无需 | — | [获取 →](https://bharatgen.com) |
| Wrtn Technologies | 0 | ✅ 无需 | — | [获取 →](https://wrtn.ai) |
| H Company | 0 | 📧 注册 | — | [获取 →](https://portal.hcompany.ai) |
| DeepL API | 0 | ✅ 无需 | — | [获取 →](https://developers.deepl.com) |
| Falcon (TII) | 0 | ✅ 无需 | — | [获取 →](https://falconllm.tii.ae) |

<!-- END_PERMANENT -->

### 💰 注册赠送积分

<!-- BEGIN_CREDITS -->
| 提供商 | 积分 | 有效期 | 信用卡要求 | 获取 Key |
|---|---|---|---|---|
| [xAI (Grok)](https://www.freellm.site/zh/providers/xai/?utm_source=github&utm_medium=readme) | $25 | monthly | 📧 注册 | [获取 →](https://console.x.ai) |
| [Baichuan AI](https://www.freellm.site/zh/providers/baichuan/?utm_source=github&utm_medium=readme) | $11 | 3 months | 📧 注册 | [获取 →](https://platform.baichuan-ai.com) |
| [AI21 Labs](https://www.freellm.site/zh/providers/ai21/?utm_source=github&utm_medium=readme) | $10 | 3 months | ✅ 无需 | [获取 →](https://www.ai21.com) |
| [Novita AI](https://www.freellm.site/zh/providers/novita_ai/?utm_source=github&utm_medium=readme) | $10 | 90 days | ✅ 无需 | [获取 →](https://novita.ai) |
| [Upstage AI](https://www.freellm.site/zh/providers/upstage_ai/?utm_source=github&utm_medium=readme) | $10 | never | ✅ 无需 | [获取 →](https://console.upstage.ai) |
| [Cerebras](https://www.freellm.site/zh/providers/cerebras/?utm_source=github&utm_medium=readme) | $5 | 30 days | 💳 需要 | [获取 →](https://cloud.cerebras.ai/) |
| [DeepSeek](https://www.freellm.site/zh/providers/deepseek/?utm_source=github&utm_medium=readme) | $5 | on signup | 📧 注册 | [获取 →](https://platform.deepseek.com/api_keys) |
| Nscale | $5 | on signup | 📧 注册 | [获取 →](https://console.nscale.com/) |
| [Sarvam AI](https://www.freellm.site/zh/providers/sarvam_ai/?utm_source=github&utm_medium=readme) | $1.1 | never | 📧 注册 | [获取 →](https://dashboard.sarvam.ai) |
| [Fireworks AI](https://www.freellm.site/zh/providers/fireworks/?utm_source=github&utm_medium=readme) | $1 | never | ✅ 无需 | [获取 →](https://app.fireworks.ai/settings/users/api-keys) |
| [Nebius Token Factory](https://www.freellm.site/zh/providers/nebius/?utm_source=github&utm_medium=readme) | $1 | 30 days | 💳 需要 | [获取 →](https://tokenfactory.nebius.com) |
| [SiliconFlow](https://www.freellm.site/zh/providers/siliconflow/?utm_source=github&utm_medium=readme) | $1 | never | 📧 注册 | [获取 →](https://cloud.siliconflow.com) |
| [Stability AI](https://www.freellm.site/zh/providers/stability_ai/?utm_source=github&utm_medium=readme) | $0.25 | never | ✅ 无需 | [获取 →](https://platform.stability.ai) |
| [Hugging Face](https://www.freellm.site/zh/providers/huggingface/?utm_source=github&utm_medium=readme) | $0.1 | monthly | ✅ 无需 | [获取 →](https://huggingface.co/settings/tokens) |
| Replicate | — | — | ✅ 无需 | [获取 →](https://replicate.com) |
| Fal AI | — | varies (1 week to 1 year) | ✅ 无需 | [获取 →](https://fal.ai) |
| [Vercel AI Gateway](https://www.freellm.site/zh/providers/vercel_ai_gateway/?utm_source=github&utm_medium=readme) | — | monthly | 📧 注册 | [获取 →](https://vercel.com/ai-gateway) |
| [Baseten](https://www.freellm.site/zh/providers/baseten/?utm_source=github&utm_medium=readme) | — | never | ✅ 无需 | [获取 →](https://app.baseten.co/signup) |
| Krutrim AI | — | never | 📧 注册 | [获取 →](https://www.olakrutrim.com) |
| CoRover BharatGPT | — | never | 📧 注册 | [获取 →](https://corover.ai) |
| Gnani.ai | — | never | 📧 注册 | [获取 →](https://gnani.ai) |
| Soket AI | — | never | 📧 注册 | [获取 →](https://soket.ai) |
| Neysa AI | — | never | 📧 注册 | [获取 →](https://neysa.ai) |
| [Alibaba DashScope](https://www.freellm.site/zh/providers/alibaba_dashscope/?utm_source=github&utm_medium=readme) | — | 90 days | ✅ 无需 | [获取 →](https://bailian.console.aliyun.com) |
| [Alibaba Model Studio](https://www.freellm.site/zh/providers/alibaba_model_studio/?utm_source=github&utm_medium=readme) | — | 90 days | 📧 注册 | [获取 →](https://modelstudio.console.alibabacloud.com) |
| MiniMax | — | never | 📧 注册 | [获取 →](https://platform.minimax.io) |
| [Tencent Hunyuan](https://www.freellm.site/zh/providers/tencent_hunyuan/?utm_source=github&utm_medium=readme) | — | 1 year | 📧 注册 | [获取 →](https://console.cloud.tencent.com/hunyuan) |
| [Baidu ERNIE](https://www.freellm.site/zh/providers/baidu_ernie/?utm_source=github&utm_medium=readme) | — | 3 months | 📧 注册 | [获取 →](https://console.bce.baidu.com/qianfan) |
| [StepFun](https://www.freellm.site/zh/providers/stepfun/?utm_source=github&utm_medium=readme) | — | never | 📧 注册 | [获取 →](https://platform.stepfun.com) |
| Volcengine Ark | — | — | 📧 注册 | [获取 →](https://console.volcengine.com/ark) |
| Huawei Cloud Pangu | — | never | 📧 注册 | [获取 →](https://www.huaweicloud.com) |
| [Naver HyperCLOVA X](https://www.freellm.site/zh/providers/naver_hyperclova/?utm_source=github&utm_medium=readme) | — | never | 📧 注册 | [获取 →](https://clovastudio.ncloud.com) |
| LG EXAONE | — | never | 📧 注册 | [获取 →](https://www.lgresearch.ai) |
| SK Telecom A.X | — | never | 📧 注册 | [获取 →](https://www.sktelecom.com) |
| LightOn | — | never | 📧 注册 | [获取 →](https://lighton.ai/pricing) |
| [Scaleway AI](https://www.freellm.site/zh/providers/scaleway_ai/?utm_source=github&utm_medium=readme) | — | never | 💳 需要 | [获取 →](https://console.scaleway.com/generative-api/models) |
| Inception AI | — | never | 📧 注册 | [获取 →](https://inceptionai.ai) |
| GMI Cloud | — | never | 📧 注册 | [获取 →](https://console.gmicloud.ai) |
| NCS AI | — | never | 📧 注册 | [获取 →](https://www.ncs.co) |
| Sakana AI | — | never | 📧 注册 | [获取 →](https://console.sakana.ai) |
| [Preferred Networks](https://www.freellm.site/zh/providers/preferred_networks/?utm_source=github&utm_medium=readme) | — | 1 month | 📧 注册 | [获取 →](https://plamo.preferredai.jp/api) |
| Fujitsu Kozuchi | — | never | 📧 注册 | [获取 →](https://www.fujitsu.com/global/services/business-services/kozuchi) |
| NTT DATA AI | — | never | 📧 注册 | [获取 →](https://www.nttdata.com/global/en/) |
| NEC Generative AI | — | never | 📧 注册 | [获取 →](https://www.nec.com) |
| Rakuten AI | — | never | 📧 注册 | [获取 →](https://global.rakuten.com/corp/) |

<!-- END_CREDITS -->

<!-- BEGIN_REGIONAL -->

---

### 🌍 区域提供商

<details>
<summary><strong>🇨🇳 中国 (14)</strong></summary>

| 提供商 | 信用卡要求 | 免费额度 | 获取 Key |
|---|---|---|---|
| [ModelScope](https://www.freellm.site/zh/providers/modelscope/?utm_source=github&utm_medium=readme) | 📧 注册 | 免费套餐 | [获取 →](https://modelscope.cn/my/myaccesstoken) |
| [Zhipu AI](https://www.freellm.site/zh/providers/zhipu_ai/?utm_source=github&utm_medium=readme) | ✅ 无需 | 免费套餐 | [获取 →](https://bigmodel.cn) |
| [Alibaba DashScope](https://www.freellm.site/zh/providers/alibaba_dashscope/?utm_source=github&utm_medium=readme) | ✅ 无需 | 积分 · 90 days | [获取 →](https://bailian.console.aliyun.com) |
| [Alibaba Model Studio](https://www.freellm.site/zh/providers/alibaba_model_studio/?utm_source=github&utm_medium=readme) | 📧 注册 | 积分 · 90 days | [获取 →](https://modelstudio.console.alibabacloud.com) |
| [Baichuan AI](https://www.freellm.site/zh/providers/baichuan/?utm_source=github&utm_medium=readme) | 📧 注册 | $11 · 3 months | [获取 →](https://platform.baichuan-ai.com) |
| [Baidu ERNIE](https://www.freellm.site/zh/providers/baidu_ernie/?utm_source=github&utm_medium=readme) | 📧 注册 | 积分 · 3 months | [获取 →](https://console.bce.baidu.com/qianfan) |
| [Tencent Hunyuan](https://www.freellm.site/zh/providers/tencent_hunyuan/?utm_source=github&utm_medium=readme) | 📧 注册 | 积分 · 1 year | [获取 →](https://console.cloud.tencent.com/hunyuan) |
| [SenseNova](https://www.freellm.site/zh/providers/sensenova/?utm_source=github&utm_medium=readme) | 📱 手机验证 | 免费套餐 | [获取 →](https://platform.sensenova.cn/login) |
| [SiliconFlow (CN)](https://www.freellm.site/zh/providers/siliconflow_cn/?utm_source=github&utm_medium=readme) | 📧 注册 | 免费套餐 | [获取 →](https://siliconflow.cn) |
| [StepFun](https://www.freellm.site/zh/providers/stepfun/?utm_source=github&utm_medium=readme) | 📧 注册 | 积分 · never | [获取 →](https://platform.stepfun.com) |
| [iFlytek Spark](https://www.freellm.site/zh/providers/iflytek_spark/?utm_source=github&utm_medium=readme) | 📧 注册 | 免费套餐 | [获取 →](https://console.xfyun.cn/services/cbm) |
| Huawei Cloud Pangu | 📧 注册 | 积分 · never | [获取 →](https://www.huaweicloud.com) |
| MiniMax | 📧 注册 | 积分 · never | [获取 →](https://platform.minimax.io) |
| Volcengine Ark | 📧 注册 | 积分 | [获取 →](https://console.volcengine.com/ark) |

</details>

<details>
<summary><strong>🇮🇳 印度 (8)</strong></summary>

| 提供商 | 信用卡要求 | 免费额度 | 获取 Key |
|---|---|---|---|
| [Sarvam AI](https://www.freellm.site/zh/providers/sarvam_ai/?utm_source=github&utm_medium=readme) | 📧 注册 | $1.1 · never | [获取 →](https://dashboard.sarvam.ai) |
| AI4Bharat | ✅ 无需 | 免费套餐 | [获取 →](https://ai4bharat.iitm.ac.in) |
| BharatGen | ✅ 无需 | 免费套餐 | [获取 →](https://bharatgen.com) |
| CoRover BharatGPT | 📧 注册 | 积分 · never | [获取 →](https://corover.ai) |
| Gnani.ai | 📧 注册 | 积分 · never | [获取 →](https://gnani.ai) |
| Krutrim AI | 📧 注册 | 积分 · never | [获取 →](https://www.olakrutrim.com) |
| Neysa AI | 📧 注册 | 积分 · never | [获取 →](https://neysa.ai) |
| Soket AI | 📧 注册 | 积分 · never | [获取 →](https://soket.ai) |

</details>

<details>
<summary><strong>🇪🇺 欧洲 (7)</strong></summary>

| 提供商 | 信用卡要求 | 免费额度 | 获取 Key |
|---|---|---|---|
| [OVHcloud AI Endpoints](https://www.freellm.site/zh/providers/ovhcloud_ai/?utm_source=github&utm_medium=readme) | ✅ 无需 | 免费套餐 | [获取 →](https://endpoints.ai.cloud.ovh.net) |
| [Scaleway AI](https://www.freellm.site/zh/providers/scaleway_ai/?utm_source=github&utm_medium=readme) | 💳 需要 | 积分 · never | [获取 →](https://console.scaleway.com/generative-api/models) |
| [ElevenLabs](https://www.freellm.site/zh/providers/elevenlabs/?utm_source=github&utm_medium=readme) | ✅ 无需 | 免费套餐 | [获取 →](https://elevenlabs.io/app/sign-up) |
| [Stability AI](https://www.freellm.site/zh/providers/stability_ai/?utm_source=github&utm_medium=readme) | ✅ 无需 | $0.25 · never | [获取 →](https://platform.stability.ai) |
| DeepL API | ✅ 无需 | 免费套餐 | [获取 →](https://developers.deepl.com) |
| H Company | 📧 注册 | 免费套餐 | [获取 →](https://portal.hcompany.ai) |
| LightOn | 📧 注册 | 积分 · never | [获取 →](https://lighton.ai/pricing) |

</details>

<details>
<summary><strong>🇯🇵 日本 (6)</strong></summary>

| 提供商 | 信用卡要求 | 免费额度 | 获取 Key |
|---|---|---|---|
| [Preferred Networks](https://www.freellm.site/zh/providers/preferred_networks/?utm_source=github&utm_medium=readme) | 📧 注册 | 积分 · 1 month | [获取 →](https://plamo.preferredai.jp/api) |
| Fujitsu Kozuchi | 📧 注册 | 积分 · never | [获取 →](https://www.fujitsu.com/global/services/business-services/kozuchi) |
| NEC Generative AI | 📧 注册 | 积分 · never | [获取 →](https://www.nec.com) |
| NTT DATA AI | 📧 注册 | 积分 · never | [获取 →](https://www.nttdata.com/global/en/) |
| Rakuten AI | 📧 注册 | 积分 · never | [获取 →](https://global.rakuten.com/corp/) |
| Sakana AI | 📧 注册 | 积分 · never | [获取 →](https://console.sakana.ai) |

</details>

<details>
<summary><strong>🇰🇷 韩国 (5)</strong></summary>

| 提供商 | 信用卡要求 | 免费额度 | 获取 Key |
|---|---|---|---|
| [Upstage AI](https://www.freellm.site/zh/providers/upstage_ai/?utm_source=github&utm_medium=readme) | ✅ 无需 | $10 · never | [获取 →](https://console.upstage.ai) |
| [Naver HyperCLOVA X](https://www.freellm.site/zh/providers/naver_hyperclova/?utm_source=github&utm_medium=readme) | 📧 注册 | 积分 · never | [获取 →](https://clovastudio.ncloud.com) |
| LG EXAONE | 📧 注册 | 积分 · never | [获取 →](https://www.lgresearch.ai) |
| SK Telecom A.X | 📧 注册 | 积分 · never | [获取 →](https://www.sktelecom.com) |
| Wrtn Technologies | ✅ 无需 | 免费套餐 | [获取 →](https://wrtn.ai) |

</details>

<details>
<summary><strong>🇸🇬 东南亚 (3)</strong></summary>

| 提供商 | 信用卡要求 | 免费额度 | 获取 Key |
|---|---|---|---|
| [AI Singapore (SEA-LION)](https://www.freellm.site/zh/providers/ai_singapore/?utm_source=github&utm_medium=readme) | 📧 注册 | 免费套餐 | [获取 →](https://playground.sea-lion.ai) |
| GMI Cloud | 📧 注册 | 积分 · never | [获取 →](https://console.gmicloud.ai) |
| NCS AI | 📧 注册 | 积分 · never | [获取 →](https://www.ncs.co) |

</details>

<details>
<summary><strong>🇦🇪 中东 (2)</strong></summary>

| 提供商 | 信用卡要求 | 免费额度 | 获取 Key |
|---|---|---|---|
| Falcon (TII) | ✅ 无需 | 免费套餐 | [获取 →](https://falconllm.tii.ae) |
| Inception AI | 📧 注册 | 积分 · never | [获取 →](https://inceptionai.ai) |

</details>


<!-- END_REGIONAL -->

---

## 🔗 Base URL 速查

| 提供商 | Base URL | 获取 Key |
|---|---|---|
| Groq | `https://api.groq.com/openai/v1` | <a href="https://console.groq.com/keys" target="_blank" rel="noopener">→</a> |
| DeepSeek | `https://api.deepseek.com/v1` | <a href="https://platform.deepseek.com/api_keys" target="_blank" rel="noopener">→</a> |
| 阿里云百炼 | `https://dashscope.aliyuncs.com/compatible-mode/v1` | <a href="https://dashscope.aliyun.com" target="_blank" rel="noopener">→</a> |
| 月之暗面 (Kimi) | `https://api.moonshot.cn/v1` | <a href="https://platform.moonshot.ai" target="_blank" rel="noopener">→</a> |
| 智谱 AI | `https://open.bigmodel.cn/api/paas/v4` | <a href="https://open.bigmodel.cn" target="_blank" rel="noopener">→</a> |
| MiniMax | `https://api.minimax.chat/v1` | <a href="https://www.minimax.io" target="_blank" rel="noopener">→</a> |
| 阶跃星辰 | `https://api.stepfun.com/v1` | <a href="https://platform.stepfun.com" target="_blank" rel="noopener">→</a> |
| SiliconFlow | `https://api.siliconflow.cn/v1` | <a href="https://cloud.siliconflow.cn/account/ak" target="_blank" rel="noopener">→</a> |
| 讯飞星火 | `https://spark-api-open.xf-yun.com/v1` | <a href="https://xinghuo.xfyun.cn" target="_blank" rel="noopener">→</a> |
| 火山引擎方舟 | `https://ark.cn-beijing.volces.com/api/v3` | <a href="https://www.volcengine.com/product/ark" target="_blank" rel="noopener">→</a> |

---

## 🤝 贡献

欢迎贡献！添加或更新提供商：

1. **Fork** 本仓库
2. **编辑** `data/providers.json`，遵循 [schema](data/schema.md)
3. **提交 PR** 并附上简要说明

详见 [CONTRIBUTING.md](CONTRIBUTING.md)。

---

<p align="center">
  <strong>如果这个项目帮到了你，请给个 ⭐ Star！</strong><br/>
  <a href="https://github.com/khushaljethava/freellm-apis">github.com/khushaljethava/freellm-apis</a>
</p>

---

MIT License · [LICENSE](LICENSE) · © 2026 freellm.site
