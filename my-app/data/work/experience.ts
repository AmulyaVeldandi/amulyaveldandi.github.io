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
    organisation: "Cleveland Clinic · Dept. of Nuclear Medicine",
    location: "Cleveland, OH · Hybrid",
    category: "Clinical",
    role: "Research Engineer · Imaging Operations",
    period: "Jun 2025 – Present",
    summary:
      "Scaling attenuation automation and throughput forecasting that gives radiology teams minutes back every scan.",
    achievements: [
      "Automated 1.2k+ CT attenuation studies with reproducible TotalSegmentator pipelines and QC dashboards.",
      "Forecasted scanner bed utilisation across three radiology suites, unlocking 18% more daily slots.",
      "Containerised segmentation workflows so radiologists can redeploy updates in under 8 minutes with audit trails.",
    ],
    metrics: metrics([
      { label: "Manual Contouring", value: "↓80%", description: "Technologist time saved per attenuation batch" },
      { label: "Scanner Availability", value: "+2–3 min/scan", description: "Recovered time per patient" },
      { label: "Redeploy Time", value: "8 min", description: "Pipeline refresh to production" },
    ]),
    technologies: ["Python", "Docker", "TotalSegmentator", "Grafana", "Azure"],
    links: [
      { label: "Case Study", href: "/work/ct-throughput-optimizer" },
      { label: "Talk Slides", href: "https://github.com/amulyaveldandi" },
    ],
  },
  {
    slug: "iu-som-data-scientist",
    organisation: "Indiana University School of Medicine",
    location: "Indianapolis, IN · Hybrid",
    category: "Research",
    role: "Data Scientist · Pancreas & Neuroimaging",
    period: "Jun 2024 – May 2025",
    summary:
      "Standardised SQ-MRI scoring and built neuroimaging U-Net labs so staging is consistent across scanners.",
    achievements: [
      "Shipped SQ-MRI decision support system that lifted chronic pancreatitis score agreement by 35%.",
      "Delivered 0.91 Dice multimodal brain MRI U-Net lab with reproducible quartz GPU pipelines.",
      "Mentored four cross-functional teams through Dockerised MLops and bias auditing playbooks.",
    ],
    metrics: metrics([
      { label: "SQ-MRI Agreement", value: "+35%", description: "Consistency across multi-site scanners" },
      { label: "Manual ROI Time", value: "↓90%", description: "Reduction for radiology fellows" },
      { label: "Report Turnaround", value: "↓14 hr", description: "Brain MRI lab inference time saved" },
    ]),
    technologies: ["PyTorch", "TensorFlow", "Docker", "FastAPI", "Supabase"],
    links: [
      { label: "Pancreas Case Study", href: "/work/sq-mri-cdss" },
      { label: "Neuro U-Net Lab", href: "/projects/brain-mri-unet-lab" },
    ],
  },
  {
    slug: "plhi-analytics",
    organisation: "Precision Learning Health Initiative · IU Indianapolis",
    location: "Indianapolis, IN · Hybrid",
    category: "Data Science",
    role: "Clinical Analytics Fellow",
    period: "Jan 2023 – May 2024",
    summary:
      "Led Human-AI Assemblage research translating real-time AI governance into bedside-ready playbooks.",
    achievements: [
      "Analysed 12k+ multidisciplinary reads to surface workflow redesigns that cut triage by 17%.",
      "Built Power BI surveillance that flagged AI labeling drift within 48 hours across three radiology labs.",
      "Mentored 30+ analysts weekly, boosting SQL audit scores by 28% in semester reviews.",
    ],
    metrics: metrics([
      { label: "Triage Turnaround", value: "↓17%", description: "Faster multidisciplinary reviews" },
      { label: "Drift Detection", value: "48 hr", description: "Time to flag label drift in prod" },
      { label: "Analyst Uplift", value: "+28%", description: "Average SQL audit score improvement" },
    ]),
    technologies: ["R", "SQL Server", "Power BI", "Azure DevOps"],
    links: [
      { label: "Conference Paper", href: "/blog/agentic-ai-in-the-clinic" },
      { label: "Assemblage Dataset", href: "https://github.com/amulyaveldandi" },
    ],
  },
  {
    slug: "clinical-leadership",
    organisation: "Gandhi Medical College & Govt. Hospitals",
    location: "Hyderabad, India",
    category: "Leadership",
    role: "MBBS · Student Government President",
    period: "Aug 2015 – Mar 2021",
    summary:
      "Learned to triage with empathy, steward multidisciplinary teams, and fight for equitable data use at the bedside.",
    achievements: [
      "Coordinated 56 medical volunteers during peak pandemic surges with daily analytics and stratified escalations.",
      "Published audit dashboards that cut medication stockouts across three government hospitals by 22%.",
      "Launched peer-mentoring programme guiding clinicians transitioning into informatics and data science roles.",
    ],
    metrics: metrics([
      { label: "Medication Stockouts", value: "↓22%", description: "Supply chain visibility improvements" },
      { label: "Volunteer Coverage", value: "56 clinicians", description: "Rotational staffing orchestrated" },
      { label: "Peer Mentorship", value: "30+ mentees", description: "Clinicians trained in analytics" },
    ]),
    technologies: ["Excel", "SPSS", "Power BI", "Change Management"],
    links: [
      { label: "Leadership Summary", href: "/about/timeline" },
      { label: "Public Health Playbook", href: "https://github.com/amulyaveldandi" },
    ],
  },
];

export const experienceTimeline: TimelineEntry[] = [
  {
    id: "2025-cleveland-clinic",
    title: "Research Engineer",
    organisation: "Cleveland Clinic · Nuclear Medicine",
    location: "Cleveland, OH",
    category: "Clinical",
    period: "2025 – Present",
    headline: "Scaling AI throughput automation that restores minutes to every scan.",
    description:
      "Containerised attenuation workflows, predictive scheduling, and governance dashboards keep technologists in the loop.",
    achievements: [
      { label: "Scanner Availability", metric: "+2–3 min/scan" },
      { label: "Manual Effort", metric: "↓80% contouring time" },
      { label: "Deploy Cadence", metric: "8-min redeploy" },
    ],
    icon: "🛰️",
  },
  {
    id: "2024-pancreas",
    title: "Data Scientist",
    organisation: "IU School of Medicine",
    location: "Indianapolis, IN",
    category: "Research",
    period: "2024 – 2025",
    headline: "Standardising SQ-MRI scoring and neuroimaging research pipelines.",
    description:
      "Dockersied MRI pipelines, reproducible U-Net labs, and bias audits turned research prototypes into clinical-ready tools.",
    achievements: [
      { label: "Score Agreement", metric: "+35% consistency" },
      { label: "Manual ROI", metric: "↓90% prep time" },
      { label: "Workshops", metric: "30+ students" },
    ],
    icon: "🧠",
  },
  {
    id: "2023-assemblage",
    title: "Clinical Analytics Fellow",
    organisation: "Precision Learning Health Initiative",
    location: "Indianapolis, IN",
    category: "Data Science",
    period: "2023 – 2024",
    headline: "Human-AI Assemblage research bridging bedside collaborations and AI governance.",
    description:
      "Studied multidisciplinary teams, built drift surveillance, and coached analysts to sustain AI operations with empathy.",
    achievements: [
      { label: "Triage Speed", metric: "↓17% turnaround" },
      { label: "Drift Alerts", metric: "48 hr detection" },
      { label: "Mentorship", metric: "30+ mentees" },
    ],
    icon: "🔬",
  },
  {
    id: "2021-clinical",
    title: "Student Government President",
    organisation: "Gandhi Medical College",
    location: "Hyderabad, India",
    category: "Leadership",
    period: "2015 – 2021",
    headline: "Clinical leadership that kept empathy and equitable data use at the centre.",
    description:
      "Coordinated pandemic response, data transparency, and mentorship programmes serving government hospital systems.",
    achievements: [
      { label: "Supply Chain", metric: "↓22% stockouts" },
      { label: "Operations", metric: "56 volunteers coordinated" },
      { label: "Mentorship", metric: "30+ clinicians coached" },
    ],
    icon: "⚕️",
  },
];
