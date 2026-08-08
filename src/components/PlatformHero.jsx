import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMAGES } from '../data/productPages';
import './PlatformHero.css';

gsap.registerPlugin(ScrollTrigger);

/* Shared by the platform page and the home page. `as` drops the heading to an
   h2 when it runs below another page's h1. */
export default function PlatformHero({ as: Heading = 'h1' }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        /* Copy enters as one staggered run, the artwork rides in beside it.
           fromTo keeps StrictMode's double mount from freezing these at 0. */
        gsap.timeline({ defaults: { ease: 'power3.out' } })
          .fromTo('.platform-hero-copy > *',
            { y: 26, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.09 })
          .fromTo('.platform-hero-visual',
            { x: 42, opacity: 0, scale: 0.96 },
            { x: 0, opacity: 1, scale: 1, duration: 0.8 }, 0.1);

        /* Artwork drifts against the scroll for a little depth. */
        gsap.to('.platform-hero-visual', {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6
          }
        });
      }, heroRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="platform-hero section-light section-1440" ref={heroRef}>
      <div className="container platform-hero-grid">

        <div className="platform-hero-copy">
          <span className="eyebrow platform-hero-eyebrow">The Platform</span>
          <Heading className="platform-hero-title">
            One intelligent platform across the{' '}
            <span className="gradient-text">employee lifecycle</span>
          </Heading>
          <p className="platform-hero-desc">
            Every module shares a single source of employee truth — so data flows seamlessly
            from hiring through performance, with no duplicate systems or manual handoffs.
          </p>
          <div className="platform-hero-actions">
            <Link to="/WiTalents" className="btn btn-primary">
              <span>Explore WiTalents</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/WiPeople" className="btn btn-secondary">
              <span>Explore WiPeople</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="platform-hero-visual">
          <img src={IMAGES.platform} alt="A team working together in a bright office" />
        </div>

      </div>
    </section>
  );
}
