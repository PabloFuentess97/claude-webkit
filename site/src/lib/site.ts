export const site = {
  name: "Uxea Soluciones",
  shortName: "Uxea",
  domain: "uxea.net",
  url: "https://uxea.net",
  tagline: "La infraestructura que sostiene a tu empresa.",
  description:
    "Uxea Soluciones construye y mantiene la infraestructura tecnológica de empresas: IT, telecomunicaciones, redes, desarrollo de software y servidores.",
  email: "contacto@uxea.net",
  phone: "+34 900 000 000",
  address: "España",
  social: {
    linkedin: "https://www.linkedin.com/company/uxea-soluciones",
    x: "https://x.com/uxeasoluciones",
    instagram: "https://www.instagram.com/uxeasoluciones",
  },
  nav: [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/uxea-cloud", label: "Uxea.Cloud" },
    { href: "/wyweb", label: "Wyweb" },
    { href: "/sobre-nosotros", label: "Nosotros" },
    { href: "/contacto", label: "Contacto" },
  ],
};

export type SiteConfig = typeof site;
