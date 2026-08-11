/* WorkIntel for Staffing Companies — industry solutions page.
   Copy below the hero is verbatim from the "WorkIntel Staffing Industry
   Page" document. The hero is original layout/copy inspired by
   banner-staffing-companies.svg (its navy→indigo→blue gradient, orange
   glow, and pipeline-chain motif) — coded as markup, not the SVG file. */

import {
  Search,
  BrainCircuit,
  Handshake,
  CalendarClock,
  Receipt,
  Wallet,
  Link2,
  ShieldCheck,
  ChartColumn,
  Clock,
  Percent,
  Hourglass,
  ClipboardCheck,
  Gauge,
  Layers,
  UsersRound,
  TrendingUp,
  UserPlus,
  Users
} from 'lucide-react';

export const hero = {
  eyebrow: 'Industry Solutions · Staffing Companies',
  title: ['One Platform. From First Placement to ', { accent: 'Final Payment' }, '.'],
  description:
    'Recruitment, client collaboration, timesheets, billing, collections, and accounting — built as one connected workflow, not six disconnected tools.',
  cta: 'Talk to an Industry Expert'
};

export const intro = {
  title: 'The Staffing Business Runs on More Than Recruiting',
  paragraphs: [
    'Placing a candidate is only the beginning. The real operational load in a staffing business lives after the placement — tracking hours across multiple clients, getting timesheets approved on time, raising accurate invoices, chasing collections, and reconciling it all against your accounting system. Most staffing firms run this second half of the business on a patchwork of spreadsheets, email approvals, and manual data entry between systems that were never built to talk to each other.',
    'WorkIntel closes that gap. One platform carries a placement from the moment a candidate is sourced through to the moment your invoice is paid — with every step, and every number, connected.',
    'Three connected products power this end to end: WiTalents handles recruitment, placements, and client collaboration; WiPeople manages your workforce, timesheets, and compliance; and WiBooks handles billing, invoicing, collections, and your accounting integration.'
  ]
};

export const twoNeeds = {
  eyebrow: 'One Connected Workflow, Start to Finish',
  title: 'Every stage of a staffing engagement flows into the next, automatically',
  items: [
    {
      id: 'source',
      icon: Search,
      title: 'Source & Place',
      description: 'Find, screen, and place candidates against open client requisitions.'
    },
    {
      id: 'track',
      icon: ClipboardCheck,
      title: 'Track & Approve',
      description: 'Capture timesheets, route them for client approval.'
    },
    {
      id: 'bill',
      icon: Receipt,
      title: 'Bill & Invoice',
      description: 'Convert approved hours into client invoices automatically.'
    },
    {
      id: 'collect',
      icon: Wallet,
      title: 'Collect & Reconcile',
      description: 'Track payment status and sync with your accounting system.'
    }
  ],
  closing:
    "No re-keying hours from a spreadsheet into an invoicing tool. No chasing a client manager over email to confirm a timesheet. No manual journal entries at month-end. It's one workflow, not four separate tools stitched together."
};

export const metrics = {
  eyebrow: 'The Key Parameters Staffing Leaders Track',
  title: 'Live visibility into the metrics that actually run a staffing business',
  items: [
    {
      id: 'time-to-fill',
      icon: Clock,
      title: 'Time-to-Fill',
      description: 'See exactly how long each requisition takes, broken down by client and role.'
    },
    {
      id: 'placement-margin',
      icon: Percent,
      title: 'Placement Margin',
      description: 'Bill rate vs. pay rate visibility on every placement, tracked in real time.'
    },
    {
      id: 'dso',
      icon: Hourglass,
      title: 'Days Sales Outstanding (DSO)',
      description: "Track how fast client invoices actually get paid, not just when they're sent."
    },
    {
      id: 'approval-turnaround',
      icon: ClipboardCheck,
      title: 'Timesheet Approval Turnaround',
      description: 'How long clients take to approve hours before billing can happen.'
    },
    {
      id: 'fill-ratio',
      icon: Gauge,
      title: 'Fill Ratio',
      description: 'Submission-to-placement ratio, visible by recruiter or desk.'
    }
  ]
};

export const features = {
  eyebrow: 'Built for Every Part of the Staffing Lifecycle',
  items: [
    {
      id: '01',
      product: 'WiTalents',
      icon: Search,
      title: 'Recruitment & Placement',
      lead: 'Everything you need to source, screen, and place candidates against client roles.',
      points: [
        'Full applicant tracking with client-specific job orders and requisition tracking',
        'Client account and contact management alongside your candidate pipeline',
        'Split placement and commission tracking across recruiters or partner agencies',
        'Offer management with e-signature and approval workflow'
      ]
    },
    {
      id: '02',
      product: 'WiTalents',
      icon: BrainCircuit,
      title: 'AI-Powered Hiring Intelligence',
      lead: 'AI woven into the moments that actually slow recruiters down — screening, assessment, and scheduling.',
      points: [
        'AI candidate-job matching and automated resume screening at the top of the funnel',
        'AI-assisted skills assessments with objective, consistent scoring across candidates',
        'Smart interview scheduling — automatically matches interviewer and candidate availability, no email back-and-forth',
        'AI-generated structured interview scorecards and post-interview summaries',
        'AI screening chatbot for first-touch candidate qualification, 24/7'
      ]
    },
    {
      id: '03',
      product: 'WiTalents',
      icon: Handshake,
      title: 'Client Collaboration Portal',
      lead: 'Give client HR and hiring managers direct visibility, without another email thread.',
      points: [
        'Client-side portal to view placed candidates, requisition status, and submissions',
        'Client managers approve timesheets directly in the platform — no email back-and-forth',
        'Configurable access so each client contact sees only their own placements and data',
        'Shared visibility reduces disputes at invoicing time, since approvals are already on record'
      ]
    },
    {
      id: '04',
      product: 'WiPeople',
      icon: CalendarClock,
      title: 'Timesheets & Attendance',
      lead: 'Accurate hours captured at the source, tied directly to billing from day one.',
      points: [
        'Digital timesheet capture for placed contractors and temporary staff',
        'Client-manager approval workflow built into the same record used for billing',
        'Configurable rules per client — weekly, bi-weekly, or custom billing cycles',
        'Full audit trail from hours logged to hours billed'
      ]
    },
    {
      id: '05',
      product: 'WiBooks',
      icon: Receipt,
      title: 'Automated Billing & Invoicing',
      lead: 'Approved timesheets become client invoices — no manual re-entry, no delays.',
      points: [
        'Auto-generate client invoices directly from approved timesheet data',
        'Bill-rate vs. pay-rate margin tracking on every placement',
        'Support for multiple bill rates by client, role, or engagement type',
        'Invoice templates branded to your agency, delivered directly to client contacts'
      ]
    },
    {
      id: '06',
      product: 'WiBooks',
      icon: Wallet,
      title: 'Collections & Cash Flow',
      lead: "Know exactly what's outstanding, with whom, and for how long.",
      points: [
        'Real-time view of invoice status — outstanding, partially paid, or settled',
        'Aging reports to flag overdue accounts before they become a cash-flow problem',
        'Automated payment reminders to client accounts payable contacts',
        'Cash-flow visibility that matters most in a business built on thin, fast-moving margins'
      ]
    },
    {
      id: '07',
      product: 'WiBooks',
      icon: Link2,
      title: 'Accounting System Integration',
      lead: 'Your books stay accurate without a month-end reconciliation scramble.',
      points: [
        'Integration with leading accounting platforms (QuickBooks, Zoho Books, Tally, Xero, and others)',
        'Invoices and payments sync automatically — no duplicate manual entry',
        'Clean, exportable data for your accountant or finance team at any time',
        'Reduces the month-end close from days of reconciliation to a quick review'
      ]
    },
    {
      id: '08',
      product: 'WiPeople',
      icon: ShieldCheck,
      title: 'Compliance & Contractor Payroll',
      lead: 'Stay on the right side of labor regulations across every placement.',
      points: [
        'Work authorization and credential document tracking per candidate',
        'Configurable document retention aligned to local labor law requirements',
        'Contractor/temp payroll handling distinct from your own internal staff',
        'Full audit trail on every sensitive record change'
      ]
    },
    {
      id: '09',
      product: 'WiTalents',
      icon: ChartColumn,
      title: 'Reporting & Margin Analytics',
      lead: 'The numbers that actually run a staffing business, in one place.',
      points: [
        'Placement margin reporting — bill rate vs. pay rate, by client, role, or recruiter',
        'Time-to-fill and submission-to-placement ratios',
        'Days sales outstanding (DSO) and collections performance',
        'Recruiter and desk-level performance dashboards'
      ]
    }
  ]
};

/* Icon + route for each product tag on the feature cards above. */
export const productMeta = {
  WiTalents: { icon: UserPlus, to: '/WiTalents' },
  WiPeople: { icon: UsersRound, to: '/WiPeople' },
  WiBooks: { icon: Wallet, to: '/WiBooks' }
};

export const whyChoose = {
  eyebrow: 'Why Staffing Firms Choose WorkIntel',
  intro:
    "Most ATS platforms stop at the placement. Most accounting tools have never heard of a timesheet. WorkIntel was built specifically for staffing — where recruiting, client management, and billing aren't separate departments, they're the same business.",
  points: [
    {
      id: 'one-system',
      icon: Layers,
      title: 'One system of record',
      description: 'From candidate sourced to invoice collected, nothing falls through the cracks between tools.'
    },
    {
      id: 'sourcing-pool',
      icon: Users,
      title: 'Built-in candidate sourcing pool',
      description: 'A growing base of registered candidates, in addition to your own sourcing.'
    },
    {
      id: 'client-facing',
      icon: Handshake,
      title: 'Client-facing collaboration',
      description: 'Clients approve timesheets directly, reducing invoice disputes.'
    },
    {
      id: 'margin-visibility',
      icon: TrendingUp,
      title: 'Margin visibility from day one',
      description: 'Know your true profitability on every placement, not just revenue.'
    }
  ]
};

export const closingCta = {
  title: 'See It On Your Own Business',
  description:
    'Tell us about your staffing business and one of our industry experts will walk you through exactly how WorkIntel fits — no pricing games, just a real conversation.',
  cta: 'Talk to an Industry Expert'
};
