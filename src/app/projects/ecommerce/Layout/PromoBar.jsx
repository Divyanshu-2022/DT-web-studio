"use client";
import { useState } from "react";

export default function PromoBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm py-2 px-6 flex justify-between items-center">
      <p className="mx-auto">
        🚚 Free Shipping on orders over 200 zł | 🎁 10% off your first order
      </p>

      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 text-white hover:opacity-70"
      >
        ✕
      </button>
    </div>
  );
}
