import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import BrandsShowcase from "../components/BrandsShowcase";
import Testimonials from "../components/Testimonials";
import { Section, SectionHeading } from "../components/ui/Section";
import { ButtonLink } from "../components/ui/Button";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section id="servicios">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Qué hacemos"
            title="Cinco áreas. Una sola empresa detrás."
            description="No externalizamos las partes complicadas. Todo lo gestiona el mismo equipo — por eso los proyectos se entregan cuando se tienen que entregar."
          />
          <Link
            href="/servicios"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-hover"
          >
            Ver todos los servicios
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12">
          <ServicesGrid />
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/40">
        <SectionHeading
          eyebrow="Sub-marcas"
          title="Dos marcas especializadas, un mismo equipo."
          description="Cuando un cliente necesita algo concreto, no lo mandamos fuera. Lo cubrimos con la división adecuada."
        />
        <div className="mt-12">
          <BrandsShowcase />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Prueba social"
          title="Lo que dicen nuestros clientes."
        />
        <div className="mt-12">
          <Testimonials />
        </div>
      </Section>

      <Section className="pb-28">
        <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-surface px-8 py-16 md:px-14 md:py-20">
          <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-40" />
          <div className="absolute inset-x-0 top-0 -z-10 h-64 glow-brand" />

          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">
              Siguiente paso
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              ¿Hablamos de tu infraestructura?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">
              Cuéntanos qué tienes y qué necesitas. Te respondemos con una
              propuesta clara, con precios y tiempos — sin humo.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/contacto" size="lg">
                Solicitar cotización
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/servicios" variant="secondary" size="lg">
                Ver servicios
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
