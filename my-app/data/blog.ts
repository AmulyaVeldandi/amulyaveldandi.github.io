export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  tags: string[];
  link?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'ai-in-healthcare-real-world-safety',
    title: 'AI in Healthcare: Designing for Safety and Trust',
    excerpt:
      'How I evaluate clinical AI systems for bias, governance, and bedside adoption—lessons from radiology, perioperative care, and quality teams.',
    cover: 'linear-gradient(135deg, rgba(31,155,173,0.35), rgba(245,183,137,0.25))',
    tags: ['AI Strategy', 'Clinical Safety'],
  },
  {
    slug: 'agentic-ai-in-the-clinic',
    title: 'Agentic AI Workflows for Hospitals',
    excerpt:
      'Mapping agent-based architectures onto hospital processes to automate intake, imaging QA, and multidisciplinary decision support.',
    cover: 'linear-gradient(135deg, rgba(101,214,206,0.35), rgba(31,111,139,0.3))',
    tags: ['Agentic AI', 'Workflow'],
  },
  {
    slug: 'physician-to-data-scientist',
    title: 'From Physician to Data Scientist',
    excerpt:
      'A personal playbook for clinicians moving into data roles: skills, mindsets, and how to keep empathy at the center of technical work.',
    cover: 'linear-gradient(135deg, rgba(248,197,143,0.4), rgba(31,155,173,0.3))',
    tags: ['Career', 'Healthcare'],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
