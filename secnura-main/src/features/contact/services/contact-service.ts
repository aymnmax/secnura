import { postJson } from "@/lib/api/client";
import type { ContactFormValues } from "@/features/contact/schema";

interface ContactResponse {
  success: boolean;
}

export function submitContactForm(values: ContactFormValues) {
  return postJson<ContactResponse, ContactFormValues>("/api/contact", values);
}
