export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">Tailrly</h1>
      <p className="mt-3 text-lg text-gray-600">
        Custom fit and tailored style — without the hassle.
      </p>

      <div className="mt-8 flex gap-3">
        <a className="rounded bg-black px-4 py-2 text-white" href="/login">
          Login
        </a>
        <a className="rounded border px-4 py-2" href="/designers">
          Browse Designers
        </a>
      </div>
    </main>
  );
}