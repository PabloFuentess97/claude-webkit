import { getPayload as getPayloadInstance } from "payload";
import config from "@/payload.config";

// Singleton cliente de Payload reutilizado entre requests
// (Next.js lo deduplica por worker).
let cached: ReturnType<typeof getPayloadInstance> | null = null;

export async function getPayload() {
  if (!cached) {
    cached = getPayloadInstance({ config });
  }
  return cached;
}
