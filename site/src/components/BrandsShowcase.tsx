import Link from "next/link";
import { ArrowRight, Cloud, Code2 } from "lucide-react";

const brands = [
  {
    id: "uxea-cloud",
    name: "Uxea.Cloud",
    tagline: "VPS, hosting y servidores dedicados.",
    description:
      "La división de cloud. Infraestructura propia, paneles limpios y planes que no se quedan cortos a la mitad del año.",
    href: "/uxea-cloud",
    accent: "from-blue-500/20 via-blue-500/10 to-transparent",
    border: "group-hover:border-blue-500/40",
    icon: Cloud,
    tags: ["VPS", "Hosting", "Dedicado", "Managed"],
  },
  {
    id: "wyweb",
    name: "Wyweb",
    tagline: "Diseño y desarrollo web.",
    description:
      "Nuestra agencia digital. Landings que convierten, portales a medida y ecommerce. Código y estética, sin atajos.",
    href: "/wyweb",
    accent: "from-violet-500/20 via-violet-500/10 to-transparent",
    border: "group-hover:border-violet-500/40",
    icon: Code2,
    tags: ["Landing", "Web app", "E-commerce", "Branding"],
  },
];

export default function BrandsShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {brands.map((brand) => {
        const Icon = brand.icon;
        return (
          <Link
            key={brand.id}
            href={brand.href}
            className={`group relative isolate overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-border-strong ${brand.border}`}
          >
            <div
              className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${brand.accent} opacity-70 transition-opacity group-hover:opacity-100`}
            />
            <div className="flex items-center justify-between">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-bg text-fg">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-subtle">
                Sub-marca
              </span>
            </div>

            <div className="mt-10">
              <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                {brand.name}
              </h3>
              <p className="mt-2 text-base text-fg-muted">{brand.tagline}</p>
              <p className="mt-5 max-w-md leading-relaxed text-fg-muted">
                {brand.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {brand.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border bg-bg/60 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-muted backdrop-blur"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors group-hover:text-brand">
                Entrar
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
