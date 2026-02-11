import Link from "next/link";
import PageHeader from "./page-header";
import ContentSection from "./content-section";

export default function CaseStudyPage({ data }) {
    return (
        <>
            <PageHeader heading={data.title} subheading={data.subheading} />

            <section className="fun-fact-area pb-70">
                <div className="container">
                    <div className="row">
                        {data.quickMeta.map((item, idx) => (
                            <div className="col-lg-6" key={idx}>
                                <div className="single-fact p-30 mb-30 text-center border-radius12">
                                    <h6 className="mb-10">{item.label}</h6>
                                    <p className="mb-0">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {data.sections.map((section, idx) => (
                <ContentSection key={idx} heading={section.heading} body={section.body} bullets={section.bullets} />
            ))}

            <section className="contact-area pb-120">
                <div className="container text-center">
                    <h5 className="mb-20">Live / product page</h5>
                    <Link href={data.link.href} target="_blank" rel="noreferrer" className="btn position-relative over-hidden theme-bg text-white text-capitalize">
                        {data.link.label}
                    </Link>
                </div>
            </section>
        </>
    );
}
