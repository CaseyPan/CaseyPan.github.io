import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimatedCursor } from "@/components/ui/AnimatedCursor";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="pb-16 pt-14 sm:pb-24 sm:pt-20">
      <Container>
        <div className="max-w-2xl motion-safe:animate-fade-up">
          <p className="font-mono-label text-xs uppercase tracking-[0.14em] text-ink-muted">
            {profile.role.toUpperCase()} · {profile.location.split(",")[0].toUpperCase()}
          </p>

          <h1 className="font-serif-display mt-4 text-4xl leading-[1.1] text-ink sm:text-5xl">
            Hi, I&apos;m {profile.name}.
            <AnimatedCursor className="ml-1" />
          </h1>

          <p className="mt-3 font-serif-display text-xl italic text-ink-soft sm:text-2xl">
            {profile.heroTagline}
          </p>

          <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
            {profile.heroIntro}
          </p>

          <p className="font-mono-label mt-4 text-xs text-ink-muted">{profile.heroTechLine}</p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/experience"
              className="text-sm font-medium text-ink underline decoration-border underline-offset-4 transition-colors hover:decoration-ink"
            >
              Explore my work ↗
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-ink-soft underline decoration-border underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
            >
              A little about me ↗
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
