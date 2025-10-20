export type ExperienceItem = {
  title: string;
  institution: string;
  timeline: string;
  bullets: string[];
  imageURL: string;
  imageAlt: string;
  imageTheme: string;
};

export const experiences: ExperienceItem[] = [
  {
    title: "Research Engineer",
    institution: "Dept. of Nuclear Medicine, Cleveland Clinic",
    timeline: "Jun 2025 – Present",
    bullets: [
      "Automated 1.2k CT attenuation studies, reducing manual contouring time by 42% with TotalSegmentator pipelines.",
      "Forecasted scanner bed utilization for three radiology suites, opening 18% more daily slots.",
      "Containerised segmentation workflows so six radiologists can redeploy updates in under eight minutes.",
    ],
    imageURL: "/images/experience/mri-overlay.svg",
    imageAlt: "MRI scan overlay with segmentation contours and analytic annotations.",
    imageTheme: "MRI overlays",
  },
  {
    title: "Data Scientist",
    institution: "IU School of Medicine",
    timeline: "Jun 2024 – May 2025",
    bullets: [
      "Shipped SQ-MRI clinical decision system that raised chronic pancreatitis sensitivity 23% across 320 cases.",
      "Trained two brain MRI U-Nets to 0.91 Dice, trimming report turnaround from 36 to 22 hours.",
      "Set up automated ML ops with reproducible containers, cutting reruns by 60% for four project teams.",
    ],
    imageURL: "/images/experience/code-fusion.svg",
    imageAlt: "Code to image fusion concept with neural gradients blending into anatomical imagery.",
    imageTheme: "Code-to-image fusion",
  },
  {
    title: "Data Analyst",
    institution: "PLHI · IU Indianapolis",
    timeline: "Jan 2023 – May 2024",
    bullets: [
      "Co-led Human-AI Assemblage study across five hospitals, analysing 12k reads to deliver 17% faster triage.",
      "Built Power BI surveillance that flagged labeling drift within 48 hours across three radiology labs.",
      "Mentored 30+ analysts weekly, boosting SQL audit scores by 28% in semester reviews.",
    ],
    imageURL: "/images/experience/lab-environment.svg",
    imageAlt: "Hybrid clinical lab workspace with dashboards, lab glassware, and imaging monitors.",
    imageTheme: "Lab environments",
  },
];
