import Link from "next/link";
import PageHeader from "@/components/site/page-header";
import { caseStudies } from "@/data/portfolio-content";

export const metadata = {
    title: "Case Studies — Shasan Dhakal",
    description: "Case studies: LogiDesk, LedgerFlow, Vedanica — workflow-heavy B2B SaaS products.",
};

export default function CaseStudiesPage() {
    return (
        <>
            <PageHeader heading="Case Studies" subheading="How I think, how I ship, and what I deliver." />
            <section className="service-area over-hidden pb-120">
                <div className="container">
                    <p className="text-center mb-40">These aren’t “pretty screenshots.” Each case study shows problem framing, scope, workflows, delivery approach, and outcomes. Replace metric placeholders with your real numbers.</p>
                    <div className="row justify-content-center">
                        {caseStudies.map((study) => (
                            <div className="col-xl-10" key={study.slug}>
                                <div className="single-service neutral-bg border-radius12 pl-35 pr-35 pt-35 pb-35 mb-30">
                                    <h4 className="mb-10">{study.title}</h4>
                                    <p className="mb-10">{study.summary}</p>
                                    <div className="mb-15">{study.tags.map((tag) => <span key={tag} className="mr-3">#{tag}</span>)}</div>
                                    <Link href={`/case-studies/${study.slug}`} className="theme-color f-700">Read case study</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
