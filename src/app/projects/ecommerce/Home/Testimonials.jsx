"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const reviews = [
    {
      name: "Anna Kowalska",
      text: "The quality exceeded my expectations. Fast shipping and beautiful packaging!",
    },
    {
      name: "Mark Stevens",
      text: "Smooth checkout and great customer support. Highly recommended.",
    },
    {
      name: "Julia Nowak",
      text: "Love the design and comfort of the products. Will definitely shop again!",
    },
    {
      name: "Daniel Smith",
      text: "Fantastic experience from start to finish. Delivery was super quick!",
    },
    {
      name: "Katarzyna Zielińska",
      text: "Professional service and top-tier quality. My favorite online store now.",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">What Customers Say</h2>
        <p className="text-gray-600 mt-3">
          Real feedback from happy shoppers
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="mt-14"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white shadow-xl rounded-2xl p-10 mx-auto max-w-2xl">
                <p className="text-lg text-gray-700 italic">“{r.text}”</p>
                <p className="mt-6 font-semibold text-orange-600">{r.name}</p>
                <div className="mt-2 text-yellow-500 text-lg">★★★★★</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
