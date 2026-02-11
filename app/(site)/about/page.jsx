import PageHeader from "@/components/site/page-header";
import ContentSection from "@/components/site/content-section";

export const metadata = {
    title: "About — Shasan Dhakal",
    description:
        "Product Manager + ex full-stack engineer. B2B SaaS across logistics, GCC SME operations, and learning cloud.",
};

export default function AboutPage() {
    return (
        <>
            <PageHeader heading="About me" subheading="Product + engineering mindset. I care about clarity, speed, and usability." />
            <ContentSection
                heading="My lane"
                body="I’m a Product Manager with a full-stack engineering background. I’m strongest in workflow-heavy B2B products — the kind where permissions, approvals, data consistency, and edge cases matter. I like problems that are messy in real life and clean on the screen."
            />
            <ContentSection
                heading="How I work"
                bullets={[
                    "Discovery first: stakeholders, workflows, constraints, success criteria",
                    "Scope like an adult: tight boundaries, assumptions, tradeoffs, phased delivery",
                    "Ship with quality: acceptance criteria, QA alignment, release checklists",
                    "Design for operators: reduce clicks, prevent errors, handle edge cases",
                ]}
            />
            <ContentSection
                heading="What I’m aiming for (Dubai/UAE)"
                body="Senior Product Manager / Technical Product Manager roles in B2B SaaS. I’m especially interested in platforms with strong operational workflows, integrations, and measurable business impact."
            />

            <section className="fun-fact-area pb-70">
                <div className="container">
                    <div className="title text-center mb-30"><h3>Fast facts</h3></div>
                    <div className="row">
                        {[
                            ["Location", "Kathmandu, Nepal (Open to relocate: Dubai/UAE)"],
                            ["Strengths", "Workflow design • Delivery • Technical tradeoffs • Usability"],
                            ["Languages", "English (Fluent) • Hindi (Fluent) • Urdu (Fluent)"],
                        ].map(([label, value]) => (
                            <div className="col-lg-4" key={label}>
                                <div className="single-fact p-30 mb-30 border-radius12 text-center">
                                    <h6 className="mb-10">{label}</h6>
                                    <p className="mb-0">{value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ContentSection
                heading="Education"
                body="Leeds Beckett University — BSc (Hons) Computing — First Class Honours (2021–2025). Final Year Project: Quantum Safe Decentralized Superapp. Capstone focused on building a security-first architecture concept for a decentralized “superapp” designed to remain resilient against future cryptographic threats."
            />
        </>
    );
}
