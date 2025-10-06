export type ProjectDetail = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  problem: string;
  approach: string[];
  results: { metric: string; value: string; detail?: string }[];
  visuals: { title: string; description: string }[];
  github: string;
  badges?: { label: string; value: string }[];
};

export const projects: ProjectDetail[] = [
  {
    slug: "ct-throughput-optimizer",
    title: "Cleveland Clinic CT Throughput Optimizer",
    summary:
      "Automated CT analysis pipeline that predicts scanner bed time and frees radiology teams from manual attenuation profiling.",
    tags: ["Imaging AI", "Workflow Automation", "MLOps"],
    problem:
      "Technologists spent hours profiling attenuation across 1,200+ CT studies, creating a bottleneck that limited scanner availability.",
    approach: [
      "Generated organ masks with TotalSegmentator, extracting tissue-level attenuation signatures for each study.",
      "Built Python + Docker batching that processes hundreds of CT volumes in parallel, cutting turnaround from 48 hours to 4 hours.",
      "Trained gradient boosting and temporal models that predict scanner bed time and surface delay risks to staff dashboards.",
    ],
    results: [
      { metric: "Manual Effort", value: "-80%", detail: "Reduction in attenuation profiling effort across 1,200+ scans" },
      { metric: "Scanner Availability", value: "+2–3 min/scan", detail: "Recovered time per patient by forecasting bed duration" },
      { metric: "Pipeline Runtime", value: "4 hr", detail: "Down from a 48 hr manual workflow using containerized batching" },
    ],
    visuals: [
      {
        title: "Segmentation to Prediction",
        description: "Flow of TotalSegmentator outputs into feature engineering and bed-time forecasting models.",
      },
      {
        title: "Throughput Dashboard",
        description: "Snapshot of technologist-facing view highlighting predicted delays and utilization gains.",
      },
    ],
    github: "https://github.com/amulyaveldandi",
    badges: [
      { label: "Scans Optimised", value: "1,200+" },
      { label: "Time Saved", value: "2–3 min/scan" },
      { label: "Runtime", value: "48 hr → 4 hr" },
    ],
  },
  {
    slug: "sq-mri-cdss",
    title: "Pancreatitis SQ-MRI Clinical Decision Support",
    summary:
      "Multiphasic MRI pipeline producing quantitative SQ-MRI scores to standardise chronic pancreatitis staging.",
    tags: ["Clinical AI", "Segmentation", "Docker"],
    problem:
      "Clinicians lacked reproducible pancreas/spleen measurements, leading to inconsistent SQ-MRI scoring across institutions.",
    approach: [
      "Containerised TotalSegmentator + Docker workflow that segments abdominal organs across 200+ multiphase MRI subjects.",
      "Engineered biomarker extraction routines for intensity, texture, and perfusion metrics straight from DICOM/NIfTI inputs.",
      "Designed QC dashboards and documentation that made the pipeline deployable across scanners and study sites.",
    ],
    results: [
      { metric: "ROI Delineation", value: "-90%", detail: "Drop in manual segmentation time for radiology fellows" },
      { metric: "Score Consistency", value: "+35%", detail: "Improvement in SQ-MRI agreement across scanners" },
      { metric: "Deployments", value: "Multi-site", detail: "Validated on Indiana University and partner health systems" },
    ],
    visuals: [
      {
        title: "Pipeline Diagram",
        description: "From DICOM ingestion to containerised inference and QC dashboards.",
      },
      {
        title: "Biomarker Summary",
        description: "Example SQ-MRI report highlighting perfusion and texture metrics.",
      },
    ],
    github: "https://github.com/amulyaveldandi",
    badges: [
      { label: "MRI Subjects", value: "200+" },
      { label: "Time Saved", value: "-90% ROI prep" },
      { label: "Institutions", value: "2+" },
    ],
  },
  {
    slug: "brain-mri-unet-lab",
    title: "Brain MRI Multimodal U-Net Lab",
    summary:
      "3D U-Net experiments comparing mono vs. multimodal MRI inputs to accelerate neuro segmentation research.",
    tags: ["Deep Learning", "Neuroimaging", "Research"],
    problem:
      "Research teams needed a reproducible benchmark for multimodal brain MRI segmentation that ran efficiently on Quartz GPUs.",
    approach: [
      "Implemented TensorFlow-based 3D U-Nets with modality-specific encoders for T1, T2, and FLAIR volumes.",
      "Applied augmentation (cropping, vesselness filters, normalization) to boost generalisability across 40+ datasets.",
      "Containerised training/inference with Docker to ensure consistent runs on institutional GPU clusters.",
    ],
    results: [
      { metric: "Dice Score", value: "0.75", detail: "Multimodal model performance vs. mono-modal baseline" },
      { metric: "Training Time", value: "-40%", detail: "Reduction with Quartz acceleration and pipeline tuning" },
      { metric: "Teaching Impact", value: "30+ students", detail: "Workshops and labs delivered each semester" },
    ],
    visuals: [
      {
        title: "Modality Ablation",
        description: "Dice score comparison of input combinations across cohorts.",
      },
      {
        title: "Pipeline Stack",
        description: "Dockerised training workflow and monitoring dashboards.",
      },
    ],
    github: "https://github.com/amulyaveldandi",
    badges: [
      { label: "Datasets", value: "40+" },
      { label: "GPU Speedup", value: "-40% training time" },
      { label: "Learners", value: "30+ mentored" },
    ],
  },
  {
    slug: "imputeagent-data-imputation",
    title: "ImputeAgent LLM Data Imputation",
    summary:
      "Agentic AI workflow that combines statistical estimators and LLM reasoning to recover missing clinical variables across MCAR, MAR, and MNAR patterns.",
    tags: ["Agentic AI", "Data Imputation", "LLM"],
    problem:
      "Clinical registries carried mixed-mode missingness that degraded downstream model AUC and delayed reporting cycles.",
    approach: [
      "Devised a coordinator/critic agent loop where LLM prompts select statistical imputers and validate MCAR, MAR, or MNAR assumptions.",
      "Orchestrated open-source LLMs with sensitivity sweeps, drift detection, and audit logging per batch.",
      "Deployed the pipeline on on-prem HPC and AWS SageMaker with reproducible configuration profiles and reporting hooks.",
    ],
    results: [
      { metric: "AUC Recovery", value: "+10%", detail: "Average lift across downstream risk models after imputation" },
      { metric: "Audit Coverage", value: "100%", detail: "Every batch ships critic-driven variance and bias reports" },
      { metric: "Deployment Footprint", value: "HPC + SageMaker", detail: "Single workflow parameterised for hybrid infrastructure" },
    ],
    visuals: [
      {
        title: "Agent Loop",
        description: "Diagram of planner, executor, and critic agents coordinating imputation choices.",
      },
      {
        title: "Imputation QA",
        description: "Sensitivity report summarising variance bounds and bias checks per dataset.",
      },
    ],
    github: "https://github.com/amulyaveldandi",
    badges: [
      { label: "Missingness Types", value: "MCAR · MAR · MNAR" },
      { label: "AUC Lift", value: "+10%" },
      { label: "Deployments", value: "Hybrid" },
    ],
  },
  {
    slug: "radiology-report-llm",
    title: "Radiology Report Summarisation RAG",
    summary:
      "RAG framework that generates clinician-ready radiology briefs from a 10k+ report corpus with real-time Gradio review.",
    tags: ["LLM", "RAG", "Radiology"],
    problem:
      "Radiologists spent significant time distilling narrative MRI reports into concise updates for referring physicians.",
    approach: [
      "Ingested and vectorised 10,000+ historical MRI reports with VS Code and LM Studio workflow for rapid iteration.",
      "Configured retrieval-augmented prompting with guardrails that prioritise critical findings and suppress hallucinations.",
      "Shipped an interactive Gradio interface with side-by-side source context and clinician feedback capture.",
    ],
    results: [
      { metric: "Summarisation Time", value: "-60%", detail: "Reduction in manual summarisation effort per report" },
      { metric: "Workflow Efficiency", value: "+45%", detail: "Uplift in turnaround once the RAG assistant was adopted" },
      { metric: "Corpus Size", value: "10k+ reports", detail: "Domain-specific knowledge base powering retrieval" },
    ],
    visuals: [
      {
        title: "RAG Pipeline",
        description: "Retriever, generator, and verification stages linking the radiology corpus to the LLM.",
      },
      {
        title: "Clinician Console",
        description: "Screenshot of the Gradio interface with context windows and feedback toggles.",
      },
    ],
    github: "https://github.com/amulyaveldandi",
    badges: [
      { label: "Time Saved", value: "-60%" },
      { label: "Reports", value: "10k+" },
      { label: "Interface", value: "Live Gradio" },
    ],
  },
  {
    slug: "cxr-labeling-nlp-study",
    title: "CXR NLP Labeling Benchmark",
    summary:
      "Comparative study of CheXbert vs. CheXGPT models labelling 220k+ chest X-ray reports with finely tuned hyperparameters.",
    tags: ["NLP", "Labeling", "Research"],
    problem:
      "Hospitals needed consistent labels for massive CXR corpora to fuel downstream analytics and training datasets.",
    approach: [
      "Curated combined MIMIC-CXR and IU-CXR datasets with harmonised ontologies and preprocessing.",
      "Fine-tuned CheXbert and CheXGPT with systematic hyperparameter sweeps and calibration checks.",
      "Benchmarked model outputs against clinician adjudicated sets, surfacing failure modes and remediation guidance.",
    ],
    results: [
      { metric: "Label Accuracy", value: "+12%", detail: "Gain over baseline heuristic pipeline" },
      { metric: "Reports Analysed", value: "220k+", detail: "Scale of combined MIMIC and IU corpora" },
      { metric: "Evaluation", value: "Clinician QA", detail: "Expert adjudication loop for final metrics" },
    ],
    visuals: [
      {
        title: "Model Comparison",
        description: "Precision/recall charts contrasting CheXbert and CheXGPT across label families.",
      },
      {
        title: "Error Taxonomy",
        description: "Matrix of misclassification categories and recommended mitigations.",
      },
    ],
    github: "https://github.com/amulyaveldandi",
    badges: [
      { label: "Datasets", value: "MIMIC + IU" },
      { label: "Accuracy Gain", value: "+12%" },
      { label: "Reports", value: "220k+" },
    ],
  },
  {
    slug: "icu-mortality-risk-models",
    title: "ICU Mortality Risk Stratification",
    summary:
      "Biostatistics project quantifying mortality drivers for 12,500 ICU heart failure patients with interpretable dashboards.",
    tags: ["Biostatistics", "Survival Analysis", "ICU"],
    problem:
      "Care teams lacked clear visibility into which ICU heart failure patients faced elevated mortality risk on admission.",
    approach: [
      "Engineered cohort features in R Studio spanning vitals, interventions, and labs for 12,500 admissions.",
      "Applied logistic regression, survival analysis, and non-parametric tests to surface statistically significant predictors.",
      "Built Power BI visuals translating model outputs into explainable risk tiers for multidisciplinary rounds.",
    ],
    results: [
      { metric: "Cohort Size", value: "12,500", detail: "ICU admissions analysed across study window" },
      { metric: "Significant Predictors", value: "8", detail: "p < 0.05 factors driving mortality risk" },
      { metric: "Stakeholder Impact", value: "Cardiology & ICU", detail: "Dashboards adopted for daily reviews" },
    ],
    visuals: [
      {
        title: "Risk Dashboard",
        description: "Power BI view ranking patient segments by predicted mortality risk.",
      },
      {
        title: "Model Coefficients",
        description: "Bar chart of significant predictors with odds ratios and confidence intervals.",
      },
    ],
    github: "https://github.com/amulyaveldandi",
    badges: [
      { label: "Patients", value: "12,500" },
      { label: "Predictors", value: "8 significant" },
      { label: "Tools", value: "R + Power BI" },
    ],
  },
  {
    slug: "dsess-drug-safety-analytics",
    title: "Drug Side Effect Severity Analytics",
    summary:
      "Pharmacovigilance tooling that scores side-effect severity and clusters 3,500 drugs for risk-aware decision making.",
    tags: ["Pharmacovigilance", "Clustering", "Analytics"],
    problem:
      "Clinicians needed a reproducible way to compare drug side-effect burdens and prioritise safer alternatives.",
    approach: [
      "Designed the DSESS scoring framework incorporating severity, frequency, and onset features for 3,500 medications.",
      "Applied unsupervised clustering to reveal drug families with similar adverse profiles and highlight outliers.",
      "Trained a prediction model that estimates severity scores for new drugs, pairing results with explorable visuals.",
    ],
    results: [
      { metric: "Coverage", value: "3,500 drugs", detail: "Pharmacovigilance profiles assessed" },
      { metric: "Model Accuracy", value: "0.98", detail: "Severity score prediction performance" },
      { metric: "Cluster Insights", value: "5 cohorts", detail: "Actionable groupings for formulary review" },
    ],
    visuals: [
      {
        title: "Severity Heatmap",
        description: "Matrix visualising DSESS scores across drug classes.",
      },
      {
        title: "Cluster Explorer",
        description: "Dimensionality reduction plot revealing grouped medications and outliers.",
      },
    ],
    github: "https://github.com/amulyaveldandi",
    badges: [
      { label: "Drugs", value: "3,500" },
      { label: "Accuracy", value: "0.98" },
      { label: "Clusters", value: "5" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
