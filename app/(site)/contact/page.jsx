import Link from "next/link";
import PageHeader from "@/components/site/page-header";
import { siteLinks } from "@/data/portfolio-content";

export const metadata = {
    title: "Contact — Shasan Dhakal",
    description: "Contact Shasan Dhakal for Senior Product Manager / Technical PM roles in Dubai/UAE.",
};

export default function ContactPage() {
    return (
        <>
            <PageHeader heading="Contact" subheading="Fastest ways to reach me." />
            <section className="service-area over-hidden pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        {[
                            ["Email", siteLinks.email, `mailto:${siteLinks.email}`],
                            ["LinkedIn", "linkedin.com/in/shasan-dhakal", siteLinks.linkedin],
                            ["GitHub", "github.com/shasan11", siteLinks.github],
                        ].map(([label, value, href]) => (
                            <div className="col-xl-10" key={label}>
                                <div className="single-service neutral-bg border-radius12 pl-35 pr-35 pt-35 pb-35 mb-30 d-flex justify-content-between align-items-center flex-wrap">
                                    <div>
                                        <h5 className="mb-5">{label}</h5>
                                        <p className="mb-0">{value}</p>
                                    </div>
                                    <Link href={href} target={label !== "Email" ? "_blank" : undefined} rel={label !== "Email" ? "noreferrer" : undefined} className="theme-color f-700 mt-2 mt-md-0">Open</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="contact-area pb-120">
                <div className="container text-center">
                    <p className="mb-0">If you’re reaching out about a role, include: title, company, location (Dubai/UAE), and what you want me to own (0→1, scale, integrations, ops workflows).</p>
                </div>
            </section>
        </>
    );
}
