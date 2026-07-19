import React from 'react';
import { Link } from 'react-router-dom';
import './ComingSoonPage.css';

export default function ComingSoonPage({ title }) {
  return (
    <section className="coming-soon-page section-1440">
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
