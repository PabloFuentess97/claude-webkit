import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, Layout, ShoppingBag, Palette } from "lucide-react";
import { getPortfolio } from "@/lib/payload/queries";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Wyweb — Diseño y desarrollo web",
  description:
    "Agencia digital del grupo Uxea. Landings, webs corporativas, aplicaciones a medida y ecommerce.",
};

const servicios = [
  {
    icon: Layout,
    title: "Landing pages",
    description:
      "Páginas de conversión pensadas para captar. Copy, diseño y medición, todo incluido.",
  },
  {
    icon: Code2,
    title: "Desarrollo a medida",
    description:
      "Aplicaciones web, portales internos e integraciones — Next.js, Node, lo que pida el proyecto.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description:
      "Tiendas en Shopify, WooCommerce o a medida. Pagos, envíos, facturación. Sin fricciones.",
  },
  {
    icon: Palette,
    title: "Diseño y branding",
    description:
      "Identidad, sistema de diseño y guías de marca. Para que la web no sea un parche estético.",
  },
];

export default async function WywebPage() {
  const portfolio = await getPortfolio();
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-50" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(600px_circle_at_50%_0%,rgba(139,92,246,0.12),transparent_60%)]" />

        <div className="mx-auto max-w-7xl px-6 pt-20 pb-20 md:pt-28 md:pb-28 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-white">
              <Code2 className="h-5 w-5" />
            </span>
            <span className="font-display text-sm font-semibold tracking-tight">
              Wyweb
            </span>
          </div>

          <h1 className="mt-8 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Páginas que convierten. Código que se mantiene.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
            Wyweb es la división de diseño y desarrollo web del grupo.
            Construimos desde una landing para captar hasta plataformas
            internas complejas — sin plantillas recicladas.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="#portfolio" size="lg">
              Ver portfolio
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/contacto" variant="secondary" size="lg">
              Empezar un proyecto
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Servicios"
          title="Qué hacemos en Wyweb."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {servicios.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {s.description}
                </p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section id="portfolio" className="border-t border-border bg-surface/30">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title="Algunos proyectos recientes."
            description="Muestra sin adornos. Cada uno resolvía algo concreto."
          />
          <Link
            href="/contacto"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-hover"
          >
            Cuéntanos tu idea
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item) => (
            <li key={item.id}>
              <article className="group h-full overflow-hidden rounded-xl border border-border bg-bg transition-colors hover:border-border-strong">
                <div
                  className={`relative h-44 bg-gradient-to-br ${item.gradient}`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_40%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.3),transparent_40%)]" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="rounded-full bg-black/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur">
                      {item.category}
                    </span>
                    <span className="font-mono text-[11px] text-white/80">
                      {item.year}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
                    {item.client}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {item.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                    Caso próximamente
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-border">
        <div className="rounded-3xl border border-border bg-surface p-8 md:p-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">
                Cómo trabajamos
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Proceso corto, decisiones claras.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-fg-muted">
                Ni 30 reuniones ni waterfall eterno. Entendemos el problema,
                acordamos el alcance, entregamos en sprints de dos semanas.
              </p>
            </div>
            <ol className="space-y-5 text-sm">
              {[
                { step: "01", title: "Descubrimiento", body: "Entendemos negocio, usuarios y restricciones." },
                { step: "02", title: "Propuesta", body: "Alcance, tiempos y precio cerrado." },
                { step: "03", title: "Diseño y desarrollo", body: "Iteramos en vivo sobre el proyecto real." },
                { step: "04", title: "Lanzamiento y soporte", body: "Desplegamos y mantenemos." },
              ].map((s) => (
                <li key={s.step} className="flex gap-4 border-b border-border pb-5 last:border-0 last:pb-0">
                  <span className="font-mono text-xs text-fg-subtle">
                    {s.step}
                  </span>
                  <div>
                    <p className="font-display font-semibold">{s.title}</p>
                    <p className="mt-1 text-fg-muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>
    </>
  );
}
