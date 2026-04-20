import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (

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
  );
}