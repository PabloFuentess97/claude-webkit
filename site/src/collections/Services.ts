import type { CollectionConfig } from "payload";
import { adminOrEditor } from "../lib/payload/access";

export const Services: CollectionConfig = {
  slug: "services",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    group: "Contenido",
  },
  access: {
    read: () => true,
    create: adminOrEditor,
    update: adminOrEditor,
    delete: adminOrEditor,
  },
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: { description: "Ej: infraestructura-it" },
    },
    {
      name: "icon",
      type: "select",
      defaultValue: "Server",
      options: [
        "Server",
        "Network",
        "Code2",
        "Radio",
        "HardDrive",
        "Cloud",
        "Layout",
        "Shield",
        "Zap",
        "Cpu",
      ].map((v) => ({ label: v, value: v })),
    },
    { name: "short", type: "textarea", required: true },
    { name: "long", type: "textarea" },
    {
      name: "features",
      type: "array",
      fields: [{ name: "label", type: "text", required: true }],
    },
  ],
};
