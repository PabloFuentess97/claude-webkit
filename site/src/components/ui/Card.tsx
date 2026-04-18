import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

export function Card({
  children,
  className,
  as: As = "div",
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  interactive?: boolean;
}) {
  return (
    <As
      className={cn(
        "group relative rounded-xl border border-border bg-surface p-6 transition-colors",
        interactive &&
          "hover:border-border-strong hover:bg-surface-2",
        className
      )}
    >
      {children}
    </As>
  );
}
