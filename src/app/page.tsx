import { Hero } from "@/components/sections/Hero";
import { EngineeringHighlightsSection } from "@/components/sections/EngineeringHighlightsSection";
import { LifeOutsideSection } from "@/components/sections/LifeOutsideSection";
import { CuriousMindSection } from "@/components/sections/CuriousMindSection";
import { ConnectSection } from "@/components/sections/ConnectSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="divide-y divide-border">
        <EngineeringHighlightsSection />
        <LifeOutsideSection />
        <CuriousMindSection />
        <ConnectSection />
      </div>
    </>
  );
}
