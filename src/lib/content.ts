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
  // Cal.com slug for the "Connect" CTA — opens as an in-page modal (see
  // CalEmbed.tsx) rather than a link out, so booking a call never leaves
  // the site the way `calUrl` + target="_blank" used to.
  calLink: "poums",
  github: "https://github.com/onu-pm",
  instagram: "https://www.instagram.com/osinakiloratu/",
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

// Personal bio for the top of /about — the "who is this person" section,
// distinct from Capabilities' "what I can do for you" pitch below it.
export const aboutMe = {
  greeting: "Hi, I'm Anupam 👋🏼",
  // Split around the company name so "Repute" can render as a real link.
  taglineLead: "Currently a Product Manager",
  reputeUrl: "https://repute.net",
  taglineTrail: ", Formerly a Marketer, Always a Human.",
  philosophy: "My approach to life and work is unique. Uniqueness is a virtue in itself.",
  builtLabel: "In the last 5 years, I have built,",
  built: [
    "An integrations marketplace from zero to becoming the independent revenue channel for HRIS and marketplace partners.",
    "A compliance filing app and workflows inside HRIS that took statutory compliance filing from a multi-day process down to about 10 minutes.",
    "An AI assistant that simplifies processes around recruitment, payroll, onboarding, and compliance.",
  ],
  lessonsLabel: "Best things I learned after crafting,",
  lessons: [
    "HRIS and Payroll systems are built on users' trust. They earn the right to be clever only after being reliable and relatable.",
    "Be a fan of what you work on. It makes the unglamorous parts — talking to users, support tickets, edge cases, compliance rules — worth digging into instead of just clearing them.",
    "Execution is everything — ship small and often.",
    "Never stop learning.",
  ],
  personal:
    "When I'm not building products, I write for magazines that have nothing to do with product management, travel solo to art museums and festivals, pet-sit pro bono for pet parents who need a hand, and help friends get their social media pages off the ground.",
};

export const capabilities = [
  {
    title: "HRIS & Payroll Systems",
    body: "Five years in, I still think in payroll cycles and filing deadlines. I know where these platforms actually lose people's trust — a wrong compliance filing, not a slow page load — and I design around that first.",
  },
  {
    title: "0-to-1 Product Strategy",
    body: "I like the mandate that doesn't have a roadmap yet. Hand me a blank page and a business goal, and I'll come back with the bets worth making, the sequencing, and what I'd deliberately leave out of v1.",
  },
  {
    title: "Integrations & Platform Architecture",
    body: "I've watched bespoke, one-off integrations quietly eat an engineering team's whole quarter. My default is a canonical data model and API layer, so the tenth partner costs less to onboard than the first.",
  },
  {
    title: "Workflow Automation",
    body: "A feature that shipped but barely gets used is a data problem before it's a roadmap problem. I go looking for the manual step people are quietly working around, and automate that one first.",
  },
  {
    title: "Agentic AI, Grounded",
    body: "I want AI in the product too, just not AI that guesses. I design the orchestration layer and the accuracy benchmarks, with human review, so it earns trust before rollout instead of costing it.",
  },
  {
    title: "Compliance & Data Trust",
    body: "Employee and payroll data isn't like other product data — a mistake there is a legal problem, not a bug ticket. I build consent, data minimisation, and audit trails into the spec itself, not a checklist after launch.",
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
      "Repute builds HRIS, the software a company's HR team uses every day to run payroll, track leave, and manage hiring. Basically HR's version of an operating system. I joined as a founding product manager in December 2021, and one thing Repute didn't have yet was a marketplace: a place inside the HR software itself where an employer could add extra tools, like a background check provider or a tax filing service, without ever leaving the platform they already used every day. Four different HR platforms sit under the Repute umbrella, GreytHR, AdrenalinMAX, GelyxHR, and PocketHRMS, and none of them had this. If an HR manager wanted a background check vendor, they had to go find one on their own, sign a separate contract, and figure out how to connect it themselves. There was no aisle to browse, so employers rarely found these tools, and the vendors offering them never got the business.",
    whatWasNeeded:
      "Just adding a page of logos wasn't going to work. I'd seen enough software marketplaces to know the pattern: a company builds a directory, gets a partner or two to sign up, and then nothing happens because nobody actually buys anything through it. If the vendors we listed didn't see real business coming from being on Repute, they'd stop caring about the listing within a few months, and the whole thing would quietly die. So the real question wasn't how to build a marketplace page. It was how to make browsing actually turn into a signed deal for the partner on the other end.",
    approach: [
      "I built the marketplace from the ground up across all four HR platforms, spanning categories like HR tech, tax, accounting, benefits, and IT service management, so an employer could find whatever kind of tool they needed in one place. Then I designed the part that actually mattered: a sales flow that could take someone from browsing a listing to a closed deal, not just a click-through to another website. Once that was working, I built a developer platform so partner vendors could list and manage their own apps directly, instead of emailing my team every time they wanted to update a listing or add a new one.",
    ],
    whatHelped:
      "Before I built the self-serve version, I onboarded the first batch of partners by hand myself. I sat with them, listed their tools, and watched what happened next. That's how I learned what actually made a listing worth trusting, things like clear pricing, an honest description, and a fast response time, rather than guessing at it from a spreadsheet.",
    outcome:
      "The marketplace now covers roughly 35,000 employers across India and the Middle East. Within six months of launch, it was already driving 45% of partners' monthly closures, meaning almost half the deals our partner vendors closed each month were coming directly through Repute. That took the marketplace from zero revenue to 3X monthly revenue within 18 months.",
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
    title: "Automating recruitment and payroll workflows",
    company: "Repute",
    role: "Founding Product Manager",
    timeframe: "Dec 2021 – Present",
    coverImage: "/work/workflow-automation-cover.jpg",
    bentoLabel: "Automating HR workflows",
    coverDescription:
      "Zapier-style automations removed manual, repetitive steps from the recruitment and payroll modules.",
    coverStats: [
      { value: "5X", label: "Module Activation" },
      { value: "25K", label: "Active Users" },
      { value: "4X", label: "ARR Growth" },
    ],
    coverTags: ["HRIS", "Workflow Automation"],
    problem:
      "HR teams spent most of their day inside two parts of Repute: the recruitment module, where they moved candidates through hiring stages, and the payroll module, where they ran monthly payroll and handled everything around it. A lot of what they did in both places was the exact same manual action, over and over. Move a candidate to the next stage, then remember to send the same email. Run payroll, then manually update two or three other systems with the result. None of it needed a real decision. It just needed a person to click the same button again.",
    whatWasNeeded:
      "Something that removed those repeat steps without asking HR teams to learn a new tool, since most of them barely had time to learn the one they already had. It also had to work quietly in the background. Nobody wanted a system that needed babysitting.",
    approach: [
      "I built Zapier-style automations directly inside the HRIS. Think of dominoes: finishing one action, like moving a candidate to \"Offer Sent,\" would automatically knock over the next one, like sending the offer letter, without anyone doing it by hand. I did the same across payroll, so completing one step in a payroll run could trigger the next set of updates on its own, instead of an HR person repeating them manually every single month.",
    ],
    whatHelped:
      "I didn't try to automate every workflow on day one. I looked at what HR teams repeated the most, picked the two or three steps that ate the most time, and fixed those first. Once those landed and people trusted them, expanding to the rest of the module was a much easier conversation.",
    outcome:
      "Module activation for recruitment and payroll jumped 5X within three months. Monthly active users went from 10,000 to 25,000, and annual recurring revenue grew 4X over the next 18 months.",
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
      "By this point, Repute already had automations running quietly in the background, but people still had to go find their own answers. If an HR person wanted to know whether a candidate's background check had come back, why a payroll run hadn't gone through, what the leave policy was for someone still on probation, or whether a compliance filing was overdue, they had to hunt through the right screen themselves, or open a support ticket and wait. Recruitment, payroll, onboarding, and compliance are four very different parts of HR, and each one needed its own separate back and forth before someone actually got an answer.",
    whatWasNeeded:
      "What we needed was one assistant that could actually handle all four areas correctly, not a chatbot that sounded confident and got the details wrong. In HR and payroll, a wrong answer isn't just annoying. Telling someone the wrong leave balance or missing a compliance deadline has real consequences. So this had to be something people could trust, not just something that looked impressive in a demo.",
    approach: [
      "I shipped a live assistant made up of four specialist agents, one each for recruitment, payroll checks, onboarding, and compliance. Think of it as four subject matter experts on call instead of one generalist trying to answer everything and occasionally guessing outside its lane. I worked with our CTO to define the orchestration layer, which is really just the traffic control system that reads a person's question and sends it to the right specialist agent. I made sure every answer was grounded in Repute's actual live data instead of the assistant making something up, and I set accuracy benchmarks with a human checking its answers before we let it go live for customers.",
    ],
    whatHelped:
      "I pushed to get the accuracy benchmarks in place before we scaled the assistant up to more customers, instead of shipping fast and hoping it held. It slowed the launch down by a few weeks, but it meant we caught the cases where the assistant was wrong before customers did, not after.",
    outcome:
      "The assistant has been live across all four areas for a while now, and it's helped grow HRIS annual recurring revenue by 2X.",
    metric: "",
    stat: { value: "2X", label: "ARR Impact" },
  },
  {
    tag: "04 · Payroll Compliance",
    slug: "statutory-filing",
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
      "Every month, employers using Repute are legally required to report certain payroll details to the government and pay what's owed. Provident fund contributions, tax deductions, things like that. Before this, doing that reporting meant logging into separate government websites, one for each requirement, manually preparing the numbers to match whatever format that portal wanted, and uploading everything by hand. All of this sat on top of running payroll itself, which was already its own job.",
    whatWasNeeded:
      "I didn't want to just make the existing process a little faster. Government portals are slow and clunky no matter what you do, so shaving a few minutes off data entry wasn't going to change how employers felt about this. What was actually needed was to remove the coordination effort entirely: the back and forth between running payroll, preparing separate filings, and logging into multiple portals to submit them.",
    approach: [
      "I shipped compliance filing workflows directly inside the HRIS payroll module. Once payroll was run, an employer could prepare and submit their statutory returns and pay what was owed right there, without ever leaving the HRIS or opening a government portal in a separate tab.",
    ],
    whatHelped:
      "Before deciding what to automate, I mapped out exactly where employers were actually losing time: the manual coordination between payroll and filing, the data prep to match each portal's format, and the uploads themselves. That map is what told me which steps were worth automating first, instead of guessing.",
    outcome:
      "What used to take HR teams multiple days or weeks, coordinating between payroll and separate government filings, now takes about 10 minutes inside the HRIS itself.",
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
      "Every time Repute connected to a new partner, whether that was a background check vendor, a tax tool, or a benefits provider, engineers built that connection from scratch as its own separate project. Each one worked fine on its own, but none of the underlying plumbing was shared between them. That meant the tenth partner we connected took almost as long to build as the first one had, because we were solving the same problem over and over instead of learning from it.",
    whatWasNeeded:
      "We needed a way to stop rebuilding the same plumbing every time a new partner came along, and we needed it before the catalog got big enough that this became unmanageable. At 75 integrations, it was already slow. At double that, it would have been a real bottleneck.",
    approach: [
      "I replaced the one-off builds with a single API layer sitting on one canonical data model, which is really just one common, agreed-upon way of describing an employee's data (their name, salary, tax details, leave balance, and so on) that every partner could map their own system into. Instead of engineers custom-building a new connection every time, a new integration could follow the same reference architecture, the same blueprint, that every integration before it had used.",
    ],
    whatHelped:
      "I stopped treating each new integration as a special case that needed its own design conversation. Once the API layer and data model existed, the question for a new partner became \"how does your data map into what we already have,\" not \"how do we build this from zero.\" That mental shift did as much work as the API layer itself.",
    outcome:
      "The integration catalog grew from 75 to over 175. Just as importantly, new integrations started shipping in days instead of months, because most of the hard design work was already done before the first line of code got written for a new partner.",
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
      "My POV of how Remote.com — an Employer of Record (EOR) platform that lets a company hire staff in a country where it has no legal entity of its own — can make it easier for their customers to connect their existing HR software to it, whether they're a brand-new customer or one who's been on the platform for years.",
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
          "Every connector is built like it's the first one — think of each connection between two systems as its own custom-wired cable, not a shared plug. Ten systems then need 45 separate point-to-point connections (the math of wiring every pair to every other pair), and only the handful of common ones are ever worth building by hand.",
          "Most connections run on a schedule, like a file that updates once a week, instead of the moment something actually changes (a live update is called a \"webhook\"). Without one, a raise or someone leaving the company needs a person to notice and fix it by hand, which delays everything downstream — payroll can end up running on stale numbers.",
          "What's synced is shallower than it looks — the standard connection covers common fields like name and salary, but anything custom to a specific company, like a company-specific leave category, never makes it across.",
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
          "Frequent diffing, not a weekly file drop — \"diffing\" just means checking what's changed since last time, so a raise or an offboarding shows up in hours, not a pay cycle.",
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
      "My POV of how Deel — a platform that lets companies pay employees and contractors across different countries from one place — can close the gap between how fast simple and complex customers activate their payroll.",
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
          "57% of global payroll professionals rank local compliance (the different tax and labor rules each country has) as their single biggest challenge (PayrollOrg, 2025), and that's exactly where activation stalls: one country and one entity at a time.",
          "Built from public reviews and commentary on how global payroll platforms handle onboarding, not internal data, but a pattern worth acting on.",
        ],
      },
      {
        heading: "Who feels it",
        body: "Priya, a VP of People Ops at a 600-person company formed through three acquisitions, now runs payroll across five entities (five separate legal company registrations, one per country, each with its own tax and compliance rules). She isn't a payroll or compliance expert, was told her multi-entity setup needs a manual, phased rollout, and has heard from peers that the experience \"depends on who you get.\"",
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
        body: "Time-to-activation for the complex segment measured against the timeline simple customers already get, the % of playbook steps auto-completed, the spread in activation time by manager as a consistency proxy, and complex-customer activation NPS (Net Promoter Score, a common customer-satisfaction survey) to see whether the simple-vs-complex gap is closing.",
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
      "My POV of how Beeper — an app that combines all your different chat apps (WhatsApp, iMessage, Slack, Telegram, and more) into one inbox — can turn a signal it already computes into a single, unified contact across every network, instead of showing the same person as several different people.",
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
          "Merge can join them, but only when its matcher — the background system that guesses which two chats belong to the same person — happens to catch the pair, and misses are silent.",
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
      "My POV of how Springworks — whose SpringVerify product runs employee background checks, and whose Goodfit product is a hiring and applicant-tracking tool — can get a SpringVerify client to make its first hire in Goodfit, without asking them to learn or set up a whole second hiring tool.",
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
          "One read, one write back, one event: SpringVerify reads the open role and applicants from their ATS (Applicant Tracking System — the software they already use to post jobs and manage candidates) through Integrations, Goodfit gets the job and candidates ready to screen, the hire event triggers the background check automatically, and the ranked shortlist writes back into their ATS.",
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
          "Whether applicant data can legally move between the two products under DPDP (India's Digital Personal Data Protection Act, the law governing how personal data can be shared between companies), and whether ready-made interviews per job title exist or are a build.",
        ],
      },
      {
        heading: "What I'd watch",
        body: "Accounts that pay for their first assessment, not sign-ins or free credits, is the number that means someone actually chose it. The early sign is connected accounts starting a role on the first visit. The line not to cross is check turnaround and satisfaction, since SpringVerify is bought on trust. If connected accounts start roles at the same rate as everyone else, setup was never the blocker.",
      },
    ],
  },
];


export type LabSection = {
  heading: string;
  body: string | string[];
  /** Optional inline media shown right after this section: a screenshot of
   *  the real app, or a short screen recording (autoplaying/looping/muted,
   *  styled like a gif) so it reads as part of the paragraph flow rather
   *  than a heavy embedded video. */
  clip?: string;
  clipCaption?: string;
};

export type LabProject = {
  slug: string;
  title: string;
  /** One-liner used as the card/cover description. */
  hook: string;
  /** Short phrase for the homepage bento preview, same role as a Work
   *  project's bentoLabel — the bento slot is a short banner, so the
   *  hover state shows this alone, not the full title/description/tags
   *  spread that fits on the carousel card and cover. */
  bentoLabel: string;
  /** Shown as the first tag pill, the same role a company name plays on
   *  a POV card — the category this build sits in. */
  category: string;
  tags: string[];
  coverImage: string;
  liveUrl: string;
  sections: LabSection[];
};

// Real, working prototypes, built solo with Claude Code outside of any job.
export const labProjects: LabProject[] = [
  {
    slug: "artsylens",
    title: "ArtsyLens — a tour guide that answers back",
    hook: "A working prototype that treats a museum or monument like a conversation instead of a map.",
    bentoLabel: "AI Museum Guide",
    category: "Travel & Culture",
    tags: ["AI Prototype", "Multimodal", "Progressive Generation"],
    coverImage: "/lab/artsylens-cover.jpg",
    liveUrl: "https://artsy-lens-nu.vercel.app/",
    sections: [
      {
        heading: "Context",
        body: "The AI travel-planning category is loud right now — Wonderplan, Mindtrip, and a dozen others are all racing to generate the perfect day-by-day itinerary. That's a real problem, but it's also the easy half of a trip. The itinerary tells you where to stand. It doesn't tell you why the gate you just walked through was built to make the Taj Mahal look closer than it is, or what the pietra dura inlay above your head actually means. That gap — the moment you're physically standing in front of something and have no one to ask — is where a printed guidebook and a generic AI itinerary both go quiet. ArtsyLens is built for that exact moment, not the planning stage before it.",
      },
      {
        heading: "The product decision that mattered",
        body: [
          "The default build here is obvious: generate a 5-stop itinerary, show it as a list, done — that's what every AI trip planner already ships. I rejected stopping there because a list of stop names is just a fancier map pin. The decision was to make each checkpoint its own conversation: when you open a stop, ArtsyLens doesn't recite a paragraph and move on — it hands you a chat, seeded with specific \"things to spot\" for that exact spot, three suggested questions to get you started, and an open box to ask anything else. You can even snap a photo of what's in front of you for it to analyze. That's a materially harder product to build than a static description, and a less impressive-looking landing page, but it's the only version that's actually useful once you're standing there rather than reading about it on a couch.",
          "The second decision was pacing the generation. I could have generated the full 5-stop itinerary and every checkpoint's content in one shot before showing anything — simpler to build, and it's what most AI itinerary tools do. I built it to stream instead: the itinerary list appears immediately with the first couple of stops fully written, and the rest fill in progressively (\"Preparing Guide...\") while you're already reading stop one. For a product whose whole pitch is \"don't make the user wait around planning, get them exploring,\" making them stare at a loading spinner before they see anything would have undercut the premise on the very first screen.",
          "The third was tone. Every competitor in this space reads like a corporate travel-booking site — blue gradients, stock airplane icons. I deliberately built ArtsyLens around a hand-illustrated, Van-Gogh-textured aesthetic with playful copy (\"Curated by ArtsyLens,\" checkpoint cards that feel like a travel journal). That's a positioning bet, not a decoration choice: the target user isn't a business traveler optimizing a layover, it's someone who wants a museum or a monument to feel like discovery again, and the UI has to signal that before a single word of copy loads.",
        ],
        clip: "/lab/artsylens-chat.jpg",
        clipCaption: "Each checkpoint opens as its own chat, seeded with things to spot and suggested questions.",
      },
      {
        heading: "What it does today",
        body: "A user picks a destination — a museum, a city, a monument — and gets a self-paced itinerary of checkpoints, each with a short orienting description, specific \"things to spot\" grounded in that location's actual history and architecture, and a live guide chat with suggested questions and photo analysis. Past journeys are saved so a user can pick up a half-finished trip. It works for both a single landmark (the Taj Mahal) and a sprawling one (the Louvre), which forced the itinerary logic to scale from 5 stops to dozens without the experience changing shape.",
        clip: "/lab/artsylens-itinerary.jpg",
        clipCaption: "A generated Taj Mahal itinerary — six checkpoints, each with its own things to spot.",
      },
      {
        heading: "What I'd need to prove next",
        body: "The honest gap: this is a content-generation and conversation prototype, not a location-aware one yet — it doesn't know where you're physically standing, so it can't yet nudge you from stop to stop or confirm you're actually looking at the right pietra dura panel. That's the next real product question, and it's a genuinely hard one (indoor positioning, computer-vision confirmation against a reference image, offline reliability in a museum basement with no signal) rather than a checkbox feature — the kind of constraint that would shape a real roadmap rather than a demo.",
      },
      {
        heading: "What this shows about how I work",
        body: "I didn't chase the crowded, easy-to-demo part of this category (itinerary generation). I looked for the moment existing tools abandon the user — standing in front of the thing itself — and built for that, even though it meant a harder architecture (per-checkpoint chat, progressive generation, multimodal photo input) than a single generated PDF would have needed. That's the trade I'd make on a real product too: build for the moment of actual use, not the moment that's easiest to screenshot.",
      },
    ],
  },
  {
    slug: "hisab-app",
    title: "Hisab App — bookkeeping that reads a handwritten mandi slip",
    hook: "A working prototype for the Indian kirana shopkeeper's oldest problem: the bahi-khata.",
    bentoLabel: "Kirana Bookkeeping",
    category: "SMB FinTech",
    tags: ["OCR", "GST Automation", "Multilingual"],
    coverImage: "/lab/hisab-app-cover.jpg",
    liveUrl: "https://vyaparmoney.ai.studio/",
    sections: [
      {
        heading: "Context",
        body: "Every Indian kirana shop still runs on two books: a purchase register kept by whoever's least busy that week, and a khata — a credit ledger — for the regulars who pay \"next Tuesday, bhaiya.\" Both are usually handwritten. Both are why the shop owner's accountant charges a premium every GST filing season, reconciling stacks of paper bills against a return that's already overdue. There is no shortage of apps trying to fix this — Vyapar, Khatabook, OkCredit, myBillBook, Zoho Books all sell into the same shelf. That crowding was the first thing I had to reckon with before writing a line of a build prompt: if I was going to spend time on this, it couldn't be \"another invoicing app with a nicer UI.\" It had to attack the one step every competitor still leaves to the shopkeeper — turning a stack of paper into a ledger in the first place.",
      },
      {
        heading: "The product decision that mattered",
        body: [
          "The obvious build is a manual entry app: shopkeeper types in supplier, amount, GST rate, done. Every incumbent in this category has that screen. I rejected it, because it doesn't remove the actual cost — a semi-literate or time-starved shopkeeper still has to sit down and become a data-entry clerk every evening, which is exactly the behavior that makes the paper register win by default. So the core of Hisab App isn't the ledger screen, it's the intake: point a phone camera at a supplier's invoice, mandi slip, or even a handwritten chit, and let the app extract supplier, GST number, line items, and tax split on its own. The harder call was what to do when the model isn't sure. I deliberately didn't ship a black-box \"trust the AI\" flow — every captured bill carries a confidence score, and anything under a threshold lands in a \"Review & Verify\" queue instead of posting straight to the ledger, with duplicate-bill detection sitting alongside it. That's a slower, less impressive demo than \"scan and forget,\" but it's the difference between a toy and something a shop owner would actually let touch their GST filing — one wrong auto-posted credit note is enough to lose that trust permanently.",
          "The second decision was language. Every competitor I looked at defaults to English with a Hindi toggle bolted on. I built the interface language-first instead — eleven languages including Hinglish, Gujarati, Marathi, Tamil, Telugu, Bengali, Punjabi — because the shop owner this is for is not the shop owner's college-going son who's fluent in app-English; it's the person actually standing behind the counter.",
          "The third: GST in India isn't one flow, it's three. A shop can be on Regular scheme (full input tax credit), Composition (flat 1%, no ITC), or exempt under the ₹40L threshold — and the tax logic (CGST+SGST vs IGST) changes depending on whether the sale crosses a state line. I built the tax engine to ask which scheme a shop is on and compute accordingly, rather than assuming every user is a full Regular-scheme filer the way a lot of \"GST billing\" apps quietly do. That's a decision most vibe-coded finance demos skip because it's invisible in a screenshot — it only shows up when the numbers are actually right.",
        ],
        clip: "/lab/hisab-ledger.jpg",
        clipCaption:
          "Every captured bill carries a confidence score — the 72% mandi slip is held back for Review & Verify instead of posting straight to the ledger.",
      },
      {
        heading: "What it does today",
        body: "A shop owner can log purchases by photo, run sales through a POS-style \"New Sale\" flow, track customer credit (khata) with per-customer balances and a one-tap payment reminder, and see a monthly Profit & Revenue view that nets output GST against input tax credit to show what's actually payable to the government — not just what came in and went out. Cash-vs-credit sales are split automatically, and the whole financial summary is exportable to WhatsApp, because that's the channel this shop owner already uses to talk to their accountant.",
        clip: "/lab/hisab-khata.jpg",
        clipCaption: "The khata: per-customer outstanding balances with one-tap payment reminders.",
      },
      {
        heading: "What I'd need to prove next",
        body: "This is a prototype, not a shipped product — the OCR is simulated against realistic Indian invoice formats rather than trained on a live document pipeline, and there's no real payments or filing integration yet. The open question I'd want to test with actual shopkeepers: does a confidence-scored review queue actually get used, or does it get rubber-stamped the way most \"please review\" UIs do in practice? That's a behavioral question no amount of solo building answers — it's the next thing I'd want real usage data on.",
      },
      {
        heading: "What this shows about how I work",
        body: "I didn't start from \"what can Claude Code build me quickly.\" I started from where the existing category was leaving money on the table — the capture step, not the ledger step — and built the parts that are boring to demo but load-bearing for trust: confidence thresholds, scheme-aware tax logic, a language list that matches who's actually behind the counter. That's the same instinct I'd bring to any product decision: build the invisible thing that makes the visible thing trustworthy.",
      },
    ],
  },
];

// GitHub handle whose contribution calendar renders on the Lab page.
export const githubUsername = "onu-pm";

export const building = {
  headlineLead: "Dreaming big -",
  headlineAccent: "one small step at a time.",
  body: "Incubators and mentors to the front please!",
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
