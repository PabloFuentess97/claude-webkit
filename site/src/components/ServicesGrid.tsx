import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "../lib/services";
import { Card } from "./ui/Card";

export default function ServicesGrid() {
  return (
    <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <li key={service.slug} className="group bg-bg">
            <Link
              href={`/servicios#${service.slug}`}
              className="flex h-full flex-col gap-4 p-7 transition-colors hover:bg-surface focus:outline-none focus-visible:bg-surface"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-4 w-4 text-fg-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {service.short}
                </p>
              </div>
            </Link>
          </li>
        );
      })}
      <li className="flex flex-col justify-between gap-4 bg-surface p-7">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
            ¿Algo específico?
          </p>
          <p className="mt-2 font-display text-lg font-semibold tracking-tight">
            Cuéntanos qué necesitas y armamos la propuesta.
          </p>
        </div>
        <Link
          href="/contacto"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-hover"
        >
          Hablar con el equipo
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </li>
    </ul>
  );
}
