export function Sparkle({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2L13.8 9.2L21 11L13.8 12.8L12 20L10.2 12.8L3 11L10.2 9.2L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function FlowerDoodle({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="7" r="2.4" fill="currentColor" opacity="0.85" />
      <circle cx="17" cy="12" r="2.4" fill="currentColor" opacity="0.85" />
      <circle cx="12" cy="17" r="2.4" fill="currentColor" opacity="0.85" />
      <circle cx="7" cy="12" r="2.4" fill="currentColor" opacity="0.85" />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function CircuitLine({ className = "h-full w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 200"
      fill="none"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M16 0V40L4 52V90L16 102V140L28 152V200"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="40" r="3" fill="currentColor" />
      <circle cx="4" cy="52" r="3" fill="currentColor" />
      <circle cx="16" cy="140" r="3" fill="currentColor" />
      <circle cx="28" cy="152" r="3" fill="currentColor" />
    </svg>
  );
}

export function BracketDoodle({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 4C6 4 5 5.5 5 8V10.5C5 11.5 4.5 12 3.5 12C4.5 12 5 12.5 5 13.5V16C5 18.5 6 20 9 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15 4C18 4 19 5.5 19 8V10.5C19 11.5 19.5 12 20.5 12C19.5 12 19 12.5 19 13.5V16C19 18.5 18 20 15 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Dots({ className = "h-2 w-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 8" fill="none" className={className} aria-hidden="true">
      <circle cx="4" cy="4" r="3" fill="currentColor" />
      <circle cx="20" cy="4" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="36" cy="4" r="3" fill="currentColor" opacity="0.35" />
      <circle cx="52" cy="4" r="3" fill="currentColor" opacity="0.15" />
    </svg>
  );
}
