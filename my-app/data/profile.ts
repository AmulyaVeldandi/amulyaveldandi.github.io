import type { Profile } from "@/lib/content-types";

export const profile: Profile = {
  name: "Amulya Veldandi",
  headline: "Physician-Turned-AI Healthcare Engineer",
  subheadline:
    "Translating messy clinical workflows into reproducible neural products with measurable bedside impact.",
  location: "Indianapolis · Cleveland · Remote-friendly",
  resumeUrl: "/resume.pdf",
  social: [
    { label: "Email", href: "mailto:veldandiamulya@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/amulya-veldandi-104242261/" },
    { label: "GitHub", href: "https://github.com/amulyaveldandi" },
    { label: "Cal.com", href: "https://cal.com" },
  ],
  highlights: [
    {
      title: "50%+ Diagnostic Lift",
      description: "Clinical AI pipelines boost SQ-MRI agreement and neuro segmentation accuracy.",
      icon: "📈",
    },
    {
      title: "Agentic Workflow Architect",
      description: "Designing governance-first agents that keep clinicians in control.",
      icon: "🛡️",
    },
    {
      title: "Trusted by Health Systems",
      description: "Deployments across Cleveland Clinic, IU Health, and government hospitals.",
      icon: "🏥",
    },
  ],
  descriptors: [
    "Deep Learning Specialist",
    "Clinical Innovator",
    "Healthcare AI Researcher",
  ],
};
