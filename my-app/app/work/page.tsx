import { ImpactMetrics } from "@/components/work/ImpactMetrics";
import { ExperienceTimeline } from "@/components/work/ExperienceTimeline";
import { CaseStudyShowcase } from "@/components/work/CaseStudyCard";

export const metadata = {
  title: "Work Experience | Amulya Veldandi",
  description: "Explore my professional experience in healthcare AI, data science, and clinical informatics.",
};

export default function WorkPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <div className="sr-only">
        <h1>Work Experience and Case Studies</h1>
      </div>
      <ExperienceTimeline />
      <ImpactMetrics />
      <CaseStudyShowcase />
    </div>
  );
}
