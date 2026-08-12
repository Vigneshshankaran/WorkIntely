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
} from '../data/industryStaffingContent';
import Seo from '../components/Seo';
import './IndustryStaffingPage.css';

gsap.registerPlugin(ScrollTrigger);

function Title({ parts }) {
  return parts.map((part, idx) =>
    typeof part === 'string'
      ? <React.Fragment key={idx}>{part}</React.Fragment>
      : <span key={idx} className="gradient-text-staff">{part.accent}</span>
  );
}

export default function IndustryStaffingPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.timeline({ defaults: { ease: 'power3.out' } })
          .fromTo('.staff-hero-copy > *',
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.09 });

        ['.staff-need-card', '.staff-metric-card', '.staff-feature-card', '.staff-choose-point']
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
    <div className="staff-page" ref={pageRef}>

      {/* Hero — coded from banner-staffing-companies.svg (its own navy→
          indigo→blue wash, orange glow, and a pipeline-chain motif), built
          as real markup rather than an embedded image. */}
      <Seo
        title="WorkIntel for Staffing Companies"
        description={hero.description}
        path="/Staffing"
      />

      <section className="staff-hero">
        <div className="staff-hero-glow" aria-hidden="true" />
        <div className="staff-hero-motif" aria-hidden="true">
          <div className="staff-chain">
            <span className="staff-chain-node staff-chain-node--accent" />
            <span className="staff-chain-line staff-chain-line--h" />
            <span className="staff-chain-node" />
            <span className="staff-chain-line staff-chain-line--v" />
            <span className="staff-chain-node staff-chain-node--accent" />
            <span className="staff-chain-line staff-chain-line--h2" />
            <span className="staff-chain-node" />
          </div>
          <div className="staff-motif-ring staff-motif-ring--large" />
          <div className="staff-motif-ring staff-motif-ring--small" />
        </div>

        <div className="container">
          <div className="staff-hero-copy">
            <span className="staff-hero-eyebrow">{hero.eyebrow}</span>
            <h1 className="staff-hero-title">
              <Title parts={hero.title} />
            </h1>
            <p className="staff-hero-desc">{hero.description}</p>
            <Link to="/contact" className="staff-hero-cta">
              <span>{hero.cta}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="staff-intro section-1440">
        <div className="container staff-intro-grid">
          <h2 className="staff-section-title">{intro.title}</h2>
          <div className="staff-intro-copy">
            {intro.paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      {/* One Connected Workflow, Start to Finish */}
      <section className="staff-needs section-light section-1440">
        <div className="container">
          <div className="staff-section-head">
            <span className="eyebrow staff-eyebrow">{twoNeeds.eyebrow}</span>
            <h2 className="staff-section-title">{twoNeeds.title}</h2>
          </div>

          <div className="staff-needs-grid">
            {twoNeeds.items.map(({ id, icon: Icon, title, description }) => (
              <article key={id} className="staff-need-card">
                <div className="staff-need-icon"><Icon size={20} /></div>
                <h3 className="staff-need-title">{title}</h3>
                <p className="staff-need-desc">{description}</p>
              </article>
            ))}
          </div>

          <p className="staff-needs-closing">{twoNeeds.closing}</p>
        </div>
      </section>

      {/* Key parameters */}
      <section className="staff-metrics section-1440">
        <div className="container">
          <div className="staff-section-head">
            <span className="eyebrow staff-eyebrow">{metrics.eyebrow}</span>
            <h2 className="staff-section-title">{metrics.title}</h2>
          </div>

          <div className="staff-metrics-grid">
            {metrics.items.map(({ id, icon: Icon, title, description }) => (
              <article key={id} className="staff-metric-card">
                <Icon size={18} className="staff-metric-icon" />
                <h3 className="staff-metric-title">{title}</h3>
                <p className="staff-metric-desc">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Built for every part of the staffing lifecycle */}
      <section className="staff-features section-light section-1440">
        <div className="container">
          <div className="staff-section-head">
            <span className="eyebrow staff-eyebrow">{features.eyebrow}</span>
          </div>

          <div className="staff-features-grid">
            {features.items.map(({ id, icon: Icon, product, title, lead, points }) => {
              const meta = productMeta[product];
              const ProductIcon = meta.icon;
              return (
                <article key={id} className="staff-feature-card">
                  <div className="staff-feature-head">
                    <span className="staff-feature-index">{id}</span>
                    <div className="staff-feature-icon"><Icon size={20} /></div>
                    <Link to={meta.to} className="staff-feature-tag">
                      <ProductIcon size={13} />
                      <span>{product}</span>
                    </Link>
                  </div>

                  <h3 className="staff-feature-title">{title}</h3>
                  <p className="staff-feature-lead">{lead}</p>

                  <ul className="staff-feature-points">
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

      {/* Why staffing firms choose WorkIntel */}
      <section className="staff-choose section-1440">
        <div className="container">
          <div className="staff-section-head">
            <span className="eyebrow staff-eyebrow">{whyChoose.eyebrow}</span>
            <p className="staff-choose-intro">{whyChoose.intro}</p>
          </div>

          <div className="staff-choose-grid">
            {whyChoose.points.map(({ id, icon: Icon, title, description }) => (
              <div key={id} className="staff-choose-point">
                <div className="staff-choose-icon"><Icon size={18} /></div>
                <div>
                  <h3 className="staff-choose-title">{title}</h3>
                  <p className="staff-choose-desc">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="staff-cta section-1440">
        <div className="container">
          <div className="staff-cta-inner section-dark">
            <h2 className="staff-cta-title">{closingCta.title}</h2>
            <p className="staff-cta-desc">{closingCta.description}</p>
            <Link to="/contact" className="btn btn-primary staff-cta-btn">
              <span>{closingCta.cta}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
