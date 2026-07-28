"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const [email, setEmail] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const checkSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (!session) {
                router.push("/login");
                return;
            }

            setEmail(session.user.email ?? null);
        };

        checkSession();
    }, [router]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/login");
    };

    return (
        <main className="min-h-screen p-10">
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a href="/measurements" className="rounded border p-4 hover:shadow">
                    <h2 className="font-semibold">Measurements</h2>
                    <p className="text-sm text-gray-600">Enter or update your measurements.</p>
                </a>

                <a href="/designers" className="rounded border p-4 hover:shadow">
                    <h2 className="font-semibold">Designers</h2>
                    <p className="text-sm text-gray-600">Browse available tailoring professionals.</p>
                </a>

                <a href="/request" className="rounded border p-4 hover:shadow">
                    <h2 className="font-semibold">Submit Request</h2>
                    <p className="text-sm text-gray-600">Describe what you want tailored or designed.</p>
                </a>

                <a href="/profile" className="rounded border p-4 hover:shadow">
                    <h2 className="font-semibold">Profile</h2>
                    <p className="text-sm text-gray-600">View your account details.</p>
                </a>
                <a href="/user/profile" className="rounded border p-4 hover:shadow">
                    <h2 className="font-semibold">User Profile</h2>
                    <p className="text-sm text-gray-600">Manage your account settings.</p>
                </a>
                <a href="/upload-design" className="rounded border p-4 hover:shadow">
                    <h2 className="font-semibold">Upload Design</h2>
                    <p className="text-sm text-gray-600">Share your design inspiration.</p>
                </a>
                <a href="/request" className="rounded border p-4 hover:shadow">
                    <h2 className="font-semibold">Submit Request</h2>
                    <p className="text-sm text-gray-600">Describe what you want tailored or designed.</p>
                </a>
                <a href="/user/profile" className="rounded border p-4 hover:shadow">
                    <h2 className="font-semibold">User Profile</h2>
                    <p className="text-sm text-gray-600">Manage your account settings.</p>
                </a>
                <a href="/upload-design" className="rounded border p-4 hover:shadow">
                    <h2 className="font-semibold">Upload Design</h2>
                    <p className="text-sm text-gray-600">Share your design inspiration.</p>
                </a>
                <a href="/request" className="rounded border p-4 hover:shadow">
                    <h2 className="font-semibold">Submit Request</h2>
                    <p className="text-sm text-gray-600">Describe what you want tailored or designed.</p>
                    </a>
            </div>

            <button
                onClick={handleLogout}
                className="mt-8 rounded bg-black px-4 py-2 text-white"
            >
                Logout  ({email})
            </button>
        </main>
    );
}