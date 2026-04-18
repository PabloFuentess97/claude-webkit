import type { Metadata } from "next";
import { ArrowRight, Target, Compass, Handshake, Wrench, Shield } from "lucide-react";
import { Section, SectionHeading } from "../../components/ui/Section";
import { ButtonLink } from "../../components/ui/Button";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Uxea Soluciones nació para hacer bien lo que antes otros hacían a medias. Conoce quiénes somos, nuestra misión, visión y valores.",
};

const valores = [
  {
    icon: Wrench,
    title: "Hacemos, no solo asesoramos",
    body: "Si lo proponemos, lo montamos. No entregamos informes y nos vamos.",
  },
  {
    icon: Handshake,
    title: "Trato directo",
    body: "Sin capas de comerciales. Hablas con quien toca la infraestructura.",
  },
  {
    icon: Shield,
    title: "Transparencia en todo",
    body: "Alcance, precio y tiempos por escrito. Cambios también por escrito.",
  },
  {
    icon: Target,
    title: "Lo que importa, funciona",
    body: "Nos interesa que tu negocio corra. Los premios de diseño se los dejamos a otros.",
  },
];

const hitos = [
  { year: "2016", text: "Arrancamos como consultora IT en España." },
  { year: "2019", text: "Se lanza Uxea.Cloud como división de infraestructura." },
  { year: "2021", text: "Nace Wyweb para absorber la demanda de proyectos web." },
  { year: "2024", text: "Superamos los 150 proyectos activos en 9 sectores." },
];

export default function SobreNosotrosPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-40" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[360px] glow-brand" />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-20 md:pt-28 md:pb-28 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">
            Sobre nosotros
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Una empresa pequeña que resuelve problemas grandes.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
            Somos técnicos que llevan suficientes años en el sector como para
            saber dónde están los atajos que hay que evitar. Y dónde están los
            que sí conviene tomar.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">
              Historia
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              De consultora IT a grupo con tres marcas.
            </h2>
          </div>
          <div className="md:col-span-7">
            <div className="space-y-5 text-base leading-relaxed text-fg-muted md:text-lg">
              <p>
                Uxea empezó en 2016 con una idea simple: en el mundo de la
                informática para empresas, la gente estaba cansada de
                proveedores que prometían mucho y aparecían poco.
              </p>
              <p>
                Tres años después lanzamos{" "}
                <span className="text-fg font-medium">Uxea.Cloud</span>, nuestra
                división de infraestructura, cuando los clientes empezaron a
                pedirnos VPS y servidores dedicados gestionados. En 2021
                abrimos{" "}
                <span className="text-fg font-medium">Wyweb</span> para darle
                estructura a los proyectos de desarrollo web que crecían en
                paralelo.
              </p>
              <p>
                Hoy somos un equipo compacto y especializado que cubre IT,
                telecomunicaciones, redes, desarrollo y servidores. No hemos
                crecido por crecer. Hemos crecido donde hacía falta.
              </p>
            </div>

            <ol className="mt-10 border-l border-border pl-6">
              {hitos.map((h) => (
                <li key={h.year} className="relative pb-5 last:pb-0">
                  <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-brand ring-4 ring-bg" />
                  <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
                    {h.year}
                  </p>
                  <p className="mt-1 text-fg">{h.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/40">
        <div className="grid gap-12 md:grid-cols-2">
          <article className="rounded-xl border border-border bg-bg p-8">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-soft text-brand">
              <Target className="h-5 w-5" />
            </span>
            <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight">
              Misión
            </h2>
            <p className="mt-3 leading-relaxed text-fg-muted">
              Que las empresas con las que trabajamos puedan olvidarse de su
              capa técnica y dedicar su atención a lo que de verdad les genera
              ingresos.
            </p>
          </article>
          <article className="rounded-xl border border-border bg-bg p-8">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-soft text-brand">
              <Compass className="h-5 w-5" />
            </span>
            <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight">
              Visión
            </h2>
            <p className="mt-3 leading-relaxed text-fg-muted">
              Ser el socio tecnológico por defecto de la mediana empresa en
              España. No por tamaño, sino por consistencia.
            </p>
          </article>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Valores"
          title="Cómo trabajamos."
          description="Pocos, claros, y aplicados — no puestos en una lámina y olvidados."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {valores.map((v) => {
            const Icon = v.icon;
            return (
              <article
                key={v.title}
                className="rounded-xl border border-border bg-surface p-7"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {v.title}
                </h3>
                <p className="mt-2 leading-relaxed text-fg-muted">{v.body}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="max-w-xl font-display text-2xl font-semibold tracking-tight md:text-3xl">
            ¿Quieres ver si encajamos con lo que necesitas?
          </h2>
          <ButtonLink href="/contacto" size="lg">
            Hablemos
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
