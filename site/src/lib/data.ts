export type HostingPlan = {
  id: string;
  name: string;
  tagline: string;
  priceMonth: number;
  currency: string;
  cpu: string;
  ram: string;
  storage: string;
  bandwidth: string;
  featured?: boolean;
  features: string[];
};

export const hostingPlans: HostingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Para proyectos que arrancan.",
    priceMonth: 9,
    currency: "€",
    cpu: "2 vCPU",
    ram: "4 GB RAM",
    storage: "80 GB NVMe",
    bandwidth: "2 TB tráfico",
    features: [
      "IPv4 dedicada",
      "Backups semanales",
      "Panel de control",
      "Soporte por email",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "El plan que se llevan casi todos.",
    priceMonth: 24,
    currency: "€",
    cpu: "4 vCPU",
    ram: "8 GB RAM",
    storage: "160 GB NVMe",
    bandwidth: "5 TB tráfico",
    featured: true,
    features: [
      "IPv4 + IPv6",
      "Backups diarios (7 días)",
      "Firewall gestionado",
      "Soporte 24/7",
      "Migración incluida",
    ],
  },
  {
    id: "business",
    name: "Business",
    tagline: "Cargas serias, sin sustos.",
    priceMonth: 59,
    currency: "€",
    cpu: "8 vCPU",
    ram: "16 GB RAM",
    storage: "320 GB NVMe",
    bandwidth: "10 TB tráfico",
    features: [
      "IPv4 + IPv6 múltiples",
      "Backups diarios (30 días)",
      "Snapshots ilimitados",
      "SLA 99.95%",
      "Soporte prioritario",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "A medida, sin compromisos.",
    priceMonth: 0,
    currency: "€",
    cpu: "A medida",
    ram: "A medida",
    storage: "A medida",
    bandwidth: "Ilimitado",
    features: [
      "Hardware dedicado",
      "Arquitectura HA",
      "Técnico asignado",
      "SLA personalizado",
      "Cumplimiento y auditoría",
    ],
  },
];

export type PortfolioItem = {
  id: string;
  client: string;
  title: string;
  summary: string;
  category: "Landing page" | "Aplicación web" | "E-commerce" | "Portal";
  year: number;
  gradient: string;
};

export const portfolio: PortfolioItem[] = [
  {
    id: "nordica-ingenieria",
    client: "Nórdica Ingeniería",
    title: "Portal corporativo con gestor de proyectos interno",
    summary:
      "Rediseño completo del sitio público más un backoffice para coordinar equipos en obra.",
    category: "Aplicación web",
    year: 2024,
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "cafe-morelos",
    client: "Café Morelos",
    title: "E-commerce de café de especialidad",
    summary:
      "Tienda online con suscripciones, pagos recurrentes e integración con Holded.",
    category: "E-commerce",
    year: 2024,
    gradient: "from-amber-600 to-rose-500",
  },
  {
    id: "clinica-vega",
    client: "Clínica Vega",
    title: "Landing de captación + agenda online",
    summary:
      "Página de conversión con integración a Calendly y formulario validado.",
    category: "Landing page",
    year: 2024,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: "logia-capital",
    client: "Logia Capital",
    title: "Portal de clientes con autenticación",
    summary:
      "Dashboard privado donde los clientes consultan sus carteras y descargan informes.",
    category: "Portal",
    year: 2023,
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    id: "ferros-catalan",
    client: "Ferros Català",
    title: "Catálogo B2B con cotizador",
    summary:
      "Más de 3.000 referencias con generador de presupuestos en PDF.",
    category: "Aplicación web",
    year: 2023,
    gradient: "from-zinc-700 to-slate-500",
  },
  {
    id: "estudio-montero",
    client: "Estudio Montero",
    title: "Web de portfolio arquitectónico",
    summary:
      "Sitio editorial minimalista, cargas pesadas de imagen optimizadas.",
    category: "Landing page",
    year: 2023,
    gradient: "from-stone-600 to-orange-500",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Llevamos tres años trabajando con Uxea y no hemos tenido un solo corte que no resolvieran antes de que lo notáramos. Esa tranquilidad no tiene precio.",
    author: "Marta Giménez",
    role: "Directora de Operaciones",
    company: "Nórdica Ingeniería",
  },
  {
    quote:
      "Migramos cuarenta puestos, centralita y servidor principal en un fin de semana. El lunes todo arrancó. No hay más que decir.",
    author: "Javier Ruiz",
    role: "CTO",
    company: "Logia Capital",
  },
  {
    quote:
      "Entienden el negocio antes de tocar un cable. Por eso las propuestas encajan en el presupuesto y en el calendario real.",
    author: "Ana Paredes",
    role: "Directora General",
    company: "Clínica Vega",
  },
];
