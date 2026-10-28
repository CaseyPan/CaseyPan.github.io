import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const GROWTH_DIR = path.join(process.cwd(), "src/content/growth");

export type GrowthFrontmatter = {
  title: string;
  summary: string;
  date: string;
};

export type GrowthNoteMeta = GrowthFrontmatter & {
  slug: string;
  readingTime: string;
};

export type GrowthNote = GrowthNoteMeta & {
  content: string;
};

function getGrowthSlugs(): string[] {
  if (!fs.existsSync(GROWTH_DIR)) return [];
  return fs
    .readdirSync(GROWTH_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

function readGrowthFile(slug: string): GrowthNote {
  const filePath = path.join(GROWTH_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    ...(data as GrowthFrontmatter),
    slug,
    content,
    readingTime: `${Math.max(1, Math.ceil(stats.minutes))} min read`,
  };
}

export function getAllGrowthNotes(): GrowthNote[] {
  return getGrowthSlugs()
    .map(readGrowthFile)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getGrowthNoteBySlug(slug: string): GrowthNote | undefined {
  if (!getGrowthSlugs().includes(slug)) return undefined;
  return readGrowthFile(slug);
}
