import CaseStudyPage from "@/components/site/case-study-page";
import { caseStudies } from "@/data/portfolio-content";

const data = caseStudies.find((item) => item.slug === "logidesk");

export const metadata = {
    title: "LogiDesk Case Study — Shasan Dhakal",
    description: "Workflow-heavy logistics platform for freight forwarders, carriers, and customs.",
};

export default function LogideskPage() {
    return <CaseStudyPage data={data} />;
}
