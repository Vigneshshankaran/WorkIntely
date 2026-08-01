import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Globe,
  UserCheck,
  Workflow,
  ClipboardCheck,
  SquareCheckBig,
  ChartLine,
  Plug
} from 'lucide-react';
import './TalentCategoryExplorer.css';

/* Categories shown as tabs. `mock` drives the illustrative panel on the right,
   so each category gets a visual without hand-built markup per tab. */
const categories = [
  {
    id: 'ai-recruiting',
    label: 'AI recruiting',
    icon: <Sparkles size={18} />,
    title: 'AI recruiting',
    description:
      'Let Wi Talents rank applicants against role competencies, draft outreach, and surface the strong-fit people already sitting in your talent pool.',
    points: [
      'Match scoring against role competencies',
      'Drafted outreach and screening questions',
      'Re-surfaces past applicants worth a second look'
    ],
    ctaLabel: 'Explore AI recruiting',
    mock: {
      title: 'Match scores',
      action: 'Rank',
      rows: [
        { title: 'Priya Raman', sub: 'Senior Backend Engineer', value: '94%', strong: true },
        { title: 'Daniel Okafor', sub: 'Senior Backend Engineer', value: '88%' },
        { title: 'Mei Lin', sub: 'Senior Backend Engineer', value: '81%' }
      ],
      badge: 'Top 3 of 214 applicants'
    }
  },
  {
    id: 'talent-sourcing',
    label: 'Talent sourcing',
    icon: <Globe size={18} />,
    title: 'Talent sourcing',
    description:
      'Publish a role to job boards, your career site, referrals, and agencies at once, then manage every applicant from one shared inbox.',
    points: [
      'One-click multi-channel publishing',
      'Referral and agency submissions in the same pipeline',
      'Source-level reporting on what actually converts'
    ],
    ctaLabel: 'Explore talent sourcing',
    mock: {
      title: 'Campaign pools',
      action: 'Create',
      rows: [
        { title: 'Engage campaign', sub: 'Source candidates for open roles', strong: true },
        { title: 'Nurture campaign', sub: 'Keep your pipeline warm over time' },
        { title: 'Referral drive', sub: 'Ask your team first' }
      ],
      badge: '5 channels connected'
    }
  },
  {
    id: 'candidate-experience',
    label: 'Candidate experience',
    icon: <UserCheck size={18} />,
    title: 'Candidate experience',
    description:
      'Keep people informed without extra recruiter workload — tailored updates, self-serve scheduling, and status that is never a mystery.',
    points: [
      'Automated status updates at every stage',
      'Self-serve interview slot booking',
      'Personalised role recommendations'
    ],
    ctaLabel: 'Explore candidate experience',
    mock: {
      title: 'Candidate timeline',
      action: 'Notify',
      rows: [
        { title: 'Application received', sub: 'Confirmation sent automatically' },
        { title: 'Interview booked', sub: 'Candidate picked Thu 10:30', strong: true },
        { title: 'Awaiting feedback', sub: 'Panel reminder queued' }
      ],
      badge: 'Average response time 4h'
    }
  },
  {
    id: 'scalable-workflows',
    label: 'Scalable workflows',
    icon: <Workflow size={18} />,
    title: 'Scalable workflows',
    description:
      'Configure requisition approvals, stage gates, and hand-offs once, then run them the same way across every team and country.',
    points: [
      'Multi-level requisition and budget approvals',
      'Stage gates that hold until criteria are met',
      'Per-region variations without a second process'
    ],
    ctaLabel: 'Explore workflows',
    mock: {
      title: 'Approval chain',
      action: 'Configure',
      rows: [
        { title: 'Hiring manager', sub: 'Approved · 2 days ago' },
        { title: 'Finance', sub: 'Approved · yesterday' },
        { title: 'VP People', sub: 'Pending review', strong: true }
      ],
      badge: '3 of 4 steps complete'
    }
  },
  {
    id: 'interviewing',
    label: 'Interviewing & decision-making',
    icon: <ClipboardCheck size={18} />,
    title: 'Interviewing & decision-making',
    description:
      'Score candidates against consistent rubrics so recruiters, hiring managers, and panels are comparing like for like.',
    points: [
      'Shared scorecards per role and stage',
      'Panel availability and slot proposals',
      'Decision summaries with dissent captured'
    ],
    ctaLabel: 'Explore interviewing',
    mock: {
      title: 'Scorecard',
      action: 'Submit',
      rows: [
        { title: 'System design', sub: 'Rubric level 4 of 5', value: 'Strong', strong: true },
        { title: 'Collaboration', sub: 'Rubric level 3 of 5', value: 'Yes' },
        { title: 'Ownership', sub: 'Rubric level 4 of 5', value: 'Strong' }
      ],
      badge: '4 of 4 interviewers submitted'
    }
  },
  {
    id: 'onboarding',
    label: 'Onboarding',
    icon: <SquareCheckBig size={18} />,
    title: 'Onboarding',
    description:
      'Accepted offers flow straight into Wi People — paperwork, equipment, and first-week plans handled before day one.',
    points: [
      'Offer acceptance creates the employee record',
      'Task lists for IT, facilities, and the manager',
      'Early access to training and team intros'
    ],
    ctaLabel: 'Explore onboarding',
    mock: {
      title: 'Onboarding tasks',
      action: 'Assign',
      rows: [
        { title: 'Assign start date', sub: 'Completed', value: 'Done', strong: true },
        { title: 'Provision laptop', sub: 'IT · due in 2 days' },
        { title: 'Manager intro plan', sub: 'Draft shared' }
      ],
      badge: 'Handed to Wi People'
    }
  },
  {
    id: 'reporting',
    label: 'Reporting & insights',
    icon: <ChartLine size={18} />,
    title: 'Reporting & insights',
    description:
      'See where candidates drop off, which channels earn their spend, and how long each stage really takes — in real time.',
    points: [
      'Funnel and drop-off by stage',
      'Time-to-hire and cost-per-hire trends',
      'Source effectiveness across every channel'
    ],
    ctaLabel: 'Explore reporting',
    mock: {
      title: 'Candidates by source',
      action: 'Build report',
      rows: [
        { title: 'Career site', sub: 'Last 90 days', value: '112', strong: true },
        { title: 'Referrals', sub: 'Last 90 days', value: '68' },
        { title: 'Agencies', sub: 'Last 90 days', value: '34' }
      ],
      badge: 'Time-to-hire down 18%'
    }
  },
  {
    id: 'integrations',
    label: 'Integrations',
    icon: <Plug size={18} />,
    title: 'Integrations',
    description:
      'Wi Talents sits alongside the tools you already run — calendars, job boards, assessments, payroll, and the rest of the Wi family.',
    points: [
      'Calendar and email sync both ways',
      'Assessment and background-check partners',
      'Shared record with Wi People, Grow, and Perform'
    ],
    ctaLabel: 'Explore integrations',
    mock: {
      title: 'Connected tools',
      action: 'Connect',
      rows: [
        { title: 'Calendar', sub: 'Two-way sync', value: 'Live', strong: true },
        { title: 'Assessments', sub: 'Scores land on the scorecard', value: 'Live' },
        { title: 'Payroll', sub: 'Triggered on start date', value: 'Ready' }
      ],
      badge: 'Wi family connected'
    }
  }
];

export default function TalentCategoryExplorer() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const tabRefs = useRef({});

  const activeIndex = categories.findIndex((c) => c.id === activeId);
  const active = categories[activeIndex] ?? categories[0];

  /* Arrow keys move between tabs, as a tablist is expected to. */
  const onKeyDown = (event) => {
    const keys = { ArrowRight: 1, ArrowLeft: -1 };
    let next = null;

    if (event.key in keys) {
      next = (activeIndex + keys[event.key] + categories.length) % categories.length;
    } else if (event.key === 'Home') {
      next = 0;
    } else if (event.key === 'End') {
      next = categories.length - 1;
    }

    if (next === null) return;

    event.preventDefault();
    const id = categories[next].id;
    setActiveId(id);
    tabRefs.current[id]?.focus();
  };

  return (
    <section className="tce-section section-1440">
      <div className="container">

        <div className="tce-header">
          <span className="eyebrow tce-eyebrow">Wi Talents</span>
          <h2 className="tce-title">
            The only hiring platform you&apos;ll <span className="gradient-text">ever need</span>
          </h2>
        </div>

        {/* Category tabs */}
        <div className="tce-tabs" role="tablist" aria-label="Wi Talents categories" onKeyDown={onKeyDown}>
          {categories.map((category) => {
            const isActive = category.id === activeId;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`tce-tab-${category.id}`}
                aria-selected={isActive}
                aria-controls={`tce-panel-${category.id}`}
                tabIndex={isActive ? 0 : -1}
                ref={(el) => { tabRefs.current[category.id] = el; }}
                className={`tce-tab ${isActive ? 'active' : ''}`}
                onClick={() => setActiveId(category.id)}
              >
                <span className="tce-tab-icon">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Detail panel for the selected category */}
        <div
          className="tce-panel"
          role="tabpanel"
          id={`tce-panel-${active.id}`}
          aria-labelledby={`tce-tab-${active.id}`}
          tabIndex={0}
        >
          <div className="tce-panel-copy">
            <div className="tce-panel-heading">
              <span className="tce-panel-icon">{active.icon}</span>
              <h3 className="tce-panel-title">{active.title}</h3>
            </div>

            <p className="tce-panel-desc">{active.description}</p>

            <ul className="tce-panel-points">
              {active.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <Link to="/contact" className="tce-panel-cta">
              <span>{active.ctaLabel}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="tce-panel-visual" aria-hidden="true">
            <div className="tce-mock">
              <div className="tce-mock-bar">
                <span className="tce-mock-title">{active.mock.title}</span>
                <span className="tce-mock-action">{active.mock.action}</span>
              </div>

              <div className="tce-mock-rows">
                {active.mock.rows.map((row) => (
                  <div key={row.title} className={`tce-mock-row ${row.strong ? 'strong' : ''}`}>
                    <div className="tce-mock-row-copy">
                      <span className="tce-mock-row-title">{row.title}</span>
                      <span className="tce-mock-row-sub">{row.sub}</span>
                    </div>
                    {row.value && <span className="tce-mock-row-value">{row.value}</span>}
                  </div>
                ))}
              </div>

              <span className="tce-mock-badge">{active.mock.badge}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
