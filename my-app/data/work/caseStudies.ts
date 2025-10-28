import type { CaseStudy } from "@/lib/content-types";

export const caseStudies: Record<string, CaseStudy> = {
  "ct-throughput-optimizer": {
    slug: "ct-throughput-optimizer",
    title: "Cleveland Clinic CT Throughput Optimizer",
    category: "Clinical Operations",
    description:
      "Containerised attenuation automation and predictive scheduling that return minutes to every CT scan.",
    heroImage: "/case-studies/analytics-hero.svg",
    heroAlt: "CT throughput dashboard with predictive overlays.",
    techStack: ["Python", "Docker", "TotalSegmentator", "LightGBM", "Grafana"],
    github: "https://github.com/AmulyaVeldandi",
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
  "sq-mri-cdss": {
    slug: "sq-mri-cdss",
    title: "Pancreatitis SQ-MRI Clinical Decision Support",
    category: "Clinical AI",
    description:
      "An end-to-end MRI biomarker pipeline that standardises SQ-MRI staging across scanners and institutions.",
    heroImage: "/case-studies/pancreas-hero.svg",
    heroAlt: "Pancreas MRI case study hero graphic.",
    techStack: ["Docker", "PyTorch", "FastAPI", "Supabase", "Power BI"],
    github: "https://github.com/AmulyaVeldandi",
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
  "audra-rad": {
    slug: "audra-rad",
    title: "AuDRA-Rad: Autonomous Radiology Assistant",
    category: "Healthcare AI",
    description:
      "An autonomous AI system that reads radiology reports, retrieves ACR/Fleischner guidelines, and generates EHR-integrated follow-up orders.",
    heroImage: "/case-studies/audra-hero.svg",
    heroAlt: "AuDRA-Rad autonomous radiology workflow.",
    techStack: ["AWS EKS", "NVIDIA NIM", "FastAPI", "OpenSearch", "Docker", "Kubernetes", "FHIR"],
    github: "https://github.com/AmulyaVeldandi/AuDRA-Rad",
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
  "calm-companion": {
    slug: "calm-companion",
    title: "CalmCompanion: AI Support for Alzheimer's Care",
    category: "Healthcare AI",
    description:
      "Voice-first AI system providing empathetic support and smart-home automation for Alzheimer's patients and caregivers.",
    heroImage: "/case-studies/calm-hero.svg",
    heroAlt: "CalmCompanion AI care assistant.",
    techStack: ["Python", "AWS Bedrock", "FastAPI", "Streamlit", "DynamoDB", "S3"],
    github: "https://github.com/AmulyaVeldandi/CalmCompanion",
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
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export const caseStudyList = Object.values(caseStudies);
