// Shape reference for every other locale file. A locale is only routed for a page
// if its catalogue provides that page's block (see hasPage() in ui.ts).
const en = {
  nav: {
    models: 'Models',
    imageApis: 'Image APIs',
    blog: 'Blog',
    about: 'About',
    github: 'GitHub',
    language: 'Language',
  },
  footer: {
    report: 'State of Free LLM APIs',
    privacy: 'Privacy',
    terms: 'Terms',
    about: 'About',
    contact: 'Contact',
    cookies: 'Cookies',
    legalNav: 'Legal and site links',
    updated: 'Data updated regularly',
    contribute: 'Contribute on GitHub',
  },
  common: {
    provider: 'Provider',
    models: 'Models',
    card: 'Card?',
    maxContext: 'Max context',
    lastVerified: 'Last verified',
    sourceLink: (name: string) => `${name} docs`,
    getKey: 'Get key',
    getKeyCta: 'Get key →',
    credits: 'Credits',
    expiry: 'Expiry',
    freeTier: 'Free tier',
    readMore: 'Read more →',
    cardLabel: {
      no: 'No card',
      registration: 'Email signup',
      phone: 'Phone verify',
      yes: 'Card required',
    },
  },
  home: {
    title: (p: number) => `Free LLM API — Free LLM API Keys from ${p} Providers | freellm.site`,
    description: (p: number, m: number) =>
      `Find a free LLM API with no credit card. ${p} providers, ${m} models — Groq, Gemini, Mistral, OpenRouter. Get your free LLM API key in seconds.`,
    eyebrow: (d: string) => `Free & verified · Updated ${d}`,
    h1a: 'Every free LLM API.',
    h1b: 'One place.',
    lede: (p: number) =>
      `Permanent free tiers and free-credit plans from ${p} providers — no hunting, no paywalls. Find your key in seconds.`,
    statProviders: 'Providers',
    statModels: 'Models',
    statAlwaysFree: 'Always free',
    quickPick: 'Quick pick',
    quickPickMeta: (n: number, ctx: string) =>
      `— ${n} models · ${ctx} context · no card required · free forever`,
    quickPickCta: 'Get free key →',
    permanentTitle: 'Permanent free tiers',
    creditsTitle: 'Free credits on signup',
    seoTitle: 'Every free LLM API in one directory',
    seoP1: (p: number, m: number) =>
      `Finding a free LLM API that works — without a credit card — shouldn't take an afternoon of tab-hopping. This directory tracks ${p} providers and ${m} models, from always-free tiers to free-credit plans, so you can grab a free LLM API key and start building in minutes. Every LLM API here exposes an `,
    seoP1Link: 'OpenAI-compatible endpoint',
    seoP1End: ', so switching providers is a one-line change.',
    seoP2:
      'Whether you need the cheapest LLM API for a side project, the best open source LLM models like Llama and Mistral, or a fast free LLM API for coding, the tables above compare them on models, context window, and whether a card is required. Need paid scale later? Start free, then run an LLM API pricing comparison across providers. For hands-on guides, see our ',
    seoP2Link1: 'roundup of the best free LLM APIs',
    seoP2Link2: 'best open source LLM APIs',
    seoP2Link3: 'best free LLM APIs for coding',
    guidesTitle: 'Guides',
    faqTitle: 'Free LLM API FAQ',
    faqs: (p: number, _m: number) => [
      {
        q: 'What is the best free LLM API?',
        a: `The best free LLM API depends on your use case. Groq is the fastest, Google Gemini gives a 1M-token free context window, and OpenRouter puts many free models behind one key. All ${p} providers listed here offer a free LLM API with no upfront cost.`,
      },
      {
        q: 'How do I get a free LLM API key?',
        a: 'Pick a provider from the tables above, click Get key, and sign up on their console. Most issue a free LLM API key instantly with just an email — no credit card. Then set it as your API key and start making requests.',
      },
      {
        q: 'Are there free LLM APIs with no credit card?',
        a: 'Yes. Many providers here offer a free LLM API with no credit card required — the "No card" badge marks them. Groq, Google Gemini, Cloudflare Workers AI, and Mistral all give free API keys without any payment details.',
      },
      {
        q: 'What is the cheapest LLM API?',
        a: 'The cheapest LLM API is a free one. Every provider on this page has a free tier or free credits, so you pay nothing to start. For high volume, compare paid pricing per provider once your free LLM API calls run out.',
      },
      {
        q: 'Are there open source LLM APIs?',
        a: 'Yes. Providers like Groq, OpenRouter, and Cloudflare Workers AI serve open source LLM models such as Llama and Mistral through a free LLM API. You get the best open source LLM models via a hosted, OpenAI-compatible endpoint without running your own hardware.',
      },
      {
        q: 'Are there open source LLM API keys available for free?',
        a: 'Yes. You can get a free API key from any provider on this page and call open source LLM models through it. That gives you open source LLM API keys without a credit card — Groq, OpenRouter, and Cloudflare Workers AI all serve open-weight models this way.',
      },
      {
        q: 'What is the cheapest LLM API provider?',
        a: 'For free usage, any provider here is the cheapest LLM API — you pay nothing to start. When you need paid scale, run an LLM API pricing comparison across providers, since per-token rates for a cheap LLM API vary widely by model and region.',
      },
      {
        q: 'Can I make free LLM API calls without limits?',
        a: 'Free LLM API calls come with per-minute and per-day rate limits, not unlimited use. The limits are generous enough for prototyping and light production. When you outgrow a free tier, switch providers or upgrade to a paid plan.',
      },
    ],
  },
  blogIndex: {
    title: 'Blog — Free LLM API Guides & Tutorials | freellm.site',
    description:
      'Guides, tutorials, and comparisons for free LLM APIs. Learn how to use Groq, Gemini, OpenRouter and 60+ free AI providers.',
    h1: 'Blog',
    lede: 'Guides and tutorials for using free LLM APIs.',
  },
  post: {
    faqTitle: 'Frequently asked questions',
    relatedTitle: 'Related guides',
    backToBlog: '← Back to blog',
    browseCta: 'Browse free LLM APIs →',
    updated: 'Updated',
  },
  provider: {
    home: 'Home',
    title: (name: string) => `${name} Free LLM API — Rate Limits, Models & Setup | freellm.site`,
    description: (notes: string, baseUrl: string, n: number) =>
      `${notes}. Base URL: ${baseUrl}. ${n} free model${n !== 1 ? 's' : ''} available.`,
    h1: (name: string) => `${name} Free LLM API`,
    region: {
      global: 'globally available',
      china: 'China-based',
      europe: 'Europe-based',
      india: 'India-based',
      japan: 'Japan-based',
      korea: 'Korea-based',
      middle_east: 'Middle East-based',
      sea: 'Southeast Asia-based',
      unknown: 'available',
    },
    freeCredits: (usd: number, expiry?: string) =>
      `$${usd} in free credits${expiry ? ` (${expiry})` : ''}`,
    freeTierPermanent: 'a permanent free tier',
    card: {
      no: 'No credit card is required to start',
      registration: 'Signup needs only an email — no credit card',
      phone: 'Signup requires phone verification but no credit card',
      yes: 'A credit card is required to activate the free tier',
    },
    ovIntro: (name: string, region: string, free: string) =>
      `${name} is a ${region} LLM API provider offering ${free}.`,
    ovModels: (n: number, ctx: string, modalities: string) =>
      `You get ${n} free model${n !== 1 ? 's' : ''}${ctx ? ` with up to a ${ctx}-token context window` : ''}${modalities ? `, supporting ${modalities}` : ''}.`,
    ovNoModels: 'Model availability is listed below.',
    ovRpm: (rpm: number) => `Free requests are rate-limited to around ${rpm} per minute.`,
    ovEndpoint: (card: string, baseUrl: string, name: string) =>
      `${card}, and the endpoint at ${baseUrl} is OpenAI-compatible, so you can point existing OpenAI SDK code at ${name} by changing only the base URL and API key.`,
    baseUrlLabel: 'Base URL',
    cardRequiredLabel: 'Card required',
    freeCreditsLabel: 'Free credits',
    notesLabel: 'Notes',
    getKeyCta: 'Get Free API Key →',
    freeModelsTitle: 'Free Models',
    quickStartTitle: 'Quick Start',
    relatedTitle: 'Related Free LLM API Providers',
    relatedItem: (name: string, n: number) =>
      `${name} free LLM API — ${n} free model${n !== 1 ? 's' : ''}`,
    compareTitle: (name: string) => `Compare ${name}`,
    compareItem: (a: string, b: string) => `${a} vs ${b} — free tier compared`,
    guidesTitle: 'Guides',
    copied: 'Copied!',
  },
  about: {
    title: 'About freellm.site — Free LLM API Directory',
    description:
      'Learn about freellm.site — an open, community-maintained directory of free LLM API providers, models, and setup guides.',
    h1: 'About freellm.site',
    lead: 'freellm.site is a free, open directory that helps developers find LLM API providers with permanent free tiers and signup credits — without hunting across dozens of websites.',
    whatTitle: 'What we do',
    what: (p: number, m: number) =>
      `We track ${p} providers and ${m} models, covering rate limits, context windows, credit card requirements, and signup links. Each provider has a dedicated page with model tables and copy-paste code snippets so you can get started in minutes.`,
    sourceTitle: 'How data is sourced',
    sourceLead: 'Provider information is maintained in the open-source ',
    sourceLeadEnd: ' repository on GitHub. Data includes:',
    sourceItems: [
      'Provider base URLs, signup links, and free tier type',
      'Model IDs, context windows, modalities, and rate limits',
      'Last verified dates for each provider entry',
    ],
    sourceNote:
      'Entries are verified manually and updated regularly. Because provider terms change, always confirm details on the provider’s own website before relying on them for production use.',
    whoTitle: 'Who runs this site',
    whoA: 'freellm.site is maintained by ',
    whoB: ' as part of the freellm-apis open-source project. The site is free to use and the underlying data is open for anyone to contribute.',
    ossTitle: 'Open source',
    ossA: 'Both the data and website code are public. You can report outdated information, suggest new providers, or submit corrections via ',
    ossLink: 'GitHub Issues',
    ossB: ' or pull requests.',
    contactTitle: 'Contact',
    contactA: 'Have a question, correction, or provider to add? Visit our ',
    contactLink: 'Contact page',
    contactB: '.',
  },
  compare: {
    title: (a: string, b: string) => `${a} vs ${b}: Free LLM API Comparison (2026)`,
    description: (a: string, b: string) =>
      `${a} vs ${b} free tier compared — credit card, models, context window and rate limits. See which free LLM API fits your project.`,
    h1: (a: string, b: string) => `${a} vs ${b}: Free LLM API Comparison`,
    crumb: (a: string, b: string) => `${a} vs ${b}`,
    introA: 'Comparing the free tiers of ',
    introAnd: ' and ',
    introEnd:
      ' on the things that decide which you should use: credit-card requirement, free models, context window, and rate limits. All figures are verified from each provider’s own console.',
    glanceTitle: (a: string, b: string) => `${a} vs ${b} at a glance`,
    rows: {
      card: 'Credit card',
      freeType: 'Free tier type',
      permanent: 'Permanent',
      credits: 'Free credits',
      freeModels: 'Free models',
      maxContext: 'Max context',
      maxRpm: 'Max RPM (free)',
      seePage: 'See page',
      baseUrl: 'Base URL',
    },
    pickTitle: 'Which should you pick?',
    verdictCard: (winner: string, loser: string, loserCard: string) =>
      `${winner} is easier to start with — no credit card, versus ${loserCard} for ${loser}.`,
    verdictCtx: (winner: string, win: string, lose: string) =>
      `${winner} wins on context, handling up to ${win} tokens against ${lose}.`,
    verdictTie: (a: string, b: string) =>
      `${a} and ${b} are closely matched on the free tier — pick on response speed and which models you need.`,
    bothCompatA: 'Both are OpenAI-compatible, so trying each is a one-line change — see the ',
    bothCompatLink1: 'drop-in list',
    bothCompatMid: ' and our ',
    bothCompatLink2: 'rate-limit comparison',
    bothCompatEnd:
      ' for the full picture. You can also run both behind a fallback so a rate limit on one never stops your app.',
    detailsTitle: 'Full provider details',
    detailsItem: (name: string) => `${name} free LLM API — models, limits & setup`,
    browseAll: 'Browse all free LLM API providers',
  },
  modelsIndex: {
    title: (m: number, p: number) =>
      `Free LLM Models — Browse ${m} Models from ${p} Providers | freellm.site`,
    description: (m: number, p: number) =>
      `Browse ${m} free LLM models across ${p} free LLM API providers. Compare open-source and proprietary LLM models by provider and modality.`,
    h1: 'Free LLM Models',
    lede: (m: number, p: number) => `${m} models across ${p} providers`,
    allProviders: 'All Providers',
    allModalities: 'All Modalities',
    modelId: 'Model ID',
    context: 'Context',
    modalities: 'Modalities',
  },
};

export type Strings = typeof en;
export default en;
