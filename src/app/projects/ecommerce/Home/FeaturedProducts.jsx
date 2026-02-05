"use client";
import { products } from "./demo.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function FeaturedProducts() {
  return (
    <section className="py-28 bg-gradient-to-br from-pink-50 via-red to-blue-30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Featured Products</h2>
        <p className="text-center text-gray-600 mt-3">
          Handpicked favorites our customers love
        </p>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="mt-14"
        >
          {products.slice(0, 12).map((p, index) => (
            <SwiperSlide key={p.id}>
              <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden relative">

                {/* Badge */}
                {index % 3 === 0 && (
                  <span className="absolute top-4 left-4 bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
                    NEW
                  </span>
                )}

                {/* Wishlist */}
                <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-lg">
                  ♥
                </button>

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-800 group-hover:text-pink-600 transition">
                    {p.name}
                  </h3>
                  <p className="text-gray-500 mt-1">{p.price} zł</p>

                  <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition">
                    Add to Cart
                  </button>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
