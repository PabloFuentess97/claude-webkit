import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { site } from "../lib/site";
import Logo from "./Logo";
import { LinkedInIcon, XIcon, InstagramIcon } from "./icons/Socials";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-muted">
              {site.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-fg-muted hover:border-border-strong hover:text-fg"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={site.social.x}
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-fg-muted hover:border-border-strong hover:text-fg"
              >
                <XIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-fg-muted hover:border-border-strong hover:text-fg"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-display text-sm font-semibold text-fg">Empresa</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/servicios" className="text-fg-muted hover:text-fg">Servicios</Link></li>
              <li><Link href="/sobre-nosotros" className="text-fg-muted hover:text-fg">Sobre nosotros</Link></li>
              <li><Link href="/contacto" className="text-fg-muted hover:text-fg">Contacto</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-display text-sm font-semibold text-fg">Marcas</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/uxea-cloud" className="text-fg-muted hover:text-fg">Uxea.Cloud</Link></li>
              <li><Link href="/wyweb" className="text-fg-muted hover:text-fg">Wyweb</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-display text-sm font-semibold text-fg">Contacto</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-fg-muted hover:text-fg"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-fg-muted hover:text-fg"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="text-xs text-fg-subtle">
            © {year} {site.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-fg-subtle">
            Built with Claude Web Builder by{" "}
            <a
              href="https://tododeia.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-fg-muted underline-offset-4 hover:underline"
            >
              Tododeia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
