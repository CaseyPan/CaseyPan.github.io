import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";

export function ConnectSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <h2 className="font-serif-display text-3xl text-ink sm:text-4xl">
            Let&apos;s connect. <span aria-hidden="true">✳</span>
          </h2>
          <p className="mt-3 text-base text-ink-soft">
            For engineering, interesting ideas, or a good conversation.
          </p>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm">
            <Link
              href={profile.social.email}
              className="inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-ink"
            >
              <Mail className="h-4 w-4" /> Email
            </Link>
            <Link
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-ink"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </Link>
            <Link
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-ink"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
