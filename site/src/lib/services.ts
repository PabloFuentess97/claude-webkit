import {
  Server,
  Network,
  Code2,
  Radio,
  HardDrive,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  icon: LucideIcon;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "infraestructura-it",
    title: "Infraestructura IT",
    short: "Arquitectura, despliegue y gestión de sistemas.",
    long: "Diseñamos tu stack desde cero o modernizamos el que ya tienes. Servidores físicos, virtualización, contenedores y nube híbrida — gestionados por un equipo que responde.",
    icon: Server,
    features: [
      "Auditoría inicial y plan a 12 meses",
      "Virtualización con Proxmox / VMware",
      "Backups y recuperación probados",
      "Monitorización 24/7",
    ],
  },
  {
    slug: "telecomunicaciones",
    title: "Telecomunicaciones",
    short: "Voz, datos y conectividad empresarial.",
    long: "Centralitas IP, fibra dedicada, enlaces redundantes y telefonía en la nube. Montamos lo que tu oficina necesita para no quedarse incomunicada.",
    icon: Radio,
    features: [
      "Centralitas VoIP (3CX, FreePBX)",
      "Fibra simétrica y respaldos 4G/5G",
      "SIP trunking y numeración",
      "SLA con tiempos de respuesta claros",
    ],
  },
  {
    slug: "redes",
    title: "Redes",
    short: "Redes cableadas y wifi que aguantan carga real.",
    long: "Cableado estructurado, switches gestionados, VLANs, VPNs y wifi mesh. Segmentamos, aseguramos y documentamos cada red que tocamos.",
    icon: Network,
    features: [
      "Cableado categoría 6A / fibra",
      "Equipos Ubiquiti, MikroTik, Cisco",
      "VPN site-to-site y acceso remoto",
      "Planos y documentación entregados",
    ],
  },
  {
    slug: "desarrollo",
    title: "Desarrollo de software",
    short: "Aplicaciones web y a medida.",
    long: "Desarrollamos plataformas, portales internos, integraciones con ERP y automatizaciones. Código limpio, stack moderno, mantenimiento incluido.",
    icon: Code2,
    features: [
      "Aplicaciones web con Next.js / Node",
      "Integraciones API y ERP",
      "Automatización de procesos",
      "Mantenimiento evolutivo",
    ],
  },
  {
    slug: "servidores",
    title: "Venta y gestión de servidores",
    short: "Hardware serio con gestión incluida.",
    long: "Vendemos, configuramos y administramos servidores físicos y virtuales. Desde una torre para una pyme hasta un rack completo con alta disponibilidad.",
    icon: HardDrive,
    features: [
      "Dell, HPE, Supermicro",
      "Configuración RAID y failover",
      "Colocation en datacenters Tier III",
      "Gestión continua incluida",
    ],
  },
];
