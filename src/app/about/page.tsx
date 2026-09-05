import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Download } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { FlowerDoodle, Dots } from "@/components/ui/Doodles";
import { Portrait } from "@/components/Portrait";
import { profile, narrative } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: "Casey's background, the problems they enjoy, and how they think about engineering.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={`Hi, I'm ${profile.name}`}
        description="A software engineer with a systems background, growing into applied ML and AI infrastructure."
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="max-w-2xl space-y-6 text-base leading-relaxed text-ink-soft">
            <p>
              I got into engineering through problems where being &ldquo;close
              enough&rdquo; wasn&apos;t good enough — code that has to run
              correctly under concurrency, stay fast under load, and talk to
              real hardware without falling over. For the past two years at
              MediaTek, that meant working on the DUT control systems and
              CI/CD pipelines behind RF calibration: optimizing a
              multi-threaded control system for four concurrent devices,
              tracking down I/O bottlenecks in the factory calibration
              pipeline, and owning reliability for customer-facing software as
              the team&apos;s technical DRI.
            </p>

            <p>
              I enjoy the kind of work that requires actually understanding a
              system — tracing a regression back to a mutex contention issue,
              finding the serialization point that&apos;s quietly limiting
              throughput, or building automation that has to coordinate
              multiple pieces of hardware without a human in the loop.
              It&apos;s less about writing a lot of code and more about
              writing the right code once you understand what&apos;s actually
              happening. Some of that instinct comes from graduate coursework
              at UIUC too — building a fault-tolerant distributed system for
              ML workloads in C++, and writing and profiling CUDA kernels to
              speed up CNN inference, both taught me a lot about where
              performance actually goes in a system versus where I assumed it
              did.
            </p>

            <p>
              That curiosity has pulled me further into applied ML than a
              typical systems role usually goes — building a real-time
              chatroom around a T5 model for content summarization, studying
              how adversarial attacks fool image classifiers across CNNs and
              ViTs, and now looking at how a model goes from a notebook to
              something that serves real traffic reliably. I&apos;d rather
              build in public and let the projects speak for where I actually
              am than lead with a title — and where I am is a systems
              engineer who has spent real time inside ML problems, with more
              still ahead of me.
            </p>

            <p>
              I write notes as I go, partly to force myself to explain things
              clearly and partly because I&apos;ve gotten more out of other
              people&apos;s learning-in-public notes than most polished
              tutorials. You&apos;ll find some of that under{" "}
              <Link href="/notes" className="text-accent-ink underline decoration-highlight underline-offset-2">
                Notes
              </Link>
              .
            </p>

            <p className="text-sm text-ink-soft/80">
              Outside of work, I&apos;m usually chasing a good cup of matcha,
              on a yoga mat, or watching a race weekend — F1 is my one true
              vice.
            </p>
          </div>

          <div className="space-y-6">
            <Portrait className="max-w-[260px]" />

            <Card hover={false} className="bg-highlight/50">
              <div className="font-mono-label mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-wide text-accent-ink">
                <FlowerDoodle className="h-4 w-4 text-accent" />
                The short version
              </div>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-medium text-ink">What I&apos;ve done</dt>
                  <dd className="mt-1 text-ink-soft">{narrative.done}</dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">What I can do next</dt>
                  <dd className="mt-1 text-ink-soft">{narrative.next}</dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Where I&apos;m growing</dt>
                  <dd className="mt-1 text-ink-soft">{narrative.growing}</dd>
                </div>
              </dl>
            </Card>

            <Card hover={false}>
              <p className="text-sm text-ink-soft">
                Recruiters, hiring managers, engineers, and fellow builders —
                I&apos;d genuinely like to hear from you.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href={profile.social.email}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-ink"
                >
                  <Mail className="h-4 w-4" /> Email me
                </Link>
                <a
                  href={profile.resumeHref}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:border-accent hover:text-accent-ink"
                >
                  <Download className="h-4 w-4" /> Download résumé
                </a>
              </div>
            </Card>

            <Dots className="h-2 w-16 text-accent/50" />
          </div>
        </div>
      </Container>
    </>
  );
}
