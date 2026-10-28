import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NoteContent } from "@/components/notes/NoteContent";
import { getAllGrowthNotes, getGrowthNoteBySlug } from "@/lib/growth";

export function generateStaticParams() {
  const entries = getAllGrowthNotes();
  // output: "export" requires at least one generated path even when there
  // are no entries yet — this placeholder renders a 404 and isn't linked
  // from anywhere. Remove once a real entry exists.
  if (entries.length === 0) return [{ slug: "__no-entries-yet" }];
  return entries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getGrowthNoteBySlug(slug);
  if (!entry) return {};
  return { title: entry.title, description: entry.summary };
}

function formatDate(date: string) {
  return new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function GrowthEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getGrowthNoteBySlug(slug);
  if (!entry) notFound();

  return (
    <article className="py-14 sm:py-20">
      <Container>
        <Link
          href="/beyond-work/growth"
          className="inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-accent-ink"
        >
          <ArrowLeft className="h-4 w-4" /> All growth notes
        </Link>

        <header className="mt-6 max-w-3xl">
          <h1 className="font-serif-display mt-3 text-3xl leading-tight text-ink sm:text-4xl">
            {entry.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">{entry.summary}</p>
          <div className="mt-5 flex items-center gap-3 text-xs text-ink-soft/80">
            <time dateTime={entry.date}>{formatDate(entry.date)}</time>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" /> {entry.readingTime}
            </span>
          </div>
        </header>

        <div className="mt-12 max-w-3xl">
          <NoteContent content={entry.content} />
        </div>
      </Container>
    </article>
  );
}
