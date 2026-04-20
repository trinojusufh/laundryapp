import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimoni() {
  const data = [
    {
      name: "Rizky Pratama",
      msg: "Sepatu jadi bersih banget + wangi tahan lama. Packaging rapi banget!",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      name: "Sinta Lestari",
      msg: "Hasilnya seperti baru lagi, detail banget pembersihannya.",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    {
      name: "Dimas Aji",
      msg: "Pelayanan cepat, hasil premium banget. Recommended!",
      rating: 4,
      avatar: "https://i.pravatar.cc/100?img=8",
    },
    {
      name: "Andi Wijaya",
      msg: "Sepatu kulit saya dirawat dengan sangat bagus, puas banget!",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=3",
    },
  ];

  return (
    <section className="py-24 px-6 ">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white-600">
          Apa Kata Mereka?
        </h2>
        <p className="text-black mt-2">
          Ribuan customer sudah percaya layanan kami
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-2xl transition h-full">
                {/* Avatar */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={item.avatar}
                    className="w-12 h-12 rounded-full border-2 border-green-500"
                  />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <div className="text-yellow-400 text-sm">
                      {"⭐".repeat(item.rating)}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  "{item.msg}"
                </p>

                {/* Accent line */}
                <div className="mt-5 h-1 w-14 bg-green-500 rounded-full"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}