import services from "../data/services.json";
import WA from "../components/WhatsAppButton";
import SEO from "../components/SEO";
import Testi from "../components/testi";
import { Sparkles, Clock, Shirt } from "lucide-react";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { Menu, X } from "lucide-react";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref });
  const yHero = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const navLink = (id) =>
    `relative px-2 py-1 rounded-md transition-colors duration-200
   ${
     active === id
       ? "text-green-600 font-semibold"
       : "text-gray-700 hover:text-green-600"
   }`;
  useEffect(() => {
    const sections = [
      "home",
      "services",
      "pricing",
      "gallery",
      "why-us",
      "testimonials",
      "tracking",
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          if (
            scrollPos >= el.offsetTop &&
            scrollPos < el.offsetTop + el.offsetHeight
          ) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className="bg-white text-gray-800 scroll-smooth">
      <SEO />

      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 bg-white/70 backdrop-blur-md shadow z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <h1 className="text- font-bold text-green-500">LaundryKita</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8 text-sm lg:text-base">
            <a href="#home" className={navLink("home")}>
              Home
            </a>
            <a href="#services" className={navLink("services")}>
              Layanan
            </a>
            <a href="#pricing" className={navLink("pricing")}>
              Paket
            </a>
            <a href="#gallery" className={navLink("gallery")}>
              Galeri
            </a>
            <a href="#why-us" className={navLink("why-us")}>
              Why Us
            </a>
            <a href="#testimonials" className={navLink("testimonials")}>
              Testimonials
            </a>
            <Link
              href="/tracking"
              className="ml-4 px-4 py-2 bg-green-500 text-white rounded-xl shadow-lg hover:bg-green-600 transition"
            >
              Lacak Order
            </Link>
          </div>

          {/* Hamburger */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

       {open && (
  <>
    {/* Overlay */}
    <div
      onClick={() => setOpen(false)}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
    />

    {/* MENU PANEL */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        fixed top-16 left-0 w-full z-50
        flex justify-center
      "
    >
      <div
        className="
          w-[92%] max-w-md
          bg-white/95 backdrop-blur-xl
          rounded-2xl shadow-2xl
          overflow-hidden
        "
      >

        {/* ===== MENU LIST ===== */}
        <div className="flex flex-col">

          <a
            onClick={() => setOpen(false)}
            href="#home"
            className="px-5 py-4 border-b text-gray-700 hover:bg-green-50 transition"
          >
            Home
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#services"
            className="px-5 py-4 border-b text-gray-700 hover:bg-green-50 transition"
          >
            Layanan
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#pricing"
            className="px-5 py-4 border-b text-gray-700 hover:bg-green-50 transition"
          >
            Paket
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#gallery"
            className="px-5 py-4 border-b text-gray-700 hover:bg-green-50 transition"
          >
            Galeri
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#why-us"
            className="px-5 py-4 border-b text-gray-700 hover:bg-green-50 transition"
          >
            Why Us
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#testimonials"
            className="px-5 py-4 border-b text-gray-700 hover:bg-green-50 transition"
          >
            Testimonials
          </a>

          <Link
            onClick={() => setOpen(false)}
            href="/tracking"
            className="px-5 py-4 text-green-600 font-semibold hover:bg-green-50 transition"
          >
            Lacak Order
          </Link>
        </div>

        {/* ===== CTA SECTION ===== */}
        <div className="p-4 border-t bg-gray-50">
          <a
            href="https://wa.me/628xxxx"
            className="
              block text-center
              bg-green-500 text-white
              py-3 rounded-xl
              shadow-md hover:bg-green-600 transition
            "
          >
            Order Sekarang
          </a>
        </div>

      </div>
    </motion.div>
  </>

        )}
      </nav>
      {/* Hero */}
    <section
  id="home"
  className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 pt-24 md:pt-0"
>

  {/* ===== BACKGROUND IMAGE ===== */}
  <motion.img
    initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.2 }}
    src="/image/bg-1.jpg"
    alt="bg"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* ===== OVERLAY LAYER (CINEMATIC) ===== */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 md:from-black/40 md:via-black/30 md:to-black/50" />

  {/* ===== SOFT GLOW ===== */}
  <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-transparent to-green-400/10 animate-pulse" />

  {/* ===== CONTENT WRAPPER ===== */}
  <motion.div
    style={{ y: yHero }}
    className="relative z-10 flex flex-col items-center text-center max-w-2xl"
  >

    {/* ===== OPEN BADGE ===== */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="
        mb-4 inline-flex items-center gap-2
        bg-green-600 text-white font-semibold
        px-4 py-2 rounded-full shadow-xl
        text-xs sm:text-sm
      "
    >
      ⏰ Open Daily: 07:00 - 22:00
    </motion.div>

    {/* ===== TITLE (FLUID TYPOGRAPHY) ===== */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        font-bold text-white leading-tight
        text-[28px] sm:text-4xl md:text-6xl
      "
    >
      Silicon-Level Laundry Experience
    </motion.h1>

    {/* ===== SUBTITLE ===== */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="
        mt-4 text-sm sm:text-base md:text-lg
        text-white/80 max-w-md
      "
    >
      Cepat, bersih, dan wangi premium dengan quality control modern berbasis teknologi.
    </motion.p>

    {/* ===== CTA ===== */}
    <motion.div
      className="flex flex-col sm:flex-row gap-3 mt-6"
    >
      <motion.a
        href="#pricing"
        whileHover={{ scale: 1.05 }}
        className="
          px-6 py-3 rounded-xl
          bg-green-500 hover:bg-green-600
          text-white shadow-lg transition
        "
      >
        Lihat Paket
      </motion.a>

      <motion.a
        href="#lacak"
        whileHover={{ scale: 1.05 }}
        className="
          px-6 py-3 rounded-xl
          bg-white/10 border border-white/30
          text-white backdrop-blur
        "
      >
        Lacak Order
      </motion.a>
    </motion.div>

    {/* ===== TRUST TEXT ===== */}
    <p className="mt-5 text-xs text-white/60">
      👟 1000+ Shoes Cleaned • Trusted Premium Shoe Care
    </p>
  </motion.div>

  {/* ===== FLOATING BADGE (DESKTOP ONLY) ===== */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 3 }}
    className="
      hidden md:flex absolute bottom-8
      bg-white/90 text-green-600
      px-4 py-2 rounded-full
      shadow-lg text-sm font-medium
    "
  >
    ⚡ Real-time Tracking System
  </motion.div>
</section>
      {/* Services */}
      <section
        id="services"
        className="relative py-28 px-6   bg-gradient-to-br from-white via-emerald-50 to-green-100 overflow-hidden"
      >
        {/* BACKGROUND GRADIENT */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-emerald-50 to-green-100" />

        {/* BLOB SHAPE */}
        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-green-300/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-green-500/10 rounded-full blur-2xl -z-10" />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT - IMAGE CREATIVE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative flex justify-center"
          >
            {/* BLOB BACKGROUND */}
            <div
              className="
    absolute w-[420px] h-[420px]
    bg-gradient-to-br from-emerald-300 to-green-500
    opacity-20 blur-3xl
    rounded-full
  "
            />

            {/* IMAGE MASK */}
            <div
              className="
      relative overflow-hidden shadow-2xl
      w-[380px] h-[420px]
    "
              style={{
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              }}
            >
              <img
                src="/image/bg-2.png"
                alt="Laundry"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT - CONTENT */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-green-600 leading-tight"
            >
              Layanan Profesional <br />
              <span className="text-gray-800">Next Level Cleaning</span>
            </motion.h2>

            <p className="text-gray-500 mt-4 max-w-md">
              Teknologi modern + treatment khusus untuk semua jenis sepatu.
              Hasil lebih bersih, wangi, dan tahan lama.
            </p>

            {/* LIST */}
            <div className="mt-10 space-y-4">
              {[
                {
                  name: "Fast Clean",
                  desc: "Pembersihan ringan bagian luar",
                  time: "1-2 hari",
                  icon: <Sparkles size={18} />,
                },
                {
                  name: "Deep Clean",
                  desc: "Pembersihan total semua bagian",
                  time: "2-3 hari",
                  icon: <Shirt size={18} />,
                },
                {
                  name: "Premium Care",
                  desc: "Detailing + treatment khusus",
                  time: "2-4 hari",
                  icon: <Sparkles size={18} />,
                },
                {
                  name: "Unyellowing",
                  desc: "Menghilangkan warna kuning",
                  time: "3-5 hari",
                  icon: <Clock size={18} />,
                },
                {
                  name: "Repaint",
                  desc: "Cat ulang sepatu seperti baru",
                  time: "3-5 hari",
                  icon: <Shirt size={18} />,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="
              flex items-start gap-4 p-4
              bg-white/80 backdrop-blur-md
              rounded-xl shadow-md border
              hover:shadow-xl hover:-translate-y-1
              transition
            "
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-500 rounded-lg">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="font-semibold text-green-600">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                    <p className="text-xs text-gray-400 mt-1">⏱ {item.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="py-28 px-6 bg-white relative overflow-hidden"
      >
        {/* Background gradient blob */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-100 blur-3xl rounded-full opacity-40"></div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT - PRICING */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-green-600"
            >
              Paket & Harga
            </motion.h2>

            <p className="mt-4 text-gray-500 max-w-md">
              Pilih paket sesuai kebutuhan sepatu kamu. Semua layanan
              menggunakan metode premium & QC ketat.
            </p>

            {/* Pricing Cards */}
            <div className="flex justify-center mt-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white w-[320px] max-w-full p-6 rounded-2xl shadow-xl border relative"
              >
                {/* Zigzag top */}
                <div
                  className="absolute -top-3 left-0 w-full h-4 bg-white"
                  style={{
                    clipPath:
                      "polygon(0 100%, 5% 0, 10% 100%, 15% 0, 20% 100%, 25% 0, 30% 100%, 35% 0, 40% 100%, 45% 0, 50% 100%, 55% 0, 60% 100%, 65% 0, 70% 100%, 75% 0, 80% 100%, 85% 0, 90% 100%, 95% 0, 100% 100%)",
                  }}
                />

                {/* Title */}
                <h3 className="text-lg font-bold text-green-600">
                  LaundryKita Price List
                </h3>

                <div className="border-t border-dashed my-4"></div>

                {/* Items */}
                {[
                  { name: "Fast Clean", price: "25k" },
                  { name: "Deep Clean", price: "35k" },
                  { name: "Premium Care", price: "50k" },
                  { name: "Unyellowing", price: "45k" },
                  { name: "Repaint", price: "60k" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between text-sm py-1">
                    <span>{item.name}</span>
                    <span className="font-semibold text-green-600">
                      {item.price}
                    </span>
                  </div>
                ))}

                <div className="border-t border-dashed my-4"></div>

                {/* Rating */}
                <div className="flex justify-center gap-1 text-yellow-400">
                  {"★★★★★".split("").map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="text-xs text-gray-400 mt-2">
                  Rated 4.9 by 1,200+ customers
                </p>

                {/* CTA */}
                <a
                  href="https://wa.me/628xxxx"
                  className="block mt-6 bg-green-500 text-white py-2 text-center rounded-lg text-sm hover:bg-green-600 transition"
                >
                  Order Sekarang
                </a>

                {/* Zigzag bottom */}
                <div
                  className="absolute -bottom-3 left-0 w-full h-4 bg-white"
                  style={{
                    clipPath:
                      "polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0)",
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* RIGHT - IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -top-10 -right-10 w-[300px] h-[300px] bg-green-300 blur-[120px] opacity-40"></div>

            {/* Image container (custom shape) */}
            <div className="relative bg-gradient-to-br from-green-100 to-white p-4 rounded-[40px] shadow-2xl rotate-2 hover:rotate-0 transition duration-500">
              <div className="overflow-hidden rounded-[30px]">
                <img
                  src="/image/bg-3.png"
                  alt="pricing"
                  className="w-full h-[420px] object-cover hover:scale-110 transition duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before After */}
      <section id="gallery" className="py-20 px-6 bg-green-50">
        <h2 className="text-3xl font-bold text-center text-green-600">
          Before / After
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Hasil real cleaning — tanpa edit, tanpa filter
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
          {[
            {
              before: "/image/kotor.png",
              after: "/image/bersih.png",
            },
            {
              before: "/image/kotor.png",
              after: "/image/bersih.png",
            },
            {
              before: "/image/kotor.png",
              after: "/image/bersih.png",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="grid grid-cols-2 gap-2 bg-white p-3 rounded-xl shadow-md"
            >
              {/* BEFORE */}
              <div className="relative bg-gray-50 rounded-lg flex flex-col items-center justify-center p-2">
                <img
                  src={item.before}
                  alt="before"
                  className="w-full h-40 object-contain"
                />
                <span className="text-xs mt-2 text-red-500 font-medium">
                  Before
                </span>
              </div>

              {/* AFTER */}
              <div className="relative bg-gray-50 rounded-lg flex flex-col items-center justify-center p-2">
                <img
                  src={item.after}
                  alt="after"
                  className="w-full h-40 object-contain"
                />
                <span className="text-xs mt-2 text-green-600 font-medium">
                  After
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="w-full bg-green-50 py-12 px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <img
            src="/image/bg-4.png"
            alt="Cara Kerja Laundry"
            className="w-full h-auto object-contain shadow-lg"
          />
        </motion.div>
      </section>
      {/* Benefit */}
      <section
        id="why-us"
        className="py-24 px-6 bg-gradient-to-b from-white to-green-50"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-green-600">
            Kenapa Harus Laundry Sepatu ke Kami?
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Bukan sekadar bersih, tapi kami memberikan perawatan premium untuk
            menjaga sepatu kamu tetap wangi, awet, dan seperti baru.
          </p>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-10 mt-14 items-center">
            {/* LEFT: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/image/bg-5.png"
                alt="Laundry Sepatu"
                className="rounded-2xl shadow-xl w-full object-cover"
              />

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-5 -right-5 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg text-sm"
              >
                Premium Care ✨
              </motion.div>
            </motion.div>

            {/* RIGHT: Benefits */}
            <div className="grid gap-5 text-left">
              {[
                {
                  title: "Parfum Premium & Tahan Lama",
                  desc: "Sepatu kamu wangi hingga 3–5 hari setelah treatment.",
                },
                {
                  title: "Packing Rapi & Higienis",
                  desc: "Dikemas bersih, aman, dan siap pakai saat diterima.",
                },
                {
                  title: "Garansi Quality Control",
                  desc: "Kami cek ulang sebelum pengiriman agar hasil maksimal.",
                },
                {
                  title: "Bahan Pembersih Premium",
                  desc: "Menggunakan formula khusus yang aman untuk semua material.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="p-5 bg-white rounded-xl shadow-md border hover:shadow-xl transition"
                >
                  <h3 className="font-semibold text-green-600">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-20 bg-gradient-to-r from-green-400 to-green-600 text-white text-center">
        <h2 className="text-3xl font-bold">Order Sekarang</h2>
        <p className="mt-4">Klik WhatsApp untuk order cepat</p>
      </section> */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-r from-green-400 to-green-600 text-white text-center"
      >
        <Testi />
      </section>
      {/* Footer */}

      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-green-400">LaundryKita</h3>
            <p className="mt-4 text-sm text-gray-400">
              Laundry sepatu & pakaian premium dengan kualitas terbaik, cepat,
              dan wangi tahan lama.
            </p>

            <div className="mt-4 space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <MapPin size={16} /> Bandung, Indonesia
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} /> 0812-xxxx-xxxx
              </p>
            </div>

            {/* Social Media */}
            {/* <div className="flex gap-4 mt-6">
        <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-green-500 transition">
          <Instagram size={18}/>
        </a>
        <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-green-500 transition">
          <FaFacebook size={18}/>
        </a>
        <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-green-500 transition">
          <FaTwitter size={18}/>
        </a>
      </div> */}
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-lg font-semibold">Menu</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-green-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-400">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-green-400">
                  Paket
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-green-400">
                  Galeri
                </a>
              </li>
            </ul>
          </div>

          {/* Maps */}
          <div>
            <h3 className="text-lg font-semibold">Lokasi Kami</h3>
            <div className="mt-4 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=-6.947348,107.597897&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center mt-10 text-sm text-gray-500 border-t border-gray-700 pt-6">
          © 2026 LaundryKita. All rights reserved.
        </div>
      </footer>

      <WA />
    </div>
  );
}
