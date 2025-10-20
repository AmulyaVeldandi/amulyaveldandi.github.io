import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject } from "../../../data/projects";
import { getCaseStudy } from "../../../data/caseStudies";

type CaseStudyPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const project = getProject(params.slug);
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

export default function ProjectCaseStudyPage({ params }: CaseStudyPageProps) {
  const project = getProject(params.slug);
  if (!project) {
    notFound();
  }
  const caseStudy = getCaseStudy(params.slug);

  const fallbackApproach = project.approach ?? [];
  const fallbackOutcomes = project.results?.map((result) => `${result.metric}: ${result.value}`) ?? [];
  const heroMedia = caseStudy?.heroMedia;
  const gallery = caseStudy?.gallery ?? [];
  const timeline = caseStudy?.timeline ?? "Timeline coming soon";
  const role = caseStudy?.role ?? "Role forthcoming";
  const purpose = caseStudy?.purpose ?? project.summary;
  const objective =
    caseStudy?.objective ??
    "Detailed objectives are being finalised. Reach out if you need the full project dossier.";
  const approach = caseStudy?.approach ?? fallbackApproach;
  const outcomes =
    caseStudy?.outcomes ??
    (fallbackOutcomes.length
      ? fallbackOutcomes
      : ["Final outcome summary will be published once the engagement concludes."]);

  return (
    <div className="case-study">
      <header className="case-study__hero">
        <div className="case-study__hero-media">
          {heroMedia ? (
            <Image
              src={heroMedia.src}
              alt={heroMedia.alt}
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
          <p>Evidence-backed process that translated prototypes into measurable impact.</p>
        </div>
        <ol>
          {approach.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="case-study__outcomes">
        <div className="case-study__section-header">
          <h2>Final Outcomes</h2>
          <p>Highlights from the delivery, paired with the metrics teams cared about most.</p>
        </div>
        <ul>
          {outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
        {project.results?.length ? (
          <div className="case-study__metrics">
            {project.results.map((result) => (
              <div key={result.metric + result.value} className="case-study__metric-card">
                <p className="case-study__metric-label">{result.metric}</p>
                <p className="case-study__metric-value">{result.value}</p>
                {result.detail ? <p className="case-study__metric-detail">{result.detail}</p> : null}
              </div>
            ))}
          </div>
        ) : null}
      </section>

      {gallery.length ? (
        <section className="case-study__gallery">
          <div className="case-study__section-header">
            <h2>Gallery</h2>
            <p>Storyboard of visuals, dashboards, and artefacts stakeholders received.</p>
          </div>
          <div className="case-study__gallery-grid">
            {gallery.map((media) => (
              <figure key={media.src} className="case-study__gallery-item">
                <div className="case-study__gallery-media">
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 520px"
                    className="case-study__gallery-image"
                  />
                </div>
                {media.caption ? <figcaption>{media.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        </section>
      ) : null}

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
