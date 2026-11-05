// Run: node src/lib/seo.test.mjs
import assert from 'node:assert/strict';
import { isProviderIndexable, lastmodFor, shouldBeInSitemap, DATA_LAST_VERIFIED } from './seo.mjs';

const U = (p) => `https://www.freellm.site${p}`;

// A provider is indexable exactly when we can list a free model for it.
assert.equal(isProviderIndexable('groq'), true);
assert.equal(isProviderIndexable('ai71'), false);

// The sitemap and the noindex tag must agree, in every locale.
for (const loc of ['', '/ar', '/zh', '/pt']) {
  assert.equal(shouldBeInSitemap(U(`${loc}/providers/groq/`)), true, loc);
  assert.equal(shouldBeInSitemap(U(`${loc}/providers/ai71/`)), false, loc);
  assert.equal(shouldBeInSitemap(U(`${loc}/`)), true, loc);
  assert.equal(shouldBeInSitemap(U(`${loc}/models/`)), true, loc);
}

// Off-topic posts are noindexed by the English post's flag, in every locale.
for (const loc of ['', '/de', '/hi']) {
  assert.equal(shouldBeInSitemap(U(`${loc}/blog/antonelli-russell-career-wins-head-to-head/`)), false, loc);
  assert.equal(shouldBeInSitemap(U(`${loc}/blog/best-free-llm-apis-2026/`)), true, loc);
}

// lastmod tracks the data, not the build, and survives the locale prefix.
assert.equal(lastmodFor('/providers/groq/'), lastmodFor('/ar/providers/groq/'));
assert.equal(lastmodFor('/models/'), DATA_LAST_VERIFIED);
assert.equal(lastmodFor('/state-of-free-llm-apis/'), DATA_LAST_VERIFIED);
assert.match(lastmodFor('/blog/free-llm-api-rate-limits-compared/'), /^\d{4}-\d{2}-\d{2}$/);
// A two-letter path segment that is not a locale must not be eaten as one.
assert.equal(lastmodFor('/providers/xa/'), lastmodFor('/providers/unknown-provider/'));

console.log('seo.mjs: all checks passed');
