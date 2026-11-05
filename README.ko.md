<p align="center">
  <h1 align="center">🆓 무료 LLM API 디렉토리</h1>
  <p align="center"><strong>90개 이상의 제공업체 · 8개 지역 · 영구 무료 티어 + 체험 크레딧</strong></p>
</p>

<p align="center">
  <a href="https://www.freellm.site" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/🌐_웹사이트-freellm.site-6366f1?style=for-the-badge" alt="웹사이트"/></a>
  <a href="https://github.com/khushaljethava/freellm-apis" target="_blank" rel="noopener"><img src="https://img.shields.io/github/stars/khushaljethava/freellm-apis?style=for-the-badge&color=f59e0b" alt="Stars"/></a>
  <img src="https://img.shields.io/badge/제공업체-90%2B-ec4899?style=for-the-badge" alt="90+ 제공업체"/>
</p>

<p align="center">
  <a href="README.md">English</a> · <a href="README.zh.md">简体中文</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.es.md">Español</a> · <a href="README.ja.md">日本語</a> · <strong>한국어</strong> · <a href="README.pt.md">Português</a> · <a href="README.ar.md">العربية</a> · <a href="README.fr.md">Français</a> · <a href="README.de.md">Deutsch</a> · <a href="README.ru.md">Русский</a>
</p>

---

## 왜 이 프로젝트가 필요한가

무료 LLM API를 찾기 위해 수십 개의 웹사이트를 뒤지거나, 다섯 개의 플랫폼에 가입하거나, 어떤 무료 티어가 아직 작동하는지 추측할 필요가 없어야 합니다.

이 저장소는 모든 무료 LLM API의 **구조화된, 기계 판독 가능한 디렉토리**입니다 — 신용카드 요건, Base URL, 직접 API 키 링크 포함.

- ✅ **카드 불필요 옵션 우선** — 어떤 제공업체가 결제 정보 없이 이용 가능한지 명확하게 표시
- ✅ **OpenAI 호환** — 모든 제공업체가 `baseURL` 교체로 작동
- ✅ **90개 이상의 제공업체** — 글로벌, 인도, 중국, 일본, 한국, 유럽, 중동, 동남아시아
- ✅ **기계 판독 가능 데이터** — `data/providers.json`의 구조화된 JSON

---

## ⚡ 3단계로 시작하기

**1. 제공업체 선택** — 아래 [제공업체 디렉토리](#-제공업체-디렉토리) 참조. **Groq**으로 시작하세요 (신용카드 불필요, 분당 30 RPM 무료).

**2. API 키 받기** — `받기 →` 링크를 클릭하고 이메일로 가입한 후 키를 복사하세요. 1분 이내 완료.

**3. 연결하기** — Base URL + 모델 ID를 도구에 붙여넣기.

---

## 🚀 30초 빠른 시작

### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",  # 무료, 신용카드 불필요
    api_key="YOUR_GROQ_KEY",                     # console.groq.com/keys에서 받기
)

response = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[{"role": "user", "content": "안녕하세요!"}],
)
print(response.choices[0].message.content)
# Groq 무료 티어: 분당 30 요청, 하루 14,400 요청
```

### curl

```bash
curl https://api.groq.com/openai/v1/chat/completions \
  -H "Authorization: Bearer $GROQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"llama-3.3-70b-versatile","messages":[{"role":"user","content":"안녕하세요!"}]}'
```

---

## 📋 제공업체 디렉토리

### ⚡ 영구 무료 티어

**무제한 무료 액세스** (속도 제한 있음) — 만료 없음.

| 제공업체 | 카드? | 비고 | 최대 컨텍스트 | 키 받기 |
|---|---|---|---|---|
| Groq | ✅ 불필요 | 30 RPM · 14,400 RPD | 262K | <a href="https://console.groq.com/keys" target="_blank" rel="noopener">받기 →</a> |
| GitHub Models | ✅ 불필요 | GitHub 계정 필요 | 1M | <a href="https://github.com/marketplace/models" target="_blank" rel="noopener">받기 →</a> |
| Google Gemini | ✅ 불필요 | Flash에서 2M 토큰 | 2M | <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">받기 →</a> |
| Mistral AI | ✅ 불필요 | 속도 제한 있는 무료 티어 | 256K | <a href="https://console.mistral.ai/api-keys" target="_blank" rel="noopener">받기 →</a> |
| Cerebras | ✅ 불필요 | 초고속 추론 | 131K | <a href="https://cloud.cerebras.ai/" target="_blank" rel="noopener">받기 →</a> |
| Cohere | ✅ 불필요 | 분당 20 호출 | 256K | <a href="https://dashboard.cohere.com/api-keys" target="_blank" rel="noopener">받기 →</a> |
| Hugging Face | ✅ 불필요 | 무료 추론 API | 131K | <a href="https://huggingface.co/settings/tokens" target="_blank" rel="noopener">받기 →</a> |
| Cloudflare Workers AI | ✅ 불필요 | 하루 10,000 neurons | 10M | <a href="https://dash.cloudflare.com/profile/api-tokens" target="_blank" rel="noopener">받기 →</a> |
| OpenRouter | 📧 이메일 | 100개 이상 무료 모델 | 1M | <a href="https://openrouter.ai/workspaces/default/keys" target="_blank" rel="noopener">받기 →</a> |
| NVIDIA NIM | 📱 전화 | 75개 이상 모델 | 1M | <a href="https://build.nvidia.com/settings/api-keys" target="_blank" rel="noopener">받기 →</a> |
| Zhipu AI | ✅ 불필요 | GLM-4.7-Flash 및 GLM-4.5-Flash 무료 | 128K | <a href="https://open.bigmodel.cn" target="_blank" rel="noopener">받기 →</a> |

### 💰 가입 시 무료 크레딧

| 제공업체 | 크레딧 | 만료 | 카드 | 키 받기 |
|---|---|---|---|---|
| xAI (Grok) | $25 | 매월 | 📧 이메일 | <a href="https://console.x.ai" target="_blank" rel="noopener">받기 →</a> |
| Modal | $30 | 매월 | ✅ 불필요 | <a href="https://modal.com" target="_blank" rel="noopener">받기 →</a> |
| Hyperbolic | $10 | 없음 | ✅ 불필요 | <a href="https://app.hyperbolic.xyz/settings" target="_blank" rel="noopener">받기 →</a> |
| Lambda AI | $10 | 없음 | ✅ 불필요 | <a href="https://lambda.ai" target="_blank" rel="noopener">받기 →</a> |
| DeepSeek | $5 | 가입 시 | 📧 이메일 | <a href="https://platform.deepseek.com/api_keys" target="_blank" rel="noopener">받기 →</a> |
| Together AI | $1 | 없음 | ✅ 불필요 | <a href="https://api.together.ai/settings/api-keys" target="_blank" rel="noopener">받기 →</a> |
| Fireworks AI | $1 | 없음 | ✅ 불필요 | <a href="https://app.fireworks.ai/settings/users/api-keys" target="_blank" rel="noopener">받기 →</a> |

---

<details>
<summary><strong>🇰🇷 한국 AI 제공업체 (4)</strong></summary>

| 제공업체 | 특징 | 가입 |
|---|---|---|
| Naver HyperCLOVA X | 한국 대표 LLM | <a href="https://clovastudio.naver.com" target="_blank" rel="noopener">→</a> |
| Upstage AI | Solar LLM, 무료 크레딧 | <a href="https://www.upstage.ai" target="_blank" rel="noopener">→</a> |
| LG EXAONE | LG AI 연구소 | <a href="https://www.lgresearch.ai" target="_blank" rel="noopener">→</a> |
| Wrtn Technologies | 한국 AI 글쓰기 도우미 | <a href="https://wrtn.ai" target="_blank" rel="noopener">→</a> |

</details>

---

## 🤝 기여하기

1. 이 저장소를 **Fork** 하세요
2. [schema](data/schema.md)에 따라 `data/providers.json`을 **편집** 하세요
3. 간단한 설명과 함께 **PR을 제출** 하세요

자세한 내용은 [CONTRIBUTING.md](CONTRIBUTING.md)를 참조하세요.

---

<p align="center">
  <strong>도움이 됐다면 ⭐ 스타를 눌러주세요!</strong><br/>
  <a href="https://github.com/khushaljethava/freellm-apis">github.com/khushaljethava/freellm-apis</a>
</p>

---

MIT License · [LICENSE](LICENSE) · © 2026 freellm.site
