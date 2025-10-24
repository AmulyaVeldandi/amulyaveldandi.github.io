export type ImpactMetric = {
  label: string;
  value: string;
  description?: string;
  variant?: "increase" | "decrease" | "neutral";
};

export type ExperienceCategory = "Clinical" | "Research" | "Data Science" | "Product" | "Leadership";

export type ExperienceRole = {
  slug: string;
  organisation: string;
  location: string;
  logo?: string;
  category: ExperienceCategory;
  role: string;
  period: string;
  summary: string;
  achievements: string[];
  metrics: ImpactMetric[];
  technologies: string[];
  links?: { label: string; href: string }[];
};

export type TimelineEntry = {
  id: string;
  title: string;
  organisation: string;
  location: string;
  category: ExperienceCategory;
  period: string;
  headline: string;
  description: string;
  achievements: { label: string; metric: string }[];
  icon?: string;
};

export type CaseStudyHighlight = {
  metric: string;
  value: string;
  delta?: "increase" | "decrease";
};

export type CaseStudySection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  description: string;
  heroImage?: string;
  heroAlt?: string;
  techStack: string[];
  github?: string;
  demo?: string;
  overview: {
    problem: string;
    role: string;
    timeline: string;
    teamSize?: string;
  };
  challenge: CaseStudySection;
  approach: CaseStudySection & { diagram?: string };
  results: { metric: string; before: string; after: string; insight: string }[];
  impact: string[];
  deepDive: { title: string; content: string }[];
  related: string[];
  highlights?: CaseStudyHighlight[];
};

export type ProjectTag = {
  label: string;
  category: "Clinical" | "AI" | "ML Ops" | "Analytics" | "Research" | "Product" | "Ops";
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: ProjectTag[];
  coverImage: string;
  coverAlt: string;
  techStack: string[];
  metrics: ImpactMetric[];
  featured?: boolean;
  github?: string;
  demo?: string;
  caseStudySlug?: string;
  published: string;
};

export type Profile = {
  name: string;
  headline: string;
  subheadline: string;
  location: string;
  resumeUrl: string;
  social: {
    label: string;
    href: string;
  }[];
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
  descriptors: string[];
};

export type SkillCategory =
  | "Programming & Tools"
  | "ML & AI"
  | "Clinical Systems"
  | "Analytics & Viz"
  | "Leadership"
  | "Research Methods";

export type Skill = {
  name: string;
  icon?: string;
  level: number;
  years: number;
  description?: string;
  relatedProjects?: string[];
};

export type SkillMatrix = Record<
  SkillCategory,
  {
    summary: string;
    skills: Skill[];
  }
>;

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
};

export type Publication = {
  title: string;
  venue: string;
  year: string;
  authors: string[];
  link?: string;
};

export type BlogCategory = "Conference" | "Tutorial" | "Research" | "Reflection";

export type BlogFrontMatter = {
  title: string;
  date: string;
  category: BlogCategory;
  tags: string[];
  readingTime: string;
  description: string;
  featured?: boolean;
  coverImage?: string;
  coverAlt?: string;
};

export type BlogPostMeta = BlogFrontMatter & {
  slug: string;
  file: string;
};
