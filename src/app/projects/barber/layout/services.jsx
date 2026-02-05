import React from 'react'

function services() {
    return (
        <div>
            <section id="services" className="py-24 bg-gray-950 text-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-16">Our Services</h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { title: "Classic Haircut", price: "70 zł", desc: "Precision haircut tailored to your style." },
                            { title: "Beard Grooming", price: "50 zł", desc: "Professional shaping and trimming." },
                            { title: "Haircut & Beard Combo", price: "110 zł", desc: "Full grooming experience." },
                        ].map((s) => (
                            <div key={s.title} className="bg-gray-900 p-10 rounded-2xl border border-gray-800 hover:border-white transition">
                                <h3 className="text-xl font-semibold">{s.title}</h3>
                                <p className="text-gray-400 mt-3">{s.desc}</p>
                                <p className="mt-6 text-2xl font-bold">{s.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default services