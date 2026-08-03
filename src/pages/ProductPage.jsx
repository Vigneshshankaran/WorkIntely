import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { productPages } from '../data/productPages';
import './ProductPage.css';

/* Title arrays mix plain strings with {accent} segments — see productPages.js. */
function Title({ parts }) {
  return parts.map((part, idx) =>
    typeof part === 'string'
      ? <React.Fragment key={idx}>{part}</React.Fragment>
      : <span key={idx} className="gradient-text">{part.accent}</span>
  );
}

export default function ProductPage({ productId }) {
  const product = productPages[productId];

  if (!product) return null;

  const { platform, audiences, capabilities, process } = product;

  /* No card is highlighted by default — the purple "featured" look is a hover
     effect. Clicking a quicklink under the hero image scrolls to its card and
     flashes that same highlight briefly so the destination is obvious. */
  const [highlightedId, setHighlightedId] = useState(null);
  const cardRefs = useRef({});
  const highlightTimeoutRef = useRef(null);

  useEffect(() => () => window.clearTimeout(highlightTimeoutRef.current), []);

  const jumpToCapability = (id) => {
    cardRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setHighlightedId(id);
    window.clearTimeout(highlightTimeoutRef.current);
    highlightTimeoutRef.current = window.setTimeout(() => setHighlightedId(null), 1600);
  };

  return (
    <div className="wt-page">

      {/* Section: Personalised for every user */}
      <section className="wt-platform-section section-1440">
        <div className="container wt-platform-grid">

          <div className="wt-platform-visual">
            <img src={platform.image} alt={platform.imageAlt} />

            <ul className="wt-capability-quicklinks">
              {capabilities.map(({ id, title }) => (
                <li key={id}>
                  <button
                    type="button"
                    className="wt-capability-quicklink"
                    onClick={() => jumpToCapability(id)}
                  >
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="wt-platform-content">
            <span className="eyebrow wt-eyebrow">{product.eyebrow}</span>
            <h1 className="wt-platform-title">
              <Title parts={platform.title} />
            </h1>
            <p className="wt-platform-desc">{platform.description}</p>

            <ul className="wt-audience-list">
              {audiences.map(({ id, icon: Icon, title, description }) => (
                <li key={id} className="wt-audience-item">
                  <div className="wt-audience-icon"><Icon size={20} /></div>
                  <div className="wt-audience-copy">
                    <h3 className="wt-audience-title">{title}</h3>
                    <p className="wt-audience-desc">{description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="btn btn-primary wt-cta-btn">
              <span>Book Your Demo</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* Section: Capabilities */}
      <section className="wt-capabilities-section section-light section-1440">
        <div className="container">

          <div className="wt-capabilities-grid">
            {capabilities.map(({ id, icon: Icon, title, description }) => (
              <article
                key={id}
                ref={(el) => { cardRefs.current[id] = el; }}
                className={`wt-capability-card ${id === highlightedId ? 'featured' : ''}`}
              >
                <div className="wt-capability-icon"><Icon size={20} /></div>
                <h3 className="wt-capability-title">{title}</h3>
                <p className="wt-capability-desc">{description}</p>
              </article>
            ))}
          </div>

          <p className="wt-capabilities-footnote">
            Let&apos;s make your process faster -{' '}
            <Link to="/contact" className="wt-footnote-link">Get In Touch Today!</Link>
          </p>

        </div>
      </section>

      {/* Section: Proven process */}
      <section className="wt-process-section section-1440">
        <div className="container wt-process-grid">

          <div className="wt-process-intro">
            <h2 className="wt-process-title">
              <Title parts={process.title} />
            </h2>
            <p className="wt-process-desc">{process.description}</p>
            <Link to="/contact" className="btn btn-primary wt-cta-btn">
              <span>Book Your Demo</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <ol className="wt-steps-list">
            {process.steps.map((step) => (
              <li key={step.id} className="wt-step-card">
                <span className="wt-step-badge">STEP {step.id}</span>
                <h3 className="wt-step-title">{step.title}</h3>
                <p className="wt-step-desc">{step.description}</p>
              </li>
            ))}
          </ol>

        </div>
      </section>

    </div>
  );
}
