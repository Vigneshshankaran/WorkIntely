import { useEffect } from 'react';

/* Per-page head management for a client-side-only React app. No SSR, so this
   runs after mount — fine for Google (it executes JS) but worth knowing: any
   crawler or answer engine that reads only the raw HTML response won't see
   these tags. That gap is closed by adding static prerendering later, not by
   anything this component can do at runtime. */

export const SITE_NAME = 'WorkIntel';
export const SITE_URL = 'https://www.workintel.ai';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;
export const DEFAULT_DESCRIPTION =
  'WorkIntel is the AI-powered talent management platform that unifies hiring, people data, learning, and performance into one intelligent system.';

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * @param {string} title - Page title, shown as "{title} | WorkIntel". Omit for the site default.
 * @param {string} description
 * @param {string} path - Route path starting with "/", used to build the canonical + og:url.
 * @param {string} [image] - Absolute URL for social previews; falls back to the site default.
 * @param {boolean} [noindex] - Set true for thin/placeholder/utility pages that shouldn't be indexed.
 * @param {object|object[]} [jsonLd] - One or more JSON-LD objects to inject as <script> tags.
 */
export default function Seo({ title, description, path = '/', image, noindex = false, jsonLd }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — AI-Powered Talent Management`;
    const desc = description || DEFAULT_DESCRIPTION;
    const url = `${SITE_URL}${path}`;
    const ogImage = image || DEFAULT_OG_IMAGE;

    document.title = fullTitle;

    upsertMeta('name', 'description', desc);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', desc);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', desc);
    upsertMeta('name', 'twitter:image', ogImage);

    upsertLink('canonical', url);

    let robotsEl = document.head.querySelector('meta[name="robots"]');
    if (noindex) {
      if (!robotsEl) {
        robotsEl = document.createElement('meta');
        robotsEl.setAttribute('name', 'robots');
        document.head.appendChild(robotsEl);
      }
      robotsEl.setAttribute('content', 'noindex, nofollow');
    } else if (robotsEl) {
      robotsEl.remove();
    }

    /* Scoped to "page" so this never touches the sitewide Organization/WebSite
       schema that SiteJsonLd owns — otherwise whichever effect runs last would
       wipe out the other's tags. */
    document.querySelectorAll('script[data-seo-jsonld="page"]').forEach((s) => s.remove());
    const items = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
    items.forEach((obj) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', 'page');
      script.textContent = JSON.stringify(obj);
      document.head.appendChild(script);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, image, noindex, JSON.stringify(jsonLd)]);

  return null;
}
