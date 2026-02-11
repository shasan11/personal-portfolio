import PageHeader from "@/components/site/page-header";
import { certifications } from "@/data/portfolio-content";

export const metadata = {
    title: "Certifications — Shasan Dhakal",
    description:
        "AWS SAA, Google PM, Google Data Analytics, Wharton Business Foundations, IBM Product Manager.",
};

export default function CertificationsPage() {
    return (
        <>
            <PageHeader heading="Certifications" subheading="Signal + skills. Kept relevant to product, delivery, and systems." />
            <section className="service-area over-hidden pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        {certifications.map((item) => (
                            <div className="col-xl-10" key={item.name}>
                                <div className="single-service neutral-bg border-radius12 pl-35 pr-35 pt-35 pb-35 mb-30">
                                    <h4 className="mb-10">{item.name}</h4>
                                    <p className="mb-0">{item.blurb}</p>
                                    {item.proof && <p className="mt-10 mb-0">Proof: {item.proof}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
