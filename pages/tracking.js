import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

export default function TrackingPage() {
  const [invoice, setInvoice] = useState("");
  const [result, setResult] = useState(null);

const handleTrack = () => {
  if (!invoice.trim()) return;

  setResult({
    invoice: invoice,
    branch: "Cabang Banjar Utama",
    customer: "Rizky Pratama",
    status: "Sedang Dicuci",
    progress: 60,
    timeline: [
      { step: "Diterima", done: true },
      { step: "Proses Cuci", done: true },
      { step: "Pengeringan", done: false },
      { step: "Quality Check", done: false },
      { step: "Siap Diambil", done: false },
    ],
  });

  };
  const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    handleTrack();
  }
};

  return (
    <Layout>
<section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-green-50 to-white px-6 pt-28 pb-20">

  {/* BACKGROUND */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-green-300/30 blur-3xl rounded-full animate-pulse" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/20 blur-3xl rounded-full animate-pulse" />

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* ===== IMAGE ===== */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-full flex justify-center"
    >
      <img
        src="/image/bg-6.png"
        alt="tracking"
        className="
          w-full max-w-sm md:max-w-md
          h-auto
          rounded-2xl shadow-xl
          object-contain
        "
      />
    </motion.div>

    {/* ===== CONTENT ===== */}
    <div className="w-full">

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-bold text-green-600"
      >
        Lacak Laundry Sepatu
      </motion.h1>

      <p className="text-gray-500 mt-3">
        Tracking real-time setiap proses pencucian sepatu kamu
      </p>

      {/* INPUT */}
      <div className="mt-8 flex items-center gap-2 bg-white/70 backdrop-blur-xl border shadow-lg rounded-2xl p-2">
        <input
          value={invoice}
          onChange={(e) => setInvoice(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Masukkan Invoice ID (INV-001)"
          className="flex-1 px-4 py-3 bg-transparent outline-none"
        />

        <button
          onClick={handleTrack}
          className="bg-green-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition"
        >
          Track
        </button>
      </div>

      {/* RESULT */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 bg-white/70 backdrop-blur-xl border shadow-2xl rounded-3xl p-6"
        >

          <div className="flex justify-between">
            <div>
              <h2 className="font-bold text-green-600">{result.invoice}</h2>
              <p className="text-sm text-gray-500">{result.customer}</p>
            </div>

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              {result.branch}
            </span>
          </div>

          <div className="mt-5">
            <p className="text-gray-600">
              Status:
              <span className="ml-2 font-semibold text-green-600">
                {result.status}
              </span>
            </p>

            <div className="w-full h-2 bg-gray-200 rounded-full mt-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-green-600"
                style={{ width: `${result.progress}%` }}
              />
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {result.timeline.map((t, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className={`w-3 h-3 rounded-full ${
                    t.done ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
                <p className={t.done ? "text-green-600" : "text-gray-400"}>
                  {t.step}
                </p>
              </div>
            ))}
          </div>

        </motion.div>
      )}
    </div>

  </div>
</section>
    </Layout>
  );
}