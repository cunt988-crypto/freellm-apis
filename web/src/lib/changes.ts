// Change history from data/changes.json (built by scripts/track_changes.py from git history).
import changes from '../../../data/changes.json';

export type Change = (typeof changes)[number];
export { changes };

const PROVIDER_KINDS = ['added', 'removed', 'changed'];

/**
 * One update's changes, shaped for display: provider-level lines in full, model churn rolled up
 * per provider ("12 free models now listed, 4 no longer listed") so a bulk import doesn't flood the page.
 */
export function rollUp(day: Change[]) {
  const roll = new Map<string, { id: string; name: string; added: number; removed: number; limits: number }>();
  for (const c of day.filter(c => !PROVIDER_KINDS.includes(c.kind))) {
    const r = roll.get(c.provider_id) ?? { id: c.provider_id, name: c.provider, added: 0, removed: 0, limits: 0 };
    c.kind === 'model_added' ? r.added++ : c.kind === 'model_removed' ? r.removed++ : r.limits++;
    roll.set(c.provider_id, r);
  }
  const plural = (n: number, s: string) => `${n} ${s}${n > 1 ? 's' : ''}`;
  const modelRolls = [...roll.values()]
    .sort((a, b) => b.added + b.removed + b.limits - (a.added + a.removed + a.limits))
    .map(r => ({
      ...r,
      detail: [r.added && `${plural(r.added, 'free model')} now listed`, r.removed && `${r.removed} no longer listed`, r.limits && plural(r.limits, 'limit change')]
        .filter(Boolean).join(', '),
    }));
  return { providers: day.filter(c => PROVIDER_KINDS.includes(c.kind)), modelRolls };
}

/** Updates (newest first) as { date, providers, modelRolls }, optionally for one provider. */
export function updates(providerId?: string, limit = Infinity) {
  const list = providerId ? changes.filter(c => c.provider_id === providerId) : changes;
  return [...new Set(list.map(c => c.date))].slice(0, limit).map(date => ({ date, ...rollUp(list.filter(c => c.date === date)) }));
}
