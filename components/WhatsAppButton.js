export default function WA() {
  const phone = "6281234567890";
  const msg = encodeURIComponent("Halo saya mau order laundry");

  return (
    <a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      className="fixed bottom-5 right-5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition"
    >
      👟 Chat Us
    </a>
  );
}