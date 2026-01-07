import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, blogCategories } from "@/data/blog/posts";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Badge } from "@/components/shared/Badge";
import { Card } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Blog | Amulya Veldandi",
  description:
    "Insights on health informatics, medical imaging AI, clinical decision support, and my journey through conferences, datathons, and research in healthcare technology.",
  openGraph: {
    title: "Blog | Amulya Veldandi",
    description:
      "Insights on health informatics, medical imaging AI, clinical decision support, and my journey through conferences, datathons, and research in healthcare technology.",
  },
};

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="pb-24 space-y-12">
      {/* Hero Section */}
      <AnimatedSection className="space-y-6">
        <div className="flex items-center gap-3">
          <Badge variant="neutral">Blog</Badge>
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            {blogPosts.length} {blogPosts.length === 1 ? "Post" : "Posts"}
          </span>
        </div>
        <h1 className="text-4xl font-bold text-[var(--foreground)] sm:text-5xl lg:text-6xl">
          Thoughts & Reflections
        </h1>
        <p className="max-w-3xl text-lg text-[var(--muted)] leading-relaxed">
          Writing about health informatics, medical imaging AI, clinical decision support systems, and lessons
          learned from conferences, datathons, and research in healthcare technology.
        </p>
      </AnimatedSection>

      {/* Categories */}
      <AnimatedSection>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">Categories:</span>
          {blogCategories.map((category) => (
            <Badge key={category} variant="outline">
              {category}
            </Badge>
          ))}
        </div>
      </AnimatedSection>

      {/* Blog Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedPosts.map((post) => (
          <AnimatedSection key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block h-full group">
              <Card className="p-6 h-full flex flex-col transition-all duration-300 hover:border-[var(--accent)] hover:shadow-lg">
                {/* Cover Image */}
                {post.coverImage && (
                  <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden bg-[var(--surface-muted)]">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundImage: `url(${post.coverImage})` }}
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 space-y-3">
                  {/* Category & Date */}
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <Badge variant="neutral">{post.category}</Badge>
                    {post.featured && <Badge variant="accent">Featured</Badge>}
                    <span className="text-[var(--muted)]">•</span>
                    <time className="text-[var(--muted)]">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-3">{post.description}</p>

                  {/* Event Info (if applicable) */}
                  {post.eventName && (
                    <div className="text-xs text-[var(--muted)] space-y-1">
                      <p>
                        <span className="font-semibold">Event:</span> {post.eventName}
                      </p>
                      {post.eventLocation && (
                        <p>
                          <span className="font-semibold">Location:</span> {post.eventLocation}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.65rem] px-2 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-[0.65rem] px-2 py-1 text-[var(--muted)]">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-4 pt-4 border-t border-[var(--border-muted)] flex items-center justify-between text-xs">
                  <span className="text-[var(--muted)]">{post.readingTime}</span>
                  <span className="text-[var(--accent)] group-hover:underline inline-flex items-center gap-1">
                    Read More
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Card>
            </Link>
          </AnimatedSection>
        ))}
      </div>

      {/* Empty State (if no posts) */}
      {blogPosts.length === 0 && (
        <AnimatedSection className="text-center py-12">
          <p className="text-lg text-[var(--muted)]">No blog posts yet. Check back soon!</p>
        </AnimatedSection>
      )}
    </div>
  );
}