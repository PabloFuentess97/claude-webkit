import "dotenv/config";
import { getPayload } from "payload";
import config from "../payload.config";

async function run() {
  const payload = await getPayload({ config });

  const adminEmail = process.env.SEED_ADMIN_EMAIL ?? "admin@uxea.net";
  const adminPassword = process.env.SEED_ADMIN_PASSWORD ?? "admin1234";

  // 1) Admin user
  const existingUsers = await payload.find({
    collection: "users",
    where: { email: { equals: adminEmail } },
    limit: 1,
  });
  if (existingUsers.totalDocs === 0) {
    await payload.create({
      collection: "users",
      data: {
        email: adminEmail,
        password: adminPassword,
        name: "Administrador",
        role: "admin",
      },
    });
    console.log(`✓ Admin creado: ${adminEmail} / ${adminPassword}`);
  } else {
    console.log(`· Admin ya existe: ${adminEmail}`);
  }

  // 2) Theme global
  await payload.updateGlobal({
    slug: "theme",
    data: {
      colors: {
        brand: "#2563eb",
        brandHover: "#1d4ed8",
        accent: "#8b5cf6",
      },
      typography: {
        headingFont: "space-grotesk",
        bodyFont: "geist",
      },
      site: {
        name: "Uxea Soluciones",
        tagline: "La infraestructura que sostiene a tu empresa.",
        email: "contacto@uxea.net",
        phone: "+34 900 000 000",
        social: {
          linkedin: "https://www.linkedin.com/company/uxea-soluciones",
          x: "https://x.com/uxeasoluciones",
          instagram: "https://www.instagram.com/uxeasoluciones",
        },
      },
    },
  });
  console.log("✓ Theme global guardado");

  // 3) Services
  const servicesSeed = [
    {
      slug: "infraestructura-it",
      title: "Infraestructura IT",
      icon: "Server",
      short: "Arquitectura, despliegue y gestión de sistemas.",
      long: "Diseñamos tu stack desde cero o modernizamos el que ya tienes. Servidores físicos, virtualización, contenedores y nube híbrida — gestionados por un equipo que responde.",
      features: [
        { label: "Auditoría inicial y plan a 12 meses" },
        { label: "Virtualización con Proxmox / VMware" },
        { label: "Backups y recuperación probados" },
        { label: "Monitorización 24/7" },
      ],
    },
    {
      slug: "telecomunicaciones",
      title: "Telecomunicaciones",
      icon: "Radio",
      short: "Voz, datos y conectividad empresarial.",
      long: "Centralitas IP, fibra dedicada, enlaces redundantes y telefonía en la nube.",
      features: [
        { label: "Centralitas VoIP (3CX, FreePBX)" },
        { label: "Fibra simétrica y respaldos 4G/5G" },
        { label: "SIP trunking y numeración" },
        { label: "SLA con tiempos de respuesta claros" },
      ],
    },
    {
      slug: "redes",
      title: "Redes",
      icon: "Network",
      short: "Redes cableadas y wifi que aguantan carga real.",
      long: "Cableado estructurado, switches gestionados, VLANs, VPNs y wifi mesh. Segmentamos, aseguramos y documentamos cada red que tocamos.",
      features: [
        { label: "Cableado categoría 6A / fibra" },
        { label: "Equipos Ubiquiti, MikroTik, Cisco" },
        { label: "VPN site-to-site y acceso remoto" },
        { label: "Planos y documentación entregados" },
      ],
    },
    {
      slug: "desarrollo",
      title: "Desarrollo de software",
      icon: "Code2",
      short: "Aplicaciones web y a medida.",
      long: "Plataformas, portales internos, integraciones con ERP y automatizaciones. Código limpio, stack moderno, mantenimiento incluido.",
      features: [
        { label: "Aplicaciones web con Next.js / Node" },
        { label: "Integraciones API y ERP" },
        { label: "Automatización de procesos" },
        { label: "Mantenimiento evolutivo" },
      ],
    },
    {
      slug: "servidores",
      title: "Venta y gestión de servidores",
      icon: "HardDrive",
      short: "Hardware serio con gestión incluida.",
      long: "Vendemos, configuramos y administramos servidores físicos y virtuales. Desde una torre para una pyme hasta un rack completo con alta disponibilidad.",
      features: [
        { label: "Dell, HPE, Supermicro" },
        { label: "Configuración RAID y failover" },
        { label: "Colocation en datacenters Tier III" },
        { label: "Gestión continua incluida" },
      ],
    },
  ] as const;

  const serviceIds: (string | number)[] = [];
  for (const svc of servicesSeed) {
    const existing = await payload.find({
      collection: "services",
      where: { slug: { equals: svc.slug } },
      limit: 1,
    });
    const doc = existing.totalDocs
      ? await payload.update({
          collection: "services",
          id: existing.docs[0].id,
          data: svc,
        })
      : await payload.create({ collection: "services", data: svc });
    serviceIds.push(doc.id as string | number);
  }
  console.log(`✓ ${servicesSeed.length} servicios`);

  // 4) Hosting Plans
  const plans = [
    {
      name: "Starter",
      tagline: "Para proyectos que arrancan.",
      priceMonth: 9,
      currency: "€",
      cpu: "2 vCPU",
      ram: "4 GB RAM",
      storage: "80 GB NVMe",
      bandwidth: "2 TB tráfico",
      featured: false,
      order: 1,
      features: [
        { label: "IPv4 dedicada" },
        { label: "Backups semanales" },
        { label: "Panel de control" },
        { label: "Soporte por email" },
      ],
    },
    {
      name: "Pro",
      tagline: "El plan que se llevan casi todos.",
      priceMonth: 24,
      currency: "€",
      cpu: "4 vCPU",
      ram: "8 GB RAM",
      storage: "160 GB NVMe",
      bandwidth: "5 TB tráfico",
      featured: true,
      order: 2,
      features: [
        { label: "IPv4 + IPv6" },
        { label: "Backups diarios (7 días)" },
        { label: "Firewall gestionado" },
        { label: "Soporte 24/7" },
        { label: "Migración incluida" },
      ],
    },
    {
      name: "Business",
      tagline: "Cargas serias, sin sustos.",
      priceMonth: 59,
      currency: "€",
      cpu: "8 vCPU",
      ram: "16 GB RAM",
      storage: "320 GB NVMe",
      bandwidth: "10 TB tráfico",
      featured: false,
      order: 3,
      features: [
        { label: "IPv4 + IPv6 múltiples" },
        { label: "Backups diarios (30 días)" },
        { label: "Snapshots ilimitados" },
        { label: "SLA 99.95%" },
        { label: "Soporte prioritario" },
      ],
    },
    {
      name: "Enterprise",
      tagline: "A medida, sin compromisos.",
      priceMonth: 0,
      currency: "€",
      cpu: "A medida",
      ram: "A medida",
      storage: "A medida",
      bandwidth: "Ilimitado",
      featured: false,
      order: 4,
      features: [
        { label: "Hardware dedicado" },
        { label: "Arquitectura HA" },
        { label: "Técnico asignado" },
        { label: "SLA personalizado" },
        { label: "Cumplimiento y auditoría" },
      ],
    },
  ] as const;

  for (const plan of plans) {
    const existing = await payload.find({
      collection: "hosting-plans",
      where: { name: { equals: plan.name } },
      limit: 1,
    });
    if (existing.totalDocs) {
      await payload.update({
        collection: "hosting-plans",
        id: existing.docs[0].id,
        data: plan,
      });
    } else {
      await payload.create({ collection: "hosting-plans", data: plan });
    }
  }
  console.log(`✓ ${plans.length} planes VPS`);

  // 5) Portfolio
  const portfolio = [
    {
      client: "Nórdica Ingeniería",
      title: "Portal corporativo con gestor de proyectos interno",
      summary:
        "Rediseño completo del sitio público más un backoffice para coordinar equipos en obra.",
      category: "Aplicación web",
      year: 2024,
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      client: "Café Morelos",
      title: "E-commerce de café de especialidad",
      summary:
        "Tienda online con suscripciones, pagos recurrentes e integración con Holded.",
      category: "E-commerce",
      year: 2024,
      gradient: "from-amber-600 to-rose-500",
    },
    {
      client: "Clínica Vega",
      title: "Landing de captación + agenda online",
      summary:
        "Página de conversión con integración a Calendly y formulario validado.",
      category: "Landing page",
      year: 2024,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      client: "Logia Capital",
      title: "Portal de clientes con autenticación",
      summary:
        "Dashboard privado donde los clientes consultan sus carteras y descargan informes.",
      category: "Portal",
      year: 2023,
      gradient: "from-violet-600 to-indigo-600",
    },
    {
      client: "Ferros Català",
      title: "Catálogo B2B con cotizador",
      summary: "Más de 3.000 referencias con generador de presupuestos en PDF.",
      category: "Aplicación web",
      year: 2023,
      gradient: "from-zinc-700 to-slate-500",
    },
    {
      client: "Estudio Montero",
      title: "Web de portfolio arquitectónico",
      summary:
        "Sitio editorial minimalista, cargas pesadas de imagen optimizadas.",
      category: "Landing page",
      year: 2023,
      gradient: "from-stone-600 to-orange-500",
    },
  ] as const;

  for (const item of portfolio) {
    const existing = await payload.find({
      collection: "portfolio",
      where: { title: { equals: item.title } },
      limit: 1,
    });
    if (existing.totalDocs) {
      await payload.update({
        collection: "portfolio",
        id: existing.docs[0].id,
        data: item,
      });
    } else {
      await payload.create({ collection: "portfolio", data: item });
    }
  }
  console.log(`✓ ${portfolio.length} proyectos de portfolio`);

  // 6) Home Page con blocks
  const homeBlocks = [
    {
      blockType: "hero",
      eyebrow: "Infraestructura · Redes · Software",
      heading: "La infraestructura que sostiene a tu empresa.",
      highlight: "sostiene",
      subheading:
        "Diseñamos, desplegamos y mantenemos la capa técnica de empresas que no pueden permitirse caídas. IT, telecomunicaciones, redes, desarrollo y servidores — bajo un mismo techo.",
      primaryCta: { label: "Solicitar cotización", href: "/contacto" },
      secondaryCta: { label: "Conocer servicios", href: "/servicios" },
      stats: [
        { label: "Uptime", value: "99.9%" },
        { label: "Soporte", value: "24/7" },
        { label: "Proyectos", value: "150+" },
      ],
    },
    {
      blockType: "servicesGrid",
      eyebrow: "Qué hacemos",
      heading: "Cinco áreas. Una sola empresa detrás.",
      description:
        "No externalizamos las partes complicadas. Todo lo gestiona el mismo equipo — por eso los proyectos se entregan cuando se tienen que entregar.",
      linkAll: { label: "Ver todos los servicios", href: "/servicios" },
      services: serviceIds,
    },
    {
      blockType: "brandsShowcase",
      eyebrow: "Sub-marcas",
      heading: "Dos marcas especializadas, un mismo equipo.",
      description:
        "Cuando un cliente necesita algo concreto, no lo mandamos fuera. Lo cubrimos con la división adecuada.",
      brands: [
        {
          name: "Uxea.Cloud",
          tagline: "VPS, hosting y servidores dedicados.",
          description:
            "La división de cloud. Infraestructura propia, paneles limpios y planes que no se quedan cortos a la mitad del año.",
          href: "/uxea-cloud",
          accent: "blue",
          tags: [
            { label: "VPS" },
            { label: "Hosting" },
            { label: "Dedicado" },
            { label: "Managed" },
          ],
        },
        {
          name: "Wyweb",
          tagline: "Diseño y desarrollo web.",
          description:
            "Nuestra agencia digital. Landings que convierten, portales a medida y ecommerce. Código y estética, sin atajos.",
          href: "/wyweb",
          accent: "violet",
          tags: [
            { label: "Landing" },
            { label: "Web app" },
            { label: "E-commerce" },
            { label: "Branding" },
          ],
        },
      ],
    },
    {
      blockType: "testimonials",
      eyebrow: "Prueba social",
      heading: "Lo que dicen nuestros clientes.",
      items: [
        {
          quote:
            "Llevamos tres años trabajando con Uxea y no hemos tenido un solo corte que no resolvieran antes de que lo notáramos. Esa tranquilidad no tiene precio.",
          author: "Marta Giménez",
          role: "Directora de Operaciones",
          company: "Nórdica Ingeniería",
        },
        {
          quote:
            "Migramos cuarenta puestos, centralita y servidor principal en un fin de semana. El lunes todo arrancó.",
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
      ],
    },
    {
      blockType: "cta",
      eyebrow: "Siguiente paso",
      heading: "¿Hablamos de tu infraestructura?",
      description:
        "Cuéntanos qué tienes y qué necesitas. Te respondemos con una propuesta clara, con precios y tiempos — sin humo.",
      primaryCta: { label: "Solicitar cotización", href: "/contacto" },
      secondaryCta: { label: "Ver servicios", href: "/servicios" },
      variant: "boxed",
    },
  ];

  const existingHome = await payload.find({
    collection: "pages",
    where: { slug: { equals: "home" } },
    limit: 1,
  });
  const homeData = {
    title: "Inicio",
    slug: "home",
    meta: {
      title: "Uxea Soluciones — La infraestructura que sostiene a tu empresa.",
      description:
        "Uxea Soluciones construye y mantiene la infraestructura tecnológica de empresas: IT, telecomunicaciones, redes, desarrollo de software y servidores.",
    },
    blocks: homeBlocks,
  };
  if (existingHome.totalDocs) {
    await payload.update({
      collection: "pages",
      id: existingHome.docs[0].id,
      data: homeData,
    });
  } else {
    await payload.create({ collection: "pages", data: homeData });
  }
  console.log("✓ Página Inicio (home) creada con sus bloques");

  console.log("\nSeed listo. Entra a /admin y logueate con:");
  console.log(`  email:    ${adminEmail}`);
  console.log(`  password: ${adminPassword}\n`);
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
