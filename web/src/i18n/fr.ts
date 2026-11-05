import type { Strings } from './en';

const fr: Strings = {
  nav: { models: 'Modèles', imageApis: 'API d’images', blog: 'Blog', about: 'À propos', github: 'GitHub', language: 'Langue' },
  footer: {
    report: 'État des API LLM gratuites',
    privacy: 'Confidentialité',
    terms: 'Conditions',
    about: 'À propos',
    contact: 'Contact',
    cookies: 'Cookies',
    legalNav: 'Mentions légales et liens du site',
    updated: 'Données mises à jour régulièrement',
    contribute: 'Contribuer sur GitHub',
  },
  common: {
    provider: 'Fournisseur',
    models: 'Modèles',
    card: 'Carte ?',
    maxContext: 'Contexte max.',
    lastVerified: 'Dernière vérification',
    sourceLink: name => `documentation ${name}`,
    getKey: 'Obtenir la clé',
    getKeyCta: 'Obtenir la clé →',
    credits: 'Crédits',
    expiry: 'Expiration',
    freeTier: 'Offre gratuite',
    readMore: 'Lire la suite →',
    cardLabel: {
      no: 'Sans carte',
      registration: 'Inscription par e-mail',
      phone: 'Vérification par téléphone',
      yes: 'Carte requise',
    },
  },
  home: {
    title: (p) => `API LLM gratuite — Clés d’API LLM gratuites de ${p} fournisseurs | freellm.site`,
    description: (p, m) =>
      `Trouvez une API LLM gratuite sans carte bancaire. ${p} fournisseurs, ${m} modèles — Groq, Gemini, Mistral, OpenRouter. Obtenez votre clé d’API LLM gratuite en quelques secondes.`,
    eyebrow: d => `Gratuit et vérifié · Mis à jour le ${d}`,
    h1a: 'Toutes les API LLM gratuites.',
    h1b: 'Au même endroit.',
    lede: p =>
      `Offres gratuites permanentes et crédits offerts par ${p} fournisseurs — sans chercher, sans paywall. Trouvez votre clé en quelques secondes.`,
    statProviders: 'Fournisseurs',
    statModels: 'Modèles',
    statAlwaysFree: 'Toujours gratuit',
    quickPick: 'Choix rapide',
    quickPickMeta: (n, ctx) => `— ${n} modèles · ${ctx} de contexte · sans carte · gratuit à vie`,
    quickPickCta: 'Obtenir une clé gratuite →',
    permanentTitle: 'Offres gratuites permanentes',
    creditsTitle: 'Crédits offerts à l’inscription',
    seoTitle: 'Toutes les API LLM gratuites dans un seul annuaire',
    seoP1: (p, m) =>
      `Trouver une API LLM gratuite qui fonctionne — et sans carte bancaire — ne devrait pas prendre un après-midi à sauter d’onglet en onglet. Cet annuaire recense ${p} fournisseurs et ${m} modèles, des offres gratuites à vie aux formules à crédits, pour que vous obteniez une clé d’API LLM gratuite et démarriez en quelques minutes. Chaque API listée expose un `,
    seoP1Link: 'endpoint compatible OpenAI',
    seoP1End: ', changer de fournisseur ne demande donc qu’une seule ligne.',
    seoP2:
      'Que vous cherchiez l’API LLM la moins chère pour un projet perso, les meilleurs modèles LLM open source comme Llama et Mistral, ou une API LLM gratuite et rapide pour coder, les tableaux ci-dessus les comparent selon les modèles, la fenêtre de contexte et l’exigence d’une carte. Besoin de passer à l’échelle plus tard ? Commencez gratuitement, puis comparez les tarifs des fournisseurs. Pour des guides pratiques, consultez notre ',
    seoP2Link1: 'sélection des meilleures API LLM gratuites',
    seoP2Link2: 'meilleures API LLM open source',
    seoP2Link3: 'meilleures API LLM gratuites pour coder',
    guidesTitle: 'Guides',
    faqTitle: 'FAQ sur les API LLM gratuites',
    faqs: p => [
      {
        q: 'Quelle est la meilleure API LLM gratuite ?',
        a: `La meilleure API LLM gratuite dépend de votre usage. Groq est la plus rapide, Google Gemini offre gratuitement 1M de tokens de contexte et OpenRouter regroupe de nombreux modèles gratuits derrière une seule clé. Les ${p} fournisseurs listés ici proposent tous une API LLM gratuite sans frais initiaux.`,
      },
      {
        q: 'Comment obtenir une clé d’API LLM gratuite ?',
        a: 'Choisissez un fournisseur dans les tableaux ci-dessus, cliquez sur « Obtenir la clé » et inscrivez-vous sur sa console. La plupart délivrent une clé d’API LLM gratuite immédiatement avec une simple adresse e-mail, sans carte bancaire. Définissez-la ensuite comme clé d’API et lancez vos premières requêtes.',
      },
      {
        q: 'Existe-t-il des API LLM gratuites sans carte bancaire ?',
        a: 'Oui. De nombreux fournisseurs ici proposent une API LLM gratuite sans carte bancaire — le badge « Sans carte » les signale. Groq, Google Gemini, Cloudflare Workers AI et Mistral délivrent des clés gratuites sans aucune coordonnée bancaire.',
      },
      {
        q: 'Quelle est l’API LLM la moins chère ?',
        a: 'L’API LLM la moins chère est une API gratuite. Chaque fournisseur de cette page propose une offre gratuite ou des crédits, démarrer ne coûte donc rien. Pour de gros volumes, comparez les tarifs payants de chaque fournisseur une fois vos appels gratuits épuisés.',
      },
      {
        q: 'Existe-t-il des API LLM open source ?',
        a: 'Oui. Des fournisseurs comme Groq, OpenRouter et Cloudflare Workers AI servent des modèles open source tels que Llama et Mistral via une API LLM gratuite. Vous accédez aux meilleurs modèles ouverts grâce à un endpoint hébergé et compatible OpenAI, sans gérer votre propre matériel.',
      },
      {
        q: 'Peut-on obtenir gratuitement des clés d’API LLM open source ?',
        a: 'Oui. Vous pouvez obtenir une clé d’API gratuite chez n’importe quel fournisseur de cette page et appeler des modèles LLM open source avec. Vous disposez ainsi de clés pour modèles ouverts sans carte bancaire — Groq, OpenRouter et Cloudflare Workers AI servent tous des modèles à poids ouverts de cette façon.',
      },
      {
        q: 'Quel est le fournisseur d’API LLM le moins cher ?',
        a: 'Pour un usage gratuit, tout fournisseur listé ici est l’API LLM la moins chère : démarrer ne coûte rien. Pour passer au payant, comparez les tarifs, car les prix par token varient beaucoup selon le modèle et la région.',
      },
      {
        q: 'Puis-je faire des appels d’API LLM gratuits sans limite ?',
        a: 'Les appels gratuits sont soumis à des limites par minute et par jour, ils ne sont pas illimités. Ces limites restent généreuses pour du prototypage et de la production légère. Quand elles ne suffisent plus, changez de fournisseur ou passez à une offre payante.',
      },
    ],
  },
  blogIndex: {
    title: 'Blog — Guides et tutoriels sur les API LLM gratuites | freellm.site',
    description:
      'Guides, tutoriels et comparatifs sur les API LLM gratuites. Apprenez à utiliser Groq, Gemini, OpenRouter et plus de 60 fournisseurs d’IA gratuits.',
    h1: 'Blog',
    lede: 'Guides et tutoriels pour utiliser les API LLM gratuites.',
  },
  post: {
    faqTitle: 'Questions fréquentes',
    relatedTitle: 'Guides associés',
    backToBlog: '← Retour au blog',
    browseCta: 'Voir les API LLM gratuites →',
    updated: 'Mis à jour',
  },
  provider: {
    home: 'Accueil',
    title: name => `API LLM gratuite ${name} — Limites, modèles et configuration | freellm.site`,
    description: (notes, baseUrl, n) =>
      `${notes}. URL de base : ${baseUrl}. ${n} modèle${n !== 1 ? 's' : ''} gratuit${n !== 1 ? 's' : ''} disponible${n !== 1 ? 's' : ''}.`,
    h1: name => `API LLM gratuite ${name}`,
    region: {
      global: 'disponible dans le monde entier',
      china: 'basé en Chine',
      europe: 'basé en Europe',
      india: 'basé en Inde',
      japan: 'basé au Japon',
      korea: 'basé en Corée',
      middle_east: 'basé au Moyen-Orient',
      sea: 'basé en Asie du Sud-Est',
      unknown: 'disponible',
    },
    freeCredits: (usd, expiry) =>
      `${usd} USD de crédits offerts${expiry ? ` (${expiry})` : ''}`,
    freeTierPermanent: 'une offre gratuite permanente',
    card: {
      no: 'Aucune carte bancaire n’est nécessaire pour commencer',
      registration: 'L’inscription ne demande qu’une adresse e-mail, sans carte bancaire',
      phone: 'L’inscription exige une vérification par téléphone, mais pas de carte bancaire',
      yes: 'Une carte bancaire est requise pour activer l’offre gratuite',
    },
    ovIntro: (name, region, free) =>
      `${name} est un fournisseur d’API LLM ${region} qui propose ${free}.`,
    ovModels: (n, ctx, modalities) =>
      `Vous disposez de ${n} modèle${n !== 1 ? 's' : ''} gratuit${n !== 1 ? 's' : ''}${ctx ? `, avec une fenêtre de contexte allant jusqu’à ${ctx} tokens` : ''}${modalities ? `, prenant en charge ${modalities}` : ''}.`,
    ovNoModels: 'La disponibilité des modèles est indiquée ci-dessous.',
    ovRpm: rpm => `Les requêtes gratuites sont limitées à environ ${rpm} par minute.`,
    ovEndpoint: (card, baseUrl, name) =>
      `${card}, et l’endpoint ${baseUrl} est compatible OpenAI : vous pouvez donc faire pointer votre code SDK OpenAI existant vers ${name} en ne changeant que l’URL de base et la clé d’API.`,
    baseUrlLabel: 'URL de base',
    cardRequiredLabel: 'Carte requise',
    freeCreditsLabel: 'Crédits offerts',
    notesLabel: 'Notes',
    getKeyCta: 'Obtenir une clé d’API gratuite →',
    freeModelsTitle: 'Modèles gratuits',
    quickStartTitle: 'Démarrage rapide',
    relatedTitle: 'Fournisseurs d’API LLM gratuites similaires',
    relatedItem: (name, n) =>
      `API LLM gratuite ${name} — ${n} modèle${n !== 1 ? 's' : ''} gratuit${n !== 1 ? 's' : ''}`,
    compareTitle: name => `Comparer ${name}`,
    compareItem: (a, b) => `${a} vs ${b} — offres gratuites comparées`,
    guidesTitle: 'Guides',
    copied: 'Copié !',
  },
  about: {
    title: 'À propos de freellm.site — Annuaire d’API LLM gratuites',
    description:
      'Découvrez freellm.site — un annuaire ouvert et maintenu par la communauté des fournisseurs d’API LLM gratuites, des modèles et des guides de configuration.',
    h1: 'À propos de freellm.site',
    lead: 'freellm.site est un annuaire libre et ouvert qui aide les développeurs à trouver des fournisseurs d’API LLM proposant des offres gratuites permanentes et des crédits à l’inscription, sans écumer des dizaines de sites.',
    whatTitle: 'Ce que nous faisons',
    what: (p, m) =>
      `Nous suivons ${p} fournisseurs et ${m} modèles, avec leurs limites de requêtes, fenêtres de contexte, exigences de carte bancaire et liens d’inscription. Chaque fournisseur dispose d’une page dédiée avec tableaux de modèles et extraits de code à copier-coller, pour démarrer en quelques minutes.`,
    sourceTitle: 'D’où viennent les données',
    sourceLead: 'Les informations sur les fournisseurs sont maintenues dans le dépôt open source ',
    sourceLeadEnd: ' sur GitHub. Les données comprennent :',
    sourceItems: [
      'URL de base, liens d’inscription et type d’offre gratuite par fournisseur',
      'Identifiants de modèles, fenêtres de contexte, modalités et limites de requêtes',
      'Date de dernière vérification pour chaque entrée',
    ],
    sourceNote:
      'Les entrées sont vérifiées manuellement et mises à jour régulièrement. Les conditions des fournisseurs évoluant, confirmez toujours les détails sur leur propre site avant tout usage en production.',
    whoTitle: 'Qui gère ce site',
    whoA: 'freellm.site est maintenu par ',
    whoB: ' dans le cadre du projet open source freellm-apis. Le site est gratuit et les données sont ouvertes à toutes les contributions.',
    ossTitle: 'Open source',
    ossA: 'Les données comme le code du site sont publics. Vous pouvez signaler une information obsolète, proposer de nouveaux fournisseurs ou soumettre des corrections via ',
    ossLink: 'les issues GitHub',
    ossB: ' ou des pull requests.',
    contactTitle: 'Contact',
    contactA: 'Une question, une correction ou un fournisseur à ajouter ? Consultez notre ',
    contactLink: 'page de contact',
    contactB: '.',
  },
  compare: {
    title: (a, b) => `${a} vs ${b} : comparatif des API LLM gratuites (2026)`,
    description: (a, b) =>
      `${a} vs ${b} : offres gratuites comparées — carte bancaire, modèles, fenêtre de contexte et limites. Découvrez quelle API LLM gratuite convient à votre projet.`,
    h1: (a, b) => `${a} vs ${b} : comparatif des API LLM gratuites`,
    crumb: (a, b) => `${a} vs ${b}`,
    introA: 'Nous comparons les offres gratuites de ',
    introAnd: ' et ',
    introEnd:
      ' sur ce qui détermine vraiment votre choix : carte bancaire exigée, modèles gratuits, fenêtre de contexte et limites de requêtes. Tous les chiffres sont vérifiés depuis la console de chaque fournisseur.',
    glanceTitle: (a, b) => `${a} vs ${b} en un coup d’œil`,
    rows: {
      card: 'Carte bancaire',
      freeType: 'Type d’offre gratuite',
      permanent: 'Permanente',
      credits: 'Crédits offerts',
      freeModels: 'Modèles gratuits',
      maxContext: 'Contexte max.',
      maxRpm: 'RPM max. (gratuit)',
      seePage: 'Voir la page',
      baseUrl: 'URL de base',
    },
    pickTitle: 'Lequel choisir ?',
    verdictCard: (winner, loser, loserCard) =>
      `${winner} est plus simple pour démarrer : aucune carte bancaire, contre ${loserCard} pour ${loser}.`,
    verdictCtx: (winner, win, lose) =>
      `${winner} l’emporte sur le contexte, avec jusqu’à ${win} tokens contre ${lose}.`,
    verdictTie: (a, b) =>
      `${a} et ${b} sont au coude-à-coude sur l’offre gratuite : choisissez selon la vitesse de réponse et les modèles dont vous avez besoin.`,
    bothCompatA:
      'Les deux sont compatibles OpenAI : tester chacun ne demande qu’une ligne. Consultez la ',
    bothCompatLink1: 'liste des alternatives directes',
    bothCompatMid: ' et notre ',
    bothCompatLink2: 'comparatif des limites',
    bothCompatEnd:
      ' pour le tableau complet. Vous pouvez aussi utiliser les deux avec un mécanisme de repli, pour qu’une limite atteinte n’arrête jamais votre application.',
    detailsTitle: 'Détails complets du fournisseur',
    detailsItem: name => `API LLM gratuite ${name} — modèles, limites et configuration`,
    browseAll: 'Parcourir tous les fournisseurs d’API LLM gratuites',
  },
  modelsIndex: {
    title: (m, p) =>
      `Modèles LLM gratuits — Parcourez ${m} modèles de ${p} fournisseurs | freellm.site`,
    description: (m, p) =>
      `Parcourez ${m} modèles LLM gratuits chez ${p} fournisseurs d’API LLM gratuites. Comparez les modèles open source et propriétaires par fournisseur et modalité.`,
    h1: 'Modèles LLM gratuits',
    lede: (m, p) => `${m} modèles chez ${p} fournisseurs`,
    allProviders: 'Tous les fournisseurs',
    allModalities: 'Toutes les modalités',
    modelId: 'ID du modèle',
    context: 'Contexte',
    modalities: 'Modalités',
  },
};

export default fr;
