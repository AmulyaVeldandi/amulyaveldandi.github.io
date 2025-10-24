import type { BlogPostMeta } from "@/lib/content-types";

export const blogPosts: BlogPostMeta[] = [
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
