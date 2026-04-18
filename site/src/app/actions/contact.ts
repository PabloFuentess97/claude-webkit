"use server";

import { getPayload } from "@/lib/payload/getPayload";

export type ContactState = {
  status: "idle" | "ok" | "error";
  message?: string;
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const nombre = String(formData.get("nombre") ?? "").trim();
  const empresa = String(formData.get("empresa") ?? "").trim() || undefined;
  const email = String(formData.get("email") ?? "").trim();
  const telefono = String(formData.get("telefono") ?? "").trim() || undefined;
  const interes = String(formData.get("interes") ?? "").trim() || undefined;
  const mensaje = String(formData.get("mensaje") ?? "").trim();
  const consentimiento = Boolean(formData.get("consentimiento"));

  if (!nombre || nombre.length < 2) {
    return { status: "error", message: "Pon un nombre válido." };
  }
  if (!isEmail(email)) {
    return { status: "error", message: "El email no es válido." };
  }
  if (!mensaje || mensaje.length < 10) {
    return {
      status: "error",
      message: "El mensaje es demasiado corto (mínimo 10 caracteres).",
    };
  }
  if (!consentimiento) {
    return { status: "error", message: "Tienes que aceptar el consentimiento." };
  }

  try {
    const payload = await getPayload();
    await payload.create({
      collection: "contact-messages",
      data: {
        nombre,
        empresa,
        email,
        telefono,
        interes,
        mensaje,
        estado: "nuevo",
      },
    });
    return {
      status: "ok",
      message: "Mensaje recibido. Te respondemos en menos de 24 horas.",
    };
  } catch (err) {
    console.error("[contact] error al guardar:", err);
    return {
      status: "error",
      message:
        "No hemos podido guardar tu mensaje. Escríbenos a contacto@uxea.net.",
    };
  }
}
