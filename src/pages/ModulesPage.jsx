import React from 'react';
import { Link } from 'react-router-dom';
import { ListFilter, UserCheck, Headphones, TrendingUp, CheckSquare, Star, ArrowRight } from 'lucide-react';
import './ModulesPage.css';

const modulesList = [
  {
    step: '1',
    id: 'ats',
    icon: <ListFilter size={20} />,
    title: 'Applicant Tracking Systems (ATS)',
    description: 'An Applicant Tracking System is now the central hub of recruitment. It keeps candidate data organised, tracks progress at every stage, and ensures no one slips through the cracks. Many systems also integrate with other tools, making communication and scheduling seamless.'
  },
  {
    step: '2',
    id: 'ai-screening',
    icon: <UserCheck size={20} />,
    title: 'AI-powered Screening',
    description: 'Manual resume reviews can be slow and biased. AI tools can quickly shortlist candidates based on skills and experience, freeing recruiters to focus on meaningful conversations and cultural fit rather than admin work.'
  },
  {
    step: '3',
    id: 'chatbots',
    icon: <Headphones size={20} />,
    title: 'Chatbots & Virtual Assistants',
    description: 'Candidates today expect instant responses. Chatbots can answer common questions, schedule interviews, or provide status updates 24/7, keeping candidates informed and engaged without extra workload for recruiters.'
  },
  {
    step: '4',
    id: 'predictive-analytics',
    icon: <TrendingUp size={20} />,
    title: 'Predictive Analytics',
    description: 'With the right data, recruiters can forecast hiring needs, identify where candidates are dropping off, and measure which sourcing channels bring the best results. This helps refine strategies and reduces wasted effort.'
  },
  {
    step: '5',
    id: 'onboarding',
    icon: <CheckSquare size={20} />,
    title: 'Onboarding Platforms',
    description: "The journey doesn't end when an offer is accepted. Digital onboarding tools make paperwork effortless, provide early access to training resources, and help new hires connect with their teams before day one - building confidence and commitment."
  },
  {
    step: '6',
    id: 'personalised-experience',
    icon: <Star size={20} />,
    title: 'Personalised Candidate Experiences',
    description: "AI-driven platforms now enable recruiters to send tailored updates, job recommendations, and interview reminders. This personalisation shows candidates they're more than just an application ID, building stronger connections from the start."
  }
];

export default function ModulesPage() {
  return (
    <div className="modules-page section-1440">
      <div className="container">
        
        {/* Page Header */}
        <header className="modules-hero-header">
          <span className="eyebrow">PLATFORM MODULES</span>
          <h1 className="modules-page-title">
            Intelligent Solutions for the Modern Workforce
          </h1>
          <p className="modules-page-subtitle">
            Explore our suite of interconnected modules designed to streamline recruiting, enhance candidate engagement, and drive data-backed talent decisions.
          </p>
        </header>

        {/* 6 Cards Grid (3x2 on desktop) matching lifecycle-card structure */}
        <div className="modules-cards-grid">
          {modulesList.map((item) => (
            <div key={item.id} className="lifecycle-card module-card-variant">
              
              {/* Top Row: Circle Badge Icon + Step Badge */}
              <div className="card-top-row">
                <div className="step-badge-icon circle-icon">
                  {item.icon}
                </div>
                <span className="step-num">0{item.step}</span>
              </div>

              {/* Title & Description */}
              <h2 className="card-step-title">{item.title}</h2>
              <p className="card-step-desc">{item.description}</p>

              {/* Bottom Right Arrow Action */}
              <div className="card-arrow-link">
                <ArrowRight size={18} />
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Text Bar */}
        <div className="modules-bottom-cta">
          <span>Let's make your process faster - </span>
          <Link to="/contact" className="modules-cta-link">
            Get In Touch Today! <ArrowRight size={16} className="inline-arrow" />
          </Link>
        </div>

      </div>
    </div>
  );
}
