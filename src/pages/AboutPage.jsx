import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  missionOutcomes,
  differentiators,
  aiOutcomes,
  productPortfolio,
  peopleRoles
} from '../data/aboutContent';
import aboutHero from '../assets/about-hero.png';
import './AboutPage.css';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.timeline({ defaults: { ease: 'power3.out' } })
          .fromTo('.about-hero-copy > *',
            { y: 26, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.09 })
          .fromTo('.about-hero-visual',
            { y: 30, opacity: 0, scale: 0.97 },
            { y: 0, opacity: 1, scale: 1, duration: 0.8 }, 0.15);

        /* Each band lifts in as it comes into view. */
        ['.about-mission-card', '.about-diff-card', '.about-product-card', '.about-role']
          .forEach((selector) => {
            gsap.fromTo(selector,
              { y: 22, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.55,
                stagger: 0.07,
                ease: 'power3.out',
                scrollTrigger: { trigger: selector, start: 'top 88%' }
              }
            );
          });
      }, pageRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="about-page" ref={pageRef}>

      {/* Hero: vision statement + the brand graphic */}
      <section className="about-hero section-1440">
        <div className="container about-hero-grid">

          <div className="about-hero-copy">
            <span className="eyebrow about-eyebrow">Our Vision</span>
            <h1 className="about-hero-title">
              Intelligent business platforms that help organizations{' '}
              <span className="gradient-text">work smarter</span>
            </h1>
            <p className="about-hero-desc">
              To become one of the world&apos;s most trusted providers of intelligent business
              platforms that enable organizations to work smarter, innovate faster, and grow
              sustainably.
            </p>
            <p className="about-hero-desc">
              We aspire to build technology that is trusted by businesses across industries and
              geographies — technology that simplifies complexity while unlocking new
              opportunities through intelligence and innovation.
            </p>
            <Link to="/platform" className="btn btn-primary about-hero-cta">
              <span>Explore the platform</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="about-hero-visual">
            <img
              src={aboutHero}
              alt="WorkIntely — enabling companies to work intelligently across hiring, talent management, and business operations"
            />
          </div>

        </div>
      </section>

      {/* Mission */}
      <section className="about-mission section-1440">
        <div className="container about-mission-layout">

          {/* Left: heading and the mission outcomes */}
          <div className="about-mission-main">
            <div className="about-section-head is-left">
              <span className="eyebrow about-eyebrow">Our Mission</span>
              <h2 className="about-section-title">
                Secure, scalable, and intelligent cloud solutions
              </h2>
              <p className="about-section-lead">
                Our mission is to develop secure, scalable, and intelligent cloud solutions that
                enable organizations to:
              </p>
            </div>

            <ul className="about-mission-grid">
              {missionOutcomes.map((outcome) => (
                <li key={outcome} className="about-mission-card">
                  <Check size={16} aria-hidden="true" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: the guiding philosophy, on the dark surface */}
          <div className="about-philosophy section-dark">
            <span className="about-philosophy-label">
              Every solution we build is guided by one philosophy
            </span>
            <p className="about-philosophy-quote">
              Working Intelligently through Automation, AI, and Better Decisions.
            </p>
          </div>

        </div>
      </section>

      {/* What makes WorkIntel different */}
      <section className="about-difference section-light section-1440">
        <div className="container">
          <div className="about-section-head">
            <h2 className="about-section-title">What Makes WorkIntel Different?</h2>
          </div>

          <div className="about-diff-grid">
            {differentiators.map(({ id, icon: Icon, title, lead, body }, index) => (
              <article key={id} className="about-diff-card">
                <span className="about-diff-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="about-diff-icon"><Icon size={20} /></div>
                <h3 className="about-diff-title">{title}</h3>
                <p className="about-diff-lead">{lead}</p>
                <p className="about-diff-body">{body}</p>
              </article>
            ))}
          </div>

          <div className="about-ai-panel">
            <h3 className="about-ai-title">Across our products, AI helps organizations:</h3>
            <ul className="about-ai-grid">
              {aiOutcomes.map(({ id, icon: Icon, label }) => (
                <li key={id} className="about-ai-item">
                  <Icon size={17} aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Product portfolio */}
      <section className="about-portfolio section-1440">
        <div className="container">
          <div className="about-section-head">
            <h2 className="about-section-title">One Platform. Multiple Business Solutions.</h2>
            <p className="about-section-lead">Our growing product portfolio includes:</p>
          </div>

          <div className="about-product-grid">
            {productPortfolio.map(({ id, name, icon: Icon, description, to }) => {
              const inner = (
                <>
                  <div className="about-product-icon"><Icon size={20} /></div>
                  <h3 className="about-product-name">{name}</h3>
                  <p className="about-product-desc">{description}</p>
                </>
              );

              return to ? (
                <Link key={id} to={to} className="about-product-card is-link">
                  {inner}
                  <span className="about-product-more">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              ) : (
                <div key={id} className="about-product-card">{inner}</div>
              );
            })}
          </div>

          <p className="about-portfolio-note">
            Together, these solutions create a connected digital workplace where information
            flows seamlessly across departments.
          </p>
        </div>
      </section>

      {/* Built around people */}
      <section className="about-people section-light section-1440">
        <div className="container">
          <div className="about-section-head">
            <h2 className="about-section-title">Built Around People</h2>
            <p className="about-section-lead">Behind every successful business are people.</p>
          </div>

          <ul className="about-roles">
            {peopleRoles.map((role, index) => (
              <li key={role} className="about-role">
                <span className="about-role-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="about-role-text">{role}</span>
              </li>
            ))}
          </ul>

          <div className="about-people-close">
            <p>
              WorkIntel exists to make every one of these roles more productive, more informed,
              and more impactful.
            </p>
            <p className="about-people-emphasis">
              Technology should empower people — not overwhelm them.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
