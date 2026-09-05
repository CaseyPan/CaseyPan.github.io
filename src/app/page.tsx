import { Hero } from "@/components/sections/Hero";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { ProjectsPreviewSection } from "@/components/sections/ProjectsPreviewSection";
import { ExplorationSection } from "@/components/sections/ExplorationSection";
import { NotesPreviewSection } from "@/components/sections/NotesPreviewSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { AboutContactSection } from "@/components/sections/AboutContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="divide-y divide-border">
        <ImpactSection />
        <ProjectsPreviewSection />
        <ExplorationSection />
        <NotesPreviewSection />
        <SkillsSection />
        <AboutContactSection />
      </div>
    </>
  );
}
