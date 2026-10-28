import type { Metadata } from "next";
import Link from "next/link";
import { Clock } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { getAllGrowthNotes } from "@/lib/growth";

export const metadata: Metadata = {
  title: "Growth Notes",
  description: "Personal reflections — the parts of learning that aren't technical.",
};

function formatDate(date: string) {
  return new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function GrowthPage() {
  const entries = getAllGrowthNotes();

  return (
    <>
      <PageHeader
        eyebrow="Beyond Work · Growth Notes"
        title="Personal reflections"
        description="The parts of learning and working that aren't technical — written for myself as much as anyone else."
      />
      <Container className="py-16 sm:py-20">
        {entries.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-10 text-center">
            <p className="text-sm text-ink-soft">No entries yet — check back soon.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {entries.map((entry) => (
              <Link key={entry.slug} href={`/beyond-work/growth/${entry.slug}`}>
                <Card className="flex h-full flex-col">
                  <h3 className="text-lg font-semibold leading-snug text-ink">{entry.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {entry.summary}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-ink-soft/80">
                    <time dateTime={entry.date}>{formatDate(entry.date)}</time>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {entry.readingTime}
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
