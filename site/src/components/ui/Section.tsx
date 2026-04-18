import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

export function Section({
  children,
  className,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      className={cn("py-20 md:py-28 lg:py-32", className)}
      {...rest}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-fg-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      {children}
    </span>
  );
}

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
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl",
          eyebrow && "mt-4"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-fg-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
