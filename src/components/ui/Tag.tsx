export function Tag({
  children,
  active = false,
  onClick,
  as: Comp = "span",
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  as?: "span" | "button";
}) {
  const base =
    "font-mono-label inline-flex items-center rounded-full border px-3 py-1 text-xs tracking-tight transition-colors duration-150";
  const state = active
    ? "border-accent bg-highlight text-accent-ink"
    : "border-border bg-surface text-ink-soft hover:border-accent hover:text-accent-ink";

  if (Comp === "button") {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${base} ${state} cursor-pointer`}
        aria-pressed={active}
      >
        {children}
      </button>
    );
  }

  return <span className={`${base} ${state}`}>{children}</span>;
}
