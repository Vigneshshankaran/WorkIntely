import { useEffect } from 'react';
import { organizationJsonLd, websiteJsonLd } from '../data/structuredData';

/* Mounted once in App.jsx, outside <Routes>, so it never remounts on
   navigation. Tags its scripts data-seo-jsonld="site" — a distinct scope
   from Seo.jsx's "page" scope, so the two never clear each other's tags. */
export default function SiteJsonLd() {
  useEffect(() => {
    const items = [organizationJsonLd, websiteJsonLd];
    const scripts = items.map((obj) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', 'site');
      script.textContent = JSON.stringify(obj);
      document.head.appendChild(script);
      return script;
    });

    return () => scripts.forEach((s) => s.remove());
  }, []);

  return null;
}
