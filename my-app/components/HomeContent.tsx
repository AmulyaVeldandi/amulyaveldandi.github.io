"use client";
import { Fragment, type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import ExperienceCard from "./ExperienceCard";
import ProjectsGrid from "./ProjectsGrid";
import Timeline from "./Timeline";
import { projects } from "../data/projects";
import { blogPosts } from "../data/blog";
import type { ProjectDetail } from "../data/projects";
import type { ExperienceItem } from "../data/experience";
import { experiences } from "../data/experience";

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
    detail:
      "Selected for a translational informatics portfolio that delivered measurable throughput gains across live radiology workflows. Funding underwrote expansion of containerised AI validation so clinical partners could stress-test imaging models before go-live.",
  },
  {
    title: "BioHealth Informatics Research Travel Grant",
    period: "April 2024",
    detail:
      "Funded a national presentation circuit that distilled Human-AI Assemblage findings into practitioner playbooks for five imaging labs. Enabled hands-on workshops that translated research into measurable adoption metrics.",
  },
  {
    title: "IUI Luddy MS Student Scholarship",
    period: "Jan 2023 – Dec 2024",
    detail:
      "Merit scholarship recognising research leadership, mentorship, and GPA 3.94/4.00 throughout the Health Informatics graduate program. Supported multi-semester mentorship cohorts that lifted analytics competency across the Luddy graduate community.",
  },
];

const educationMilestones = [
  {
    title: "MS Health Informatics",
    institution: "Indiana University Indianapolis · GPA 3.94/4.00",
    period: "2023 – 2025",
    blurb:
      "Designed reproducible AI delivery pipelines—pairing PyTorch inference services, Epic integrations, and regulatory guardrails so imaging AI reaches the reading room.",
    icon: "🎓",
    accent: "linear-gradient(135deg, rgba(144, 164, 255, 0.2), rgba(208, 220, 255, 0.15))",
  },
  {
    title: "Graduate Research Assistant, Human-AI Assemblage",
    institution: "Precision Health Initiative · IU Indianapolis",
    period: "2023 – 2024",
    blurb:
      "Led mixed-method fieldwork across Emory and IU radiology suites, translating interviews and telemetry into decision support that shaved 17% off escalation SLAs.",
    icon: "🧠",
    accent: "linear-gradient(135deg, rgba(168, 184, 255, 0.22), rgba(204, 180, 255, 0.2))",
  },
  {
    title: "MBBS",
    institution: "Gandhi Medical College, Hyderabad",
    period: "2015 – 2021",
    blurb:
      "Clinical rotations in emergency, radiology, and neurology built the patient-first lens that now grounds every model, metric, and deployment decision.",
    icon: "⚕️",
    accent: "linear-gradient(135deg, rgba(180, 220, 255, 0.2), rgba(162, 236, 210, 0.18))",
  },
];

const focusAreas = [
  {
    icon: "🛰️",
    title: "Imaging Ops",
    body: "Forecasting scanner load, automating attenuation, and hardening segmentation pipelines so technologists gain minutes per patient.",
  },
  {
    icon: "🧠",
    title: "Agentic AI",
    body: "Blending statistical estimators with reasoning loops that heal missing data, document bias, and ship audit logs by default.",
  },
  {
    icon: "🧭",
    title: "Adoption & Governance",
    body: "Creating deployment playbooks, education tracks, and governance dashboards that keep models trustworthy after handoff.",
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
  const [comparison, setComparison] = useState<string[]>([]);
  const [activeExperience, setActiveExperience] = useState<ExperienceItem | null>(null);
  const [heroParticles, setHeroParticles] = useState<
    Array<{ id: string; x: number; y: number; delay: number; scale: number; duration: number }>
  >([]);
  const experienceDialogId = activeExperience
    ? `${activeExperience.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}-experience`
    : null;
  const experienceDialogDescriptionId = experienceDialogId ? `${experienceDialogId}-description` : null;
  const heroParticleTimeout = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

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
    if (!activeExperience) {
      document.body.style.removeProperty("overflow");
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveExperience(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeExperience]);

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

  useEffect(() => {
    return () => {
      if (heroParticleTimeout.current) {
        window.clearTimeout(heroParticleTimeout.current);
      }
      if (audioCtxRef.current) {
        void audioCtxRef.current.close();
      }
    };
  }, []);

  const playHeroHoverTone = () => {
    if (typeof window === "undefined") return;

    const AudioContextClass =
      window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

    if (!AudioContextClass) return;

    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContextClass();
    }

    const ctx = audioCtxRef.current;
    if (!ctx) return;

    if (ctx.state === "suspended") {
      void ctx.resume().catch(() => undefined);
    }

    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = "sine";
    const baseFrequency = 420 + Math.random() * 60;
    oscillator.frequency.setValueAtTime(baseFrequency, ctx.currentTime);
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.48);
    oscillator.connect(gain).connect(ctx.destination);
    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.5);
    oscillator.onended = () => {
      oscillator.disconnect();
      gain.disconnect();
    };
  };

  const spawnHeroParticles = () => {
    const count = 12;
    const particles = Array.from({ length: count }).map((_, index) => ({
      id: `${Date.now()}-${index}`,
      x: 25 + Math.random() * 50,
      y: 10 + Math.random() * 18,
      delay: Math.random() * 0.2,
      scale: 0.8 + Math.random() * 0.6,
      duration: 0.85 + Math.random() * 0.5,
    }));
    setHeroParticles(particles);
    if (heroParticleTimeout.current) {
      window.clearTimeout(heroParticleTimeout.current);
    }
    heroParticleTimeout.current = window.setTimeout(() => {
      setHeroParticles([]);
    }, 1200);
  };

  const handleHeroHover = () => {
    playHeroHoverTone();
    spawnHeroParticles();
  };

  const handleHeroLeave = () => {
    if (heroParticleTimeout.current) {
      window.clearTimeout(heroParticleTimeout.current);
      heroParticleTimeout.current = null;
    }
    setHeroParticles([]);
  };

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
  const revealKey = useMemo(() => filteredProjects.map((project) => project.slug).join("|"), [filteredProjects]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!elements.length) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -12% 0px" }
    );

    elements
      .filter((element) => !element.classList.contains("is-visible"))
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [revealKey]);

  return (
    <div className="space-y-32 sm:space-y-36">
      {/* Hero */}
      <section
        id="hero"
        className="relative z-10 isolate flex min-h-[70vh] flex-col justify-center overflow-hidden"
        data-reveal
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
        <div className="hero-particles" aria-hidden="true">
          {heroParticles.map((particle) => (
            <span
              key={particle.id}
              className="hero-particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
                transform: `scale(${particle.scale})`,
              }}
            />
          ))}
        </div>
        <div className="hero-inner">
          <div className="hero-copy text-center lg:text-left">
            <p className="hero-kicker text-xs uppercase tracking-[0.5em] text-slate-500">Portfolio</p>
            <h1
              className="hero-title text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 dark:text-slate-100"
              onMouseEnter={handleHeroHover}
              onMouseLeave={handleHeroLeave}
              onFocus={handleHeroHover}
              onBlur={handleHeroLeave}
              tabIndex={0}
            >
              Amulya Veldandi
            </h1>
            <p className="hero-tagline max-w-3xl text-base sm:text-lg lg:text-xl text-[color:var(--foreground-muted)]">
              {displayedTagline}
              <span className="inline-block animate-caret">▌</span>
            </p>
            <div className="hero-actions flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start">
              <a href="#about" className="btn-primary">
                Explore Focus
              </a>
              <a href="#contact" className="btn-outline">
                Let&apos;s Collaborate
              </a>
              <a
                href="/AmulyaVeldandi_CV.pdf"
                className="btn-outline btn-outline--accent"
                download
              >
                Download PDF CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About + Skills */}
      <section id="about" className="space-y-12">
        <div className="section-card rounded-3xl p-8 sm:p-12 text-center space-y-6" data-reveal>
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

        <div id="focus" className="section-card rounded-3xl p-6 sm:p-8" data-reveal>
          <div className="flex flex-col gap-2 sm:gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent-light opacity-75">Focus Areas</p>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">How I create impact</h3>
            </div>
            <p className="text-sm text-[color:var(--foreground-muted)]/80">
              Strategy, delivery, and adoption wrapped into outcomes clinics can feel.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((focus) => (
              <article key={focus.title} className="focus-card" data-reveal>
                <span className="focus-card__icon" aria-hidden="true">{focus.icon}</span>
                <h3>{focus.title}</h3>
                <p>{focus.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="section-card rounded-3xl p-8 sm:p-10 space-y-6" data-reveal>
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
              <div key={item.label} className="journey-chip" data-reveal>
                <span className="text-sm font-semibold text-slate-100">{item.value}</span>
                <span className="text-xs uppercase tracking-[0.3em] text-slate-200/70">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="section-card rounded-3xl p-8 sm:p-12 space-y-6" data-reveal>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent-light opacity-75">Milestones</p>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Clinician to AI Builder</h3>
            </div>
            <p className="text-sm text-[color:var(--foreground-muted)]/80">
              Key experiences that shaped how I ship equitable, measurable AI.
            </p>
          </div>
          <Timeline items={educationMilestones} />
        </div>

      </section>

      <section id="experience" className="space-y-8">
        <div className="relative section-card overflow-hidden rounded-3xl p-8 sm:p-12 space-y-8" data-reveal>
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-80"
            style={{
              background:
                "radial-gradient(120% 140% at 0% 0%, rgba(98, 108, 255, 0.14), transparent 70%), radial-gradient(120% 140% at 100% 100%, rgba(255, 150, 200, 0.12), transparent 70%)",
            }}
          />
          <div className="relative flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent-light opacity-75">Experience</p>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Where AI Meets Clinical Ops</h3>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent-light/80">
              Visual storytelling for measurable outcomes
            </p>
          </div>
          <p className="relative text-sm leading-relaxed text-[color:var(--foreground-muted)]">
            Each card blends quantified results with imagery tuned to the workflow—MRI overlays, code-to-image fusion,
            and lab environments—so clinical and engineering partners grasp scope, rigor, and proof at a glance.
          </p>
          <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.title}
                {...experience}
                onOpenMedia={() => setActiveExperience(experience)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="scholarships" className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">Scholarships & Awards</h2>
          <p className="text-xs uppercase tracking-[0.4em] text-accent-light opacity-75">Invested in translational impact</p>
        </div>
        <div className="section-card rounded-3xl p-8 space-y-5" data-reveal>
          {scholarships.map((item) => (
            <div key={item.title} className="border-l-2 border-[color:var(--accent-border)] pl-4" data-reveal>
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
          <section className="comparison-panel" data-reveal>
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

        <ProjectsGrid
          projects={filteredProjects}
          comparison={comparison}
          onToggleComparison={toggleComparison}
        />
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
              data-reveal
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
              data-reveal
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
        <div className="section-card rounded-3xl p-8 space-y-5" data-reveal>
          <p className="text-base text-[color:var(--foreground-muted)] leading-relaxed">
            I prototype AI that belongs in hospitals: explainable, bias-aware, and ready for deployment. Whether
            orchestrating Docker pipelines, architecting agentic workflows, or building governance frameworks, I keep
            clinicians in the loop and patients at the center.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="journey-chip" data-reveal>
              <span className="text-sm font-semibold text-slate-100">+90% Saved</span>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-200/70">Manual Imaging Prep</span>
            </div>
            <div className="journey-chip" data-reveal>
              <span className="text-sm font-semibold text-slate-100">4 Research Labs</span>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-200/70">Trusted Deployments</span>
            </div>
            <div className="journey-chip" data-reveal>
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
          <div className="section-card rounded-3xl p-6 space-y-4" data-reveal>
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

      {activeExperience ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setActiveExperience(null)}>
          <div
            className="experience-lightbox"
            role="dialog"
            aria-modal="true"
            aria-labelledby={experienceDialogId ?? undefined}
            aria-describedby={experienceDialogDescriptionId ?? undefined}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="experience-lightbox__close"
              onClick={() => setActiveExperience(null)}
              aria-label="Close experience image"
            >
              ✕
            </button>
            <div className="experience-lightbox__media">
              <Image
                src={activeExperience.imageURL}
                alt={activeExperience.imageAlt}
                fill
                sizes="(max-width: 768px) 90vw, 720px"
                className="experience-lightbox__image"
                priority
              />
              <div className="experience-lightbox__glow" />
            </div>
            <div className="experience-lightbox__body">
              <p className="experience-lightbox__tag">{activeExperience.imageTheme}</p>
              <h3
                id={experienceDialogId ?? undefined}
                className="experience-lightbox__title"
              >
                {activeExperience.title}
              </h3>
              <p className="experience-lightbox__subtitle">{activeExperience.institution}</p>
              <p className="experience-lightbox__timeline">{activeExperience.timeline}</p>
              <ul
                id={experienceDialogDescriptionId ?? undefined}
                className="experience-lightbox__list"
              >
                {activeExperience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
