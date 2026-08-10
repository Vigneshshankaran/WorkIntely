/* Content for the Wi product pages. Each entry drives one route through
   ProductPage; the layout is fixed, only this data changes.

   Wi Talents is complete. The other five carry `TODO —` placeholders: their
   taglines are the real ones from the product grid, everything else is waiting
   on copy. Search this file for "TODO" to find every slot left to fill. */

import {
  ListChecks,
  ScanSearch,
  Headphones,
  ChartLine,
  SquareCheckBig,
  Star,
  Users,
  Briefcase,
  User,
  Sparkles,
  UserPlus,
  GraduationCap,
  Target,
  TrendingUp,
  Wallet,
  BrainCircuit,
  ShieldCheck,
  Layers
} from 'lucide-react';
/* Photography comes from Unsplash's CDN — free to hotlink, and one distinct
   shot per product so no image repeats across the site. Swap any `unsplash(id)`
   for a local import once real product artwork exists. */
const unsplash = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=75`;

const IMAGES = {
  talents: unsplash('photo-1517048676732-d65bc937f952'),
  people: unsplash('photo-1552664730-d307ca884978'),
  grow: unsplash('photo-1524178232363-1fb2b075b655'),
  perform: unsplash('photo-1454165804606-c3d57bc86b40'),
  sales: unsplash('photo-1600880292203-757bb62b4baf'),
  books: unsplash('photo-1554224155-6726b3ff858f'),
  unified: unsplash('photo-1551288049-bebda4e38f71'),
  platform: unsplash('photo-1522071820081-009f0129c71c')
};

export { IMAGES };

/* Three placeholder audiences, reused until each product names its own. */
const placeholderAudiences = [
  { id: 'audience-1', icon: Users, title: 'TODO — audience one', description: 'TODO — what this group gets out of the product.' },
  { id: 'audience-2', icon: Briefcase, title: 'TODO — audience two', description: 'TODO — what this group gets out of the product.' },
  { id: 'audience-3', icon: User, title: 'TODO — audience three', description: 'TODO — what this group gets out of the product.' }
];

const placeholderCapabilities = [
  { id: 'capability-1', icon: Sparkles, title: 'TODO — capability one', description: 'TODO — a paragraph on what this capability does and why it matters.' },
  { id: 'capability-2', icon: Sparkles, title: 'TODO — capability two', description: 'TODO — a paragraph on what this capability does and why it matters.', featured: true },
  { id: 'capability-3', icon: Sparkles, title: 'TODO — capability three', description: 'TODO — a paragraph on what this capability does and why it matters.' }
];

const placeholderSteps = [
  { id: '01', title: 'TODO — step one', description: 'TODO — what happens at this stage.' },
  { id: '02', title: 'TODO — step two', description: 'TODO — what happens at this stage.' },
  { id: '03', title: 'TODO — step three', description: 'TODO — what happens at this stage.' },
  { id: '04', title: 'TODO — step four', description: 'TODO — what happens at this stage.' }
];

/* Title strings are arrays: plain strings render as-is, {accent} renders in the
   brand colour. Keeps the accent phrase in the data instead of the markup. */
const draftProduct = (name, icon, tagline, image, imageAlt) => ({
  name,
  eyebrow: name,
  icon,
  tagline,
  platform: {
    title: [{ accent: name }, ' — TODO: headline for this product.'],
    description: tagline,
    image,
    imageAlt
  },
  audiences: placeholderAudiences,
  capabilities: placeholderCapabilities,
  process: {
    title: ['TODO: process headline for ', { accent: name }],
    description: 'TODO — a sentence on how the workflow runs end to end.',
    steps: placeholderSteps
  }
});

export const productPages = {
  WiTalents: {
    name: 'Wi Talents',
    eyebrow: 'Wi Talents',
    icon: UserPlus,
    tagline: 'Attract and hire top talent faster with AI-assisted recruiting pipelines.',
    platform: {
      title: ['A ', { accent: 'Smarter Hiring' }, ' Platform — Personalized for Every User.'],
      description:
        'Wi Talents is an AI-powered hiring platform that automates CV screening, interviews, and recruiter productivity. We help agencies and HR teams hire faster, smarter, and more efficiently with next-gen agentic AI.',
      image: IMAGES.talents,
      imageAlt: 'A hiring panel interviewing a candidate across a meeting table'
    },
    audiences: [
      { id: 'agencies', icon: Users, title: 'Recruiting Agencies', description: 'Manage multiple clients, submit candidates faster, and boost revenue.' },
      { id: 'companies', icon: Briefcase, title: 'Companies / HR Teams', description: 'Use AI-powered pre-screening, collaborate easily, and reduce time-to-hire.' },
      { id: 'candidates', icon: User, title: 'Candidates', description: 'Apply easily, get unbiased screening, and receive interview calls sooner.' }
    ],
    capabilities: [
      {
        id: 'ats',
        icon: ListChecks,
        title: 'Applicant Tracking Systems (ATS)',
        description:
          'An Applicant Tracking System is now the central hub of recruitment. It keeps candidate data organised, tracks progress at every stage, and ensures no one slips through the cracks. Many systems also integrate with other tools, making communication and scheduling seamless.'
      },
      {
        id: 'screening',
        icon: ScanSearch,
        title: 'AI-powered Screening',
        description:
          'Manual resume reviews can be slow and biased. AI tools can quickly shortlist candidates based on skills and experience, freeing recruiters to focus on meaningful conversations and cultural fit rather than admin work.'
      },
      {
        id: 'chatbots',
        icon: Headphones,
        title: 'Chatbots & Virtual Assistants',
        description:
          'Candidates today expect instant responses. Chatbots can answer common questions, schedule interviews, or provide status updates 24/7, keeping candidates informed and engaged without extra workload for recruiters.',
        featured: true
      },
      {
        id: 'analytics',
        icon: ChartLine,
        title: 'Predictive Analytics',
        description:
          'With the right data, recruiters can forecast hiring needs, identify where candidates are dropping off, and measure which sourcing channels bring the best results. This helps refine strategies and reduces wasted effort.'
      },
      {
        id: 'onboarding',
        icon: SquareCheckBig,
        title: 'Onboarding Platforms',
        description:
          'The journey doesn’t end when an offer is accepted. Digital onboarding tools make paperwork effortless, provide early access to training resources, and help new hires connect with their teams before day one - building confidence and commitment.'
      },
      {
        id: 'personalisation',
        icon: Star,
        title: 'Personalised Candidate Experiences',
        description:
          'AI-driven platforms now enable recruiters to send tailored updates, job recommendations, and interview reminders. This personalisation shows candidates they’re more than just an application ID, building stronger connections from the start.'
      }
    ],
    process: {
      title: ['Streamlining success through proven ', { accent: 'process' }],
      description:
        'A clear, intelligent workflow that guides every recruiter from candidate applied to final selection powered by automation, AI, and recruiter oversight.',
      steps: [
        { id: '01', title: 'Job Created', description: 'Role is defined and published with key requirements.' },
        { id: '02', title: 'Candidate Applies', description: 'Applicants submit their details directly through your platform.' },
        { id: '03', title: 'AI Screening', description: 'AI evaluates CVs, skill assessment, and conducts automated voice interviews.' },
        { id: '04', title: 'Shortlist Generated', description: 'AI compiles a ranked shortlist with recommendations based on AI screening.' },
        { id: '05', title: 'Recruiter Review', description: 'Recruiters validate the results, add notes, and finalize the candidate list.' },
        { id: '06', title: 'Client Submission', description: 'Top candidates are shared with the client, final interviews are completed, and successful hires proceed to offer and onboarding.' }
      ]
    }
  },

  /* Slider content from the WiPeople website-content document. */
  WiPeople: {
    name: 'Wi People',
    eyebrow: 'Wi People',
    icon: Users,
    tagline: 'One centralized system of record for every employee, everywhere.',
    platform: {
      title: ["HR software for people who'd rather be ", { accent: 'doing their jobs' }],
      description:
        'WiPeople is a lightweight HR system built around the parts of HR your team actually opens every week: who’s on the team, where the documents live, what’s due during onboarding, what’s been announced, and how to get a real answer fast.',
      image: IMAGES.people,
      imageAlt: 'Colleagues collaborating around a shared workspace'
    },
    audiences: [
      { id: 'hr-manager', icon: Users, title: 'HR Manager', description: 'Runs the system, end to end.' },
      { id: 'people-manager', icon: Briefcase, title: 'People Manager', description: 'Leads a team, not the system.' },
      { id: 'employee', icon: User, title: 'Employee', description: 'Self-serve, without the hunting.' }
    ],
    capabilities: [
      {
        id: 'ask-hr',
        icon: BrainCircuit,
        title: 'Ask HR',
        description:
          'A built-in assistant that answers policy and process questions instantly, in plain language — pulling from your actual company documents instead of sending employees searching through folders.'
      },
      {
        id: 'leave-conflicts',
        icon: ShieldCheck,
        title: 'Leave conflict detection',
        description:
          "Automatically flags when a leave request overlaps with a teammate's approved time off or a key deadline, before a manager has to notice it manually."
      },
      {
        id: 'onboarding-paths',
        icon: ListChecks,
        title: 'Smart onboarding paths',
        description:
          'New-hire checklists that adapt automatically by role and department, assigning the right tasks, documents, and people — instead of one generic checklist for everyone.',
        featured: true
      },
      {
        id: 'org-chart',
        icon: Layers,
        title: 'Living org chart',
        description:
          'The org chart updates itself the moment a role, manager, or team changes — no one has to remember to redraw it.'
      },
      {
        id: 'expiry-alerts',
        icon: Target,
        title: 'Document expiry alerts',
        description:
          'Contracts, certifications, and compliance documents are watched automatically, with reminders sent well before something lapses.'
      }
    ]
    /* No process flow in the source document — the slider skips that slide. */
  },

  WiGrow: draftProduct(
    'Wi Grow',
    GraduationCap,
    'Personalized learning journeys that build critical skills and expertise.',
    IMAGES.grow,
    'A mentor walking a colleague through a learning session'
  ),

  WiPerform: draftProduct(
    'Wi Perform',
    Target,
    'Continuous feedback, goals, and automated performance reviews.',
    IMAGES.perform,
    'A team reviewing performance charts together'
  ),

  WiSales: draftProduct(
    'Wi Sales',
    TrendingUp,
    'Accelerate revenue growth with AI-powered sales pipeline optimization and training.',
    IMAGES.sales,
    'Two professionals shaking hands after closing a deal'
  ),

  WiBooks: draftProduct(
    'Wi Books',
    Wallet,
    'Optimize financial planning, accounting, and expense operations.',
    IMAGES.books,
    'Financial statements and a calculator on a desk'
  )
};
