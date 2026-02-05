"use client";
import { useState } from "react";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthly: 600,
      yearly: 6000,
      short: "Perfect for small businesses starting online",
      features: [
        "1-page modern website",
        "Mobile responsive design",
        "Basic SEO setup",
        "Contact form integration",
        "Fast loading speed",
      ],
    },
    {
      name: "Business",
      monthly: 1200,
      yearly: 12000,
      short: "Best for growing local businesses",
      popular: true,
      features: [
        "Up to 5 pages",
        "Advanced design layout",
        "On-page SEO optimization",
        "Google Maps integration",
        "Performance optimization",
        "Social media links",
      ],
    },
    {
      name: "Premium",
      monthly: 2500,
      yearly: 25000,
      short: "For businesses that want maximum growth",
      features: [
        "Custom multi-page website",
        "Advanced SEO strategy",
        "Speed & performance boost",
        "Google Analytics setup",
        "Conversion-focused design",
        "1 month free support",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Pricing</h2>
        <p className="mt-4 text-gray-600">
          Simple and transparent pricing designed for real business growth.
        </p>

        {/* Toggle */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <span className={!yearly ? "font-semibold" : "text-gray-500"}>One-Time</span>
          <button
            onClick={() => setYearly(!yearly)}
            className="w-14 h-7 bg-blue-600 rounded-full flex items-center px-1 transition"
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${
                yearly ? "translate-x-7" : ""
              }`}
            />
          </button>
          <span className={yearly ? "font-semibold" : "text-gray-500"}>
            Yearly Support
          </span>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {plans.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly;

            return (
              <div key={plan.name} className="group [perspective:1000px]">
                <div className="relative h-[460px] w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                  {/* FRONT */}
                  <div
                    className={`absolute inset-0 rounded-2xl p-8 shadow-xl flex flex-col justify-center items-center text-center border [backface-visibility:hidden] transition ${
                      plan.popular
                        ? "border-blue-600 bg-blue-50 shadow-blue-200/60"
                        : "bg-white"
                    }`}
                  >
                    {plan.popular && (
                      <span className="mb-3 text-xs bg-blue-600 text-white px-3 py-1 rounded-full animate-pulse">
                        MOST POPULAR
                      </span>
                    )}

                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    <p className="text-3xl font-bold mt-4">{price} zł</p>
                    <p className="text-gray-600 mt-3 text-sm">{plan.short}</p>

                    <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 shadow hover:shadow-blue-300 transition">
                      Get Started
                    </button>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 rounded-2xl p-8 shadow-lg bg-blue-600 text-white flex flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h4 className="font-semibold text-lg mb-4">What’s Included:</h4>
                    <ul className="space-y-2 text-sm text-left">
                      {plan.features.map((feature, i) => (
                        <li key={i}>✔ {feature}</li>
                      ))}
                    </ul>

                    <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                      Start This Plan
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
