"use client";
import { Fragment, type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import { projects } from "../data/projects";
import { blogPosts } from "../data/blog";
import type { ProjectDetail } from "../data/projects";

const timeline = [
  {
    title: "Research Engineer",
    subtitle: "Dept. of Nuclear Medicine, Cleveland Clinic",
    period: "Jun 2025 – Present",
    summary:
      "Automating CT analytics with TotalSegmentator pipelines that forecast scanner bed time and unlock daily capacity.",
    icon: "🛰️",
  },
  {
    title: "Data Scientist",
    subtitle: "IU School of Medicine",
    period: "Jun 2024 – May 2025",
    summary:
      "Built SQ-MRI CDSS and brain MRI U-Nets—containerising deep learning workflows so radiology teams ship reproducible AI.",
    icon: "🧠",
  },
  {
    title: "Data Analyst",
    subtitle: "PLHI · IU Indianapolis",
    period: "Jan 2023 – May 2024",
    summary:
      "Led Human-AI Assemblage study across Emory & IU, translating mixed-method insights into faster, safer radiology reads.",
    icon: "📈",
  },
  {
    title: "MS Health Informatics",
    subtitle: "Indiana University Indianapolis",
    period: "2023 – 2025",
    summary: "Graduate focus on health informatics, ML engineering, and project leadership (GPA 3.94/4.00).",
    icon: "🎓",
  },
  {
    title: "MBBS",
    subtitle: "Gandhi Medical College, Hyderabad",
    period: "2015 – 2021",
    summary: "Clinical foundation in patient-first care, allied leadership, and evidence-based medicine (Student Govt. President).",
    icon: "🩺",
  },
];

const journeyHighlights = [
  {
    value: "1.2k+ scans",
    label: "Automated CT attenuation studies",
  },
  {
    value: "12 containerised",
    label: "Production-ready AI pipelines",
  },
  {
    value: "30+ mentees",
    label: "Graduate learners coached in Python · R · SQL",
  },
];

const scholarships = [
  {
    title: "Ruth Walker Health Informatics Scholarship",
    period: "June 2024",
    detail: "Awarded for translational informatics research bridging imaging AI with clinical adoption.",
  },
  {
    title: "BioHealth Informatics Research Travel Grant",
    period: "April 2024",
    detail: "Funded national presentation of Human-AI Assemblage findings across multi-site imaging labs.",
  },
  {
    title: "IUI Luddy MS Student Scholarship",
    period: "Jan 2023 – Dec 2024",
    detail: "Merit scholarship supporting four semesters of Health Informatics graduate study.",
  },
];

const publications = [
  {
    title: "Automated SQ-MRI for Chronic Pancreatitis",
    venue: "APA",
    year: "2025",
    link: "https://example.com/apa-2025-sq-mri",
    accent: "linear-gradient(135deg, #fb923c, #f97316)",
  },
  {
    title: "Perioperative Blood Pressure Time Series for 30-Day Mortality",
    venue: "AMIA",
    year: "2024",
    link: "https://example.com/amia-2024-bp",
    accent: "linear-gradient(135deg, #4ade80, #22c55e)",
  },
  {
    title: "Radiologist–AI Collaboration: Efficiency, Accuracy, Impact",
    venue: "IEEE",
    year: "2024",
    link: "https://example.com/ieee-2024-ai-collab",
    accent: "linear-gradient(135deg, #60a5fa, #3b82f6)",
  },
  {
    title: "Quantifying Side-Effect Severity with D-SESS",
    venue: "ACM",
    year: "2024",
    link: "https://example.com/acm-2024-dsess",
    accent: "linear-gradient(135deg, #c084fc, #a855f7)",
  },
];

const skills = [
  {
    title: "Programming",
    icon: "💻",
    items: ["Python", "R", "SQL", "MATLAB", "Git"],
  },
  {
    title: "AI / ML",
    icon: "🤖",
    items: ["PyTorch", "TensorFlow", "HuggingFace", "CrewAI", "Agentic AI"],
  },
  {
    title: "Clinical Systems",
    icon: "🏥",
    items: ["Epic", "REDCap", "HL7/FHIR", "HIPAA"],
  },
  {
    title: "Analytics & Viz",
    icon: "📊",
    items: ["Tableau", "Power BI", "3D Slicer", "STATA"],
  },
];

const uniqueProjectTags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort();

const comparisonHeadings: Array<{
  label: string;
  extractor: (project: ProjectDetail) => ReactNode;
}> = [
  {
    label: "Summary",
    extractor: (project) => project.summary,
  },
  {
    label: "Tags",
    extractor: (project) => (
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="chip-subtle text-[0.65rem] tracking-[0.3em]"
          >
            {tag}
          </span>
        ))}
      </div>
    ),
  },
  {
    label: "Approach",
    extractor: (project) => (
      <ul className="space-y-2 text-sm leading-relaxed text-slate-300/80">
        {project.approach.slice(0, 3).map((step) => (
          <li key={step} className="list-disc list-inside">
            {step}
          </li>
        ))}
      </ul>
    ),
  },
  {
    label: "Key Metrics",
    extractor: (project) => (
      <div className="space-y-2">
        {project.results.slice(0, 3).map((result) => (
          <div key={result.metric + result.value} className="rounded-2xl card-border bg-[color:var(--surface-chip)] p-3">
            <p className="text-[0.55rem] uppercase tracking-[0.3em] text-accent-light opacity-80">{result.metric}</p>
            <p className="text-lg font-semibold text-slate-100">{result.value}</p>
            {result.detail ? (
              <p className="text-xs text-slate-300/80">{result.detail}</p>
            ) : null}
          </div>
        ))}
      </div>
    ),
  },
];

export default function HomeContent() {
  const tagline = "Physician-Turned Data Scientist | AI for Healthcare | Bridging Medicine and Data Science";
  const [displayedTagline, setDisplayedTagline] = useState("");
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activeProject, setActiveProject] = useState<ProjectDetail | null>(null);
  const [comparison, setComparison] = useState<string[]>([]);
  const [visibleStages, setVisibleStages] = useState<boolean[]>(() => timeline.map(() => false));

  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      const nextLength = Math.min(tagline.length, index + 1);
      index += 1;
      setDisplayedTagline(tagline.slice(0, nextLength));
      if (index > tagline.length) {
        window.clearInterval(timer);
      }
    }, 45);
    return () => window.clearInterval(timer);
  }, [tagline]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleStages((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const refs = [...timelineRefs.current];

    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!activeProject) {
      document.body.style.removeProperty("overflow");
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        search.trim().length === 0 ||
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.summary.toLowerCase().includes(search.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => project.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase()));
      return matchesSearch && matchesTags;
    });
  }, [search, selectedTags]);

  const comparisonProjects = useMemo(
    () => comparison.map((slug) => projects.find((proj) => proj.slug === slug)).filter(Boolean) as ProjectDetail[],
    [comparison]
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const toggleComparison = (slug: string) => {
    setComparison((prev) => {
      if (prev.includes(slug)) {
        return prev.filter((item) => item !== slug);
      }
      if (prev.length >= 2) {
        return [prev[1], slug];
      }
      return [...prev, slug];
    });
  };

  return (
    <div className="space-y-32 sm:space-y-36">
      {/* Hero */}
      <section
        id="hero"
        className="relative z-10 isolate flex flex-col items-center justify-center min-h-[70vh] overflow-hidden text-center gap-8"
      >
        <div className="hero-backdrop absolute inset-0 -z-10" aria-hidden="true">
          <div className="hero-backdrop__gradient" />
          <div className="hero-backdrop__flare hero-backdrop__flare--top" />
          <div className="hero-backdrop__flare hero-backdrop__flare--bottom" />
          <div className="hero-backdrop__orb hero-backdrop__orb--left" />
          <div className="hero-backdrop__orb hero-backdrop__orb--right" />
          <div className="hero-backdrop__ring hero-backdrop__ring--primary" />
          <div className="hero-backdrop__ring hero-backdrop__ring--secondary" />
          <div className="hero-backdrop__grid" />
        </div>
        <p className="text-xs uppercase tracking-[0.5em] text-slate-500">Portfolio</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Amulya Veldandi
        </h1>
        <p className="max-w-3xl text-base sm:text-lg lg:text-xl text-[color:var(--foreground-muted)]">
          {displayedTagline}
          <span className="inline-block animate-caret">▌</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#about" className="btn-primary">
            Explore Focus
          </a>
          <a href="#contact" className="btn-outline">
            Let&apos;s Collaborate
          </a>
        </div>
      </section>

      {/* About + Skills */}
      <section id="about" className="space-y-12">
        <div className="section-card rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <div className="profile-aura mx-auto">
            <span className="profile-initials">AV</span>
          </div>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">About Me</h2>
          <p className="text-[color:var(--foreground-muted)] leading-relaxed max-w-3xl mx-auto">
            Physician-turned healthcare data scientist engineering CT and MRI pipelines that boost throughput, sharpen
            diagnosis, and respect clinical flow. I pair bedside intuition with reproducible ML engineering—shipping
            Dockerised workflows, QA guardrails, and training programmes that bring AI safely into practice.
          </p>
          <ul className="mx-auto grid max-w-3xl gap-3 text-[color:var(--foreground-muted)] sm:grid-cols-3">
            <li className="chip-subtle text-[0.65rem] tracking-[0.3em] justify-center">
              CT throughput forecasting · Cleveland Clinic
            </li>
            <li className="chip-subtle text-[0.65rem] tracking-[0.3em] justify-center">
              SQ-MRI biomarker CDSS · IU School of Medicine
            </li>
            <li className="chip-subtle text-[0.65rem] tracking-[0.3em] justify-center">
              Human-AI Assemblage field research · Emory & IU
            </li>
          </ul>
        </div>

        <div id="skills" className="section-card rounded-3xl p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="group border card-border bg-[color:var(--surface-chip)] p-4 sm:p-5 transition-transform duration-300 ease-out hover:-translate-y-1 hover:border-accent"
                style={{ animation: `fadeInUp 0.4s ease ${index * 0.05}s both` }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg sm:text-xl">{skill.icon}</span>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 dark:text-slate-100">
                    {skill.title}
                  </h3>
                </div>
                <ul className="mt-3 space-y-1 text-xs text-[color:var(--foreground-muted)]">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="chip-subtle text-[0.65rem] tracking-[0.25em] justify-center group-hover:bg-[color:var(--surface-chip-strong)] group-hover:border-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="section-card rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.4em] text-accent-light opacity-75">Clinical to Data Journey</p>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Impact Highlights</h3>
          </div>
          <p className="text-sm leading-relaxed text-[color:var(--foreground-muted)]">
            From automating CT attenuation studies to mentoring graduate cohorts, I focus on the last-mile work that
            makes healthcare AI usable: auditable pipelines, measurable ROI, and teams who trust the tooling.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {journeyHighlights.map((item) => (
              <div key={item.label} className="journey-chip">
                <span className="text-sm font-semibold text-slate-100">{item.value}</span>
                <span className="text-xs uppercase tracking-[0.3em] text-slate-200/70">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative section-card rounded-3xl p-8 sm:p-12">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent-light opacity-75">Experience</p>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Where AI Meets Clinical Ops</h3>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent-light opacity-70">
              Roles, research, and rigorous execution
            </p>
          </div>
          <div
            className="absolute inset-y-12 left-7 sm:left-10 w-px"
            style={{
              background: 'linear-gradient(to bottom, rgba(158, 164, 176, 0.4), rgba(158, 164, 176, 0.15), transparent)',
            }}
          />
          <div className="flex flex-col gap-10 sm:gap-12">
            {timeline.map((stage, index) => (
              <div
                key={stage.title}
                ref={(el) => {
                  timelineRefs.current[index] = el;
                }}
                data-index={index}
                className={`relative pl-14 sm:pl-20 transition-all duration-500 ease-out ${
                  visibleStages[index] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
                }`}
              >
                <div className="absolute left-4 sm:left-7 top-2 flex h-12 w-12 items-center justify-center rounded-full border border-accent bg-[color:var(--surface-chip-strong)] text-lg">
                  {stage.icon}
                </div>
                <p className="text-xs uppercase tracking-[0.35em] text-accent-light opacity-80">{stage.period}</p>
                <h3 className="mt-1 text-2xl font-semibold text-slate-900 dark:text-slate-100">{stage.title}</h3>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{stage.subtitle}</p>
                <p className="mt-3 text-sm text-[color:var(--foreground-muted)]/85">{stage.summary}</p>
                {index !== timeline.length - 1 && (
                  <div className="absolute left-9 sm:left-[54px] top-[72px] bottom-[-40px] border-l border-dashed border-accent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="scholarships" className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">Scholarships & Awards</h2>
          <p className="text-xs uppercase tracking-[0.4em] text-accent-light opacity-75">Invested in translational impact</p>
        </div>
        <div className="section-card rounded-3xl p-8 space-y-5">
          {scholarships.map((item) => (
            <div key={item.title} className="border-l-2 border-[color:var(--accent-border)] pl-4">
              <p className="text-xs uppercase tracking-[0.35em] text-accent-light opacity-80">{item.period}</p>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
              <p className="text-sm text-[color:var(--foreground-muted)] leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="space-y-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">Projects</h2>
              <p className="label-accent opacity-75">Reproducible AI</p>
            </div>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full sm:w-72 rounded-full border border-accent bg-[color:var(--surface-chip)] px-4 py-2 text-sm text-[color:var(--foreground)] placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-soft)]"
              placeholder="Search projects or tags"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {uniqueProjectTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={`chip-subtle text-[0.65rem] tracking-[0.3em] transition-all duration-200 ${
                  selectedTags.includes(tag)
                    ? 'bg-[color:var(--surface-chip-strong)] border-accent text-accent-light'
                    : 'opacity-75 hover:opacity-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {comparisonProjects.length === 2 ? (
          <section className="comparison-panel">
            <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-slate-100">Project Comparison</h3>
                <p className="text-sm text-slate-300/80">
                  Snapshot view of focus areas, tooling, and headline metrics for the selected projects.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setComparison([])}
                className="chip-subtle text-xs tracking-[0.3em] opacity-80 hover:opacity-100"
              >
                Clear Comparison
              </button>
            </header>
            <div className="comparison-grid">
              <div className="comparison-label" aria-hidden="true" />
              {comparisonProjects.map((project) => (
                <div key={project.slug} className="comparison-heading">
                  <h4 className="text-lg font-semibold text-[color:var(--foreground)]">
                    {project.title}
                  </h4>
                  {project.badges ? (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.badges.map((badge) => (
                        <span key={badge.label} className="chip-subtle text-[0.6rem]">
                          {badge.label}: {badge.value}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}

              {comparisonHeadings.map(({ label, extractor }) => (
                <Fragment key={label}>
                  <p className="comparison-label">{label}</p>
                  {comparisonProjects.map((project) => (
                    <div key={project.slug + label} className="comparison-cell">
                      {extractor(project)}
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </section>
        ) : null}

        <div className="project-scroll" role="list">
          {filteredProjects.map((project) => {
            const isComparing = comparison.includes(project.slug);
            return (
              <div key={project.slug} className="group project-card" role="listitem">
                <div className="flip-wrapper">
                  <div className="flip-card">
                    <div className="flip-face project-card-front">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
                        <button
                          type="button"
                          onClick={() => toggleComparison(project.slug)}
                          className={`comparison-toggle ${isComparing ? "comparison-toggle--active" : ""}`}
                          aria-pressed={isComparing}
                        >
                          {isComparing ? "Selected" : "Compare"}
                        </button>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300/80">{project.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="chip-subtle text-[0.6rem] tracking-[0.3em]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {project.badges ? (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.badges.map((badge) => (
                            <span
                              key={badge.label}
                              className="badge-chip"
                            >
                              {badge.label}: {badge.value}
                            </span>
                          ))}
                        </div>
                      ) : null}
                      <button
                        type="button"
                        onClick={() => setActiveProject(project)}
                        className="project-action"
                      >
                        Open Case Study
                      </button>
                    </div>
                    <div className="flip-face project-card-back">
                      <h4 className="text-sm uppercase tracking-[0.4em] text-accent-light opacity-80">Stack & Focus</h4>
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-200/80">
                        {project.approach.slice(0, 4).map((item) => (
                          <li key={item} className="list-disc list-inside">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-5 text-xs uppercase tracking-[0.3em] text-accent-light opacity-80">
                        Hover to return · Click to deep dive
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">Publications</h2>
          <p className="text-xs uppercase tracking-[0.4em] text-accent-light opacity-75">Peer-reviewed Impact</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {publications.map((paper) => (
            <a
              key={paper.title}
              href={paper.link}
              target="_blank"
              rel="noreferrer"
              className="publication-card"
            >
              <span className="text-[0.55rem] uppercase tracking-[0.4em] text-slate-100/80">{paper.venue} · {paper.year}</span>
              <span className="text-lg font-semibold text-slate-50">{paper.title}</span>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-200/70">View abstract →</span>
            </a>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">Writing</h2>
          <p className="text-xs uppercase tracking-[0.4em] text-accent-light opacity-75">Brains & Bytes</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="blog-card"
              style={{ background: post.cover }}
            >
              <span className="text-[0.6rem] uppercase tracking-[0.35em] text-slate-200/80">{post.tags.join(" · ")}</span>
              <h3 className="text-2xl font-semibold text-slate-50">{post.title}</h3>
              <p className="text-sm leading-relaxed text-slate-100/75">{post.excerpt}</p>
              <span className="text-xs uppercase tracking-[0.35em] text-slate-100/70">Read teaser →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">Journey</h2>
          <p className="text-xs uppercase tracking-[0.4em] text-accent-light opacity-75">Clinical empathy · Data rigor</p>
        </div>
        <div className="section-card rounded-3xl p-8 space-y-5">
          <p className="text-base text-[color:var(--foreground-muted)] leading-relaxed">
            I prototype AI that belongs in hospitals: explainable, bias-aware, and ready for deployment. Whether
            orchestrating Docker pipelines, architecting agentic workflows, or building governance frameworks, I keep
            clinicians in the loop and patients at the center.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="journey-chip">
              <span className="text-sm font-semibold text-slate-100">+90% Saved</span>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-200/70">Manual Imaging Prep</span>
            </div>
            <div className="journey-chip">
              <span className="text-sm font-semibold text-slate-100">4 Research Labs</span>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-200/70">Trusted Deployments</span>
            </div>
            <div className="journey-chip">
              <span className="text-sm font-semibold text-slate-100">12+ Pipelines</span>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-200/70">Containerised + Audited</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">Contact</h2>
          <p className="text-xs uppercase tracking-[0.4em] text-accent-light opacity-75">Let&apos;s build clinical AI</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <ContactForm />
          <div className="section-card rounded-3xl p-6 space-y-4">
            <p className="text-sm leading-relaxed text-[color:var(--foreground-muted)]">
              I collaborate with clinical, data science, and product teams to move AI from prototype to practice.
              Reach out for research partnerships, consulting, or guest lectures.
            </p>
            <div className="space-y-3 text-sm text-slate-300/85">
              <p><strong>Email:</strong> veldandiamulya@gmail.com</p>
              <p><strong>Location:</strong> Cleveland · Indianapolis · Remote</p>
              <p><strong>Focus:</strong> Imaging AI, Agentic Workflows, Clinical Decision Support</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {activeProject ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setActiveProject(null)}>
          <div
            className="modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${activeProject.slug}-title`}
            onClick={(event) => event.stopPropagation()}
          >
            <header className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-accent-light opacity-80">Project</p>
                <h3 id={`${activeProject.slug}-title`} className="text-3xl font-semibold text-slate-50">
                  {activeProject.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300/80">{activeProject.summary}</p>
              </div>
              <button
                type="button"
                className="close-button"
                onClick={() => setActiveProject(null)}
                aria-label="Close project"
              >
                ✕
              </button>
            </header>

            <div className="modal-content">
              <section>
                <h4 className="modal-heading">Problem</h4>
                <p className="modal-copy">{activeProject.problem}</p>
              </section>
              <section>
                <h4 className="modal-heading">Approach</h4>
                <ul className="modal-list">
                  {activeProject.approach.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h4 className="modal-heading">Results</h4>
                <div className="modal-metrics">
                  {activeProject.results.map((result) => (
                    <div key={result.metric + result.value}>
                      <p className="metric-label">{result.metric}</p>
                      <p className="metric-value">{result.value}</p>
                      {result.detail ? <p className="metric-detail">{result.detail}</p> : null}
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <h4 className="modal-heading">Visual Notes</h4>
                <div className="modal-visuals">
                  {activeProject.visuals.map((visual) => (
                    <div key={visual.title} className="visual-card">
                      <span className="text-sm font-semibold text-slate-100">{visual.title}</span>
                      <span className="text-xs text-slate-300/80">{visual.description}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <footer className="modal-footer">
              <button type="button" className="btn-outline" onClick={() => setActiveProject(null)}>
                Close
              </button>
              <a
                href={activeProject.github}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                View GitHub Repository
              </a>
            </footer>
          </div>
        </div>
      ) : null}
    </div>
  );
}
