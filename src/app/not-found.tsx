import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Sparkle } from "@/components/ui/Doodles";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <Sparkle className="h-8 w-8 text-accent" />
      <h1 className="font-serif-display mt-4 text-4xl text-ink">Page not found</h1>
      <p className="mt-3 max-w-md text-base text-ink-soft">
        This page wandered off somewhere. Let&apos;s get you back to solid
        ground.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-ink"
      >
        Back to home <ArrowRight className="h-4 w-4" />
      </Link>
    </Container>
  );
}
