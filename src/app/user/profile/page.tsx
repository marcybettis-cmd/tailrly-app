"use client";

import { useState } from "react";

export default function UserProfile() {
  const [name, setName] = useState("");
  const [stylePreference, setStylePreference] = useState("");
  const [fitChallenges, setFitChallenges] = useState("");

  const saveProfile = () => {
    localStorage.setItem(
      "tailrly_user_profile",
      JSON.stringify({ name, stylePreference, fitChallenges })
    );
    alert("User profile saved.");
  };

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold">User Profile</h1>
      <p className="mt-2 text-gray-600">Tell designers more about your fit and style needs.</p>

      <div className="mt-8 max-w-lg space-y-4">
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded border p-2"
        />
        <input
          placeholder="Style preference"
          value={stylePreference}
          onChange={(e) => setStylePreference(e.target.value)}
          className="w-full rounded border p-2"
        />
        <textarea
          placeholder="Fit challenges"
          value={fitChallenges}
          onChange={(e) => setFitChallenges(e.target.value)}
          className="w-full rounded border p-2"
          rows={5}
        />
        <button onClick={saveProfile} className="rounded bg-black px-4 py-2 text-white">
          Save Profile
        </button>
      </div>
    </main>
  );
}