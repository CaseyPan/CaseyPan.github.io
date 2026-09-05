import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { GithubIcon } from "@/components/ui/BrandIcons";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold leading-snug text-ink">{project.name}</h3>
        <StatusBadge status={project.status} />
      </div>

      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{project.oneLiner}</p>

      <div className="mt-4 space-y-3 text-sm">
        <div>
          <p className="font-mono-label text-[11px] uppercase tracking-wide text-ink-soft/70">
            My contribution
          </p>
          <p className="mt-1 leading-relaxed text-ink-soft">{project.contribution}</p>
        </div>

        {project.keyDecisions.length > 0 && (
          <div>
            <p className="font-mono-label text-[11px] uppercase tracking-wide text-ink-soft/70">
              Key decisions
            </p>
            <ul className="mt-1 list-disc space-y-1 pl-4 leading-relaxed text-ink-soft">
              {project.keyDecisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-sm">
        {project.githubHref ? (
          <Link
            href={project.githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-accent-ink"
          >
            <GithubIcon className="h-4 w-4" /> Code
          </Link>
        ) : (
          <span className="font-mono-label inline-flex items-center gap-1.5 text-xs text-ink-soft/50">
            <GithubIcon className="h-4 w-4" /> repo TODO
          </span>
        )}
        {project.demoHref ? (
          <Link
            href={project.demoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-accent-ink"
          >
            <ExternalLink className="h-4 w-4" /> Demo
          </Link>
        ) : null}
      </div>
    </Card>
  );
}
