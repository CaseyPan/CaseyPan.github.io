import Image from "next/image";
import { Sparkle } from "@/components/ui/Doodles";

export function Portrait({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto ${className}`}>
      <div
        className="absolute left-1/2 top-[8%] -z-10 aspect-square w-[85%] -translate-x-1/2 rounded-full bg-highlight"
        aria-hidden="true"
      />
      <div
        className="absolute -right-2 bottom-[6%] -z-10 aspect-square w-[38%] rounded-full bg-sage/25"
        aria-hidden="true"
      />

      <Image
        src="/images/casey-portrait.png"
        alt="Portrait of Casey"
        width={879}
        height={900}
        priority
        className="relative h-auto w-full drop-shadow-[0_18px_28px_rgba(40,36,43,0.16)]"
      />

      <Sparkle className="absolute right-[6%] top-[4%] h-5 w-5 text-accent" />
      <span className="absolute -left-1 bottom-[18%] h-2 w-2 rounded-full bg-accent/70" aria-hidden="true" />
    </div>
  );
}
