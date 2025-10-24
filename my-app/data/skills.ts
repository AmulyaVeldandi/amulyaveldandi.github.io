import type { SkillMatrix } from "@/lib/content-types";

export const skillMatrix: SkillMatrix = {
  "Programming & Tools": {
    summary: "Production-grade pipelines delivered with robust packaging, observability, and data quality guardrails.",
    skills: [
      { name: "Python", level: 90, years: 6, relatedProjects: ["ct-throughput-optimizer", "sq-mri-cdss"] },
      { name: "SQL", level: 85, years: 7, relatedProjects: ["icu-mortality-risk-models", "cxr-labeling-benchmark"] },
      { name: "R", level: 75, years: 5, relatedProjects: ["icu-mortality-risk-models"] },
      { name: "Docker", level: 88, years: 5, relatedProjects: ["ct-throughput-optimizer", "sq-mri-cdss"] },
      { name: "AWS & Azure", level: 70, years: 4, relatedProjects: ["ct-throughput-optimizer"] },
    ],
  },
  "ML & AI": {
    summary: "From classical ML to multimodal deep learning and responsible agentic workflows.",
    skills: [
      { name: "PyTorch", level: 85, years: 4, relatedProjects: ["brain-mri-unet-lab"] },
      { name: "TensorFlow", level: 75, years: 3, relatedProjects: ["brain-mri-unet-lab"] },
      { name: "LLMs & RAG", level: 70, years: 2, relatedProjects: ["agentic-radiology-assistant"] },
      { name: "MLOps", level: 80, years: 4, relatedProjects: ["ct-throughput-optimizer", "sq-mri-cdss"] },
      { name: "Computer Vision", level: 82, years: 4, relatedProjects: ["ct-throughput-optimizer"] },
    ],
  },
  "Clinical Systems": {
    summary: "Deep appreciation for medical workflows, standards, and integrations from bedside experience.",
    skills: [
      { name: "Epic & Cerner", level: 70, years: 4, relatedProjects: ["agentic-radiology-assistant"] },
      { name: "FHIR APIs", level: 65, years: 3, relatedProjects: ["agentic-radiology-assistant"] },
      { name: "ICD-10 Coding", level: 72, years: 6, relatedProjects: ["icu-mortality-risk-models"] },
      { name: "PACS / DICOM", level: 78, years: 5, relatedProjects: ["ct-throughput-optimizer", "sq-mri-cdss"] },
    ],
  },
  "Analytics & Viz": {
    summary: "Explainability, interactive dashboards, and storytelling steeped in clinical empathy.",
    skills: [
      { name: "Power BI", level: 85, years: 5, relatedProjects: ["icu-mortality-risk-models", "sq-mri-cdss"] },
      { name: "Tableau", level: 70, years: 4, relatedProjects: ["icu-mortality-risk-models"] },
      { name: "Recharts", level: 65, years: 2, relatedProjects: ["ct-throughput-optimizer"] },
      { name: "Plotly", level: 60, years: 3, relatedProjects: ["dsess-drug-safety-analytics"] },
    ],
  },
  Leadership: {
    summary: "Building multidisciplinary teams who can sustain pipelines long after handoff.",
    skills: [
      { name: "Mentorship", level: 90, years: 6, relatedProjects: ["brain-mri-unet-lab"] },
      { name: "Change Management", level: 82, years: 5, relatedProjects: ["ct-throughput-optimizer"] },
      { name: "Clinical Facilitation", level: 88, years: 7, relatedProjects: ["agentic-radiology-assistant"] },
    ],
  },
  "Research Methods": {
    summary: "Human-AI Assemblage, study design, and biostatistical rigor shape safe deployments.",
    skills: [
      { name: "Human-AI Assemblage", level: 78, years: 3, relatedProjects: ["agentic-radiology-assistant"] },
      { name: "Biostatistics", level: 80, years: 5, relatedProjects: ["icu-mortality-risk-models"] },
      { name: "Clinical Trials", level: 68, years: 3, relatedProjects: ["sq-mri-cdss"] },
    ],
  },
};
