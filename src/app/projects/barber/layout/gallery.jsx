import React from 'react'

function gallery() {
    return (
        <div>
            <section className="py-24 bg-gray-950 text-white">
                <h2 className="text-4xl font-bold text-center mb-16">Gallery</h2>

                <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {["../assets/barber/barber2.png", "../assets/barber/barber3.png", "../assets/barber/barber4.png", "../assets/barber/barber5.png"].map((img) => (
                        <div key={img} className="overflow-hidden rounded-xl">
                            <img src={`/images/${img}`} className="hover:scale-110 transition duration-500" />
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default gallery