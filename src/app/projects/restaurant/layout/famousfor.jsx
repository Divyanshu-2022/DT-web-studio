'use client';
import { motion } from "framer-motion";
import Image from "next/image";

export default function FamousForSection() {
  const items = [
    {
      img: "/images/indian-food.jpg",
      title1: "Authentic",
      title2: "Indian Flavors",
      desc: "Our dishes are prepared using traditional Indian spices and recipes, bringing rich and unforgettable flavors to every plate.",
    },
    {
      img: "/images/restaurant-interior.jpg",
      title1: "Elegant",
      title2: "Dining Atmosphere",
      desc: "A warm and stylish interior that perfectly captures the spirit of Indian hospitality and comfort.",
    },
    {
      img: "/images/indian-events.jpg",
      title1: "Special",
      title2: "Occasion Events",
      desc: "We host birthdays, family dinners, and celebrations with customized menus and a memorable dining experience.",
    },
  ];

  return (
    // <section className="py-28 bg-white text-center overflow-hidden">
    //   <h2 className="text-4xl font-serif mb-4">What Are We Famous For?</h2>
    //   <p className="text-gray-500 mb-16">Over years of serving authentic taste</p>

    //   <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto px-6">
    //     {items.map((item, index) => (
    //       <motion.div
    //         key={index}
    //         initial={{ opacity: 0, x: index === 1 ? 0 : index % 2 === 0 ? -120 : 120 }}
    //         whileInView={{ opacity: 1, x: 0 }}
    //         transition={{ duration: 0.8, delay: index * 0.2 }}
    //         viewport={{ once: true }}
    //         className="flex flex-col items-center"
    //       >
    //         {/* Circle Image */}
    //         <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-xl border-4 border-white">
    //           <Image src={item.img} alt={item.title1} fill className="object-cover" />
    //         </div>

    //         {/* Title */}
    //         <h3 className="mt-8 text-2xl font-serif">
    //           <span className="text-red-600">{item.title1} </span>
    //           {item.title2}
    //         </h3>

    //         {/* Description */}
    //         <p className="mt-4 text-gray-600 max-w-xs leading-relaxed">
    //           {item.desc}
    //         </p>
    //       </motion.div>
    //     ))}
    //   </div>
    // </section>
    <section className="relative py-28 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 overflow-hidden">

  {/* Decorative Pattern Overlay */}
  <div className="absolute inset-0 opacity-5 bg-[url('/patterns/mandala.png')] bg-center bg-repeat" />

  <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-serif mb-4 text-red-700">What Makes Us Special</h2>
    <p className="text-gray-600 mb-16">Discover the taste of real India</p>

    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          icon: "🌶️",
          title: "Authentic Spices",
          desc: "Imported Indian spices blended traditionally for deep, rich flavor.",
        },
        {
          icon: "🔥",
          title: "Tandoor Cooking",
          desc: "Clay oven grilling that gives our dishes their signature smoky taste.",
        },
        {
          icon: "🍛",
          title: "Royal Recipes",
          desc: "Inspired by  Indian cuisine served with elegance and taste.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white/80 backdrop-blur-lg p-10 rounded-2xl shadow-xl hover:shadow-2xl transition border border-orange-100"
        >
          <div className="text-5xl mb-6">{item.icon}</div>
          <h3 className="text-xl font-semibold text-red-700">{item.title}</h3>
          <p className="mt-3 text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
