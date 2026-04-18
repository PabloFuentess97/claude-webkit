import type { Block } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const RichTextBlock: Block = {
  slug: "richText",
  labels: {
    singular: "Texto enriquecido",
    plural: "Textos",
  },
  interfaceName: "RichTextBlockT",
  fields: [
    {
      name: "content",
      type: "richText",
      editor: lexicalEditor({}),
      required: true,
    },
  ],
};
