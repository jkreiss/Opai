import { NextResponse } from "next/server";
import { TurnstileError, verifyTurnstile } from "nextjs-turnstile";

export async function POST(request: Request) {
  let body: { token?: string };

  try {
    body = (await request.json()) as { token?: string };
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const token = body.token?.trim();
  if (!token) {
    return NextResponse.json({ error: "Missing Turnstile token." }, { status: 400 });
  }

  try {
    await verifyTurnstile(token, { action: "contact_form" });
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof TurnstileError) {
      return NextResponse.json(
        { error: "Turnstile verification failed.", codes: error.errorCodes },
        { status: 400 }
      );
    }

    return NextResponse.json({ error: "Unable to verify Turnstile." }, { status: 500 });
  }
}
