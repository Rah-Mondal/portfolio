import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/mailer";

export async function GET() {
  return NextResponse.json({ ok: true, route: "/api/contact" });
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await sendEmail({ name, email, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to send email",
      },
      { status: 500 }
    );
  }
}
