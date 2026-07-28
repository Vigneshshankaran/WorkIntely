import React, { useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import atsImg from '../assets/ats_recruiting.png';
import peopleImg from '../assets/people_records.png';
import growImg from '../assets/learning_growth.png';
import performImg from '../assets/performance_goals.png';
import './PlatformBento.css';

gsap.registerPlugin(ScrollTrigger);

export default function PlatformBento() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nia-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="modules" className="nia-bento-section section-1440" ref={sectionRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="nia-bento-header">
          <span className="eyebrow">The Wi Family of Products</span>
          <h2 className="nia-bento-title">Connected Modules. Unified Operations. Smarter Business.</h2>
        </div>

        {/* Gray Canvas Container */}
        <div className="nia-bento-canvas">
          
          {/* Main Grid: 6 Modules */}
          <div className="nia-bento-grid-6">
            
            {/* Card 1: Wi Talents */}
            <div className="nia-card">
              <div className="nia-card-visual img-visual">
                <img src={atsImg} alt="Wi Talents Sourcing Dashboard Mockup" className="bento-card-img" loading="lazy" decoding="async" />
              </div>

              <div className="nia-card-body">
                <h3 className="nia-card-title">Wi Talents</h3>
                <p className="nia-card-desc">
                  Attract and hire top talent faster with AI-assisted recruiting pipelines.
                </p>
                <Link to="/solution" className="nia-card-link">
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 2: Wi People */}
            <div className="nia-card">
              <div className="nia-card-visual img-visual">
                <img src={peopleImg} alt="Wi People Records Directory Mockup" className="bento-card-img" loading="lazy" decoding="async" />
              </div>

              <div className="nia-card-body">
                <h3 className="nia-card-title">Wi People</h3>
                <p className="nia-card-desc">
                  One centralized system of record for every employee, everywhere.
                </p>
                <Link to="/solution" className="nia-card-link">
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 3: Wi Grow */}
            <div className="nia-card">
              <div className="nia-card-visual img-visual">
                <img src={growImg} alt="Wi Grow Learning Analytics Mockup" className="bento-card-img" loading="lazy" decoding="async" />
              </div>

              <div className="nia-card-body">
                <h3 className="nia-card-title">Wi Grow</h3>
                <p className="nia-card-desc">
                  Personalized learning journeys that build critical skills and expertise.
                </p>
                <Link to="/solution" className="nia-card-link">
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 4: Wi Perform */}
            <div className="nia-card">
              <div className="nia-card-visual img-visual">
                <img src={performImg} alt="Wi Perform Goals Review Mockup" className="bento-card-img" loading="lazy" decoding="async" />
              </div>

              <div className="nia-card-body">
                <h3 className="nia-card-title">Wi Perform</h3>
                <p className="nia-card-desc">
                  Continuous feedback, goals, and automated performance reviews.
                </p>
                <Link to="/solution" className="nia-card-link">
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 5: Wi Sales */}
            <div className="nia-card">
              <div className="nia-card-visual intel-visual" aria-hidden="true" style={{ minHeight: '200px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
                  <TrendingUp size={28} style={{ color: 'var(--primary)' }} />
                  <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--ink)' }}>+24.8% Sales Velocity</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--ink-muted)' }}>AI-driven Pipeline Optimizer</span>
                </div>
              </div>

              <div className="nia-card-body">
                <h3 className="nia-card-title">Wi Sales</h3>
                <p className="nia-card-desc">
                  Accelerate revenue growth with AI-powered sales pipeline optimization and training.
                </p>
                <Link to="/solution" className="nia-card-link">
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 6: Wi Books */}
            <div className="nia-card">
              <div className="nia-card-visual intel-visual" aria-hidden="true" style={{ minHeight: '200px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
                  <Sparkles size={28} style={{ color: 'var(--primary)' }} />
                  <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--ink)' }}>$12,480 Expenses Saved</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--ink-muted)' }}>Automated Expense Audits</span>
                </div>
              </div>

              <div className="nia-card-body">
                <h3 className="nia-card-title">Wi Books</h3>
                <p className="nia-card-desc">
                  Optimize financial planning, accounting, and expense operations.
                </p>
                <Link to="/solution" className="nia-card-link">
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>

          {/* Unified Core Layer (Takes Full Width) */}
          <div className="nia-card wide-card">
            <div className="nia-card-visual intel-visual" aria-hidden="true">
              <div className="intel-chips">
                <span className="intel-chip">Wi Talents</span>
                <span className="intel-chip">Wi People</span>
                <span className="intel-chip">Wi Grow</span>
                <span className="intel-chip">Wi Perform</span>
                <span className="intel-chip">Wi Sales</span>
                <span className="intel-chip">Wi Books</span>
              </div>
              <div className="intel-connector"></div>
              <div className="intel-core">
                <Sparkles size={16} />
                <span>One Unified Employee Record</span>
              </div>
            </div>

            <div className="nia-card-body">
              <h3 className="nia-card-title">Unified Talent Intelligence</h3>
              <p className="nia-card-desc">
                Connect hiring, records, learning, performance, sales, and financial planning into one real-time enterprise layer.
              </p>
              <Link to="/contact" className="nia-card-link">
                <span>Learn More</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
