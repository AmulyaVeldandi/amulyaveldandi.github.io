import type { ImpactMetric, Project, ProjectTag } from "@/lib/content-types";

const tag = (label: string, category: ProjectTag["category"]): ProjectTag => ({
  label,
  category,
});

const metrics = (entries: ImpactMetric[]): ImpactMetric[] => entries;

export const projects: Project[] = [
  {
    slug: "ct-throughput-optimizer",
    title: "CT Throughput Optimizer",
    summary:
      "Predictive attenuation pipeline that unlocks CT capacity with explainable scheduling alerts.",
    description:
      "Automated attenuation profiling, feature engineering, and LightGBM forecasting recovered minutes for every scan while providing audit-ready governance trails.",
    tags: [
      tag("Imaging AI", "AI"),
      tag("Workflow Automation", "Ops"),
      tag("Clinical", "Clinical"),
    ],
    coverImage: "/case-studies/analytics-hero.svg",
    coverAlt: "CT throughput dashboard hero illustration",
    techStack: ["Python", "Docker", "LightGBM", "Grafana", "Azure"],
    metrics: metrics([
      { label: "Scanner Availability", value: "+2–3 min/scan", variant: "increase" },
      { label: "Manual Contouring", value: "↓80%", variant: "decrease" },
    ]),
    featured: true,
    github: "https://github.com/amulyaveldandi",
    demo: "https://github.com/amulyaveldandi",
    caseStudySlug: "ct-throughput-optimizer",
    published: "2024-05-20",
  },
  {
    slug: "sq-mri-cdss",
    title: "SQ-MRI Clinical Decision Support",
    summary:
      "Reproducible pancreas biomarker pipeline that harmonises SQ-MRI scoring across vendors.",
    description:
      "Dockerised segmentation and biomarker extraction shrink ROI prep from an hour to minutes while boosting score agreement by 35%.",
    tags: [
      tag("Clinical AI", "AI"),
      tag("Pancreas", "Clinical"),
      tag("ML Ops", "ML Ops"),
    ],
    coverImage: "/case-studies/pancreas-hero.svg",
    coverAlt: "Pancreas CDSS hero graphic",
    techStack: ["Docker", "PyTorch", "FastAPI", "Supabase", "Power BI"],
    metrics: metrics([
      { label: "Score Agreement", value: "+35%", variant: "increase" },
      { label: "ROI Prep Time", value: "↓90%", variant: "decrease" },
    ]),
    featured: true,
    github: "https://github.com/amulyaveldandi",
    caseStudySlug: "sq-mri-cdss",
    published: "2024-02-28",
  },
  {
    slug: "brain-mri-unet-lab",
    title: "Brain MRI Multimodal U-Net Lab",
    summary:
      "Teaching lab comparing mono vs. multimodal MRI inputs with reproducible containers and dashboards.",
    description:
      "3D U-Nets with modality-specific encoders, augmentation modules, and dockerised notebooks accelerate neuroimaging research sprints.",
    tags: [
      tag("Deep Learning", "AI"),
      tag("Neuroimaging", "Research"),
      tag("Education", "Product"),
    ],
    coverImage: "/case-studies/neuro-hero.svg",
    coverAlt: "Brain MRI lab hero illustration",
    techStack: ["TensorFlow", "Docker", "Weights & Biases", "Supabase"],
    metrics: metrics([
      { label: "Dice Score", value: "0.91 multimodal", variant: "increase" },
      { label: "Report Turnaround", value: "↓14 hr", variant: "decrease" },
    ]),
    github: "https://github.com/amulyaveldandi",
    demo: "https://github.com/amulyaveldandi",
    published: "2023-11-12",
  },
  {
    slug: "agentic-radiology-assistant",
    title: "Agentic Radiology Workflow Assistant",
    summary:
      "Responsible agentic workflows triaging follow-ups with human-in-the-loop checkpoints.",
    description:
      "Retrieval and governance agents compile cohorts, reconcile reports, and surface drift with audit-ready rationales.",
    tags: [
      tag("Agentic AI", "AI"),
      tag("Clinical Operations", "Clinical"),
      tag("Workflow Automation", "Ops"),
    ],
    coverImage: "/case-studies/neuro-detail.svg",
    coverAlt: "Agentic workflow detail illustration",
    techStack: ["LangChain", "OpenAI", "Supabase", "FastAPI"],
    metrics: metrics([
      { label: "Follow-up Turnaround", value: "↓78%", variant: "decrease" },
      { label: "Escalation Accuracy", value: "+30%", variant: "increase" },
    ]),
    featured: true,
    github: "https://github.com/amulyaveldandi",
    demo: "https://github.com/amulyaveldandi",
    caseStudySlug: "agentic-radiology-assistant",
    published: "2025-01-05",
  },
  {
    slug: "cxr-labeling-benchmark",
    title: "CXR Labeling Benchmark",
    summary:
      "Comparative study of CheXbert vs. CheXGPT across 220k+ chest X-ray reports with adjudication loops.",
    description:
      "Unified ontologies, fine-tuning sweeps, and clinician QA revealed nuanced trade-offs across labeling models.",
    tags: [
      tag("NLP", "Research"),
      tag("Clinical AI", "AI"),
      tag("Analytics", "Analytics"),
    ],
    coverImage: "/case-studies/nlp-hero.svg",
    coverAlt: "Chest X-ray labeling benchmark illustration",
    techStack: ["PyTorch", "Transformers", "Azure", "Weights & Biases"],
    metrics: metrics([
      { label: "Label Accuracy", value: "+12%", variant: "increase" },
      { label: "Reports Analysed", value: "220k+", variant: "increase" },
    ]),
    github: "https://github.com/amulyaveldandi",
    published: "2022-08-19",
  },
  {
    slug: "icu-mortality-risk-models",
    title: "ICU Mortality Risk Stratification",
    summary:
      "Biostatistics pipelines quantifying mortality drivers for 12,500 ICU heart failure patients.",
    description:
      "Logistic, survival, and explainable models underpin dashboards that inform multidisciplinary rounds.",
    tags: [
      tag("Biostatistics", "Analytics"),
      tag("Clinical", "Clinical"),
      tag("Explainability", "Research"),
    ],
    coverImage: "/case-studies/analytics-detail.svg",
    coverAlt: "ICU analytics detail illustration",
    techStack: ["R", "Python", "Power BI", "SQL Server"],
    metrics: metrics([
      { label: "Significant Predictors", value: "8", variant: "increase" },
      { label: "Review Time", value: "↓30%", variant: "decrease" },
    ]),
    github: "https://github.com/amulyaveldandi",
    published: "2021-12-10",
  },
  {
    slug: "dsess-drug-safety-analytics",
    title: "Drug Safety Severity Analytics",
    summary:
      "Pharmacovigilance tooling that scores side-effect severity and clusters 3,500 drugs by risk.",
    description:
      "The DSESS scoring framework combines severity, frequency, and onset features with interactive dashboards for formulary review.",
    tags: [
      tag("Pharmacovigilance", "Clinical"),
      tag("Clustering", "Analytics"),
      tag("Product", "Product"),
    ],
    coverImage: "/case-studies/analytics-hero.svg",
    coverAlt: "Drug analytics hero illustration",
    techStack: ["Python", "scikit-learn", "Plotly", "Power BI"],
    metrics: metrics([
      { label: "Coverage", value: "3,500 drugs", variant: "increase" },
      { label: "Severity Prediction", value: "0.98 AUC", variant: "increase" },
    ]),
    github: "https://github.com/amulyaveldandi",
    published: "2021-05-02",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(limit = 3): Project[] {
  return projects.filter((project) => project.featured).slice(0, limit);
}
