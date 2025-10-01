'use client'
import { useState } from "react";

export default function PdfGenarator() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = reader.result;

      const res = await fetch("/api/image-to-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: base64 }),
      });

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Image → PDF Generator</h1>
      <input type="file" accept="image/*" onChange={handleUpload} />

      {pdfUrl && (
        <a href={pdfUrl} download="output.pdf">
          Download PDF
        </a>
      )}
    </div>
  );
}
