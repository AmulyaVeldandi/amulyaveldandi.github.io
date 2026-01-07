import type { BlogPostMeta } from "@/lib/content-types";

export const blogPosts: BlogPostMeta[] = [
  // Event Posts
  {
    slug: "siim-2025-conference",
    file: "siim-2025-conference.mdx",
    title: "SIIM 2025 - Society for Imaging Informatics in Medicine Annual Meeting",
    date: "2025-06-10",
    category: "Event",
    tags: ["conference", "imaging-informatics", "radiology", "pacs", "ai-in-radiology"],
    readingTime: "5 min read",
    description:
      "Attended SIIM 2025, exploring the intersection of radiology, AI, and clinical informatics. Learned about PACS integration, AI deployment in imaging workflows, and the future of diagnostic radiology.",
    featured: true,
    eventName: "SIIM Annual Meeting 2025",
    eventLocation: "Nashville, TN",
    eventDate: "June 5-8, 2025",
    role: "Attendee",
    coverImage: "/images/events/siim-2025.svg",
    coverAlt: "SIIM 2025 conference illustration",
  },
  {
    slug: "amia-informatics-summit-2025",
    file: "amia-informatics-summit-2025.mdx",
    title: "AMIA Informatics Summit 2025 - Shaping the Future of Health Informatics",
    date: "2025-03-15",
    category: "Event",
    tags: ["conference", "health-informatics", "clinical-informatics", "ehr", "interoperability"],
    readingTime: "5 min read",
    description:
      "Participated in AMIA Informatics Summit 2025, exploring innovations in clinical informatics, EHR optimization, and AI integration in healthcare systems.",
    featured: true,
    eventName: "AMIA Informatics Summit 2025",
    eventLocation: "San Francisco, CA",
    eventDate: "March 10-13, 2025",
    role: "Attendee",
    coverImage: "/images/events/amia-is-2025.svg",
    coverAlt: "AMIA Informatics Summit 2025 illustration",
  },
  {
    slug: "hiti-lab-datathon-2024",
    file: "hiti-lab-datathon-2024.mdx",
    title: "HITI Lab Datathon 2024 - AI-Driven Healthcare Solutions",
    date: "2024-06-20",
    category: "Event",
    tags: ["datathon", "healthcare-ai", "nlp", "clinical-decision-support", "team-competition"],
    readingTime: "5 min read",
    description:
      "Returned to HITI Lab Datathon 2024 with enhanced skills, tackling clinical NLP challenges and building AI-driven decision support systems for real-world healthcare applications.",
    featured: true,
    eventName: "HITI Lab Datathon 2024",
    eventLocation: "Cleveland, OH",
    eventDate: "June 2024",
    role: "Participant",
    coverImage: "/images/events/hiti-datathon-2024.svg",
    coverAlt: "HITI Lab Datathon 2024 event illustration",
  },
  {
    slug: "isbi-2024-conference",
    file: "isbi-2024-conference.mdx",
    title: "ISBI 2024 - International Symposium on Biomedical Imaging",
    date: "2024-05-27",
    category: "Event",
    tags: ["conference", "biomedical-imaging", "medical-imaging", "research", "ieee"],
    readingTime: "6 min read",
    description:
      "Attended ISBI 2024 in Athens, Greece, exploring cutting-edge research in biomedical imaging, machine learning for medical analysis, and the future of computational pathology.",
    featured: true,
    eventName: "IEEE International Symposium on Biomedical Imaging (ISBI) 2024",
    eventLocation: "Athens, Greece",
    eventDate: "May 27-30, 2024",
    role: "Attendee",
    coverImage: "/images/events/isbi-2024.svg",
    coverAlt: "ISBI 2024 conference illustration",
  },

  // Research & Tutorial Posts
  {
    slug: "educational-grants-scholarships",
    file: "educational-grants-scholarships.mdx",
    title: "Educational Grants & Scholarships Awarded",
    date: "2025-01-15",
    category: "Reflection",
    tags: ["scholarships", "education", "health-informatics", "awards"],
    readingTime: "4 min read",
    description:
      "Recognition and financial support received during my Master's program in Health Informatics at Indiana University, including awards from SIIM, Women & Hi-Tech, and IU Luddy School.",
    featured: true,
    coverImage: "/images/blog/scholarships-hero.svg",
    coverAlt: "Educational scholarships and grants",
  },
  {
    slug: "ai-in-healthcare-real-world-safety",
    file: "ai-in-healthcare-real-world-safety.mdx",
    title: "Designing AI for Clinical Safety and Trust",
    date: "2024-09-05",
    category: "Research",
    tags: ["Clinical AI", "Governance", "Bias"],
    readingTime: "8 min read",
    description:
      "Seven guardrails I rely on to keep hospital AI launches safe, equitable, and clinician-first.",
    featured: true,
    coverImage: "/case-studies/analytics-hero.svg",
    coverAlt: "Clinical safety dashboards",
  },
  {
    slug: "agentic-ai-in-the-clinic",
    file: "agentic-ai-in-the-clinic.mdx",
    title: "Agentic AI Workflows that Respect the Bedside",
    date: "2024-06-21",
    category: "Tutorial",
    tags: ["Agentic AI", "Governance", "Workflow"],
    readingTime: "10 min read",
    description:
      "How we map agent loops onto radiology workflows with explicit human checkpoints and measurable ROI.",
    coverImage: "/case-studies/neuro-hero.svg",
    coverAlt: "Agentic workflow illustration",
  },
  {
    slug: "hiti-lab-datathon-2023",
    file: "hiti-lab-datathon-2023.mdx",
    title: "HITI Lab Datathon 2023 - Medical Imaging Data Challenge",
    date: "2023-06-15",
    category: "Event",
    tags: ["datathon", "medical-imaging", "machine-learning", "healthcare-ai", "competition"],
    readingTime: "4 min read",
    description:
      "Participated in the HITI Lab Datathon 2023, tackling real-world medical imaging challenges with machine learning and collaborating with interdisciplinary teams.",
    eventName: "HITI Lab Datathon 2023",
    eventLocation: "Cleveland, OH",
    eventDate: "June 2023",
    role: "Participant",
    coverImage: "/images/events/hiti-datathon-2023.svg",
    coverAlt: "HITI Lab Datathon 2023 event illustration",
  },
  {
    slug: "physician-to-data-scientist",
    file: "physician-to-data-scientist.mdx",
    title: "From Physician to Data Scientist: A Practical Transition Playbook",
    date: "2023-12-14",
    category: "Reflection",
    tags: ["Career", "Mentorship"],
    readingTime: "6 min read",
    description:
      "Lessons from moving bedside empathy into data roles without leaving patients behind.",
    coverImage: "/case-studies/pancreas-hero.svg",
    coverAlt: "Clinical career transition illustration",
  },
];

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export const blogCategories = Array.from(new Set(blogPosts.map((post) => post.category)));
