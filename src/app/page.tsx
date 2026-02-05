'use client';

import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import Projects from "@/components/Projects";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import FloatingActions from "@/components/FloatingActions";

export default function Portfolio() {
  return (
    <main className="bg-white text-gray-800">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <Projects />
      <About />
      <Pricing />
      <Testimonials />
      <Contact />
      <FloatingActions />
      <Footer />
    </main>
  );
}
