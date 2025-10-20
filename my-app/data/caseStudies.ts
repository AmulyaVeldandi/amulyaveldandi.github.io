export type CaseStudyMedia = {
  type: "image" | "gif";
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudyDetail = {
  category: string;
  focusAreas: string[];
  highlightMetric?: { label: string; value: string };
  purpose: string;
  objective: string;
  approach: string[];
  timeline: string;
  role: string;
  outcomes: string[];
  heroMedia: CaseStudyMedia;
  gallery: CaseStudyMedia[];
};

export const caseStudies: Record<string, CaseStudyDetail> = {
  "ct-throughput-optimizer": {
    category: "Imaging Operations",
    focusAreas: ["CT Throughput", "Workflow Automation"],
    highlightMetric: { label: "Scanner Availability", value: "+2–3 min/scan" },
    purpose: "Unblock CT scanner schedules by replacing manual attenuation profiling with predictive automation.",
    objective:
      "Deliver forward-looking bed-time forecasts so Cleveland Clinic technologists can prevent bottlenecks before they form.",
    approach: [
      "Containerised TotalSegmentator to generate attenuation-ready organ masks across 1,200+ CT studies each week.",
      "Engineered a feature store that blends tissue attenuation, protocol metadata, and historical wait times.",
      "Shipped gradient boosting models with SHAP diagnostics and Grafana dashboards for real-time technologist use.",
    ],
    timeline: "Jan 2024 – May 2024",
    role: "Lead Research Engineer",
    outcomes: [
      "Recovered 2–3 minutes per scan by alerting staff to predicted congestion windows.",
      "Cut manual contouring effort by 80% through fully automated segmentation and QC flags.",
      "Enabled daily capacity planning meetings with forecast exports and evidence-backed explanations.",
    ],
    heroMedia: {
      type: "image",
      src: "/case-studies/analytics-hero.svg",
      alt: "CT throughput analytics hero visual with dashboard overlays.",
    },
    gallery: [
      {
        type: "image",
        src: "/case-studies/analytics-detail.svg",
        alt: "Capacity planning dashboard showing predicted scanner delays.",
        caption: "Predictive dashboard surfacing high-risk scanner slots and expected time savings.",
      },
      {
        type: "image",
        src: "/case-studies/analytics-hero.svg",
        alt: "Containerised pipeline overview for CT throughput project.",
        caption: "Containerised pipeline orchestration diagram for segmentation, feature engineering, and forecasting.",
      },
    ],
  },
  "sq-mri-cdss": {
    category: "Pancreas",
    focusAreas: ["Pancreas", "Clinical AI"],
    highlightMetric: { label: "Score Consistency", value: "+35%" },
    purpose: "Standardise chronic pancreatitis staging with reproducible SQ-MRI biomarkers.",
    objective:
      "Give hepatology and radiology teams a containerised pipeline that yields consistent pancreas/spleen metrics across scanners.",
    approach: [
      "Built Docker images bundling TotalSegmentator with calibration scripts for multiphasic MRI volumes.",
      "Automated biomarker extraction for intensity, perfusion, and morphology to feed SQ-MRI scoring sheets.",
      "Designed QC dashboards and documentation that made redeployments plug-and-play for imaging physics teams.",
    ],
    timeline: "Jun 2023 – Feb 2024",
    role: "Data Scientist",
    outcomes: [
      "Lifted SQ-MRI score agreement by 35% across Indiana University and partner institutions.",
      "Delivered 90% reduction in manual ROI creation for radiology fellows.",
      "Enabled pancreas boards to review longitudinal biomarkers within minutes after scan acquisition.",
    ],
    heroMedia: {
      type: "image",
      src: "/case-studies/pancreas-hero.svg",
      alt: "Pancreas MRI pipeline hero visual with segmentation overlays.",
    },
    gallery: [
      {
        type: "image",
        src: "/case-studies/pancreas-detail.svg",
        alt: "Pancreas biomarker dashboard with SQ-MRI metrics.",
        caption: "SQ-MRI console comparing perfusion and morphology biomarkers across multiphasic studies.",
      },
      {
        type: "image",
        src: "/case-studies/pancreas-hero.svg",
        alt: "Workflow diagram for pancreas imaging pipeline.",
        caption: "Containerised staging workflow spanning segmentation, biomarker extraction, and QC review.",
      },
    ],
  },
  "brain-mri-unet-lab": {
    category: "Neuroimaging",
    focusAreas: ["Neuroimaging", "Deep Learning"],
    highlightMetric: { label: "Dice Score", value: "0.75 multimodal" },
    purpose: "Benchmark how multimodal MRI inputs accelerate neuro segmentation research.",
    objective:
      "Publish reproducible 3D U-Net experiments that students and collaborators can extend on Quartz GPU clusters.",
    approach: [
      "Trained TensorFlow 3D U-Nets with modality-specific encoders for T1, T2, and FLAIR combinations.",
      "Applied augmentation pipelines (vesselness filters, elastic deformation, intensity harmonisation) to boost generalisability.",
      "Packaged training/inference notebooks, Docker images, and lab exercises for semester-long workshops.",
    ],
    timeline: "Aug 2022 – Present",
    role: "Neuroimaging Lab Lead",
    outcomes: [
      "Achieved Dice 0.75 with multimodal inputs, outperforming mono-modal baselines by 9 points.",
      "Reduced training time 40% via Quartz acceleration and mixed-precision tuning.",
      "Mentored 30+ graduate students who replicated and extended the benchmark within weeks.",
    ],
    heroMedia: {
      type: "image",
      src: "/case-studies/neuro-hero.svg",
      alt: "3D brain segmentation hero visualization.",
    },
    gallery: [
      {
        type: "image",
        src: "/case-studies/neuro-detail.svg",
        alt: "Volume rendering of multimodal MRI segmentation.",
        caption: "Multimodal segmentation slices highlighting improvements in cortical delineation.",
      },
      {
        type: "image",
        src: "/case-studies/neuro-hero.svg",
        alt: "Neuroimaging pipeline diagram for the lab.",
        caption: "Training stack showing modality encoders, augmentation stages, and monitoring hooks.",
      },
    ],
  },
  "imputeagent-data-imputation": {
    category: "NLP Agents",
    focusAreas: ["NLP Agents", "Agentic AI"],
    highlightMetric: { label: "AUC Recovery", value: "+10%" },
    purpose: "Stabilise downstream clinical models by repairing missing data with reasoning agents.",
    objective:
      "Blend statistical imputers and LLM validation to handle MCAR, MAR, and MNAR patterns without sacrificing auditability.",
    approach: [
      "Devised planner/executor/critic agents that debate the best imputation strategy per feature group.",
      "Embedded drift detection, sensitivity analysis, and structured audit reports for every batch.",
      "Packaged the workflow for on-prem HPC and AWS SageMaker with shared configuration templates.",
    ],
    timeline: "Oct 2023 – Mar 2024",
    role: "Agentic AI Engineer",
    outcomes: [
      "Improved average model AUC by 10% post-imputation across four clinical registries.",
      "Achieved 100% audit coverage with critic-generated variance explanations and risk flags.",
      "Standardised deployment across hybrid infrastructure with reproducible IaC modules.",
    ],
    heroMedia: {
      type: "image",
      src: "/case-studies/nlp-hero.svg",
      alt: "Agentic AI workflow hero visual.",
    },
    gallery: [
      {
        type: "image",
        src: "/case-studies/nlp-detail.svg",
        alt: "Agent loop diagram with planner, executor, and critic.",
        caption: "Planner/executor/critic flow outlining decision checkpoints and audit outputs.",
      },
      {
        type: "image",
        src: "/case-studies/nlp-hero.svg",
        alt: "Sensitivity analysis view for imputation pipeline.",
        caption: "Variance and drift dashboards generated alongside each batch run.",
      },
    ],
  },
  "radiology-report-llm": {
    category: "NLP Agents",
    focusAreas: ["NLP Agents", "Radiology"],
    highlightMetric: { label: "Summarisation Time", value: "-60%" },
    purpose: "Compress radiology reports into trustworthy briefs for referring physicians.",
    objective:
      "Launch a retrieval-augmented assistant that keeps radiologists in control while accelerating daily reporting cycles.",
    approach: [
      "Vectorised 10k+ MRI reports with clinically tuned embeddings feeding a hybrid keyword/semantic retriever.",
      "Structured prompts and guardrails so summaries prioritise critical findings and cite supporting evidence.",
      "Built a Gradio interface with live clinician feedback capture feeding continuous improvement loops.",
    ],
    timeline: "May 2023 – Nov 2023",
    role: "Applied LLM Engineer",
    outcomes: [
      "Reduced manual summarisation time by 60% while preserving radiologist oversight.",
      "Improved workflow efficiency 45% with inline citation and context windows.",
      "Integrated red-team prompts and hallucination checks before production rollout.",
    ],
    heroMedia: {
      type: "image",
      src: "/case-studies/nlp-hero.svg",
      alt: "Radiology RAG assistant hero view.",
    },
    gallery: [
      {
        type: "image",
        src: "/case-studies/nlp-detail.svg",
        alt: "RAG architecture for radiology assistant.",
        caption: "Retriever, generator, and verification stages powering the radiology briefing assistant.",
      },
      {
        type: "image",
        src: "/case-studies/nlp-hero.svg",
        alt: "Clinician console for the radiology RAG assistant.",
        caption: "Clinician console with side-by-side source context, edits, and acceptance tracking.",
      },
    ],
  },
  "cxr-labeling-nlp-study": {
    category: "Neuroimaging",
    focusAreas: ["NLP Agents", "Labeling"],
    highlightMetric: { label: "Label Accuracy", value: "+12%" },
    purpose: "Benchmark large language models for chest X-ray report labelling at scale.",
    objective:
      "Compare CheXbert and CheXGPT across harmonised corpora so hospitals can trust automated labeling workflows.",
    approach: [
      "Combined MIMIC-CXR and IU-CXR datasets with ontology reconciliation and robust preprocessing.",
      "Fine-tuned CheXbert and CheXGPT with systematic hyperparameter sweeps and calibration rounds.",
      "Partnered with radiologists for adjudication loops and misclassification taxonomy development.",
    ],
    timeline: "Jan 2022 – Aug 2022",
    role: "NLP Research Lead",
    outcomes: [
      "Boosted label accuracy by 12% compared to heuristic baselines.",
      "Processed 220k+ reports with automated QA that flags drift on new corpora.",
      "Published error taxonomies informing future LLM fine-tuning and prompt strategies.",
    ],
    heroMedia: {
      type: "image",
      src: "/case-studies/nlp-hero.svg",
      alt: "Chest X-ray labeling benchmark hero graphic.",
    },
    gallery: [
      {
        type: "image",
        src: "/case-studies/nlp-detail.svg",
        alt: "Model comparison chart for CXR labeling study.",
        caption: "Precision/recall comparison across CheXbert and CheXGPT label families.",
      },
      {
        type: "image",
        src: "/case-studies/nlp-hero.svg",
        alt: "Workflow for large-scale CXR labeling.",
        caption: "End-to-end labeling workflow with data harmonisation, inference, and adjudication checkpoints.",
      },
    ],
  },
  "icu-mortality-risk-models": {
    category: "Analytics",
    focusAreas: ["Clinical Analytics", "Survival Analysis"],
    highlightMetric: { label: "Cohort Size", value: "12,500 admissions" },
    purpose: "Expose factors driving ICU mortality risk for heart failure patients.",
    objective:
      "Quantify statistically significant predictors and turn them into explainable dashboards for multidisciplinary rounds.",
    approach: [
      "Curated vitals, interventions, and labs for 12,500 ICU admissions with rigorous data quality audits.",
      "Trained logistic, survival, and tree-based models with model explainability overlays.",
      "Packaged Power BI dashboards and R Markdown briefs for clinical adoption.",
    ],
    timeline: "Sep 2021 – Apr 2022",
    role: "Biostatistics Lead",
    outcomes: [
      "Highlighted eight significant predictors adopted in ICU triage checklists.",
      "Drove daily cardiology touchpoints using interpretable cohort dashboards.",
      "Accelerated mortality risk reviews by consolidating data prep and model refreshes.",
    ],
    heroMedia: {
      type: "image",
      src: "/case-studies/analytics-hero.svg",
      alt: "ICU analytics hero visualization with survival curves.",
    },
    gallery: [
      {
        type: "image",
        src: "/case-studies/analytics-detail.svg",
        alt: "ICU risk dashboard view.",
        caption: "Risk tiers and predictor contributions published to ICU dashboards.",
      },
      {
        type: "image",
        src: "/case-studies/analytics-hero.svg",
        alt: "Model coefficient overview for ICU mortality project.",
        caption: "Model interpretability charts summarising odds ratios and survival curves.",
      },
    ],
  },
  "dsess-drug-safety-analytics": {
    category: "Analytics",
    focusAreas: ["Clinical Analytics", "Pharmacovigilance"],
    highlightMetric: { label: "Coverage", value: "3,500 drugs" },
    purpose: "Score side-effect severity and cluster medications for data-informed prescribing.",
    objective:
      "Deliver a reproducible DSESS scoring system with interactive visuals for pharmaco committees and safety teams.",
    approach: [
      "Engineered severity, frequency, and onset features for 3,500 medications sourced from safety databases.",
      "Applied clustering to surface drug families and outliers needing escalation.",
      "Built an interactive explorer that links clusters, severity predictions, and evidence snippets.",
    ],
    timeline: "Mar 2021 – Dec 2021",
    role: "Analytics Engineer",
    outcomes: [
      "Achieved 0.98 severity prediction accuracy on holdout datasets.",
      "Enabled pharmacists to vet drug families via five actionable clusters.",
      "Established data governance playbooks for ongoing safety monitoring.",
    ],
    heroMedia: {
      type: "image",
      src: "/case-studies/analytics-hero.svg",
      alt: "Pharmacovigilance analytics hero visual.",
    },
    gallery: [
      {
        type: "image",
        src: "/case-studies/analytics-detail.svg",
        alt: "Drug severity cluster explorer.",
        caption: "Cluster explorer highlighting drug families with similar adverse effect profiles.",
      },
      {
        type: "image",
        src: "/case-studies/analytics-hero.svg",
        alt: "Severity heatmap for pharmacovigilance project.",
        caption: "Heatmap of DSESS severity scores feeding formulary review meetings.",
      },
    ],
  },
};

export function getCaseStudy(slug: string): CaseStudyDetail | undefined {
  return caseStudies[slug];
}
