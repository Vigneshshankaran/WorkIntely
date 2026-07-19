import React, { useEffect, useRef } from 'react';
import { ArrowRight, UserPlus, Layers, GraduationCap, Target } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FeatureGrid.css';

gsap.registerPlugin(ScrollTrigger);

const lifecycleSteps = [
  {
    step: '1',
    icon: <UserPlus size={20} />,
    title: 'Attract',
    description: 'AI-matched sourcing and recruiting pipelines.'
  },
  {
    step: '2',
    icon: <Layers size={20} />,
    title: 'Manage',
    description: 'Centralized employee records and workflows.'
  },
  {
    step: '3',
    icon: <GraduationCap size={20} />,
    title: 'Develop',
    description: 'Personalized learning paths that build skills.'
  },
  {
    step: '4',
    icon: <Target size={20} />,
    title: 'Perform',
    description: 'Continuous feedback and goal tracking.'
  }
];

export default function FeatureGrid() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.lifecycle-card', {
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
    <section id="lifecycle" className="lifecycle-section section-1440" ref={sectionRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="lifecycle-header">
          <span className="eyebrow">Platform Modules</span>
          <h2 className="lifecycle-title">
            One Intelligent Platform Across the Employee Lifecycle
          </h2>
        </div>

        {/* 4 Step Cards Grid — cards sit directly on the page ground */}
        <div className="lifecycle-grid">
          {lifecycleSteps.map((item) => (
            <div key={item.step} className="lifecycle-card">

              {/* Top Badge: Icon + Step Number */}
              <div className="card-top-row">
                <div className="step-badge-icon">
                  {item.icon}
                </div>
                <span className="step-num">0{item.step}</span>
              </div>

              {/* Content */}
              <h3 className="card-step-title">{item.title}</h3>
              <p className="card-step-desc">{item.description}</p>

              {/* Arrow Action */}
              <div className="card-arrow-link">
                <ArrowRight size={18} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
