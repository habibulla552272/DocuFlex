// import { NextApiRequest, NextApiResponse } from "next";

// function base64ToBuffer(base64: string): Buffer {
//     const data = base64.replace(/^data:image\/\w+;base64,/, "");
//     return Buffer.from(data, "base64");
// }

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method !== "POST") {
//         return res.status(405).json({ error: "Only POST allowed" });
//     }

//     const { imageBase64, width = 600, height = 800 } = req.body;
//     if (!imageBase64) {
//         return res.status(400).json({ error: "No image provided" });
//     }

//     const imageBuffer = base64ToBuffer(imageBase64);

//     let pdf = "%PDF-1.4\n";
//     const objects: string[] = [];

//     // 1: Catalog
//     objects.push("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");

//     // 2: Pages
//     objects.push("2 0 obj\n<< /Type /Pages /Count 1 /Kids [3 0 R] >>\nendobj\n");

//     // 3: Page (dynamic width/height)
//     objects.push(
//         `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${width} ${height}] /Resources << /XObject << /Im1 5 0 R >> >> /Contents 4 0 R >>\nendobj\n`
//     );

//     // 4: Content stream (scale image)
//     const content = `q\n${width} 0 0 ${height} 0 0 cm\n/Im1 Do\nQ\n`;
//     objects.push(
//         `4 0 obj\n<< /Length ${content.length} >>\nstream\n${content}endstream\nendobj\n`
//     );

//     // 5: Image XObject
//     const imgHeader =
//         `5 0 obj\n<< /Type /XObject /Subtype /Image /Width ${width} /Height ${height} ` +
//         `/ColorSpace /DeviceRGB /BitsPerComponent 8 ` +
//         `/Filter /DCTDecode /Length ${imageBuffer.length} >>\nstream\n`;
//     const imgFooter = "endstream\nendobj\n";

//     // ---- Build PDF ----
//     const buffers: Buffer[] = [];
//     buffers.push(Buffer.from(pdf));

//     const xrefPositions: number[] = [0];
//     objects.forEach((obj) => {
//         xrefPositions.push(buffers.reduce((acc, b) => acc + b.length, 0));
//         buffers.push(Buffer.from(obj));
//     });

//     // Image with binary
//     xrefPositions.push(buffers.reduce((acc, b) => acc + b.length, 0));
//     buffers.push(Buffer.from(imgHeader));
//     buffers.push(imageBuffer);
//     buffers.push(Buffer.from("\n" + imgFooter));

//     // XRef
//     const xrefStart = buffers.reduce((acc, b) => acc + b.length, 0);
//     let xref = "xref\n0 " + (xrefPositions.length + 1) + "\n";
//     xref += "0000000000 65535 f \n";
//     xrefPositions.forEach((pos) => {
//         xref += pos.toString().padStart(10, "0") + " 00000 n \n";
//     });

//     // Trailer
//     xref +=
//         "trailer\n<< /Size " +
//         (xrefPositions.length + 1) +
//         " /Root 1 0 R >>\nstartxref\n" +
//         xrefStart +
//         "\n%%EOF";

//     buffers.push(Buffer.from(xref));

//     const pdfBuffer = Buffer.concat(buffers);

//     res.setHeader("Content-Type", "application/pdf");
//     res.setHeader("Content-Disposition", "attachment; filename=image.pdf");
//     res.send(pdfBuffer);
// }


