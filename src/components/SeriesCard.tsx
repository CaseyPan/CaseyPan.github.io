import Link from "next/link";
import { Layers, ArrowRight } from "lucide-react";
import type { SeriesInfo } from "@/data/series";
import type { NoteMeta } from "@/lib/notes";

export function SeriesCard({ series, notes }: { series: SeriesInfo; notes: NoteMeta[] }) {
  return (
    <Link
      href={`/notes/series/${series.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_12px_24px_rgba(184,77,104,0.08)]"
    >
      <div className="flex items-start justify-between gap-3">
        <Layers className="h-4 w-4 text-sage" aria-hidden="true" />
        <span className="font-mono-label text-[11px] uppercase tracking-wide text-ink-soft/70">
          {notes.length} {notes.length === 1 ? "note" : "notes"}
        </span>
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-snug text-ink">{series.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{series.description}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-ink">
        Browse series
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
