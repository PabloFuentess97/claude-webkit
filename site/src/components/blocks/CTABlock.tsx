import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";

type Cta = { label?: string | null; href?: string | null } | null;

export type CTABlockData = {
  blockType: "cta";
  eyebrow?: string | null;
  heading: string;
  description?: string | null;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  variant?: "boxed" | "inline" | null;
};

export default function CTABlock({ data }: { data: CTABlockData }) {
  const variant = data.variant ?? "boxed";

  if (variant === "inline") {
    return (
      <Section className="border-t border-border">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="max-w-xl font-display text-2xl font-semibold tracking-tight md:text-3xl">
            {data.heading}
          </h2>
          {data.primaryCta?.label && data.primaryCta?.href && (
            <Link
              href={data.primaryCta.href}
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-md bg-brand px-5 text-[15px] font-medium text-white hover:bg-brand-hover"
            >
              {data.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </Section>
    );
  }

  return (
    <Section className="pb-28">
      <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-surface px-8 py-16 md:px-14 md:py-20">
        <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-40" />
        <div className="absolute inset-x-0 top-0 -z-10 h-64 glow-brand" />

        <div className="max-w-3xl">
          {data.eyebrow && (
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">
              {data.eyebrow}
            </p>
          )}
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance md:text-5xl">
            {data.heading}
          </h2>
          {data.description && (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">
              {data.description}
            </p>
          )}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {data.primaryCta?.label && data.primaryCta?.href && (
              <Link
                href={data.primaryCta.href}
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-md bg-brand px-5 text-[15px] font-medium text-white hover:bg-brand-hover shadow-[0_0_0_1px_rgba(37,99,235,0.3),0_8px_24px_-8px_rgba(37,99,235,0.5)]"
              >
                {data.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            {data.secondaryCta?.label && data.secondaryCta?.href && (
              <Link
                href={data.secondaryCta.href}
                className="inline-flex h-11 items-center justify-center rounded-md border border-border-strong bg-surface px-5 text-[15px] font-medium text-fg hover:bg-surface-2"
              >
                {data.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
