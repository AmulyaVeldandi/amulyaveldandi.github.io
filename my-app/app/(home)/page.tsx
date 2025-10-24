import { Hero } from "@/components/home/Hero";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { LatestWork } from "@/components/home/LatestWork";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Amulya Veldandi",
    jobTitle: "Clinical AI Research Scientist",
    description: "Healthcare AI researcher specializing in clinical data science, machine learning, and medical informatics",
    url: "https://amulyaveldandi.com",
    sameAs: [
      "https://www.linkedin.com/in/amulya-veldandi-104242261/",
      "https://github.com/amulyaveldandi",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Healthcare Technology",
      "Clinical Data Science",
      "Machine Learning",
      "Medical Informatics",
      "Python",
      "R",
      "SQL",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "University of Southern California",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <FeatureHighlights />
      <LatestWork />
    </>
  );
}
