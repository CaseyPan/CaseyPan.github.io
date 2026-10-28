// Note series — a grouping dimension on top of category/tags. A series
// only shows up in the public browser once it has at least one note
// (see getSeriesWithNotes in src/lib/notes.ts) — no empty "coming soon"
// cards. Add a note with a matching `series` slug and it appears here
// automatically.

export type SeriesInfo = {
  slug: string;
  title: string;
  description: string;
};

export const seriesList: SeriesInfo[] = [
  {
    slug: "cpp",
    title: "C++ Series",
    description: "Systems-level C++ — concurrency, memory, and the details that bite you in production.",
  },
  {
    slug: "llm-inference",
    title: "LLM Inference Series",
    description: "How large language models actually get served — batching, latency, throughput, and the infrastructure underneath.",
  },
  {
    slug: "system-design-interview",
    title: "System Design Interview Practice",
    description: "Working through system design interview problems, one write-up at a time.",
  },
];

export function getSeriesInfo(slug: string): SeriesInfo | undefined {
  return seriesList.find((s) => s.slug === slug);
}
