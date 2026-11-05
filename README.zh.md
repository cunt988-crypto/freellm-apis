<p align="center">
  <h1 align="center">🆓 免费 LLM API 大全</h1>
  <p align="center"><strong>90+ 家提供商 · 8 个地区 · 永久免费套餐 + 试用积分</strong></p>
</p>

<p align="center">
  <a href="https://www.freellm.site" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/🌐_官网-freellm.site-6366f1?style=for-the-badge" alt="官网"/></a>
  <a href="https://github.com/khushaljethava/freellm-apis" target="_blank" rel="noopener"><img src="https://img.shields.io/github/stars/khushaljethava/freellm-apis?style=for-the-badge&color=f59e0b" alt="Stars"/></a>
  <img src="https://img.shields.io/badge/提供商-90%2B-ec4899?style=for-the-badge" alt="90+ 提供商"/>
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
- ✅ **90+ 家提供商** — 覆盖全球、印度、中国、日本、韩国、欧洲、中东、东南亚
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
# Groq 免费限额：30 RPM，14,400 RPD
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

| 提供商 | 信用卡要求 | 备注 | 最大上下文 | 获取 Key |
|---|---|---|---|---|
| Groq | ✅ 无需 | 30 RPM · 14,400 RPD | 262K | <a href="https://console.groq.com/keys" target="_blank" rel="noopener">获取 →</a> |
| GitHub Models | ✅ 无需 | 需要 GitHub 账号 | 1M | <a href="https://github.com/marketplace/models" target="_blank" rel="noopener">获取 →</a> |
| Google Gemini | ✅ 无需 | Flash 支持 200 万 token | 2M | <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">获取 →</a> |
| Mistral AI | ✅ 无需 | 有速率限制 | 256K | <a href="https://console.mistral.ai/api-keys" target="_blank" rel="noopener">获取 →</a> |
| Cerebras | ✅ 无需 | 超快推理 | 131K | <a href="https://cloud.cerebras.ai/" target="_blank" rel="noopener">获取 →</a> |
| Cohere | ✅ 无需 | 每分钟 20 次 | 256K | <a href="https://dashboard.cohere.com/api-keys" target="_blank" rel="noopener">获取 →</a> |
| Hugging Face | ✅ 无需 | 免费推理路由 | 131K | <a href="https://huggingface.co/settings/tokens" target="_blank" rel="noopener">获取 →</a> |
| Cloudflare Workers AI | ✅ 无需 | 每天 10,000 次 | 10M | <a href="https://dash.cloudflare.com/profile/api-tokens" target="_blank" rel="noopener">获取 →</a> |
| OpenRouter | 📧 注册 | 100+ 永久免费模型 | 1M | <a href="https://openrouter.ai/workspaces/default/keys" target="_blank" rel="noopener">获取 →</a> |
| Chutes AI | ✅ 无需 | 社区免费套餐 | 131K | <a href="https://chutes.ai" target="_blank" rel="noopener">获取 →</a> |
| LLM7.io | ✅ 无需 | 基础使用无需注册 | 131K | <a href="https://token.llm7.io" target="_blank" rel="noopener">获取 →</a> |
| NVIDIA NIM | 📱 手机验证 | 75+ 模型 | 1M | <a href="https://build.nvidia.com/settings/api-keys" target="_blank" rel="noopener">获取 →</a> |
| SambaNova | 📧 注册 | 快速 Llama 推理 | 128K | <a href="https://cloud.sambanova.ai/apis" target="_blank" rel="noopener">获取 →</a> |

### 💰 注册赠送积分

| 提供商 | 积分 | 有效期 | 信用卡 | 获取 Key |
|---|---|---|---|---|
| xAI (Grok) | $25 | 每月 | 📧 注册 | <a href="https://console.x.ai" target="_blank" rel="noopener">获取 →</a> |
| Modal | $30 | 每月 | ✅ 无需 | <a href="https://modal.com" target="_blank" rel="noopener">获取 →</a> |
| Hyperbolic | $10 | 永久 | ✅ 无需 | <a href="https://app.hyperbolic.xyz/settings" target="_blank" rel="noopener">获取 →</a> |
| Lambda AI | $10 | 永久 | ✅ 无需 | <a href="https://lambda.ai" target="_blank" rel="noopener">获取 →</a> |
| DeepSeek | $5 | 注册时赠送 | 📧 注册 | <a href="https://platform.deepseek.com/api_keys" target="_blank" rel="noopener">获取 →</a> |
| Anthropic | $5 | 永久 | 💳 需要 | <a href="https://console.anthropic.com" target="_blank" rel="noopener">获取 →</a> |
| SiliconFlow | $2 | 永久 | 📧 注册 | <a href="https://cloud.siliconflow.cn/account/ak" target="_blank" rel="noopener">获取 →</a> |
| Together AI | $1 | 永久 | ✅ 无需 | <a href="https://api.together.ai/settings/api-keys" target="_blank" rel="noopener">获取 →</a> |
| Fireworks AI | $1 | 永久 | ✅ 无需 | <a href="https://app.fireworks.ai/settings/users/api-keys" target="_blank" rel="noopener">获取 →</a> |

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
