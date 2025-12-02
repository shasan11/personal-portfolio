import { Open_Sans, Play } from "next/font/google";

/**
 * Google fonts
 */
export const play = Play({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    variable: "--font-play",
});

export const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"],
    display: "swap",
    variable: "--font-open-sans",
});
