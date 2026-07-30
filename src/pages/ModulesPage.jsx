import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  FileSignature,
  Briefcase,
  Cpu
} from 'lucide-react';
import WhyChooseWi from '../components/WhyChooseWi';
import WiWordmark from '../components/WiWordmark';
import atsImg from '../assets/ats_recruiting.png';
import peopleImg from '../assets/people_records.png';
import growImg from '../assets/learning_growth.png';
import performanceImg from '../assets/performance_goals.png';
import './ModulesPage.css';

const AUTOPLAY_MS = 7000;

/* Role-based solutions, in the order they appear in the hero slider. */
const rolesData = [
  {
    id: 'staffing',
    title: 'Staffing',
    subtitle: 'Find. Match. Place. Grow.',
    tagline: 'Find. Match. Place. Grow.',
    summary:
      'Scale your client placements, manage contractor pipelines, and find top talent faster with intelligent matching and automated scheduling.',
    desc: 'Empower your staffing agency or internal talent team with automated candidate pipelines, advanced matching algorithms, and streamlined placement tracking built to scale.',
    highlights: [
      'Fast AI candidate matching',
      'Unified requisition-to-placement pipeline',
      'Automated contractor scheduling and onboarding'
    ],
    image: atsImg,
    imageAlt: 'Staffing recruitment and placement dashboard',
    videoUrl: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054f4d9b3e007353f81e27e702c2187&profile_id=139&oauth2_token_id=57447761',
    whyChooseTitle: 'Why Staffing Teams Choose WorkIntel',
    whyChoose: [
      { title: 'Automated Sourcing', desc: 'Distribute roles to boards and direct agency talent pools in seconds.' },
      { title: 'Skills Match Scoring', desc: 'Leverage AI to rank candidates based on background, competencies, and rate parameters.' },
      { title: 'Client Feedback Portal', desc: 'Route candidate profiles to external hiring managers for fast panel evaluation.' }
    ],
    builtFor: ['Staffing Agencies', 'Contractor Brokers', 'Client Account Managers', 'High-Volume Recruiters'],
    outcomes: ['Reduce Sourcing Time', 'Improve Placement Quality', 'Increase Requisition Fill Rates', 'Enhance Contractor Retention']
  },
  {
    id: 'human-resource',
    title: 'Human Resource',
    subtitle: 'For corporate HR and talent teams.',
    tagline: 'For corporate HR and talent teams.',
    summary:
      'Manage corporate lifecycles, centralize employee records, and run development programs on a unified record.',
    desc: 'Bring your organization’s people operations, performance, learning, and records together. Keep corporate HR and talent teams aligned and efficient.',
    highlights: [
      'Centralized employee records directory',
      'Continuous development and career paths',
      'Automated performance and review cycles'
    ],
    image: peopleImg,
    imageAlt: 'Human resource portal and employee directory',
    videoUrl: 'https://player.vimeo.com/external/403788534.sd.mp4?s=d0014da4d5386af4ee2678f1f7e34f664df0d7fb&profile_id=139&oauth2_token_id=57447761',
    whyChooseTitle: 'Why Human Resource Teams Choose WorkIntel',
    whyChoose: [
      { title: 'All-In-One HR Records', desc: 'Keep a single, secure digital file for every employee from onboarding to exit.' },
      { title: 'Employee Growth Tracks', desc: 'Design learning journeys and skills matrices to retain top corporate talent.' },
      { title: 'Feedback & Reviews', desc: 'Run automated, constructive, and comprehensive reviews without manual spreadsheets.' }
    ],
    builtFor: ['Corporate HR Leaders', 'HR Business Partners', 'Learning & Development Managers', 'People Operations Teams'],
    outcomes: ['Increase Employee Retention', 'Strengthen Organization Trust', 'Scale Internal Promotion Rates', 'Reduce HR Administrative Overhead']
  },
  {
    id: 'operations',
    title: 'Operations',
    subtitle: 'Automate Workflows and AI Assisted decision making',
    tagline: 'Automate Workflows and AI Assisted decision making',
    summary:
      'Optimize back-office processes, automate business workflows, and drive decisions with real-time org-level data insights.',
    desc: 'Unify company operations, expense reporting, approvals, and AI auditing to eliminate administrative friction and scale efficiently.',
    highlights: [
      'AI-assisted auditing and decision checks',
      'Custom approval workflows and triggers',
      'Centralized organizational dashboard'
    ],
    image: growImg,
    imageAlt: 'Business operations and workflow dashboard',
    videoUrl: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27d2ad6cfed9dcb12f39eec49285290000ecdc9&profile_id=139&oauth2_token_id=57447761',
    whyChooseTitle: 'Why Operations Teams Choose WorkIntel',
    whyChoose: [
      { title: 'Intelligent Workflows', desc: 'Configure custom multi-level approvals for requisitions, expense checks, and hiring needs.' },
      { title: 'AI Audit Assistance', desc: 'Scan files, detect anomalies in org records, and flag compliance alerts automatically.' },
      { title: 'Cross-Module Flow', desc: 'Pass data smoothly between hiring, employee directory, and back-office databases.' }
    ],
    builtFor: ['Operations Directors', 'Back-Office System Admins', 'Business Unit Leaders', 'Finance & Compliance Teams'],
    outcomes: ['Eliminate Process Bottlenecks', 'Enforce Compliance Controls', 'Reduce Billing & Expense Errors', 'Improve System Interoperability']
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

  const scrollToSection = (id) => {
    const el = document.getElementById(`${id}-section`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
                  <span className="hero-slide-eyebrow">Solution by function</span>

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
                      onClick={() => scrollToSection(role.id)}
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


        {/* Section: Staffing Core Modules */}
        <section id="staffing-section" className="core-modules-card-v2 staffing-theme">
          <div className="card-v2-main-content">
            <span className="card-v2-eyebrow">Staffing</span>
            <h2 className="card-v2-title">Staffing Core Modules</h2>
            
            <div className="card-v2-modules-tags">
              <Link to="/WiTalents" className="card-v2-tag">Talent Sourcing</Link>
              <Link to="/WiTalents" className="card-v2-tag">Candidate Matching</Link>
              <Link to="/WiTalents" className="card-v2-tag">Recruitment</Link>
              <Link to="/WiTalents" className="card-v2-tag">Client Management</Link>
            </div>

            <div className="card-v2-action-row">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  const staffingRole = rolesData.find(r => r.id === 'staffing') ?? rolesData[0];
                  setSelectedRole(staffingRole);
                }}
              >
                <span>Explore More</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
          
          <div className="card-v2-cover-panel">
            <img src={atsImg} alt="Staffing & Recruiting" className="card-v2-cover-img" />
          </div>
        </section>

        {/* Section: Human Resource Core Modules */}
        <section id="human-resource-section" className="core-modules-card-v2 hr-theme">
          <div className="card-v2-main-content">
            <span className="card-v2-eyebrow">Human Resource</span>
            <h2 className="card-v2-title">Human Resource Core Modules</h2>
            
            <div className="card-v2-modules-tags">
              <Link to="/WiTalents" className="card-v2-tag">ATS</Link>
              <Link to="/WiPeople" className="card-v2-tag">Employee Records</Link>
              <Link to="/WiGrow" className="card-v2-tag">Skill Development</Link>
              <Link to="/WiPerform" className="card-v2-tag">Performance</Link>
            </div>

            <div className="card-v2-action-row">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  const hrRole = rolesData.find(r => r.id === 'human-resource') ?? rolesData[0];
                  setSelectedRole(hrRole);
                }}
              >
                <span>Explore More</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
          
          <div className="card-v2-cover-panel">
            <img src={peopleImg} alt="Human Resource" className="card-v2-cover-img" />
          </div>
        </section>

        {/* Section: Operations Core Modules */}
        <section id="operations-section" className="core-modules-card-v2 operations-theme">
          <div className="card-v2-main-content">
            <span className="card-v2-eyebrow">Operations</span>
            <h2 className="card-v2-title">Operations Core Modules</h2>
            
            <div className="card-v2-modules-tags">
              <Link to="/WiSales" className="card-v2-tag">CRM</Link>
              <Link to="/WiBooks" className="card-v2-tag">Accounts Receivables</Link>
              <Link to="/WiBooks" className="card-v2-tag">Accounts Payables</Link>
            </div>

            <div className="card-v2-action-row">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  const operationsRole = rolesData.find(r => r.id === 'operations') ?? rolesData[0];
                  setSelectedRole(operationsRole);
                }}
              >
                <span>Explore More</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
          
          <div className="card-v2-cover-panel">
            <img src={performanceImg} alt="Operations" className="card-v2-cover-img" />
          </div>
        </section>



      </div>

      {/* Why WorkIntel carousel (own container/width) */}
      <WhyChooseWi />

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
            {/* Sticky top bar holding the close control. */}
            <div className="role-modal-topbar">
              <button
                type="button"
                className="role-modal-close"
                onClick={() => setSelectedRole(null)}
                aria-label="Close details"
              >
                <X size={20} />
              </button>
            </div>
            <div className="role-modal-body">
              <span className="role-modal-eyebrow">Solution by function</span>
              <h2 className="role-modal-title" id="role-modal-title">
                <WiWordmark className="role-modal-wordmark" /> {selectedRole.title}
              </h2>
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
