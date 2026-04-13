"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function ProfilePage() {
    const [email, setEmail] = useState("");

    useEffect(() => {
        const loadUser = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            setEmail(user?.email ?? "");
        };

        loadUser();
    }, []);

    return (
        <main className="min-h-screen p-10">
            <h1 className="text-3xl font-bold">Profile</h1>
            <p className="mt-4">Email: {email || "No user loaded"}</p>
        </main>
    );
}