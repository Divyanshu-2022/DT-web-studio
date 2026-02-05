import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      {/* ====== HERO ====== */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        {/* Background Food Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/indian-restaurant-hero.jpg"
            alt="Indian Food Background"
            fill
            priority
            className="object-cover opacity-40"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Bombay Grill
            <span className="block text-red-500 mt-2">
              Authentic Indian Cuisine in Wrocław
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Experience the rich flavours of India right here in Wrocław. From
            classic curries to handmade naan, every dish is prepared with
            passion and authentic spices.
          </p>

          <p className="italic text-sm text-gray-300 mt-3">
            Autentyczna kuchnia indyjska we Wrocławiu — od curry po tandoor.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="#menu"
              className="bg-red-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-red-700 transition"
            >
              View Menu
            </Link>
            <Link
              href="#contact"
              className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// End of file: dt-web-studio/src/app/projects/restaurant/layout/hero.jsx
