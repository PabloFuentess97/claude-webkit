import type { Block } from "payload";

export const TestimonialsBlock: Block = {
  slug: "testimonials",
  labels: {
    singular: "Testimonios",
    plural: "Testimonios",
  },
  interfaceName: "TestimonialsBlockT",
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    {
      name: "items",
      type: "array",
      minRows: 1,
      fields: [
        { name: "quote", type: "textarea", required: true },
        { name: "author", type: "text", required: true },
        { name: "role", type: "text" },
        { name: "company", type: "text" },
      ],
    },
  ],
};
