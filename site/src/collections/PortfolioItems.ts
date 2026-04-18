import type { CollectionConfig } from "payload";
import { adminOrEditor } from "../lib/payload/access";

export const PortfolioItems: CollectionConfig = {
  slug: "portfolio",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["client", "title", "category", "year"],
    group: "Contenido",
  },
  access: {
    read: () => true,
    create: adminOrEditor,
    update: adminOrEditor,
    delete: adminOrEditor,
  },
  defaultSort: "-year",
  fields: [
    { name: "client", type: "text", required: true },
    { name: "title", type: "text", required: true },
    { name: "summary", type: "textarea" },
    {
      name: "category",
      type: "select",
      required: true,
      defaultValue: "Landing page",
      options: ["Landing page", "Aplicación web", "E-commerce", "Portal"].map(
        (v) => ({ label: v, value: v })
      ),
    },
    { name: "year", type: "number", required: true },
    {
      name: "gradient",
      type: "text",
      defaultValue: "from-blue-600 to-cyan-500",
      admin: { description: "Clases Tailwind para el gradient de la tarjeta." },
    },
    {
      name: "cover",
      type: "upload",
      relationTo: "media",
      required: false,
    },
  ],
};
