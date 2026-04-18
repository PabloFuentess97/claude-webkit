import type { CollectionConfig } from "payload";
import { revalidatePath } from "next/cache";
import { HeroBlock } from "../payload/Hero.block";
import { ServicesGridBlock } from "../payload/ServicesGrid.block";
import { BrandsShowcaseBlock } from "../payload/BrandsShowcase.block";
import { TestimonialsBlock } from "../payload/Testimonials.block";
import { CTABlock } from "../payload/CTA.block";
import { RichTextBlock } from "../payload/RichText.block";
import { adminOrEditor } from "../lib/payload/access";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    group: "Estructura",
  },
  access: {
    read: () => true,
    create: adminOrEditor,
    update: adminOrEditor,
    delete: adminOrEditor,
  },
  hooks: {
    afterChange: [
      ({ doc }) => {
        const path = doc?.slug === "home" ? "/" : `/${doc?.slug}`;
        try {
          revalidatePath(path);
        } catch {
          /* revalidatePath puede no estar disponible en ciertos contextos */
        }
      },
    ],
  },
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description:
          "Usa 'home' para la página de inicio. Para el resto, el slug de la URL (ej: 'servicios').",
      },
    },
    {
      name: "meta",
      type: "group",
      label: "SEO",
      fields: [
        { name: "title", type: "text", admin: { description: "Meta title" } },
        { name: "description", type: "textarea" },
      ],
    },
    {
      name: "blocks",
      label: "Bloques de la página",
      type: "blocks",
      admin: {
        description: "Arrastra para reordenar. El orden aquí es el de la web.",
      },
      blocks: [
        HeroBlock,
        ServicesGridBlock,
        BrandsShowcaseBlock,
        TestimonialsBlock,
        CTABlock,
        RichTextBlock,
      ],
    },
  ],
};
