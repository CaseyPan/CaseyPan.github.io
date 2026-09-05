import Link from "next/link";
import { Clock, FlaskConical } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import type { NoteMeta } from "@/lib/notes";

function formatDate(date: string) {
  return new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function NoteCard({ note }: { note: NoteMeta }) {
  return (
    <Link href={`/notes/${note.slug}`} className="block h-full">
      <Card className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono-label text-[11px] uppercase tracking-wide text-accent-ink">
            {note.category}
          </span>
          {note.sample && (
            <span
              className="font-mono-label inline-flex items-center gap-1 rounded-full border border-border bg-bg px-2 py-0.5 text-[10px] text-ink-soft"
              title="Sample content demonstrating the notes system"
            >
              <FlaskConical className="h-3 w-3" /> sample
            </span>
          )}
        </div>

        <h3 className="mt-3 text-lg font-semibold leading-snug text-ink">{note.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">
          {note.summary}
        </p>

        <div className="mt-4 flex items-center gap-3 text-xs text-ink-soft/80">
          <time dateTime={note.date}>{formatDate(note.date)}</time>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" /> {note.readingTime}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border pt-4">
          {note.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </Card>
    </Link>
  );
}
