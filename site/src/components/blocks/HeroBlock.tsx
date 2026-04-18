import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

type Cta = { label?: string | null; href?: string | null } | null;
type Stat = { label: string; value: string; id?: string | null };

export type HeroBlockData = {
  blockType: "hero";
  eyebrow?: string | null;
  heading: string;
  highlight?: string | null;
  subheading?: string | null;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  stats?: Stat[] | null;
};

function Highlighted({
  text,
  highlight,
}: {
  text: string;
  highlight?: string | null;
}) {
  if (!highlight || !text.includes(highlight)) return <>{text}</>;
  const [before, ...rest] = text.split(highlight);
  const after = rest.join(highlight);
  return (
    <>
      {before}
      <span className="relative whitespace-nowrap">
        <span className="relative z-10 text-brand">{highlight}</span>
        <svg
          aria-hidden
          className="absolute -bottom-1 left-0 z-0 h-2 w-full text-brand/30"
          viewBox="0 0 200 8"
          preserveAspectRatio="none"
        >
          <path
            d="M0 4 Q 50 0 100 4 T 200 4"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </span>
      {after}
    </>
  );
}

export default function HeroBlock({ data }: { data: HeroBlockData }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-60" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] glow-brand" />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 lg:px-8">
        <div className="max-w-4xl">
          {data.eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-fg-muted backdrop-blur">
              <Sparkles className="h-3 w-3 text-brand" />
              {data.eyebrow}
            </span>
          )}

          <h1 className="mt-6 font-display text-[40px] font-semibold leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl">
            <Highlighted text={data.heading} highlight={data.highlight} />
          </h1>

          {data.subheading && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted md:text-xl">
              {data.subheading}
            </p>
          )}

          <div className="mt-9 flex flex-wrap items-center gap-3">
            {data.primaryCta?.label && data.primaryCta?.href && (
              <Link
                href={data.primaryCta.href}
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-md bg-brand px-5 text-[15px] font-medium text-white transition-colors hover:bg-brand-hover shadow-[0_0_0_1px_rgba(37,99,235,0.3),0_8px_24px_-8px_rgba(37,99,235,0.5)]"
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

          {data.stats && data.stats.length > 0 && (
            <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-8 border-t border-border pt-8">
              {data.stats.map((stat, i) => (
                <div key={stat.id ?? i}>
                  <dt className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-semibold md:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </section>
  );
}
