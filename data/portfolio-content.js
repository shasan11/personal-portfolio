export const siteBrand = {
    name: "Shasan Dhakal",
    taglinePrimary: "Senior Product Manager (B2B SaaS) + Ex Full-Stack Engineer",
    taglineSecondary:
        "I build workflow-heavy platforms that operators actually use — and I ship.",
    locationLine: "Kathmandu, Nepal • Open to relocate: Dubai / UAE",
};

export const siteLinks = {
    email: "shasandhakal105@gmail.com",
    linkedin: "https://www.linkedin.com/in/shasan-dhakal/",
    github: "https://github.com/shasan11",
    portfolio: "https://shasandhakal.com.np",
    resumePdf: "/Shasan-Dhakal-Resume.pdf",
    productLaunched: {
        logidesk: "https://logidesk.cortifox.com",
        ledgerflow: "https://ledgerflow.cortifox.com",
        vedanica: "https://vedanica.cortifox.com",
    },
};

export const homePage = {
    hero: {
        heading: "Senior Product Manager who can go from discovery → shipping (without the fluff).",
        subheading:
            "I build workflow-heavy B2B SaaS products — logistics/freight, GCC-oriented SME platforms, and learning systems. Strong technical depth (APIs, RBAC, data models, integrations, AWS) so decisions stay realistic and delivery stays fast.",
        proofChips: [
            "AWS Certified Solutions Architect – Associate",
            "Google Project Management Professional Certificate",
            "Google Data Analytics Professional Certificate",
            "First Class Honours — Leeds Beckett University",
        ],
        ctas: {
            primary: { label: "Download Resume", href: "/Shasan-Dhakal-Resume.pdf" },
            secondary: { label: "View Case Studies", href: "/case-studies" },
        },
    },
    value: {
        heading: "What you get when you hire me",
        cards: [
            {
                title: "Clear product thinking",
                body: "I turn messy requirements into crisp scope: PRDs, user stories, acceptance criteria, workflows, and success metrics.",
            },
            {
                title: "Execution that actually ships",
                body: "I run cross-functional delivery with design, engineering, and QA — and I obsess over release readiness and usability.",
            },
            {
                title: "Technical depth without ego",
                body: "I can talk architecture tradeoffs: APIs, permissions (RBAC), data models, integrations, and cloud constraints.",
            },
            {
                title: "Operator-friendly UX",
                body: "I design flows for non-technical users: approvals, dashboards, bulk actions, validation, edge cases, and audit trails.",
            },
        ],
    },
    featuredWork: {
        heading: "Featured case studies",
        intro: "A few platforms I’ve built and shipped — focused on workflows, delivery, and real operational pain.",
        items: [
            {
                title: "LogiDesk",
                subtitle: "Freight forwarders, carriers, and customs workflows",
                bullets: [
                    "Workflow-heavy operations: documentation, tracking, approvals",
                    "Role-based access and operator-friendly UX",
                    "Built for real-world logistics constraints",
                ],
                ctaLabel: "Read case study",
                href: "/case-studies/logidesk",
            },
            {
                title: "LedgerFlow",
                subtitle: "GCC-compliant SME platform: accounts, inventory, ecommerce, CRM",
                bullets: [
                    "Modular suite design with permissions + reporting",
                    "Compliance-minded structure for GCC context",
                    "Built for SMEs: speed + usability",
                ],
                ctaLabel: "Read case study",
                href: "/case-studies/ledgerflow",
            },
            {
                title: "Vedanica",
                subtitle: "Learning cloud platform for institutes",
                bullets: [
                    "Admin + educator workflows designed for non-technical users",
                    "Scalable institute operations and content delivery",
                    "Clear module boundaries for growth",
                ],
                ctaLabel: "Read case study",
                href: "/case-studies/vedanica",
            },
        ],
    },
    domains: [
        "Logistics / Freight forwarding / Operations",
        "Accounting + Inventory workflows for SMEs",
        "Workflow approvals, RBAC, reporting, auditability",
        "Multi-tenant SaaS patterns and scalability thinking",
    ],
    certStrip: {
        heading: "Certifications",
        items: [
            "AWS Certified Solutions Architect – Associate",
            "Google Project Management Professional Certificate",
            "Google Data Analytics Professional Certificate",
            "Wharton Business Foundations Specialization",
            "IBM Product Manager",
        ],
        cta: { label: "See all certifications", href: "/certifications" },
    },
    contact: {
        heading: "Want to talk?",
        body: "If you’re hiring in Dubai/UAE for Senior PM / TPM roles (or product-heavy solutions roles), I’m open to interviews.",
    },
};

export const caseStudies = [
    {
        slug: "logidesk",
        title: "LogiDesk",
        summary: "All-in-one platform for freight forwarders, carriers, and customs workflows.",
        tags: ["Logistics", "Workflow", "RBAC", "Operations"],
        subheading: "All-in-one platform for freight forwarders, carriers, and customs",
        quickMeta: [
            { label: "My role", value: "Product Manager (Strategy + Delivery) + Technical direction" },
            { label: "Users", value: "[[METRIC: Freight teams / operators]]" },
            { label: "Timeline", value: "[[METRIC: months / quarters]]" },
            { label: "Stack (high level)", value: "Workflow-first SaaS (APIs, RBAC, reporting, integrations)" },
        ],
        sections: [
            {
                heading: "Problem",
                body: "Logistics operations break when systems are unclear: too many manual steps, inconsistent documentation, approval bottlenecks, and errors that cost time and money. Teams need predictable workflows and visibility.",
                bullets: [
                    "Manual coordination across shipments, docs, approvals, and tracking",
                    "Non-technical operators need speed + correctness",
                    "Workflow edge cases are the norm, not the exception",
                ],
            },
            {
                heading: "What I owned",
                bullets: [
                    "Discovery: workflows, stakeholder needs, constraints",
                    "Product scope: modules, boundaries, priorities",
                    "UX flows: end-to-end operator journeys",
                    "Delivery: stories, acceptance criteria, QA alignment, releases",
                    "Technical tradeoffs: RBAC, data model boundaries, integration notes",
                ],
            },
            {
                heading: "Solution",
                body: "A workflow-heavy platform centered on operational clarity: standardized processes, role-based access, validations, and reporting that reduces “guesswork work.”",
                bullets: [
                    "Role-based access (RBAC) and permissions per operational role",
                    "Approval-driven workflows with auditability",
                    "Operator-friendly UX: bulk actions, validations, consistent states",
                    "Reporting views for visibility and handovers",
                ],
            },
            {
                heading: "Impact",
                body: "Replace these placeholders with your real outcomes.",
                bullets: [
                    "Reduced process cycle time by [[METRIC: % / hours]]",
                    "Reduced documentation errors by [[METRIC: %]]",
                    "Improved onboarding time for operators by [[METRIC: % / days]]",
                    "Shipped [[METRIC: releases]] releases covering [[METRIC: modules]] modules",
                ],
            },
            {
                heading: "Artifacts (optional but powerful)",
                bullets: [
                    "PRD excerpt (sanitized)",
                    "Workflow diagram (shipment → docs → approval → reporting)",
                    "Role/permission matrix",
                    "Demo script outline for stakeholders",
                ],
            },
        ],
        link: { label: "logidesk.cortifox.com", href: "https://logidesk.cortifox.com" },
    },
    {
        slug: "ledgerflow",
        title: "LedgerFlow",
        summary: "GCC-compliant SME suite: accounts, inventory, ecommerce, marketing, CRM.",
        tags: ["GCC", "Finance", "Inventory", "Platform"],
        subheading: "GCC-compliant SME platform: accounts, inventory, ecommerce, marketing, CRM",
        quickMeta: [
            { label: "My role", value: "Product scope + workflows + delivery alignment" },
            { label: "Customer", value: "SMEs (GCC oriented)" },
            { label: "Key focus", value: "Modular suite design, permissions, reporting, usability" },
        ],
        sections: [
            {
                heading: "Problem",
                body: "SMEs don’t want 10 tools. They want one system that feels simple, stays consistent, and supports real finance + operations workflows without breaking when scale increases.",
            },
            {
                heading: "What I built",
                bullets: [
                    "Module boundaries for accounts + inventory + CRM + ecommerce",
                    "Workflow-first UX (non-technical users)",
                    "Permissions and reporting foundations",
                    "Integration-ready thinking (payments, messaging, etc.)",
                ],
            },
            {
                heading: "What makes it strong",
                bullets: [
                    "Consistency across modules (shared patterns, validation, statuses)",
                    "Role-based access and audit-friendly workflow states",
                    "Designed to grow: clean boundaries instead of spaghetti",
                ],
            },
            {
                heading: "Impact",
                body: "Replace placeholders with your outcomes.",
                bullets: [
                    "Improved task completion speed by [[METRIC: %]]",
                    "Reduced errors / support tickets by [[METRIC: %]]",
                    "Delivered [[METRIC: modules]] modules with [[METRIC: releases]] releases",
                ],
            },
        ],
        link: { label: "ledgerflow.cortifox.com", href: "https://ledgerflow.cortifox.com" },
    },
    {
        slug: "vedanica",
        title: "Vedanica",
        summary: "Learning cloud platform built for institute operations and content delivery.",
        tags: ["Education", "Admin UX", "Scalable Modules"],
        subheading: "Learning cloud platform for institute operations and content delivery",
        quickMeta: [
            { label: "My role", value: "Product workflows + UX clarity + delivery alignment" },
            { label: "Users", value: "Admins, educators, students (non-technical operators)" },
            { label: "Key focus", value: "Usability, scalable module boundaries, operational clarity" },
        ],
        sections: [
            {
                heading: "Problem",
                body: "Learning platforms often fail on admin workflows — messy setup, confusing flows, and too many clicks. Institutes need clarity: manage programs, content, users, and operations without tech headaches.",
            },
            {
                heading: "Solution",
                bullets: [
                    "Admin-first workflows that reduce confusion",
                    "Clear module boundaries for future growth",
                    "Usability improvements: fewer steps, better validation, consistent navigation",
                ],
            },
            {
                heading: "Impact",
                body: "Replace placeholders with your outcomes.",
                bullets: [
                    "Reduced admin setup time by [[METRIC: % / days]]",
                    "Improved adoption across institutes by [[METRIC: count]]",
                    "Shipped [[METRIC: releases]] iterations improving usability",
                ],
            },
        ],
        link: { label: "vedanica.cortifox.com", href: "https://vedanica.cortifox.com" },
    },
];

export const certifications = [
    {
        name: "AWS Certified Solutions Architect – Associate",
        proof: "[[OPTIONAL: credential link]]",
        blurb: "Architecture fundamentals, system tradeoffs, cloud design thinking.",
    },
    {
        name: "Google Project Management Professional Certificate",
        blurb: "Delivery discipline: planning, risk management, stakeholder alignment.",
    },
    {
        name: "Google Data Analytics Professional Certificate",
        blurb: "Analytics mindset: KPIs, SQL thinking, decision support.",
    },
    {
        name: "Wharton Business Foundations Specialization",
        blurb: "Business fundamentals: strategy, operations, finance concepts.",
    },
    {
        name: "IBM Product Manager",
        blurb: "Product lifecycle and execution structure.",
    },
];
