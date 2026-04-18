import type { Block } from "payload";

export const CTABlock: Block = {
  slug: "cta",
  labels: {
    singular: "CTA",
    plural: "CTAs",
  },
  interfaceName: "CTABlockT",
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "primaryCta",
      type: "group",
      fields: [
        { name: "label", type: "text" },
        { name: "href", type: "text" },
      ],
    },
    {
      name: "secondaryCta",
      type: "group",
      fields: [
        { name: "label", type: "text" },
        { name: "href", type: "text" },
      ],
    },
    {
      name: "variant",
      type: "select",
      defaultValue: "boxed",
      options: [
        { label: "Caja con borde", value: "boxed" },
        { label: "Inline simple", value: "inline" },
      ],
    },
  ],
};
