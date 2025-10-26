import type { Profile } from "@/lib/content-types";

export const profile: Profile = {
  name: "Amulya Veldandi",
  headline: "Data Scientist · Healthcare AI Engineer",
  subheadline:
    "4+ years developing production AI/ML systems for medical imaging and clinical analytics. Translating clinical needs into deployable solutions with measurable impact.",
  location: "Cleveland, OH · Indianapolis, IN",
  resumeUrl: "/resume.pdf",
  social: [
    { label: "Email", href: "mailto:veldandiamulya@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/amulya-veldandi-104242261/" },
    { label: "GitHub", href: "https://github.com/amulyaveldandi" },
    { label: "Cal.com", href: "https://cal.com" },
  ],
  highlights: [
    {
      title: "80% Efficiency Gain",
      description: "Automated CT analysis cutting manual profiling time across 1,200+ imaging studies.",
      icon: "📈",
    },
    {
      title: "0.75 Dice Coefficient",
      description: "Multimodal brain MRI segmentation with Docker-based deep learning pipelines.",
      icon: "🧠",
    },
    {
      title: "Trusted by Leading Institutions",
      description: "Deployments at Cleveland Clinic, IU School of Medicine, and multi-site hospital systems.",
      icon: "🏥",
    },
  ],
  descriptors: [
    "Medical Imaging AI Specialist",
    "Deep Learning Engineer",
    "Clinical Data Scientist",
  ],
};
