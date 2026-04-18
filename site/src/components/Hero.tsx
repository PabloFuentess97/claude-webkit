import { ArrowRight, Sparkles } from "lucide-react";
import { ButtonLink } from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-60" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] glow-brand" />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 lg:px-8">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-fg-muted backdrop-blur">
            <Sparkles className="h-3 w-3 text-brand" />
            Infraestructura · Redes · Software
          </span>

          <h1 className="mt-6 font-display text-[40px] font-semibold leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl">
            La infraestructura que{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 text-brand">sostiene</span>
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
            </span>{" "}
            a tu empresa.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted md:text-xl">
            Diseñamos, desplegamos y mantenemos la capa técnica de empresas que
            no pueden permitirse caídas. IT, telecomunicaciones, redes,
            desarrollo y servidores — bajo un mismo techo.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="/contacto" size="lg">
              Solicitar cotización
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/servicios" variant="secondary" size="lg">
              Conocer servicios
            </ButtonLink>
          </div>

          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-8 border-t border-border pt-8">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
                Uptime
              </dt>
              <dd className="mt-1 font-display text-2xl font-semibold md:text-3xl">
                99.9<span className="text-brand">%</span>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
                Soporte
              </dt>
              <dd className="mt-1 font-display text-2xl font-semibold md:text-3xl">
                24<span className="text-brand">/</span>7
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
                Proyectos
              </dt>
              <dd className="mt-1 font-display text-2xl font-semibold md:text-3xl">
                150<span className="text-brand">+</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
