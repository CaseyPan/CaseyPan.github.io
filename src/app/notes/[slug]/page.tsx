import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, FlaskConical } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { NoteContent } from "@/components/notes/NoteContent";
import { TableOfContents } from "@/components/notes/TableOfContents";
import { NoteCard } from "@/components/NoteCard";
import {
  getAllNotesMeta,
  getAdjacentNotes,
  getNoteBySlug,
  getRelatedNotes,
} from "@/lib/notes";
import { extractToc } from "@/lib/toc";

export function generateStaticParams() {
  return getAllNotesMeta().map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) return {};

  return {
    title: note.title,
    description: note.summary,
    openGraph: { title: note.title, description: note.summary, type: "article" },
  };
}

function formatDate(date: string) {
  return new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) notFound();

  const toc = extractToc(note.content);
  const { previous, next } = getAdjacentNotes(slug);
  const related = getRelatedNotes(slug, 2);

  return (
    <article className="py-14 sm:py-20">
      <Container>
        <Link
          href="/notes"
          className="inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-accent-ink"
        >
          <ArrowLeft className="h-4 w-4" /> All notes
        </Link>

        <header className="mt-6 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono-label text-xs uppercase tracking-wide text-accent-ink">
              {note.category}
            </span>
            {note.sample && (
              <span className="font-mono-label inline-flex items-center gap-1 rounded-full border border-border bg-bg px-2 py-0.5 text-[10px] text-ink-soft">
                <FlaskConical className="h-3 w-3" /> sample content
              </span>
            )}
          </div>

          <h1 className="font-serif-display mt-3 text-3xl leading-tight text-ink sm:text-4xl">
            {note.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">{note.summary}</p>

          <div className="mt-5 flex items-center gap-3 text-xs text-ink-soft/80">
            <time dateTime={note.date}>{formatDate(note.date)}</time>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" /> {note.readingTime}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {note.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </header>

        {note.sample && (
          <div className="mt-8 max-w-3xl rounded-xl border border-border bg-highlight/50 px-5 py-4 text-sm leading-relaxed text-accent-ink">
            This note is sample content included to demonstrate the notes
            system on this site, not a finished, verified personal essay.
          </div>
        )}

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_220px]">
          <div className="max-w-3xl">
            <NoteContent content={note.content} />

            <p className="mt-12 rounded-xl border border-border bg-surface px-5 py-4 text-xs leading-relaxed text-ink-soft">
              These notes document what I&apos;m learning and how I currently
              understand it. Corrections and thoughtful discussions are
              always welcome.
            </p>

            <nav
              aria-label="Note navigation"
              className="mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-2"
            >
              {previous ? (
                <Link
                  href={`/notes/${previous.slug}`}
                  className="group rounded-xl border border-border p-4 transition-colors hover:border-accent"
                >
                  <span className="font-mono-label inline-flex items-center gap-1 text-[11px] uppercase tracking-wide text-ink-soft/70">
                    <ArrowLeft className="h-3 w-3" /> Previous
                  </span>
                  <p className="mt-1 text-sm font-medium text-ink group-hover:text-accent-ink">
                    {previous.title}
                  </p>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/notes/${next.slug}`}
                  className="group rounded-xl border border-border p-4 text-right transition-colors hover:border-accent"
                >
                  <span className="font-mono-label inline-flex items-center justify-end gap-1 text-[11px] uppercase tracking-wide text-ink-soft/70">
                    Next <ArrowRight className="h-3 w-3" />
                  </span>
                  <p className="mt-1 text-sm font-medium text-ink group-hover:text-accent-ink">
                    {next.title}
                  </p>
                </Link>
              ) : (
                <span />
              )}
            </nav>

            {related.length > 0 && (
              <div className="mt-12 border-t border-border pt-8">
                <h2 className="font-serif-display text-xl text-ink">Related notes</h2>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  {related.map((r) => (
                    <NoteCard key={r.slug} note={r} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="hidden lg:block">
            <TableOfContents toc={toc} />
          </aside>
        </div>
      </Container>
    </article>
  );
}
