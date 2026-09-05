import Link from "next/link";
import { ArrowRight, Download, NotebookPen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedCursor } from "@/components/ui/AnimatedCursor";
import { Portrait } from "@/components/Portrait";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-14 sm:pb-24 sm:pt-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="motion-safe:animate-fade-up">
            <p className="font-mono-label text-sm text-accent-ink">
              {profile.location} · Building in public
            </p>

            <h1 className="font-serif-display mt-4 text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              Hi, I&apos;m {profile.name}
              <AnimatedCursor className="ml-1" />
            </h1>

            <p className="font-serif-display mt-3 text-xl text-accent-ink sm:text-2xl">
              {profile.role} — {profile.roleSubtitle}
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {profile.heroLead} {profile.heroBody}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-accent-ink hover:shadow-md"
              >
                View my work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/notes"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-accent hover:text-accent-ink"
              >
                <NotebookPen className="h-4 w-4" />
                Read my notes
              </Link>
              <Link
                href={profile.resumeHref}
                download
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-accent-ink"
              >
                <Download className="h-4 w-4" />
                Résumé
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 font-mono-label text-xs text-ink-soft">
              <span>{profile.yearsExperience}+ yrs professional SWE</span>
              <span aria-hidden="true">·</span>
              <span>C++ / Python</span>
              <span aria-hidden="true">·</span>
              <span>Concurrency &amp; Systems</span>
            </div>
          </div>

          <Portrait className="w-full max-w-sm" />
        </div>
      </Container>
    </section>
  );
}
