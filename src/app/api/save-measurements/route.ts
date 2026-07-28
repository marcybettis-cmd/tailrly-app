import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabaseClient";

export async function GET() {
  return NextResponse.json(
    { ok: true, message: "Use POST to submit measurements." },
    { status: 200 }
  );
}

export async function POST(req: Request) {
  try {
    // Get the authorization header
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json(
        { ok: false, error: "Authorization required" },
        { status: 401 }
      );
    }

    // Verify the JWT token
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return NextResponse.json(
        { ok: false, error: "Invalid token" },
        { status: 401 }
      );
    }

    const body = await req.json();

    // Insert into measurements table
    const { data, error } = await supabase
      .from('measurements')
      .insert({
        user_id: user.id,
        data: body, // Store as JSONB
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { ok: false, error: "Failed to save measurements." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { ok: true, message: "Measurements saved successfully.", measurement: data },
      { status: 200 }
    );
  } catch (error) {
    console.error("save-measurements error", error);
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
}
