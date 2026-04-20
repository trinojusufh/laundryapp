import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Navbar() {
  const ref = useRef(null);
  const [active, setActive] = useState("lacak");
  const [open, setOpen] = useState(false);
  //   const { scrollYProgress } = useScroll({ target: ref });
  //   const yHero = useTransform(scrollYProgress, [0, 1], [0, -120]);

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
      "lacak",
    ];
  });

  return (
    //   {/* Navbar */}
    <nav className="fixed w-full top-0 left-0 bg-white/70 backdrop-blur-md shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text- font-bold text-green-500">LaundryKita</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8 text-sm lg:text-base">
          <Link href="/#home" className={navLink("home")}>
            Home
          </Link>

          <Link href="/#services" className={navLink("services")}>
            Layanan
          </Link>

          <Link href="/#pricing" className={navLink("pricing")}>
            Paket
          </Link>

          <Link href="/#gallery" className={navLink("gallery")}>
            Galeri
          </Link>

          <Link href="/#why-us" className={navLink("why-us")}>
            Why Us
          </Link>

          <Link href="/#testimonials" className={navLink("testimonials")}>
            Testimonials
          </Link>

          <Link
            href="/#tracking"
            className="ml-4 px-4 py-2 bg-green-500 text-white rounded-xl shadow-lg hover:bg-green-600 transition"
          >
            Lacak Order
          </Link>
        </div>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="text-green-600" size={28} /> : <Menu size={28} />}
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
                <Link
                  onClick={() => setOpen(false)}
                  href="/#home"
                  className="px-5 py-4 border-b text-gray-700 hover:bg-green-50 transition"
                >
                  Home
                </Link>

                <Link
                  onClick={() => setOpen(false)}
                  href="/#services"
                  className="px-5 py-4 border-b text-gray-700 hover:bg-green-50 transition"
                >
                  Layanan
                </Link>

                <Link
                  onClick={() => setOpen(false)}
                  href="/#pricing"
                  className="px-5 py-4 border-b text-gray-700 hover:bg-green-50 transition"
                >
                  Paket
                </Link>

                <Link
                  onClick={() => setOpen(false)}
                  href="/#gallery"
                  className="px-5 py-4 border-b text-gray-700 hover:bg-green-50 transition"
                >
                  Galeri
                </Link>

                <Link
                  onClick={() => setOpen(false)}
                  href="/#why-us"
                  className="px-5 py-4 border-b text-gray-700 hover:bg-green-50 transition"
                >
                  Why Us
                </Link>

                <Link
                  onClick={() => setOpen(false)}
                  href="/#testimonials"
                  className="px-5 py-4 border-b text-gray-700 hover:bg-green-50 transition"
                >
                  Testimonials
                </Link>

                <Link
                  onClick={() => setOpen(false)}
                  href="/#tracking"
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
  );
}
