/* About page copy, taken verbatim from the "About Us" document. */

import {
  Search,
  Workflow,
  ChartLine,
  Target,
  Lightbulb,
  BrainCircuit,
  TrendingUp,
  ShieldCheck,
  Layers,
  Users,
  GraduationCap,
  Wallet,
  UserPlus,
  Handshake
} from 'lucide-react';

export const missionOutcomes = [
  'Simplify business processes',
  'Automate routine operations',
  'Accelerate hiring and workforce management',
  'Improve collaboration',
  'Enhance customer relationships',
  'Make faster, data-driven decisions',
  'Increase operational efficiency',
  'Drive continuous business growth'
];

export const differentiators = [
  {
    id: 'business-first',
    icon: Target,
    title: 'Business First. Technology Next.',
    lead: 'Technology should solve business problems — not create technical complexity.',
    body: 'Every WorkIntel product is designed around real operational workflows, ensuring users experience intuitive, efficient, and productive software from day one.'
  },
  {
    id: 'practical-ai',
    icon: BrainCircuit,
    title: 'AI That Creates Real Business Value',
    lead: 'Artificial Intelligence is not a feature — it is an integral part of how modern organizations operate.',
    body: 'Our vision is practical AI — technology that delivers measurable business outcomes.'
  },
  {
    id: 'one-platform',
    icon: Layers,
    title: 'One Platform. Multiple Business Solutions.',
    lead: "Organizations shouldn't have to invest in disconnected software for every department.",
    body: 'WorkIntel offers a unified ecosystem where applications work together seamlessly, sharing data securely while providing a consistent user experience.'
  }
];

/* What AI does for organizations, per the "AI That Creates Real Business Value" section. */
export const aiOutcomes = [
  { id: 'talent', icon: Search, label: 'Identify the right talent faster' },
  { id: 'automate', icon: Workflow, label: 'Automate repetitive administrative work' },
  { id: 'trends', icon: ChartLine, label: 'Analyze business trends' },
  { id: 'accuracy', icon: ShieldCheck, label: 'Improve operational accuracy' },
  { id: 'insights', icon: Lightbulb, label: 'Generate actionable insights' },
  { id: 'decisions', icon: Target, label: 'Support informed decision-making' },
  { id: 'productivity', icon: TrendingUp, label: 'Increase productivity across departments' }
];

export const productPortfolio = [
  {
    id: 'WiPlatform',
    name: 'WiPlatform',
    icon: Layers,
    description:
      'The secure digital foundation providing identity management, authentication, authorization, administration, configuration, shared services, and platform capabilities.'
  },
  {
    id: 'WiTalents',
    name: 'WiTalents',
    icon: UserPlus,
    to: '/WiTalents',
    description:
      'An AI-powered Applicant Tracking System that helps organizations attract, engage, evaluate, and hire exceptional talent efficiently.'
  },
  {
    id: 'WiPeople',
    name: 'WiPeople',
    icon: Users,
    to: '/WiPeople',
    description:
      'A centralized employee information platform designed to manage workforce data throughout the employee lifecycle.'
  },
  {
    id: 'WiGrow',
    name: 'WiGrow',
    icon: GraduationCap,
    to: '/WiGrow',
    description:
      'A learning and development platform focused on continuous skill enhancement and professional growth.'
  },
  {
    id: 'WiPerform',
    name: 'WiPerform',
    icon: Target,
    to: '/WiPerform',
    description:
      'A performance management solution that aligns employee goals with organizational success.'
  },
  {
    id: 'WiSales',
    name: 'WiSales',
    icon: Handshake,
    to: '/WiSales',
    description:
      'A customer relationship management platform that enables sales teams to build stronger customer connections and accelerate business growth.'
  },
  {
    id: 'WiBooks',
    name: 'WiBooks',
    icon: Wallet,
    to: '/WiBooks',
    description:
      'An intelligent finance and accounting solution that simplifies financial operations, improves visibility, and supports informed financial decisions.'
  }
];

/* "Built Around People" — the roles WorkIntel exists to serve. */
export const peopleRoles = [
  'Recruiters discovering exceptional candidates.',
  'Managers developing future leaders.',
  'Sales teams building lasting customer relationships.',
  'Finance professionals ensuring business stability.',
  'Executives making strategic decisions.'
];
