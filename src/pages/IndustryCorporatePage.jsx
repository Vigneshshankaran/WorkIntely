import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
} from '../data/industryCorporateContent';
import './IndustryCorporatePage.css';

gsap.registerPlugin(ScrollTrigger);

function Title({ parts }) {
  return parts.map((part, idx) =>
    typeof part === 'string'
      ? <React.Fragment key={idx}>{part}</React.Fragment>
      : <span key={idx} className="gradient-text-corp">{part.accent}</span>
  );
}

export default function IndustryCorporatePage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.timeline({ defaults: { ease: 'power3.out' } })
          .fromTo('.corp-hero-copy > *',
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.09 });

        ['.corp-need-card', '.corp-metric-card', '.corp-feature-card', '.corp-choose-point']
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
    <div className="corp-page" ref={pageRef}>

      {/* Hero — coded from banner-corporate-companies.svg (its own navy→
          indigo→violet wash, purple glow, and a lifecycle-loop motif), built
          as real markup rather than an embedded image. */}
      <section className="corp-hero">
        <div className="corp-hero-glow" aria-hidden="true" />
        <div className="corp-hero-motif" aria-hidden="true">
          <div className="corp-motif-ring corp-motif-ring--large">
            <span className="corp-motif-dot corp-motif-dot--blue" />
            <span className="corp-motif-dot corp-motif-dot--green" />
            <span className="corp-motif-dot corp-motif-dot--violet" />
            <span className="corp-motif-dot corp-motif-dot--orange" />
          </div>
          <div className="corp-motif-ring corp-motif-ring--small" />
        </div>

        <div className="container">
          <div className="corp-hero-copy">
            <span className="corp-hero-eyebrow">{hero.eyebrow}</span>
            <h1 className="corp-hero-title">
              <Title parts={hero.title} />
            </h1>
            <p className="corp-hero-desc">{hero.description}</p>
            <Link to="/contact" className="corp-hero-cta">
              <span>{hero.cta}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="corp-intro section-1440">
        <div className="container corp-intro-grid">
          <h2 className="corp-section-title">{intro.title}</h2>
          <div className="corp-intro-copy">
            {intro.paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      {/* One Intelligent Lifecycle, Not Four Disconnected Tools */}
      <section className="corp-needs section-light section-1440">
        <div className="container">
          <div className="corp-section-head">
            <span className="eyebrow corp-eyebrow">{twoNeeds.eyebrow}</span>
            <h2 className="corp-section-title">{twoNeeds.title}</h2>
          </div>

          <div className="corp-needs-grid">
            {twoNeeds.items.map(({ id, icon: Icon, title, description }) => (
              <article key={id} className="corp-need-card">
                <div className="corp-need-icon"><Icon size={20} /></div>
                <h3 className="corp-need-title">{title}</h3>
                <p className="corp-need-desc">{description}</p>
              </article>
            ))}
          </div>

          <p className="corp-needs-closing">{twoNeeds.closing}</p>
        </div>
      </section>

      {/* Key parameters */}
      <section className="corp-metrics section-1440">
        <div className="container">
          <div className="corp-section-head">
            <span className="eyebrow corp-eyebrow">{metrics.eyebrow}</span>
            <h2 className="corp-section-title">{metrics.title}</h2>
          </div>

          <div className="corp-metrics-grid">
            {metrics.items.map(({ id, icon: Icon, title, description }) => (
              <article key={id} className="corp-metric-card">
                <Icon size={18} className="corp-metric-icon" />
                <h3 className="corp-metric-title">{title}</h3>
                <p className="corp-metric-desc">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Built for every stage of the employee lifecycle */}
      <section className="corp-features section-light section-1440">
        <div className="container">
          <div className="corp-section-head">
            <span className="eyebrow corp-eyebrow">{features.eyebrow}</span>
          </div>

          <div className="corp-features-grid">
            {features.items.map(({ id, icon: Icon, product, title, lead, points }) => {
              const meta = productMeta[product];
              const ProductIcon = meta.icon;
              return (
                <article key={id} className="corp-feature-card">
                  <div className="corp-feature-head">
                    <span className="corp-feature-index">{id}</span>
                    <div className="corp-feature-icon"><Icon size={20} /></div>
                    <Link to={meta.to} className="corp-feature-tag">
                      <ProductIcon size={13} />
                      <span>{product}</span>
                    </Link>
                  </div>

                  <h3 className="corp-feature-title">{title}</h3>
                  <p className="corp-feature-lead">{lead}</p>

                  <ul className="corp-feature-points">
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

      {/* Why corporate teams choose WorkIntel */}
      <section className="corp-choose section-1440">
        <div className="container">
          <div className="corp-section-head">
            <span className="eyebrow corp-eyebrow">{whyChoose.eyebrow}</span>
            <p className="corp-choose-intro">{whyChoose.intro}</p>
          </div>

          <div className="corp-choose-grid">
            {whyChoose.points.map(({ id, icon: Icon, title, description }) => (
              <div key={id} className="corp-choose-point">
                <div className="corp-choose-icon"><Icon size={18} /></div>
                <div>
                  <h3 className="corp-choose-title">{title}</h3>
                  <p className="corp-choose-desc">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="corp-roadmap-note">{whyChoose.roadmapNote}</p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="corp-cta section-1440">
        <div className="container">
          <div className="corp-cta-inner section-dark">
            <h2 className="corp-cta-title">{closingCta.title}</h2>
            <p className="corp-cta-desc">{closingCta.description}</p>
            <Link to="/contact" className="btn btn-primary corp-cta-btn">
              <span>{closingCta.cta}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
