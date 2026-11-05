import type { Strings } from './en';

const pt: Strings = {
  nav: { models: 'Modelos', imageApis: 'APIs de imagem', blog: 'Blog', about: 'Sobre', github: 'GitHub', language: 'Idioma' },
  footer: {
    report: 'Panorama das APIs LLM gratuitas',
    privacy: 'Privacidade',
    terms: 'Termos',
    about: 'Sobre',
    contact: 'Contato',
    cookies: 'Cookies',
    legalNav: 'Links legais e do site',
    updated: 'Dados atualizados regularmente',
    contribute: 'Contribua no GitHub',
  },
  common: {
    provider: 'Provedor',
    models: 'Modelos',
    card: 'Cartão?',
    maxContext: 'Contexto máx.',
    lastVerified: 'Última verificação',
    sourceLink: name => `documentação da ${name}`,
    getKey: 'Obter chave',
    getKeyCta: 'Obter chave →',
    credits: 'Créditos',
    expiry: 'Validade',
    freeTier: 'Plano gratuito',
    readMore: 'Leia mais →',
    cardLabel: {
      no: 'Sem cartão',
      registration: 'Cadastro por e-mail',
      phone: 'Verificação por telefone',
      yes: 'Cartão obrigatório',
    },
  },
  home: {
    title: (p) => `API LLM grátis — Chaves de API LLM gratuitas de ${p} provedores | freellm.site`,
    description: (p, m) =>
      `Encontre uma API LLM grátis sem cartão de crédito. ${p} provedores, ${m} modelos — Groq, Gemini, Mistral, OpenRouter. Consiga sua chave de API LLM grátis em segundos.`,
    eyebrow: d => `Grátis e verificado · Atualizado em ${d}`,
    h1a: 'Todas as APIs LLM grátis.',
    h1b: 'Em um só lugar.',
    lede: p =>
      `Planos gratuitos permanentes e créditos grátis de ${p} provedores — sem garimpar, sem paywall. Encontre sua chave em segundos.`,
    statProviders: 'Provedores',
    statModels: 'Modelos',
    statAlwaysFree: 'Sempre grátis',
    quickPick: 'Escolha rápida',
    quickPickMeta: (n, ctx) =>
      `— ${n} modelos · ${ctx} de contexto · sem cartão · grátis para sempre`,
    quickPickCta: 'Obter chave grátis →',
    permanentTitle: 'Planos gratuitos permanentes',
    creditsTitle: 'Créditos grátis no cadastro',
    seoTitle: 'Todas as APIs LLM grátis em um só diretório',
    seoP1: (p, m) =>
      `Encontrar uma API LLM grátis que funcione — e sem cartão de crédito — não deveria custar uma tarde inteira pulando de aba em aba. Este diretório reúne ${p} provedores e ${m} modelos, de planos sempre gratuitos a ofertas com créditos, para você pegar uma chave de API LLM grátis e começar a construir em minutos. Toda API aqui expõe um `,
    seoP1Link: 'endpoint compatível com OpenAI',
    seoP1End: ', então trocar de provedor é questão de uma linha.',
    seoP2:
      'Seja procurando a API LLM mais barata para um projeto pessoal, os melhores modelos LLM de código aberto como Llama e Mistral, ou uma API LLM grátis e rápida para programar, as tabelas acima comparam tudo por modelos, janela de contexto e exigência de cartão. Precisa escalar depois? Comece grátis e então compare os preços entre provedores. Para guias práticos, veja nossa ',
    seoP2Link1: 'seleção das melhores APIs LLM grátis',
    seoP2Link2: 'melhores APIs LLM de código aberto',
    seoP2Link3: 'melhores APIs LLM grátis para programar',
    guidesTitle: 'Guias',
    faqTitle: 'Perguntas frequentes sobre APIs LLM grátis',
    faqs: p => [
      {
        q: 'Qual é a melhor API LLM grátis?',
        a: `A melhor API LLM grátis depende do seu caso de uso. A Groq é a mais rápida, o Google Gemini oferece 1M de tokens de contexto grátis e o OpenRouter reúne muitos modelos gratuitos em uma única chave. Todos os ${p} provedores listados aqui oferecem uma API LLM grátis sem custo inicial.`,
      },
      {
        q: 'Como consigo uma chave de API LLM grátis?',
        a: 'Escolha um provedor nas tabelas acima, clique em "Obter chave" e cadastre-se no console dele. A maioria emite a chave de API LLM grátis na hora, só com um e-mail — sem cartão de crédito. Depois é só definir como sua chave de API e começar a fazer requisições.',
      },
      {
        q: 'Existem APIs LLM grátis sem cartão de crédito?',
        a: 'Sim. Muitos provedores aqui oferecem uma API LLM grátis sem cartão de crédito — o selo "Sem cartão" os identifica. Groq, Google Gemini, Cloudflare Workers AI e Mistral entregam chaves gratuitas sem pedir dados de pagamento.',
      },
      {
        q: 'Qual é a API LLM mais barata?',
        a: 'A API LLM mais barata é uma gratuita. Todo provedor desta página tem plano grátis ou créditos, então começar não custa nada. Para alto volume, compare os preços pagos de cada provedor quando suas chamadas gratuitas acabarem.',
      },
      {
        q: 'Existem APIs LLM de código aberto?',
        a: 'Sim. Provedores como Groq, OpenRouter e Cloudflare Workers AI servem modelos de código aberto como Llama e Mistral por meio de uma API LLM grátis. Você acessa os melhores modelos abertos por um endpoint hospedado e compatível com OpenAI, sem manter hardware próprio.',
      },
      {
        q: 'Há chaves de API LLM de código aberto disponíveis de graça?',
        a: 'Sim. Você pode obter uma chave de API grátis em qualquer provedor desta página e chamar modelos LLM de código aberto com ela. Isso dá acesso a modelos abertos sem cartão de crédito — Groq, OpenRouter e Cloudflare Workers AI servem modelos de pesos abertos exatamente assim.',
      },
      {
        q: 'Qual é o provedor de API LLM mais barato?',
        a: 'Para uso gratuito, qualquer provedor daqui é a API LLM mais barata: começar não custa nada. Quando precisar escalar pagando, compare os preços entre provedores, pois as taxas por token variam muito conforme o modelo e a região.',
      },
      {
        q: 'Posso fazer chamadas de API LLM grátis sem limites?',
        a: 'As chamadas gratuitas têm limites por minuto e por dia, não são ilimitadas. Ainda assim são generosas o bastante para prototipagem e produção leve. Quando o plano gratuito ficar pequeno, troque de provedor ou migre para um plano pago.',
      },
    ],
  },
  blogIndex: {
    title: 'Blog — Guias e tutoriais de APIs LLM grátis | freellm.site',
    description:
      'Guias, tutoriais e comparativos de APIs LLM grátis. Aprenda a usar Groq, Gemini, OpenRouter e mais de 60 provedores de IA gratuitos.',
    h1: 'Blog',
    lede: 'Guias e tutoriais para usar APIs LLM grátis.',
  },
  post: {
    faqTitle: 'Perguntas frequentes',
    relatedTitle: 'Guias relacionados',
    backToBlog: '← Voltar ao blog',
    browseCta: 'Ver APIs LLM grátis →',
    updated: 'Atualizado',
  },
  provider: {
    home: 'Início',
    title: name => `API LLM grátis da ${name} — Limites, modelos e configuração | freellm.site`,
    description: (notes, baseUrl, n) =>
      `${notes}. URL base: ${baseUrl}. ${n} modelo${n !== 1 ? 's' : ''} grátis disponíve${n !== 1 ? 'is' : 'l'}.`,
    h1: name => `API LLM grátis da ${name}`,
    region: {
      global: 'disponível globalmente',
      china: 'sediado na China',
      europe: 'sediado na Europa',
      india: 'sediado na Índia',
      japan: 'sediado no Japão',
      korea: 'sediado na Coreia',
      middle_east: 'sediado no Oriente Médio',
      sea: 'sediado no Sudeste Asiático',
      unknown: 'disponível',
    },
    freeCredits: (usd, expiry) =>
      `US$ ${usd} em créditos grátis${expiry ? ` (${expiry})` : ''}`,
    freeTierPermanent: 'um plano gratuito permanente',
    card: {
      no: 'Não é preciso cartão de crédito para começar',
      registration: 'O cadastro exige apenas um e-mail — sem cartão de crédito',
      phone: 'O cadastro exige verificação por telefone, mas não cartão de crédito',
      yes: 'É necessário um cartão de crédito para ativar o plano gratuito',
    },
    ovIntro: (name, region, free) =>
      `A ${name} é um provedor de API LLM ${region} que oferece ${free}.`,
    ovModels: (n, ctx, modalities) =>
      `Você recebe ${n} modelo${n !== 1 ? 's' : ''} grátis${ctx ? ` com janela de contexto de até ${ctx} tokens` : ''}${modalities ? `, com suporte a ${modalities}` : ''}.`,
    ovNoModels: 'A disponibilidade de modelos está listada abaixo.',
    ovRpm: rpm => `As requisições gratuitas são limitadas a cerca de ${rpm} por minuto.`,
    ovEndpoint: (card, baseUrl, name) =>
      `${card}, e o endpoint em ${baseUrl} é compatível com OpenAI, então você pode apontar seu código atual do SDK da OpenAI para a ${name} mudando apenas a URL base e a chave de API.`,
    baseUrlLabel: 'URL base',
    cardRequiredLabel: 'Cartão obrigatório',
    freeCreditsLabel: 'Créditos grátis',
    notesLabel: 'Observações',
    getKeyCta: 'Obter chave de API grátis →',
    freeModelsTitle: 'Modelos grátis',
    quickStartTitle: 'Início rápido',
    relatedTitle: 'Provedores de API LLM grátis relacionados',
    relatedItem: (name, n) =>
      `API LLM grátis da ${name} — ${n} modelo${n !== 1 ? 's' : ''} grátis`,
    compareTitle: name => `Comparar ${name}`,
    compareItem: (a, b) => `${a} vs ${b} — planos gratuitos comparados`,
    guidesTitle: 'Guias',
    copied: 'Copiado!',
  },
  about: {
    title: 'Sobre o freellm.site — Diretório de APIs LLM grátis',
    description:
      'Conheça o freellm.site — um diretório aberto e mantido pela comunidade com provedores de APIs LLM grátis, modelos e guias de configuração.',
    h1: 'Sobre o freellm.site',
    lead: 'O freellm.site é um diretório livre e aberto que ajuda desenvolvedores a encontrar provedores de API LLM com planos gratuitos permanentes e créditos de cadastro — sem vasculhar dezenas de sites.',
    whatTitle: 'O que fazemos',
    what: (p, m) =>
      `Acompanhamos ${p} provedores e ${m} modelos, cobrindo limites de requisições, janelas de contexto, exigência de cartão e links de cadastro. Cada provedor tem uma página própria com tabelas de modelos e trechos de código prontos para copiar, para você começar em minutos.`,
    sourceTitle: 'De onde vêm os dados',
    sourceLead: 'As informações dos provedores são mantidas no repositório de código aberto ',
    sourceLeadEnd: ' no GitHub. Os dados incluem:',
    sourceItems: [
      'URLs base, links de cadastro e tipo de plano gratuito de cada provedor',
      'IDs de modelos, janelas de contexto, modalidades e limites de requisições',
      'Data da última verificação de cada entrada',
    ],
    sourceNote:
      'As entradas são verificadas manualmente e atualizadas com regularidade. Como os termos dos provedores mudam, confirme sempre os detalhes no site do próprio provedor antes de usá-los em produção.',
    whoTitle: 'Quem mantém este site',
    whoA: 'O freellm.site é mantido por ',
    whoB: ' como parte do projeto de código aberto freellm-apis. O site é gratuito e os dados estão abertos para qualquer pessoa contribuir.',
    ossTitle: 'Código aberto',
    ossA: 'Tanto os dados quanto o código do site são públicos. Você pode relatar informações desatualizadas, sugerir novos provedores ou enviar correções pelo ',
    ossLink: 'GitHub Issues',
    ossB: ' ou por pull requests.',
    contactTitle: 'Contato',
    contactA: 'Tem uma dúvida, correção ou provedor para incluir? Acesse nossa ',
    contactLink: 'página de contato',
    contactB: '.',
  },
  compare: {
    title: (a, b) => `${a} vs ${b}: comparativo de APIs LLM grátis (2026)`,
    description: (a, b) =>
      `${a} vs ${b}: planos gratuitos comparados — cartão, modelos, janela de contexto e limites. Veja qual API LLM grátis combina com seu projeto.`,
    h1: (a, b) => `${a} vs ${b}: comparativo de APIs LLM grátis`,
    crumb: (a, b) => `${a} vs ${b}`,
    introA: 'Comparando os planos gratuitos da ',
    introAnd: ' e da ',
    introEnd:
      ' nos pontos que realmente definem a escolha: exigência de cartão, modelos gratuitos, janela de contexto e limites de requisições. Todos os números são verificados no console de cada provedor.',
    glanceTitle: (a, b) => `${a} vs ${b} em resumo`,
    rows: {
      card: 'Cartão de crédito',
      freeType: 'Tipo de plano gratuito',
      permanent: 'Permanente',
      credits: 'Créditos grátis',
      freeModels: 'Modelos grátis',
      maxContext: 'Contexto máx.',
      maxRpm: 'RPM máx. (grátis)',
      seePage: 'Ver página',
      baseUrl: 'URL base',
    },
    pickTitle: 'Qual você deve escolher?',
    verdictCard: (winner, loser, loserCard) =>
      `A ${winner} é mais fácil de começar: sem cartão de crédito, contra ${loserCard} na ${loser}.`,
    verdictCtx: (winner, win, lose) =>
      `A ${winner} vence em contexto, suportando até ${win} tokens contra ${lose}.`,
    verdictTie: (a, b) =>
      `${a} e ${b} estão muito equilibradas no plano gratuito — decida pela velocidade de resposta e pelos modelos de que você precisa.`,
    bothCompatA:
      'Ambas são compatíveis com OpenAI, então testar cada uma é mudar uma linha. Veja a ',
    bothCompatLink1: 'lista de substituição direta',
    bothCompatMid: ' e nosso ',
    bothCompatLink2: 'comparativo de limites',
    bothCompatEnd:
      ' para o panorama completo. Você também pode usar as duas com um mecanismo de fallback, para que um limite atingido nunca derrube sua aplicação.',
    detailsTitle: 'Detalhes completos do provedor',
    detailsItem: name => `API LLM grátis da ${name} — modelos, limites e configuração`,
    browseAll: 'Ver todos os provedores de APIs LLM grátis',
  },
  modelsIndex: {
    title: (m, p) => `Modelos LLM grátis — Explore ${m} modelos de ${p} provedores | freellm.site`,
    description: (m, p) =>
      `Explore ${m} modelos LLM grátis em ${p} provedores de APIs LLM gratuitas. Compare modelos abertos e proprietários por provedor e modalidade.`,
    h1: 'Modelos LLM grátis',
    lede: (m, p) => `${m} modelos em ${p} provedores`,
    allProviders: 'Todos os provedores',
    allModalities: 'Todas as modalidades',
    modelId: 'ID do modelo',
    context: 'Contexto',
    modalities: 'Modalidades',
  },
};

export default pt;
