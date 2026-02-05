"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle =
    "relative cursor-pointer hover:text-blue-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full";

  return (
    <nav
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/90 backdrop-blur shadow-md"
          : "bg-white/70 backdrop-blur"
      } border-b`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#services" className={linkStyle}>Services</a>
          <a href="#projects" className={linkStyle}>Projects</a>
          <a href="#pricing" className={linkStyle}>Pricing</a>

          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 hover:shadow-blue-200 transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 pb-6 flex flex-col gap-4 text-sm font-medium">
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center mt-2"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
