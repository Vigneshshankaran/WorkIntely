import React, { useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Zap, Database, GraduationCap, TrendingUp, Cpu, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhyChooseWi.css';

gsap.registerPlugin(ScrollTrigger);

const whyFeatures = [
  {
    id: '01',
    icon: <Zap size={22} />,
    title: 'Faster Hiring',
    description: 'Cut time-to-hire with AI-matched candidate pipelines.'
  },
  {
    id: '02',
    icon: <Database size={22} />,
    title: 'Centralized Employee Records',
    description: 'A single source of truth for every employee.'
  },
  {
    id: '03',
    icon: <GraduationCap size={22} />,
    title: 'Continuous Learning',
    description: 'Built-in learning paths tied to role and growth plans.'
  },
  {
    id: '04',
    icon: <TrendingUp size={22} />,
    title: 'Performance Management',
    description: 'Goals, reviews, and feedback in one place.'
  },
  {
    id: '05',
    icon: <Cpu size={22} />,
    title: 'AI Insights',
    description: 'Predictive analytics across hiring, retention, and performance.'
  },
  {
    id: '06',
    icon: <ShieldCheck size={22} />,
    title: 'Enterprise Security',
    description: 'Enterprise-grade data protection and access controls.'
  }
];

export default function WhyChooseWi() {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.why-wi-card', {
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

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section id="why-wi" className="why-wi-section section-1440" ref={sectionRef}>
      <div className="container">
        
        {/* Top Header Row with Title & Arrow Controls */}
        <div className="why-wi-top-bar">
          <div className="why-wi-title-area">
            <span className="why-wi-track-label">WHY WORKINTELY</span>
            <h2 className="why-wi-title">Built for how modern HR teams work</h2>
          </div>

          {/* Slider Navigation Arrows */}
          <div className="slider-nav-btns">
            <button onClick={scrollLeft} aria-label="Previous Feature" className="slider-btn">
              <ArrowLeft size={18} />
            </button>
            <button onClick={scrollRight} aria-label="Next Feature" className="slider-btn active">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Scroll Container */}
        <div className="why-wi-carousel" ref={scrollRef}>
          {whyFeatures.map((item) => (
            <div key={item.id} className="why-wi-card">
              
              <div className="why-icon-avatar">
                {item.icon}
              </div>

              <div className="why-card-content">
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
