import { NextRequest, NextResponse } from "next/server";
import { getTranslations } from "next-intl/server";
import ENV from "@/core/config/env";
import data from "@/core/data/user-info.json";

// Solo estos campos se reenvían a la plantilla de EmailJS. Cualquier otra
// propiedad del payload (incluyendo intentos de inyectar parámetros extra)
// se descarta.
const FIELD_LIMITS = {
  name: 100,
  email: 254,
  subject: 150,
  message: 5000,
} as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Campo señuelo (honeypot): los bots tienden a completar todos los inputs.
// Si viene con valor, es spam.
const HONEYPOT_FIELD = "company";

type ContactPayload = Record<keyof typeof FIELD_LIMITS, string>;

const validate = (input: unknown): ContactPayload | null => {
  if (typeof input !== "object" || input === null) return null;
  const record = input as Record<string, unknown>;

  if (typeof record[HONEYPOT_FIELD] === "string" && record[HONEYPOT_FIELD]) {
    return null;
  }

  const result = {} as ContactPayload;
  for (const [field, maxLength] of Object.entries(FIELD_LIMITS)) {
    const value = record[field];
    if (typeof value !== "string") return null;
    const trimmed = value.trim();
    if (!trimmed || trimmed.length > maxLength) return null;
    result[field as keyof ContactPayload] = trimmed;
  }

  if (!EMAIL_REGEX.test(result.email)) return null;

  return result;
};

const getEmailValues = async (values: ContactPayload) => {
  const translate = await getTranslations("Contact");
  return {
    ...values,
    email_goodbye: translate("email_goodbye"),
    email_greeting: translate("email_greeting"),
    email_reason: translate("email_reason"),
    reply_to: data.email,
  };
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const values = validate(body);

    if (!values) {
      return NextResponse.json(
        { ok: false, message: "Invalid request" },
        { status: 400 },
      );
    }

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: ENV.EMAIL_SERVICE_ID,
          template_id: ENV.EMAIL_TEMPLATE_ID,
          user_id: ENV.EMAILJS_PUBLIC_KEY,
          template_params: await getEmailValues(values),
        }),
      },
    );

    return NextResponse.json(
      {
        ok: response.ok,
        message: response.statusText,
      },
      { status: response.status },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : error;
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}
