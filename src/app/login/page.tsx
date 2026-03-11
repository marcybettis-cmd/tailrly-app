"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function Login() {
  const [email, setEmail] = useState("")

  const handleLogin = async () => {
    await supabase.auth.signInWithOtp({
      email,
    })
    alert("Check your email!")
  }

  return (
    <div className="p-10">
      <input
        type="email"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2"
      />
      <button
        onClick={handleLogin}
        className="ml-2 bg-black text-white p-2"
      >
        Login
      </button>
    </div>
  )
}