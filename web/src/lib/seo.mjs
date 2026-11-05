// Shared SEO facts about the dataset, used by both page templates and astro.config.mjs.
// Kept in one place so the noindex rule and the sitemap filter can never disagree.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const read = (name) =>
  JSON.parse(readFileSync(fileURLToPath(new URL(`../../../data/${name}.json`, import.meta.url)), 'utf8'));

const providers = read('providers');
const models = read('models');
const posts = read('blog');
const imageApis = read('image_apis');

/**
 * A provider page only earns an index slot once we can list at least one free model on it.
 * Without that the page is a base URL plus a boilerplate snippet — scaled thin content,
 * and in 11 locales it is 11x the problem. Such pages stay live and crawlable (noindex,
 * follow) so the directory still works; they re-enter the index the moment data lands.
 */
const PROVIDERS_WITH_MODELS = new Set(models.filter(m => !m.deprecated).map(m => m.provider_id));
export const isProviderIndexable = (id) => PROVIDERS_WITH_MODELS.has(id);

/**
 * Posts flagged `noindex: true` in the English dataset (off-topic content kept live for readers).
 * The flag is read from English only and applies to every locale's translation of that slug,
 * so the robots tag (posts.ts re-exports this) and the sitemap filter share one source.
 */
const NOINDEX_POSTS = new Set(posts.filter(p => p.noindex).map(p => p.slug));
export const isPostIndexable = (slug) => !NOINDEX_POSTS.has(slug);

/** Most recent verification date across the dataset — the freshness floor for hub pages. */
const latest = (dates) => dates.filter(Boolean).sort().at(-1);
export const DATA_LAST_VERIFIED = latest(providers.map(p => p.last_verified));
export const IMAGE_LAST_VERIFIED = latest(imageApis.map(a => a.last_verified));
export const SITE_LAST_MODIFIED = latest([DATA_LAST_VERIFIED, ...posts.map(p => p.lastUpdated || p.date)]);

const PROVIDER_VERIFIED = Object.fromEntries(providers.map(p => [p.id, p.last_verified]));
const POST_UPDATED = Object.fromEntries(posts.map(p => [p.slug, p.lastUpdated || p.date]));

/** lastmod for a URL path, derived from the data that actually renders it. */
export function lastmodFor(pathname) {
  const path = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '') || '/';
  const provider = path.match(/^\/providers\/([^/]+)\//);
  if (provider) return PROVIDER_VERIFIED[provider[1]] ?? DATA_LAST_VERIFIED;
  const post = path.match(/^\/blog\/([^/]+)\//);
  if (post) return POST_UPDATED[post[1]] ?? SITE_LAST_MODIFIED;
  if (path === '/free-image-generation-apis/') return IMAGE_LAST_VERIFIED;
  if (path.startsWith('/compare/') || path === '/models/' || path === '/' || path === '/state-of-free-llm-apis/') return DATA_LAST_VERIFIED;
  return SITE_LAST_MODIFIED;
}

/** Sitemap membership: everything we ask Google to index, and nothing we do not. */
export function shouldBeInSitemap(url) {
  const path = new URL(url).pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '') || '/';
  const provider = path.match(/^\/providers\/([^/]+)\//);
  if (provider) return isProviderIndexable(provider[1]);
  const post = path.match(/^\/blog\/([^/]+)\/$/);
  if (post) return isPostIndexable(post[1]);
  return true;
}
