import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  Server,
  Network,
  Code2,
  Radio,
  HardDrive,
  Cloud,
  Layout,
  Shield,
  Zap,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

const iconMap: Record<string, LucideIcon> = {
  Server,
  Network,
  Code2,
  Radio,
  HardDrive,
  Cloud,
  Layout,
  Shield,
  Zap,
  Cpu,
};

type ServiceRef =
  | string
  | {
      id: string | number;
      slug: string;
      title: string;
      short: string;
      icon?: string | null;
    };

export type ServicesGridBlockData = {
  blockType: "servicesGrid";
  eyebrow?: string | null;
  heading: string;
  description?: string | null;
  linkAll?: { label?: string | null; href?: string | null } | null;
  services: ServiceRef[];
};

export default function ServicesGridBlock({
  data,
}: {
  data: ServicesGridBlockData;
}) {
  const services = data.services.filter(
    (s): s is Exclude<ServiceRef, string> => typeof s !== "string"
  );

  return (
    <Section id="servicios">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow={data.eyebrow ?? undefined}
          title={data.heading}
          description={data.description ?? undefined}
        />
        {data.linkAll?.label && data.linkAll?.href && (
          <Link
            href={data.linkAll.href}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-hover"
          >
            {data.linkAll.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>

      <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = iconMap[service.icon ?? "Server"] ?? Server;
          return (
            <li key={service.id} className="group bg-bg">
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
    </Section>
  );
}
