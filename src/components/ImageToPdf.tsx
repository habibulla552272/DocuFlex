'use client'
import React, { useRef, useState } from 'react'
import { jsPDF } from 'jspdf'
import Image from 'next/image'

const ImageToPdf = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [fileDataUrl, setFileDataUrl] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Preview using object URL (works with Next Image)
    const objectUrl = URL.createObjectURL(file)
    setPreviewUrl(objectUrl)

    // Convert to Base64 for jsPDF
    const reader = new FileReader()
    reader.onload = () => setFileDataUrl(reader.result as string)
    reader.readAsDataURL(file)
  }

  const handlePdf = async () => { // <-- make async
    if (!fileDataUrl) {
      alert('Please select an image first!')
      return
    }

    const doc = new jsPDF("p", "mm", "a4")
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()

    // Load image to get its real width/height
    const img = new window.Image()
    img.src = fileDataUrl

    try {
      await img.decode() // wait for image to load
    //typescript-eslint.io/rules/no-unused-vars
    } catch (error) {
      alert('Failed to load image.')
      return
    }

    const imgWidth = img.width
    const imgHeight = img.height

    // Maintain aspect ratio
    const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight)
    const displayWidth = imgWidth * ratio
    const displayHeight = imgHeight * ratio

    // Center image on page
    const x = (pageWidth - displayWidth) / 2
    const y = (pageHeight - displayHeight) / 2

    doc.addImage(fileDataUrl, "JPEG", x, y, displayWidth, displayHeight)
    doc.save("A4_Image_Fit.pdf")
  }

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4 p-6 text-center">
        <h2 className="text-lg font-semibold">Upload Image → Convert to PDF</h2>

        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleChange}
          className="hidden"
        />

        {/* Custom upload button */}
        <button
          onClick={() => inputRef.current?.click()}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Choose Image
        </button>

        {/* Preview using Next.js Image */}
        {previewUrl && (
          <div className="relative w-full max-w-xl max-h-[400px] mt-4">
            <Image
              src={previewUrl}
              alt="preview"
              width={1000}
              height={400}
              style={{ objectFit: 'contain' }}
              className="rounded-md border shadow-md"
            />
          </div>
        )}

        {/* Generate PDF */}
        <button
          onClick={handlePdf}
          className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition"
        >
          Download PDF
        </button>
      </div>
    </section>
  )
}

export default ImageToPdf
