'use client';

import { useState, FormEvent } from 'react';
import { supabase } from '../../lib/supabaseClient';

interface Measurements {
    height: string;
    weight: string;
    waist: string;
}

interface Props {
    onSubmit?: (values: Measurements) => void;
}

export default function MeasurementsForm({ onSubmit }: Props) {
    const [values, setValues] = useState<Measurements>({
        height: '',
        weight: '',
        waist: '',
    });
    const [errors, setErrors] = useState<Partial<Measurements>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const validate = (): boolean => {
        const newErrors: Partial<Measurements> = {};

        if (!values.height) {
            newErrors.height = 'Height is required';
        } else if (isNaN(Number(values.height))) {
            newErrors.height = 'Must be a number';
        }

        if (!values.weight) {
            newErrors.weight = 'Weight is required';
        } else if (isNaN(Number(values.weight))) {
            newErrors.weight = 'Must be a number';
        }

        if (!values.waist) {
            newErrors.waist = 'Waist measurement is required';
        } else if (isNaN(Number(values.waist))) {
            newErrors.waist = 'Must be a number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (field: keyof Measurements) => (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setValues({ ...values, [field]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        setSubmitError(null);

        try {
            // Get the current session
            const { data: { session }, error: sessionError } = await supabase.auth.getSession();

            if (sessionError || !session) {
                setSubmitError("You must be logged in to save measurements.");
                return;
            }

            const response = await fetch("/api/save-measurements", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${session.access_token}`,
                },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (!response.ok) {
                setSubmitError(data?.error || "Failed to save measurements.");
            } else {
                onSubmit?.(values);
                // Reset form or show success
                setValues({ height: '', weight: '', waist: '' });
            }
        } catch (err) {
            console.error("Measurements save failed", err);
            setSubmitError("Unable to save measurements. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {submitError && (
                <div className="rounded-md bg-red-50 p-4">
                    <p className="text-sm text-red-600">{submitError}</p>
                </div>
            )}

            {/* height */}
            <div>
                <label
                    htmlFor="height"
                    className="block text-sm font-medium text-gray-700"
                >
                    Height (cm)
                </label>
                <input
                    id="height"
                    name="height"
                    type="text"
                    value={values.height}
                    onChange={handleChange('height')}
                    className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.height ? 'border-red-500' : 'border-gray-300'
                        }`}
                />
                {errors.height && (
                    <p className="mt-1 text-sm text-red-600">{errors.height}</p>
                )}
            </div>

            {/* weight */}
            <div>
                <label
                    htmlFor="weight"
                    className="block text-sm font-medium text-gray-700"
                >
                    Weight (kg)
                </label>
                <input
                    id="weight"
                    name="weight"
                    type="text"
                    value={values.weight}
                    onChange={handleChange('weight')}
                    className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.weight ? 'border-red-500' : 'border-gray-300'
                        }`}
                />
                {errors.weight && (
                    <p className="mt-1 text-sm text-red-600">{errors.weight}</p>
                )}
            </div>

            {/* waist */}
            <div>
                <label
                    htmlFor="waist"
                    className="block text-sm font-medium text-gray-700"
                >
                    Waist (cm)
                </label>
                <input
                    id="waist"
                    name="waist"
                    type="text"
                    value={values.waist}
                    onChange={handleChange('waist')}
                    className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${errors.waist ? 'border-red-500' : 'border-gray-300'
                        }`}
                />
                {errors.waist && (
                    <p className="mt-1 text-sm text-red-600">{errors.waist}</p>
                )}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                {isSubmitting ? 'Saving...' : 'Save Measurements'}
            </button>
        </form>
    );
}
