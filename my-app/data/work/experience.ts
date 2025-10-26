import type {
  ExperienceRole,
  ImpactMetric,
  TimelineEntry,
} from "@/lib/content-types";

const metrics = (
  items: ImpactMetric[],
): ImpactMetric[] => items.map((metric) => ({ variant: "increase", ...metric }));

export const experienceRoles: ExperienceRole[] = [
  {
    slug: "cleveland-clinic-research-engineer",
    organisation: "Cleveland Clinic · Diagnostics Institute",
    location: "Cleveland, OH · Hybrid",
    category: "Research",
    role: "Research Engineer · Nuclear Medicine",
    period: "Jun 2025 – Present",
    summary:
      "Developing automated CT analysis pipelines that reduce manual profiling by 80% and predict scanner bed time to optimize throughput.",
    achievements: [
      "Automated CT analysis for 1,200+ imaging studies with TotalSegmentator-derived region masks, cutting manual attenuation profiling effort by 80%.",
      "Built predictive models from tissue-specific attenuation profiles to estimate per-patient scanner bed time, saving 2–3 minutes per scan.",
      "Streamlined large-scale batch processing with Python and Docker, reducing pipeline turnaround from 48 hours to 4 hours.",
      "Collaborated with radiologists, physicists, and data analysts to validate outputs and ensure clinical integration and regulatory compliance.",
    ],
    metrics: metrics([
      { label: "Manual Effort", value: "↓80%", description: "Reduction in attenuation profiling time" },
      { label: "Scanner Time", value: "2–3 min/scan", description: "Time saved per patient scan" },
      { label: "Pipeline Speed", value: "48→4 hrs", description: "End-to-end processing turnaround" },
    ]),
    technologies: ["Python", "Docker", "TotalSegmentator", "AWS", "DICOM"],
    links: [
      { label: "Department", href: "https://my.clevelandclinic.org/departments/diagnostic-radiology" },
    ],
  },
  {
    slug: "iu-som-data-scientist",
    organisation: "Indiana University School of Medicine",
    location: "Indianapolis, IN · Hybrid",
    category: "Research",
    role: "Data Scientist · Medical Imaging AI",
    period: "Jun 2024 – May 2025",
    summary:
      "Built automated deep learning pipelines for pancreas MRI analysis and brain segmentation, reducing manual effort by 90%.",
    achievements: [
      "Engineered automated deep-learning pipeline using TotalSegmentator + Docker to segment pancreas/spleen across 200+ multiphase MRI subjects, reducing manual ROI delineation time by 90%.",
      "Developed algorithms to compute quantitative biomarkers from multiphase DICOM/NIfTI inputs, creating standardized SQ-MRI scores that improved reproducibility across scanners and institutions.",
      "Built automated deep learning pipelines using TensorFlow + custom 3D U-Net with Quartz GPU acceleration, cutting training time by 40%.",
      "Achieved 0.75 Dice coefficient with multimodal brain MRI segmentation (T1/T2 ratio + FLAIR) on 40+ datasets.",
      "Supported weekly lectures on Python, R, and SQL to 30+ graduate students per semester, raising student satisfaction by 20%.",
    ],
    metrics: metrics([
      { label: "Manual ROI Time", value: "↓90%", description: "Reduction in delineation effort" },
      { label: "Training Speed", value: "↓40%", description: "Faster model convergence with GPU acceleration" },
      { label: "Dice Coefficient", value: "0.75", description: "Brain MRI segmentation accuracy" },
    ]),
    technologies: ["PyTorch", "TensorFlow", "Docker", "TotalSegmentator", "Python", "MATLAB"],
    links: [
      { label: "APA 2025 Abstract", href: "#" },
    ],
  },
  {
    slug: "plhi-analytics",
    organisation: "Precision Learning Health Initiative · IU Indianapolis",
    location: "Indianapolis, IN · Hybrid",
    category: "Data Science",
    role: "Data Analyst · Clinical Analytics",
    period: "Jan 2023 – May 2024",
    summary:
      "Led Human-AI collaboration research and predictive modeling studies that improved mortality prediction accuracy by 30%.",
    achievements: [
      "Led multi-institutional Human-AI Assemblage study with 24 semi-structured observations across 4 imaging modalities, showing AI reduced radiology diagnosis time by 11 seconds per study (presented at IEEE ISBI 2024).",
      "Designed UTAUT-based online survey with 90% response rate and applied Structural Equation Modeling (SEM) to uncover 4 key adoption drivers for AI in radiology.",
      "Performed time-series analysis on intraoperative blood pressure data from 170,160 surgical patients using PELT algorithm and TSFRESH, identifying 10 key features that improved 30-day mortality prediction accuracy by 30% (presented at AMIA 2024).",
      "Applied advanced statistical methods (TSFRESH, PELT, Kruskal-Wallis, logistic regression) to enhance risk stratification.",
      "Contributed to IRB protocols, manuscripts, and abstracts by analyzing results and drafting methods, results, and discussion sections.",
    ],
    metrics: metrics([
      { label: "Diagnosis Time", value: "↓11s/study", description: "AI-assisted radiology workflow improvement" },
      { label: "Prediction Accuracy", value: "+30%", description: "Improved mortality risk stratification" },
      { label: "Patient Dataset", value: "170k+", description: "Surgical patients analyzed" },
    ]),
    technologies: ["Python", "R", "SQL", "TSFRESH", "Power BI", "SEM"],
    links: [
      { label: "IEEE ISBI 2024", href: "https://ieeexplore.ieee.org" },
      { label: "AMIA 2024", href: "#" },
    ],
  },
  {
    slug: "childrens-hospital",
    organisation: "Rammohan's Children's Hospital",
    location: "Hyderabad, India",
    category: "Clinical",
    role: "Data Analyst · Clinical Operations",
    period: "May 2021 – Dec 2022",
    summary:
      "Applied statistical analysis to optimize clinical workflows and improve patient outcomes across 10,000+ cases.",
    achievements: [
      "Provided comprehensive care for 50-100 patients daily, improving health outcomes by 15% through evidence-based treatment strategies.",
      "Applied statistical analysis to identify 5 KPIs that optimized clinical workflows, reducing patient wait times by 20% and improving treatment efficacy by 10%.",
      "Managed patient data for over 10,000 cases and led multidisciplinary teams of 15 healthcare professionals, improving patient satisfaction scores by 18%.",
    ],
    metrics: metrics([
      { label: "Wait Times", value: "↓20%", description: "Workflow optimization impact" },
      { label: "Patient Outcomes", value: "+15%", description: "Health improvement metrics" },
      { label: "Satisfaction", value: "+18%", description: "Patient satisfaction scores" },
    ]),
    technologies: ["Excel", "SPSS", "Statistical Analysis", "EHR Systems"],
    links: [],
  },
];

export const experienceTimeline: TimelineEntry[] = [
  {
    id: "2025-cleveland-clinic",
    title: "Research Engineer",
    organisation: "Cleveland Clinic · Nuclear Medicine",
    location: "Cleveland, OH",
    category: "Clinical",
    period: "Jun 2025 – Present",
    headline: "Automating CT analysis workflows to save 2–3 minutes per patient scan.",
    description:
      "Built deep-learning pipelines for automated tissue segmentation, predictive bed-time models, and cloud-based deployment infrastructure to scale nuclear medicine imaging operations.",
    achievements: [
      { label: "Manual Effort", metric: "↓80% profiling time" },
      { label: "Studies Analyzed", metric: "1,200+ CT scans" },
      { label: "Time Saved", metric: "2–3 min/scan" },
    ],
    icon: "🛰️",
  },
  {
    id: "2024-iu-medicine",
    title: "Data Scientist",
    organisation: "IU School of Medicine",
    location: "Indianapolis, IN",
    category: "Research",
    period: "Jun 2024 – May 2025",
    headline: "Engineering automated MRI segmentation pipelines for pancreas research.",
    description:
      "Deployed Docker-based deep-learning workflows for multiphase MRI analysis, achieving 0.75 Dice coefficient on brain segmentation and enabling reproducible research at scale.",
    achievements: [
      { label: "MRI Subjects", metric: "200+ analyzed" },
      { label: "Dice Coefficient", metric: "0.75 accuracy" },
      { label: "Manual Effort", metric: "↓90% ROI time" },
    ],
    icon: "🧠",
  },
  {
    id: "2023-plhi",
    title: "Data Analyst",
    organisation: "Precision Learning Health Initiative",
    location: "Indianapolis, IN",
    category: "Data Science",
    period: "Jan 2023 – May 2024",
    headline: "Leading Human-AI Assemblage research across 24 clinical observations.",
    description:
      "Conducted multi-institutional ethnographic study of AI integration in clinical workflows, analyzed 170K surgical records, and built drift-monitoring dashboards for operational AI systems.",
    achievements: [
      { label: "Observations", metric: "24 clinical sites" },
      { label: "Surgical Records", metric: "170,160 patients" },
      { label: "Triage Speed", metric: "↓17% turnaround" },
    ],
    icon: "🔬",
  },
  {
    id: "2021-childrens",
    title: "Data Analyst",
    organisation: "Rammohan's Children's Hospital",
    location: "Hyderabad, India",
    category: "Clinical",
    period: "May 2021 – Dec 2022",
    headline: "Optimizing pediatric hospital operations through data-driven insights.",
    description:
      "Transformed clinical data systems, built predictive models for patient flow, and trained clinical staff on evidence-based analytics to improve care delivery.",
    achievements: [
      { label: "Bed Occupancy", metric: "↓22% wait times" },
      { label: "Staff Trained", metric: "56 clinicians" },
      { label: "Records Digitized", metric: "5,000+ patients" },
    ],
    icon: "⚕️",
  },
];
