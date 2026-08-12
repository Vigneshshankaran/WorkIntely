import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import './ComingSoonPage.css';

/* Placeholder pages shouldn't be indexed — there's no real content here yet
   for a crawler to rank, and once real content lands the page moves off this
   component entirely. */
export default function ComingSoonPage({ title }) {
  return (
    <section className="coming-soon-page section-1440">
      <Seo title={title} description="This page is under development and will be available soon." noindex />
      <div className="container">
        <div className="cs-minimal-wrap">
          <span className="cs-tag">COMING SOON</span>
          <h1 className="cs-minimal-title">{title}</h1>
          <p className="cs-minimal-sub">This page is under development and will be available soon.</p>
          <div className="cs-minimal-actions">
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
