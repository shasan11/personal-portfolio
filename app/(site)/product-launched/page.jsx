import Link from "next/link";
import PageHeader from "@/components/site/page-header";
import { caseStudies } from "@/data/portfolio-content";

export const metadata = {
    title: "Product Launched — Shasan Dhakal",
    description: "Live platforms launched: LogiDesk, LedgerFlow, Vedanica.",
};

export default function ProductLaunchedPage() {
    return (
        <>
            <PageHeader heading="Product Launched" subheading="Live links to platforms I’ve built and shipped." />
            <section className="service-area over-hidden pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        {caseStudies.map((item) => (
                            <div className="col-xl-10" key={item.slug}>
                                <div className="single-service neutral-bg border-radius12 pl-35 pr-35 pt-35 pb-35 mb-30">
                                    <h4 className="mb-10">{item.title}</h4>
                                    <p>{item.summary}</p>
                                    <ul className="pl-20 mb-20">
                                        {item.sections[1]?.bullets?.slice(0, 2).map((bullet, idx) => (
                                            <li key={idx} className="mb-2">{bullet}</li>
                                        ))}
                                    </ul>
                                    <Link href={item.link.href} target="_blank" rel="noreferrer" className="theme-color f-700">{item.link.label}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
