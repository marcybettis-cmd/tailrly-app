"use client";

import { useState } from "react";

export default function UploadDesignPage() {
  const [fileName, setFileName] = useState("");
  const [notes, setNotes] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file?.name ?? "");
  };

  const handleSubmit = () => {
    alert(`Design uploaded for MVP demo: ${fileName || "No file selected"}`);
  };

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold">Upload Design Inspiration</h1>
      <p className="mt-2 text-gray-600">
        Upload a photo, sketch, or inspiration image for your custom request.
      </p>

      <div className="mt-8 max-w-lg space-y-4">
        <input
          type="file"
          accept="image/*,.pdf"
          onChange={handleFileChange}
          className="w-full rounded border p-2"
        />

        {fileName && (
          <p className="text-sm text-gray-600">
            Selected file: {fileName}
          </p>
        )}

        <textarea
          placeholder="Notes about this design"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full rounded border p-2"
          rows={5}
        />

        <button onClick={handleSubmit} className="rounded bg-black px-4 py-2 text-white">
          Save Design Inspiration
        </button>
      </div>
    </main>
  );
}