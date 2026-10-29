import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { EducationList } from "@/components/EducationList";
import { roles } from "@/data/experience";
import { education } from "@/data/education";

export const metadata: Metadata = {
  title: "Work",
  description: "Professional experience across systems, performance, and reliability engineering.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Career"
        title="Work"
        description="Roles focused on performance, concurrency, reliability, and the software–hardware boundary."
      />
      <Container className="py-16 sm:py-20">
        <ExperienceTimeline roles={roles} />

        <div className="mt-16 border-t border-border pt-12">
          <div className="font-mono-label mb-6 text-xs uppercase tracking-[0.14em] text-ink-muted">
            Education
          </div>
          <EducationList items={education} />
        </div>
      </Container>
    </>
  );
}
