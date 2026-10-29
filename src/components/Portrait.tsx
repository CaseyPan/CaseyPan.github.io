import Image from "next/image";

export function Portrait({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto ${className}`}>
      <Image
        src="/images/casey-portrait.png"
        alt="Portrait of Casey"
        width={879}
        height={900}
        priority
        className="h-auto w-full drop-shadow-[0_12px_20px_rgba(23,23,23,0.1)]"
      />
    </div>
  );
}
