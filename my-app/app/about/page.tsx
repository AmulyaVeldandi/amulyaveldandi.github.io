"use client";
import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import Link from "next/link";

type EducationEntry = {
  school: string;
  credential: string;
  timeframe: string;
  highlights: string;
};

type SkillGroup = {
  label: string;
  items: string[];
};

type ExperienceEntry = {
  role: string;
  organization: string;
  location: string;
  timeframe: string;
  bullets: string[];
};

type ProjectEntry = {
  name: string;
  timeframe: string;
  details: string[];
  github: string;
  imageAlt: string;
};

const summary =
  "Physician-turned healthcare data scientist with 4+ years translating nuanced clinical questions into trustworthy neural products.";

const summaryHighlights = [
  "Automates imaging pipelines (CT, MRI, multimodal) to shrink manual prep by up to 90%.",
  "Blends statistical rigor with deep learning to improve diagnostic accuracy and workflow efficiency.",
  "Builds reproducible, bias-aware solutions with containerized deployments and collaborative validation.",
];

const education: EducationEntry[] = [
  {
    school: "Indiana University Indianapolis",
    credential: "MS, Health Informatics | GPA 3.94/4.00",
    timeframe: "May 2025",
    highlights:
      "Coursework: Data Analytics, Biostatistics, Machine Learning, Deep Learning, NLP, Project Management",
  },
  {
    school: "Gandhi Medical College, India",
    credential: "MBBS | GPA 3.7/4.00",
    timeframe: "April 2021",
    highlights:
      "Focus: Biostatistics, Literature Review, Surgery, Medicine; Student Government President",
  },
];

const skillGroups: SkillGroup[] = [
  {
    label: "Programming & Tools",
    items: [
      "Python",
      "SQL",
      "R",
      "MATLAB",
      "Git",
      "Docker",
      "AWS SageMaker",
      "Gradio",
      "HuggingFace",
    ],
  },
  {
    label: "Machine Learning & AI",
    items: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "XGBoost",
      "StatsModels",
      "CrewAI",
      "Agentic AI",
      "RAG Pipelines",
    ],
  },
  {
    label: "Statistical Methods",
    items: [
      "Regression",
      "Classification",
      "Clustering",
      "Time-Series Forecasting",
      "Bayesian Modeling",
      "Survival Analysis",
      "Experimental Design",
    ],
  },
  {
    label: "Clinical Systems",
    items: ["Epic", "OpenEMR", "MIM", "REDCap", "HL7/FHIR", "ICD Coding", "HIPAA"],
  },
  {
    label: "Analytics & Visualization",
    items: ["Tableau", "Power BI", "SPSS", "STATA", "SPM", "FSL", "3D Slicer"],
  },
  {
    label: "Research & Documentation",
    items: [
      "IRB Protocols",
      "Grant Submissions",
      "Manuscripts",
      "Conference Abstracts",
    ],
  },
];

const experiences: ExperienceEntry[] = [
  {
    role: "Research Engineer",
    organization:
      "Department of Nuclear Medicine, Diagnostics Institute, Cleveland Clinic",
    location: "Cleveland, OH",
    timeframe: "June 2025 - Present",
    bullets: [
      "Automating CT analysis pipelines with TotalSegmentator masks, cutting manual attenuation profiling by 80% across 1,200+ studies.",
      "Building prediction models from attenuation profiles that save 2-3 minutes per scan and unlock hours of daily scanner capacity.",
      "Containerizing batch analysis with Docker to shrink pipeline turnaround from 48 hours to 4 hours on hundreds of CT volumes.",
      "Partnering with radiologists, physicists, and analysts to validate outputs and maintain clinical, reproducible workflows.",
    ],
  },
  {
    role: "Data Scientist",
    organization: "Indiana University School of Medicine",
    location: "Indianapolis, IN",
    timeframe: "June 2024 - May 2025",
    bullets: [
      "Delivered a pancreas CDSS by combining TotalSegmentator and Docker, reducing manual ROI delineation time by 90% on 200+ MRI cases.",
      "Engineered quantitative biomarker extraction from multiphase DICOM/NIfTI inputs, standardizing SQ-MRI scores across scanners.",
      "Designed mono- and multimodal 3D U-Nets on 40+ brain MRI datasets, attaining a 0.75 Dice coefficient with multimodal inputs.",
      "Led Python/R/SQL instruction for 30+ graduate students per semester and revamped course content to raise satisfaction by 20%.",
    ],
  },
  {
    role: "Data Analyst",
    organization: "Precision Health Initiative (PLHI), Indiana University Indianapolis",
    location: "Indianapolis, IN",
    timeframe: "January 2023 - May 2024",
    bullets: [
      "Conducted Human-AI Assemblage studies (Emory + IU) showing AI trimmed radiology diagnosis time by 11 seconds per study (IEEE ISBI 2024).",
      "Applied SEM to a 90% response survey, identifying four key adoption drivers for radiology AI.",
      "Modeled intraoperative blood pressure for 170k+ patients with TSFRESH + PELT, improving 30-day mortality prediction by 30% (AMIA 2024).",
      "Drove IRB, manuscript, and abstract development by synthesizing statistical findings into publication-ready material.",
    ],
  },
  {
    role: "Data Analyst",
    organization: "Rammohan's Children's Hospital",
    location: "Hyderabad, India",
    timeframe: "May 2021 - December 2022",
    bullets: [
      "Led care delivery for 50-100 pediatric patients daily, boosting health outcomes by 15% through evidence-based protocols.",
      "Uncovered five KPIs that cut patient wait times by 20% and increased treatment efficacy by 10% via statistical analyses.",
      "Managed data for 10,000+ cases and coordinated multidisciplinary teams of 15 to elevate patient satisfaction by 18%.",
    ],
  },
];

const projects: ProjectEntry[] = [
  {
    name: "ImputeAgent - LLM-based Data Imputation",
    timeframe: "August 2025",
    details: [
      "Built an agentic AI system that handles MCAR, MAR, and MNAR scenarios, lifting downstream AUC by roughly 10%.",
      "Operationalized the workflow across local HPC and AWS SageMaker with audit-ready reporting and critic-driven validation.",
    ],
    github: "https://github.com/amulyaveldandi/imputeagent",
    imageAlt: "Diagram of the ImputeAgent orchestration pipeline",
  },
  {
    name: "Summarizing Radiology Reports with Large Language Models",
    timeframe: "May 2024 - July 2024",
    details: [
      "Integrated 10k+ radiology reports with LLMs to form a RAG pipeline that trims manual summarization time by 60%.",
      "Launched a real-time Gradio interface that improved clinical workflow efficiency by 45%.",
    ],
    github: "https://github.com/amulyaveldandi/radiology-report-rag",
    imageAlt: "User interface mockup for radiology report summarization",
  },
  {
    name: "Comparative NLP for Chest X-ray Report Labeling",
    timeframe: "January 2024 - April 2024",
    details: [
      "Benchmarked CheXbert and CheXGPT on 220k+ reports from MIMIC-CXR and IU-CXR, boosting labeling accuracy by 12% via fine-tuning.",
    ],
    github: "https://github.com/amulyaveldandi/cxr-labeling-nlp",
    imageAlt: "Bar chart comparing model performance for CXR labeling",
  },
  {
    name: "ICU Heart Failure Mortality Risk Modeling",
    timeframe: "August 2023 - December 2023",
    details: [
      "Analyzed 12,500 ICU heart failure cases in R to find statistically significant subgroups (p < 0.05) and visualized insights in Power BI.",
      "Delivered interpretable survival curves and counterfactual dashboards for cardiology rounds.",
    ],
    github: "https://github.com/amulyaveldandi/icu-heart-failure-analysis",
    imageAlt: "Counterfactual survival curves for ICU cohorts",
  },
];

const grants = [
  "American College of Gastroenterology Student Research Award",
  "IU Health Informatics Fellowship Scholarship",
  "Gandhi Medical College Academic Excellence Grant",
];

const certifications = [
  "AWS Certified Machine Learning – Specialty (In progress)",
  "Stanford Center for Health Education – AI in Healthcare",
  "MIT Sloan – AI Strategy for Healthcare",
  "HarvardX – Data Science Professional Certificate",
];

export default function AboutPage() {
  const [educationVisible, setEducationVisible] = useState(() => education.map(() => false));
  const [experienceVisible, setExperienceVisible] = useState(() => experiences.map(() => false));
  const [projectVisible, setProjectVisible] = useState(() => projects.map(() => false));

  const educationRefs = useRef<(HTMLDivElement | null)[]>([]);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const options: IntersectionObserverInit = { threshold: 0.25 };

    const observeList = (
      refs: (HTMLDivElement | null)[],
      setVisible: Dispatch<SetStateAction<boolean[]>>
    ) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisible((prev) => {
              if (prev[index]) return prev;
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            observer.unobserve(entry.target);
          }
        });
      }, options);

      refs.forEach((node) => {
        if (node) observer.observe(node);
      });

      return observer;
    };

    const educationObserver = observeList(educationRefs.current, setEducationVisible);
    const experienceObserver = observeList(experienceRefs.current, setExperienceVisible);
    const projectObserver = observeList(projectRefs.current, setProjectVisible);

    return () => {
      educationObserver.disconnect();
      experienceObserver.disconnect();
      projectObserver.disconnect();
    };
  }, []);

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      <section className="section-card rounded-3xl p-8 sm:p-12 space-y-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="profile-aura profile-aura--lg">
            <span className="profile-initials">AV</span>
          </div>
          <h1 className="text-4xl font-semibold text-slate-100">About Amulya</h1>
          <p className="max-w-3xl text-base text-slate-300/85 leading-relaxed">{summary}</p>
          <ul className="grid gap-3 sm:grid-cols-3">
            {summaryHighlights.map((item) => (
              <li
                key={item}
                className="rounded-2xl border card-border bg-[color:var(--surface-chip)] px-4 py-3 text-sm text-[color:var(--foreground)]/85"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-card rounded-3xl p-6 sm:p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-slate-100">Education Timeline</h2>
        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={item.school}
              ref={(node: HTMLDivElement | null) => {
                educationRefs.current[index] = node;
              }}
              data-index={index}
              className={`timeline-card ${educationVisible[index] ? "timeline-card--visible" : ""}`}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-50">{item.school}</h3>
                  <p className="text-slate-300/80">{item.credential}</p>
                </div>
                <p className="text-sm uppercase tracking-[0.3em] text-accent-light opacity-80">{item.timeframe}</p>
              </div>
              <p className="mt-3 text-sm text-slate-300/80">{item.highlights}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card rounded-3xl p-6 sm:p-8 space-y-8">
        <h2 className="text-3xl font-semibold text-slate-100">Technical Skills</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="skill-card">
              <h3 className="text-lg font-semibold text-slate-100">{group.label}</h3>
              <ul className="mt-3 grid gap-2 text-sm text-slate-300/85">
                {group.items.map((item) => (
                  <li key={item} className="chip-subtle text-[0.65rem] tracking-[0.3em] justify-center">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card rounded-3xl p-6 sm:p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-slate-100">Experience</h2>
        <div className="space-y-6">
          {experiences.map((job, index) => (
            <article
              key={`${job.role}-${job.organization}`}
              ref={(node: HTMLDivElement | null) => {
                experienceRefs.current[index] = node;
              }}
              data-index={index}
              className={`timeline-card ${experienceVisible[index] ? "timeline-card--visible" : ""}`}
            >
              <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-50">{job.role}</h3>
                  <p className="text-slate-300/80">{job.organization}</p>
                </div>
                <div className="text-sm text-slate-300/70 text-left sm:text-right">
                  <p>{job.location}</p>
                  <p className="uppercase tracking-[0.35em]">{job.timeframe}</p>
                </div>
              </header>
              <ul className="mt-4 space-y-2 text-sm text-slate-300/85 list-disc list-inside">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card rounded-3xl p-6 sm:p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-slate-100">Academic Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.name}
              ref={(node: HTMLDivElement | null) => {
                projectRefs.current[index] = node;
              }}
              data-index={index}
              className={`timeline-card ${projectVisible[index] ? "timeline-card--visible" : ""}`}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-slate-50">{project.name}</h3>
                <p className="text-sm uppercase tracking-[0.3em] text-accent-light opacity-80">{project.timeframe}</p>
              </div>
              <div className="grid gap-5 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
                <div className="space-y-3">
                  <ul className="space-y-2 text-sm text-slate-300/85 list-disc list-inside">
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent-light hover:text-accent-light"
                  >
                    View on GitHub <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <div className="project-placeholder rounded-2xl aspect-video flex items-center justify-center text-sm text-slate-300/70">
                  {project.imageAlt}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card rounded-3xl p-6 sm:p-8 space-y-4">
        <h2 className="text-3xl font-semibold text-slate-100">Educational Grants & Scholarships</h2>
        <ul className="space-y-3 text-sm text-slate-300/85 list-disc list-inside">
          {grants.map((grant) => (
            <li key={grant}>{grant}</li>
          ))}
        </ul>
      </section>

      <section className="section-card rounded-3xl p-6 sm:p-8 space-y-4">
        <h2 className="text-3xl font-semibold text-slate-100">Certifications</h2>
        <ul className="space-y-3 text-sm text-slate-300/85 list-disc list-inside">
          {certifications.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
