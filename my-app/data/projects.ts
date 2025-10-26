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
    slug: "imputeagent-llm-imputation",
    title: "ImputeAgent - LLM-based Data Imputation",
    summary:
      "Agentic AI system combining statistical models with LLM reasoning for intelligent missing data imputation.",
    description:
      "Deployed scalable pipeline on AWS SageMaker handling MCAR, MAR, and MNAR scenarios with critic-driven validation, improving downstream model AUC by ~10%.",
    tags: [
      tag("Agentic AI", "AI"),
      tag("MLOps", "ML Ops"),
      tag("Cloud", "Product"),
    ],
    coverImage: "/case-studies/analytics-hero.svg",
    coverAlt: "ImputeAgent system architecture",
    techStack: ["OpenAI", "AWS Bedrock", "AWS SageMaker", "Python", "Docker"],
    metrics: metrics([
      { label: "Model AUC", value: "+10%", variant: "increase" },
      { label: "Imputation Scenarios", value: "MCAR, MAR, MNAR", variant: "increase" },
    ]),
    github: "https://github.com/amulyaveldandi",
    published: "2025-08-01",
  },
  {
    slug: "radiology-report-summarization",
    title: "Radiology Report Summarization with LLMs",
    summary:
      "Automated RAG framework reducing manual radiology report summarization time by 60%.",
    description:
      "Integrated 10,000+ radiology reports with LLMs using VS Code & LM Studio, building real-time Gradio interface that improved workflow efficiency by 45%.",
    tags: [
      tag("NLP", "AI"),
      tag("RAG", "AI"),
      tag("Clinical Operations", "Clinical"),
    ],
    coverImage: "/case-studies/nlp-hero.svg",
    coverAlt: "RAG radiology summarization system",
    techStack: ["LLMs", "RAG", "Gradio", "Python", "LM Studio"],
    metrics: metrics([
      { label: "Manual Time", value: "↓60%", variant: "decrease" },
      { label: "Workflow Efficiency", value: "+45%", variant: "increase" },
    ]),
    github: "https://github.com/amulyaveldandi",
    published: "2024-07-01",
  },
  {
    slug: "cxr-labeling-benchmark",
    title: "CXR Labeling Benchmark: CheXbert vs CheXGPT",
    summary:
      "Comparative analysis of NLP models on 220,000+ chest X-ray reports from MIMIC-CXR and IU-CXR datasets.",
    description:
      "Conducted systematic evaluation of CheXbert and CheXGPT labeling models, optimizing accuracy by 12% through hyperparameter fine-tuning and adjudication loops.",
    tags: [
      tag("NLP", "Research"),
      tag("Clinical AI", "AI"),
      tag("Analytics", "Analytics"),
    ],
    coverImage: "/case-studies/nlp-hero.svg",
    coverAlt: "Chest X-ray labeling benchmark illustration",
    techStack: ["PyTorch", "Transformers", "MIMIC-CXR", "IU-CXR"],
    metrics: metrics([
      { label: "Label Accuracy", value: "+12%", variant: "increase" },
      { label: "Reports Analyzed", value: "220,000+", variant: "increase" },
    ]),
    github: "https://github.com/amulyaveldandi",
    published: "2024-04-01",
  },
  {
    slug: "icu-mortality-risk-models",
    title: "ICU Mortality Risk Stratification in Heart Failure Patients",
    summary:
      "Statistical evaluation of mortality risk factors in 12,500 ICU-admitted heart failure patients.",
    description:
      "Analyzed mortality risk factors using R Studio, identifying statistically significant subgroups (p < 0.05) and visualizing insights via Power BI to improve risk stratification for multidisciplinary rounds.",
    tags: [
      tag("Biostatistics", "Analytics"),
      tag("Clinical", "Clinical"),
      tag("Risk Modeling", "Research"),
    ],
    coverImage: "/case-studies/analytics-detail.svg",
    coverAlt: "ICU analytics detail illustration",
    techStack: ["R", "Python", "Power BI", "Statistical Modeling"],
    metrics: metrics([
      { label: "Patients Analyzed", value: "12,500", variant: "increase" },
      { label: "Statistical Significance", value: "p < 0.05", variant: "increase" },
    ]),
    github: "https://github.com/amulyaveldandi",
    published: "2023-12-01",
  },
  {
    slug: "dsess-drug-safety-analytics",
    title: "Drug Side Effect Severity Score (D-SESS)",
    summary:
      "Novel severity scoring framework quantifying drug risk levels across 3,500 drug profiles.",
    description:
      "Developed D-SESS scoring methodology combining severity, frequency, and onset features. Applied unsupervised clustering to categorize medications and built prediction model achieving 0.98 accuracy.",
    tags: [
      tag("Pharmacovigilance", "Clinical"),
      tag("Clustering", "Analytics"),
      tag("Machine Learning", "AI"),
    ],
    coverImage: "/case-studies/analytics-hero.svg",
    coverAlt: "Drug analytics hero illustration",
    techStack: ["Python", "scikit-learn", "Clustering", "Predictive Modeling"],
    metrics: metrics([
      { label: "Drug Profiles", value: "3,500", variant: "increase" },
      { label: "Prediction Accuracy", value: "0.98", variant: "increase" },
    ]),
    github: "https://github.com/amulyaveldandi",
    published: "2023-04-01",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(limit = 3): Project[] {
  return projects.filter((project) => project.featured).slice(0, limit);
}
