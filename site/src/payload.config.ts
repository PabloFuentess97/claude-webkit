import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { postgresAdapter } from "@payloadcms/db-postgres";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Services } from "./collections/Services";
import { HostingPlans } from "./collections/HostingPlans";
import { PortfolioItems } from "./collections/PortfolioItems";
import { ContactMessages } from "./collections/ContactMessages";
import { Pages } from "./collections/Pages";
import { Theme } from "./globals/Theme";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const isPostgres = (process.env.DATABASE_URI ?? "").startsWith("postgres");

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: "— Uxea Admin",
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  editor: lexicalEditor({}),
  collections: [
    Users,
    Media,
    Pages,
    Services,
    HostingPlans,
    PortfolioItems,
    ContactMessages,
  ],
  globals: [Theme],
  db: isPostgres
    ? postgresAdapter({
        pool: {
          connectionString: process.env.DATABASE_URI ?? "",
        },
      })
    : sqliteAdapter({
        client: {
          url:
            process.env.DATABASE_URI ??
            `file:${path.resolve(dirname, "..", "payload.db")}`,
        },
      }),
  secret: process.env.PAYLOAD_SECRET ?? "CHANGE_ME_IN_PROD",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  sharp,
  telemetry: false,
});
