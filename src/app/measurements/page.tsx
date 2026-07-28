"use client";

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
