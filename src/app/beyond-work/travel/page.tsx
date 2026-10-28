import type { Metadata } from "next";
import { MapPin, Plane } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { travel } from "@/data/travel";

export const metadata: Metadata = {
  title: "Travel",
  description: "Countries I've visited, and where I'm headed next.",
};

export default function TravelPage() {
  return (
    <>
      <PageHeader
        eyebrow="Beyond Work · Travel"
        title="Places I've been"
        description="A running list of where I've traveled, and what's next on the list."
      />
      <Container className="py-16 sm:py-20">
        {travel.nextStop && (
          <div className="mb-10 flex items-start gap-4 rounded-2xl border border-accent/30 bg-highlight p-6">
            <Plane className="mt-1 h-5 w-5 shrink-0 text-accent-ink" aria-hidden="true" />
            <div>
              <p className="font-mono-label text-[11px] uppercase tracking-wide text-accent-ink">
                Next stop
              </p>
              <p className="font-serif-display mt-1 text-xl text-ink">{travel.nextStop.name}</p>
              {travel.nextStop.note && (
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {travel.nextStop.note}
                </p>
              )}
            </div>
          </div>
        )}

        {travel.visited.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-10 text-center">
            <p className="text-sm text-ink-soft">
              The travel list is still being put together — check back soon.
            </p>
          </div>
        ) : (
          <>
            <p className="font-mono-label mb-6 text-xs uppercase tracking-wide text-ink-soft/70">
              {travel.visited.length} {travel.visited.length === 1 ? "country" : "countries"}{" "}
              visited
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {travel.visited.map((country) => (
                <div
                  key={country.name}
                  className="rounded-xl border border-border bg-surface p-5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-sage" aria-hidden="true" />
                      <h3 className="text-sm font-semibold text-ink">{country.name}</h3>
                    </div>
                    {country.year && (
                      <span className="font-mono-label text-[11px] text-ink-soft/70">
                        {country.year}
                      </span>
                    )}
                  </div>
                  {country.note && (
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{country.note}</p>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </Container>
    </>
  );
}
