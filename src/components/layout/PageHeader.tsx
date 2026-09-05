import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Sparkle } from "@/components/ui/Doodles";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <div className="border-b border-border bg-surface">
      <Container className="py-14 sm:py-20">
        <div className="font-mono-label mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-accent-ink">
          <Sparkle className="h-3.5 w-3.5 text-accent" />
          {eyebrow}
        </div>
        <h1 className="font-serif-display text-4xl leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {description}
          </p>
        )}
      </Container>
    </div>
  );
}
