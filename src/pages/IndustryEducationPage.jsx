import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  hero,
  intro,
  twoNeeds,
  metrics,
  features,
  productMeta,
  whyChoose,
  closingCta
} from '../data/industryEducationContent';
import Seo from '../components/Seo';
import './IndustryEducationPage.css';

gsap.registerPlugin(ScrollTrigger);

function Title({ parts }) {
  return parts.map((part, idx) =>
    typeof part === 'string'
      ? <React.Fragment key={idx}>{part}</React.Fragment>
      : <span key={idx} className="gradient-text-edu">{part.accent}</span>
  );
}

export default function IndustryEducationPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.timeline({ defaults: { ease: 'power3.out' } })
          .fromTo('.edu-hero-copy > *',
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.09 });

        ['.edu-need-card', '.edu-metric-card', '.edu-feature-card', '.edu-choose-point']
          .forEach((selector) => {
            gsap.fromTo(selector,
              { y: 20, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.06,
                ease: 'power3.out',
                scrollTrigger: { trigger: selector, start: 'top 90%' }
              }
            );
          });
      }, pageRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="edu-page" ref={pageRef}>

      {/* Hero — coded from the banner-educational-institutes.svg reference:
          same diagonal navy→teal→green wash, purple glow, and a checkmark
          motif, built as real markup rather than an embedded image. */}
      <Seo
        title="WorkIntel for Educational Institutes"
        description={hero.description}
        path="/Institution"
      />

      <section className="edu-hero">
        <div className="edu-hero-glow" aria-hidden="true" />
        <div className="edu-hero-motif" aria-hidden="true">
          <div className="edu-motif-card">
            <ClipboardCheck size={20} />
            <span className="edu-motif-line" />
            <span className="edu-motif-line short" />
          </div>
          <div className="edu-motif-ring" />
        </div>

        <div className="container">
          <div className="edu-hero-copy">
            <span className="edu-hero-eyebrow">{hero.eyebrow}</span>
            <h1 className="edu-hero-title">
              <Title parts={hero.title} />
            </h1>
            <p className="edu-hero-desc">{hero.description}</p>
            <Link to="/contact" className="edu-hero-cta">
              <span>{hero.cta}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="edu-intro section-1440">
        <div className="container edu-intro-grid">
          <h2 className="edu-section-title">{intro.title}</h2>
          <div className="edu-intro-copy">
            {intro.paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      {/* One Platform, Two Real Needs */}
      <section className="edu-needs section-light section-1440">
        <div className="container">
          <div className="edu-section-head">
            <span className="eyebrow edu-eyebrow">{twoNeeds.eyebrow}</span>
            <h2 className="edu-section-title">{twoNeeds.title}</h2>
          </div>

          <div className="edu-needs-grid">
            {twoNeeds.items.map(({ id, icon: Icon, title, description }) => (
              <article key={id} className="edu-need-card">
                <div className="edu-need-icon"><Icon size={20} /></div>
                <h3 className="edu-need-title">{title}</h3>
                <p className="edu-need-desc">{description}</p>
              </article>
            ))}
          </div>

          <p className="edu-needs-closing">{twoNeeds.closing}</p>
        </div>
      </section>

      {/* Key parameters */}
      <section className="edu-metrics section-1440">
        <div className="container">
          <div className="edu-section-head">
            <span className="eyebrow edu-eyebrow">{metrics.eyebrow}</span>
            <h2 className="edu-section-title">{metrics.title}</h2>
          </div>

          <div className="edu-metrics-grid">
            {metrics.items.map(({ id, icon: Icon, title, description }) => (
              <article key={id} className="edu-metric-card">
                <Icon size={18} className="edu-metric-icon" />
                <h3 className="edu-metric-title">{title}</h3>
                <p className="edu-metric-desc">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Built for every part of running an institute */}
      <section className="edu-features section-light section-1440">
        <div className="container">
          <div className="edu-section-head">
            <span className="eyebrow edu-eyebrow">{features.eyebrow}</span>
          </div>

          <div className="edu-features-grid">
            {features.items.map(({ id, icon: Icon, product, title, lead, points }) => {
              const meta = productMeta[product];
              const ProductIcon = meta.icon;
              return (
                <article key={id} className="edu-feature-card">
                  <div className="edu-feature-head">
                    <span className="edu-feature-index">{id}</span>
                    <div className="edu-feature-icon"><Icon size={20} /></div>
                    <Link to={meta.to} className="edu-feature-tag">
                      <ProductIcon size={13} />
                      <span>{product}</span>
                    </Link>
                  </div>

                  <h3 className="edu-feature-title">{title}</h3>
                  <p className="edu-feature-lead">{lead}</p>

                  <ul className="edu-feature-points">
                    {points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why institutes choose WorkIntel */}
      <section className="edu-choose section-1440">
        <div className="container">
          <div className="edu-section-head">
            <span className="eyebrow edu-eyebrow">{whyChoose.eyebrow}</span>
            <p className="edu-choose-intro">{whyChoose.intro}</p>
          </div>

          <div className="edu-choose-grid">
            {whyChoose.points.map(({ id, icon: Icon, title, description }) => (
              <div key={id} className="edu-choose-point">
                <div className="edu-choose-icon"><Icon size={18} /></div>
                <div>
                  <h3 className="edu-choose-title">{title}</h3>
                  <p className="edu-choose-desc">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="edu-roadmap-note">{whyChoose.roadmapNote}</p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="edu-cta section-1440">
        <div className="container">
          <div className="edu-cta-inner section-dark">
            <h2 className="edu-cta-title">{closingCta.title}</h2>
            <p className="edu-cta-desc">{closingCta.description}</p>
            <Link to="/contact" className="btn btn-primary edu-cta-btn">
              <span>{closingCta.cta}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
