"use client";

import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="min-h-screen p-10">
            <div className="mx-auto max-w-md">
                <h1 className="text-3xl font-bold">Login to Tailrly</h1>
                <p className="mt-2 text-gray-600">
                    Choose how you'd like to log in.
                </p>

                <div className="mt-8 space-y-4">
                    <Link
                        href="/user/login"
                        className="block w-full rounded bg-black px-4 py-3 text-center text-white hover:bg-gray-900"
                    >
                        Login as Customer
                    </Link>
                    <Link
                        href="/designers/login"
                        className="block w-full rounded border px-4 py-3 text-center hover:bg-gray-50"
                    >
                        Login as Designer
                    </Link>
                </div>

                <p className="mt-8 text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link href="/user/login" className="text-black underline">
                        Sign up here
                    </Link>
                </p>
            </div>
        </main>
    );
}