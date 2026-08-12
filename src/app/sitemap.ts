import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    "",
    "/projects",
    "/about",
    "/locations",
    "/gallery",
    "/contact",
    ...projects.map((project) => `/projects/${project.slug}`)
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7
  }));
}
