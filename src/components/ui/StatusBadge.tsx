import type { ProjectStatus } from "@/data/projects";

const statusStyles: Record<ProjectStatus, string> = {
  SHIPPED: "bg-sage/15 text-sage border-sage/30",
  BUILDING: "bg-highlight text-accent-ink border-accent/30",
  EXPLORING: "bg-border/40 text-ink-soft border-border",
};

const statusDot: Record<ProjectStatus, string> = {
  SHIPPED: "bg-sage",
  BUILDING: "bg-accent",
  EXPLORING: "bg-ink-soft",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`font-mono-label inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] tracking-wide ${statusStyles[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${statusDot[status]}`} aria-hidden="true" />
      {status}
    </span>
  );
}
