<p align="center">
  <h1 align="center">🆓 무료 LLM API 디렉토리</h1>
  <p align="center"><strong>70개 이상의 제공업체 · 8개 지역 · 영구 무료 티어 + 체험 크레딧</strong></p>
</p>

<p align="center">
  <a href="https://www.freellm.site" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/🌐_웹사이트-freellm.site-6366f1?style=for-the-badge" alt="웹사이트"/></a>
  <a href="https://github.com/khushaljethava/freellm-apis" target="_blank" rel="noopener"><img src="https://img.shields.io/github/stars/khushaljethava/freellm-apis?style=for-the-badge&color=f59e0b" alt="Stars"/></a>
  <img src="https://img.shields.io/badge/제공업체-70%2B-ec4899?style=for-the-badge" alt="70+ 제공업체"/>
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
- ✅ **70개 이상의 제공업체** — 글로벌, 인도, 중국, 일본, 한국, 유럽, 중동, 동남아시아
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
# Groq 무료 티어: 분당 30 요청, 하루 1,000 요청
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

<!-- BEGIN_PERMANENT -->
| 제공업체 | 모델 | 카드? | 최대 컨텍스트 | 키 받기 |
|---|---|---|---|---|
| [OpenRouter](https://www.freellm.site/ko/providers/openrouter/?utm_source=github&utm_medium=readme) | 16 | 📧 이메일 | 1M | [받기 →](https://openrouter.ai/workspaces/default/keys) |
| [Google Gemini](https://www.freellm.site/ko/providers/google_gemini/?utm_source=github&utm_medium=readme) | 11 | ✅ 불필요 | 1M | [받기 →](https://aistudio.google.com/app/apikey) |
| [OpenCode Zen](https://www.freellm.site/ko/providers/opencode_zen/?utm_source=github&utm_medium=readme) | 10 | 📧 이메일 | 1M | [받기 →](https://opencode.ai/auth) |
| [Groq](https://www.freellm.site/ko/providers/groq/?utm_source=github&utm_medium=readme) | 9 | ✅ 불필요 | 131K | [받기 →](https://console.groq.com/keys) |
| [Cloudflare Workers AI](https://www.freellm.site/ko/providers/cloudflare/?utm_source=github&utm_medium=readme) | 8 | ✅ 불필요 | 1M | [받기 →](https://dash.cloudflare.com/profile/api-tokens) |
| [OVHcloud AI Endpoints](https://www.freellm.site/ko/providers/ovhcloud_ai/?utm_source=github&utm_medium=readme) | 8 | ✅ 불필요 | 262K | [받기 →](https://endpoints.ai.cloud.ovh.net) |
| [ElevenLabs](https://www.freellm.site/ko/providers/elevenlabs/?utm_source=github&utm_medium=readme) | 6 | ✅ 불필요 | — | [받기 →](https://elevenlabs.io/app/sign-up) |
| [OrcaRouter](https://www.freellm.site/ko/providers/orcarouter/?utm_source=github&utm_medium=readme) | 6 | 📧 이메일 | — | [받기 →](https://www.orcarouter.ai/models) |
| [Cohere](https://www.freellm.site/ko/providers/cohere/?utm_source=github&utm_medium=readme) | 5 | ✅ 불필요 | 256K | [받기 →](https://dashboard.cohere.com/api-keys) |
| [NVIDIA NIM](https://www.freellm.site/ko/providers/nvidia_nim/?utm_source=github&utm_medium=readme) | 5 | 📱 전화 | 1M | [받기 →](https://build.nvidia.com/settings/api-keys) |
| [SambaNova Cloud](https://www.freellm.site/ko/providers/sambanova/?utm_source=github&utm_medium=readme) | 5 | 📧 이메일 | 131K | [받기 →](https://cloud.sambanova.ai/apis) |
| [Zhipu AI](https://www.freellm.site/ko/providers/zhipu_ai/?utm_source=github&utm_medium=readme) | 5 | ✅ 불필요 | 200K | [받기 →](https://bigmodel.cn) |
| [ModelScope](https://www.freellm.site/ko/providers/modelscope/?utm_source=github&utm_medium=readme) | 5 | 📧 이메일 | 1M | [받기 →](https://modelscope.cn/my/myaccesstoken) |
| [Zenmux](https://www.freellm.site/ko/providers/zenmux/?utm_source=github&utm_medium=readme) | 5 | 📧 이메일 | 524K | [받기 →](https://zenmux.ai) |
| [Mistral AI](https://www.freellm.site/ko/providers/mistral/?utm_source=github&utm_medium=readme) | 4 | ✅ 불필요 | 256K | [받기 →](https://console.mistral.ai/api-keys) |
| [LLM7.io](https://www.freellm.site/ko/providers/llm7/?utm_source=github&utm_medium=readme) | 4 | ✅ 불필요 | 400K | [받기 →](https://dash.llm7.io) |
| [AI Singapore (SEA-LION)](https://www.freellm.site/ko/providers/ai_singapore/?utm_source=github&utm_medium=readme) | 4 | 📧 이메일 | 262K | [받기 →](https://playground.sea-lion.ai) |
| [Z.ai](https://www.freellm.site/ko/providers/zai/?utm_source=github&utm_medium=readme) | 3 | ✅ 불필요 | 200K | [받기 →](https://z.ai/manage-apikey/apikey-list) |
| [SiliconFlow (CN)](https://www.freellm.site/ko/providers/siliconflow_cn/?utm_source=github&utm_medium=readme) | 1 | 📧 이메일 | 262K | [받기 →](https://siliconflow.cn) |
| [SenseNova](https://www.freellm.site/ko/providers/sensenova/?utm_source=github&utm_medium=readme) | 1 | 📱 전화 | — | [받기 →](https://platform.sensenova.cn/login) |
| [iFlytek Spark](https://www.freellm.site/ko/providers/iflytek_spark/?utm_source=github&utm_medium=readme) | 1 | 📧 이메일 | 8K | [받기 →](https://console.xfyun.cn/services/cbm) |
| [Pollinations](https://www.freellm.site/ko/providers/pollinations/?utm_source=github&utm_medium=readme) | 1 | ✅ 불필요 | 131K | [받기 →](https://enter.pollinations.ai) |
| AI4Bharat | 0 | ✅ 불필요 | — | [받기 →](https://ai4bharat.iitm.ac.in) |
| BharatGen | 0 | ✅ 불필요 | — | [받기 →](https://bharatgen.com) |
| Wrtn Technologies | 0 | ✅ 불필요 | — | [받기 →](https://wrtn.ai) |
| H Company | 0 | 📧 이메일 | — | [받기 →](https://portal.hcompany.ai) |
| DeepL API | 0 | ✅ 불필요 | — | [받기 →](https://developers.deepl.com) |
| Falcon (TII) | 0 | ✅ 불필요 | — | [받기 →](https://falconllm.tii.ae) |

<!-- END_PERMANENT -->

### 💰 가입 시 무료 크레딧

<!-- BEGIN_CREDITS -->
| 제공업체 | 크레딧 | 만료 | 카드? | 키 받기 |
|---|---|---|---|---|
| [xAI (Grok)](https://www.freellm.site/ko/providers/xai/?utm_source=github&utm_medium=readme) | $25 | monthly | 📧 이메일 | [받기 →](https://console.x.ai) |
| [Baichuan AI](https://www.freellm.site/ko/providers/baichuan/?utm_source=github&utm_medium=readme) | $11 | 3 months | 📧 이메일 | [받기 →](https://platform.baichuan-ai.com) |
| [AI21 Labs](https://www.freellm.site/ko/providers/ai21/?utm_source=github&utm_medium=readme) | $10 | 3 months | ✅ 불필요 | [받기 →](https://www.ai21.com) |
| [Novita AI](https://www.freellm.site/ko/providers/novita_ai/?utm_source=github&utm_medium=readme) | $10 | 90 days | ✅ 불필요 | [받기 →](https://novita.ai) |
| [Upstage AI](https://www.freellm.site/ko/providers/upstage_ai/?utm_source=github&utm_medium=readme) | $10 | never | ✅ 불필요 | [받기 →](https://console.upstage.ai) |
| [Cerebras](https://www.freellm.site/ko/providers/cerebras/?utm_source=github&utm_medium=readme) | $5 | 30 days | 💳 필요 | [받기 →](https://cloud.cerebras.ai/) |
| [DeepSeek](https://www.freellm.site/ko/providers/deepseek/?utm_source=github&utm_medium=readme) | $5 | on signup | 📧 이메일 | [받기 →](https://platform.deepseek.com/api_keys) |
| Nscale | $5 | on signup | 📧 이메일 | [받기 →](https://console.nscale.com/) |
| [Sarvam AI](https://www.freellm.site/ko/providers/sarvam_ai/?utm_source=github&utm_medium=readme) | $1.1 | never | 📧 이메일 | [받기 →](https://dashboard.sarvam.ai) |
| [Fireworks AI](https://www.freellm.site/ko/providers/fireworks/?utm_source=github&utm_medium=readme) | $1 | never | ✅ 불필요 | [받기 →](https://app.fireworks.ai/settings/users/api-keys) |
| [Nebius Token Factory](https://www.freellm.site/ko/providers/nebius/?utm_source=github&utm_medium=readme) | $1 | 30 days | 💳 필요 | [받기 →](https://tokenfactory.nebius.com) |
| [SiliconFlow](https://www.freellm.site/ko/providers/siliconflow/?utm_source=github&utm_medium=readme) | $1 | never | 📧 이메일 | [받기 →](https://cloud.siliconflow.com) |
| [Stability AI](https://www.freellm.site/ko/providers/stability_ai/?utm_source=github&utm_medium=readme) | $0.25 | never | ✅ 불필요 | [받기 →](https://platform.stability.ai) |
| [Hugging Face](https://www.freellm.site/ko/providers/huggingface/?utm_source=github&utm_medium=readme) | $0.1 | monthly | ✅ 불필요 | [받기 →](https://huggingface.co/settings/tokens) |
| Replicate | 무료 티어 | — | ✅ 불필요 | [받기 →](https://replicate.com) |
| Fal AI | 무료 티어 | varies (1 week to 1 year) | ✅ 불필요 | [받기 →](https://fal.ai) |
| [Vercel AI Gateway](https://www.freellm.site/ko/providers/vercel_ai_gateway/?utm_source=github&utm_medium=readme) | 무료 티어 | monthly | 📧 이메일 | [받기 →](https://vercel.com/ai-gateway) |
| [Baseten](https://www.freellm.site/ko/providers/baseten/?utm_source=github&utm_medium=readme) | 무료 티어 | never | ✅ 불필요 | [받기 →](https://app.baseten.co/signup) |
| Krutrim AI | 무료 티어 | never | 📧 이메일 | [받기 →](https://www.olakrutrim.com) |
| CoRover BharatGPT | 무료 티어 | never | 📧 이메일 | [받기 →](https://corover.ai) |
| Gnani.ai | 무료 티어 | never | 📧 이메일 | [받기 →](https://gnani.ai) |
| Soket AI | 무료 티어 | never | 📧 이메일 | [받기 →](https://soket.ai) |
| Neysa AI | 무료 티어 | never | 📧 이메일 | [받기 →](https://neysa.ai) |
| [Alibaba DashScope](https://www.freellm.site/ko/providers/alibaba_dashscope/?utm_source=github&utm_medium=readme) | 무료 티어 | 90 days | ✅ 불필요 | [받기 →](https://bailian.console.aliyun.com) |
| [Alibaba Model Studio](https://www.freellm.site/ko/providers/alibaba_model_studio/?utm_source=github&utm_medium=readme) | 무료 티어 | 90 days | 📧 이메일 | [받기 →](https://modelstudio.console.alibabacloud.com) |
| MiniMax | 무료 티어 | never | 📧 이메일 | [받기 →](https://platform.minimax.io) |
| [Tencent Hunyuan](https://www.freellm.site/ko/providers/tencent_hunyuan/?utm_source=github&utm_medium=readme) | 무료 티어 | 1 year | 📧 이메일 | [받기 →](https://console.cloud.tencent.com/hunyuan) |
| [Baidu ERNIE](https://www.freellm.site/ko/providers/baidu_ernie/?utm_source=github&utm_medium=readme) | 무료 티어 | 3 months | 📧 이메일 | [받기 →](https://console.bce.baidu.com/qianfan) |
| [StepFun](https://www.freellm.site/ko/providers/stepfun/?utm_source=github&utm_medium=readme) | 무료 티어 | never | 📧 이메일 | [받기 →](https://platform.stepfun.com) |
| Volcengine Ark | 무료 티어 | — | 📧 이메일 | [받기 →](https://console.volcengine.com/ark) |
| Huawei Cloud Pangu | 무료 티어 | never | 📧 이메일 | [받기 →](https://www.huaweicloud.com) |
| [Naver HyperCLOVA X](https://www.freellm.site/ko/providers/naver_hyperclova/?utm_source=github&utm_medium=readme) | 무료 티어 | never | 📧 이메일 | [받기 →](https://clovastudio.ncloud.com) |
| LG EXAONE | 무료 티어 | never | 📧 이메일 | [받기 →](https://www.lgresearch.ai) |
| SK Telecom A.X | 무료 티어 | never | 📧 이메일 | [받기 →](https://www.sktelecom.com) |
| LightOn | 무료 티어 | never | 📧 이메일 | [받기 →](https://lighton.ai/pricing) |
| [Scaleway AI](https://www.freellm.site/ko/providers/scaleway_ai/?utm_source=github&utm_medium=readme) | 무료 티어 | never | 💳 필요 | [받기 →](https://console.scaleway.com/generative-api/models) |
| Inception AI | 무료 티어 | never | 📧 이메일 | [받기 →](https://inceptionai.ai) |
| GMI Cloud | 무료 티어 | never | 📧 이메일 | [받기 →](https://console.gmicloud.ai) |
| NCS AI | 무료 티어 | never | 📧 이메일 | [받기 →](https://www.ncs.co) |
| Sakana AI | 무료 티어 | never | 📧 이메일 | [받기 →](https://console.sakana.ai) |
| [Preferred Networks](https://www.freellm.site/ko/providers/preferred_networks/?utm_source=github&utm_medium=readme) | 무료 티어 | 1 month | 📧 이메일 | [받기 →](https://plamo.preferredai.jp/api) |
| Fujitsu Kozuchi | 무료 티어 | never | 📧 이메일 | [받기 →](https://www.fujitsu.com/global/services/business-services/kozuchi) |
| NTT DATA AI | 무료 티어 | never | 📧 이메일 | [받기 →](https://www.nttdata.com/global/en/) |
| NEC Generative AI | 무료 티어 | never | 📧 이메일 | [받기 →](https://www.nec.com) |
| Rakuten AI | 무료 티어 | never | 📧 이메일 | [받기 →](https://global.rakuten.com/corp/) |

<!-- END_CREDITS -->

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
