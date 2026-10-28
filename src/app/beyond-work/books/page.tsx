import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { BookCard } from "@/components/BookCard";
import { books } from "@/data/books";

export const metadata: Metadata = {
  title: "Books",
  description: "Books I've read, with honest reviews.",
};

export default function BooksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Beyond Work · Books"
        title="What I've been reading"
        description="Not a lot of volume, but what I read, I read carefully — and I have opinions about it."
      />
      <Container className="py-16 sm:py-20">
        {books.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-10 text-center">
            <p className="text-sm text-ink-soft">No books logged yet — check back soon.</p>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {books.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
