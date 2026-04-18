import type { CollectionConfig } from "payload";
import { authenticated } from "../lib/payload/access";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  upload: {
    staticDir: "public/uploads",
    mimeTypes: ["image/*"],
    imageSizes: [
      { name: "thumbnail", width: 400, height: 300, position: "centre" },
      { name: "card", width: 768, height: undefined },
      { name: "hero", width: 1600, height: undefined },
    ],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      admin: { description: "Texto alternativo (accesibilidad)" },
    },
  ],
};
