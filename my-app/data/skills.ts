import type { SkillMatrix } from "@/lib/content-types";

export const skillMatrix: SkillMatrix = {
  "Programming & Tools": {
    summary: "Production-grade pipelines with robust packaging, version control, and cloud deployment.",
    skills: [
      { name: "Python", level: 92, years: 4, relatedProjects: ["ct-throughput-optimizer", "sq-mri-cdss"] },
      { name: "SQL", level: 85, years: 4, relatedProjects: ["icu-mortality-risk-models", "cxr-labeling-benchmark"] },
      { name: "R", level: 78, years: 3, relatedProjects: ["icu-mortality-risk-models"] },
      { name: "MATLAB", level: 70, years: 2, relatedProjects: ["brain-mri-unet-lab"] },
      { name: "Git", level: 88, years: 4, relatedProjects: ["ct-throughput-optimizer", "sq-mri-cdss"] },
    ],
  },
  "ML & Deep Learning": {
    summary: "End-to-end model development from data preprocessing to deployment monitoring.",
    skills: [
      { name: "PyTorch", level: 88, years: 3, relatedProjects: ["brain-mri-unet-lab", "ct-throughput-optimizer"] },
      { name: "TensorFlow", level: 82, years: 3, relatedProjects: ["brain-mri-unet-lab"] },
      { name: "Scikit-learn", level: 90, years: 4, relatedProjects: ["icu-mortality-risk-models"] },
      { name: "Keras", level: 80, years: 3, relatedProjects: ["brain-mri-unet-lab"] },
      { name: "Computer Vision", level: 85, years: 3, relatedProjects: ["ct-throughput-optimizer", "sq-mri-cdss"] },
    ],
  },
  "Cloud & DevOps": {
    summary: "Scalable infrastructure for reproducible ML workflows and production deployments.",
    skills: [
      { name: "Docker", level: 90, years: 3, relatedProjects: ["ct-throughput-optimizer", "sq-mri-cdss"] },
      { name: "AWS SageMaker", level: 75, years: 2, relatedProjects: ["ct-throughput-optimizer"] },
      { name: "CI/CD Pipelines", level: 72, years: 2, relatedProjects: ["ct-throughput-optimizer"] },
    ],
  },
  "Medical Imaging": {
    summary: "Deep learning for automated medical image analysis and clinical decision support.",
    skills: [
      { name: "DICOM", level: 88, years: 3, relatedProjects: ["ct-throughput-optimizer", "sq-mri-cdss"] },
      { name: "TotalSegmentator", level: 92, years: 2, relatedProjects: ["ct-throughput-optimizer"] },
      { name: "SimpleITK", level: 80, years: 3, relatedProjects: ["sq-mri-cdss"] },
      { name: "Pydicom", level: 85, years: 3, relatedProjects: ["ct-throughput-optimizer"] },
    ],
  },
  "Data Science": {
    summary: "Statistical modeling, data visualization, and reproducible analytics workflows.",
    skills: [
      { name: "Pandas", level: 92, years: 4, relatedProjects: ["icu-mortality-risk-models", "sq-mri-cdss"] },
      { name: "NumPy", level: 90, years: 4, relatedProjects: ["brain-mri-unet-lab", "ct-throughput-optimizer"] },
      { name: "Power BI", level: 82, years: 3, relatedProjects: ["icu-mortality-risk-models"] },
      { name: "Tableau", level: 75, years: 2, relatedProjects: ["icu-mortality-risk-models"] },
      { name: "Biostatistics", level: 80, years: 4, relatedProjects: ["icu-mortality-risk-models"] },
    ],
  },
  "Clinical Systems": {
    summary: "Healthcare IT integration and clinical data standards from bedside perspective.",
    skills: [
      { name: "Epic EHR", level: 72, years: 3, relatedProjects: ["agentic-radiology-assistant"] },
      { name: "FHIR APIs", level: 68, years: 2, relatedProjects: ["agentic-radiology-assistant"] },
      { name: "HL7 Standards", level: 65, years: 2, relatedProjects: ["agentic-radiology-assistant"] },
      { name: "Clinical Workflows", level: 88, years: 6, relatedProjects: ["ct-throughput-optimizer", "sq-mri-cdss"] },
    ],
  },
  Leadership: {
    summary: "Building multidisciplinary teams who sustain AI systems with clinical empathy.",
    skills: [
      { name: "Mentorship", level: 90, years: 4, relatedProjects: ["brain-mri-unet-lab"] },
      { name: "Cross-functional Collaboration", level: 88, years: 4, relatedProjects: ["ct-throughput-optimizer"] },
      { name: "Clinical Communication", level: 92, years: 6, relatedProjects: ["agentic-radiology-assistant"] },
    ],
  },
};
