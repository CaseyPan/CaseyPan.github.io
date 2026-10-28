import type { MetadataRoute } from "next";
import { getAllNotesMeta, getSeriesWithNotes } from "@/lib/notes";
import { getAllGrowthNotes } from "@/lib/growth";
import { books } from "@/data/books";

const siteUrl = "https://caseypan.github.io";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/experience",
    "/projects",
    "/notes",
    "/about",
    "/beyond-work",
    "/beyond-work/books",
    "/beyond-work/travel",
    "/beyond-work/growth",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const noteRoutes = getAllNotesMeta().map((note) => ({
    url: `${siteUrl}/notes/${note.slug}`,
    lastModified: note.date,
  }));

  const seriesRoutes = getSeriesWithNotes().map(({ series }) => ({
    url: `${siteUrl}/notes/series/${series.slug}`,
    lastModified: new Date(),
  }));

  const growthRoutes = getAllGrowthNotes().map((entry) => ({
    url: `${siteUrl}/beyond-work/growth/${entry.slug}`,
    lastModified: entry.date,
  }));

  const bookRoutes = books.map((book) => ({
    url: `${siteUrl}/beyond-work/books/${book.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...noteRoutes, ...seriesRoutes, ...growthRoutes, ...bookRoutes];
}
