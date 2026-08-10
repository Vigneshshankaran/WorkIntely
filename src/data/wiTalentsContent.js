/* WiTalents page content below the hero, taken verbatim from the
   "WiTalents Website Content" document. */

export const wiTalentsDetail = {
  /* Laid over the hero photograph — the wording from the brand banner. */
  overlay: {
    kicker: 'Hiring, minus the guesswork',
    title: 'WiTalents',
    tagline: 'Matching people to work — intelligently, transparently.'
  },

  overview: {
    eyebrow: 'Product Overview',
    title: 'Staffing software that keeps hiring human',
    paragraphs: [
      'WiTalents is a lightweight staffing and recruitment platform built around the parts of hiring that actually move a placement forward: matching the right candidate to the right role, keeping everyone posted without a chain of emails, and getting from application to offer without the process getting lost. It deliberately leaves out invoicing, timesheets, and contract paperwork — so the experience stays fast, focused, and genuinely pleasant to use.',
      'It’s built for three audiences at once — the Staffing Company running requisitions across clients, the Corporate hiring team reviewing candidates for their own roles, and every Candidate who just wants a clear, honest view of where they stand — each with a view shaped around what they actually need to do.'
    ]
  },

  roles: {
    eyebrow: 'Audience',
    title: 'Built around three everyday roles',
    items: [
      {
        id: 'staffing-company',
        name: 'Staffing Company',
        tagline: 'Runs the pipeline, end to end',
        points: [
          'One dashboard for every open requisition across all client accounts',
          'AI-ranked shortlists instead of manually screening every resume',
          'Track placement pipeline health and spot at-risk roles before deadlines slip'
        ]
      },
      {
        id: 'corporate',
        name: 'Corporate',
        tagline: 'Hires for their team, not the system',
        points: [
          'Post a role once and receive a ranked, pre-screened shortlist',
          'Review, approve, or reject candidates with one click and a note',
          'See hiring progress live, without emailing the agency for updates'
        ]
      },
      {
        id: 'candidate',
        name: 'Candidate',
        tagline: 'Self-serve, without the guessing',
        points: [
          'One profile and document set reused across every application',
          'A transparent status timeline instead of silence after applying',
          'Direct messages with the recruiter — no chasing an inbox'
        ]
      }
    ]
  },

  intelligence: {
    eyebrow: 'Intelligent Features',
    title: 'Five features that do the thinking for you',
    items: [
      {
        id: '01',
        title: 'Smart match',
        description:
          "Ranks every candidate against a role's actual requirements — skills, experience, and fit — instead of leaving recruiters to sort resumes one by one."
      },
      {
        id: '02',
        title: 'Auto-shortlist alerts',
        description:
          "Notifies the staffing team the moment a strong-fit candidate applies, so great candidates aren't found three days late."
      },
      {
        id: '03',
        title: 'Interview scheduling assistant',
        description:
          'Finds overlapping availability between corporate and candidate automatically, instead of a five-email back-and-forth.'
      },
      {
        id: '04',
        title: 'Skill gap insights',
        description:
          "Flags the gap between a candidate's profile and a role's requirements, so recruiters know exactly what to probe for or coach on."
      },
      {
        id: '05',
        title: 'Pipeline health score',
        description:
          'Predicts which requisitions are at risk of missing their fill date, so staffing teams can act before a client has to ask.'
      }
    ]
  },

  efficiency: {
    eyebrow: 'Benefits',
    title: 'A few features built purely for process improvement',
    items: [
      {
        id: 'profile',
        title: 'Centralized candidate profile',
        description:
          'One profile — resume, certifications, ID — reused across every application instead of re-uploaded each time.'
      },
      {
        id: 'intake',
        title: 'Unified requisition intake',
        description:
          'A single structured intake form per role replaces the email chain of requirements, edits, and re-explaining.'
      },
      {
        id: 'timeline',
        title: 'Shared status timeline',
        description:
          "Every application shows its stage to both corporate and candidate, cutting down the 'any update?' emails."
      },
      {
        id: 'feedback',
        title: 'Feedback loop',
        description:
          'Structured rejection feedback from corporates feeds straight back into future shortlists, so matches keep improving.'
      }
    ]
  },

  closing: 'WiTalents — hiring, without losing the human thread.'
};
