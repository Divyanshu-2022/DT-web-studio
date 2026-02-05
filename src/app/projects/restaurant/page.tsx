'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import Hero from './layout/hero';
import Whychooseus from './layout/whychooseus';
import FamousFor from './layout/famousfor';
import Menu from './layout/menu';
import ReservationForm from './layout/book';
import Footer from './layout/footer';

export default function BombayGrillPage() {
  const [lang, setLang] = useState("en");

  return (
    <main className="font-sans text-gray-800">
      <Hero />
      <FamousFor />
      <Whychooseus />
      <Menu />

      {/* ====== MENU ====== */}
     

      {/* ====== GALLERY ====== */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Gallery / Galeria</h2>
          <p className="text-gray-600 mt-2">Delicious moments captured. 🍛</p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {['/images/naan.jpg','/images/biryani.jpg','/images/curry.jpg','/images/lassi.jpg'].map((src,i) => (
              <div key={i} className="relative w-full h-48 rounded-lg overflow-hidden shadow">
                <Image src={src} alt="Gallery" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== LOCATION & CONTACT ====== */}
      <section id="contact" className="py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Visit Us / Odwiedź nas</h2>
          <p className="mt-4 text-gray-700">Marszałka Piłsudskiego 79, Wrocław, Poland</p>
          <p className="mt-2 text-gray-500 italic">Enjoy authentic Indian dining & delivery. </p>
          <p className="mt-4 font-semibold text-lg">☎ +48 123 456 789</p>
        </div>
      </section>

      {/* ====== RESERVATIONS ====== */}
      <ReservationForm />
      <Footer />

    </main>
  );
}


