import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { NoteCard } from "@/components/NoteCard";
import { getNotesInSeries } from "@/lib/notes";
import { seriesList, getSeriesInfo } from "@/data/series";

export function generateStaticParams() {
  return seriesList.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const series = getSeriesInfo(slug);
  if (!series) return {};
  return { title: series.title, description: series.description };
}

export default async function SeriesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const series = getSeriesInfo(slug);
  if (!series) notFound();

  const notes = getNotesInSeries(slug);

  return (
    <>
      <PageHeader eyebrow="Series" title={series.title} description={series.description} />
      <Container className="py-16 sm:py-20">
        {notes.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-10 text-center">
            <p className="text-sm text-ink-soft">
              No notes in this series yet — check back soon.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {notes.map((note, i) => (
              <div key={note.slug} className="relative">
                <span className="font-mono-label absolute -top-3 left-4 z-10 rounded-full border border-border bg-bg px-2.5 py-0.5 text-[11px] text-ink-soft">
                  Part {i + 1}
                </span>
                <NoteCard note={note} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
