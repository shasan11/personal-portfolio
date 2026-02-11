import Link from "next/link";
import Image from "next/image";
import navigation from "@/data/navigation";
import { siteLinks } from "@/data/portfolio-content";

export default function Footer() {
    return (
        <footer>
            <div className="footer-area over-hidden pt-80 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mb-30">
                            <div className="footer-widget">
                                <div className="foot-logo mb-20">
                                    <Image height={36} width={160} src="/images/logo/logo.png" alt="Shasan Dhakal" />
                                </div>
                                <p className="mb-15">
                                    Product Manager with full-stack background building B2B SaaS across logistics, GCC SME operations, and learning platforms.
                                </p>
                                <p className="mb-0">
                                    Email: {siteLinks.email} • LinkedIn: linkedin.com/in/shasan-dhakal • GitHub: github.com/shasan11
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 mb-30">
                            <div className="footer-widget">
                                <h5 className="mb-20">Quick Links</h5>
                                <ul>
                                    {navigation
                                        .filter((item) => item.path !== "/")
                                        .map((item) => (
                                            <li key={item.path} className="mb-2">
                                                <Link href={item.path}>{item.label}</Link>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-30">
                            <div className="footer-widget">
                                <h5 className="mb-20">Connect</h5>
                                <ul>
                                    <li className="mb-2"><Link href={`mailto:${siteLinks.email}`}>Email Me</Link></li>
                                    <li className="mb-2"><Link href={siteLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</Link></li>
                                    <li className="mb-2"><Link href={siteLinks.github} target="_blank" rel="noreferrer">GitHub</Link></li>
                                    <li><Link href={siteLinks.portfolio} target="_blank" rel="noreferrer">Portfolio Site</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright-text pt-20 mt-10 border-top text-center">
                                <p className="mb-0">© {new Date().getFullYear()} Shasan Dhakal. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
