import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { books } from "@/data/books";

const featuredBook = books[0];

export function LifeOutsideSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <p className="font-mono-label text-xs uppercase tracking-[0.14em] text-ink-muted">
          02 / The personal side
        </p>
        <h2 className="font-serif-display mt-3 text-3xl text-ink sm:text-4xl">
          Life outside the terminal.
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <Link href="/beyond-work" className="group block">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-dashed border-border bg-highlight">
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center">
                <span className="font-mono-label text-[11px] uppercase tracking-wide text-ink-muted">
                  Photo coming soon
                </span>
                <span className="text-sm text-ink-soft">Matcha, cafés, and everyday moments</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-ink-soft">Little rituals</p>
          </Link>

          <Link href="/beyond-work/travel" className="group block">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-dashed border-border bg-highlight">
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center">
                <span className="font-mono-label text-[11px] uppercase tracking-wide text-ink-muted">
                  Photo coming soon
                </span>
                <span className="text-sm text-ink-soft">Places worth remembering</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-ink-soft">Places &amp; moments</p>
          </Link>

          <Link href="/beyond-work/books" className="group block">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-border bg-highlight/40">
              {featuredBook?.cover && (
                <Image
                  src={featuredBook.cover}
                  alt={`Cover of ${featuredBook.title}`}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              )}
            </div>
            <p className="mt-3 text-sm text-ink-soft">On my bookshelf</p>
          </Link>
        </div>
      </Container>
    </section>
  );
}
