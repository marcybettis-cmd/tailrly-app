'use client';

import { useState } from 'react';
import MeasurementsForm from './MeasurementsForm';

export default function MeasurementsPage() {
    const [submitted, setSubmitted] = useState(false);
    const [data, setData] = useState<{ height: string; weight: string; waist: string } | null>(null);

    const handleFormSubmit = (values: { height: string; weight: string; waist: string }) => {
        setData(values);
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
            <div className="w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Measurements</h1>
                {submitted && data ? (
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-lg font-semibold mb-4">Saved values</h2>
                        <ul className="space-y-2 text-gray-700">
                            <li>Height: {data.height} cm</li>
                            <li>Weight: {data.weight} kg</li>
                            <li>Waist: {data.waist} cm</li>
                        </ul>
                    </div>
                ) : (
                    <MeasurementsForm onSubmit={handleFormSubmit} />
                )}
            </div>
        </div>
    );
}
