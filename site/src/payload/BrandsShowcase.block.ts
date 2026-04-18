import type { Block } from "payload";

export const BrandsShowcaseBlock: Block = {
  slug: "brandsShowcase",
  labels: {
    singular: "Showcase de sub-marcas",
    plural: "Showcases",
  },
  interfaceName: "BrandsShowcaseBlockT",
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "brands",
      type: "array",
      minRows: 1,
      maxRows: 3,
      fields: [
        { name: "name", type: "text", required: true },
        { name: "tagline", type: "text" },
        { name: "description", type: "textarea" },
        { name: "href", type: "text", required: true },
        {
          name: "accent",
          type: "select",
          defaultValue: "blue",
          options: [
            { label: "Azul", value: "blue" },
            { label: "Violeta", value: "violet" },
            { label: "Esmeralda", value: "emerald" },
            { label: "Ámbar", value: "amber" },
          ],
        },
        {
          name: "tags",
          type: "array",
          fields: [{ name: "label", type: "text", required: true }],
        },
      ],
    },
  ],
};
