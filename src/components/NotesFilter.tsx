"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { NoteCard } from "@/components/NoteCard";
import type { NoteCategory, NoteMeta } from "@/lib/notes";

export function NotesFilter({
  notes,
  categories,
}: {
  notes: NoteMeta[];
  categories: NoteCategory[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<NoteCategory | "All">("All");
  const [tag, setTag] = useState<string | null>(null);

  const allTags = useMemo(
    () => Array.from(new Set(notes.flatMap((n) => n.tags))).sort(),
    [notes]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return notes.filter((note) => {
      const matchesQuery =
        q.length === 0 ||
        note.title.toLowerCase().includes(q) ||
        note.summary.toLowerCase().includes(q);
      const matchesCategory = category === "All" || note.category === category;
      const matchesTag = !tag || note.tags.includes(tag);
      return matchesQuery && matchesCategory && matchesTag;
    });
  }, [notes, query, category, tag]);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="relative max-w-sm">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft/60" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search notes..."
            aria-label="Search notes"
            className="w-full rounded-full border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-ink-soft/50 focus:border-accent"
          />
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          <Tag as="button" active={category === "All"} onClick={() => setCategory("All")}>
            All categories
          </Tag>
          {categories.map((c) => (
            <Tag key={c} as="button" active={category === c} onClick={() => setCategory(c)}>
              {c}
            </Tag>
          ))}
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by tag">
          {allTags.map((t) => (
            <Tag key={t} as="button" active={tag === t} onClick={() => setTag(tag === t ? null : t)}>
              #{t}
            </Tag>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 rounded-2xl border border-dashed border-border p-10 text-center">
          <p className="text-sm text-ink-soft">
            No notes match your filters yet. Try clearing the search or picking a
            different tag.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      )}
    </div>
  );
}
