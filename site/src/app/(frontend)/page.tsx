import { notFound } from "next/navigation";
import type { Metadata } from "next";
import RenderBlocks, { type BlockData } from "@/components/blocks/RenderBlocks";
import { getPageBySlug, pageMetadata } from "@/lib/payload/queries";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata("home");
}

export default async function HomePage() {
  const page = await getPageBySlug("home");
  if (!page) notFound();
  return <RenderBlocks blocks={(page.blocks ?? []) as BlockData[]} />;
}
