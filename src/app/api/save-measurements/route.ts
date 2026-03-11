import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { ok: true, message: "Use POST to submit measurements." },
    { status: 200 }
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    return NextResponse.json({ ok: true, received: body }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
}
