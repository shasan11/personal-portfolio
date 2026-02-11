import Link from "next/link";
import { homePage, siteBrand, siteLinks } from "@/data/portfolio-content";

export const metadata = {
    title: "Shasan Dhakal — Senior Product Manager (B2B SaaS) | Dubai",
    description:
        "Senior Product Manager + ex full-stack engineer. Case studies across logistics, GCC SME platforms, and learning cloud. Open to Dubai/UAE.",
};

export default function HomePage() {
    return (
        <>
            <section className="slider-area">
                <div className="single-slider slider-height extra-width position-relative">
                    <div className="container d-flex align-items-center">
                        <div className="row align-items-center slider-content-height">
                            <div className="col-xl-9 col-lg-10 col-md-12">
                                <div className="slider-content text-center text-lg-left mt-45">
                                    <h1 className="mb-20">{siteBrand.name}</h1>
                                    <h4 className="mb-20">{siteBrand.taglinePrimary}</h4>
                                    <p className="mb-10">{siteBrand.taglineSecondary}</p>
                                    <p className="mb-25">{siteBrand.locationLine}</p>
                                    <h3 className="mb-20">{homePage.hero.heading}</h3>
                                    <p>{homePage.hero.subheading}</p>
                                    <div className="d-flex flex-wrap gap-2 mt-20 mb-30">
                                        {homePage.hero.proofChips.map((chip) => (
                                            <span key={chip} className="d-inline-block theme-border border-radius12 px-3 py-2 mr-2 mb-2">{chip}</span>
                                        ))}
                                    </div>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Link href={homePage.hero.ctas.primary.href} className="btn position-relative over-hidden theme-bg text-white text-capitalize mr-3 mb-2">{homePage.hero.ctas.primary.label}</Link>
                                        <Link href={homePage.hero.ctas.secondary.href} className="btn position-relative over-hidden text-capitalize mb-2">{homePage.hero.ctas.secondary.label}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-area over-hidden pb-70 pt-50">
                <div className="container">
                    <div className="title text-center mb-45"><h3>{homePage.value.heading}</h3></div>
                    <div className="row">
                        {homePage.value.cards.map((card) => (
                            <div className="col-lg-6" key={card.title}>
                                <div className="single-service neutral-bg border-radius12 pl-35 pr-35 pt-35 pb-35 mb-30">
                                    <h4 className="mb-15">{card.title}</h4>
                                    <p className="mb-0">{card.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="portfolio-area over-hidden pb-70">
                <div className="container">
                    <div className="title text-center mb-20"><h3>{homePage.featuredWork.heading}</h3></div>
                    <p className="text-center mb-40">{homePage.featuredWork.intro}</p>
                    <div className="row">
                        {homePage.featuredWork.items.map((item) => (
                            <div className="col-lg-4" key={item.title}>
                                <div className="single-service neutral-bg border-radius12 pl-30 pr-30 pt-30 pb-30 mb-30 h-100">
                                    <h4 className="mb-10">{item.title}</h4>
                                    <p className="mb-15">{item.subtitle}</p>
                                    <ul className="pl-20 mb-20">
                                        {item.bullets.map((bullet, idx) => <li key={idx} className="mb-2">{bullet}</li>)}
                                    </ul>
                                    <Link href={item.href} className="theme-color f-700">{item.ctaLabel}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="fun-fact-area pb-70">
                <div className="container">
                    <div className="title text-center mb-30"><h3>Domain strengths</h3></div>
                    <div className="row">
                        {homePage.domains.map((item) => (
                            <div className="col-lg-6" key={item}><div className="single-fact p-30 mb-30 border-radius12"><p className="mb-0">{item}</p></div></div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="award-area pb-70">
                <div className="container text-center">
                    <h3 className="mb-25">{homePage.certStrip.heading}</h3>
                    <div className="d-flex flex-wrap justify-content-center mb-25">
                        {homePage.certStrip.items.map((item) => <span key={item} className="mr-3 mb-2">• {item}</span>)}
                    </div>
                    <Link href={homePage.certStrip.cta.href} className="btn position-relative over-hidden theme-bg text-white text-capitalize">{homePage.certStrip.cta.label}</Link>
                </div>
            </section>

            <section className="contact-area pb-120">
                <div className="container text-center">
                    <h3 className="mb-20">{homePage.contact.heading}</h3>
                    <p className="mb-25">{homePage.contact.body}</p>
                    <div className="d-flex flex-wrap justify-content-center">
                        <Link href={`mailto:${siteLinks.email}`} className="btn position-relative over-hidden theme-bg text-white text-capitalize mr-3 mb-2">Email me</Link>
                        <Link href={siteLinks.linkedin} target="_blank" rel="noreferrer" className="btn position-relative over-hidden text-capitalize mb-2">Message on LinkedIn</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
