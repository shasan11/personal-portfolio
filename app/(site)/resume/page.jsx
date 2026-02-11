import Link from "next/link";
import PageHeader from "@/components/site/page-header";
import { siteLinks } from "@/data/portfolio-content";

export const metadata = {
    title: "Resume — Shasan Dhakal",
    description: "Download Shasan Dhakal’s resume (Senior Product Manager / TPM).",
};

export default function ResumePage() {
    return (
        <>
            <PageHeader heading="Resume" subheading="One-page, ATS-friendly. Dubai-ready." />
            <section className="contact-area pb-70">
                <div className="container text-center">
                    <p className="mb-30">Download the latest resume here. If you want a role-specific version (Senior PM vs Pre-Sales), message me and I’ll share the tailored copy.</p>
                    <div className="d-flex justify-content-center flex-wrap">
                        <Link href={siteLinks.resumePdf} className="btn position-relative over-hidden theme-bg text-white text-capitalize mr-3 mb-2">Download PDF Resume</Link>
                        <Link href={siteLinks.linkedin} target="_blank" rel="noreferrer" className="btn position-relative over-hidden text-capitalize mb-2">View LinkedIn</Link>
                    </div>
                </div>
            </section>
            <section className="fun-fact-area pb-120">
                <div className="container">
                    <div className="row">
                        {[
                            "Open to relocate: Dubai/UAE",
                            "Domains: Logistics • GCC SME operations • Learning platforms",
                            "Strength: discovery → delivery with technical depth",
                        ].map((fact) => (
                            <div className="col-lg-4" key={fact}><div className="single-fact p-30 mb-30 border-radius12 text-center"><p className="mb-0">{fact}</p></div></div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
