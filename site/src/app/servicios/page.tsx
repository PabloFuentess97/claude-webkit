import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { services } from "../../lib/services";
import { Section, SectionHeading } from "../../components/ui/Section";
import { ButtonLink } from "../../components/ui/Button";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Infraestructura IT, telecomunicaciones, redes, desarrollo de software y servidores — gestionados por un solo equipo.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-50" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[360px] glow-brand" />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">
            Servicios
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Cubrimos la capa técnica de tu empresa. Entera.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
            Desde el cable del suelo hasta la aplicación que usan tus clientes.
            Lo diseñamos, lo ponemos en marcha y lo mantenemos funcionando.
          </p>
        </div>
      </section>

      <Section className="pt-0 pb-0 md:pt-0 md:pb-0">
        <nav
          aria-label="Índice de servicios"
          className="flex flex-wrap gap-2 border-b border-border py-6"
        >
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </Section>

      <div className="divide-y divide-border">
        {services.map((service, i) => {
          const Icon = service.icon;
          const reversed = i % 2 === 1;
          return (
            <section
              id={service.slug}
              key={service.slug}
              className="scroll-mt-24"
            >
              <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
                <div
                  className={`grid gap-12 md:grid-cols-12 md:items-start ${
                    reversed ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="md:col-span-5">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-soft text-brand">
                      <Icon className="h-6 w-6" />
                    </span>
                    <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">
                      0{i + 1} · Servicio
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-fg-muted md:text-lg">
                      {service.long}
                    </p>
                    <Link
                      href="/contacto"
                      className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-hover"
                    >
                      Consultar este servicio
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="md:col-span-7">
                    <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
                      <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
                        Incluye
                      </p>
                      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                        {service.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-3 text-sm leading-relaxed"
                          >
                            <Check className="mt-0.5 h-4 w-4 flex-none text-brand" />
                            <span className="text-fg">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <Section className="border-t border-border">
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <SectionHeading
            eyebrow="Siguiente paso"
            title="¿No sabes por dónde empezar?"
            description="Hagamos una auditoría corta. Sin compromiso, sin tecnicismos vacíos. Te decimos qué hay, qué falta y por dónde tiene sentido empezar."
          />
          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <ButtonLink href="/contacto" size="lg">
              Solicitar cotización
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/uxea-cloud" variant="secondary" size="lg">
              Ver planes VPS
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
