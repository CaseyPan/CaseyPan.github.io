import { Star, TriangleAlert } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Book, BookStatus } from "@/data/books";

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

export function BookCard({ book }: { book: Book }) {
  return (
    <Card hover={false} className="flex h-full flex-col">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-serif-display text-xl leading-snug text-ink">{book.title}</h3>
          <p className="mt-1 text-sm text-ink-soft">{book.author}</p>
        </div>
        <span
          className={`font-mono-label inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] tracking-wide ${statusClasses[book.status]}`}
        >
          {statusLabel[book.status]}
        </span>
      </div>

      {book.rating !== undefined && (
        <div className="font-mono-label mt-3 inline-flex items-center gap-1.5 text-sm text-accent-ink">
          <Star className="h-4 w-4 fill-current" /> {book.rating.toFixed(1)} / 5
        </div>
      )}

      <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
        {book.review.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {book.contentWarning && (
        <div className="not-prose mt-5 flex gap-3 rounded-xl border border-accent/40 bg-highlight px-5 py-4 text-sm leading-relaxed text-accent-ink">
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-mono-label mb-1 text-[11px] uppercase tracking-wide">
              Content warning
            </p>
            {book.contentWarning}
          </div>
        </div>
      )}
    </Card>
  );
}
