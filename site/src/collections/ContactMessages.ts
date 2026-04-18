import type { CollectionConfig } from "payload";
import { adminOnly, authenticated } from "../lib/payload/access";

export const ContactMessages: CollectionConfig = {
  slug: "contact-messages",
  admin: {
    useAsTitle: "email",
    defaultColumns: ["nombre", "email", "interes", "createdAt"],
    group: "Mensajes",
  },
  access: {
    read: authenticated,
    create: () => true, // Creación pública (desde el formulario)
    update: authenticated,
    delete: adminOnly,
  },
  defaultSort: "-createdAt",
  fields: [
    { name: "nombre", type: "text", required: true },
    { name: "empresa", type: "text" },
    { name: "email", type: "email", required: true },
    { name: "telefono", type: "text" },
    {
      name: "interes",
      type: "select",
      options: [
        "Infraestructura IT",
        "Telecomunicaciones",
        "Redes",
        "Desarrollo de software",
        "Servidores",
        "Uxea.Cloud (VPS / hosting)",
        "Wyweb (web / agencia)",
        "Otro",
      ].map((v) => ({ label: v, value: v })),
    },
    { name: "mensaje", type: "textarea", required: true },
    {
      name: "estado",
      type: "select",
      defaultValue: "nuevo",
      options: [
        { label: "Nuevo", value: "nuevo" },
        { label: "Leído", value: "leido" },
        { label: "Respondido", value: "respondido" },
        { label: "Archivado", value: "archivado" },
      ],
    },
  ],
};
