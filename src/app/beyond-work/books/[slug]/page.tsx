import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Star, Calendar, TriangleAlert } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { books, type BookStatus } from "@/data/books";

const statusLabel: Record<BookStatus, string> = {
  READ: "READ",
  READING: "READING",
  WANT_TO_READ: "WANT TO READ",
};

const statusClasses: Record<BookStatus, string> = {
  READ: "bg-sage/15 text-sage border-sage/30",
  READING: "bg-highlight text-accent-ink border-accent/30",
  WANT_TO_READ: "bg-border/40 text-ink-soft border-border",
};

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) return {};
  return {
    title: book.title,
    description: `${book.title} by ${book.author} — book review.`,
  };
}

function formatDate(date: string) {
  return new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) notFound();

  return (
    <article className="py-14 sm:py-20">
      <Container>
        <Link
          href="/beyond-work/books"
          className="inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-accent-ink"
        >
          <ArrowLeft className="h-4 w-4" /> All books
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[260px_1fr]">
          <div>
            <div className="sticky top-24">
              <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl border border-border bg-highlight/40 shadow-[0_16px_32px_rgba(184,77,104,0.1)]">
                {book.cover ? (
                  <Image
                    src={book.cover}
                    alt={`Cover of ${book.title}`}
                    fill
                    sizes="260px"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center p-4">
                    <span className="font-serif-display text-center text-sm text-ink-soft/60">
                      {book.title}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span
                  className={`font-mono-label inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] tracking-wide ${statusClasses[book.status]}`}
                >
                  {statusLabel[book.status]}
                </span>
                {book.rating !== undefined && (
                  <span className="font-mono-label inline-flex items-center gap-1 text-sm text-accent-ink">
                    <Star className="h-3.5 w-3.5 fill-current" /> {book.rating.toFixed(1)} / 5
                  </span>
                )}
              </div>

              {book.dateFinished && (
                <p className="font-mono-label mt-3 inline-flex items-center gap-1.5 text-xs text-ink-soft/70">
                  <Calendar className="h-3 w-3" /> Finished {formatDate(book.dateFinished)}
                </p>
              )}
            </div>
          </div>

          <div className="max-w-2xl">
            <h1 className="font-serif-display text-3xl leading-tight text-ink sm:text-4xl">
              {book.title}
            </h1>
            <p className="mt-2 text-base text-ink-soft">{book.author}</p>

            <div className="mt-8 space-y-4 text-base leading-relaxed text-ink-soft">
              {book.review.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {book.contentWarning && (
              <div className="not-prose mt-8 flex gap-3 rounded-xl border border-accent/40 bg-highlight px-5 py-4 text-sm leading-relaxed text-accent-ink">
                <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-mono-label mb-1 text-[11px] uppercase tracking-wide">
                    Content warning
                  </p>
                  {book.contentWarning}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </article>
  );
}
