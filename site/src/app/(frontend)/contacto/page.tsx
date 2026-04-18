import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { LinkedInIcon, XIcon, InstagramIcon } from "@/components/icons/Socials";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos qué necesitas. Te respondemos con una propuesta clara, con precios y tiempos.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-40" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[360px] glow-brand" />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-20 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">
            Contacto
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Cuéntanos qué necesitas.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
            Respondemos en menos de un día hábil. Si lo que buscas queda fuera
            de nuestro alcance, te lo decimos desde el primer correo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="space-y-8 lg:col-span-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
                Canales directos
              </p>
              <div className="mt-4 space-y-3">
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-start gap-3 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-border-strong hover:bg-surface-2"
                >
                  <Mail className="mt-0.5 h-5 w-5 text-brand" />
                  <div>
                    <p className="text-sm text-fg-subtle">Email</p>
                    <p className="font-medium text-fg">{site.email}</p>
                  </div>
                </a>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="group flex items-start gap-3 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-border-strong hover:bg-surface-2"
                >
                  <Phone className="mt-0.5 h-5 w-5 text-brand" />
                  <div>
                    <p className="text-sm text-fg-subtle">Teléfono</p>
                    <p className="font-medium text-fg">{site.phone}</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-brand" />
                  <div>
                    <p className="text-sm text-fg-subtle">Ubicación</p>
                    <p className="font-medium text-fg">{site.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
                Redes
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-fg-muted hover:border-border-strong hover:text-fg"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
                <a
                  href={site.social.x}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-fg-muted hover:border-border-strong hover:text-fg"
                >
                  <XIcon className="h-3.5 w-3.5" />
                </a>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-fg-muted hover:border-border-strong hover:text-fg"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-surface p-5 text-sm leading-relaxed text-fg-muted">
              <p>
                <span className="font-medium text-fg">Tiempo de respuesta:</span>{" "}
                menos de 24 horas en días hábiles.
              </p>
              <p className="mt-2">
                Para incidencias urgentes de clientes con SLA activo, usar el
                teléfono directo de soporte que aparece en tu contrato.
              </p>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
