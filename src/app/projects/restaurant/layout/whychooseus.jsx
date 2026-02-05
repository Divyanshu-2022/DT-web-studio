import React from 'react'

function whychooseus() {
    return (
        <div>
            {/* ====== WHY BOMBAY GRILL ====== */}
            <section className="py-24 bg-gradient-to-br from-yellow-50 via-white to-orange-50">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold">Why Choose Us? / Dlaczego my?</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Discover what makes our restaurant a favorite for lovers of authentic Indian cuisine.
                    </p>

                    <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: "🔥",
                                title: "Authentic Flavours",
                                back: "Traditional Indian spices, slow-cooked curries, and real tandoor techniques bring the true taste of India to your plate.",
                            },
                            {
                                icon: "🍞",
                                title: "Fresh Handmade Breads",
                                back: "Naan, roti, and paratha baked fresh daily in our clay oven for that perfect soft and smoky texture.",
                            },
                            {
                                icon: "🌿",
                                title: "Vegetarian & Vegan",
                                back: "A wide selection of plant-based dishes full of flavor and balanced spices for every dietary preference.",
                            },
                            {
                                icon: "🍗",
                                title: "Tandoori Specialties",
                                back: "Marinated meats grilled in a traditional tandoor for a smoky, tender, and aromatic experience.",
                            },
                            {
                                icon: "🥘",
                                title: "Rich Curries",
                                back: "From creamy Butter Chicken to spicy Vindaloo — our sauces are slow-simmered and deeply flavorful.",
                            },
                            {
                                icon: "🏠",
                                title: "Warm Atmosphere",
                                back: "Cozy interior, friendly service, and a welcoming space perfect for families, dates, and celebrations.",
                            },
                        ].map((item) => (
                            <div key={item.title} className="group [perspective:1000px]">
                                <div className="relative h-64 w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                                    {/* FRONT */}
                                    <div className="absolute inset-0 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 [backface-visibility:hidden]">
                                        <div className="text-5xl mb-4">{item.icon}</div>
                                        <h3 className="font-semibold text-lg">{item.title}</h3>
                                        <p className="text-xs text-gray-400 mt-2">Hover to learn more</p>
                                    </div>

                                    {/* BACK */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-500 text-white rounded-2xl shadow-lg p-6 flex items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                        <p className="text-sm leading-relaxed">{item.back}</p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default whychooseus;