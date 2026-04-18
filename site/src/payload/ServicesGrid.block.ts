import type { Block } from "payload";

export const ServicesGridBlock: Block = {
  slug: "servicesGrid",
  labels: {
    singular: "Grid de servicios",
    plural: "Grids de servicios",
  },
  interfaceName: "ServicesGridBlockT",
  fields: [
    {
      name: "eyebrow",
      type: "text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "linkAll",
      label: "Link 'ver todos'",
      type: "group",
      fields: [
        { name: "label", type: "text" },
        { name: "href", type: "text" },
      ],
    },
    {
      name: "services",
      label: "Servicios a mostrar",
      type: "relationship",
      relationTo: "services",
      hasMany: true,
      required: true,
    },
  ],
};
