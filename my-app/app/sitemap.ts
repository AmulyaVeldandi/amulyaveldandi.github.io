import { MetadataRoute } from "next";
import { getAllWorkItems } from "@/data/work-items";
import { blogPosts } from "@/data/blog/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://amulyaveldandi.github.io";

  // Static pages
  const routes = ["", "/about", "/work", "/projects", "/scholarships"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Work item pages (all accessible via /work/[slug])
  const workRoutes = getAllWorkItems().map((item) => ({
    url: `${baseUrl}/work/${item.slug}`,
    lastModified: new Date(item.published).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Blog pages
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...workRoutes, ...blogRoutes];
}
