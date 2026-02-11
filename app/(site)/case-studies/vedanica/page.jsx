import CaseStudyPage from "@/components/site/case-study-page";
import { caseStudies } from "@/data/portfolio-content";

const data = caseStudies.find((item) => item.slug === "vedanica");

export const metadata = {
    title: "Vedanica Case Study — Shasan Dhakal",
    description: "Learning cloud platform for institutes — admin + educator workflows.",
};

export default function VedanicaPage() {
    return <CaseStudyPage data={data} />;
}
