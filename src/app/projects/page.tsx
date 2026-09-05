import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ProjectsFilter } from "@/components/ProjectsFilter";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Systems, infrastructure, and AI-infrastructure projects, each labeled with a real status.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Projects"
        description="A mix of production systems work and self-directed projects in AI and machine learning."
      />
      <Container className="py-16 sm:py-20">
        <ProjectsFilter projects={projects} />
      </Container>
    </>
  );
}
