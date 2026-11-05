import type { Strings } from './en';

const es: Strings = {
  nav: { models: 'Modelos', imageApis: 'APIs de imagen', blog: 'Blog', about: 'Acerca de', github: 'GitHub', language: 'Idioma' },
  footer: {
    report: 'Estado de las APIs LLM gratuitas',
    privacy: 'Privacidad',
    terms: 'Términos',
    about: 'Acerca de',
    contact: 'Contacto',
    cookies: 'Cookies',
    legalNav: 'Enlaces legales y del sitio',
    updated: 'Datos actualizados con regularidad',
    contribute: 'Contribuye en GitHub',
  },
  common: {
    provider: 'Proveedor',
    models: 'Modelos',
    card: '¿Tarjeta?',
    maxContext: 'Contexto máx.',
    lastVerified: 'Última verificación',
    sourceLink: name => `documentación de ${name}`,
    getKey: 'Obtener clave',
    getKeyCta: 'Obtener clave →',
    credits: 'Créditos',
    expiry: 'Caducidad',
    freeTier: 'Nivel gratuito',
    readMore: 'Leer más →',
    cardLabel: {
      no: 'Sin tarjeta',
      registration: 'Registro por email',
      phone: 'Verificación por teléfono',
      yes: 'Tarjeta obligatoria',
    },
  },
  home: {
    title: (p) => `API LLM gratis — Claves de API LLM gratuitas de ${p} proveedores | freellm.site`,
    description: (p, m) =>
      `Encuentra una API LLM gratis sin tarjeta de crédito. ${p} proveedores, ${m} modelos — Groq, Gemini, Mistral, OpenRouter. Consigue tu clave de API LLM gratis en segundos.`,
    eyebrow: d => `Gratis y verificado · Actualizado ${d}`,
    h1a: 'Todas las API LLM gratis.',
    h1b: 'En un solo lugar.',
    lede: p =>
      `Niveles gratuitos permanentes y planes con créditos gratis de ${p} proveedores: sin búsquedas interminables ni muros de pago. Encuentra tu clave en segundos.`,
    statProviders: 'Proveedores',
    statModels: 'Modelos',
    statAlwaysFree: 'Siempre gratis',
    quickPick: 'Elección rápida',
    quickPickMeta: (n, ctx) =>
      `— ${n} modelos · ${ctx} de contexto · sin tarjeta · gratis para siempre`,
    quickPickCta: 'Consigue tu clave gratis →',
    permanentTitle: 'Niveles gratuitos permanentes',
    creditsTitle: 'Créditos gratis al registrarte',
    seoTitle: 'Todas las API LLM gratis en un solo directorio',
    seoP1: (p, m) =>
      `Encontrar una API LLM gratis que funcione —y sin tarjeta de crédito— no debería costarte una tarde entera saltando entre pestañas. Este directorio recoge ${p} proveedores y ${m} modelos, desde niveles siempre gratuitos hasta planes con créditos, para que consigas una clave de API LLM gratis y empieces a construir en minutos. Todas las API de esta lista exponen un `,
    seoP1Link: 'endpoint compatible con OpenAI',
    seoP1End: ', así que cambiar de proveedor es cuestión de una línea.',
    seoP2:
      'Tanto si buscas la API LLM más barata para un proyecto personal, los mejores modelos LLM de código abierto como Llama y Mistral, o una API LLM gratis y rápida para programar, las tablas de arriba los comparan por modelos, ventana de contexto y si exigen tarjeta. ¿Necesitas escalar más adelante? Empieza gratis y luego compara precios entre proveedores. Para guías prácticas, consulta nuestro ',
    seoP2Link1: 'ranking de las mejores API LLM gratis',
    seoP2Link2: 'mejores API LLM de código abierto',
    seoP2Link3: 'mejores API LLM gratis para programar',
    guidesTitle: 'Guías',
    faqTitle: 'Preguntas frecuentes sobre API LLM gratis',
    faqs: p => [
      {
        q: '¿Cuál es la mejor API LLM gratis?',
        a: `La mejor API LLM gratis depende de tu caso de uso. Groq es la más rápida, Google Gemini ofrece 1M de tokens de contexto gratis y OpenRouter reúne muchos modelos gratuitos bajo una sola clave. Los ${p} proveedores de esta lista ofrecen una API LLM gratis sin coste inicial.`,
      },
      {
        q: '¿Cómo consigo una clave de API LLM gratis?',
        a: 'Elige un proveedor de las tablas de arriba, pulsa «Obtener clave» y regístrate en su consola. La mayoría emite una clave de API LLM gratis al instante con solo un correo electrónico, sin tarjeta de crédito. Después la configuras como tu clave de API y empiezas a hacer peticiones.',
      },
      {
        q: '¿Hay API LLM gratis sin tarjeta de crédito?',
        a: 'Sí. Muchos proveedores de esta lista ofrecen una API LLM gratis sin tarjeta de crédito: los identifica la etiqueta «Sin tarjeta». Groq, Google Gemini, Cloudflare Workers AI y Mistral entregan claves de API gratuitas sin pedir datos de pago.',
      },
      {
        q: '¿Cuál es la API LLM más barata?',
        a: 'La API LLM más barata es una gratuita. Todos los proveedores de esta página tienen nivel gratuito o créditos gratis, así que empezar no te cuesta nada. Para volúmenes altos, compara los precios de pago de cada proveedor cuando se agoten tus llamadas gratuitas.',
      },
      {
        q: '¿Existen API LLM de código abierto?',
        a: 'Sí. Proveedores como Groq, OpenRouter y Cloudflare Workers AI sirven modelos LLM de código abierto como Llama y Mistral a través de una API LLM gratis. Accedes a los mejores modelos abiertos mediante un endpoint alojado y compatible con OpenAI, sin gestionar hardware propio.',
      },
      {
        q: '¿Hay claves de API LLM de código abierto disponibles gratis?',
        a: 'Sí. Puedes obtener una clave de API gratis de cualquier proveedor de esta página y usarla para llamar a modelos LLM de código abierto. Así consigues claves para modelos abiertos sin tarjeta de crédito: Groq, OpenRouter y Cloudflare Workers AI sirven modelos de pesos abiertos de esta forma.',
      },
      {
        q: '¿Cuál es el proveedor de API LLM más barato?',
        a: 'Para uso gratuito, cualquier proveedor de aquí es la API LLM más barata: empezar no cuesta nada. Cuando necesites escalar de pago, compara precios entre proveedores, porque las tarifas por token varían mucho según el modelo y la región.',
      },
      {
        q: '¿Puedo hacer llamadas a una API LLM gratis sin límites?',
        a: 'Las llamadas gratuitas tienen límites por minuto y por día, no son ilimitadas. Aun así son suficientes para prototipar y para producción ligera. Cuando te quedes corto, cambia de proveedor o pasa a un plan de pago.',
      },
    ],
  },
  blogIndex: {
    title: 'Blog — Guías y tutoriales de API LLM gratis | freellm.site',
    description:
      'Guías, tutoriales y comparativas de API LLM gratis. Aprende a usar Groq, Gemini, OpenRouter y más de 60 proveedores de IA gratuitos.',
    h1: 'Blog',
    lede: 'Guías y tutoriales para usar API LLM gratis.',
  },
  post: {
    faqTitle: 'Preguntas frecuentes',
    relatedTitle: 'Guías relacionadas',
    backToBlog: '← Volver al blog',
    browseCta: 'Ver APIs LLM gratis →',
    updated: 'Actualizado',
  },
  provider: {
    home: 'Inicio',
    title: name => `API LLM gratis de ${name} — Límites, modelos y configuración | freellm.site`,
    description: (notes, baseUrl, n) =>
      `${notes}. URL base: ${baseUrl}. ${n} modelo${n !== 1 ? 's' : ''} gratis disponible${n !== 1 ? 's' : ''}.`,
    h1: name => `API LLM gratis de ${name}`,
    region: {
      global: 'disponible a nivel mundial',
      china: 'con sede en China',
      europe: 'con sede en Europa',
      india: 'con sede en India',
      japan: 'con sede en Japón',
      korea: 'con sede en Corea',
      middle_east: 'con sede en Oriente Medio',
      sea: 'con sede en el Sudeste Asiático',
      unknown: 'disponible',
    },
    freeCredits: (usd, expiry) =>
      `${usd} USD en créditos gratis${expiry ? ` (${expiry})` : ''}`,
    freeTierPermanent: 'un nivel gratuito permanente',
    card: {
      no: 'No se requiere tarjeta de crédito para empezar',
      registration: 'El registro solo necesita un correo electrónico, sin tarjeta de crédito',
      phone: 'El registro exige verificación por teléfono, pero no tarjeta de crédito',
      yes: 'Se requiere una tarjeta de crédito para activar el nivel gratuito',
    },
    ovIntro: (name, region, free) =>
      `${name} es un proveedor de API LLM ${region} que ofrece ${free}.`,
    ovModels: (n, ctx, modalities) =>
      `Obtienes ${n} modelo${n !== 1 ? 's' : ''} gratis${ctx ? ` con una ventana de contexto de hasta ${ctx} tokens` : ''}${modalities ? `, con soporte para ${modalities}` : ''}.`,
    ovNoModels: 'La disponibilidad de modelos se detalla más abajo.',
    ovRpm: rpm => `Las peticiones gratuitas están limitadas a unas ${rpm} por minuto.`,
    ovEndpoint: (card, baseUrl, name) =>
      `${card}, y el endpoint en ${baseUrl} es compatible con OpenAI, así que puedes apuntar tu código actual del SDK de OpenAI a ${name} cambiando solo la URL base y la clave de API.`,
    baseUrlLabel: 'URL base',
    cardRequiredLabel: 'Tarjeta requerida',
    freeCreditsLabel: 'Créditos gratis',
    notesLabel: 'Notas',
    getKeyCta: 'Obtener clave de API gratis →',
    freeModelsTitle: 'Modelos gratis',
    quickStartTitle: 'Inicio rápido',
    relatedTitle: 'Proveedores de API LLM gratis relacionados',
    relatedItem: (name, n) =>
      `API LLM gratis de ${name} — ${n} modelo${n !== 1 ? 's' : ''} gratis`,
    compareTitle: name => `Comparar ${name}`,
    compareItem: (a, b) => `${a} vs ${b} — comparativa del nivel gratuito`,
    guidesTitle: 'Guías',
    copied: '¡Copiado!',
  },
  about: {
    title: 'Acerca de freellm.site — Directorio de API LLM gratis',
    description:
      'Conoce freellm.site: un directorio abierto y mantenido por la comunidad de proveedores de API LLM gratis, modelos y guías de configuración.',
    h1: 'Acerca de freellm.site',
    lead: 'freellm.site es un directorio libre y abierto que ayuda a los desarrolladores a encontrar proveedores de API LLM con niveles gratuitos permanentes y créditos de registro, sin rastrear decenas de sitios web.',
    whatTitle: 'Qué hacemos',
    what: (p, m) =>
      `Seguimos ${p} proveedores y ${m} modelos, con sus límites de peticiones, ventanas de contexto, requisitos de tarjeta y enlaces de registro. Cada proveedor tiene una página propia con tablas de modelos y fragmentos de código listos para copiar, para que empieces en minutos.`,
    sourceTitle: 'De dónde salen los datos',
    sourceLead: 'La información de los proveedores se mantiene en el repositorio de código abierto ',
    sourceLeadEnd: ' en GitHub. Los datos incluyen:',
    sourceItems: [
      'URL base, enlaces de registro y tipo de nivel gratuito de cada proveedor',
      'IDs de modelos, ventanas de contexto, modalidades y límites de peticiones',
      'Fecha de última verificación de cada entrada',
    ],
    sourceNote:
      'Las entradas se verifican manualmente y se actualizan con regularidad. Como las condiciones de los proveedores cambian, confirma siempre los detalles en su propia web antes de usarlos en producción.',
    whoTitle: 'Quién gestiona este sitio',
    whoA: 'freellm.site está mantenido por ',
    whoB: ' como parte del proyecto de código abierto freellm-apis. El sitio es de uso gratuito y cualquiera puede contribuir a los datos.',
    ossTitle: 'Código abierto',
    ossA: 'Tanto los datos como el código del sitio son públicos. Puedes informar de información desactualizada, sugerir nuevos proveedores o enviar correcciones mediante ',
    ossLink: 'GitHub Issues',
    ossB: ' o pull requests.',
    contactTitle: 'Contacto',
    contactA: '¿Tienes una pregunta, una corrección o un proveedor que añadir? Visita nuestra ',
    contactLink: 'página de contacto',
    contactB: '.',
  },
  compare: {
    title: (a, b) => `${a} vs ${b}: comparativa de API LLM gratis (2026)`,
    description: (a, b) =>
      `${a} vs ${b}: comparamos el nivel gratuito — tarjeta, modelos, ventana de contexto y límites. Descubre qué API LLM gratis encaja con tu proyecto.`,
    h1: (a, b) => `${a} vs ${b}: comparativa de API LLM gratis`,
    crumb: (a, b) => `${a} vs ${b}`,
    introA: 'Comparamos los niveles gratuitos de ',
    introAnd: ' y ',
    introEnd:
      ' en lo que realmente decide cuál usar: si piden tarjeta, modelos gratuitos, ventana de contexto y límites de peticiones. Todas las cifras están verificadas en la consola de cada proveedor.',
    glanceTitle: (a, b) => `${a} vs ${b} de un vistazo`,
    rows: {
      card: 'Tarjeta de crédito',
      freeType: 'Tipo de nivel gratuito',
      permanent: 'Permanente',
      credits: 'Créditos gratis',
      freeModels: 'Modelos gratis',
      maxContext: 'Contexto máximo',
      maxRpm: 'RPM máx. (gratis)',
      seePage: 'Ver página',
      baseUrl: 'URL base',
    },
    pickTitle: '¿Cuál deberías elegir?',
    verdictCard: (winner, loser, loserCard) =>
      `${winner} es más fácil para empezar: sin tarjeta de crédito, frente a ${loserCard} en ${loser}.`,
    verdictCtx: (winner, win, lose) =>
      `${winner} gana en contexto: admite hasta ${win} tokens frente a ${lose}.`,
    verdictTie: (a, b) =>
      `${a} y ${b} están muy igualados en el nivel gratuito: decide por la velocidad de respuesta y los modelos que necesites.`,
    bothCompatA:
      'Ambos son compatibles con OpenAI, así que probar cada uno es cambiar una línea. Consulta la ',
    bothCompatLink1: 'lista de reemplazo directo',
    bothCompatMid: ' y nuestra ',
    bothCompatLink2: 'comparativa de límites',
    bothCompatEnd:
      ' para el panorama completo. También puedes usar ambos con un mecanismo de respaldo, para que un límite en uno no detenga tu aplicación.',
    detailsTitle: 'Detalles completos del proveedor',
    detailsItem: name => `API LLM gratis de ${name} — modelos, límites y configuración`,
    browseAll: 'Ver todos los proveedores de API LLM gratis',
  },
  modelsIndex: {
    title: (m, p) => `Modelos LLM gratis — Explora ${m} modelos de ${p} proveedores | freellm.site`,
    description: (m, p) =>
      `Explora ${m} modelos LLM gratis de ${p} proveedores de API LLM gratuitas. Compara modelos abiertos y propietarios por proveedor y modalidad.`,
    h1: 'Modelos LLM gratis',
    lede: (m, p) => `${m} modelos de ${p} proveedores`,
    allProviders: 'Todos los proveedores',
    allModalities: 'Todas las modalidades',
    modelId: 'ID del modelo',
    context: 'Contexto',
    modalities: 'Modalidades',
  },
};

export default es;
