export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Amulya Veldandi",
    url: "https://amulyaveldandi.github.io",
    image: "https://amulyaveldandi.github.io/og-image.png",
    sameAs: [
      "https://github.com/AmulyaVeldandi",
      "https://www.linkedin.com/in/amulya-veldandi-104242261/",
    ],
    jobTitle: "Healthcare AI Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Healthcare Technology",
    },
    description:
      "Physician-turned data scientist building trustworthy imaging AI, agentic workflows, and clinical analytics that measurably improve patient care.",
    knowsAbout: [
      "Machine Learning",
      "Deep Learning",
      "Medical Imaging",
      "Healthcare AI",
      "Clinical Analytics",
      "Python",
      "TensorFlow",
      "PyTorch",
    ],
    alumniOf: [
      {
        "@type": "Organization",
        name: "Indiana University",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
