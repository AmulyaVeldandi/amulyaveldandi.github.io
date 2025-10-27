import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, projects } from "../../../data/projects";
import { getCaseStudy } from "../../../data/work/caseStudies";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return {
      title: "Project Not Found | Amulya Veldandi",
    };
  }
  return {
    title: `${project.title} · Case Study | Amulya Veldandi`,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    notFound();
  }
  const caseStudy = getCaseStudy(slug);

  const heroImage = caseStudy?.heroImage;
  const heroAlt = caseStudy?.heroAlt ?? project.title;
  const timeline = caseStudy?.overview?.timeline ?? "Timeline coming soon";
  const role = caseStudy?.overview?.role ?? "Role forthcoming";
  const purpose = caseStudy?.description ?? project.summary;
  const objective = caseStudy?.challenge?.body ?? "Detailed objectives are being finalised. Reach out if you need the full project dossier.";
  const approachSteps = caseStudy?.approach?.bullets ?? [];
  const approachBody = caseStudy?.approach?.body ?? "";
  const outcomes = caseStudy?.impact ?? ["Final outcome summary will be published once the engagement concludes."];

  return (
    <div className="case-study">
      <header className="case-study__hero">
        <div className="case-study__hero-media">
          {heroImage ? (
            <Image
              src={heroImage}
              alt={heroAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
              className="case-study__hero-image"
              priority
            />
          ) : (
            <div className="case-study__hero-placeholder" />
          )}
        </div>
        <div className="case-study__intro">
          <p className="case-study__category">
            {caseStudy?.category ?? "Case Study"}
          </p>
          <h1 className="case-study__title">{project.title}</h1>
          <p className="case-study__summary">{project.summary}</p>
          <div className="case-study__meta">
            <div>
              <p className="case-study__meta-label">Timeline</p>
              <p className="case-study__meta-value">{timeline}</p>
            </div>
            <div>
              <p className="case-study__meta-label">Role</p>
              <p className="case-study__meta-value">{role}</p>
            </div>
          </div>
          <Link href="/#projects" className="case-study__back-link">
            ← Back to all projects
          </Link>
        </div>
      </header>

      <section className="case-study__purpose">
        <div>
          <h2>Purpose</h2>
          <p>{purpose}</p>
        </div>
        <div>
          <h2>Objective</h2>
          <p>{objective}</p>
        </div>
      </section>

      <section className="case-study__approach">
        <div className="case-study__section-header">
          <h2>Approach</h2>
          <p>{approachBody || "Evidence-backed process that translated prototypes into measurable impact."}</p>
        </div>
        {approachSteps.length > 0 && (
          <ol>
            {approachSteps.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        )}
      </section>

      <section className="case-study__outcomes">
        <div className="case-study__section-header">
          <h2>Final Outcomes</h2>
          <p>Highlights from the delivery, paired with the metrics teams cared about most.</p>
        </div>
        <ul>
          {outcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
        {caseStudy?.results?.length ? (
          <div className="case-study__metrics">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="case-study__metric-card">
                <p className="case-study__metric-label">{result.metric}</p>
                <p className="case-study__metric-value">{result.after}</p>
                {result.insight ? <p className="case-study__metric-detail">{result.insight}</p> : null}
              </div>
            ))}
          </div>
        ) : null}
      </section>

      <footer className="case-study__footer">
        <a href={project.github} className="btn-outline" target="_blank" rel="noreferrer">
          View GitHub Repository
        </a>
        <Link href="/#contact" className="btn-primary">
          Start a Collaboration
        </Link>
      </footer>
    </div>
  );
}
