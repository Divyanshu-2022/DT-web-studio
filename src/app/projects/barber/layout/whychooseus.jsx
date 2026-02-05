import React from 'react'

function whychooseus() {
    return (
        <div>
            {/* ====== WHY BOMBAY GRILL ====== */}
            <section className="py-24 bg-black text-white text-center">
                <h2 className="text-4xl font-bold mb-16">Why Choose Us</h2>

                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
                    <div>
                        <div className="text-5xl mb-4">✂️</div>
                        <h3 className="font-semibold text-xl">Skilled Barbers</h3>
                        <p className="text-gray-400 mt-2">Years of experience and precision.</p>
                    </div>

                    <div>
                        <div className="text-5xl mb-4">💈</div>
                        <h3 className="font-semibold text-xl">Classic Atmosphere</h3>
                        <p className="text-gray-400 mt-2">Modern shop with timeless vibes.</p>
                    </div>

                    <div>
                        <div className="text-5xl mb-4">⭐</div>
                        <h3 className="font-semibold text-xl">Top Reviews</h3>
                        <p className="text-gray-400 mt-2">Loved by our loyal clients.</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default whychooseus;