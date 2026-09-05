import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { NoteCard } from "@/components/NoteCard";
import { getLatestNotes } from "@/lib/notes";

export function NotesPreviewSection() {
  const notes = getLatestNotes(3);
  if (notes.length === 0) return null;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Latest notes"
            title="Notes from what I'm building and learning"
            description="Short, practical write-ups — some from professional systems work, some from learning AI infrastructure in the open."
          />
          <Link
            href="/notes"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-accent-ink hover:underline"
          >
            All notes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {notes.map((note, i) => (
            <MotionReveal key={note.slug} delay={i * 0.06}>
              <NoteCard note={note} />
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
