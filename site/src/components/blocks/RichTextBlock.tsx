import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { Section } from "@/components/ui/Section";

export type RichTextBlockData = {
  blockType: "richText";
  content: SerializedEditorState;
};

export default function RichTextBlock({ data }: { data: RichTextBlockData }) {
  return (
    <Section>
      <div className="prose prose-invert max-w-3xl prose-p:text-fg-muted prose-headings:font-display prose-headings:tracking-tight">
        <RichText data={data.content} />
      </div>
    </Section>
  );
}
