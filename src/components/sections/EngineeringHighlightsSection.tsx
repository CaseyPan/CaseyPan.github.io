import Link from "next/link";
import { Container } from "@/components/ui/Container";

const highlights = [
  {
    metric: "60×",
    label: "Faster instrument ping time",
    category: "Concurrency · C++",
    description:
      "Reduced RF calibration instrument ping time from roughly 120 seconds to 2 seconds by fixing mutex contention and shared-memory handling across 4 concurrent devices.",
  },
  {
    metric: "50+",
    label: "Regressions resolved",
    category: "Reliability · Debugging",
    description:
      "Investigated and resolved 50+ critical regressions as technical DRI for customer-facing RF calibration software, across internal and customer environments.",
  },
];

export function EngineeringHighlightsSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <p className="font-mono-label text-xs uppercase tracking-[0.14em] text-ink-muted">
              01 / Engineering
            </p>
            <h2 className="font-serif-display mt-3 text-3xl text-ink sm:text-4xl">
              Things I&apos;ve built.
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden text-sm font-medium text-ink-soft underline decoration-border underline-offset-4 transition-colors hover:text-ink hover:decoration-ink sm:inline-block"
          >
            View all projects ↗
          </Link>
        </div>

        <div className="mt-10 grid gap-10 border-t border-border pt-10 sm:grid-cols-2 sm:gap-12">
          {highlights.map((item) => (
            <div key={item.label}>
              <p className="font-serif-display text-5xl text-ink">{item.metric}</p>
              <p className="mt-2 text-base font-medium text-ink">{item.label}</p>
              <p className="font-mono-label mt-1 text-xs text-ink-muted">{item.category}</p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/projects"
          className="mt-8 inline-block text-sm font-medium text-ink-soft underline decoration-border underline-offset-4 transition-colors hover:text-ink hover:decoration-ink sm:hidden"
        >
          View all projects ↗
        </Link>
      </Container>
    </section>
  );
}
