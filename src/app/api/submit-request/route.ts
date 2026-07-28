import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabaseClient";

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
        const { garmentType, notes, budget } = body;

        if (!garmentType || typeof garmentType !== "string" || !garmentType.trim()) {
            return NextResponse.json(
                { ok: false, error: "Garment type is required." },
                { status: 400 }
            );
        }

        // Insert into requests table
        const { data, error } = await supabase
            .from('requests')
            .insert({
                user_id: user.id,
                garment_type: garmentType.trim(),
                notes: notes?.trim() || null,
                budget: budget?.trim() || null,
            })
            .select()
            .single();

        if (error) {
            console.error("Supabase insert error:", error);
            return NextResponse.json(
                { ok: false, error: "Failed to save request." },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                ok: true,
                message: "Request submitted successfully.",
                request: data,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("submit-request error", error);
        return NextResponse.json(
            { ok: false, error: "Invalid request body." },
            { status: 400 }
        );
    }
}
