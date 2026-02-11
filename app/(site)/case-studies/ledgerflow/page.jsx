import CaseStudyPage from "@/components/site/case-study-page";
import { caseStudies } from "@/data/portfolio-content";

const data = caseStudies.find((item) => item.slug === "ledgerflow");

export const metadata = {
    title: "LedgerFlow Case Study — Shasan Dhakal",
    description: "GCC-compliant SME suite: accounts, inventory, ecommerce, marketing, CRM.",
};

export default function LedgerflowPage() {
    return <CaseStudyPage data={data} />;
}
