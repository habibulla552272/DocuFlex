import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        What Do You Want to Create?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Image to PDF */}
        <Link
          href="/imgtopdf"
          className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center"
        >
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Image to PDF
          </h3>
          <p className="text-gray-600 text-sm">
            Upload your images and instantly convert them to a single PDF.
          </p>
        </Link>

        {/* PDF Templates */}
        <Link
          href="/pdf-templates"
          className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center"
        >
          <h3 className="text-xl font-semibold mb-2 text-green-600">
            PDF Templates
          </h3>
          <p className="text-gray-600 text-sm">
            Choose from ready-made templates like invoices, receipts, or certificates.
          </p>
        </Link>

        {/* Fillable Forms */}
        <Link
          href="/forms"
          className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center"
        >
          <h3 className="text-xl font-semibold mb-2 text-purple-600">
            Form Templates
          </h3>
          <p className="text-gray-600 text-sm">
            Fill simple forms (e.g. résumé, job application) and export them to PDF.
          </p>
        </Link>
      </div>
    </section>
  );
}
