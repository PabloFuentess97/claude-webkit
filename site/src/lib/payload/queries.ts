import { getPayload } from "./getPayload";
import type { Metadata } from "next";

export async function getPageBySlug(slug: string) {
  const payload = await getPayload();
  const res = await payload.find({
    collection: "pages",
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  });
  return res.docs[0] ?? null;
}

export async function pageMetadata(slug: string): Promise<Metadata> {
  const page = await getPageBySlug(slug);
  if (!page) return {};
  return {
    title: page.meta?.title ?? page.title,
    description: page.meta?.description ?? undefined,
  };
}

export async function getTheme() {
  const payload = await getPayload();
  return payload.findGlobal({ slug: "theme", depth: 0 });
}

export async function getHostingPlans() {
  const payload = await getPayload();
  const res = await payload.find({
    collection: "hosting-plans",
    sort: "order",
    limit: 100,
  });
  return res.docs;
}

export async function getPortfolio() {
  const payload = await getPayload();
  const res = await payload.find({
    collection: "portfolio",
    sort: "-year",
    limit: 100,
  });
  return res.docs;
}

export async function getServices() {
  const payload = await getPayload();
  const res = await payload.find({
    collection: "services",
    sort: "createdAt",
    limit: 100,
  });
  return res.docs;
}
