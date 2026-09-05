import { ReactNode } from "react";
import { Info, TriangleAlert, Lightbulb } from "lucide-react";

type CalloutType = "note" | "warning" | "tip";

const styles: Record<
  CalloutType,
  { icon: typeof Info; classes: string }
> = {
  note: {
    icon: Info,
    classes: "border-sage/40 bg-sage/10 text-ink",
  },
  warning: {
    icon: TriangleAlert,
    classes: "border-accent/40 bg-highlight text-accent-ink",
  },
  tip: {
    icon: Lightbulb,
    classes: "border-border bg-bg text-ink",
  },
};

export function Callout({
  type = "note",
  children,
}: {
  type?: CalloutType;
  children: ReactNode;
}) {
  const { icon: Icon, classes } = styles[type];
  return (
    <div className={`not-prose my-6 flex gap-3 rounded-xl border px-5 py-4 text-sm leading-relaxed ${classes}`}>
      <Icon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      <div>{children}</div>
    </div>
  );
}
