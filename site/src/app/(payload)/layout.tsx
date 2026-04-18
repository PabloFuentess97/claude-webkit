/* Layout del admin de Payload. No comparte chrome con el frontend. */
import type { ServerFunctionClient } from "payload";
import type { Metadata } from "next";
import config from "@/payload.config";
import { handleServerFunctions, RootLayout } from "@payloadcms/next/layouts";
import { importMap } from "./admin/importMap";

import "@payloadcms/next/css";
import "./custom.scss";

export const metadata: Metadata = {
  title: "Uxea Admin",
};

const serverFunction: ServerFunctionClient = async (args) => {
  "use server";
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  });
};

type Args = {
  children: React.ReactNode;
};

export default function Layout({ children }: Args) {
  return (
    <RootLayout
      config={config}
      importMap={importMap}
      serverFunction={serverFunction}
    >
      {children}
    </RootLayout>
  );
}
