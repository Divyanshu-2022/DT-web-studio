export default function TrustBar() {
  const items = [
    {
      icon: "⚙️",
      title: "Next.js & React",
      desc: "Modern tech stack for fast, scalable websites",
    },
    {
      icon: "🚀",
      title: "SEO Optimized",
      desc: "Built to rank higher and load faster",
    },
    {
      icon: "📍",
      title: "Wrocław Based",
      desc: "Local support with global standards",
    },
    {
      icon: "💼",
      title: "Business Focused",
      desc: "Websites designed to generate leads",
    },
  ];

  return (
    <section className="py-12 bg-white border-y">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="group bg-gray-50 hover:bg-blue-600 transition duration-300 p-6 rounded-xl text-center shadow-sm hover:shadow-lg cursor-pointer"
          >
            <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>
            <h4 className="font-semibold text-gray-800 group-hover:text-white">
              {item.title}
            </h4>
            <p className="text-xs mt-2 text-gray-500 group-hover:text-blue-100">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
