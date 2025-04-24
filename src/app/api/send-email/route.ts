import { NextRequest, NextResponse } from "next/server";
import { getTranslations } from "next-intl/server";
import ENV from "@/core/config/env";
import data from "@/core/data/user-info.json";

const getEmailHiddenValues = async () => {
  const translate = await getTranslations("Contact");
  return {
    email_goodbye: translate("email_goodbye"),
    email_greeting: translate("email_greeting"),
    email_reason: translate("email_reason"),
    reply_to: data.email,
  };
};

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
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
          template_params: { ...(await getEmailHiddenValues()), ...data },
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
