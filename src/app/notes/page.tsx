import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { NotesFilter } from "@/components/NotesFilter";
import { SeriesCard } from "@/components/SeriesCard";
import { getAllNotesMeta, getSeriesWithNotes, noteCategories } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Writing",
  description: "Engineering and learning notes on systems, infrastructure, and AI infrastructure.",
};

export default function NotesPage() {
  const notes = getAllNotesMeta();
  const seriesWithNotes = getSeriesWithNotes();

  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Writing"
        description="These notes document what I'm learning and how I currently understand it. Corrections and thoughtful discussions are always welcome."
      />
      <Container className="py-16 sm:py-20">
        {seriesWithNotes.length > 0 && (
          <div className="mb-16">
            <div className="font-mono-label mb-6 text-xs uppercase tracking-[0.14em] text-ink-muted">
              Browse by series
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {seriesWithNotes.map(({ series, notes: seriesNotes }) => (
                <SeriesCard key={series.slug} series={series} notes={seriesNotes} />
              ))}
            </div>
          </div>
        )}

        <NotesFilter notes={notes} categories={noteCategories} />
      </Container>
    </>
  );
}
