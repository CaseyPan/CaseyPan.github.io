import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div
          className={`font-mono-label mb-3 text-xs uppercase tracking-[0.14em] text-ink-muted ${
            align === "center" ? "text-center" : ""
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2 className="font-serif-display text-3xl leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-soft">{description}</p>
      )}
    </div>
  );
}
