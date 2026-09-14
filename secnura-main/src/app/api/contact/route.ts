import { NextResponse } from "next/server";
import { contactFormSchema } from "@/features/contact/schema";
import { isRateLimited } from "@/lib/utils/rate-limit";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again in a minute." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const result = contactFormSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { success: false, error: "Please check the form and try again." },
      { status: 422 },
    );
  }

  // Delivery integration (email/CRM) is added here behind environment
  // configuration once a provider is chosen. Logged server-side for now.
  console.info("[contact] new submission", {
    company: result.data.company,
    serviceInterest: result.data.serviceInterest,
  });

  return NextResponse.json({ success: true }, { status: 200 });
}
