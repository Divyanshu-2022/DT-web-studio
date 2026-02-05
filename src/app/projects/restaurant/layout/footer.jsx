import React from 'react'

function footer() {
    return (
        <footer className="bg-[#111] text-gray-300 pt-12 pb-6 px-6 ">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 mt-8">

                {/* BRAND */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Bombay Grill</h2>
                    <p className="text-sm leading-relaxed">
                        Authentic Indian flavors served with warmth and tradition.
                        Experience rich spices, vibrant dishes, and unforgettable dining.
                    </p>
                </div>

                {/* CONTACT */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                    <p>📍 Naglio g. 4, Poland</p>
                    <p>📞 +48 123 456 789</p>
                    <p>📧 food@bombaygrill.pl</p>
                </div>

                {/* OPENING HOURS */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Opening Hours</h3>
                    <p>Mon – Thu: 11:00 AM – 10:00 PM</p>
                    <p>Fri – Sat: 11:00 AM – 11:30 PM</p>
                    <p>Sunday: 12:00 PM – 9:30 PM</p>
                </div>

                {/* SOCIAL */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex gap-4 text-xl">
                        <a href="#" className="hover:text-red-500 transition">🌐</a>
                        <a href="#" className="hover:text-red-500 transition">📘</a>
                        <a href="#" className="hover:text-red-500 transition">📸</a>
                    </div>
                    <p className="mt-4 text-sm">
                        Stay connected for offers, events & special dishes!
                    </p>
                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Bombay Grill. All rights reserved.
            </div>
        </footer>

    )
}

export default footer