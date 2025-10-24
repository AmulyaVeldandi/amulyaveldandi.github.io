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
    github: "https://github.com/amulyaveldandi",
    demo: "https://github.com/amulyaveldandi",
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
    related: ["sq-mri-cdss", "agentic-radiology-assistant"],
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
    github: "https://github.com/amulyaveldandi",
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
  "agentic-radiology-assistant": {
    slug: "agentic-radiology-assistant",
    title: "Agentic Radiology Workflow Assistant",
    category: "Agentic AI",
    description:
      "Responsible agentic workflows that triage imaging follow-ups, reconcile reports, and surface drift to clinical leads.",
    heroImage: "/case-studies/neuro-hero.svg",
    heroAlt: "Agentic radiology workflow illustration.",
    techStack: ["LangChain", "OpenAI", "Supabase", "FastAPI", "Power BI"],
    overview: {
      problem:
        "Radiology teams drowned in follow-up tracking and manual reconciliation, leading to delayed escalations and unreviewed AI outputs.",
      role: "Product & Technical Lead",
      timeline: "Aug 2024 – Jan 2025",
    },
    challenge: {
      heading: "Follow-up tracking consumed clinical bandwidth",
      body:
        "Report addenda, incidental findings, and AI-assisted reads had no unified triage. Clinicians worked from spreadsheets and inbox reminders.",
      bullets: [
        "12k+ yearly follow-ups tracked manually across email and Excel.",
        "No feedback loop for AI disagreements or drift signals.",
        "Lack of governance artifacts slowed leadership approvals.",
      ],
    },
    approach: {
      heading: "Agentic loop aligned with clinical governance",
      body:
        "We designed agents for retrieval, summarisation, and escalation with explicit human checkpoints. Every action is logged with clinical rationale for audit.",
      bullets: [
        "Retrieval agents compile cohorts from PACS, BI, and EHR using FHIR microservices.",
        "Summarisation agents draft context-rich briefs that clinicians approve in under 2 minutes.",
        "Governance agent publishes weekly drift & safety dashboards for leadership review.",
      ],
      diagram: "/case-studies/neuro-detail.svg",
    },
    results: [
      {
        metric: "Follow-up Turnaround",
        before: "14 days",
        after: "3 days",
        insight: "Automated reminders and escalations with human-in-the-loop checkpoints.",
      },
      {
        metric: "AI Disagreement Resolution",
        before: "21 days",
        after: "48 hours",
        insight: "Drift surfaced with ready-to-review evidence bundles.",
      },
      {
        metric: "Clinician Time",
        before: "5 hr/week",
        after: "1.2 hr/week",
        insight: "Summaries and agent governance reduced admin burden.",
      },
    ],
    impact: [
      "90% of escalations now include patient context, imaging, and recommendation snapshots.",
      "Leadership reviews include a full trace of agent actions, rationales, and overrides.",
      "Framework reused across perioperative and quality teams to launch new agentic pilots.",
    ],
    deepDive: [
      {
        title: "Safety Rails",
        content:
          "Every agent requires explicit clinician validation before updates reach the EHR. Staged rollouts with shadow mode logging identified failure modes ahead of production.",
      },
      {
        title: "Knowledge Graph",
        content:
          "A radiology knowledge graph maps modalities, findings, and follow-up recommendations. Agents use graph traversal to validate suggestions before surfacing to clinicians.",
      },
      {
        title: "Feedback Loop",
        content:
          "Clinician feedback trains evaluation prompts measuring helpfulness, accuracy, and empathy. Scores feed into weekly QA dashboards and agent retraining cadences.",
      },
    ],
    related: ["ct-throughput-optimizer", "sq-mri-cdss"],
    highlights: [
      { metric: "Turnaround", value: "↓78%", delta: "decrease" },
      { metric: "Escalation Accuracy", value: "↑30%", delta: "increase" },
      { metric: "Reuse", value: "2 additional service lines", delta: "increase" },
    ],
  },
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export const caseStudyList = Object.values(caseStudies);
