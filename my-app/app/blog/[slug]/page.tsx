import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPost } from '../../../data/blog';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-8 pb-24">
      <header className="space-y-4 text-center">
        <p className="label-accent opacity-80">Thought Piece</p>
        <h1 className="text-4xl font-semibold text-slate-50">{post.title}</h1>
        <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">{post.excerpt}</p>
      </header>
      <div
        className="h-56 rounded-3xl border card-border"
        style={{ background: post.cover }}
      />
      <section className="section-card rounded-3xl p-6 sm:p-8 space-y-4">
        <p className="text-sm text-slate-300/90 leading-relaxed">
          This long-form article is under construction. Soon you&apos;ll find detailed
          insights, workflow diagrams, and reproducible resources here.
        </p>
        <p className="text-sm text-slate-300/90 leading-relaxed">
          In the meantime, feel free to reach out if you&apos;d like an advance copy or want to
          collaborate on a related topic in AI and healthcare.
        </p>
      </section>
      <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Link href="/" className="btn-outline">
          ← Back to Portfolio
        </Link>
        <Link href="mailto:veldandiamulya@gmail.com" className="btn-primary">
          Continue the Conversation
        </Link>
      </footer>
    </article>
  );
}
