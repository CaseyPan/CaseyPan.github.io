import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { NotesFilter } from "@/components/NotesFilter";
import { getAllNotesMeta, noteCategories } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Notes",
  description: "Engineering and learning notes on systems, infrastructure, and AI infrastructure.",
};

export default function NotesPage() {
  const notes = getAllNotesMeta();

  return (
    <>
      <PageHeader
        eyebrow="Engineering notes"
        title="Notes"
        description="These notes document what I'm learning and how I currently understand it. Corrections and thoughtful discussions are always welcome."
      />
      <Container className="py-16 sm:py-20">
        <NotesFilter notes={notes} categories={noteCategories} />
      </Container>
    </>
  );
}
