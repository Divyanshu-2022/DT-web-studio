'use client';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/604981059"
        target="_blank"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
      >
        WhatsApp
      </a>

      {/* Call */}
      <a
        href="tel:+48604981059"
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
      >
        Call
      </a>
    </div>
  );
}
