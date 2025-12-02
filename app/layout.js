import Preloader from "@/components/ui/preloader";
import { openSans, play } from "./fonts";
import "./globals.css";
import Providers from "./providers";

export const metadata = {
    title: "Shasan Dhakal | Software Engineer & Web Developer",
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
