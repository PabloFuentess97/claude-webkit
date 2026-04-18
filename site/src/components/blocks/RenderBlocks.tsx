import HeroBlock, { type HeroBlockData } from "./HeroBlock";
import ServicesGridBlock, {
  type ServicesGridBlockData,
} from "./ServicesGridBlock";
import BrandsShowcaseBlock, {
  type BrandsShowcaseBlockData,
} from "./BrandsShowcaseBlock";
import TestimonialsBlock, {
  type TestimonialsBlockData,
} from "./TestimonialsBlock";
import CTABlock, { type CTABlockData } from "./CTABlock";
import RichTextBlock, { type RichTextBlockData } from "./RichTextBlock";

export type BlockData =
  | HeroBlockData
  | ServicesGridBlockData
  | BrandsShowcaseBlockData
  | TestimonialsBlockData
  | CTABlockData
  | RichTextBlockData;

/* Registry: blockType → componente.
 * Añadir un nuevo bloque = crear archivo + exportar tipo + registrar aquí. */
const registry = {
  hero: HeroBlock,
  servicesGrid: ServicesGridBlock,
  brandsShowcase: BrandsShowcaseBlock,
  testimonials: TestimonialsBlock,
  cta: CTABlock,
  richText: RichTextBlock,
} as const;

export default function RenderBlocks({ blocks }: { blocks: BlockData[] }) {
  if (!blocks?.length) return null;
  return (
    <>
      {blocks.map((block, idx) => {
        const Component = registry[block.blockType] as React.ComponentType<{
          data: BlockData;
        }>;
        if (!Component) {
          if (process.env.NODE_ENV !== "production") {
            console.warn(`Block sin renderer: ${block.blockType}`);
          }
          return null;
        }
        return <Component key={idx} data={block} />;
      })}
    </>
  );
}
