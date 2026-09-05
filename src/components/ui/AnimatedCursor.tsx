export function AnimatedCursor({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block h-[1em] w-[2px] translate-y-[0.1em] bg-accent motion-safe:animate-blink ${className}`}
      aria-hidden="true"
    />
  );
}
