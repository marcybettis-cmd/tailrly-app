import Link from "next/link";

export default function RequestConfirmationPage() {
    return (
        <main className="min-h-screen p-10">
            <div className="mx-auto max-w-xl rounded-xl border bg-white p-8 shadow-sm">
                <h1 className="text-3xl font-bold">Request Submitted</h1>
                <p className="mt-4 text-gray-600">
                    Your tailoring request has been received. A designer will review it and
                    get back to you soon.
                </p>
                <div className="mt-8 flex gap-3">
                    <Link
                        href="/dashboard"
                        className="rounded bg-black px-5 py-3 text-white hover:bg-gray-900"
                    >
                        Back to dashboard
                    </Link>
                    <Link
                        href="/request"
                        className="rounded border border-gray-300 px-5 py-3 text-gray-700 hover:bg-gray-50"
                    >
                        Submit another request
                    </Link>
                </div>
            </div>
        </main>
    );
}
