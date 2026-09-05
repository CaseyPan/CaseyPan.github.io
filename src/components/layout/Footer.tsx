import Link from "next/link";
import { Mail, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Sparkle } from "@/components/ui/Doodles";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="font-serif-display flex items-center gap-1.5 text-lg text-ink">
              <Sparkle className="h-4 w-4 text-accent" />
              {profile.name}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {profile.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono-label text-xs uppercase tracking-wide text-ink-soft/70">
              Elsewhere
            </span>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link
                href={profile.social.email}
                className="inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-accent-ink"
              >
                <Mail className="h-4 w-4" /> Email
              </Link>
              <Link
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-accent-ink"
              >
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </Link>
              <Link
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-accent-ink"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </Link>
              <Link
                href={profile.resumeHref}
                download
                className="inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-accent-ink"
              >
                <FileText className="h-4 w-4" /> Résumé
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse gap-2 border-t border-border pt-6 text-xs text-ink-soft/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {profile.name}. Built with care in the Bay Area.</p>
          <p className="font-mono-label">Thanks for reading this far ✦</p>
        </div>
      </Container>
    </footer>
  );
}
