import type { Strings } from './en';

const ja: Strings = {
  nav: { models: 'モデル', imageApis: '画像API', blog: 'ブログ', about: '概要', github: 'GitHub', language: '言語' },
  footer: {
    report: '無料LLM APIの現状',
    privacy: 'プライバシー',
    terms: '利用規約',
    about: '概要',
    contact: 'お問い合わせ',
    cookies: 'Cookie',
    legalNav: '法的情報とサイトリンク',
    updated: 'データは定期的に更新されます',
    contribute: 'GitHub で貢献する',
  },
  common: {
    provider: 'プロバイダー',
    models: 'モデル',
    card: 'カード',
    maxContext: '最大コンテキスト',
    lastVerified: '最終確認',
    sourceLink: name => `${name} のドキュメント`,
    getKey: 'キーを取得',
    getKeyCta: 'キーを取得 →',
    credits: 'クレジット',
    expiry: '有効期限',
    freeTier: '無料枠',
    readMore: '続きを読む →',
    cardLabel: {
      no: 'カード不要',
      registration: 'メール登録',
      phone: '電話認証',
      yes: 'カード必須',
    },
  },
  home: {
    title: (p) => `無料 LLM API — ${p}社のプロバイダーの無料 LLM API キー | freellm.site`,
    description: (p, m) =>
      `クレジットカード不要の無料 LLM API を見つけましょう。${p} プロバイダー、${m} モデル — Groq、Gemini、Mistral、OpenRouter。無料の LLM API キーを数秒で取得できます。`,
    eyebrow: d => `無料・確認済み · 更新日 ${d}`,
    h1a: 'すべての無料 LLM API を、',
    h1b: 'ひとつの場所に。',
    lede: p =>
      `${p} 社のプロバイダーによる恒久無料枠と無料クレジットプラン。探し回る必要も、ペイウォールもありません。数秒でキーが見つかります。`,
    statProviders: 'プロバイダー',
    statModels: 'モデル',
    statAlwaysFree: '常時無料',
    quickPick: 'おすすめ',
    quickPickMeta: (n, ctx) =>
      `— ${n} モデル · コンテキスト ${ctx} · カード不要 · ずっと無料`,
    quickPickCta: '無料キーを取得 →',
    permanentTitle: '恒久無料枠',
    creditsTitle: '登録時の無料クレジット',
    seoTitle: 'すべての無料 LLM API をひとつのディレクトリに',
    seoP1: (p, m) =>
      `実際に使える無料 LLM API を、しかもクレジットカードなしで見つけるのに、午後をまるごとタブ巡りに費やす必要はありません。このディレクトリは ${p} プロバイダーと ${m} モデルを、恒久無料枠から無料クレジットプランまで網羅しています。無料の LLM API キーを取得して数分で開発を始められます。掲載されている API はすべて `,
    seoP1Link: 'OpenAI 互換エンドポイント',
    seoP1End: ' を提供しているため、プロバイダーの切り替えは 1 行の変更で済みます。',
    seoP2:
      '個人プロジェクト向けの最安 LLM API、Llama や Mistral といった優れたオープンソース LLM モデル、コーディング向けの高速な無料 LLM API — 上の表では、モデル数・コンテキストウィンドウ・カードの要否で比較できます。後から有料でスケールしたい場合は、まず無料で始めてからプロバイダー間の料金を比較しましょう。実践的なガイドは、',
    seoP2Link1: 'おすすめ無料 LLM API まとめ',
    seoP2Link2: 'おすすめオープンソース LLM API',
    seoP2Link3: 'コーディング向けおすすめ無料 LLM API',
    guidesTitle: 'ガイド',
    faqTitle: '無料 LLM API のよくある質問',
    faqs: p => [
      {
        q: '最も優れた無料 LLM API は?',
        a: `最適な無料 LLM API は用途によって異なります。Groq は最速、Google Gemini は無料で 1M トークンのコンテキストウィンドウを使え、OpenRouter は 1 つのキーで多数の無料モデルを利用できます。ここに掲載している ${p} プロバイダーはすべて、初期費用なしの無料 LLM API を提供しています。`,
      },
      {
        q: '無料の LLM API キーはどう取得しますか?',
        a: '上の表からプロバイダーを選び、「キーを取得」をクリックしてコンソールで登録します。多くはメールアドレスだけで無料の LLM API キーを即時発行し、クレジットカードは不要です。あとはそれを API キーとして設定すれば、すぐにリクエストを送れます。',
      },
      {
        q: 'クレジットカード不要の無料 LLM API はありますか?',
        a: 'あります。ここに掲載する多くのプロバイダーがクレジットカード不要の無料 LLM API を提供しており、「カード不要」バッジが目印です。Groq、Google Gemini、Cloudflare Workers AI、Mistral はいずれも支払い情報なしで無料 API キーを発行します。',
      },
      {
        q: '最も安い LLM API は?',
        a: '最も安い LLM API は無料のものです。このページのすべてのプロバイダーに無料枠か無料クレジットがあるため、始めるのに費用はかかりません。大量利用が必要になったら、無料枠を使い切った時点で各社の有料料金を比較してください。',
      },
      {
        q: 'オープンソースの LLM API はありますか?',
        a: 'あります。Groq、OpenRouter、Cloudflare Workers AI などのプロバイダーが、Llama や Mistral といったオープンソース LLM モデルを無料 LLM API 経由で提供しています。自前のハードウェアを運用せずに、ホスト型の OpenAI 互換エンドポイントから主要なオープンモデルを利用できます。',
      },
      {
        q: 'オープンソース LLM API のキーを無料で入手できますか?',
        a: 'できます。このページのどのプロバイダーからでも無料 API キーを取得し、それでオープンソース LLM モデルを呼び出せます。クレジットカードなしでオープンモデル用のキーが手に入ります — Groq、OpenRouter、Cloudflare Workers AI はいずれもこの形でオープンウェイトモデルを提供しています。',
      },
      {
        q: '最も安い LLM API プロバイダーは?',
        a: '無料利用であれば、ここのどのプロバイダーも最安の LLM API です。開始費用はかかりません。有料でスケールする段階になったら料金を比較してください。トークン単価はモデルやリージョンによって大きく異なります。',
      },
      {
        q: '無料 LLM API は無制限に呼び出せますか?',
        a: '無料の API 呼び出しには分単位・日単位のレート制限があり、無制限ではありません。とはいえプロトタイピングや軽いプロダクション用途には十分な水準です。無料枠で足りなくなったら、プロバイダーを変えるか有料プランへ移行してください。',
      },
    ],
  },
  blogIndex: {
    title: 'ブログ — 無料 LLM API のガイドとチュートリアル | freellm.site',
    description:
      '無料 LLM API のガイド、チュートリアル、比較記事。Groq、Gemini、OpenRouter など 60 以上の無料 AI プロバイダーの使い方を学べます。',
    h1: 'ブログ',
    lede: '無料 LLM API を使いこなすためのガイドとチュートリアル。',
  },
  post: {
    faqTitle: 'よくある質問',
    relatedTitle: '関連ガイド',
    backToBlog: '← ブログに戻る',
    browseCta: '無料 LLM API を見る →',
    updated: '更新日',
  },
  provider: {
    home: 'ホーム',
    title: name => `${name} の無料 LLM API — レート制限・モデル・セットアップ | freellm.site`,
    description: (notes, baseUrl, n) =>
      `${notes}。ベース URL: ${baseUrl}。無料モデル ${n} 件が利用可能です。`,
    h1: name => `${name} の無料 LLM API`,
    region: {
      global: '世界中で利用できる',
      china: '中国拠点の',
      europe: '欧州拠点の',
      india: 'インド拠点の',
      japan: '日本拠点の',
      korea: '韓国拠点の',
      middle_east: '中東拠点の',
      sea: '東南アジア拠点の',
      unknown: '利用可能な',
    },
    freeCredits: (usd, expiry) => `${usd} ドル分の無料クレジット${expiry ? `（${expiry}）` : ''}`,
    freeTierPermanent: '恒久無料枠',
    card: {
      no: '開始にクレジットカードは不要です',
      registration: '登録はメールアドレスのみで、クレジットカードは不要です',
      phone: '登録には電話認証が必要ですが、クレジットカードは不要です',
      yes: '無料枠の有効化にはクレジットカードが必要です',
    },
    ovIntro: (name, region, free) =>
      `${name} は${region} LLM API プロバイダーで、${free}を提供しています。`,
    ovModels: (n, ctx, modalities) =>
      `無料で ${n} 件のモデルを利用でき${ctx ? `、コンテキストウィンドウは最大 ${ctx} トークンです` : 'ます'}${modalities ? `。対応モダリティは ${modalities} です` : ''}。`,
    ovNoModels: '利用可能なモデルは以下のとおりです。',
    ovRpm: rpm => `無料リクエストは 1 分あたり約 ${rpm} 回に制限されています。`,
    ovEndpoint: (card, baseUrl, name) =>
      `${card}。また ${baseUrl} のエンドポイントは OpenAI 互換のため、既存の OpenAI SDK のコードはベース URL と API キーを変えるだけで ${name} に向けられます。`,
    baseUrlLabel: 'ベース URL',
    cardRequiredLabel: 'カードの要否',
    freeCreditsLabel: '無料クレジット',
    notesLabel: '備考',
    getKeyCta: '無料 API キーを取得 →',
    freeModelsTitle: '無料モデル',
    quickStartTitle: 'クイックスタート',
    relatedTitle: '関連する無料 LLM API プロバイダー',
    relatedItem: (name, n) => `${name} の無料 LLM API — 無料モデル ${n} 件`,
    compareTitle: name => `${name} を比較する`,
    compareItem: (a, b) => `${a} と ${b} — 無料枠の比較`,
    guidesTitle: 'ガイド',
    copied: 'コピーしました!',
  },
  about: {
    title: 'freellm.site について — 無料 LLM API ディレクトリ',
    description:
      'freellm.site の紹介 — 無料 LLM API プロバイダー、モデル、セットアップガイドをまとめた、オープンでコミュニティ運営のディレクトリです。',
    h1: 'freellm.site について',
    lead: 'freellm.site は、恒久無料枠や登録クレジットを提供する LLM API プロバイダーを開発者が見つけられるようにする、無料でオープンなディレクトリです。何十ものサイトを渡り歩く必要はありません。',
    whatTitle: '私たちがしていること',
    what: (p, m) =>
      `${p} のプロバイダーと ${m} のモデルについて、レート制限、コンテキストウィンドウ、クレジットカードの要否、登録リンクを追跡しています。各プロバイダーには専用ページがあり、モデル一覧表とコピーして使えるコードを掲載しているので、数分で始められます。`,
    sourceTitle: 'データの出どころ',
    sourceLead: 'プロバイダー情報は GitHub のオープンソースリポジトリ ',
    sourceLeadEnd: ' で管理されています。データには次が含まれます:',
    sourceItems: [
      'プロバイダーのベース URL、登録リンク、無料枠の種別',
      'モデル ID、コンテキストウィンドウ、モダリティ、レート制限',
      '各プロバイダー項目の最終確認日',
    ],
    sourceNote:
      '各項目は手作業で確認し、定期的に更新しています。プロバイダーの提供条件は変わるため、本番利用の前には必ず各プロバイダー自身のサイトで詳細をご確認ください。',
    whoTitle: '運営者',
    whoA: 'freellm.site は ',
    whoB: ' が、オープンソースプロジェクト freellm-apis の一環として運営しています。サイトは無料で利用でき、データは誰でも貢献できる形で公開されています。',
    ossTitle: 'オープンソース',
    ossA: 'データもサイトのコードも公開されています。情報の古さの報告、新しいプロバイダーの提案、修正の提出は ',
    ossLink: 'GitHub Issues',
    ossB: ' またはプルリクエストからどうぞ。',
    contactTitle: 'お問い合わせ',
    contactA: 'ご質問、訂正、追加してほしいプロバイダーがありましたら、',
    contactLink: 'お問い合わせページ',
    contactB: 'をご覧ください。',
  },
  compare: {
    title: (a, b) => `${a} と ${b} の比較: 無料 LLM API 徹底比較（2026年）`,
    description: (a, b) =>
      `${a} と ${b} の無料枠を比較 — クレジットカード、モデル数、コンテキストウィンドウ、レート制限。あなたのプロジェクトに合う無料 LLM API がわかります。`,
    h1: (a, b) => `${a} と ${b} の比較: 無料 LLM API`,
    crumb: (a, b) => `${a} と ${b}`,
    introA: '',
    introAnd: ' と ',
    introEnd:
      ' の無料枠を、選択を左右するポイント — クレジットカードの要否、無料モデル、コンテキストウィンドウ、レート制限 — で比較します。すべての数値は各プロバイダーのコンソールで確認済みです。',
    glanceTitle: (a, b) => `${a} と ${b} の概要比較`,
    rows: {
      card: 'クレジットカード',
      freeType: '無料枠の種類',
      permanent: '恒久',
      credits: '無料クレジット',
      freeModels: '無料モデル',
      maxContext: '最大コンテキスト',
      maxRpm: '最大 RPM（無料）',
      seePage: 'ページを参照',
      baseUrl: 'ベース URL',
    },
    pickTitle: 'どちらを選ぶべきか',
    verdictCard: (winner, loser, loserCard) =>
      `${winner} のほうが始めやすく、クレジットカードが不要です。一方 ${loser} は「${loserCard}」となります。`,
    verdictCtx: (winner, win, lose) =>
      `コンテキストでは ${winner} が優勢で、${lose} に対して最大 ${win} トークンを扱えます。`,
    verdictTie: (a, b) =>
      `${a} と ${b} は無料枠でほぼ互角です。応答速度と必要なモデルで選ぶとよいでしょう。`,
    bothCompatA:
      'どちらも OpenAI 互換なので、試すのは 1 行の変更だけです。詳しくは',
    bothCompatLink1: '差し替え可能なプロバイダー一覧',
    bothCompatMid: 'と',
    bothCompatLink2: 'レート制限の比較',
    bothCompatEnd:
      'をご覧ください。両方をフォールバック構成で併用すれば、片方がレート制限に達してもアプリが止まることはありません。',
    detailsTitle: 'プロバイダーの詳細',
    detailsItem: name => `${name} の無料 LLM API — モデル・制限・セットアップ`,
    browseAll: '無料 LLM API プロバイダーをすべて見る',
  },
  modelsIndex: {
    title: (m, p) => `無料 LLM モデル — ${p} プロバイダーの ${m} モデルを見る | freellm.site`,
    description: (m, p) =>
      `${p} 社の無料 LLM API プロバイダーが提供する ${m} の無料 LLM モデルを閲覧できます。オープンソースとプロプライエタリのモデルをプロバイダー・モダリティ別に比較しましょう。`,
    h1: '無料 LLM モデル',
    lede: (m, p) => `${p} プロバイダー・${m} モデル`,
    allProviders: 'すべてのプロバイダー',
    allModalities: 'すべてのモダリティ',
    modelId: 'モデル ID',
    context: 'コンテキスト',
    modalities: 'モダリティ',
  },
};

export default ja;
