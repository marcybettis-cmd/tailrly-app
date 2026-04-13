"use client";

import { useState } from "react";
import MeasurementsForm from "../../components/app/MeasurementsForm";

export default function MeasurementsPage() {
    return (
        <main className="min-h-screen p-10">
            <h1 className="text-3xl font-bold">Measurements</h1>
            <p className="mt-2 text-gray-600">
                Enter and save your measurements.
            </p>

            <div className="mt-8">
                <MeasurementsForm />
            </div>
        </main>
    );
}

return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Measurements</h1>
            {submitted && data ? (
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-4">Saved values</h2>
                    <ul className="space-y-2 text-gray-700">
                        <li>Height: {data.height} inches</li>
                        <li>Weight: {data.weight} pounds</li>
                        <li>Waist: {data.waist} inches</li>
                    </ul>
                </div>
            ) : (
                <MeasurementsForm onSubmit={handleFormSubmit} />
            )}
        </div>
    </div>
);
}
