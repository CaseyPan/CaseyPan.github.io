import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Technical toolkit"
          title="Grouped honestly, not rated in percentages"
          description="Skills grouped by how much I've actually used them — professional experience, working systems knowledge, and what I'm currently learning."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <MotionReveal key={group.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-base font-semibold text-ink">{group.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{group.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
