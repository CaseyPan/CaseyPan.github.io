import type { TocEntry } from "@/lib/toc";

export function TableOfContents({ toc }: { toc: TocEntry[] }) {
  if (toc.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="sticky top-24">
      <p className="font-mono-label text-[11px] uppercase tracking-wide text-ink-soft/70">
        On this page
      </p>
      <ul className="mt-3 space-y-2 border-l border-border pl-4 text-sm">
        {toc.map((entry) => (
          <li key={entry.id} className={entry.depth === 3 ? "pl-3" : ""}>
            <a
              href={`#${entry.id}`}
              className="text-ink-soft transition-colors hover:text-accent-ink"
            >
              {entry.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
