/* WorkIntel for Educational Institutes — industry solutions page.
   Copy below the hero is verbatim from the "WorkIntel Institutes Industry
   Page" document. The hero itself is original layout/copy inspired by the
   banner-educational-institutes.svg reference (gradient, eyebrow, headline,
   green CTA) — coded as markup, not the SVG file. */

import {
  ClipboardCheck,
  GraduationCap,
  ClipboardList,
  UserPlus,
  Users,
  Target,
  Clock,
  TrendingDown,
  Award,
  CircleCheckBig,
  ChartColumn,
  Search,
  BrainCircuit,
  CalendarClock,
  FileCheck,
  Building2,
  ShieldCheck,
  BookOpen,
  Layers,
  UsersRound,
  ChartLine
} from 'lucide-react';

export const hero = {
  eyebrow: 'Industry Solutions · Educational Institutes',
  title: [
    'Beyond HR — Powering Your ',
    { accent: 'People' },
    ' and Your ',
    { accent: 'Assessments' },
    '.'
  ],
  description:
    'Faculty hiring, staff records, professional development, and performance — plus an assessment engine flexible enough to run your internal tests, not just employee training.',
  cta: 'Talk to an Industry Expert'
};

export const intro = {
  title: 'An Institute Runs on More Than Its Org Chart',
  paragraphs: [
    'Educational institutes carry a dual workload most corporate HR tools were never built for: managing faculty and administrative staff like any employer, while also running structured testing and assessment as a core, everyday activity. Most HR software ignores the second half entirely — leaving institutes to run internal tests, mock exams, and certification assessments on a completely separate, disconnected tool.',
    'WorkIntel handles both. Four connected products cover the employer side of your institute — hiring, staff records, professional development, and performance — and the same assessment engine that powers faculty training can extend to internal tests and student assessments as well.'
  ]
};

export const twoNeeds = {
  eyebrow: 'One Platform, Two Real Needs',
  title: 'WorkIntel covers the employer relationship and the assessment activity that makes an institute run',
  items: [
    {
      id: 'hire',
      icon: UserPlus,
      title: 'Hire & Onboard',
      description: 'Recruit faculty and administrative staff, with all records in one place from day one.'
    },
    {
      id: 'develop',
      icon: GraduationCap,
      title: 'Develop & Certify',
      description: 'Run professional development for faculty, with certification tracking built in.'
    },
    {
      id: 'assess',
      icon: ClipboardCheck,
      title: 'Assess & Test',
      description: 'Use the same assessment engine for internal tests, mock exams, or certification prep.'
    },
    {
      id: 'manage',
      icon: ClipboardList,
      title: 'Manage & Review',
      description: 'Attendance, leave, compliance, and performance reviews for your entire staff.'
    }
  ],
  closing:
    "The assessment infrastructure built for faculty upskilling — quizzes, scored assessments, certification tracking — doesn't stop at employee training. The same engine can be configured to run internal tests for students or trainees, giving your institute one system instead of a separate exam tool bolted on the side."
};

export const metrics = {
  eyebrow: 'The Key Parameters Institutes Track',
  title: 'Live visibility into what actually runs an institute',
  items: [
    {
      id: 'time-to-hire',
      icon: Clock,
      title: 'Faculty Time-to-Hire',
      description: 'How long it takes to fill a teaching or staff role, start to accepted offer.'
    },
    {
      id: 'retention',
      icon: TrendingDown,
      title: 'Faculty Retention',
      description: "Who's staying, who's leaving, and where turnover is concentrated by department."
    },
    {
      id: 'pd-completion',
      icon: Award,
      title: 'Professional Development Completion',
      description: 'How much faculty training and certification is actually completed.'
    },
    {
      id: 'assessment-completion',
      icon: CircleCheckBig,
      title: 'Internal Assessment Completion',
      description: 'How many internal tests or assessments are completed and scored on time.'
    },
    {
      id: 'review-completion',
      icon: ChartColumn,
      title: 'Staff Review Cycle Completion',
      description: 'How many performance reviews close on time, by department and manager.'
    }
  ]
};

export const features = {
  eyebrow: 'Built for Every Part of Running an Institute',
  items: [
    {
      id: '01',
      product: 'WiTalents',
      icon: Search,
      title: 'Faculty & Staff Recruitment',
      lead: 'Source, screen, and hire faculty and administrative staff, faster.',
      points: [
        'Full applicant tracking with configurable pipeline stages per role',
        'Multi-channel job posting and a branded careers site',
        'Structured interview scorecards for consistent faculty evaluation',
        'Offer management with e-signature and multi-level approval'
      ]
    },
    {
      id: '02',
      product: 'WiTalents',
      icon: BrainCircuit,
      title: 'AI-Powered Hiring Intelligence',
      lead: 'AI woven into the moments that slow academic hiring down most.',
      points: [
        'AI candidate-role matching and automated resume screening',
        'AI-assisted skills and subject-matter assessments for faculty candidates',
        'Smart interview scheduling — automatically matches panel and candidate availability',
        'AI-generated structured interview scorecards and summaries'
      ]
    },
    {
      id: '03',
      product: 'WiPeople',
      icon: Users,
      title: 'Faculty & Staff Records',
      lead: 'A single source of truth for everyone on your payroll, from day one.',
      points: [
        'Centralized records with secure document storage for every faculty and staff member',
        'Digital onboarding checklists and structured offboarding workflows',
        'Auto-generated org chart across departments and campuses',
        'Employee and manager self-service, including a mobile app'
      ]
    },
    {
      id: '04',
      product: 'WiPeople',
      icon: CalendarClock,
      title: 'Attendance, Leave & Compliance',
      lead: 'Attendance, leave, and departmental structure, fully under control.',
      points: [
        'Time tracking and configurable leave/PTO workflows for academic calendars',
        'Department, campus, and location structure that mirrors how you actually operate',
        'Policy library with acknowledgment tracking and document expiry alerts',
        'Headcount and turnover reporting, live'
      ]
    },
    {
      id: '05',
      product: 'WiGrow',
      icon: BookOpen,
      title: 'Faculty Professional Development',
      lead: 'Structured upskilling that keeps faculty credentials and capability current.',
      points: [
        'Course authoring, content library, and self-paced delivery',
        'Role-based learning paths with certification tracking and renewal reminders',
        'Instructor-led, virtual, and mobile learning formats',
        'Skill-gap identification tied directly to development plans'
      ]
    },
    {
      id: '06',
      product: 'WiGrow',
      icon: FileCheck,
      title: 'Internal Assessments & Testing',
      lead: 'The same assessment engine, extended beyond employee training to run your internal tests.',
      points: [
        'Create and administer internal tests, quizzes, and mock exams using the same assessment engine',
        'Auto-scored objective assessments with configurable pass thresholds',
        'Certification tracking for internal certifications or professional qualification prep',
        'Knowledge-gap identification across a cohort — student, trainee, or staff',
        'Well suited to semester internal assessments, entrance test prep, or certification coaching'
      ]
    },
    {
      id: '07',
      product: 'WiPerform',
      icon: Target,
      title: 'Performance, Goals & Feedback',
      lead: 'Continuous performance management for faculty and administrative staff alike.',
      points: [
        'Department-to-individual goal cascading with lightweight progress tracking',
        'Recurring check-ins and structured 1:1 meeting tools',
        '360-degree review cycles with configurable templates and calibration',
        '9-box talent grid for succession and promotion planning'
      ]
    },
    {
      id: '08',
      product: 'WiPeople',
      icon: ChartLine,
      title: 'Institute-Wide Analytics & Reporting',
      lead: 'One reporting layer across hiring, staff, development, and assessments.',
      points: [
        'Headcount, attrition, and hiring funnel analytics in one view',
        'Faculty development completion and skill-coverage reporting',
        'Internal assessment and test performance reporting',
        'Custom report builder for academic and administrative leadership alike'
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
  eyebrow: 'Why Institutes Choose WorkIntel',
  intro:
    "Most HR platforms weren't built with testing and assessment in mind. Most exam tools have never heard of a faculty performance review. WorkIntel was built to cover both sides of running an institute, in one connected system.",
  points: [
    {
      id: 'one-system',
      icon: Layers,
      title: 'One system of record',
      description: 'Faculty hiring, staff records, and assessments, without a separate exam tool.'
    },
    {
      id: 'double-duty',
      icon: FileCheck,
      title: 'Assessment infrastructure that does double duty',
      description: 'Built for faculty training, flexible enough for internal tests.'
    },
    {
      id: 'campus-aware',
      icon: Building2,
      title: 'Department and campus-aware',
      description: 'Structure that mirrors how institutes actually organize.'
    },
    {
      id: 'compliance',
      icon: ShieldCheck,
      title: 'Compliance-ready',
      description: 'Document retention and credential tracking built in from day one.'
    }
  ],
  roadmapNote:
    "Looking for full student and academic administration — admissions, student records, timetables, and fee management? WiSchools, a dedicated product for education administration, is on our roadmap as part of the Wi product family. Ask your industry expert what's coming."
};

export const closingCta = {
  title: 'See It On Your Own Institute',
  description:
    "Tell us about your institute and one of our industry experts will walk you through exactly how WorkIntel fits — no pricing games, just a real conversation.",
  cta: 'Talk to an Industry Expert'
};
