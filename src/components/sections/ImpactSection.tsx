import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { impactStories } from "@/data/impact";

export function ImpactSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Selected engineering impact"
          title="Work that shipped and moved a number"
          description="A few stories from professional work, with the problem, what I did, and the result — not just a headline metric."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {impactStories.map((story, i) => (
            <MotionReveal key={story.title} delay={i * 0.08}>
              <Card className="flex h-full flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif-display text-4xl text-accent-ink">
                    {story.metric}
                  </span>
                  <span className="font-mono-label text-xs uppercase tracking-wide text-ink-soft">
                    {story.metricLabel}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-semibold text-ink">{story.title}</h3>

                <dl className="mt-4 space-y-3 text-sm text-ink-soft">
                  <div>
                    <dt className="font-mono-label text-[11px] uppercase tracking-wide text-ink-soft/70">
                      Problem
                    </dt>
                    <dd className="mt-1 leading-relaxed">{story.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-mono-label text-[11px] uppercase tracking-wide text-ink-soft/70">
                      My contribution
                    </dt>
                    <dd className="mt-1 leading-relaxed">{story.contribution}</dd>
                  </div>
                  <div>
                    <dt className="font-mono-label text-[11px] uppercase tracking-wide text-ink-soft/70">
                      Result
                    </dt>
                    <dd className="mt-1 leading-relaxed text-ink">{story.result}</dd>
                  </div>
                </dl>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-4">
                  {story.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
