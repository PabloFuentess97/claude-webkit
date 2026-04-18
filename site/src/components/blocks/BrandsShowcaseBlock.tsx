import Link from "next/link";
import { ArrowRight, Cloud, Code2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

const accentClasses: Record<
  string,
  { grad: string; border: string; icon: string; iconBg: string }
> = {
  blue: {
    grad: "from-blue-500/20 via-blue-500/10 to-transparent",
    border: "group-hover:border-blue-500/40",
    icon: "text-white",
    iconBg: "bg-brand",
  },
  violet: {
    grad: "from-violet-500/20 via-violet-500/10 to-transparent",
    border: "group-hover:border-violet-500/40",
    icon: "text-white",
    iconBg: "bg-accent",
  },
  emerald: {
    grad: "from-emerald-500/20 via-emerald-500/10 to-transparent",
    border: "group-hover:border-emerald-500/40",
    icon: "text-white",
    iconBg: "bg-emerald-500",
  },
  amber: {
    grad: "from-amber-500/20 via-amber-500/10 to-transparent",
    border: "group-hover:border-amber-500/40",
    icon: "text-white",
    iconBg: "bg-amber-500",
  },
};

export type BrandsShowcaseBlockData = {
  blockType: "brandsShowcase";
  eyebrow?: string | null;
  heading: string;
  description?: string | null;
  brands: Array<{
    id?: string | null;
    name: string;
    tagline?: string | null;
    description?: string | null;
    href: string;
    accent?: "blue" | "violet" | "emerald" | "amber" | null;
    tags?: Array<{ label: string; id?: string | null }> | null;
  }>;
};

export default function BrandsShowcaseBlock({
  data,
}: {
  data: BrandsShowcaseBlockData;
}) {
  return (
    <Section className="border-t border-border bg-surface/40">
      <SectionHeading
        eyebrow={data.eyebrow ?? undefined}
        title={data.heading}
        description={data.description ?? undefined}
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {data.brands.map((brand, idx) => {
          const accent = accentClasses[brand.accent ?? "blue"];
          const Icon = idx === 0 ? Cloud : Code2;
          return (
            <Link
              key={brand.id ?? brand.name}
              href={brand.href}
              className={`group relative isolate overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-border-strong ${accent.border}`}
            >
              <div
                className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${accent.grad} opacity-70 transition-opacity group-hover:opacity-100`}
              />
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-lg ${accent.iconBg} ${accent.icon}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-subtle">
                  Sub-marca
                </span>
              </div>

              <div className="mt-10">
                <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  {brand.name}
                </h3>
                {brand.tagline && (
                  <p className="mt-2 text-base text-fg-muted">{brand.tagline}</p>
                )}
                {brand.description && (
                  <p className="mt-5 max-w-md leading-relaxed text-fg-muted">
                    {brand.description}
                  </p>
                )}

                {brand.tags && brand.tags.length > 0 && (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {brand.tags.map((t) => (
                      <li
                        key={t.id ?? t.label}
                        className="rounded-full border border-border bg-bg/60 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-muted backdrop-blur"
                      >
                        {t.label}
                      </li>
                    ))}
                  </ul>
                )}

                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors group-hover:text-brand">
                  Entrar
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
