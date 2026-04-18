import type { Block } from "payload";

export const HeroBlock: Block = {
  slug: "hero",
  labels: {
    singular: "Hero",
    plural: "Heroes",
  },
  interfaceName: "HeroBlockT",
  fields: [
    {
      name: "eyebrow",
      label: "Eyebrow (texto pequeño encima del título)",
      type: "text",
    },
    {
      name: "heading",
      label: "Titular",
      type: "text",
      required: true,
    },
    {
      name: "highlight",
      label: "Palabra destacada (dentro del titular)",
      type: "text",
      admin: {
        description:
          "Si aparece en el titular, se renderiza en color azul. Case sensitive.",
      },
    },
    {
      name: "subheading",
      label: "Subtítulo",
      type: "textarea",
    },
    {
      name: "primaryCta",
      label: "CTA primario",
      type: "group",
      fields: [
        { name: "label", type: "text" },
        { name: "href", type: "text" },
      ],
    },
    {
      name: "secondaryCta",
      label: "CTA secundario",
      type: "group",
      fields: [
        { name: "label", type: "text" },
        { name: "href", type: "text" },
      ],
    },
    {
      name: "stats",
      label: "Métricas (máx. 3)",
      type: "array",
      maxRows: 3,
      fields: [
        { name: "label", type: "text", required: true },
        { name: "value", type: "text", required: true },
      ],
    },
  ],
};
