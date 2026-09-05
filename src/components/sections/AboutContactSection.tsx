import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FlowerDoodle } from "@/components/ui/Doodles";
import { profile } from "@/data/profile";

export function AboutContactSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 rounded-3xl border border-border bg-highlight/60 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="font-mono-label mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-accent-ink">
              <FlowerDoodle className="h-4 w-4 text-accent" />
              About
            </div>
            <h2 className="font-serif-display text-3xl leading-tight text-ink sm:text-4xl">
              Thoughtful, curious, and grounded in how things actually break.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
              I like problems where correctness and performance both matter —
              the kind that force you to understand a system, not just call
              its API. I&apos;m building toward applied ML and AI
              infrastructure from a systems foundation, and I write about
              what I learn along the way.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-ink hover:underline"
            >
              More about me <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-col items-start gap-3 lg:items-end">
            <p className="max-w-xs text-sm text-ink-soft lg:text-right">
              Open to conversations with recruiters, hiring managers,
              engineers, and fellow builders.
            </p>
            <Link
              href={profile.social.email}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-accent-ink hover:shadow-md"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
