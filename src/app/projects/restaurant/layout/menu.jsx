import React from 'react'

function menu() {
    return (
        <div>
            <section id="menu" className="relative py-28 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 overflow-hidden">

                {/* Decorative Spice Glow */}
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-20"></div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-serif text-center text-red-700">Our Menu</h2>
                    <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
                        A journey through India’s most loved flavors — rich, aromatic, and unforgettable.
                    </p>

                    {/* CATEGORY BLOCK */}
                    {[
                        {
                            title: "Starters",
                            subtitle: "Przystawki",
                            image: "/images/onion-bhaji.jpg",
                            items: [
                                { name: "Onion Bhaji", price: "21 zł", desc: "Golden crispy fritters with tamarind chutney." },
                                { name: "Masala Fries", price: "21 zł", desc: "Crispy fries tossed in Indian spice mix." },
                                { name: "Dal Soup", price: "18 zł", desc: "Creamy lentil soup with turmeric and cumin." },
                            ],
                        },
                        {
                            title: "Curries",
                            subtitle: "Curry",
                            image: "/images/butter-chicken.jpg",
                            items: [
                                { name: "Butter Masala", price: "39 zł", desc: "Silky tomato sauce enriched with butter & cashews." },
                                { name: "Tikka Masala", price: "39 zł", desc: "Smoky grilled meat in creamy spiced gravy." },
                                { name: "Vindaloo", price: "39 zł", desc: "Fiery Goan curry with bold chili and vinegar." },
                            ],
                        },
                        {
                            title: "Tandoor Specials",
                            subtitle: "Tandoor",
                            image: "/images/tandoori.jpg",
                            items: [
                                { name: "Tandoori Tikka", price: "44 zł", desc: "Juicy marinated chicken grilled in clay oven." },
                                { name: "Hariyali Tikka", price: "44 zł", desc: "Herb-infused green marinade with fresh mint." },
                                { name: "Red Hot Tikka", price: "44 zł", desc: "Spicy red marinade for bold flavor lovers." },
                            ],
                        },
                        {
                            title: "Biryani & Rice",
                            subtitle: "Biryani",
                            image: "/images/biryani.jpg",
                            items: [
                                { name: "Biryani Chicken", price: "47 zł", desc: "Fragrant basmati rice layered with spiced chicken." },
                                { name: "Biryani Paneer", price: "45 zł", desc: "Aromatic rice with cottage cheese and herbs." },
                                { name: "Biryani Lamb", price: "53 zł", desc: "Slow-cooked lamb with saffron rice." },
                            ],
                        },
                    ].map((category, i) => (
                        <div key={i} className="mt-20 grid md:grid-cols-2 gap-12 items-center">

                            {/* FOOD IMAGE */}
                            <div className={`relative h-80 w-full rounded-3xl overflow-hidden shadow-2xl ${i % 2 !== 0 ? "md:order-2" : ""}`}>
                                <img src={category.image} alt={category.title} className="object-cover w-full h-full hover:scale-105 transition duration-700" />
                            </div>

                            {/* TEXT SIDE */}
                            <div className={`${i % 2 !== 0 ? "md:order-1" : ""}`}>
                                <h3 className="text-3xl font-serif text-red-700">
                                    {category.title} <span className="text-gray-500 text-lg">/ {category.subtitle}</span>
                                </h3>

                                <div className="mt-6 space-y-6">
                                    {category.items.map((item) => (
                                        <div key={item.name} className="bg-white/80 backdrop-blur-md p-5 rounded-xl shadow hover:shadow-lg transition">
                                            <div className="flex justify-between items-center">
                                                <h4 className="font-semibold text-lg text-gray-800">{item.name}</h4>
                                                <span className="text-red-600 font-bold">{item.price}</span>
                                            </div>
                                            <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default menu;