import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const NOTES_DIR = path.join(process.cwd(), "src/content/notes");

export type NoteCategory =
  | "Software Engineering"
  | "Systems & Infrastructure"
  | "AI Infrastructure";

export type NoteFrontmatter = {
  title: string;
  summary: string;
  date: string;
  category: NoteCategory;
  tags: string[];
  featured?: boolean;
  sample?: boolean;
};

export type NoteMeta = NoteFrontmatter & {
  slug: string;
  readingTime: string;
};

export type Note = NoteMeta & {
  content: string;
};

function getNoteSlugs(): string[] {
  if (!fs.existsSync(NOTES_DIR)) return [];
  return fs
    .readdirSync(NOTES_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

function parseNoteFile(slug: string): { frontmatter: NoteFrontmatter; content: string; readingTimeLabel: string } {
  const filePath = path.join(NOTES_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    frontmatter: data as NoteFrontmatter,
    content,
    readingTimeLabel: `${Math.max(1, Math.ceil(stats.minutes))} min read`,
  };
}

function readNoteFile(slug: string): Note {
  const { frontmatter, content, readingTimeLabel } = parseNoteFile(slug);
  return { ...frontmatter, slug, content, readingTime: readingTimeLabel };
}

function readNoteMeta(slug: string): NoteMeta {
  const { frontmatter, readingTimeLabel } = parseNoteFile(slug);
  return { ...frontmatter, slug, readingTime: readingTimeLabel };
}

export function getAllNotes(): Note[] {
  return getNoteSlugs()
    .map(readNoteFile)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllNotesMeta(): NoteMeta[] {
  return getNoteSlugs()
    .map(readNoteMeta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNoteBySlug(slug: string): Note | undefined {
  const slugs = getNoteSlugs();
  if (!slugs.includes(slug)) return undefined;
  return readNoteFile(slug);
}

export function getFeaturedNotes(limit = 3): NoteMeta[] {
  return getAllNotesMeta()
    .filter((note) => note.featured)
    .slice(0, limit);
}

export function getLatestNotes(limit = 3): NoteMeta[] {
  return getAllNotesMeta().slice(0, limit);
}

export function getAdjacentNotes(slug: string): {
  previous: NoteMeta | null;
  next: NoteMeta | null;
} {
  const notes = getAllNotesMeta();
  const index = notes.findIndex((note) => note.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index < notes.length - 1 ? notes[index + 1] : null,
    next: index > 0 ? notes[index - 1] : null,
  };
}

export function getRelatedNotes(slug: string, limit = 2): NoteMeta[] {
  const notes = getAllNotesMeta();
  const current = notes.find((note) => note.slug === slug);
  if (!current) return [];

  return notes
    .filter((note) => note.slug !== slug)
    .map((note) => {
      const sharedTags = note.tags.filter((tag) => current.tags.includes(tag)).length;
      const sameCategory = note.category === current.category ? 1 : 0;
      return { note, score: sharedTags * 2 + sameCategory };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.note);
}

export const noteCategories: NoteCategory[] = [
  "Software Engineering",
  "Systems & Infrastructure",
  "AI Infrastructure",
];
