import Preloader from "@/components/ui/preloader";
import { openSans, play } from "./fonts";
import "./globals.css";
import Providers from "./providers";

export const metadata = {
    title: "Shasan Dhakal — Senior Product Manager (B2B SaaS)",
    description:
        "Senior Product Manager + ex full-stack engineer building workflow-heavy B2B SaaS products.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${play.variable} ${openSans.variable}`}>
                <Preloader />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
