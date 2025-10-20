"use client";

import Image from "next/image";
import Link from "next/link";
import Timeline, { type TimelineItem } from "../../components/Timeline";

const bioSummary = {
  title: "Clinician-turned data scientist building trustworthy imaging AI.",
  body:
    "I translate messy clinical workflows into reproducible neural products. From CT throughput forecasting at Cleveland Clinic to agentic pipelines that rescue missing data, my work stays grounded in bedside empathy, measurable ROI, and teams who can operate the models long after I leave.",
  values: [
    { label: "Human-first AI", detail: "Designing decision support that keeps clinicians in the loop, not out of it." },
    { label: "Evidence + Execution", detail: "Pairing statistical rigor with dockerised delivery and governance playbooks." },
    { label: "Equity by Design", detail: "Stress-testing bias, drift, and audit trails so deployments stay accountable." },
  ],
  impact: [
    { metric: "1.2k+ scans", caption: "Automated CT + MRI studies with reproducible QA" },
    { metric: "12 pipelines", caption: "Containerised and production-trusted AI workflows" },
    { metric: "30+ mentees", caption: "Clinician + data scientists coached in Python, R, SQL" },
  ],
};

const milestones: TimelineItem[] = [
  {
    title: "Research Engineer, Cleveland Clinic",
    institution: "Nuclear Medicine · Imaging Ops",
    period: "2025 – Present",
    blurb: "Scaling CT attenuation automation and throughput forecasting that give technologists minutes back every scan.",
    icon: "🛰️",
    accent: "linear-gradient(135deg, rgba(124,168,255,0.22), rgba(186,230,255,0.14))",
  },
  {
    title: "Data Scientist, IU School of Medicine",
    institution: "Pancreas & Neuroimaging Programs",
    period: "2024 – 2025",
    blurb: "Standardised SQ-MRI scoring and brain U-Net labs so AI staging is consistent across scanners and cohorts.",
    icon: "🧠",
    accent: "linear-gradient(135deg, rgba(194,180,255,0.22), rgba(255,210,236,0.16))",
  },
  {
    title: "Graduate Research · MS Health Informatics",
    institution: "Indiana University · GPA 3.94",
    period: "2023 – 2025",
    blurb: "Combined agentic AI, biostatistics, and ML Ops coursework with multi-site research on Human-AI Assemblage.",
    icon: "🎓",
    accent: "linear-gradient(135deg, rgba(174,196,255,0.22), rgba(180,236,216,0.16))",
  },
  {
    title: "MBBS & Clinical Leadership",
    institution: "Gandhi Medical College · Student Gov. President",
    period: "2015 – 2021",
    blurb: "Learned to triage with empathy, steward multidisciplinary teams, and fight for equitable data use at the bedside.",
    icon: "⚕️",
    accent: "linear-gradient(135deg, rgba(194,210,255,0.18), rgba(236,214,188,0.14))",
  },
];

const testimonials = [
  {
    quote:
      "Amulya sees around corners—she prototypes fast, validates faster, and never loses sight of the clinicians using the tool.",
    name: "Dr. Jennifer Lee",
    role: "Radiologist & Imaging AI Program Director, IU Health",
  },
  {
    quote:
      "Her agentic workflows turned months of registry clean-up into days. The kicker: every step was reviewable and regulator-ready.",
    name: "Marcus King",
    role: "Director of Clinical Analytics, Cleveland Clinic",
  },
  {
    quote:
      "Students rave about Amulya’s labs because they leave with deployable code, not just theory. She is a force multiplier.",
    name: "Prof. Elena Petrov",
    role: "Graduate Chair, IU Luddy School",
  },
];

const awards = [
  {
    title: "Ruth Walker Health Informatics Scholarship",
    issuer: "Indiana University · 2024",
    blurb: "Recognised for translational imaging informatics research with measurable operational impact.",
  },
  {
    title: "BioHealth Informatics Research Travel Grant",
    issuer: "Indiana University · 2024",
    blurb: "Funded national presentations that helped radiology labs operationalise Human-AI Assemblage findings.",
  },
  {
    title: "IUI Luddy MS Student Scholarship",
    issuer: "Indiana University · 2023–2024",
    blurb: "Merit award supporting four semesters of graduate study while mentoring cross-disciplinary cohorts.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page space-y-20 pb-24">
      <section className="about-hero section-card rounded-3xl p-8 sm:p-12" data-reveal>
        <div className="about-hero__media">
          <Image
            src="/images/about/profile-hero.svg"
            alt="Professional portrait illustration of Amulya Veldandi"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 340px"
            className="about-hero__image"
          />
        </div>
        <div className="about-hero__copy">
          <p className="about-hero__eyebrow">About · Story</p>
          <h1 className="about-hero__title">{bioSummary.title}</h1>
          <p className="about-hero__body">{bioSummary.body}</p>
          <div className="about-impact">
            {bioSummary.impact.map((item) => (
              <div key={item.metric} className="about-impact__item">
                <span className="about-impact__metric">{item.metric}</span>
                <span className="about-impact__caption">{item.caption}</span>
              </div>
            ))}
          </div>
          <div className="about-cta">
            <Link href="/#projects" className="btn-primary">
              Explore my work
            </Link>
            <Link href="/AmulyaVeldandi_CV.pdf" className="btn-outline btn-outline--accent" download>
              Download CV
            </Link>
          </div>
        </div>
      </section>

      <section className="about-values section-card rounded-3xl p-8 sm:p-12" data-reveal>
        <div className="about-section__header">
          <h2>Values I ship with every project</h2>
          <p>These principles anchor the teams I work with and the products we deploy.</p>
        </div>
        <div className="about-values__grid">
          {bioSummary.values.map((value) => (
            <div key={value.label} className="about-values__item" data-reveal>
              <h3>{value.label}</h3>
              <p>{value.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <Timeline items={milestones} />

      <section className="about-testimonials section-card rounded-3xl p-8 sm:p-12" data-reveal>
        <div className="about-section__header">
          <h2>Testimonials</h2>
          <p>Mentors and collaborators describe the impact of working together.</p>
        </div>
        <div className="about-testimonials__grid">
          {testimonials.map((item) => (
            <figure key={item.name} className="about-testimonials__item" data-reveal>
              <blockquote>“{item.quote}”</blockquote>
              <figcaption>
                <span className="about-testimonials__name">{item.name}</span>
                <span className="about-testimonials__role">{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="about-awards section-card rounded-3xl p-8 sm:p-12" data-reveal>
        <div className="about-section__header">
          <h2>Awards & Scholarships</h2>
          <p>Recognitions that have funded the research, deployments, and mentorship I care about.</p>
        </div>
        <div className="about-awards__list">
          {awards.map((award) => (
            <article key={award.title} className="about-awards__item" data-reveal>
              <h3>{award.title}</h3>
              <p className="about-awards__issuer">{award.issuer}</p>
              <p>{award.blurb}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
