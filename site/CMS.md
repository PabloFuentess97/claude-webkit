# CMS — Uxea Soluciones

Guía corta para operar y extender el CMS.

## Arranque

```bash
cp .env.example .env.local
npm install
npm run build        # compila Next + Payload
npm run seed         # crea admin + contenido inicial
npm run dev          # http://localhost:3000
```

Admin por defecto tras seed:

- URL: `http://localhost:3000/admin`
- email: `admin@uxea.net`
- password: `admin1234`

Cambia la contraseña desde el admin en cuanto entres por primera vez.

## Dev vs Producción

El adaptador de base de datos se decide por `DATABASE_URI`:

- `file:./payload.db` → SQLite (dev).
- `postgres://...`    → PostgreSQL (prod / VPS).

No hay que tocar nada más. El mismo código sirve en los dos entornos.

## Estructura

```
site/src/
├── app/
│   ├── (frontend)/           Web pública. layout.tsx monta html/body/fuentes/Navbar/Footer.
│   └── (payload)/            Admin y API de Payload. Su layout monta <html> propio.
├── collections/              Colecciones Payload (Pages, Services, HostingPlans, Portfolio…)
├── globals/                  Globals (Theme).
├── payload/                  Definiciones de "Blocks" reutilizables del campo blocks de Pages.
├── components/blocks/        Componentes React que renderizan cada block.
│   └── RenderBlocks.tsx      Registry: blockType → componente.
├── lib/payload/              Helpers (getPayload, queries, access).
├── seed/seed.ts              Script de contenido inicial.
└── payload.config.ts         Config de Payload.
```

## Cómo edita el admin la web pública

1. En `/admin/collections/pages` eliges la página (`home`, `servicios`, etc.).
2. Cada página tiene un **campo Blocks**. Arrastra para reordenar, añade o elimina bloques.
3. Cada bloque tiene sus propios campos (titulares, CTAs, items, relaciones…).
4. Al guardar, el hook `afterChange` llama a `revalidatePath(slug)` y la web pública se actualiza.

## Añadir un nuevo tipo de bloque

1. **Definir el schema** en `src/payload/MiBloque.block.ts`:

```ts
import type { Block } from "payload";

export const MiBloque: Block = {
  slug: "miBloque",
  interfaceName: "MiBloqueT",
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "body", type: "textarea" },
  ],
};
```

2. **Registrarlo** en `src/collections/Pages.ts` dentro de `blocks: [ ... ]`.

3. **Crear el componente de render** en `src/components/blocks/MiBloqueBlock.tsx`:

```tsx
export type MiBloqueData = { blockType: "miBloque"; heading: string; body?: string | null };

export default function MiBloqueBlock({ data }: { data: MiBloqueData }) {
  return <section><h2>{data.heading}</h2>{data.body && <p>{data.body}</p>}</section>;
}
```

4. **Registrar en el renderer** (`src/components/blocks/RenderBlocks.tsx`):

```ts
import MiBloqueBlock, { type MiBloqueData } from "./MiBloqueBlock";

export type BlockData = ... | MiBloqueData;

const registry = { ...previousEntries, miBloque: MiBloqueBlock } as const;
```

Con eso, el admin ya ofrece el bloque al editor y la web lo renderiza.

## Añadir una nueva colección

1. Crear `src/collections/MiColeccion.ts` exportando un `CollectionConfig`.
2. Importarla en `src/payload.config.ts` y añadirla al array `collections`.
3. Para consultarla desde la web: usar `getPayload()` y `payload.find({ collection: "mi-coleccion" })`.
4. Opcional: añadir un helper en `src/lib/payload/queries.ts`.

## Permisos

Tres roles/helpers en `src/lib/payload/access.ts`:

- `adminOnly` → solo rol `admin`.
- `adminOrEditor` → `admin` o `editor`.
- `authenticated` → cualquier usuario logueado.

Usa estos helpers en el `access` de cada colección.

## Formulario de contacto

La Server Action `src/app/actions/contact.ts` crea un doc en la colección `contact-messages`. Los admins lo ven en `/admin/collections/contact-messages`.

## Despliegue a VPS

1. Variables en `.env.production` del servidor:

```
DATABASE_URI=postgres://user:pass@localhost:5432/uxea
PAYLOAD_SECRET=<cadena-larga-aleatoria>
NEXT_PUBLIC_SERVER_URL=https://uxea.net
```

2. Build + arranque:

```bash
npm ci --production=false
npm run build
npm run seed     # solo la primera vez
pm2 start npm --name uxea -- start
```

3. Nginx (reverse proxy) apuntando a `localhost:3000`. Añadir `client_max_body_size 50M;` para permitir subidas de media.

## Parche de compatibilidad

Payload 3.83 tiene un bug de interop con `@next/env` v16. El archivo `node_modules/payload/dist/bin/loadEnv.js` necesita usar import namespace en lugar de default. Hay una línea patcheada ya. Si reinstalas, vuelve a aplicar:

```bash
sed -i 's|import nextEnvImport from '"'"'@next/env'"'"';|import * as nextEnvImport from '"'"'@next/env'"'"';|' node_modules/payload/dist/bin/loadEnv.js
```

(O añadir un `postinstall` script si quieres automatizarlo.)
