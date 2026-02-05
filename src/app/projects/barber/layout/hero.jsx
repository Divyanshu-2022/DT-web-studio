import React from "react";
import Image from "next/image";
import Link from "next/link";
// import Barber from '../assets/images/barber-hero.jpg';

export default function Hero() {
  return (
    <div>
      {/* ====== HERO ====== */}
      <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden bg-black">

        <div className="absolute inset-0">
          <Image
            src='/assets/barber/barber.jpg'
            alt="Barber Shop"
            layout="fill"
            objectFit="unset"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider">
            SHARP CUTS <br /> CLASSIC STYLE
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto">
            Premium barbering experience with modern precision and timeless tradition.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a href="#booking" className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              Book Appointment
            </a>
            <a href="#services" className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Our Services
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

// End of file: dt-web-studio/src/app/projects/restaurant/layout/hero.jsx
