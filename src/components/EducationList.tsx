import { GraduationCap, MapPin, Calendar } from "lucide-react";
import type { Education } from "@/data/education";

export function EducationList({ items }: { items: Education[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {items.map((edu) => (
        <div key={edu.school} className="rounded-2xl border border-border bg-surface p-6">
          <div className="flex items-start gap-3">
            <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
            <div>
              <h3 className="text-base font-semibold text-ink">{edu.school}</h3>
              <p className="mt-0.5 text-sm text-accent-ink">{edu.degree}</p>
              {edu.note && <p className="mt-0.5 text-sm text-ink-soft">{edu.note}</p>}
            </div>
          </div>
          <div className="font-mono-label mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-soft">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> {edu.startDate} — {edu.endDate}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {edu.location}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
