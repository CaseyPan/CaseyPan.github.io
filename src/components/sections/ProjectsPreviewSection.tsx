import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsPreviewSection() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Selected projects"
            title="Projects that show how I build"
            description="A mix of shipped systems work and in-progress exploration into AI infrastructure — statuses are real, not aspirational."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-accent-ink hover:underline"
          >
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {featured.map((project, i) => (
            <MotionReveal key={project.slug} delay={i * 0.06}>
              <ProjectCard project={project} />
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
