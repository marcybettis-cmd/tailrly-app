'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
    const [userEmail, setUserEmail] = useState<string | null>(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('userEmail');
        }
        return null;
    });
    const [isLoading] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('userEmail');
        setUserEmail(null);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    if (!userEmail) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
                <div className="w-full max-w-md text-center space-y-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Welcome to Dashboard</h1>
                        <p className="mt-2 text-gray-600">Please log in to access your dashboard</p>
                    </div>
                    <Link
                        href="/login"
                        className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Go to Login
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">User Information</h2>
                        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                                        <svg
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Email</p>
                                    <p className="text-lg font-medium text-gray-900">{userEmail}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Stats</h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="bg-gray-50 rounded-md p-4">
                                <p className="text-sm text-gray-600">Total Projects</p>
                                <p className="text-2xl font-bold text-gray-900">0</p>
                            </div>
                            <div className="bg-gray-50 rounded-md p-4">
                                <p className="text-sm text-gray-600">Active Designs</p>
                                <p className="text-2xl font-bold text-gray-900">0</p>
                            </div>
                            <div className="bg-gray-50 rounded-md p-4">
                                <p className="text-sm text-gray-600">Measurements</p>
                                <p className="text-2xl font-bold text-gray-900">0</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                        >
                            Logout
                        </button>
                        <Link
                            href="/"
                            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}

