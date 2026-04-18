"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { site } from "@/lib/site";

const initial: ContactState = { status: "idle" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initial);

  return (
    <form
      action={formAction}
      className="rounded-xl border border-border bg-surface p-6 md:p-8"
      aria-label="Formulario de contacto"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-fg">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            autoComplete="name"
            className="mt-2 block w-full rounded-md border border-border bg-bg px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="empresa" className="block text-sm font-medium text-fg">
            Empresa
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            autoComplete="organization"
            className="mt-2 block w-full rounded-md border border-border bg-bg px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
            placeholder="Nombre de tu empresa"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-fg">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 block w-full rounded-md border border-border bg-bg px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
            placeholder="tu@email.com"
          />
        </div>
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-fg">
            Teléfono <span className="font-normal text-fg-subtle">(opcional)</span>
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            className="mt-2 block w-full rounded-md border border-border bg-bg px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
            placeholder="+34 ..."
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="interes" className="block text-sm font-medium text-fg">
          ¿En qué podemos ayudarte?
        </label>
        <select
          id="interes"
          name="interes"
          className="mt-2 block w-full rounded-md border border-border bg-bg px-3.5 py-2.5 text-sm text-fg focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          defaultValue=""
        >
          <option value="" disabled>
            Elige un área
          </option>
          <option>Infraestructura IT</option>
          <option>Telecomunicaciones</option>
          <option>Redes</option>
          <option>Desarrollo de software</option>
          <option>Servidores</option>
          <option>Uxea.Cloud (VPS / hosting)</option>
          <option>Wyweb (web / agencia)</option>
          <option>Otro</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="mensaje" className="block text-sm font-medium text-fg">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={6}
          className="mt-2 block w-full rounded-md border border-border bg-bg px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          placeholder="Cuéntanos el contexto, el alcance que imaginas y cualquier detalle relevante."
        />
      </div>

      <div className="mt-5 flex items-start gap-3">
        <input
          id="consentimiento"
          name="consentimiento"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-border text-brand focus:ring-brand"
        />
        <label htmlFor="consentimiento" className="text-sm text-fg-muted">
          Acepto que {site.name} me contacte por los datos facilitados.
        </label>
      </div>

      {state.message && (
        <p
          role="status"
          aria-live="polite"
          className={`mt-5 rounded-md border px-4 py-2.5 text-sm ${
            state.status === "ok"
              ? "border-success/40 bg-success/10 text-success"
              : "border-danger/40 bg-danger/10 text-danger"
          }`}
        >
          {state.message}
        </p>
      )}

      <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-fg-subtle">
          Guardamos tu mensaje en nuestra base de datos para gestionarlo desde el
          panel.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-11 items-center justify-center gap-1.5 rounded-md bg-brand px-5 text-sm font-medium text-white transition-colors hover:bg-brand-hover disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand focus-visible:ring-offset-bg"
        >
          {pending ? "Enviando…" : "Enviar mensaje"}
        </button>
      </div>
    </form>
  );
}
