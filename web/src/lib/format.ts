// Small display helpers shared by the directory pages.

/** 131072 -> "131K", 1048576 -> "1M". Zero/unknown -> "—". */
export const fmtCtx = (c?: number | null) =>
  !c ? '—' : c >= 1_000_000 ? `${Math.round(c / 1_000_000)}M` : `${Math.round(c / 1_000)}K`;

/** Badge variant for each credit_card_required value. */
export const CARD_VARIANT = { no: 'success', registration: 'info', phone: 'warning', yes: 'danger' } as const;

/** Curated compare pairs (quality gate: no N×N thin pages). Order = URL order. */
export const COMPARE_PAIRS: [string, string][] = [
  ['groq', 'google_gemini'], ['groq', 'cerebras'], ['groq', 'sambanova'],
  ['cerebras', 'sambanova'], ['mistral', 'groq'], ['google_gemini', 'mistral'],
  ['openrouter', 'groq'], ['cohere', 'mistral'],
];

/**
 * Keep titles <= 70 chars (audit "too long" threshold). Always keep *some* brand suffix so
 * <title> never equals the h1 (audits flag that): full suffix, then short, then none.
 */
export const SUFFIX = ' | freellm.site';
const SHORT_SUFFIX = ' | FreeLLM';
const MAX_TITLE = 70;
export const seoTitle = (title: string) => {
  if (title.length <= MAX_TITLE || !title.endsWith(SUFFIX)) return title;
  const base = title.slice(0, -SUFFIX.length);
  return base.length + SHORT_SUFFIX.length <= MAX_TITLE ? base + SHORT_SUFFIX : base;
};
