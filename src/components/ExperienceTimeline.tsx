import { Tag } from "@/components/ui/Tag";
import { Card } from "@/components/ui/Card";
import { MapPin, Calendar } from "lucide-react";
import type { Role } from "@/data/experience";

export function ExperienceTimeline({ roles }: { roles: Role[] }) {
  return (
    <ol className="relative space-y-10 border-l border-border pl-8 sm:pl-10">
      {roles.map((role) => (
        <li key={role.id} className="relative">
          <span
            className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg sm:-left-[calc(2.5rem+5px)]"
            aria-hidden="true"
          />
          <Card hover={false}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-ink">{role.title}</h3>
                <p className="mt-0.5 text-sm font-medium text-accent-ink">{role.company}</p>
              </div>
              <div className="font-mono-label flex flex-col items-end gap-1 text-xs text-ink-soft">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {role.startDate} — {role.endDate}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {role.location}
                </span>
              </div>
            </div>

            {role.context && (
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{role.context}</p>
            )}

            <ul className="mt-4 space-y-2">
              {role.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-ink">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-4">
              {role.technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </Card>
        </li>
      ))}
    </ol>
  );
}
