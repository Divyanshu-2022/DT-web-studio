'use client';

import Spline from '@splinetool/react-spline';
import Link from 'next/link';

import Hero from './layout/hero';
import Whychooseus from './layout/whychooseus';
import Services from './layout/services';
import Gallery from './layout/gallery';
import Footer from './layout/footer';

export default function BarberProject() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
     <Hero/>
      {/* SERVICES */}
      <Services />
      {/* WHY CHOOSE US */}
      <Whychooseus />
      {/* GALLERY */}
      <Gallery />
      {/* CONTACT & LOCATION */}

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

function Detail({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-3 text-gray-600">{text}</p>
    </div>
  );
}