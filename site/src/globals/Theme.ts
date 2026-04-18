import type { GlobalConfig } from "payload";
import { revalidatePath } from "next/cache";
import { adminOnly } from "../lib/payload/access";

export const Theme: GlobalConfig = {
  slug: "theme",
  label: "Tema global",
  admin: {
    group: "Ajustes",
    description:
      "Colores y tipografía globales. Aplican a toda la web pública.",
  },
  access: {
    read: () => true,
    update: adminOnly,
  },
  hooks: {
    afterChange: [
      () => {
        try {
          revalidatePath("/", "layout");
        } catch {}
      },
    ],
  },
  fields: [
    {
      name: "colors",
      type: "group",
      label: "Colores",
      fields: [
        {
          name: "brand",
          type: "text",
          defaultValue: "#2563eb",
          admin: { description: "Color primario (hex, ej: #2563eb)" },
        },
        {
          name: "brandHover",
          type: "text",
          defaultValue: "#1d4ed8",
        },
        {
          name: "accent",
          type: "text",
          defaultValue: "#8b5cf6",
        },
      ],
    },
    {
      name: "typography",
      type: "group",
      label: "Tipografía",
      fields: [
        {
          name: "headingFont",
          type: "select",
          defaultValue: "space-grotesk",
          options: [
            { label: "Space Grotesk", value: "space-grotesk" },
            { label: "Geist Sans", value: "geist" },
            { label: "Inter", value: "inter" },
            { label: "Manrope", value: "manrope" },
          ],
        },
        {
          name: "bodyFont",
          type: "select",
          defaultValue: "geist",
          options: [
            { label: "Geist Sans", value: "geist" },
            { label: "Inter", value: "inter" },
            { label: "Manrope", value: "manrope" },
          ],
        },
      ],
    },
    {
      name: "site",
      type: "group",
      label: "Identidad del sitio",
      fields: [
        { name: "name", type: "text", defaultValue: "Uxea Soluciones" },
        {
          name: "tagline",
          type: "text",
          defaultValue: "La infraestructura que sostiene a tu empresa.",
        },
        {
          name: "email",
          type: "email",
          defaultValue: "contacto@uxea.net",
        },
        { name: "phone", type: "text", defaultValue: "+34 900 000 000" },
        {
          name: "social",
          type: "group",
          fields: [
            { name: "linkedin", type: "text" },
            { name: "x", type: "text" },
            { name: "instagram", type: "text" },
          ],
        },
      ],
    },
  ],
};
