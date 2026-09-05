import { ReactNode } from "react";

export function Card({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_2px_rgba(40,36,43,0.04)] ${
        hover
          ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(184,77,104,0.08)] hover:border-accent/40"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
