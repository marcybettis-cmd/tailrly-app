"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    try {
      setLoading(true);

      const origin = typeof window !== "undefined" ? window.location.origin : "http://localhost:3000";
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: `${origin}/dashboard` },
      });

      if (error) {
        alert(error.message);
        return;
      }

      alert("Check your email for the login link.");
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Login</h1>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-4 border p-2"
      />

      <button
        onClick={handleLogin}
        disabled={!email}
        className="ml-2 bg-black px-4 py-2 text-white"
      >
        Continue
      </button>
    </div>
  );
}