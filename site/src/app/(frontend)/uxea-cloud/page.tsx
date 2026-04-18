import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Cloud, Server, HardDrive } from "lucide-react";
import { getHostingPlans } from "@/lib/payload/queries";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Uxea.Cloud — VPS, hosting y servidores dedicados",
  description:
    "Planes de VPS, hosting y servidores dedicados. Infraestructura propia, soporte que responde, precios claros.",
};

const productos = [
  {
    icon: Cloud,
    name: "VPS",
    description:
      "Servidores virtuales sobre NVMe con IP dedicada, panel de control y backups.",
  },
  {
    icon: Server,
    name: "Hosting",
    description:
      "Hosting gestionado para webs, aplicaciones y WordPress. SSL, CDN y caché incluidos.",
  },
  {
    icon: HardDrive,
    name: "Dedicado",
    description:
      "Máquinas dedicadas — Dell, HPE, Supermicro — con gestión opcional incluida.",
  },
];

export default async function UxeaCloudPage() {
  const hostingPlans = await getHostingPlans();
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-50" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[420px] glow-brand" />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-20 md:pt-28 md:pb-28 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
              <Cloud className="h-5 w-5" />
            </span>
            <span className="font-display text-sm font-semibold tracking-tight">
              Uxea<span className="text-brand">.</span>Cloud
            </span>
          </div>

          <h1 className="mt-8 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Infraestructura cloud sin sorpresas en la factura.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
            Cuatro planes. Precios cerrados. Hardware serio. Y si necesitas
            algo distinto, lo montamos a medida — sin vendedores intermedios.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="#planes" size="lg">
              Ver planes VPS
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/contacto" variant="secondary" size="lg">
              Hablar con ventas
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {productos.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.name}
                className="rounded-xl border border-border bg-surface p-7"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {p.description}
                </p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section id="planes" className="border-t border-border bg-surface/30">
        <SectionHeading
          eyebrow="Planes VPS"
          title="Elige el tamaño. El rendimiento viene incluido."
          description="Todos los planes corren sobre NVMe con tráfico real — nada de throttling absurdo a la mitad del mes."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {hostingPlans.map((plan) => {
            const custom = plan.priceMonth === 0;
            return (
              <article
                key={plan.id}
                className={cn(
                  "relative flex flex-col rounded-xl border bg-bg p-6 transition-colors",
                  plan.featured
                    ? "border-brand shadow-[0_0_0_1px_var(--brand),0_12px_40px_-12px_rgba(37,99,235,0.35)]"
                    : "border-border hover:border-border-strong"
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-2.5 left-6 inline-flex items-center rounded-full bg-brand px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white">
                    Más popular
                  </span>
                )}

                <header>
                  <h3 className="font-display text-xl font-semibold">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-fg-muted">{plan.tagline}</p>
                </header>

                <div className="mt-6 flex items-baseline gap-1">
                  {custom ? (
                    <span className="font-display text-3xl font-semibold">
                      A medida
                    </span>
                  ) : (
                    <>
                      <span className="font-display text-4xl font-semibold tracking-tight">
                        {plan.currency}
                        {plan.priceMonth}
                      </span>
                      <span className="text-sm text-fg-muted">/mes</span>
                    </>
                  )}
                </div>

                <dl className="mt-6 grid grid-cols-2 gap-3 border-y border-border py-5 font-mono text-[13px]">
                  <div>
                    <dt className="text-fg-subtle">CPU</dt>
                    <dd className="mt-0.5 text-fg">{plan.cpu}</dd>
                  </div>
                  <div>
                    <dt className="text-fg-subtle">RAM</dt>
                    <dd className="mt-0.5 text-fg">{plan.ram}</dd>
                  </div>
                  <div>
                    <dt className="text-fg-subtle">Disco</dt>
                    <dd className="mt-0.5 text-fg">{plan.storage}</dd>
                  </div>
                  <div>
                    <dt className="text-fg-subtle">Tráfico</dt>
                    <dd className="mt-0.5 text-fg">{plan.bandwidth}</dd>
                  </div>
                </dl>

                <ul className="mt-5 flex-1 space-y-2.5 text-sm">
                  {((plan.features ?? []) as Array<{ id?: string | null; label: string }>).map((f, i) => (
                    <li key={f.id ?? i} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-brand" />
                      <span className="text-fg">{f.label}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/contacto?plan=${plan.id}`}
                  className={cn(
                    "mt-7 inline-flex h-10 items-center justify-center gap-1.5 rounded-md px-4 text-sm font-medium transition-colors",
                    plan.featured
                      ? "bg-brand text-white hover:bg-brand-hover"
                      : "border border-border-strong bg-surface text-fg hover:bg-surface-2"
                  )}
                >
                  {custom ? "Hablemos" : "Contratar"}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-fg-muted">
          ¿Necesitas algo fuera de esta tabla?{" "}
          <Link href="/contacto" className="text-brand hover:text-brand-hover">
            Te preparamos una propuesta a medida
          </Link>
          .
        </p>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="Qué incluye"
          title="Lo que sí va en el precio."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Hardware propio en datacenters Tier III",
            "Red de 1 Gbps con tránsito premium",
            "Panel de control para reinicios, snapshots y consola",
            "Backups automáticos incluidos en todos los planes",
            "Certificado SSL Let's Encrypt sin coste",
            "Soporte humano por ticket y teléfono",
          ].map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 rounded-lg border border-border bg-surface p-5"
            >
              <Check className="mt-0.5 h-4 w-4 flex-none text-brand" />
              <span className="text-sm leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
