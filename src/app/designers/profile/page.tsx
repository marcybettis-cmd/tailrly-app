"use client";

import { useState } from "react";

export default function TailorProfile() {
  const [businessName, setBusinessName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");

  const saveProfile = () => {
    localStorage.setItem(
      "tailrly_tailor_profile",
      JSON.stringify({ businessName, specialty, location, bio })
    );
    alert("Designer profile saved.");
  };

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold">Designer Profile</h1>
      <p className="mt-2 text-gray-600">Create your Tailrly designer listing.</p>

      <div className="mt-8 max-w-lg space-y-4">
        <input
          placeholder="Business or designer name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className="w-full rounded border p-2"
        />
        <input
          placeholder="Specialty"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          className="w-full rounded border p-2"
        />
        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full rounded border p-2"
        />
        <textarea
          placeholder="Short designer bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full rounded border p-2"
          rows={5}
        />
        <button onClick={saveProfile} className="rounded bg-black px-4 py-2 text-white">
          Save Designer Profile
        </button>
      </div>
    </main>
  );
}