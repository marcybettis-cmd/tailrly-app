const designers = [
    { name: "Designer A", specialty: "Custom suits", location: "Orlando" },
    { name: "Designer B", specialty: "Dresses and formalwear", location: "Washington, DC" },
    { name: "Designer C", specialty: "Alterations", location: "Remote / Local" },
];

export default function Designers() {
    return (
        <main className="min-h-screen p-10">
            <h1 className="text-3xl font-bold">Browse Designers</h1>
            <p className="mt-2 text-gray-600">Select a designer for your request.</p>

            <div className="mt-8 grid gap-4">
                {designers.map((designer) => (
                    <div key={designer.name} className="rounded border p-4">
                        <h2 className="font-semibold">{designer.name}</h2>
                        <p className="text-sm text-gray-600">{designer.specialty}</p>
                        <p className="text-sm">{designer.location}</p>
                        <a
                            href="/request"
                            className="mt-3 inline-block rounded bg-black px-4 py-2 text-white"
                        >
                            Request Service
                        </a>
                    </div>
                ))}
            </div>
        </main>
    );
}