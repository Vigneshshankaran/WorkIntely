import React, { useEffect, useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
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
          <span className="eyebrow">The WorkIntel Platform</span>
          <h2 className="nia-bento-title">Four connected modules. One employee record.</h2>
        </div>

        {/* Gray Canvas Container */}
        <div className="nia-bento-canvas">
          
          {/* Top Row: 3 Cards */}
          <div className="nia-grid-top-row">
            
            {/* Card 1: ATS */}
            <div className="nia-card">
              <div className="nia-card-visual img-visual">
                <img src={atsImg} alt="ATS Sourcing Dashboard Mockup" className="bento-card-img" loading="lazy" decoding="async" />
              </div>

              <div className="nia-card-body">
                <h3 className="nia-card-title">ATS</h3>
                <p className="nia-card-desc">
                  Attract and hire top talent faster with AI-assisted recruiting pipelines.
                </p>
                <Link to="/modules" className="nia-card-link">
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 2: People */}
            <div className="nia-card">
              <div className="nia-card-visual img-visual">
                <img src={peopleImg} alt="People Records Directory Mockup" className="bento-card-img" loading="lazy" decoding="async" />
              </div>

              <div className="nia-card-body">
                <h3 className="nia-card-title">People</h3>
                <p className="nia-card-desc">
                  One centralized system of record for every employee, everywhere.
                </p>
                <Link to="/contact" className="nia-card-link">
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 3: Grow */}
            <div className="nia-card">
              <div className="nia-card-visual img-visual">
                <img src={growImg} alt="Learning and Growth Analytics Mockup" className="bento-card-img" loading="lazy" decoding="async" />
              </div>

              <div className="nia-card-body">
                <h3 className="nia-card-title">Grow</h3>
                <p className="nia-card-desc">
                  Personalized learning journeys that build critical skills and expertise.
                </p>
                <Link to="/contact" className="nia-card-link">
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>

          {/* Bottom Row: 2 Cards (50/50 Split) */}
          <div className="nia-grid-bottom-row">
            
            {/* Card 4: Perform */}
            <div className="nia-card wide-card">
              <div className="nia-card-visual img-visual">
                <img src={performImg} alt="Performance Review Chart Mockup" className="bento-card-img" loading="lazy" decoding="async" />
              </div>

              <div className="nia-card-body">
                <h3 className="nia-card-title">Perform</h3>
                <p className="nia-card-desc">
                  Continuous feedback, goals, and automated performance reviews.
                </p>
                <Link to="/contact" className="nia-card-link">
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 5: Unified Talent Intelligence */}
            <div className="nia-card wide-card">
              <div className="nia-card-visual intel-visual" aria-hidden="true">
                <div className="intel-chips">
                  <span className="intel-chip">ATS</span>
                  <span className="intel-chip">People</span>
                  <span className="intel-chip">Grow</span>
                  <span className="intel-chip">Perform</span>
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
                  Connect hiring, records, learning, and performance into one real-time enterprise layer.
                </p>
                <Link to="/contact" className="nia-card-link">
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
