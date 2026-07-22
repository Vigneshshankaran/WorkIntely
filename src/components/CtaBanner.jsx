import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CtaBanner.css';

gsap.registerPlugin(ScrollTrigger);

export default function CtaBanner() {
  const bannerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-banner-card', {
        scrollTrigger: {
          trigger: bannerRef.current,
          start: 'top 85%',
        },
        scale: 0.98,
        duration: 0.6,
        ease: 'power2.out'
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cta-banner-section section-1440" ref={bannerRef}>
      <div className="container">
        <div className="cta-banner-card">
          {/* Left Text Content */}
          <div className="cta-banner-text">
            <h2 className="cta-banner-title">Grow your team intelligently</h2>
            <p className="cta-banner-desc">
              Streamline hiring, people data, growth, and performance into one unified AI platform.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="cta-banner-action">
            <Link to="/contact" className="cta-banner-btn">
              <span>Talk to WI</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
