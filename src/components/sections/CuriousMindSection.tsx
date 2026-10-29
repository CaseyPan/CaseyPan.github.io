import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getLatestNotes } from "@/lib/notes";
import { books } from "@/data/books";

type Entry = {
  href: string;
  title: string;
  category: string;
  description: string;
  date?: string;
  readingTime?: string;
};

function formatDate(date: string) {
  return new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function CuriousMindSection() {
  const notes = getLatestNotes(2);
  const featuredBook = books[0];

  const entries: Entry[] = [
    ...notes.map((note) => ({
      href: `/notes/${note.slug}`,
      title: note.title,
      category: "Engineering" + (note.sample ? " · sample" : ""),
      description: note.summary,
      date: formatDate(note.date),
      readingTime: note.readingTime,
    })),
    ...(featuredBook
      ? [
          {
            href: `/beyond-work/books/${featuredBook.slug}`,
            title: featuredBook.title,
            category: "Books",
            description: `A review of ${featuredBook.title} by ${featuredBook.author}.`,
          },
        ]
      : []),
  ];

  if (entries.length === 0) return null;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <p className="font-mono-label text-xs uppercase tracking-[0.14em] text-ink-muted">
              03 / Notes
            </p>
            <h2 className="font-serif-display mt-3 text-3xl text-ink sm:text-4xl">
              Notes from a curious mind.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">
              Engineering lessons, books worth sharing, and everything I&apos;m learning in
              between.
            </p>
          </div>
          <Link
            href="/notes"
            className="hidden whitespace-nowrap text-sm font-medium text-ink-soft underline decoration-border underline-offset-4 transition-colors hover:text-ink hover:decoration-ink sm:inline-block"
          >
            All writing ↗
          </Link>
        </div>

        <div className="mt-10 divide-y divide-border border-t border-border">
          {entries.map((entry) => (
            <Link
              key={entry.href}
              href={entry.href}
              className="group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div>
                <span className="font-mono-label mr-3 text-[11px] uppercase tracking-wide text-ink-muted">
                  {entry.category}
                </span>
                <span className="text-base font-medium text-ink group-hover:underline">
                  {entry.title}
                </span>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink-soft">
                  {entry.description}
                </p>
              </div>
              {(entry.date || entry.readingTime) && (
                <p className="font-mono-label shrink-0 text-xs text-ink-muted">
                  {entry.date}
                  {entry.date && entry.readingTime ? " · " : ""}
                  {entry.readingTime}
                </p>
              )}
            </Link>
          ))}
        </div>

        <Link
          href="/notes"
          className="mt-6 inline-block text-sm font-medium text-ink-soft underline decoration-border underline-offset-4 transition-colors hover:text-ink hover:decoration-ink sm:hidden"
        >
          All writing ↗
        </Link>
      </Container>
    </section>
  );
}
