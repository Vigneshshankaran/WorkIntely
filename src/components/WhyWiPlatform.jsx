import React from 'react';
import { Cpu, Database, TrendingUp, ShieldCheck } from 'lucide-react';
import './WhyWiPlatform.css';

const platformReasons = [
  {
    icon: <Cpu size={22} />,
    title: 'AI-Powered Automation',
    description: 'Reduce manual HR work with intelligent automation across the employee lifecycle.'
  },
  {
    icon: <Database size={22} />,
    title: 'Unified Employee Data',
    description: 'One employee record, accessible across every module and team.'
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Better Decision Making',
    description: 'Real-time insights help leaders make faster, smarter people decisions.'
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Scalable Enterprise Platform',
    description: 'Built to support fast-growing teams and complex global organizations.'
  }
];

export default function WhyWiPlatform() {
  return (
    <section className="why-platform-section section-1440">
      <div className="container">
        
        {/* Section Title */}
        <h2 className="why-platform-title">
          Why WiTalents Platform?
        </h2>

        {/* 4 Cards Grid */}
        <div className="why-platform-grid">
          {platformReasons.map((item, idx) => (
            <div key={idx} className="why-platform-card">
              
              {/* Circular Icon Badge */}
              <div className="why-platform-icon-circle">
                {item.icon}
              </div>

              {/* Text */}
              <h3 className="why-platform-card-title">{item.title}</h3>
              <p className="why-platform-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
