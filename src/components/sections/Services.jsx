export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Website Development",
      desc: "Modern, high-performance websites built to convert visitors into customers.",
      points: [
        "Next.js & React",
        "Fast loading speed",
        "Mobile-first design",
      ],
    },
    {
      icon: "🛒",
      title: "E-commerce Solutions",
      desc: "Sell your products online with secure and scalable stores.",
      points: [
        "Easy product management",
        "Payment gateway setup",
        "Conversion-focused layout",
      ],
    },
    {
      icon: "🔍",
      title: "SEO Optimization",
      desc: "Rank higher on Google and bring consistent organic traffic.",
      points: [
        "Technical SEO",
        "Keyword strategy",
        "On-page optimization",
      ],
    },
    {
      icon: "📍",
      title: "Google My Business",
      desc: "Dominate local search results and Google Maps visibility.",
      points: [
        "Profile optimization",
        "Review strategy",
        "Local ranking boost",
      ],
    },
    {
      icon: "✍️",
      title: "Content & Copywriting",
      desc: "Persuasive and SEO-friendly content that drives action.",
      points: [
        "Website copy",
        "Blog content",
        "Sales messaging",
      ],
    },
    {
      icon: "🛠️",
      title: "Maintenance & Support",
      desc: "Ongoing updates and improvements to keep your site performing.",
      points: [
        "Monthly updates",
        "Security monitoring",
        "Performance optimization",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Services</h2>
        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Everything you need to build a strong and visible online presence.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="group [perspective:1000px]">
              <div className="relative h-64 w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* FRONT */}
                <div className="absolute inset-0 bg-white p-8 rounded-xl shadow flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 bg-blue-600 text-white p-6 rounded-xl shadow flex flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-sm mb-4">{s.desc}</p>
                  <ul className="space-y-2 text-sm">
                    {s.points.map((point, i) => (
                      <li key={i}>✔ {point}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
