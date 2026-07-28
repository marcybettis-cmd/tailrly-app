"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

export default function RequestPage() {
    const router = useRouter();
    const [garmentType, setGarmentType] = useState("");
    const [notes, setNotes] = useState("");
    const [budget, setBudget] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        setError("");

        if (!garmentType.trim()) {
            setError("Please enter a garment type.");
            return;
        }

        setIsSubmitting(true);

        try {
            // Get the current session
            const { data: { session }, error: sessionError } = await supabase.auth.getSession();

            if (sessionError || !session) {
                setError("You must be logged in to submit a request.");
                router.push("/login");
                return;
            }

            const response = await fetch("/api/submit-request", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${session.access_token}`,
                },
                body: JSON.stringify({ garmentType, notes, budget }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data?.error || "Submission failed. Please try again.");
            } else {
                router.push("/request/confirmation");
            }
        } catch (err) {
            console.error("Request submission failed", err);
            setError("Unable to submit your request. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen p-10">
            <h1 className="text-3xl font-bold">Submit Request</h1>
            <p className="mt-2 text-gray-600">
                Tell us what you want tailored or designed.
            </p>

            <div className="mt-8 max-w-lg space-y-4">
                <div>
                    <label htmlFor="garmentType" className="block text-sm font-medium text-gray-700">
                        Garment Type *
                    </label>
                    <input
                        id="garmentType"
                        type="text"
                        placeholder="e.g., Shirt, Pants, Dress"
                        value={garmentType}
                        onChange={(e) => setGarmentType(e.target.value)}
                        className="mt-1 w-full rounded border p-2"
                    />
                </div>

                <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="notes"
                        placeholder="Describe what you want tailored or designed"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="mt-1 w-full rounded border p-2"
                        rows={5}
                    />
                </div>

                <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                        Budget (optional)
                    </label>
                    <input
                        id="budget"
                        type="text"
                        placeholder="e.g., $100-200"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="mt-1 w-full rounded border p-2"
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="rounded bg-black px-4 py-2 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>

                {error && <p className="text-red-600">{error}</p>}
            </div>
        </main>
    );
}