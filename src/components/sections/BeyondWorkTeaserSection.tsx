import Link from "next/link";
import { ArrowRight, BookOpen, Plane, Sprout } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FlowerDoodle } from "@/components/ui/Doodles";

const highlights = [
  { icon: BookOpen, label: "Books" },
  { icon: Plane, label: "Travel" },
  { icon: Sprout, label: "Growth notes" },
];

export function BeyondWorkTeaserSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 rounded-3xl border border-border bg-highlight/60 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="font-mono-label mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-accent-ink">
              <FlowerDoodle className="h-4 w-4 text-accent" />
              Beyond Work
            </div>
            <h2 className="font-serif-display text-3xl leading-tight text-ink sm:text-4xl">
              Get to know me beyond an engineer
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
              Besides an engineer, I am also everything else. :D
            </p>
            <Link
              href="/beyond-work"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-ink hover:underline"
            >
              Explore Beyond Work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex gap-4 sm:gap-6">
            {highlights.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface">
                  <item.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </span>
                <span className="font-mono-label text-[11px] text-ink-soft">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
