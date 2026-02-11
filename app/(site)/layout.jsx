import Footer from "@/components/footer/footer";
import Header1 from "@/components/header/header-1";

export default function SiteLayout({ children }) {
    return (
        <main className="over-hidden">
            <Header1 />
            {children}
            <Footer />
        </main>
    );
}
