import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { CircuitLine } from "@/components/ui/Doodles";
import { exploration } from "@/data/exploration";
import { Compass, Hammer, Target } from "lucide-react";

const fields = [
  { label: "Current focus", value: exploration.currentFocus, icon: Compass },
  { label: "Currently building", value: exploration.currentlyBuilding, icon: Hammer },
  { label: "Next learning goal", value: exploration.nextLearningGoal, icon: Target },
];

export function ExplorationSection() {
  return (
    <section className="relative py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-2 top-0 hidden h-full text-sage/40 md:block">
            <CircuitLine className="h-full w-10" />
          </div>

          <SectionHeading
            eyebrow="AI Systems Lab · Currently exploring"
            title="Learning how ML systems become reliable products"
            description={exploration.intro}
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {fields.map((field, i) => (
              <MotionReveal key={field.label} delay={i * 0.06}>
                <div className="flex gap-3 rounded-xl border border-border bg-bg p-5">
                  <field.icon className="mt-0.5 h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
                  <div>
                    <p className="font-mono-label text-[11px] uppercase tracking-wide text-ink-soft/70">
                      {field.label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink">{field.value}</p>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-ink-soft/80">
            This is learning-in-progress, not professional ML infrastructure
            experience — I&apos;m sharing it openly because I think building in
            public is a better way to grow than hiding the early, messy parts.
          </p>
        </div>
      </Container>
    </section>
  );
}
