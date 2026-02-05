"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black shadow-sm">

      {/* Promo Bar */}
      {/* <div className="bg-black text-white text-center text-sm py-2">
        🚚 Free shipping on orders over 200 zł
      </div> */}

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/#" className="text-2xl font-bold tracking-wide">
          Shop<span className="text-blue-600">Pro</span>
        </Link>

        {/* Search */}
        <div className="hidden md:block flex-1 mx-10">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-lg">
          <Link href="/#">👤</Link>
          <Link href="/#">❤️</Link>
          <Link href="/#">🛒</Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex justify-center gap-10 py-3 border-t text-sm font-medium">
        <Link href="/#">Men</Link>
        <Link href="/#">Women</Link>
        <Link href="/#">Accessories</Link>
        <Link href="/#" className="text-red-600">Sale</Link>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-3 text-sm">
          <Link href="/#">Men</Link>
          <Link href="#">Women</Link>
          <Link href="/#">Accessories</Link>
          <Link href="/#" className="text-red-600">Sale</Link>
        </div>
      )}
    </header>
  );
}
