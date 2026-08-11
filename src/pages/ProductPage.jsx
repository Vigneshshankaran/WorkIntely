import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import WiWordmark from '../components/WiWordmark';
import Seo from '../components/Seo';
import { productPages } from '../data/productPages';
import { wiTalentsDetail } from '../data/wiTalentsContent';
import { wiPeopleDetail } from '../data/wiPeopleContent';
import { softwareApplicationJsonLd } from '../data/structuredData';
import './ProductPage.css';

/* Long-form content sits below the hero, for the products that have it. */
const productDetails = {
  WiTalents: wiTalentsDetail,
  WiPeople: wiPeopleDetail
};

/* Hero chips that jump to those sections. */
const JUMP_LINKS = [
  { id: 'product-overview', label: 'Product Overview' },
  { id: 'audience', label: 'Designed For' },
  { id: 'intelligent-features', label: 'Intelligent Features' },
  { id: 'benefits', label: 'Benefits' }
];

const AUTOPLAY_MS = 6000;

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

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [timerNonce, setTimerNonce] = useState(0);
  const slideRef = useRef(null);
  const isFirstRender = useRef(true);

  /* The whole page reads as one deck: the overview, then a slide per
     capability, then the process. */
  const slides = useMemo(() => {
    if (!product) return [];

    return [
      { id: 'overview', kind: 'overview', label: 'Overview' },
      ...product.capabilities.map((capability) => ({
        id: capability.id,
        kind: 'capability',
        label: capability.title,
        capability
      })),
      /* Not every product documents a process flow. */
      ...(product.process ? [{ id: 'process', kind: 'process', label: 'Process' }] : [])
    ];
  }, [product]);

  const slideCount = slides.length;

  const goTo = (index) => {
    setActiveIndex(((index % slideCount) + slideCount) % slideCount);
    /* Restart the countdown so a manual pick isn't cut short by a pending tick. */
    setTimerNonce((n) => n + 1);
  };

  /* Auto-advance, held while the pointer or focus is inside the slider and
     switched off entirely for reduced-motion users. */
  useEffect(() => {
    if (paused || slideCount < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(
      () => setActiveIndex((prev) => (prev + 1) % slideCount),
      AUTOPLAY_MS
    );

    return () => window.clearInterval(timer);
  }, [paused, slideCount, timerNonce]);

  /* Cross-fade on slide change; the first paint is left alone. */
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.wt-slide',
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out', overwrite: true }
      );
    }, slideRef);

    return () => ctx.revert();
  }, [activeIndex]);

  if (!product) return null;

  const { platform, audiences, process } = product;
  const active = slides[activeIndex];
  const detail = productDetails[productId];

  const jumpToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const onKeyDown = (event) => {
    const offset = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
    if (!offset) return;
    event.preventDefault();
    goTo(activeIndex + offset);
  };

  return (
    <div className="wt-page">

      <Seo
        title={product.name}
        description={product.tagline}
        path={`/${productId}`}
        noindex={!!product.isDraft}
        jsonLd={product.isDraft ? undefined : softwareApplicationJsonLd({
          name: product.name,
          description: product.tagline,
          path: `/${productId}`
        })}
      />

      <section className="wt-platform-section section-1440">
        <div className="container wt-platform-grid">

          {/* Left: the product artwork stays put across every slide. The
              carousel below rotates its own heading out of the DOM every
              AUTOPLAY_MS, so the page's one real h1 lives here instead,
              where it's always mounted. */}
          <div className="wt-platform-media">
            <h1 className="wt-platform-name">{product.name}</h1>
            <div className={`wt-platform-visual ${detail?.overlay ? 'has-overlay' : ''}`}>
              <img src={platform.image} alt={platform.imageAlt} />

              {detail?.overlay && (
                <div className="wt-visual-overlay">
                  <span className="wt-visual-title">
                    <WiWordmark className="wt-visual-mark" />
                    {detail.overlay.title}
                  </span>
                  <p className="wt-visual-tagline">{detail.overlay.tagline}</p>
                </div>
              )}
            </div>

            {/* Section chips sit right under the image, not far below the
                whole deck on the right. */}
            {detail && (
              <nav className="wt-jump-nav" aria-label="Jump to a section">
                {JUMP_LINKS.map(({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    className="wt-jump-link"
                    onClick={() => jumpToSection(id)}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            )}
          </div>

          {/* Right: the deck */}
          <div
            className="wt-slider"
            role="region"
            aria-roledescription="carousel"
            aria-label={`${product.name} highlights`}
            tabIndex={0}
            onKeyDown={onKeyDown}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            ref={slideRef}
          >
            <div className="wt-slide-viewport">
              <div
                className="wt-slide"
                role="group"
                aria-roledescription="slide"
                aria-label={`${activeIndex + 1} of ${slideCount}: ${active.label}`}
              >

                {active.kind === 'overview' && (
                  <div className="wt-platform-content">
                    {!detail && <span className="eyebrow wt-eyebrow">{product.eyebrow}</span>}
                    <h2 className="wt-platform-title">
                      <Title parts={platform.title} />
                    </h2>
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
                  </div>
                )}

                {active.kind === 'capability' && (
                  <div className="wt-capability-slide">
                    {!detail && <span className="eyebrow wt-eyebrow">Capability</span>}
                    <div className="wt-capability-icon">
                      <active.capability.icon size={22} />
                    </div>
                    <h2 className="wt-capability-title">{active.capability.title}</h2>
                    <p className="wt-capability-desc">{active.capability.description}</p>
                  </div>
                )}

                {active.kind === 'process' && process && (
                  <div className="wt-process-slide">
                    {!detail && <span className="eyebrow wt-eyebrow">Process</span>}
                    <h2 className="wt-process-title">
                      <Title parts={process.title} />
                    </h2>
                    <p className="wt-process-desc">{process.description}</p>

                    <ol className="wt-steps-list">
                      {process.steps.map((step) => (
                        <li key={step.id} className="wt-step-card">
                          <span className="wt-step-badge">{step.id}</span>
                          <h3 className="wt-step-title">{step.title}</h3>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

              </div>
            </div>

            {/* Controls */}
            <div className="wt-slider-controls">
              <div className="wt-slider-arrows">
                <button
                  type="button"
                  className="wt-slider-arrow"
                  aria-label="Previous slide"
                  onClick={() => goTo(activeIndex - 1)}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  className="wt-slider-arrow"
                  aria-label="Next slide"
                  onClick={() => goTo(activeIndex + 1)}
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="wt-slider-dots">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={`wt-slider-dot ${index === activeIndex ? 'active' : ''}`}
                    aria-label={`Go to ${slide.label}`}
                    aria-current={index === activeIndex}
                    onClick={() => goTo(index)}
                  />
                ))}
              </div>

              <span className="wt-slider-counter">
                {String(activeIndex + 1).padStart(2, '0')}
                <span className="wt-slider-counter-sep">/</span>
                {String(slideCount).padStart(2, '0')}
              </span>
            </div>

            {/* One CTA for the whole deck, sitting below the arrows/dots row */}
            <Link to="/contact" className="btn btn-primary wt-cta-btn">
              <span>Book Your Demo</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {detail && (
        <>
          {/* Product overview */}
          <section className="wt-overview-section section-1440" id="product-overview">
            <div className="container">
              {/* Eyebrow sits above the split so the heading and the copy start
                  on the same line. */}
              <span className="eyebrow wt-eyebrow wt-overview-eyebrow">
                {detail.overview.eyebrow}
              </span>

              <div className="wt-overview-grid">
                <h2 className="wt-section-title">{detail.overview.title}</h2>
                <div className="wt-overview-copy">
                  {detail.overview.paragraphs.map((text) => (
                    <p key={text.slice(0, 24)}>{text}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Who it's for */}
          <section className="wt-roles-section section-light section-1440" id="audience">
            <div className="container">
              <div className="wt-section-head is-center">
                <span className="eyebrow wt-eyebrow">{detail.roles.eyebrow}</span>
                <h2 className="wt-section-title">{detail.roles.title}</h2>
              </div>

              <div className="wt-roles-grid">
                {detail.roles.items.map((role) => (
                  <article key={role.id} className="wt-role-card">
                    <h3 className="wt-role-name">{role.name}</h3>
                    <p className="wt-role-tagline">{role.tagline}</p>
                    <ul className="wt-role-points">
                      {role.points.map((point) => (
                        <li key={point}>
                          <Check size={15} aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* What makes it intelligent */}
          <section className="wt-intelligence-section section-1440" id="intelligent-features">
            <div className="container">
              <div className="wt-section-head is-center">
                <span className="eyebrow wt-eyebrow">{detail.intelligence.eyebrow}</span>
                <h2 className="wt-section-title">{detail.intelligence.title}</h2>
              </div>

              <div className="wt-intel-grid">
                {detail.intelligence.items.map((item) => (
                  <article key={item.id} className="wt-intel-card">
                    <span className="wt-intel-index" aria-hidden="true">{item.id}</span>
                    <h3 className="wt-intel-title">{item.title}</h3>
                    <p className="wt-intel-desc">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Where it saves time */}
          <section className="wt-efficiency-section section-light section-1440" id="benefits">
            <div className="container">
              <div className="wt-section-head is-center">
                <span className="eyebrow wt-eyebrow">{detail.efficiency.eyebrow}</span>
                <h2 className="wt-section-title">{detail.efficiency.title}</h2>
              </div>

              <div className="wt-efficiency-grid">
                {detail.efficiency.items.map((item) => (
                  <article key={item.id} className="wt-efficiency-card">
                    <h3 className="wt-efficiency-title">{item.title}</h3>
                    <p className="wt-efficiency-desc">{item.description}</p>
                  </article>
                ))}
              </div>

              <p className="wt-closing">{detail.closing}</p>
            </div>
          </section>
        </>
      )}

    </div>
  );
}
