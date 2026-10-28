import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Plane, Sprout, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { books } from "@/data/books";
import { travel } from "@/data/travel";
import { getAllGrowthNotes } from "@/lib/growth";

export const metadata: Metadata = {
  title: "Beyond Work",
  description: "Books I've read, places I've been, and the occasional reflection — the side of me that doesn't fit on a resume.",
};

export default function BeyondWorkPage() {
  const growthNotes = getAllGrowthNotes();

  const cards = [
    {
      href: "/beyond-work/books",
      icon: BookOpen,
      title: "Books",
      description: "What I've been reading, and what I thought of it.",
      meta: `${books.length} ${books.length === 1 ? "book" : "books"} reviewed`,
    },
    {
      href: "/beyond-work/travel",
      icon: Plane,
      title: "Travel",
      description: "Where I've been, and where I'm headed next.",
      meta:
        travel.visited.length > 0
          ? `${travel.visited.length} countries`
          : "Just getting started",
    },
    {
      href: "/beyond-work/growth",
      icon: Sprout,
      title: "Growth Notes",
      description: "Reflections that don't quite fit under Engineering Notes.",
      meta: growthNotes.length > 0 ? `${growthNotes.length} entries` : "Coming soon",
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Beyond Work"
        title="The rest of me"
        description="Besides an engineer, I am also everything else. :D"
      />
      <Container className="py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_12px_24px_rgba(184,77,104,0.08)]"
            >
              <card.icon className="h-5 w-5 text-accent" aria-hidden="true" />
              <h2 className="font-serif-display mt-3 text-xl text-ink">{card.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                {card.description}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="font-mono-label text-[11px] uppercase tracking-wide text-ink-soft/70">
                  {card.meta}
                </span>
                <ArrowRight className="h-4 w-4 text-accent-ink transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
