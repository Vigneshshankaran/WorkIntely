/* JSON-LD factories. Kept separate from Seo.jsx so each page only builds the
   schema types it actually needs. */

import { SITE_URL, SITE_NAME } from '../components/Seo';

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/wi%20Logo%20(1).png`,
  email: 'connect@workintel.ai',
  sameAs: []
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL
};

/* One entry per real product route. Feeds SoftwareApplication schema on each
   product page. */
export function softwareApplicationJsonLd({ name, description, path, category = 'BusinessApplication' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url: `${SITE_URL}${path}`,
    applicationCategory: category,
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/pricing`
    },
    brand: {
      '@type': 'Brand',
      name: SITE_NAME
    }
  };
}

/* Pricing FAQs feed this directly — this is the single highest-value schema
   on the site for AEO, since answer engines lift FAQPage entries verbatim. */
export function faqPageJsonLd(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer
      }
    }))
  };
}

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, path }, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: `${SITE_URL}${path}`
    }))
  };
}
