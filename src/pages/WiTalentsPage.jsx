import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ListChecks,
  ScanSearch,
  Headphones,
  ChartLine,
  SquareCheckBig,
  Star,
  Users,
  Briefcase,
  User
} from 'lucide-react';
import atsImg from '../assets/ats_recruiting.png';
import './WiTalentsPage.css';

/* Hiring workflow, in order. Rendered as the stepped list beside the intro. */
const processSteps = [
  {
    id: '01',
    title: 'Job Created',
    description: 'Role is defined and published with key requirements.'
  },
  {
    id: '02',
    title: 'Candidate Applies',
    description: 'Applicants submit their details directly through your platform.'
  },
  {
    id: '03',
    title: 'AI Screening',
    description: 'AI evaluates CVs, skill assessment, and conducts automated voice interviews.'
  },
  {
    id: '04',
    title: 'Shortlist Generated',
    description: 'AI compiles a ranked shortlist with recommendations based on AI screening.'
  },
  {
    id: '05',
    title: 'Recruiter Review',
    description: 'Recruiters validate the results, add notes, and finalize the candidate list.'
  },
  {
    id: '06',
    title: 'Client Submission',
    description:
      'Top candidates are shared with the client, final interviews are completed, and successful hires proceed to offer and onboarding.'
  }
];

/* Capability grid. `featured` inverts the card to the accent surface. */
const capabilities = [
  {
    id: 'ats',
    icon: <ListChecks size={20} />,
    title: 'Applicant Tracking Systems (ATS)',
    description:
      'An Applicant Tracking System is now the central hub of recruitment. It keeps candidate data organised, tracks progress at every stage, and ensures no one slips through the cracks. Many systems also integrate with other tools, making communication and scheduling seamless.'
  },
  {
    id: 'screening',
    icon: <ScanSearch size={20} />,
    title: 'AI-powered Screening',
    description:
      'Manual resume reviews can be slow and biased. AI tools can quickly shortlist candidates based on skills and experience, freeing recruiters to focus on meaningful conversations and cultural fit rather than admin work.'
  },
  {
    id: 'chatbots',
    icon: <Headphones size={20} />,
    title: 'Chatbots & Virtual Assistants',
    description:
      'Candidates today expect instant responses. Chatbots can answer common questions, schedule interviews, or provide status updates 24/7, keeping candidates informed and engaged without extra workload for recruiters.',
    featured: true
  },
  {
    id: 'analytics',
    icon: <ChartLine size={20} />,
    title: 'Predictive Analytics',
    description:
      'With the right data, recruiters can forecast hiring needs, identify where candidates are dropping off, and measure which sourcing channels bring the best results. This helps refine strategies and reduces wasted effort.'
  },
  {
    id: 'onboarding',
    icon: <SquareCheckBig size={20} />,
    title: 'Onboarding Platforms',
    description:
      'The journey doesn’t end when an offer is accepted. Digital onboarding tools make paperwork effortless, provide early access to training resources, and help new hires connect with their teams before day one - building confidence and commitment.'
  },
  {
    id: 'personalisation',
    icon: <Star size={20} />,
    title: 'Personalised Candidate Experiences',
    description:
      'AI-driven platforms now enable recruiters to send tailored updates, job recommendations, and interview reminders. This personalisation shows candidates they’re more than just an application ID, building stronger connections from the start.'
  }
];

/* Who the platform is personalised for. */
const audiences = [
  {
    id: 'agencies',
    icon: <Users size={20} />,
    title: 'Recruiting Agencies',
    description: 'Manage multiple clients, submit candidates faster, and boost revenue.'
  },
  {
    id: 'companies',
    icon: <Briefcase size={20} />,
    title: 'Companies / HR Teams',
    description: 'Use AI-powered pre-screening, collaborate easily, and reduce time-to-hire.'
  },
  {
    id: 'candidates',
    icon: <User size={20} />,
    title: 'Candidates',
    description: 'Apply easily, get unbiased screening, and receive interview calls sooner.'
  }
];

export default function WiTalentsPage() {
  return (
    <div className="wt-page">

      {/* Section: Personalised for every user */}
      <section className="wt-platform-section section-1440">
        <div className="container wt-platform-grid">

          <div className="wt-platform-visual">
            <img src={atsImg} alt="Wi Talents hiring dashboard and analytics" />
          </div>

          <div className="wt-platform-content">
            <span className="eyebrow wt-eyebrow">Wi Talents</span>
            <h1 className="wt-platform-title">
              A <span className="gradient-text">Smarter Hiring</span> Platform — Personalized for
              Every User.
            </h1>
            <p className="wt-platform-desc">
              Wi Talents is an AI-powered hiring platform that automates CV screening, interviews,
              and recruiter productivity. We help agencies and HR teams hire faster, smarter, and
              more efficiently with next-gen agentic AI.
            </p>

            <ul className="wt-audience-list">
              {audiences.map((item) => (
                <li key={item.id} className="wt-audience-item">
                  <div className="wt-audience-icon">{item.icon}</div>
                  <div className="wt-audience-copy">
                    <h3 className="wt-audience-title">{item.title}</h3>
                    <p className="wt-audience-desc">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="btn btn-primary wt-cta-btn">
              <span>Book Your Demo</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* Section: Recruiting technology capabilities */}
      <section className="wt-capabilities-section section-1440">
        <div className="container">

          <div className="wt-capabilities-grid">
            {capabilities.map((item) => (
              <article
                key={item.id}
                className={`wt-capability-card ${item.featured ? 'featured' : ''}`}
              >
                <div className="wt-capability-icon">{item.icon}</div>
                <h3 className="wt-capability-title">{item.title}</h3>
                <p className="wt-capability-desc">{item.description}</p>
              </article>
            ))}
          </div>

          <p className="wt-capabilities-footnote">
            Let&apos;s make your process faster -{' '}
            <Link to="/contact" className="wt-footnote-link">Get In Touch Today!</Link>
          </p>

        </div>
      </section>

      {/* Section: Proven hiring process */}
      <section className="wt-process-section section-1440">
        <div className="container wt-process-grid">

          <div className="wt-process-intro">
            <h2 className="wt-process-title">
              Streamlining success through proven <span className="gradient-text">process</span>
            </h2>
            <p className="wt-process-desc">
              A clear, intelligent workflow that guides every recruiter from candidate applied to
              final selection powered by automation, AI, and recruiter oversight.
            </p>
            <Link to="/contact" className="btn btn-primary wt-cta-btn">
              <span>Book Your Demo</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <ol className="wt-steps-list">
            {processSteps.map((step) => (
              <li key={step.id} className="wt-step-card">
                <span className="wt-step-badge">STEP {step.id}</span>
                <h3 className="wt-step-title">{step.title}</h3>
                <p className="wt-step-desc">{step.description}</p>
              </li>
            ))}
          </ol>

        </div>
      </section>

    </div>
  );
}
