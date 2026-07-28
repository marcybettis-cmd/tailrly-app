"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

export default function TailorLogin() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || loading) return;
    setLoading(true);

    const origin = window.location.origin;

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${origin}/tailor/profile`,
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Check your email for the tailor login link.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">Tailrly Tailor Login</h1>
      <p className="mt-3 text-gray-600">Sign in to manage your designer profile.</p>

      <div className="mt-8">
        <input
          type="email"
          placeholder="Enter your business email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2"
        />
        <button
          onClick={handleLogin}
          disabled={!email || loading}
          className="ml-2 bg-black px-4 py-2 text-white disabled:opacity-50"
        >
          {loading ? "Sending..." : "Continue"}
        </button>
      </div>
    </main>
  );
}