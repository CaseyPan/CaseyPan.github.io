"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Sparkle } from "@/components/ui/Doodles";
import { primaryNav } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-serif-display flex items-center gap-1.5 text-lg text-ink"
            onClick={() => setOpen(false)}
          >
            <Sparkle className="h-4 w-4 text-accent" />
            {profile.name}
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {primaryNav.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3.5 py-2 text-sm transition-colors duration-150 ${
                    isActive
                      ? "text-accent-ink font-medium"
                      : "text-ink-soft hover:text-accent-ink"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={profile.resumeHref}
              download
              className="rounded-full border border-border px-3.5 py-2 text-sm text-ink-soft transition-colors hover:border-accent hover:text-accent-ink"
            >
              Résumé
            </a>
            <Link
              href={profile.social.email}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-ink"
            >
              <Mail className="h-3.5 w-3.5" />
              Contact
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-bg md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-base ${
                    isActive ? "bg-highlight text-accent-ink font-medium" : "text-ink-soft"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-2 flex items-center gap-2 border-t border-border pt-4">
              <a
                href={profile.resumeHref}
                download
                className="flex-1 rounded-full border border-border px-4 py-2.5 text-center text-sm text-ink-soft"
              >
                Résumé
              </a>
              <Link
                href={profile.social.email}
                className="flex-1 rounded-full bg-accent px-4 py-2.5 text-center text-sm font-medium text-white"
              >
                Contact
              </Link>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
