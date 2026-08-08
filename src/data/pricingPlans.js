/* Pricing content.

   WiTalents is the full tier breakdown supplied in the pricing document. The
   other three products carry the same three-tier shape with `TODO —` capability
   lists: the document only covered WiTalents and noted WiPeople was in a
   separate spreadsheet, which is not in the repo. Search for "TODO" to find
   every list still awaiting copy. */

export const SALES_EMAIL = 'sales@workintely.com';
export const GENERAL_EMAIL = 'connect@workintely.com';

const draftTiers = (product) => [
  {
    id: 'basic',
    name: 'Basic',
    summary: `TODO — who the Basic ${product} plan is for.`,
    features: ['TODO — capability one', 'TODO — capability two', 'TODO — capability three']
  },
  {
    id: 'standard',
    name: 'Standard',
    summary: `TODO — who the Standard ${product} plan is for.`,
    features: [`Everything in Basic`, 'TODO — capability one', 'TODO — capability two']
  },
  {
    id: 'premium',
    name: 'Premium',
    summary: `TODO — who the Premium ${product} plan is for.`,
    badge: 'Most Intelligent',
    features: [`Everything in Standard`, 'TODO — capability one', 'TODO — capability two']
  }
];

export const pricingProducts = [
  {
    id: 'WiTalents',
    name: 'WiTalents',
    strapline: 'Applicant tracking, built for staffing & corporate hiring',
    tiers: [
      {
        id: 'basic',
        name: 'Basic',
        summary: 'Perfect for startups and small businesses beginning their hiring journey.',
        description:
          'Designed for organizations looking for a modern Applicant Tracking System that simplifies recruitment while keeping implementation quick and affordable.',
        features: [
          'Job Requisition Management',
          'Career Portal',
          'Candidate Database',
          'Resume Management',
          'Applicant Tracking',
          'Interview Scheduling',
          'Email Notifications',
          'Standard Reports',
          'Basic User Roles',
          'Secure Cloud Hosting'
        ]
      },
      {
        id: 'standard',
        name: 'Standard',
        summary: 'Built for growing organizations that need greater collaboration and automation.',
        description:
          'As hiring volumes increase, recruitment teams require better workflows, integrations, approvals, and reporting. The Standard plan introduces advanced capabilities that help recruiters work more efficiently while providing greater visibility for hiring managers.',
        features: [
          'Everything in Basic',
          'Multi-Level Hiring Workflow',
          'Recruitment Pipeline Management',
          'Recruitment Dashboard',
          'Interview Feedback Management',
          'Hiring Manager Collaboration',
          'Candidate Communication Templates',
          'Document Management',
          'Recruitment Analytics',
          'Advanced Reporting',
          'Configurable Workflows'
        ]
      },
      {
        id: 'premium',
        name: 'Premium',
        badge: 'Most Intelligent',
        summary: 'Designed for staffing companies and enterprises managing recruitment at scale.',
        description:
          'Premium combines advanced automation, Artificial Intelligence, enterprise security, integrations, and configurable workflows to deliver a world-class recruitment experience. Organizations can streamline complex hiring operations while improving recruiter productivity and candidate engagement.',
        features: [
          'Everything in Standard',
          'AI Resume Matching',
          'AI Candidate Ranking',
          'AI Assessments',
          'AI Voice & Video Interview Support',
          'Talent Pool Management',
          'Client Recruitment Portal',
          'Multi-Company Support',
          'Advanced Security',
          'API Integrations',
          'Enterprise Reporting',
          'Custom Workflow Configuration',
          'Priority Support',
          'Dedicated Customer Success'
        ]
      }
    ]
  },
  {
    id: 'WiPeople',
    name: 'WiPeople',
    strapline: 'TODO — one line on what WiPeople covers',
    tiers: draftTiers('WiPeople')
  }
  /* WiGrow and WiPerform are out of the tab row until their tiers are written —
     add them back here with draftTiers('WiGrow') / draftTiers('WiPerform'). */
];

/* The enquiry form offers the whole suite, including products that have no
   published tiers yet, so interest in them still reaches sales. */
export const enquiryProducts = [
  'WiTalents - Talent Management',
  'WiPeople - HR Management',
  'WiGrow',
  'WiPerform'
];

/* "Simple. Transparent. Scalable." — the three pricing principles. */
export const pricingPrinciples = [
  {
    id: 'no-hidden-complexity',
    title: 'No Hidden Complexity',
    description: 'Clear plans with capabilities aligned to your business needs.'
  },
  {
    id: 'scale-at-your-pace',
    title: 'Scale at Your Pace',
    description: 'Start with what you need today and upgrade as your organization grows.'
  },
  {
    id: 'long-term-success',
    title: 'Built for Long-Term Success',
    description:
      'We believe in building lasting customer partnerships through flexible solutions, continuous innovation, and responsive support.'
  }
];

export const pricingFaqs = [
  {
    id: 'upgrade',
    question: 'Can I upgrade my plan later?',
    answer:
      'Yes. As your hiring needs grow, you can seamlessly move to a higher plan with additional capabilities.'
  },
  {
    id: 'implementation',
    question: 'Is implementation included?',
    answer:
      'Implementation options vary based on the selected plan and your business requirements. Our team will guide you through the onboarding process.'
  },
  {
    id: 'demo',
    question: 'Do you offer product demonstrations?',
    answer:
      'Absolutely. We provide personalized demonstrations tailored to your recruitment process and business goals.'
  },
  {
    id: 'customization',
    question: 'Can WiTalents be customized?',
    answer:
      'Yes. Depending on your selected plan, workflows, forms, approval processes, branding, and integrations can be configured to meet your organizational needs.'
  },
  {
    id: 'security',
    question: 'Is my data secure?',
    answer:
      'Security is built into every WiTalents deployment. We use modern cloud infrastructure and follow industry best practices to protect your data.'
  }
];

export const teamSizes = [
  '1–10 employees',
  '11–50 employees',
  '51–200 employees',
  '201–500 employees',
  '500+ employees'
];
