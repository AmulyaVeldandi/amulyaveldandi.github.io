import { ExperienceGrid } from "@/components/work/ExperienceGrid";
import { ImpactMetrics } from "@/components/work/ImpactMetrics";
import { ExperienceTimeline } from "@/components/work/ExperienceTimeline";
import { CaseStudyShowcase } from "@/components/work/CaseStudyCard";

export const metadata = {
  title: "Work Experience | Amulya Veldandi",
  description: "Explore my professional experience in healthcare AI, data science, and clinical informatics.",
};

export default function WorkPage() {
  return (
    <div className="pb-24 space-y-16">
      <div className="sr-only">
        <h1>Work Experience and Case Studies</h1>
      </div>
      <ExperienceGrid />
      <ImpactMetrics />
      <ExperienceTimeline />
      <CaseStudyShowcase />
    </div>
  );
}
