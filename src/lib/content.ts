// ---------------------------------------------------------------------------
// ALL EDITABLE CONTENT LIVES HERE.
// Pulled from Anupam_SeniorPM.docx (resume). A few fields are still
// [BRACKETED]: things only you can decide (LinkedIn URL, availability,
// testimonial quotes) rather than facts I could read off the resume.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Anupam Kalita",
  title: "Senior Product Manager · HRIS & Payroll, Integrations, Agentic AI",
  // Homepage intro card copy.
  greeting: "Hi, I'm Anupam",
  /** The headline is split so exactly one word carries the citron marker. */
  heroLead: "Being a",
  heroAccent: "human",
  heroTrail: "in the AI era.",
  heroDescription: "Crafting products of the people, by the people, for the people.",
  subhead:
    "Currently a Product Manager, formerly a Marketer, and now at Repute. Over the last 5 years, I've built products and features that have helped 35,000+ companies unify fragmented HR systems and workflows within their existing HRIS and Payroll.",
  // The "Hi, I'm Anupam" line that opens the intro block under the hero.
  intro:
    "I am a product manager crafting products and building features for HRIS and Payroll platforms that help them enhance their capability and experience.",
  email: "onu@poums.in",
  linkedin: "https://www.linkedin.com/in/anupamkalita/",
  github: "https://github.com/onu-pm",
  resumeUrl: "/resume.pdf",
  location: "Bangalore, India",
};

export const pillars = [
  {
    label: "Strategy",
    body: "I take messy 0-to-1 mandates and turn them into clear roadmaps that design, engineering, and business teams can all rally behind.",
  },
  {
    label: "Execution",
    body: "I love when my ideas take shape, right from discovery to release. From writing PRDs to scoping with cross-functional teams, I own products built with users' interests at the forefront.",
  },
  {
    label: "Bridge",
    body: "I sit between founders, engineers, data, and the people closest to your customers so everyone works from the same picture.",
  },
];

export const specialties = [
  "0→1 Product Strategy",
  "Integrations & API Platforms",
  "HRIS and Payroll Automations",
  "Agentic HR Assistant",
  "Compliance & Statutory Benefits",
  "iPaaS & Integrated Platforms",
];

export const highlights = [
  {
    value: "175+",
    unit: "",
    label: "Integrations in the catalog",
    detail: "Grown from 75 through a reusable API layer, not one-off builds.",
  },
  {
    value: "4",
    unit: "X",
    label: "ARR growth in 18 months",
    detail: "Driven by workflow automation inside the HRIS, not a new product line.",
  },
  {
    value: "35",
    unit: "K+",
    label: "Employers reached",
    detail: "Across India and the Middle East, through the partner ecosystem.",
  },
  {
    value: "5",
    unit: "+",
    label: "Years in B2B SaaS product",
    detail: "0-to-1 marketplaces, workflow automation, and agentic AI.",
  },
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
  /** URL segment for /work/<slug>. */
  slug: string;
  /** Short feature name — what the card leads with. */
  feature: string;
  title: string;
  company: string;
  role: string;
  timeframe: string;
  problem: string;
  approach: string[];
  outcome: string;
  metric: string;
  /** The headline number pulled out of `metric`, for the card face. Null
   *  where no real figure exists yet — never a placeholder. */
  stat: { value: string; label: string } | null;
  /** Real photography for the detail-page cover, in place of the flat
   *  colour-field motif. Only set once a project has actual art — also
   *  swapped in for the card face in the Work carousel, so the two match. */
  coverImage?: string;
  coverDescription?: string;
  /** Up to three headline numbers shown on the photo cover. */
  coverStats?: { value: string; label: string }[];
  /** Category tags — rendered identically on the cover and the carousel
   *  card, so keep this the single source. */
  coverTags?: string[];
  /** Short phrase for the homepage bento preview — the full `title` reads
   *  as a headline everywhere else, but that banner is too short for it. */
  bentoLabel?: string;
  /** Extra source-doc sections, only rendered when present. */
  whatWasNeeded?: string;
  whatHelped?: string;
  /** Words inside `approach` that should render as links, e.g. partner or
   *  platform names cited in the write-up. Matched by exact label text. */
  links?: { label: string; href: string }[];
};

// Real work: shipped as part of the job at Repute.
export const projects: Project[] = [
  {
    tag: "01 · Integrations Ecosystem",
    slug: "integrations-marketplace",
    feature: "Integrations Ecosystem",
    title: "Building an embedded ecosystem within HRIS",
    company: "Repute (HRIS Ecosystem: GreytHR, AdrenalinMAX, GelyxHR, PocketHRMS)",
    role: "Founding Product Manager",
    timeframe: "Dec 2021 – Present",
    coverImage: "/work/integrations-marketplace-cover.jpg",
    bentoLabel: "Embedded HRIS ecosystem",
    coverDescription:
      "How an HRIS native marketplace went from a blank page to becoming a partner ecosystem and a real revenue channel for both sides.",
    coverStats: [
      { value: "35K+", label: "Employer Reach" },
      { value: "45%", label: "Marketplace Closures" },
      { value: "3X", label: "Revenue Growth" },
    ],
    coverTags: ["HRIS", "Integrations Ecosystem"],
    problem:
      "Repute is an embedded native marketplace for HRIS. When I joined, Repute didn't have a marketplace yet. Partner HRIS platforms had no built-in way for employers to discover and add integrations like background checks, tax tools, or benefits providers.",
    whatWasNeeded:
      "Just listing apps wasn't going to be enough. If partners didn't see real business coming from being listed, they'd stop caring about the marketplace altogether.",
    approach: [
      "I built the marketplace from scratch across four HRIS platforms: GreytHR, AdrenalinMAX, GelyxHR, and PocketHRMS. Then I designed a sales flow so a browsing employer could actually turn into a closed deal for the partner, and built a developer platform so partners could list their own apps instead of waiting on my team every time.",
    ],
    whatHelped:
      "I onboarded the first batch of partners by hand before building the self-serve version, so I actually knew what made a listing worth trusting.",
    outcome:
      "The marketplace now covers roughly 35,000 employers across India and the Middle East. Within six months, it was driving 45% of partners' monthly closures — taking the marketplace from zero revenue to 3X monthly revenue within 18 months.",
    metric: "",
    stat: { value: "45%", label: "of partner monthly closures" },
    links: [
      { label: "GreytHR", href: "https://www.greythr.com/unite-marketplace/" },
      {
        label: "AdrenalinMAX",
        href: "https://marketplace.microsoft.com/en-eg/product/adrenalinesystemslimited1665053480102.adrenalinmax",
      },
      { label: "GelyxHR", href: "https://gelyxhr.com/" },
      { label: "PocketHRMS", href: "https://www.pockethrms.com/integrations-overview/" },
    ],
  },
  {
    tag: "02 · Workflow Automation",
    slug: "workflow-automation",
    feature: "Workflow Automation",
    title: "Automating recruitment and onboarding workflows",
    company: "Repute",
    role: "Founding Product Manager",
    timeframe: "Dec 2021 – Present",
    coverImage: "/work/workflow-automation-cover.jpg",
    bentoLabel: "Automating HR workflows",
    coverDescription:
      "Zapier-style automations removed manual, repetitive steps from the recruitment and onboarding modules.",
    coverStats: [
      { value: "5X", label: "Module Activation" },
      { value: "25K", label: "Active Users" },
      { value: "4X", label: "ARR Growth" },
    ],
    coverTags: ["HRIS", "Workflow Automation"],
    problem:
      "HR teams already lived in the recruitment and onboarding modules, but much of what they did there was just repeating the same manual steps over and over.",
    whatWasNeeded:
      "Something that removed those steps without forcing HR teams to pick up a new tool, since most of them barely had time to learn the one they already had.",
    approach: [
      "I built Zapier-style automations directly into the HRIS, so finishing one action would kick off the next one on its own, across recruitment and employee onboarding.",
    ],
    whatHelped:
      "I picked the two or three steps HR teams repeated the most and fixed those first, instead of trying to automate every workflow at once.",
    outcome:
      "Module activation jumped 5X in three months. Monthly active users went from 10,000 to 25,000, and ARR grew 4X over 18 months.",
    metric: "",
    stat: { value: "4X", label: "ARR Growth" },
  },
  {
    tag: "03 · Agentic AI",
    slug: "agentic-ai-assistant",
    feature: "Agentic AI",
    title: "Four-agent AI assistant for HR",
    company: "Repute",
    role: "Founding Product Manager",
    timeframe: "Dec 2021 – Present",
    coverImage: "/work/agentic-ai-cover.jpg",
    bentoLabel: "Agentic AI for all-things-HR",
    coverDescription:
      "A live assistant that answers recruitment, payroll, onboarding, and compliance questions inside the HRIS itself.",
    coverStats: [
      { value: "2X", label: "ARR Impact" },
      { value: "4", label: "AI Agents Live" },
    ],
    coverTags: ["HRIS", "Agentic AI"],
    problem:
      "Recruitment, payroll, onboarding, and compliance questions each needed their own back-and-forth before someone actually got an answer.",
    whatWasNeeded:
      "One assistant that could handle all four areas correctly. Not a chatbot that sounded confident but got the details wrong.",
    approach: [
      "I shipped a live four-agent assistant covering all four areas. I worked with our CTO on the orchestration layer that routes each question to the right agent, grounded its answers in live HRIS data, and set accuracy benchmarks with human review built in.",
    ],
    whatHelped:
      "I insisted on the accuracy benchmarks before we scaled it up, rather than shipping fast and hoping it held.",
    outcome:
      "The assistant is live today across all four areas and helped grow HRIS ARR by 2X.",
    metric: "",
    stat: { value: "2X", label: "ARR Impact" },
  },
  {
    tag: "04 · Payroll Compliance",
    slug: "dpdp-compliance",
    feature: "Payroll Compliance",
    title: "Cutting statutory filing to minutes",
    company: "Repute",
    role: "Founding Product Manager",
    timeframe: "Dec 2021 – Present",
    coverImage: "/work/compliance-filing-cover.jpg",
    bentoLabel: "Automating compliance filing",
    coverDescription:
      "Moved statutory payroll filing directly into the HRIS, so employers stopped juggling government portals by hand.",
    coverStats: [
      { value: "10 min", label: "Filing Time" },
      { value: "0", label: "Portal Logins" },
    ],
    coverTags: ["HRIS", "Payroll Compliance"],
    problem:
      "Employers had to file statutory payroll returns and remit payroll taxes by logging into separate government portals, preparing the data by hand, and uploading it themselves.",
    whatWasNeeded:
      "A way to remove that whole coordination effort, not just make the existing process a bit faster.",
    approach: [
      "I shipped compliance filing workflows directly into the HRIS payroll module, so employers could prepare and submit statutory returns and remit payroll taxes without ever leaving the HRIS or logging into a government portal.",
    ],
    whatHelped:
      "I mapped out exactly where employers were losing time — manual coordination, data prep, portal uploads — before deciding what to automate.",
    outcome:
      "What used to take HR teams multiple days or weeks now takes about 10 minutes.",
    metric: "",
    stat: { value: "10 min", label: "Filing Time" },
  },
  {
    tag: "05 · Integrations Architecture",
    slug: "unified-api",
    feature: "Unified API",
    title: "Unified API layer for bespoke integrations",
    company: "Repute",
    role: "Founding Product Manager",
    timeframe: "Dec 2021 – Present",
    coverImage: "/work/unified-api-cover.jpg",
    bentoLabel: "Unified API for bespoke integrations",
    coverDescription:
      "Replaced custom, one-off integration builds with a Unified API layer that every new partner could plug into.",
    coverStats: [
      { value: "175+", label: "Integration Catalog" },
      { value: "1", label: "API Layer" },
    ],
    coverTags: ["HRIS", "Integrations Architecture"],
    problem:
      "Every partner integration up to that point had been built separately, from scratch. Each one worked fine, but each one was also its own little project.",
    whatWasNeeded:
      "A way to stop rebuilding the same plumbing every time a new partner came along.",
    approach: [
      "I replaced the custom builds with a single API layer sitting on one canonical data model, so every new integration could follow the same blueprint instead of starting from zero.",
    ],
    whatHelped:
      "I stopped treating each integration as a special case and just solved the underlying problem once, properly.",
    outcome:
      "The integration catalog grew from 75 to over 175, and new integrations started shipping noticeably faster, from months to days.",
    metric: "",
    stat: { value: "175+", label: "Integration Catalog" },
  },
];

export type CaseStudy = {
  tag: string;
  /** URL segment for /pov/<slug>. */
  slug: string;
  title: string;
  subject: string;
  hook: string;
  problem: string;
  approach: string[];
  outcome: string;
  watch: string;
  /** Real photography for the cover, in the same treatment as a Work
   *  project — no coverStats here, since a POV thesis has no metrics of
   *  its own to report. */
  coverImage?: string;
  coverDescription?: string;
  /** Company first, then category tags — rendered as one tag row, so the
   *  company reads as "given right under the description" without a
   *  separate component. */
  coverTags?: string[];
  /** Short phrase for the homepage bento preview, same role as a Work
   *  project's bentoLabel. */
  bentoLabel?: string;
  /** Full write-up, straight from the source deck's own section titles,
   *  rendered as the same heading + prose/bullet cards a Work case study
   *  uses. Only present once a case study has real deck content behind it;
   *  falls back to problem/approach/outcome/watch otherwise. */
  sections?: { heading: string; body: string | string[] }[];
};

// Self-directed product theses: companies I picked myself to show how I think,
// not work I was paid to do. Each one is an outside read, not internal data,
// and says so.
export const caseStudies: CaseStudy[] = [
  {
    tag: "01 · Platform Strategy",
    title: "Making it easier for customers to connect their existing systems to an external HRIS or EOR",
    slug: "remote-integration-coverage",
    subject: "Remote.com",
    hook: "Every new system starts from zero. That's a template problem, not a data problem.",
    coverImage: "/pov/remote-integration-coverage-cover.png",
    coverDescription:
      "My POV of how Remote.com can make it easier for their customers — existing and new — to connect their existing systems.",
    coverTags: ["Remote.com", "Integrations", "HRIS", "EOR"],
    bentoLabel: "Remote Build Integrations",
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
    sections: [
      {
        heading: "Problem statement",
        body: [
          "Every connector is built like it's the first one — ten systems need 45 point-to-point connections, and only the common few are ever worth a bespoke build.",
          "Most connections run on a schedule — without native webhooks, a raise or an offboarding needs manual attention, which delays everything downstream.",
          "What's synced is shallower than it looks — standard syncs cover common fields across platforms, but custom fields never make it across.",
          "Not a data problem: it's how connections get built, when they update, and what they actually show.",
        ],
      },
      {
        heading: "Who feels it",
        body: [
          "The HR/People Ops Lead can't tell which fields are actually syncing until one goes missing — for them, the gap shows up as drift.",
          "The IT/Systems Admin owns a fix nobody else can read, so every vendor API update risks silently breaking it — for them, the gap shows up as debt.",
        ],
      },
      {
        heading: "The solution",
        body: [
          "A reusable mapping template, not a bespoke build — a new system starts from the closest existing template instead of zero.",
          "Frequent diffing, not a weekly file drop — a raise or an offboarding shows up in hours, not a pay cycle.",
          "A visible completeness score, not a silent gap — shows exactly what's covered, and flags what isn't, before it becomes a problem.",
          "None of this needs new data from the EOR's API. It changes how a connection gets built, how often it updates, and what it shows.",
        ],
      },
      {
        heading: "Where this leads",
        body: "Connect is the first chapter, not the whole story. Build gets sharper, not busier: what's left in the queue is a genuinely new template, not a repeat of one that exists. And Compound is Connect run in reverse — every new mapping template raises the match rate for the next similar system. One loop: Connect builds the templates, and Compound is those templates getting reused.",
      },
      {
        heading: "Value for customers",
        body: [
          "Uncommon systems don't get skipped — a closer template match means even a less common system is worth connecting quickly.",
          "Changes show up in hours, not pay cycles — frequent diff-checks catch a raise or an offboarding before the next payroll run.",
          "You can see exactly what's synced — a completeness score shows what's covered, and what still needs a human look.",
        ],
      },
      {
        heading: "Impact",
        body: [
          "Lower build cost per new system, since reused mapping templates mean less bespoke engineering per connector.",
          "Fewer payroll errors from stale data, since diff-based sync catches a change before the next pay run, not after.",
          "Fewer compliance scrambles before deadlines, since visible completeness catches a gap weeks early, not three weeks before a filing.",
        ],
      },
      {
        heading: "What I'd watch",
        body: "Read from how these integrations typically fail across the category, not internal data. Next step: instrument these three before and after launch to see which one actually moves.",
      },
    ],
  },
  {
    tag: "02 · Systems Design",
    title: "Why complex payroll customers take months to activate when simple ones take weeks",
    slug: "payroll-activation",
    subject: "Global payroll platforms",
    hook: "Simple customers self-serve in weeks. Complex ones wait on a person working a playbook by hand.",
    coverImage: "/pov/deel-payroll-activation-cover.jpg",
    coverDescription:
      "My POV of how Deel can close the gap between how fast simple and complex customers activate their payroll.",
    coverTags: ["Deel", "Payroll Activation", "Compliance", "Automation"],
    bentoLabel: "Deel Payroll Activation",
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
    sections: [
      {
        heading: "Problem statement",
        body: [
          "Simple customers self-serve their payroll activation in weeks. Complex, multi-entity customers wait on a person working a compliance playbook by hand, inconsistently, depending on who's assigned.",
          "57% of global payroll professionals rank local compliance as their single biggest challenge (PayrollOrg, 2025), and that's exactly where activation stalls: one country and one entity at a time.",
          "Built from public reviews and commentary on how global payroll platforms handle onboarding, not internal data, but a pattern worth acting on.",
        ],
      },
      {
        heading: "Who feels it",
        body: "Priya, a VP of People Ops at a 600-person company formed through three acquisitions, now runs payroll across five entities. She isn't a payroll or compliance expert, was told her multi-entity setup needs a manual, phased rollout, and has heard from peers that the experience \"depends on who you get.\"",
      },
      {
        heading: "Where it breaks down",
        body: [
          "Signs up, sold on a fast, self-serve activation timeline.",
          "Flagged as complex, since a multi-entity structure from acquisitions triggers manual review.",
          "Gets a manual, uneven process, where the playbook is followed by hand and quality depends on who's assigned.",
          "Activation is delayed, well past the timeline simple customers get.",
        ],
      },
      {
        heading: "The proposal",
        body: [
          "Encode compliance rules per country and entity type, so the system handles the deterministic parts with the same outcome regardless of which manager is assigned.",
          "Route only flagged exceptions to the implementation manager, so the customer sees consistent, real progress instead of a black box.",
          "Rules first, AI next: a rule can be audited and a model's compliance judgment can't, yet, so AI layers in only once the rules have earned a track record.",
        ],
      },
      {
        heading: "Why this, not something simpler",
        body: [
          "Adding more implementation managers doesn't fix inconsistency, and the cost scales linearly.",
          "One self-serve flow for everyone breaks down exactly where multi-entity complexity begins.",
          "Fully auto-approving every setup is fast, but a wrong compliance call isn't just a UX issue.",
          "Chosen instead: turn the static compliance playbook into rules, automating what's deterministic and routing judgment calls to the implementation manager.",
        ],
      },
      {
        heading: "Shipping it",
        body: [
          "V1, rules: encode the highest-hour country and entity-type combinations first, run deterministic checks with the same outcome regardless of manager, and have the manager review only what's flagged.",
          "V2, AI layer: add AI extraction and classification on top of the proven rules, expand across every country and entity type, and improve accuracy from real setup data.",
        ],
      },
      {
        heading: "Business impact",
        body: [
          "Faster activation means faster time-to-revenue on the hardest-to-serve accounts.",
          "A consistent experience removes the \"depends who you get\" risk seen in real reviews, a trust issue, not just a speed one.",
          "Lower cost to serve, since implementation-manager time is the constrained resource and standardizing it protects margin at scale.",
        ],
      },
      {
        heading: "What I'd watch",
        body: "Time-to-activation for the complex segment measured against the timeline simple customers already get, the % of playbook steps auto-completed, the spread in activation time by manager as a consistency proxy, and complex-customer activation NPS to see whether the simple-vs-complex gap is closing.",
      },
    ],
  },
  {
    tag: "03 · Product Thesis",
    title: "Making it easier to know you're talking to the same person on Beeper",
    slug: "beeper-people-layer",
    subject: "Beeper",
    hook: "Beeper's own search already knows two chats are the same person. Merge just doesn't act on it.",
    coverImage: "/pov/beeper-people-layer-cover.jpg",
    coverDescription:
      "My POV of how Beeper can turn a signal it already computes into a single, unified contact across every network.",
    coverTags: ["Beeper", "Integrations", "Merge", "People Layer"],
    bentoLabel: "Beeper People Layer",
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
    sections: [
      {
        heading: "Problem statement",
        body: [
          "Beeper connects every network you use, but still treats each network as a separate person.",
          "Its own search already labels and stacks the same contact across networks the moment you type a name.",
          "Merge can join them, but only when its matcher happens to catch the pair, and misses are silent.",
        ],
      },
      {
        heading: "Who feels it",
        body: [
          "The Cross-Network Professional runs client and vendor relationships across Slack, WhatsApp and email, often the same person on two of the three, splitting one relationship's history across two threads and unable to tell at a glance which network a contact actually replies on.",
          "The Everyday Connector keeps up with family and friends spread across WhatsApp, iMessage and Telegram, ending up with duplicate contacts for the people who overlap networks, with no single place to see one person instead of one app at a time.",
        ],
      },
      {
        heading: "The solution",
        body: [
          "Merge already joins two chats into one thread well, once you find the right pair, that part isn't what's being proposed.",
          "What's missing sits one level up: a person, not a chat, as the unit Beeper tracks, matched the moment a shared signal exists, not only when you go looking for it.",
          "Not a new matcher: it's Beeper deciding a person is what it's organizing, and applying the matching it already has to that unit, consistently.",
        ],
      },
      {
        heading: "How I'd sequence it",
        body: [
          "Start by reusing the signal, not rebuilding it: search already computes the duplicate signal, so feeding it into Merge's suggestion engine is one matching function doing the work of two.",
          "Trust facts before guesses: a shared phone number or email across networks isn't a prediction, it's a fact, so let those merge on their own first.",
          "Only then let it guess, once and out loud: a same name-and-photo match is a good guess, not a fact, so ask a single time and remember the answer.",
          "Keep one line that never moves: never merge on a name alone, since a wrong merge shows one person another person's messages, a privacy incident, not a tuning knob.",
        ],
      },
      {
        heading: "Value for users",
        body: [
          "A single view of every contact: one thread per person, not one per network.",
          "No more duplicate-hunting, since matching happens on facts already given to Beeper, a number, an email, not on the user noticing and fixing it by hand.",
          "Control stays with the user: nothing merges on a guess, ambiguous matches ask once, and wrong merges don't happen silently.",
        ],
      },
      {
        heading: "Business impact",
        body: [
          "Multi-network adds value instead of clutter: a working People Layer makes each new connected network complete someone's contacts, instead of mostly adding duplicate threads.",
          "The real size of the problem is invisible today, since silent misses mean Merge usage can look healthy while duplicate contacts stay common.",
          "A stronger pitch for the paid, multi-account tiers, since a People Layer is the reason to actually use that capacity, instead of a limit paid to raise.",
        ],
      },
      {
        heading: "What I'd watch",
        body: "Missed-match rate first, since misses are currently silent and invisible to Beeper's own metrics without instrumenting it, then how many pairs like this exist that were never suggested.",
      },
    ],
  },
  {
    tag: "04 · Cross-sell Strategy",
    title: "Getting a SpringVerify client to make its first hire in Goodfit",
    slug: "springverify-goodfit",
    subject: "SpringVerify × Goodfit",
    hook: "Goodfit already sits inside SpringVerify. Discovery isn't the problem, the ask is.",
    coverImage: "/pov/springworks-crosssell-cover.jpg",
    coverDescription:
      "My POV of how Springworks can get a SpringVerify client to make its first hire in Goodfit, without asking them to build a second hiring tool.",
    coverTags: ["Springworks", "SpringVerify", "Goodfit", "Integrations"],
    bentoLabel: "Springworks Cross-sell Strategy",
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
    sections: [
      {
        heading: "Problem statement",
        body: [
          "Goodfit already sits inside SpringVerify. The problem isn't discovery, it's asking someone doing a compliance job to start a hiring job from scratch.",
          "Three entry points share one empty state: the jobs page says \"No jobs found\", the overview shows four counters at zero, and getting started asks for three setup steps before anything happens.",
          "Every empty box here is already full in the tool they hire with. Filling it in means typing the same thing twice.",
        ],
      },
      {
        heading: "Who feels it",
        body: "HR Ops runs the verification queue; they don't open the roles. Their day runs: someone gets hired, they open SpringVerify, send the form, chase documents, read the report. They want fewer people to chase and fewer surprises after the offer, but they cannot post a job, since they don't own the role, so anything starting with \"create a job\" gets ignored. So the pitch can't be \"hire better\", it has to be about the work they already have.",
      },
      {
        heading: "Options considered",
        body: [
          "Wait for a check to fail and offer to screen earlier next time: wrong moment, since in India the check runs after the person has joined, so a bad report rarely undoes the hire.",
          "Assess people after they join: wrong product, since Goodfit is built to hire people, not test people who already work there.",
          "Ask new joiners for referrals: wrong messenger, since a verification company asking a new joiner to refer friends isn't HR's call to make.",
          "Chosen instead: pull in their hiring tool. Read the open roles and applicants from the system they already run, the only option where the trigger is a fact, not a guess.",
        ],
      },
      {
        heading: "The solution",
        body: [
          "Today: a role opens in the ATS, gets screened by hand, hired, then SpringVerify is opened separately and the check starts by hand. Goodfit never appears anywhere on this line.",
          "After the sync: the role shows up in SpringVerify with nobody creating a job, applicants arrive with nobody uploading a list, Goodfit screens with the interview already built, and hiring starts the check with no form to fill.",
          "One read, one write back, one event: SpringVerify reads the open role and applicants from their ATS through Integrations, Goodfit gets the job and candidates ready to screen, the hire event triggers the background check automatically, and the ranked shortlist writes back into their ATS.",
        ],
      },
      {
        heading: "How I'd sequence it",
        body: [
          "First, the blocker everything else depends on: connect the hiring tool so roles and applicants come across and the jobs page has something in it.",
          "Then, only once that's live: a dashboard task to add people to screen, since a counter at zero is worse than no counter at all.",
          "Later, once accounts have actually hired through it: the check starting automatically on hire, and one balance across both products. If I had to cut, I'd cut all of \"later\", since none of it proves the idea works.",
        ],
      },
      {
        heading: "What I'd check first",
        body: [
          "Whether the integrations can read open roles, or only send results back, since that kills the first step if not.",
          "How many accounts have a hiring tool connected at all, since that sets the real ceiling.",
          "Whether HR owns the role or must forward it to someone, since that changes the main button on every screen.",
          "Whether applicant data can legally move between the two products under DPDP, and whether ready-made interviews per job title exist or are a build.",
        ],
      },
      {
        heading: "What I'd watch",
        body: "Accounts that pay for their first assessment, not sign-ins or free credits, is the number that means someone actually chose it. The early sign is connected accounts starting a role on the first visit. The line not to cross is check turnaround and satisfaction, since SpringVerify is bought on trust. If connected accounts start roles at the same rate as everyone else, setup was never the blocker.",
      },
    ],
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
];

export type PlaygroundProject = {
  title: string;
  body: string;
  href?: string;
};

// Placeholder layout content until real vibe-coded projects are swapped in.
export const playgroundProjects: PlaygroundProject[] = [
  {
    title: "Inbox Triage Agent",
    body: "A small AI agent that reads incoming support email, tags intent, and drafts a first-pass reply for review.",
  },
  {
    title: "Meeting Notes → Tickets",
    body: "Vibe-coded over a weekend: turns a raw meeting transcript into a scoped list of tickets with acceptance criteria.",
  },
  {
    title: "Resume Diff Tool",
    body: "A tiny tool that diffs two resume versions and flags what quietly changed, built to sanity-check my own edits.",
  },
];

export const building = {
  headline: "Something new, in stealth",
  body: "I'm spending nights and weekends on an early-stage venture I'm not naming publicly yet. It's still early: no landing page, no waitlist, just building. Reach out if you're curious.",
};

// ---------------------------------------------------------------------------
// Alter Ego: everything outside the product-manager job title.
// ---------------------------------------------------------------------------

export const alterEgo = {
  headline: "Alter Ego",
  description: "Writing, blogs, and the side hustles I keep going after hours.",
  body: "The part of me that isn't a product manager: essays and blogs I write, small side hustles, and whatever else I'm curious about that month. Still collecting these in one place.",
  strands: ["Writing", "Blogs", "Side hustles"],
};
