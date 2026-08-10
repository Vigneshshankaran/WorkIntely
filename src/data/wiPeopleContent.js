/* WiPeople page content below the hero, taken verbatim from the
   "WiPeople Website Content" document. The document's image is deliberately
   not used — the hero keeps its photograph. */

export const wiPeopleDetail = {
  /* Laid over the hero photograph. Wording from the document's closing line and
     the product tagline. */
  overlay: {
    title: 'WiPeople',
    tagline: 'One centralized system of record for every employee, everywhere.'
  },

  overview: {
    eyebrow: 'Product Overview',
    title: "HR software for people who'd rather be doing their jobs",
    paragraphs: [
      'WiPeople is a lightweight HR system built around the parts of HR your team actually opens every week: who’s on the team, where the documents live, what’s due during onboarding, what’s been announced, and how to get a real answer fast. It deliberately leaves out payroll, benefits administration, and time-and-attendance — so the experience stays fast, focused, and genuinely pleasant to use.',
      'It’s built for three audiences at once — the HR Manager running the system, the People Manager overseeing a team, and every Employee who just wants quick, self-serve access to their own information — each with a view shaped around what they actually need to do.'
    ]
  },

  roles: {
    eyebrow: 'Designed For',
    title: 'Built around three everyday roles',
    items: [
      {
        id: 'hr-manager',
        name: 'HR Manager',
        tagline: 'Runs the system, end to end',
        points: [
          'One inbox for approvals, tickets, and onboarding tasks that need attention',
          "Add or update employee records and submit leave on an employee's behalf",
          'Build the org chart, compose announcements, and track headcount & attrition at a glance'
        ]
      },
      {
        id: 'people-manager',
        name: 'People Manager',
        tagline: 'Leads a team, not the system',
        points: [
          "See the team's org chart and who reports to whom, always current",
          "Approve or track direct reports' leave without chasing emails",
          "Follow each new hire's onboarding progress at a glance"
        ]
      },
      {
        id: 'employee',
        name: 'Employee',
        tagline: 'Self-serve, without the hunting',
        points: [
          'Every policy and personal document in one searchable place',
          'A clear onboarding checklist instead of a scattered email trail',
          'Ask HR directly and get an answer without opening a ticket queue'
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
        title: 'Ask HR',
        description:
          'A built-in assistant that answers policy and process questions instantly, in plain language — pulling from your actual company documents instead of sending employees searching through folders.'
      },
      {
        id: '02',
        title: 'Leave conflict detection',
        description:
          "Automatically flags when a leave request overlaps with a teammate's approved time off or a key deadline, before a manager has to notice it manually."
      },
      {
        id: '03',
        title: 'Smart onboarding paths',
        description:
          'New-hire checklists that adapt automatically by role and department, assigning the right tasks, documents, and people — instead of one generic checklist for everyone.'
      },
      {
        id: '04',
        title: 'Living org chart',
        description:
          'The org chart updates itself the moment a role, manager, or team changes — no one has to remember to redraw it.'
      },
      {
        id: '05',
        title: 'Document expiry alerts',
        description:
          'Contracts, certifications, and compliance documents are watched automatically, with reminders sent well before something lapses.'
      }
    ]
  },

  efficiency: {
    eyebrow: 'Benefits',
    title: 'A few features built purely for process improvement',
    items: [
      {
        id: 'document-center',
        title: 'Centralized document center',
        description:
          'Replaces a dozen scattered onboarding emails with a single shared checklist both HR and the new hire can track.'
      },
      {
        id: 'on-behalf',
        title: 'On-behalf entry',
        description:
          'HR can create records, submit leave, or update details for an employee directly — no waiting on the employee to do it themselves.'
      },
      {
        id: 'announcements',
        title: 'Unified announcements',
        description:
          'Announcements go out once, to the right audience, with read confirmation — instead of an email plus three follow-up Slack pings.'
      },
      {
        id: 'ticket-inbox',
        title: 'Ticket inbox',
        description:
          "Employee questions land in one shared inbox instead of individual HR inboxes, so nothing gets missed when someone's out."
      }
    ]
  },

  closing: 'WiPeople — the human side of work, finally simple.'
};
