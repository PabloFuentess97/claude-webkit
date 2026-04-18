import type { CollectionConfig } from "payload";
import { adminOrEditor } from "../lib/payload/access";

export const HostingPlans: CollectionConfig = {
  slug: "hosting-plans",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "priceMonth", "featured", "order"],
    group: "Contenido",
  },
  access: {
    read: () => true,
    create: adminOrEditor,
    update: adminOrEditor,
    delete: adminOrEditor,
  },
  defaultSort: "order",
  fields: [
    { name: "name", type: "text", required: true },
    { name: "tagline", type: "text" },
    {
      name: "priceMonth",
      type: "number",
      required: true,
      admin: { description: "Precio mensual. Usa 0 para 'a medida'." },
    },
    { name: "currency", type: "text", defaultValue: "€", required: true },
    { name: "cpu", type: "text", required: true },
    { name: "ram", type: "text", required: true },
    { name: "storage", type: "text", required: true },
    { name: "bandwidth", type: "text", required: true },
    { name: "featured", type: "checkbox", defaultValue: false },
    { name: "order", type: "number", defaultValue: 0 },
    {
      name: "features",
      type: "array",
      fields: [{ name: "label", type: "text", required: true }],
    },
  ],
};
