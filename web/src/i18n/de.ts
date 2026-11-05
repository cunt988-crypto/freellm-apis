import type { Strings } from './en';

const de: Strings = {
  nav: { models: 'Modelle', imageApis: 'Bild-APIs', blog: 'Blog', about: 'Über uns', github: 'GitHub', language: 'Sprache' },
  footer: {
    report: 'Stand der kostenlosen LLM-APIs',
    privacy: 'Datenschutz',
    terms: 'AGB',
    about: 'Über uns',
    contact: 'Kontakt',
    cookies: 'Cookies',
    legalNav: 'Rechtliches und Seitenlinks',
    updated: 'Daten werden regelmäßig aktualisiert',
    contribute: 'Auf GitHub mitwirken',
  },
  common: {
    provider: 'Anbieter',
    models: 'Modelle',
    card: 'Karte?',
    maxContext: 'Max. Kontext',
    lastVerified: 'Zuletzt geprüft',
    sourceLink: name => `${name}-Dokumentation`,
    getKey: 'Key holen',
    getKeyCta: 'Key holen →',
    credits: 'Guthaben',
    expiry: 'Gültigkeit',
    freeTier: 'Gratis-Tarif',
    readMore: 'Weiterlesen →',
    cardLabel: {
      no: 'Keine Karte',
      registration: 'E-Mail-Anmeldung',
      phone: 'Telefonverifizierung',
      yes: 'Karte erforderlich',
    },
  },
  home: {
    title: (p) => `Kostenlose LLM-API — Gratis LLM-API-Keys von ${p} Anbietern | freellm.site`,
    description: (p, m) =>
      `Finde eine kostenlose LLM-API ohne Kreditkarte. ${p} Anbieter, ${m} Modelle — Groq, Gemini, Mistral, OpenRouter. Hol dir deinen gratis LLM-API-Key in Sekunden.`,
    eyebrow: d => `Kostenlos & geprüft · Aktualisiert ${d}`,
    h1a: 'Jede kostenlose LLM-API.',
    h1b: 'An einem Ort.',
    lede: p =>
      `Dauerhaft kostenlose Tarife und Gratis-Guthaben von ${p} Anbietern — kein Suchen, keine Paywalls. Finde deinen Key in Sekunden.`,
    statProviders: 'Anbieter',
    statModels: 'Modelle',
    statAlwaysFree: 'Immer kostenlos',
    quickPick: 'Schnellwahl',
    quickPickMeta: (n, ctx) =>
      `— ${n} Modelle · ${ctx} Kontext · keine Karte nötig · dauerhaft kostenlos`,
    quickPickCta: 'Gratis-Key holen →',
    permanentTitle: 'Dauerhaft kostenlose Tarife',
    creditsTitle: 'Gratis-Guthaben bei Anmeldung',
    seoTitle: 'Jede kostenlose LLM-API in einem Verzeichnis',
    seoP1: (p, m) =>
      `Eine kostenlose LLM-API zu finden, die funktioniert — und das ohne Kreditkarte — sollte keinen halben Nachmittag Tab-Hopping kosten. Dieses Verzeichnis erfasst ${p} Anbieter und ${m} Modelle, von dauerhaft kostenlosen Tarifen bis zu Gratis-Guthaben, damit du dir in Minuten einen gratis LLM-API-Key holst und loslegst. Jede API hier bietet einen `,
    seoP1Link: 'OpenAI-kompatiblen Endpoint',
    seoP1End: ', ein Anbieterwechsel ist also eine Sache von einer Zeile.',
    seoP2:
      'Ob du die günstigste LLM-API für ein Nebenprojekt suchst, die besten Open-Source-LLM-Modelle wie Llama und Mistral oder eine schnelle kostenlose LLM-API zum Programmieren: Die Tabellen oben vergleichen sie nach Modellen, Kontextfenster und Kartenpflicht. Später mehr Volumen nötig? Starte kostenlos und vergleiche dann die Preise der Anbieter. Praxisnahe Anleitungen findest du in unserer ',
    seoP2Link1: 'Übersicht der besten kostenlosen LLM-APIs',
    seoP2Link2: 'besten Open-Source-LLM-APIs',
    seoP2Link3: 'besten kostenlosen LLM-APIs zum Programmieren',
    guidesTitle: 'Anleitungen',
    faqTitle: 'FAQ zu kostenlosen LLM-APIs',
    faqs: p => [
      {
        q: 'Was ist die beste kostenlose LLM-API?',
        a: `Die beste kostenlose LLM-API hängt vom Anwendungsfall ab. Groq ist am schnellsten, Google Gemini bietet kostenlos 1M Token Kontext und OpenRouter bündelt viele kostenlose Modelle hinter einem Key. Alle ${p} hier gelisteten Anbieter bieten eine kostenlose LLM-API ohne Vorabkosten.`,
      },
      {
        q: 'Wie bekomme ich einen kostenlosen LLM-API-Key?',
        a: 'Wähle oben in den Tabellen einen Anbieter, klicke auf „Key holen" und registriere dich in dessen Konsole. Die meisten stellen den gratis LLM-API-Key sofort per E-Mail aus — ohne Kreditkarte. Danach setzt du ihn als API-Key und schickst deine ersten Requests.',
      },
      {
        q: 'Gibt es kostenlose LLM-APIs ohne Kreditkarte?',
        a: 'Ja. Viele Anbieter hier bieten eine kostenlose LLM-API ohne Kreditkarte — erkennbar am Badge „Keine Karte". Groq, Google Gemini, Cloudflare Workers AI und Mistral geben gratis API-Keys ohne jegliche Zahlungsdaten aus.',
      },
      {
        q: 'Was ist die günstigste LLM-API?',
        a: 'Die günstigste LLM-API ist eine kostenlose. Jeder Anbieter auf dieser Seite hat einen Gratis-Tarif oder Gratis-Guthaben, der Einstieg kostet also nichts. Bei hohem Volumen vergleichst du die Bezahlpreise der Anbieter, sobald dein Freikontingent aufgebraucht ist.',
      },
      {
        q: 'Gibt es Open-Source-LLM-APIs?',
        a: 'Ja. Anbieter wie Groq, OpenRouter und Cloudflare Workers AI stellen Open-Source-Modelle wie Llama und Mistral über eine kostenlose LLM-API bereit. Du bekommst die besten offenen Modelle über einen gehosteten, OpenAI-kompatiblen Endpoint, ohne eigene Hardware zu betreiben.',
      },
      {
        q: 'Gibt es Open-Source-LLM-API-Keys kostenlos?',
        a: 'Ja. Du kannst bei jedem Anbieter auf dieser Seite einen kostenlosen API-Key holen und damit Open-Source-LLM-Modelle ansprechen. So bekommst du Keys für offene Modelle ohne Kreditkarte — Groq, OpenRouter und Cloudflare Workers AI liefern Open-Weight-Modelle genau so aus.',
      },
      {
        q: 'Welcher LLM-API-Anbieter ist am günstigsten?',
        a: 'Für kostenlose Nutzung ist jeder Anbieter hier die günstigste LLM-API — der Start kostet nichts. Wenn du kostenpflichtig skalierst, vergleiche die Preise, denn die Token-Raten schwanken je nach Modell und Region stark.',
      },
      {
        q: 'Kann ich unbegrenzt kostenlose LLM-API-Calls machen?',
        a: 'Kostenlose LLM-API-Calls haben Limits pro Minute und pro Tag, sie sind nicht unbegrenzt. Für Prototypen und leichten Produktivbetrieb reichen sie gut aus. Wird es mehr, wechsle den Anbieter oder steige auf einen bezahlten Plan um.',
      },
    ],
  },
  blogIndex: {
    title: 'Blog — Anleitungen & Tutorials für kostenlose LLM-APIs | freellm.site',
    description:
      'Anleitungen, Tutorials und Vergleiche zu kostenlosen LLM-APIs. Lerne, wie du Groq, Gemini, OpenRouter und über 60 kostenlose KI-Anbieter nutzt.',
    h1: 'Blog',
    lede: 'Anleitungen und Tutorials zur Nutzung kostenloser LLM-APIs.',
  },
  post: {
    faqTitle: 'Häufige Fragen',
    relatedTitle: 'Verwandte Anleitungen',
    backToBlog: '← Zurück zum Blog',
    browseCta: 'Kostenlose LLM-APIs ansehen →',
    updated: 'Aktualisiert',
  },
  provider: {
    home: 'Startseite',
    title: name => `${name} kostenlose LLM-API — Limits, Modelle & Einrichtung | freellm.site`,
    description: (notes, baseUrl, n) =>
      `${notes}. Basis-URL: ${baseUrl}. ${n} kostenlose${n !== 1 ? '' : 's'} Modell${n !== 1 ? 'e' : ''} verfügbar.`,
    h1: name => `${name} kostenlose LLM-API`,
    region: {
      global: 'weltweit verfügbarer',
      china: 'in China ansässiger',
      europe: 'in Europa ansässiger',
      india: 'in Indien ansässiger',
      japan: 'in Japan ansässiger',
      korea: 'in Korea ansässiger',
      middle_east: 'im Nahen Osten ansässiger',
      sea: 'in Südostasien ansässiger',
      unknown: 'verfügbarer',
    },
    freeCredits: (usd, expiry) =>
      `${usd} USD Gratis-Guthaben${expiry ? ` (${expiry})` : ''}`,
    freeTierPermanent: 'einen dauerhaft kostenlosen Tarif',
    card: {
      no: 'Zum Start ist keine Kreditkarte erforderlich',
      registration: 'Für die Anmeldung genügt eine E-Mail — keine Kreditkarte',
      phone: 'Die Anmeldung erfordert eine Telefonverifizierung, aber keine Kreditkarte',
      yes: 'Zur Aktivierung des Gratis-Tarifs ist eine Kreditkarte erforderlich',
    },
    ovIntro: (name, region, free) =>
      `${name} ist ein ${region} LLM-API-Anbieter und bietet ${free}.`,
    ovModels: (n, ctx, modalities) =>
      `Du erhältst ${n} kostenlose${n !== 1 ? '' : 's'} Modell${n !== 1 ? 'e' : ''}${ctx ? ` mit einem Kontextfenster von bis zu ${ctx} Token` : ''}${modalities ? `, unterstützt werden ${modalities}` : ''}.`,
    ovNoModels: 'Die verfügbaren Modelle sind unten aufgeführt.',
    ovRpm: rpm => `Kostenlose Anfragen sind auf rund ${rpm} pro Minute begrenzt.`,
    ovEndpoint: (card, baseUrl, name) =>
      `${card}, und der Endpoint unter ${baseUrl} ist OpenAI-kompatibel. Du kannst bestehenden OpenAI-SDK-Code auf ${name} umstellen, indem du nur Basis-URL und API-Key änderst.`,
    baseUrlLabel: 'Basis-URL',
    cardRequiredLabel: 'Karte erforderlich',
    freeCreditsLabel: 'Gratis-Guthaben',
    notesLabel: 'Hinweise',
    getKeyCta: 'Kostenlosen API-Key holen →',
    freeModelsTitle: 'Kostenlose Modelle',
    quickStartTitle: 'Schnellstart',
    relatedTitle: 'Ähnliche Anbieter kostenloser LLM-APIs',
    relatedItem: (name, n) =>
      `${name} kostenlose LLM-API — ${n} kostenlose${n !== 1 ? '' : 's'} Modell${n !== 1 ? 'e' : ''}`,
    compareTitle: name => `${name} vergleichen`,
    compareItem: (a, b) => `${a} vs. ${b} — Gratis-Tarife im Vergleich`,
    guidesTitle: 'Anleitungen',
    copied: 'Kopiert!',
  },
  about: {
    title: 'Über freellm.site — Verzeichnis kostenloser LLM-APIs',
    description:
      'Erfahre mehr über freellm.site — ein offenes, von der Community gepflegtes Verzeichnis kostenloser LLM-API-Anbieter, Modelle und Einrichtungsanleitungen.',
    h1: 'Über freellm.site',
    lead: 'freellm.site ist ein freies, offenes Verzeichnis, das Entwicklern hilft, LLM-API-Anbieter mit dauerhaft kostenlosen Tarifen und Startguthaben zu finden — ohne Dutzende Websites durchsuchen zu müssen.',
    whatTitle: 'Was wir tun',
    what: (p, m) =>
      `Wir erfassen ${p} Anbieter und ${m} Modelle samt Rate Limits, Kontextfenstern, Kreditkartenpflicht und Anmeldelinks. Jeder Anbieter hat eine eigene Seite mit Modelltabellen und Code-Snippets zum Kopieren, damit du in Minuten startest.`,
    sourceTitle: 'Woher die Daten stammen',
    sourceLead: 'Die Anbieterinformationen werden im Open-Source-Repository ',
    sourceLeadEnd: ' auf GitHub gepflegt. Die Daten umfassen:',
    sourceItems: [
      'Basis-URLs, Anmeldelinks und Art des Gratis-Tarifs je Anbieter',
      'Modell-IDs, Kontextfenster, Modalitäten und Rate Limits',
      'Datum der letzten Prüfung für jeden Anbietereintrag',
    ],
    sourceNote:
      'Einträge werden manuell geprüft und regelmäßig aktualisiert. Da sich Anbieterbedingungen ändern, solltest du Details vor dem Produktiveinsatz immer auf der Website des Anbieters bestätigen.',
    whoTitle: 'Wer die Seite betreibt',
    whoA: 'freellm.site wird von ',
    whoB: ' im Rahmen des Open-Source-Projekts freellm-apis betreut. Die Nutzung ist kostenlos und jeder kann zu den Daten beitragen.',
    ossTitle: 'Open Source',
    ossA: 'Sowohl die Daten als auch der Website-Code sind öffentlich. Du kannst veraltete Angaben melden, neue Anbieter vorschlagen oder Korrekturen einreichen — über ',
    ossLink: 'GitHub Issues',
    ossB: ' oder Pull Requests.',
    contactTitle: 'Kontakt',
    contactA: 'Eine Frage, eine Korrektur oder ein Anbieter, der fehlt? Besuche unsere ',
    contactLink: 'Kontaktseite',
    contactB: '.',
  },
  compare: {
    title: (a, b) => `${a} vs. ${b}: Vergleich kostenloser LLM-APIs (2026)`,
    description: (a, b) =>
      `${a} vs. ${b} im Gratis-Tarif-Vergleich — Kreditkarte, Modelle, Kontextfenster und Rate Limits. Finde heraus, welche kostenlose LLM-API zu deinem Projekt passt.`,
    h1: (a, b) => `${a} vs. ${b}: Vergleich kostenloser LLM-APIs`,
    crumb: (a, b) => `${a} vs. ${b}`,
    introA: 'Wir vergleichen die Gratis-Tarife von ',
    introAnd: ' und ',
    introEnd:
      ' anhand der Punkte, die wirklich entscheiden: Kreditkartenpflicht, kostenlose Modelle, Kontextfenster und Rate Limits. Alle Angaben stammen geprüft aus der Konsole des jeweiligen Anbieters.',
    glanceTitle: (a, b) => `${a} vs. ${b} auf einen Blick`,
    rows: {
      card: 'Kreditkarte',
      freeType: 'Art des Gratis-Tarifs',
      permanent: 'Dauerhaft',
      credits: 'Gratis-Guthaben',
      freeModels: 'Kostenlose Modelle',
      maxContext: 'Max. Kontext',
      maxRpm: 'Max. RPM (gratis)',
      seePage: 'Siehe Seite',
      baseUrl: 'Basis-URL',
    },
    pickTitle: 'Welchen solltest du wählen?',
    verdictCard: (winner, loser, loserCard) =>
      `${winner} ist einfacher zu starten — ohne Kreditkarte, während bei ${loser} gilt: ${loserCard}.`,
    verdictCtx: (winner, win, lose) =>
      `${winner} gewinnt beim Kontext und verarbeitet bis zu ${win} Token gegenüber ${lose}.`,
    verdictTie: (a, b) =>
      `${a} und ${b} liegen im Gratis-Tarif dicht beieinander — entscheide nach Antwortgeschwindigkeit und den Modellen, die du brauchst.`,
    bothCompatA:
      'Beide sind OpenAI-kompatibel, ein Test kostet also nur eine Zeile. Sieh dir die ',
    bothCompatLink1: 'Drop-in-Liste',
    bothCompatMid: ' und unseren ',
    bothCompatLink2: 'Rate-Limit-Vergleich',
    bothCompatEnd:
      ' für das vollständige Bild an. Du kannst auch beide mit einem Fallback betreiben, damit ein Limit bei einem Anbieter deine App nie stoppt.',
    detailsTitle: 'Vollständige Anbieterdetails',
    detailsItem: name => `${name} kostenlose LLM-API — Modelle, Limits & Einrichtung`,
    browseAll: 'Alle Anbieter kostenloser LLM-APIs ansehen',
  },
  modelsIndex: {
    title: (m, p) =>
      `Kostenlose LLM-Modelle — ${m} Modelle von ${p} Anbietern durchsuchen | freellm.site`,
    description: (m, p) =>
      `Durchsuche ${m} kostenlose LLM-Modelle von ${p} Anbietern kostenloser LLM-APIs. Vergleiche offene und proprietäre Modelle nach Anbieter und Modalität.`,
    h1: 'Kostenlose LLM-Modelle',
    lede: (m, p) => `${m} Modelle von ${p} Anbietern`,
    allProviders: 'Alle Anbieter',
    allModalities: 'Alle Modalitäten',
    modelId: 'Modell-ID',
    context: 'Kontext',
    modalities: 'Modalitäten',
  },
};

export default de;
