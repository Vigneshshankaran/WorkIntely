import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  Sparkles,
  X,
  ClipboardList,
  Globe,
  UserCheck,
  ClipboardCheck,
  CalendarClock,
  FileSignature
} from 'lucide-react';
import atsImg from '../assets/ats_recruiting.png';
import peopleImg from '../assets/people_records.png';
import growImg from '../assets/learning_growth.png';
import './ModulesPage.css';

const AUTOPLAY_MS = 7000;

/* Role-based solutions, in the order they appear in the hero slider. */
const rolesData = [
  {
    id: 'talent-management',
    title: 'Talent Management',
    subtitle: 'Develop Talent. Unlock Potential. Build Future Leaders.',
    tagline: 'Develop Talent. Unlock Potential. Build Future Leaders.',
    summary:
      'Identify, develop, engage, and retain top talent with continuous performance cycles, skills intelligence, and career pathways in one connected place.',
    desc: 'Your people are your greatest competitive advantage. WorkIntel helps organizations identify, develop, engage, and retain top talent through intelligent talent management powered by data and AI.',
    highlights: [
      'Continuous performance and goal cycles',
      'Skills intelligence and gap analysis',
      'Succession and internal mobility planning'
    ],
    image: growImg,
    imageAlt: 'Wi Grow learning and career development dashboard',
    videoUrl: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27d2ad6cfed9dcb12f39eec49285290000ecdc9&profile_id=139&oauth2_token_id=57447761',
    whyChooseTitle: 'Why Talent Management Teams Choose WorkIntel',
    whyChoose: [
      { title: 'Performance Management', desc: 'Run continuous performance reviews, goal tracking, feedback cycles, and development conversations.' },
      { title: 'Skills Intelligence', desc: 'Understand workforce capabilities, identify skill gaps, and build future-ready talent strategies.' },
      { title: 'Career Development', desc: 'Provide personalized growth plans, career pathways, mentoring opportunities, and learning recommendations.' },
      { title: 'Succession Planning', desc: 'Identify high-potential employees, build leadership pipelines, and prepare future leaders with confidence.' },
      { title: 'Internal Talent Mobility', desc: 'Promote internal hiring, career progression, and cross-functional opportunities based on employee skills and aspirations.' },
      { title: 'Talent Analytics', desc: 'Measure employee engagement, performance trends, retention risks, succession readiness, and workforce capabilities.' }
    ],
    builtFor: ['Talent Management Leaders', 'Learning & Development Teams', 'Performance Management Teams', 'HR Business Partners', 'Leadership Development Teams', 'Organizational Development Teams'],
    outcomes: ['Improve Employee Retention', 'Build Future Leaders', 'Increase Workforce Agility', 'Strengthen Employee Engagement', 'Develop Critical Skills', 'Align Talent with Business Strategy']
  },
  {
    id: 'hr-operations',
    title: 'HR Operations',
    subtitle: 'Simplify HR Operations. Elevate Employee Experience.',
    tagline: 'Simplify HR Operations. Elevate Employee Experience.',
    summary:
      'Centralize employee records, automate approvals and documentation, and give HR teams live visibility across the entire workforce.',
    desc: 'HR operations should enable people—not slow them down. WorkIntel centralizes your employee operations, automates repetitive processes, and gives HR teams the visibility they need to deliver exceptional employee experiences across the entire workforce.',
    highlights: [
      'One record for the full employee lifecycle',
      'Automated approvals and document generation',
      'Audit-ready compliance trails'
    ],
    image: peopleImg,
    imageAlt: 'Wi People employee records and directory dashboard',
    videoUrl: 'https://player.vimeo.com/external/403788534.sd.mp4?s=d0014da4d5386af4ee2678f1f7e34f664df0d7fb&profile_id=139&oauth2_token_id=57447761',
    whyChooseTitle: 'Why HR Operations Teams Choose WorkIntel',
    whyChoose: [
      { title: 'Employee Lifecycle Management', desc: 'Manage onboarding, employee records, transfers, promotions, exits, and everything in between.' },
      { title: 'HR Workflow Automation', desc: 'Automate approvals, document generation, notifications, reminders, and recurring HR activities.' },
      { title: 'Centralized Employee Data', desc: 'Maintain a single source of truth for employee information, organizational structures, and HR documentation.' },
      { title: 'Compliance Made Simple', desc: 'Stay audit-ready with standardized processes, digital records, approval trails, and configurable compliance workflows.' },
      { title: 'Employee Self-Service', desc: 'Empower employees and managers to complete everyday HR tasks independently through intuitive self-service portals.' },
      { title: 'HR Analytics & Dashboards', desc: 'Monitor HR operations with real-time insights into workforce trends, service requests, productivity, and compliance metrics.' }
    ],
    builtFor: ['HR Shared Services', 'HR Business Partners', 'HR Administrators', 'Employee Services', 'People Operations Teams', 'Global HR Operations'],
    outcomes: ['Reduce Administrative Work', 'Improve Process Efficiency', 'Increase Data Accuracy', 'Strengthen Compliance', 'Deliver Better Employee Experiences', 'Scale HR Operations with Confidence']
  },
  {
    id: 'hiring-teams',
    title: 'Hiring Teams',
    subtitle: 'Hire Better. Hire Faster. Hire with Confidence.',
    tagline: 'Hire Better. Hire Faster. Hire with Confidence.',
    summary:
      'Run requisition-to-offer hiring on one platform, with AI matching, structured scorecards, and pipeline visibility for every stakeholder.',
    desc: 'Transform your hiring process with AI-powered recruitment that helps your teams identify the right talent, reduce time-to-hire, and deliver an exceptional experience. From requisition to offer, WorkIntel keeps hiring managers, recruiters, and interviewers aligned on a single intelligent platform.',
    highlights: [
      'AI matching against role competencies',
      'Structured scorecards and interview feedback',
      'Live pipeline and time-to-hire metrics'
    ],
    image: atsImg,
    imageAlt: 'Wi Talents recruiting pipeline and candidate dashboard',
    videoUrl: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054f4d9b3e007353f81e27e702c2187&profile_id=139&oauth2_token_id=57447761',
    whyChooseTitle: 'Why Hiring Teams Choose WorkIntel',
    whyChoose: [
      { title: 'AI-Powered Candidate Matching', desc: 'Automatically identify the most relevant candidates based on skills, experience, competencies, and role requirements.' },
      { title: 'End-to-End Recruitment Workflow', desc: 'Manage job requisitions, sourcing, interview scheduling, evaluations, offers, and onboarding from one platform.' },
      { title: 'Collaborative Hiring', desc: 'Enable recruiters, hiring managers, and interview panels to evaluate candidates together with structured feedback and scorecards.' },
      { title: 'Intelligent Interview Management', desc: 'Automate interview scheduling, reminders, interviewer assignments, and candidate communications.' },
      { title: 'Faster Decision Making', desc: 'Gain real-time visibility into hiring pipelines, bottlenecks, recruiter performance, and hiring metrics.' },
      { title: 'Exceptional Candidate Experience', desc: 'Deliver a seamless, transparent, and engaging hiring journey that strengthens your employer brand.' }
    ],
    builtFor: ['Talent Acquisition Teams', 'Recruitment Agencies', 'Hiring Managers', 'Startup Founders', 'Enterprise Talent Teams', 'High-Volume Recruitment Teams'],
    outcomes: ['Reduce Time-to-Hire', 'Improve Candidate Quality', 'Increase Recruiter Productivity', 'Eliminate Manual Coordination', 'Enhance Hiring Collaboration', 'Make Data-Driven Hiring Decisions']
  }
];

/* The WI family of products. `features` drives the detail grid; modules without
   published feature copy fall back to the inquiry panel. */
const modulesData = [
  {
    id: 'WiTalents',
    tagline: 'Attract and hire top talent faster with AI-assisted recruiting pipelines.',
    features: [
      {
        id: 'requisitions',
        icon: <ClipboardList size={20} />,
        title: 'Requisitions & Approvals',
        description: 'Raise openings, capture role requirements, and route budget sign-off through configurable multi-level approval chains.'
      },
      {
        id: 'sourcing',
        icon: <Globe size={20} />,
        title: 'Multi-Channel Sourcing',
        description: 'Publish roles to job boards, your career site, referrals, and agencies, then manage every applicant from one shared inbox.'
      },
      {
        id: 'ai-matching',
        icon: <UserCheck size={20} />,
        title: 'AI Candidate Matching',
        description: 'Rank applicants against role competencies and surface strong-fit profiles already sitting in your talent pool.'
      },
      {
        id: 'evaluations',
        icon: <ClipboardCheck size={20} />,
        title: 'Structured Evaluations',
        description: 'Score candidates against consistent rubrics so recruiters, hiring managers, and interview panels compare like for like.'
      },
      {
        id: 'scheduling',
        icon: <CalendarClock size={20} />,
        title: 'Interview Scheduling',
        description: 'Coordinate panel availability, propose slots, and send candidate reminders without the usual email back-and-forth.'
      },
      {
        id: 'offers',
        icon: <FileSignature size={20} />,
        title: 'Offers & Onboarding Handoff',
        description: 'Generate offers, track acceptance, and pass the accepted hire into Wi People without re-entering a single field.'
      }
    ]
  },
  { id: 'WiPeople', tagline: 'One centralized system of record for every employee, everywhere.' },
  { id: 'WiGrow', tagline: 'Personalized learning journeys that build critical skills and expertise.' },
  { id: 'WiPerform', tagline: 'Continuous feedback, goals, and automated performance reviews.' },
  { id: 'WiSales', tagline: 'Accelerate revenue growth with AI-powered sales pipeline optimization and training.' },
  { id: 'WiBooks', tagline: 'Optimize financial planning, accounting, and expense operations.' }
];

export default function ModulesPage() {
  const [activeModule, setActiveModule] = useState('WiTalents');
  const [selectedRole, setSelectedRole] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [timerNonce, setTimerNonce] = useState(0);

  const slideCount = rolesData.length;
  const currentModule = modulesData.find((m) => m.id === activeModule) ?? modulesData[0];

  const goToSlide = useCallback(
    (index) => {
      setActiveSlide(((index % slideCount) + slideCount) % slideCount);
      /* Restart the countdown so a manual pick isn't cut short by a pending tick. */
      setTimerNonce((n) => n + 1);
    },
    [slideCount]
  );

  /* Auto-advance the hero slider. Held while the user is hovering/focused inside
     it, while the role modal is open, or when reduced motion is requested. */
  useEffect(() => {
    if (paused || selectedRole) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideCount);
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [paused, selectedRole, slideCount, timerNonce]);

  /* Escape closes the role modal; body scroll is locked while it is open. */
  useEffect(() => {
    if (!selectedRole) return;

    const onKey = (e) => { if (e.key === 'Escape') setSelectedRole(null); };
    window.addEventListener('keydown', onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedRole]);

  return (
    <div className="modules-page">

      {/* Hero Slider: Full Screen Viewport Width (Pulled out of container) */}
      <section
        className="hero-slider-section"
        aria-roledescription="carousel"
        aria-label="Solutions by role"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {rolesData.map((role, index) => {
          const isActive = activeSlide === index;
          return (
            <article
              key={role.id}
              className={`hero-slide-item ${isActive ? 'active' : ''}`}
              aria-hidden={!isActive}
            >
              {/* Immersive Background Video */}
              {role.videoUrl && (
                <div className="hero-slide-bg-video-wrapper">
                  <video
                    key={role.id}
                    src={role.videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-slide-bg-video"
                  />
                  <div className="hero-slide-bg-video-overlay" />
                </div>
              )}

              {/* Inner container to align text copy with grid */}
              <div className="container hero-slide-inner">
                <div className="hero-slide-content">
                  <span className="hero-slide-eyebrow">Solutions by Role</span>

                  <h1 className="hero-slide-headline">
                    <span className="headline-line">{role.title}</span>
                  </h1>

                  <p className="hero-slide-desc">
                    {role.tagline}
                  </p>

                  <div className="hero-slide-actions">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setSelectedRole(role)}
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}

        {/* Controls container aligned with page margins */}
        <div className="container controls-relative-container">
          {/* Slider Side Controls (Stacked vertically on the right side) */}
          <div className="hero-slider-side-controls">
            <button
              type="button"
              className="slider-side-arrow"
              aria-label="Previous slide"
              onClick={() => goToSlide(activeSlide - 1)}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="slider-side-arrow"
              aria-label="Next slide"
              onClick={() => goToSlide(activeSlide + 1)}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Slider Bottom Progress Track Indicator */}
          <div className="hero-slider-bottom-bar">
            <div className="hero-slider-progress-track">
              {rolesData.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`progress-track-segment ${activeSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="hero-slider-slide-counter">
              0{activeSlide + 1} <span className="counter-sep">/</span> 0{slideCount}
            </div>
          </div>
        </div>
      </section>

      {/* Main Container for subsequent sections */}
      <div className="container">

        {/* Section: Solutions by Role — scannable card view */}
        <section className="roles-section">
          <div className="roles-header">
            <span className="eyebrow">Solutions by Role</span>
            <h2 className="roles-title">Tailored for your people teams</h2>
            <p className="roles-desc">Select a team below to explore custom workflows, feature deep-dives, and target operational outcomes.</p>
          </div>

          <div className="roles-grid">
            {rolesData.map((role) => (
              <button
                key={role.id}
                type="button"
                className="role-card"
                onClick={() => setSelectedRole(role)}
                aria-label={`Open ${role.title} details`}
              >
                <span className="role-card-image-box">
                  <img
                    src={role.image}
                    alt=""
                    className="role-card-img"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="role-card-content">
                  <span className="role-card-title">{role.title}</span>
                  <span className="role-card-subtitle">{role.subtitle}</span>
                  <span className="role-card-desc">{role.summary}</span>
                  <span className="role-card-link">
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Section: Wi Family of Products */}
        <section className="products-section">
          <div className="products-header">
            <span className="eyebrow">Wi Family of Products</span>
            <h2 className="products-title">Explore Core Modules</h2>
            <p className="products-desc">
              Six modules on one unified employee record. Adopt the module you need today and
              connect the rest as you grow.
            </p>
          </div>

          {/* Product Selector Tabs */}
          <div className="modules-tabs-list" role="tablist" aria-label="Wi product modules">
            {modulesData.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={activeModule === item.id}
                className={`module-tab-btn ${activeModule === item.id ? 'active' : ''}`}
                onClick={() => setActiveModule(item.id)}
              >
                {item.id.replace('Wi', 'Wi ')}
              </button>
            ))}
          </div>

          {/* Active Module Detail */}
          <p className="module-tagline">{currentModule.tagline}</p>

          {currentModule.features ? (
            <div className="modules-cards-grid">
              {currentModule.features.map((item, index) => (
                <div key={item.id} className="lifecycle-card module-card-variant">

                  {/* Top Row: Circle Badge Icon + Step Badge */}
                  <div className="card-top-row">
                    <div className="step-badge-icon circle-icon">
                      {item.icon}
                    </div>
                    <span className="step-num">0{index + 1}</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="card-step-title">{item.title}</h3>
                  <p className="card-step-desc">{item.description}</p>

                  {/* Bottom Right Arrow Action */}
                  <div className="card-arrow-link">
                    <ArrowRight size={18} />
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="coming-soon-module-panel">
              <div className="coming-soon-module-icon">
                <Sparkles size={32} style={{ color: 'var(--primary)' }} />
              </div>
              <h3 className="coming-soon-module-title">{activeModule.replace('Wi', 'Wi ')} Details</h3>
              <p className="coming-soon-text-small">
                Getting updated shortly. Reach out to us if you are interested in this particular module.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '12px' }}>
                <span>Inquire About {activeModule.replace('Wi', 'Wi ')}</span>
              </Link>
            </div>
          )}

          {/* Bottom CTA Text Bar */}
          <div className="modules-bottom-cta">
            <span>Let&rsquo;s make your process faster &mdash;</span>{" "}
            <Link to="/contact" className="modules-cta-link">
              Get In Touch Today! <ArrowRight size={16} className="inline-arrow" />
            </Link>
          </div>
        </section>

      </div>

      {/* Role Details Modal */}
      {selectedRole && (
        <div className="role-modal-overlay" onClick={() => setSelectedRole(null)}>
          <div
            className="role-modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="role-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="role-modal-close"
              onClick={() => setSelectedRole(null)}
              aria-label="Close details"
            >
              <X size={20} />
            </button>
            <div className="role-modal-body">
              <span className="role-modal-eyebrow">Solutions by Role</span>
              <h2 className="role-modal-title" id="role-modal-title">{selectedRole.title}</h2>
              <p className="role-modal-subtitle">{selectedRole.subtitle}</p>
              <p className="role-modal-desc">{selectedRole.desc}</p>

              <h3 className="role-modal-section-title">{selectedRole.whyChooseTitle}</h3>
              <div className="role-modal-features-grid">
                {selectedRole.whyChoose.map((item) => (
                  <div key={item.title} className="role-modal-feature-item">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="role-modal-section-title">Built For</h3>
              <div className="role-modal-chips-list">
                {selectedRole.builtFor.map((chip) => (
                  <span key={chip} className="role-modal-chip">{chip}</span>
                ))}
              </div>

              <h3 className="role-modal-section-title">Outcomes That Matter</h3>
              <div className="role-modal-chips-list">
                {selectedRole.outcomes.map((chip) => (
                  <span key={chip} className="role-modal-chip accent">{chip}</span>
                ))}
              </div>

              {/* Consistent CTA inside modal */}
              <div className="role-modal-cta-box">
                <h3 className="role-modal-cta-title">Ready to Transform Your People Operations?</h3>
                <p className="role-modal-cta-desc">
                  Whether you are hiring exceptional talent, streamlining HR operations, or
                  developing future leaders, WorkIntel provides the AI-powered platform your teams
                  need to work smarter, faster, and with greater impact.
                </p>
                <Link to="/contact" className="btn btn-primary" onClick={() => setSelectedRole(null)}>
                  <span>Talk to Wi</span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
