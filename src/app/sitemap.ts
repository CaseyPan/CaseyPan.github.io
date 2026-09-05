import type { MetadataRoute } from "next";
import { getAllNotesMeta } from "@/lib/notes";

const siteUrl = "https://caseypan.github.io";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/experience", "/projects", "/notes", "/about"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const noteRoutes = getAllNotesMeta().map((note) => ({
    url: `${siteUrl}/notes/${note.slug}`,
    lastModified: note.date,
  }));

  return [...staticRoutes, ...noteRoutes];
}
