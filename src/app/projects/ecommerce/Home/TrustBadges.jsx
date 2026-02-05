import { ShieldCheck, Truck, RotateCcw, Headphones } from "lucide-react";

export default function TrustBadges() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      desc: "Your transactions are encrypted and protected",
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      desc: "Quick delivery across the country",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      desc: "Hassle-free returns within 30 days",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Friendly customer help anytime",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="bg-gray-800/60 backdrop-blur-lg p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <Icon size={40} className="text-blue-400" />
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
