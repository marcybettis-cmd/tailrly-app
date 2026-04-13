"use client";

import { useState } from "react";

export default function RequestPage() {
    const [garmentType, setGarmentType] = useState("");
    const [notes, setNotes] = useState("");
    const [budget, setBudget] = useState("");

    const handleSubmit = () => {
        alert("Request submitted.");
    };

    return (
        <main className="min-h-screen p-10">
            <h1 className="text-3xl font-bold">Submit Request</h1>
            <p className="mt-2 text-gray-600">
                Tell us what you want tailored or designed.
            </p>

            <div className="mt-8 max-w-lg space-y-4">
                <input
                    type="text"
                    placeholder="Garment type"
                    value={garmentType}
                    onChange={(e) => setGarmentType(e.target.value)}
                    className="w-full rounded border p-2"
                />

                <textarea
                    placeholder="Describe what you want"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full rounded border p-2"
                    rows={5}
                />

                <input
                    type="text"
                    placeholder="Budget (optional)"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full rounded border p-2"
                />

                <button
                    onClick={handleSubmit}
                    className="rounded bg-black px-4 py-2 text-white"
                >
                    Submit Request
                </button>
            </div>
        </main>
    );
}