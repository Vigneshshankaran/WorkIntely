/* WorkIntel for Corporate Companies — industry solutions page.
   Copy below the hero is verbatim from the "WorkIntel Corporate Industry
   Page" document. The hero is original layout/copy inspired by
   banner-corporate-companies.svg (its navy→indigo→violet gradient, purple
   glow, and lifecycle-loop motif) — coded as markup, not the SVG file. */

import {
  Search,
  BrainCircuit,
  Users,
  CalendarClock,
  BookOpen,
  Target,
  HeartHandshake,
  ChartLine,
  Layers,
  Workflow,
  ChartColumn,
  Clock,
  TrendingDown,
  Award,
  UserPlus,
  GraduationCap,
  UsersRound
} from 'lucide-react';

export const hero = {
  eyebrow: 'Industry Solutions · Corporate Companies',
  title: ['Intelligent Talent Management, ', { accent: 'End to End' }, '.'],
  description:
    'Hiring, workforce management, learning, and performance — connected as one intelligent employee lifecycle, not four disconnected systems.',
  cta: 'Talk to an Industry Expert'
};

export const intro = {
  title: 'The Modern Employee Lifecycle Deserves One System',
  paragraphs: [
    "Most companies run HR on a patchwork: one tool for hiring, another for employee records, a third for training, a fourth for performance reviews — none of them talking to each other. Data gets re-entered at every handoff. A great hire's onboarding progress is invisible to their manager. A skill gap flagged in a performance review never makes it into a learning plan. The employee lifecycle becomes a series of disconnected events instead of one continuous story.",
    'WorkIntel connects the entire lifecycle — from the first job posting to career growth years later — as a single intelligent system, so every team works from the same source of truth.',
    'Four connected products power this: WiTalents handles recruitment and hiring; WiPeople manages your workforce and employee records; WiGrow drives learning and development; and WiPerform runs goals, feedback, and performance — each aware of what happens in the others.'
  ]
};

export const twoNeeds = {
  eyebrow: 'One Intelligent Lifecycle, Not Four Disconnected Tools',
  title: 'Every stage of the employee journey feeds directly into the next',
  items: [
    {
      id: 'attract',
      icon: UserPlus,
      title: 'Attract & Hire',
      description: 'Source, screen, and hire the right candidates against real requisitions.'
    },
    {
      id: 'onboard',
      icon: Users,
      title: 'Onboard & Manage',
      description: 'Bring new hires in smoothly, with all their records in one place from day one.'
    },
    {
      id: 'develop',
      icon: GraduationCap,
      title: 'Develop & Upskill',
      description: 'Close skill gaps with learning paths tied directly to each role.'
    },
    {
      id: 'perform',
      icon: Target,
      title: 'Perform & Grow',
      description: 'Run goals and reviews that feed straight back into development plans.'
    }
  ],
  closing:
    'A skill gap surfaced in a WiPerform review can trigger a WiGrow learning path automatically. A hired candidate in WiTalents becomes a fully-provisioned employee record in WiPeople with no re-entry. The lifecycle moves as one motion, not four separate handoffs.'
};

export const metrics = {
  eyebrow: 'The Key Parameters Talent Leaders Track',
  title: 'Live visibility into the metrics that actually drive workforce outcomes',
  items: [
    {
      id: 'time-to-hire',
      icon: Clock,
      title: 'Time-to-Hire',
      description: 'How long it takes to fill a role, from requisition to accepted offer.'
    },
    {
      id: 'attrition',
      icon: TrendingDown,
      title: 'Attrition & Retention',
      description: "Who's staying, who's leaving, and where turnover is concentrated."
    },
    {
      id: 'learning-completion',
      icon: Award,
      title: 'Learning Completion Rate',
      description: 'How much of assigned training and certification is actually completed.'
    },
    {
      id: 'review-completion',
      icon: ChartColumn,
      title: 'Review Cycle Completion',
      description: 'How many performance reviews close on time, by team and manager.'
    },
    {
      id: 'enps',
      icon: HeartHandshake,
      title: 'Employee Engagement (eNPS)',
      description: 'A running pulse on how your workforce actually feels, not just a yearly survey.'
    }
  ]
};

export const features = {
  eyebrow: 'Built for Every Stage of the Employee Lifecycle',
  items: [
    {
      id: '01',
      product: 'WiTalents',
      icon: Search,
      title: 'Talent Acquisition & ATS',
      lead: 'Everything you need to source, screen, and hire the right people, faster.',
      points: [
        'Full applicant tracking with configurable pipeline stages per role',
        'Multi-channel job posting and a branded careers site',
        'Structured interview scorecards and collaborative hiring workflows',
        'Offer management with e-signature and multi-level approval'
      ]
    },
    {
      id: '02',
      product: 'WiTalents',
      icon: BrainCircuit,
      title: 'AI-Powered Talent Intelligence',
      lead: 'AI woven into the moments that slow hiring and development teams down most.',
      points: [
        'AI candidate-job matching and automated resume screening',
        'AI-assisted skills assessments with objective, consistent scoring',
        'Smart interview scheduling — automatically matches interviewer and candidate availability',
        'Personalized learning recommendations and AI-identified skill gaps',
        'AI-assisted performance review writing and manager coaching nudges'
      ]
    },
    {
      id: '03',
      product: 'WiPeople',
      icon: Users,
      title: 'Employee Records & Onboarding',
      lead: 'A single source of truth for every employee, from day one.',
      points: [
        'Centralized employee records with secure document storage',
        'Digital onboarding checklists and structured offboarding workflows',
        'Auto-generated org chart and complete employment history',
        'Employee and manager self-service, including a mobile app'
      ]
    },
    {
      id: '04',
      product: 'WiPeople',
      icon: CalendarClock,
      title: 'Workforce & Org Management',
      lead: 'Attendance, leave, and organizational structure, fully under control.',
      points: [
        'Time tracking and configurable leave/PTO workflows',
        'Business unit, division, and location structure that mirrors how you actually operate',
        'Policy library with acknowledgment tracking and document expiry alerts',
        'Headcount and turnover reporting, live'
      ]
    },
    {
      id: '05',
      product: 'WiGrow',
      icon: BookOpen,
      title: 'Learning & Development',
      lead: 'Structured growth paths that keep pace with what your business needs next.',
      points: [
        'Course authoring, content library, and self-paced delivery',
        'Role-based learning paths with certification tracking and renewal reminders',
        'Instructor-led, virtual, and mobile learning formats',
        'Skill-gap identification tied directly to development plans'
      ]
    },
    {
      id: '06',
      product: 'WiPerform',
      icon: Target,
      title: 'Performance, Goals & Feedback',
      lead: 'Continuous performance management that drives real outcomes, not just annual paperwork.',
      points: [
        'Company-to-individual goal cascading with lightweight progress tracking',
        'Recurring check-ins and structured 1:1 meeting tools',
        '360-degree review cycles with configurable templates and calibration',
        '9-box talent grid for succession and promotion planning'
      ]
    },
    {
      id: '07',
      product: 'WiPerform',
      icon: HeartHandshake,
      title: 'Engagement & Recognition',
      lead: 'Keep a real pulse on how your people feel, not just how they perform.',
      points: [
        'Peer-to-peer and values-based recognition',
        'Pulse surveys and eNPS tracking',
        'Custom survey benchmarking over time',
        'Engagement data visible alongside performance and retention trends'
      ]
    },
    {
      id: '08',
      product: 'WiPeople',
      icon: ChartLine,
      title: 'Workforce Analytics & Reporting',
      lead: 'One reporting layer across the entire employee lifecycle, not four separate dashboards.',
      points: [
        'Headcount, attrition, and hiring funnel analytics in one view',
        'Learning completion and skill-coverage reporting',
        'Performance trend and calibration dashboards',
        'Custom report builder for HR and business leadership alike'
      ]
    }
  ]
};

/* Icon + route for each product tag on the feature cards above. */
export const productMeta = {
  WiTalents: { icon: UserPlus, to: '/WiTalents' },
  WiPeople: { icon: UsersRound, to: '/WiPeople' },
  WiGrow: { icon: GraduationCap, to: '/WiGrow' },
  WiPerform: { icon: Target, to: '/WiPerform' }
};

export const whyChoose = {
  eyebrow: 'Why Corporate Teams Choose WorkIntel',
  intro:
    "Point solutions solve one problem and create three integration headaches. WorkIntel was built as one connected system from the start — because a company's talent strategy isn't four separate initiatives, it's one continuous story about the same people.",
  points: [
    {
      id: 'one-record',
      icon: Layers,
      title: 'One employee record',
      description: 'From candidate to hire to high performer, no re-entry, no data silos.'
    },
    {
      id: 'intelligence-built-in',
      icon: BrainCircuit,
      title: 'Intelligence built in',
      description: 'AI woven across hiring, learning, and performance, not bolted on as an afterthought.'
    },
    {
      id: 'connected',
      icon: Workflow,
      title: 'Connected, not just integrated',
      description: 'A skill gap in a review can trigger a learning path automatically.'
    },
    {
      id: 'one-reporting-layer',
      icon: ChartColumn,
      title: 'One reporting layer',
      description: 'Headcount, learning, and performance data live in the same place.'
    }
  ],
  roadmapNote:
    'Growing your sales team alongside your workforce? WiLeads, our sales CRM, is also part of the Wi product family — built to sit alongside WiTalents, WiPeople, WiGrow, and WiPerform for companies that want their sales pipeline and their people platform under one roof. Ask your industry expert for details.'
};

export const closingCta = {
  title: 'See It On Your Own Team',
  description:
    'Tell us about your company and one of our industry experts will walk you through exactly how WorkIntel fits — no pricing games, just a real conversation.',
  cta: 'Talk to an Industry Expert'
};
