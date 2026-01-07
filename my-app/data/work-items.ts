import type { ImpactMetric, ProjectTag, WorkItem, WorkItemType } from "@/lib/content-types";

const tag = (label: string, category: ProjectTag["category"]): ProjectTag => ({
  label,
  category,
});

const metrics = (entries: ImpactMetric[]): ImpactMetric[] => entries;

// Unified work items combining projects and case studies
export const workItems: WorkItem[] = [
  // DETAILED CASE STUDIES (with full deep-dive sections)
  {
    slug: "ct-throughput-optimizer",
    title: "Cleveland Clinic CT Throughput Optimizer",
    type: "case-study",
    summary:
      "Predictive attenuation pipeline that unlocks CT capacity with explainable scheduling alerts.",
    description:
      "Containerised attenuation automation and predictive scheduling that return minutes to every CT scan.",
    category: "Clinical Operations",
    tags: [
      tag("Imaging AI", "AI"),
      tag("Workflow Automation", "Ops"),
      tag("Clinical", "Clinical"),
    ],
    coverImage: "/case-studies/analytics-hero.svg",
    coverAlt: "CT throughput dashboard hero illustration",
    heroImage: "/case-studies/analytics-hero.svg",
    heroAlt: "CT throughput dashboard with predictive overlays.",
    techStack: ["Python", "Docker", "TotalSegmentator", "LightGBM", "Grafana", "Azure"],
    metrics: metrics([
      { label: "Scanner Availability", value: "+2–3 min/scan", variant: "increase" },
      { label: "Manual Contouring", value: "↓80%", variant: "decrease" },
    ]),
    featured: true,
    github: "https://github.com/AmulyaVeldandi",
    demo: "https://github.com/AmulyaVeldandi",
    published: "2024-05-20",
    overview: {
      problem:
        "Technologists were manually profiling attenuation across 1,200+ CT studies each week, limiting scanner availability and delaying patient care.",
      role: "Lead Research Engineer",
      timeline: "Jan 2024 – May 2024",
      teamSize: "4 technologists · 2 data scientists · 1 imaging physicist",
    },
    challenge: {
      heading: "Manual contouring blocked scanner throughput",
      body:
        "CT attenuation profiling required technologists to hand-label regions of interest. Operational meetings lacked forward-looking visibility, forcing reactive scheduling and overtime staffing.",
      bullets: [
        "1.2k+ studies each week with zero automation coverage.",
        "No shared feature store; attenuation and protocol metadata lived on isolated machines.",
        "Delayed dashboards meant decisions happened after backlogs formed.",
      ],
    },
    approach: {
      heading: "Predictive pipeline built with reproducible guardrails",
      body:
        "TotalSegmentator and custom QC rules containerised on Azure Batch processed studies in parallel. Forecasting models paired with SHAP overlays explained the drivers behind every alert.",
      bullets: [
        "Inference containers automatically QC flagged edge cases for technologist review.",
        "Feature store blended tissue attenuation, protocol metadata, and historical wait times.",
        "Grafana dashboards streaming predictions with staffing and maintenance overlays.",
      ],
      diagram: "/case-studies/analytics-detail.svg",
    },
    results: [
      {
        metric: "Manual Contouring Time",
        before: "48 hr / batch",
        after: "4 hr / batch",
        insight: "Parallelised segmentation with automated QC handoffs.",
      },
      {
        metric: "Scanner Availability",
        before: "0 min buffer",
        after: "+2–3 min per scan",
        insight: "Proactive scheduling based on predictive delays.",
      },
      {
        metric: "Redeploy Cadence",
        before: "2 weeks",
        after: "8 minutes",
        insight: "Container registry + scripted validation pipelines.",
      },
    ],
    impact: [
      "Enabled daily capacity planning with predictive exports and ROI snapshots.",
      "Technologists recover minutes per patient reinforced by evidence-backed alerts.",
      "Governance playbook covers failure modes, shadow modes, and rollback triggers.",
    ],
    deepDive: [
      {
        title: "Segmentation Reliability",
        content:
          "We combined TotalSegmentator masks with rule-based heuristics and uncertainty contours to surface edge cases. Technologists review flagged scans in under 30 seconds while the pipeline provides recommended actions.",
      },
      {
        title: "Predictive Scheduling",
        content:
          "Gradient boosting models trained on 36 months of data surfaced the drivers of delay—contrast type, protocol, technologist coverage. SHAP values and explanations feed into Grafana panels and PDF handouts for shift huddles.",
      },
      {
        title: "Governance and Drift Monitoring",
        content:
          "All forecasts stream into an audit log with outcomes. Weekly refresh scripts compare predictions vs. realised throughput, flagging drift beyond 7%. Dashboards track false positives, manual overrides, and vendor firmware updates.",
      },
    ],
    related: ["sq-mri-cdss", "audra-rad"],
    highlights: [
      { metric: "Technologist ROI", value: "-80%", delta: "decrease" },
      { metric: "Forecast Accuracy", value: "±4.6 min", delta: "increase" },
      { metric: "Adoption", value: "3 radiology suites", delta: "increase" },
    ],
  },
  {
    slug: "sq-mri-cdss",
    title: "Pancreatitis SQ-MRI Clinical Decision Support",
    type: "case-study",
    summary:
      "Reproducible pancreas biomarker pipeline that harmonises SQ-MRI scoring across vendors.",
    description:
      "An end-to-end MRI biomarker pipeline that standardises SQ-MRI staging across scanners and institutions.",
    category: "Clinical AI",
    tags: [
      tag("Clinical AI", "AI"),
      tag("Pancreas", "Clinical"),
      tag("ML Ops", "ML Ops"),
    ],
    coverImage: "/case-studies/pancreas-hero.svg",
    coverAlt: "Pancreas CDSS hero graphic",
    heroImage: "/case-studies/pancreas-hero.svg",
    heroAlt: "Pancreas MRI case study hero graphic.",
    techStack: ["Docker", "PyTorch", "FastAPI", "Supabase", "Power BI"],
    metrics: metrics([
      { label: "Score Agreement", value: "+35%", variant: "increase" },
      { label: "ROI Prep Time", value: "↓90%", variant: "decrease" },
    ]),
    featured: true,
    github: "https://github.com/AmulyaVeldandi",
    published: "2024-02-28",
    overview: {
      problem:
        "Clinicians lacked reproducible pancreas/spleen measurements, leading to inconsistent SQ-MRI scores and stalled therapeutic escalation.",
      role: "Data Scientist",
      timeline: "Jun 2023 – Feb 2024",
      teamSize: "5 clinicians · 2 ML engineers · 1 imaging physicist",
    },
    challenge: {
      heading: "SQ-MRI scoring varied wildly across scanners",
      body:
        "Every site had its own ROI drawing and intensity normalisation approach. Fellows spent hours per scan while hepatology boards lacked longitudinal comparability.",
      bullets: [
        "Pancreas ROI creation took 45–60 minutes per subject.",
        "Intensity scaling drifted across vendors and phases, degrading biomarkers.",
        "Pipeline handoffs relied on manual scripts with no audit trail.",
      ],
    },
    approach: {
      heading: "Containerised biomarker extraction with calibration guardrails",
      body:
        "We containerised segmentation, bias correction, and biomarker computation. FastAPI delivered reports, while Supabase tracked pipeline health and calibrations.",
      bullets: [
        "Docker images bundle TotalSegmentator with harmonised calibration scripts.",
        "Biomarker extraction covers intensity, texture, perfusion, and morphology with QC thresholds.",
        "Power BI dashboards provide cross-site comparisons and longitudinal trending.",
      ],
      diagram: "/case-studies/pancreas-detail.svg",
    },
    results: [
      {
        metric: "Score Agreement",
        before: "58% inter-rater",
        after: "93% inter-rater",
        insight: "Automated biomarkers with harmonised scaling.",
      },
      {
        metric: "Manual ROI Time",
        before: "55 min/scan",
        after: "6 min/scan",
        insight: "Technologists validate pre-generated ROIs instead of drawing from scratch.",
      },
      {
        metric: "Deployment Footprint",
        before: "1 site",
        after: "3 sites",
        insight: "Documentation + docker-compose bundles lowered setup friction.",
      },
    ],
    impact: [
      "Hepatology boards review longitudinal biomarkers minutes after acquisition.",
      "Bias audits quantify vendor drift with weekly alerts pushed to Slack.",
      "Students learn from reproducible labs bridging clinical need with technical delivery.",
    ],
    deepDive: [
      {
        title: "Calibration across Vendors",
        content:
          "A calibration module compares histogram statistics across cohorts and applies per-phase corrections. Deviations beyond ±5% trigger technologist review and auto-generate calibration notebooks.",
      },
      {
        title: "Continuous Validation",
        content:
          "Every run logs biomarker ranges and segmentation confidence. A nightly job samples outputs for radiologist spot checks with review forms stored alongside pipeline artefacts.",
      },
      {
        title: "Education & Handoff",
        content:
          "We packaged labs and tutorial notebooks so new fellows can rerun experiments on fresh cohorts. The goal is empowered clinical teams who can operate the pipeline independently.",
      },
    ],
    related: ["ct-throughput-optimizer", "brain-mri-unet-lab"],
    highlights: [
      { metric: "Consistency", value: "+35% agreement", delta: "increase" },
      { metric: "ROI Prep", value: "↓90% time", delta: "decrease" },
      { metric: "Pipeline Deploys", value: "3 sites", delta: "increase" },
    ],
  },
  {
    slug: "audra-rad",
    title: "AuDRA-Rad: Autonomous Radiology Assistant",
    type: "case-study",
    summary:
      "Autonomous AI system that reads radiology reports, retrieves ACR/Fleischner guidelines, and generates EHR-integrated follow-up orders.",
    description:
      "An autonomous AI system that reads radiology reports, retrieves ACR/Fleischner guidelines, and generates EHR-integrated follow-up orders.",
    category: "Healthcare AI",
    tags: [
      tag("Healthcare AI", "AI"),
      tag("FHIR", "Clinical"),
      tag("RAG", "AI"),
    ],
    coverImage: "/case-studies/audra-hero.svg",
    coverAlt: "AuDRA-Rad autonomous radiology workflow",
    heroImage: "/case-studies/audra-hero.svg",
    heroAlt: "AuDRA-Rad autonomous radiology workflow.",
    techStack: ["AWS EKS", "NVIDIA NIM", "FastAPI", "OpenSearch", "Docker", "Kubernetes", "FHIR"],
    metrics: metrics([
      { label: "Guideline Retrieval", value: "Automated", variant: "increase" },
      { label: "EHR Integration", value: "Direct", variant: "increase" },
    ]),
    featured: true,
    github: "https://github.com/AmulyaVeldandi/AuDRA-Rad",
    published: "2024-11-01",
    overview: {
      problem:
        "Radiology departments struggle with follow-up compliance gaps, leading to missed incidental findings and liability concerns.",
      role: "Technical Lead & Developer",
      timeline: "2024",
    },
    challenge: {
      heading: "Follow-up recommendations lost in manual workflows",
      body:
        "Radiologists generate thousands of reports with follow-up recommendations, but manual tracking leads to compliance gaps and patient safety risks.",
      bullets: [
        "Unstructured reports require manual extraction of clinical findings.",
        "No automated guideline retrieval system for ACR/Fleischner standards.",
        "Follow-up orders created manually, causing delays and missed cases.",
      ],
    },
    approach: {
      heading: "RAG-powered autonomous reasoning with safety guardrails",
      body:
        "Built on AWS infrastructure with NVIDIA NIM, the system parses FHIR-compliant reports, retrieves embedded guidelines via semantic search, and generates recommendations with clinical validators.",
      bullets: [
        "FHIR-compliant parsing normalizes unstructured reports into structured data.",
        "RAG pipeline with OpenSearch Serverless for guideline retrieval.",
        "Nemotron NIM generates evidence-grounded recommendations.",
        "Custom validators flag high-risk cases before EHR integration.",
      ],
      diagram: "/case-studies/audra-detail.svg",
    },
    results: [
      {
        metric: "Deployment Cost",
        before: "Manual processing",
        after: "~$3/hour GPU",
        insight: "Cost-effective AWS infrastructure on g5.xlarge instances.",
      },
      {
        metric: "Guideline Retrieval",
        before: "Manual lookup",
        after: "Automated RAG",
        insight: "Semantic search retrieves relevant ACR/Fleischner guidelines.",
      },
      {
        metric: "EHR Integration",
        before: "Manual orders",
        after: "Automated tasks",
        insight: "Direct order creation in hospital systems with audit trails.",
      },
    ],
    impact: [
      "Reduces follow-up compliance gaps through automated tracking.",
      "Improves patient outcomes with faster, guideline-compliant care.",
      "Full audit trail via CloudWatch and X-Ray for compliance.",
    ],
    deepDive: [
      {
        title: "FHIR-Compliant Architecture",
        content:
          "The system normalizes unstructured radiology reports using FHIR standards, enabling seamless integration with existing hospital EHR systems and ensuring data interoperability.",
      },
      {
        title: "Safety Guardrails",
        content:
          "Custom validators enforce clinical constraints and flag high-risk cases for human review. The system maintains transparency with full audit trails for every recommendation.",
      },
      {
        title: "Scalable Infrastructure",
        content:
          "Deployed on AWS EKS with Kubernetes orchestration, the system scales dynamically based on report volume. OpenSearch Serverless provides fast semantic search across embedded medical guidelines.",
      },
    ],
    related: ["ct-throughput-optimizer", "sq-mri-cdss"],
    highlights: [
      { metric: "Infrastructure Cost", value: "$3/hour", delta: "increase" },
      { metric: "Guideline Access", value: "Automated", delta: "increase" },
      { metric: "EHR Integration", value: "Direct", delta: "increase" },
    ],
  },
  {
    slug: "calm-companion",
    title: "CalmCompanion: AI Support for Alzheimer's Care",
    type: "case-study",
    summary:
      "Voice-first AI system providing empathetic support and smart-home automation for Alzheimer's patients and caregivers.",
    description:
      "Voice-first AI system providing empathetic support and smart-home automation for Alzheimer's patients and caregivers.",
    category: "Healthcare AI",
    tags: [
      tag("Healthcare AI", "AI"),
      tag("Voice AI", "Product"),
      tag("Caregiving", "Clinical"),
    ],
    coverImage: "/case-studies/calm-hero.svg",
    coverAlt: "CalmCompanion AI care assistant",
    heroImage: "/case-studies/calm-hero.svg",
    heroAlt: "CalmCompanion AI care assistant.",
    techStack: ["Python", "AWS Bedrock", "FastAPI", "Streamlit", "DynamoDB", "S3"],
    metrics: metrics([
      { label: "Patient Agitation", value: "80%+ addressed", variant: "increase" },
      { label: "Caregiver Support", value: "Real-time insights", variant: "increase" },
    ]),
    featured: true,
    github: "https://github.com/AmulyaVeldandi/CalmCompanion",
    published: "2024-09-15",
    overview: {
      problem:
        "80%+ of Alzheimer's patients experience agitation, and 70% of caregivers report burnout from unpredictable episodes.",
      role: "Developer & Designer",
      timeline: "2024",
    },
    challenge: {
      heading: "Caregivers face burnout from unpredictable patient episodes",
      body:
        "Alzheimer's patients experience frequent agitation episodes, while caregivers lack real-time support and actionable insights to manage these situations.",
      bullets: [
        "80%+ of patients experience agitation and anxiety.",
        "70% of caregivers report burnout from constant monitoring.",
        "Limited tools for real-time emotional support and risk detection.",
      ],
    },
    approach: {
      heading: "Voice-first AI with empathetic interaction and smart automation",
      body:
        "Progressive web app with push-to-talk interface, AWS Bedrock-powered reasoning, emotion analysis, and optional smart-home integrations for calming environments.",
      bullets: [
        "Voice-first interface with speech-to-text and calming text-to-speech.",
        "AWS Bedrock agent adapts responses based on context and caregiver input.",
        "Risk detection pipeline with emotion analysis and RAG-powered tips.",
        "Smart-home integration for Philips Hue, LIFX, and Fire TV devices.",
        "Privacy-focused design with in-session conversation storage.",
      ],
      diagram: "/case-studies/calm-detail.svg",
    },
    results: [
      {
        metric: "Caregiver Support",
        before: "Reactive response",
        after: "Real-time insights",
        insight: "Dashboard shows risk trends, triggers, and actionable tips.",
      },
      {
        metric: "Patient Comfort",
        before: "Manual intervention",
        after: "Automated calming",
        insight: "Smart-home integration creates calming environments automatically.",
      },
      {
        metric: "Privacy Protection",
        before: "Cloud storage",
        after: "In-session only",
        insight: "Conversations stay local; only hashed snapshots sent to AWS.",
      },
    ],
    impact: [
      "Provides real-time emotional support for Alzheimer's patients.",
      "Reduces caregiver burnout with actionable insights and automation.",
      "Privacy-first architecture ensures patient data protection.",
    ],
    deepDive: [
      {
        title: "Emotion Analysis Pipeline",
        content:
          "The system uses heuristic scoring and emotion analysis to detect risk patterns. RAG-powered retrieval provides caregivers with evidence-based tips tailored to each situation.",
      },
      {
        title: "Smart Home Integration",
        content:
          "Optional integrations with Philips Hue, LIFX, and Fire TV enable automated environmental adjustments. Calming lighting and audio can be triggered based on detected agitation levels.",
      },
      {
        title: "Caregiver Dashboard",
        content:
          "Streamlit-based dashboard visualizes risk trends, common triggers, and conversation patterns. Caregivers receive actionable tips and can track improvement over time.",
      },
    ],
    related: ["audra-rad", "ct-throughput-optimizer"],
    highlights: [
      { metric: "Patient Agitation", value: "80%+ addressed", delta: "increase" },
      { metric: "Caregiver Burnout", value: "70% experience relief", delta: "decrease" },
      { metric: "Privacy", value: "In-session storage", delta: "increase" },
    ],
  },

  // PROJECTS (simpler format without deep-dive sections)
  {
    slug: "brain-mri-unet-lab",
    title: "Brain MRI Multimodal U-Net Lab",
    type: "project",
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
    github: "https://github.com/AmulyaVeldandi",
    demo: "https://github.com/AmulyaVeldandi",
    published: "2023-11-12",
  },
  {
    slug: "imputeagent-llm-imputation",
    title: "ImputeAgent - LLM-based Data Imputation",
    type: "project",
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
    github: "https://github.com/AmulyaVeldandi",
    published: "2025-08-01",
  },
  {
    slug: "radiology-report-summarization",
    title: "Radiology Report Summarization with LLMs",
    type: "project",
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
    github: "https://github.com/AmulyaVeldandi",
    published: "2024-07-01",
  },
  {
    slug: "cxr-labeling-benchmark",
    title: "CXR Labeling Benchmark: CheXbert vs CheXGPT",
    type: "research",
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
    github: "https://github.com/AmulyaVeldandi",
    published: "2024-04-01",
  },
  {
    slug: "icu-mortality-risk-models",
    title: "ICU Mortality Risk Stratification in Heart Failure Patients",
    type: "research",
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
    github: "https://github.com/AmulyaVeldandi",
    published: "2023-12-01",
  },
  {
    slug: "dsess-drug-safety-analytics",
    title: "Drug Side Effect Severity Score (D-SESS)",
    type: "research",
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
    github: "https://github.com/AmulyaVeldandi",
    published: "2023-04-01",
  },
];

// Utility functions
export function getWorkItem(slug: string): WorkItem | undefined {
  return workItems.find((item) => item.slug === slug);
}

export function getFeaturedWorkItems(limit = 3): WorkItem[] {
  return workItems.filter((item) => item.featured).slice(0, limit);
}

export function getWorkItemsByType(type: WorkItemType): WorkItem[] {
  return workItems.filter((item) => item.type === type);
}

export function getCaseStudies(): WorkItem[] {
  return workItems.filter((item) => item.type === "case-study");
}

export function getProjects(): WorkItem[] {
  return workItems.filter((item) => item.type === "project" || item.type === "research");
}

export function getAllWorkItems(): WorkItem[] {
  return workItems;
}