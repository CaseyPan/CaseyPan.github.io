"use client";

import { useMemo, useState } from "react";
import { Tag } from "@/components/ui/Tag";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project, ProjectCategory } from "@/data/projects";

const categories: ProjectCategory[] = [
  "Systems",
  "Infrastructure",
  "AI Infrastructure",
  "Machine Learning",
  "Developer Tools",
  "Performance",
];

export function ProjectsFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const filtered = useMemo(
    () =>
      active === "All" ? projects : projects.filter((p) => p.categories.includes(active)),
    [active, projects]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        <Tag as="button" active={active === "All"} onClick={() => setActive("All")}>
          All
        </Tag>
        {categories.map((category) => (
          <Tag
            key={category}
            as="button"
            active={active === category}
            onClick={() => setActive(category)}
          >
            {category}
          </Tag>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-sm text-ink-soft">
          No projects in this category yet — check back soon.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
