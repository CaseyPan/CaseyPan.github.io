import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
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
    <Link
      href={`/beyond-work/books/${book.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_12px_24px_rgba(184,77,104,0.08)]"
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-highlight/40">
        {book.cover ? (
          <Image
            src={book.cover}
            alt={`Cover of ${book.title}`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-serif-display px-4 text-center text-sm text-ink-soft/60">
              {book.title}
            </span>
          </div>
        )}
        <span
          className={`font-mono-label absolute right-2.5 top-2.5 inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] tracking-wide backdrop-blur-sm ${statusClasses[book.status]}`}
        >
          {statusLabel[book.status]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif-display text-lg leading-snug text-ink">{book.title}</h3>
        <p className="mt-1 text-sm text-ink-soft">{book.author}</p>
        {book.rating !== undefined && (
          <div className="font-mono-label mt-3 inline-flex items-center gap-1.5 text-sm text-accent-ink">
            <Star className="h-3.5 w-3.5 fill-current" /> {book.rating.toFixed(1)} / 5
          </div>
        )}
      </div>
    </Link>
  );
}
