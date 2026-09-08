// ---------------------------------------------------------------------------
// ALL EDITABLE CONTENT LIVES HERE.
// Pulled from Anupam_SeniorPM.docx (resume). A few fields are still
// [BRACKETED]: things only you can decide (LinkedIn URL, availability,
// testimonial quotes) rather than facts I could read off the resume.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Anupam Kalita",
  title: "Senior Product Manager · HRIS & Payroll, Integrations, Agentic AI",
  // Two-tone headline: `headlineEmphasis` renders bold with a highlighter marker
  // behind it, `headlineRest` renders in the italic accent font.
  headlineEmphasis: "I turn manual HR workflows",
  headlineRest: "into ecosystems that scale.",
  subhead:
    "5 years leading product for B2B SaaS platforms, from 0-to-1 marketplace builds to agentic AI. I work across engineering, partners, and compliance to ship things 35,000+ employers actually use.",
  email: "onu@poums.in",
  linkedin: "https://www.linkedin.com/in/anupamkalita/",
  github: "[Your GitHub URL]",
  resumeUrl: "/resume.pdf",
  location: "Bangalore, India",
};

export const pillars = [
  {
    label: "Strategy",
    body: "I take a 0-to-1 mandate, an embedded marketplace, an AI assistant, a compliance workflow, and turn it into a roadmap a CTO, partners, and sales can all get behind.",
  },
  {
    label: "Execution",
    body: "I own discovery through release sign-off: specs, API and schema design, QA, and the unglamorous replatforming work, like turning 75 bespoke integrations into a reusable API layer that makes the next 100 cheap to ship.",
  },
  {
    label: "Alignment",
    body: "I sit between founders, engineers, and partners, defining the orchestration layer with a CTO, or the consent and audit requirements with compliance, so everyone's building the same thing.",
  },
];

export const specialties = [
  "0→1 Product Strategy",
  "Integrations & API Platforms",
  "Workflow Automation",
  "Agentic AI Products",
  "Compliance & Data Trust",
  "Founding / IC Leadership",
];

export const capabilities = [
  {
    title: "0-to-1 Product Strategy",
    body: "When you need a founding PM to take a system from a mandate to a roadmap a CTO, partners, and sales can all get behind, I'll define the bets, the sequencing, and what's deliberately out of scope for v1.",
  },
  {
    title: "Integrations & Platform Architecture",
    body: "When bespoke, one-off integrations are eating your engineering budget, I design a canonical data model and API layer so the tenth build costs less than the first, not just faster.",
  },
  {
    title: "Workflow Automation",
    body: "When a feature's shipped but barely used, I dig into activation and usage data to find the highest-friction manual step and automate that first, instead of guessing at what's next.",
  },
  {
    title: "Agentic AI, Grounded",
    body: "When you want AI in the product without the hallucination risk, I define the orchestration layer and the accuracy benchmarks (with human review) that make it trustworthy before rollout.",
  },
  {
    title: "Compliance & Data Trust",
    body: "When employee or customer data starts crossing a regulatory line, I build consent, data minimisation, and audit requirements into the spec itself, not a checklist we bolt on after launch.",
  },
];

export const craft = [
  {
    title: "Reusable before repeatable",
    body: "I default to a canonical data model or a shared API layer, so the tenth integration costs less than the first. Not just faster to copy and paste.",
  },
  {
    title: "Consent by default",
    body: "Data only moves with explicit consent, and only the fields actually needed for the job. Never a full record by default.",
  },
  {
    title: "Human-reviewed AI",
    body: "Every agent response is grounded in live product data and checked against human review before it ever reaches a customer.",
  },
  {
    title: "Metrics that survive scrutiny",
    body: "I report activation, MAU, and ARR the way finance and engineering would both sign off on. Not a vanity number picked after the fact.",
  },
  {
    title: "The unglamorous replatforming",
    body: "I own the migration and schema work nobody wants to spec, because it's usually what makes the next order of magnitude possible.",
  },
  {
    title: "One PM, full loop",
    body: "Discovery through release sign-off and QA, with no separate program layer to hand off to. I carry it end to end.",
  },
];

export const logos = ["Repute", "Nestaway", "Moolya"];

export type Project = {
  tag: string;
  title: string;
  company: string;
  role: string;
  timeframe: string;
  problem: string;
  approach: string[];
  outcome: string;
  metric: string;
};

// Real work: shipped as part of the job at Repute and Nestaway.
export const projects: Project[] = [
  {
    tag: "01 · Integrations Marketplace",
    title: "Building a 0-to-1 embedded integrations marketplace",
    company: "Repute (HRIS Ecosystem: GreytHR, AdrenalinMAX, GelyxHR, PocketHRMS)",
    role: "Founding Product Manager",
    timeframe: "Dec 2021 – Present",
    problem:
      "Repute's HRIS partners needed a way for third-party solution providers (HRtech, Tax, Accounting, Benefits, ITSM) to reach a combined base of about 35,000 employers, without every integration turning into a bespoke, one-off engineering build.",
    approach: [
      "Built an ecosystem-led sales flow so listed integrations could be discovered and sold as part of partners' monthly closures, not bolted on after the fact.",
      "Designed a developers' platform that lets partner integrations self-list, rather than routing every listing through a manual review queue.",
      "Replaced bespoke per-integration builds with a unified API layer on a canonical data model, giving each new integration a repeatable reference architecture.",
    ],
    outcome:
      "Marketplace-sourced deals became a meaningful share of partner revenue within two quarters, and the catalog scaled well past its original size without a proportional rise in engineering cost per integration.",
    metric: "45% of solution providers' monthly closures sourced from the marketplace within 6 months · catalog grown from 75 to 175+ integrations",
  },
  {
    tag: "02 · Workflow Automation",
    title: "Automating recruitment & payroll workflows end-to-end",
    company: "Repute",
    role: "Founding Product Manager",
    timeframe: "Dec 2021 – Present",
    problem:
      "Recruitment and payroll modules inside the HRIS were feature-complete but barely used. Most of the work customers needed still happened by hand, module by module.",
    approach: [
      "Scoped and shipped Zapier-like workflow automations inside the HRIS, connecting steps that previously required manual hand-off between modules.",
      "Prioritized the highest-friction manual steps first, using activation and usage data rather than guessing at what to automate.",
      "Owned the full loop from spec to release sign-off, including QA. This was a founding PM role with no separate program layer.",
    ],
    outcome:
      "Automation turned a low-usage feature area into one of the platform's clearer growth drivers, compounding into sustained MAU and revenue growth over the following year and a half.",
    metric: "Recruitment & payroll activation up 5X in 3 months · MAU grew 10,000 → 25,000 and ARR 4X in 18 months",
  },
  {
    tag: "03 · Agentic AI",
    title: "Shipping a 4-agent AI assistant for HR operations",
    company: "Repute",
    role: "Founding Product Manager",
    timeframe: "Dec 2021 – Present",
    problem:
      "Recruitment, payroll checks, onboarding, and compliance each involved repetitive judgment calls that ate up HR teams' time but didn't clearly warrant four separate point solutions.",
    approach: [
      "Defined the orchestration layer for a 4-agent AI assistant together with the CTO, covering recruitment, payroll checks, onboarding, and compliance.",
      "Grounded every agent's answers in live HRIS data rather than static prompts, so responses stayed accurate as underlying records changed.",
      "Set accuracy benchmarks with human review before rollout, treating this as a trust-building exercise rather than a launch-and-see feature.",
    ],
    outcome:
      "The assistant shipped live and became a differentiator for HRIS ARR growth, while the human-review benchmarking approach kept accuracy auditable rather than opaque.",
    metric: "HRIS ARR grew 2X following launch",
  },
  {
    tag: "04 · Compliance & Trust",
    title: "Shipping payroll & compliance integrations under India's DPDP regime",
    company: "Repute",
    role: "Founding Product Manager",
    timeframe: "Dec 2021 – Present",
    problem:
      "Employee data moving between the HRIS and partner systems for payroll and compliance had to satisfy India's new Digital Personal Data Protection (DPDP) requirements, with no established internal playbook yet.",
    approach: [
      "Defined consent requirements for data moving between HRIS and partner systems before any integration touched employee records.",
      "Set data-minimisation rules so integrations only received the fields they actually needed, not full employee records by default.",
      "Built audit requirements into the integration spec itself, rather than treating compliance as a post-launch checklist.",
    ],
    outcome:
      "Payroll and compliance integrations shipped on schedule while meeting a new regulatory bar, turning a potential blocker into a repeatable pattern for future integrations.",
    metric: "[Add a concrete number here if you have one, e.g. integrations passing compliance review on first pass, or audit findings closed]",
  },
  {
    tag: "05 · Customer Experience",
    title: "Redesigning the tenant journey to cut support escalations",
    company: "Nestaway (Co-living & House Rentals)",
    role: "Program Manager, CX",
    timeframe: "Oct 2016 – Dec 2019",
    problem:
      "Support tickets and social media escalations were high, and the underlying causes were scattered across a tenant journey that had never been mapped end-to-end.",
    approach: [
      "Pulled support ticket data and analyzed it to find recurring escalation patterns, rather than fixing complaints one at a time.",
      "Redesigned the tenant journey end-to-end based on those patterns.",
      "Ran user interviews and targeted experiments, including a rent-rewards program aimed at both satisfaction and on-time payment behavior.",
      "Separately, I migrated the CX team from an external CRM to an internal tool: gathering requirements, writing the PRD, and designing training for about 150 team members.",
    ],
    outcome:
      "Escalations dropped sharply within a quarter, NPS improved substantially, and the CRM migration produced a durable per-user cost saving alongside the experience improvements.",
    metric: "Support tickets down 10%, social escalations down 50% in 3 months · NPS up 70% with 10% of detractors converted to promoters · ₹1,800 saved per user per month via CRM migration",
  },
];

export type CaseStudy = {
  tag: string;
  title: string;
  subject: string;
  hook: string;
  problem: string;
  approach: string[];
  outcome: string;
  watch: string;
};

// Self-directed product theses: companies I picked myself to show how I think,
// not work I was paid to do. Each one is an outside read, not internal data,
// and says so.
export const caseStudies: CaseStudy[] = [
  {
    tag: "01 · Cross-sell Strategy",
    title: "Getting SpringVerify accounts to make their first hire in Goodfit",
    subject: "SpringVerify × Goodfit",
    hook: "Goodfit already sits inside SpringVerify. Discovery isn't the problem, the ask is.",
    problem:
      "Goodfit already sits inside SpringVerify, so discovery isn't the issue. The problem is asking someone who opens SpringVerify to do a compliance job to start a hiring job from scratch, when they don't even own the role they'd be posting.",
    approach: [
      "Mapped HR Ops' actual day and found they can't post a job themselves, so the pitch could never be \"hire better\", it had to work with the job they already have.",
      "Weighed four ways in (a failed check, post-hire assessment, referrals, or pulling in their existing hiring tool) and worked out why the first three lose before picking the fourth.",
      "Designed a one-read, one-write, one-event sync with their ATS so Goodfit fills itself in instead of asking them to type the same thing twice.",
    ],
    outcome:
      "Reframed the ask from \"post a job in a tool you don't own\" to a background sync that turns an empty dashboard into one that already reflects the hiring they're doing elsewhere.",
    watch: "North star to track: accounts that pay for their first assessment, not sign-ins or free credits.",
  },
  {
    tag: "02 · Product Thesis",
    title: "Making it easier to know you're talking to the same person on Beeper",
    subject: "Beeper",
    hook: "Beeper's own search already knows two chats are the same person. Merge just doesn't act on it.",
    problem:
      "Beeper's own search already knows when two chats across networks are the same person, but Merge only joins them when its matcher happens to catch the pair, and misses are silent, so duplicate contacts quietly stay duplicate.",
    approach: [
      "Traced the gap to a unit-of-organization problem: Beeper treats a chat as the thing it organizes, not a person, even though search already computes the person-level match.",
      "Sequenced the fix by trust, not effort: reuse the signal search already has, merge on facts like a shared number or email automatically, and only ask once before guessing on a name-and-photo match.",
      "Drew one line that doesn't move regardless of model quality: never merge on a name alone, since a wrong merge shows one person another person's messages.",
    ],
    outcome:
      "Turns Merge from a feature you have to go looking for into a person layer that applies consistently, and makes the case that unlocking it is what justifies paying for the multi-account tiers.",
    watch: "Key gap to instrument first: missed-match rate, since misses are currently invisible to Beeper's own metrics.",
  },
  {
    tag: "03 · Platform Strategy",
    title: "Closing the integration coverage gap for Remote.com",
    subject: "Remote.com",
    hook: "Every new system starts from zero. That's a template problem, not a data problem.",
    problem:
      "Most connections between a customer's HR system and an external HRIS or EOR run on a weekly file drop and cover a handful of fields, and every new system today means starting from zero.",
    approach: [
      "Traced the symptom to three root causes: point-to-point connectors that reuse nothing, syncs that run on a schedule instead of a heartbeat, and coverage that's shallower than it looks.",
      "Designed one fix per cause: a reusable mapping template that starts a new system from the closest existing match, frequent diffing instead of a weekly batch, and a visible completeness score instead of a silent gap.",
      "Connected the fix to the team's other stated goals, framing it as one compounding loop (Connect builds the templates, Compound is those templates getting reused) rather than three separate projects.",
    ],
    outcome:
      "Reframes coverage as a template-matching problem instead of a bespoke-engineering one, where every new connector makes the next one faster to build.",
    watch: "Three numbers this would move: build cost per new system, payroll errors from stale data, and compliance scrambles before filing deadlines.",
  },
  {
    tag: "04 · Systems Design",
    title: "Why complex payroll customers take months to activate when simple ones take weeks",
    subject: "Global payroll platforms",
    hook: "Simple customers self-serve in weeks. Complex ones wait on a person working a playbook by hand.",
    problem:
      "Simple customers self-serve their payroll activation in weeks. Multi-entity, complex customers wait on a person working a compliance playbook by hand, and how well that goes depends on who's assigned.",
    approach: [
      "Weighed three alternatives (more implementation managers, one self-serve flow for everyone, fully auto-approving every setup) and rejected each for a specific reason rather than defaulting to \"add more automation\".",
      "Proposed turning the static compliance playbook into rules the system executes for the deterministic parts, routing only real judgment calls to an implementation manager.",
      "Sequenced rules before AI on purpose: a rule can be audited and a model's compliance judgment can't yet, so AI layers in only once the rules have earned a track record.",
    ],
    outcome:
      "Turns a process that varies by \"who you get\" into one with a consistent, auditable outcome, without asking automation to own compliance judgment calls on day one.",
    watch: "Would validate with: time-to-activation for complex accounts, % of playbook steps auto-completed, and spread in activation time by manager.",
  },
];

export const testimonials = [
  {
    quote:
      "[A real quote from a manager, peer, or partner works well here. A LinkedIn recommendation is a great source.]",
    name: "[Name]",
    title: "[Their title, Company]",
  },
  {
    quote: "[Second testimonial]",
    name: "[Name]",
    title: "[Their title, Company]",
  },
];

export const approachSteps = [
  {
    step: "01",
    title: "Understand",
    body: "Start from data and the person feeling the problem: support tickets, usage patterns, a partner's monthly closure numbers, before I touch a roadmap.",
  },
  {
    step: "02",
    title: "Shape",
    body: "Turn the problem into a scoped bet: what gets a reusable architecture (like a canonical data model) versus what's a one-off, and what's deliberately out of scope for v1.",
  },
  {
    step: "03",
    title: "Ship & measure",
    body: "Own it through release sign-off and QA, then track the metric that actually moved: activation, MAU, ARR, or an escalation rate. Not just whether it shipped.",
  },
];

export const faqs = [
  {
    q: "What kind of B2B SaaS problems do you specialize in?",
    a: "HRIS and payroll platforms, embedded integration marketplaces, workflow automation, and more recently, agentic AI grounded in live product data. I've done this as a founding PM, owning discovery through release sign-off.",
  },
  {
    q: "Have you managed a team, or been an IC PM?",
    a: "IC and founding PM. I own the full loop myself (discovery, specs, prioritization, QA, release sign-off), while working closely with a CTO and partner teams on things like AI orchestration and compliance requirements.",
  },
  {
    q: "What's your process for a 0-to-1 feature vs. an established product?",
    a: "For 0-to-1 work, like the integrations marketplace or the AI assistant, I front-load architecture decisions (a canonical data model, an orchestration layer) so the tenth build is cheap, not just the first. For established products, I lead with usage data to find the highest-friction manual step before proposing anything new.",
  },
  {
    q: "Are you open to new opportunities right now?",
    a: "[State your current availability here, e.g. open to conversations, or specify what kind of role or timing you're looking for.]",
  },
];
