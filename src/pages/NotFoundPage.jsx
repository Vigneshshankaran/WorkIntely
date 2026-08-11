import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '../components/Seo';
import './ComingSoonPage.css';

/* Catches every unmatched route. Netlify's SPA rewrite (public/_redirects)
   has to serve index.html with a 200 for any path so client-side routing
   works at all — that makes a true HTTP 404 impossible from a static host
   without an edge function. noindex is the standard mitigation: crawlers
   still get a 200, but are told explicitly not to index this response. */
export default function NotFoundPage() {
  return (
    <section className="coming-soon-page section-1440">
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        noindex
      />
      <div className="container">
        <div className="cs-minimal-wrap">
          <span className="cs-tag">404</span>
          <h1 className="cs-minimal-title">Page Not Found</h1>
          <p className="cs-minimal-sub">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>
          <div className="cs-minimal-actions">
            <Link to="/" className="btn btn-primary">
              <span>Back to Home</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
