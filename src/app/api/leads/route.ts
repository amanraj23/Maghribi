import { NextResponse } from "next/server";
import { submitLeadToSheet } from "@/lib/googleSheets";
import { isRateLimited } from "@/lib/rateLimit";
import { leadSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "local";

    if (isRateLimited(ip)) {
      return NextResponse.json({ message: "Too many requests. Please try again shortly." }, { status: 429 });
    }

    const body = await request.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Please check the highlighted fields.", issues: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ message: "Thank you. Our property advisor will contact you shortly." });
    }

    await submitLeadToSheet(parsed.data, request);

    return NextResponse.json({ message: "Thank you. Our property advisor will contact you shortly." });
  } catch {
    return NextResponse.json({ message: "We could not submit your enquiry right now." }, { status: 500 });
  }
}
