export default function CategoriesGrid() {
  const categories = [
    {
      name: "Men",
      color: "from-red-500 to-orange-500",
      items: ["T-Shirts", "Jackets", "Shoes", "Watches"],
    },
    {
      name: "Women",
      color: "from-orange-400 to-yellow-400",
      items: ["Dresses", "Handbags", "Heels", "Jewelry"],
    },
    {
      name: "Accessories",
      color: "from-yellow-400 to-red-400",
      items: ["Sunglasses", "Belts", "Hats", "Backpacks"],
    },
  ];

  return (
    <section className="py-28 bg-orange-500/10">
      <h2 className="text-4xl font-bold text-center">Shop by Category</h2>
      <p className="text-center text-gray-600 mt-3">
        Discover styles tailored just for you
      </p>

      <div className="grid md:grid-cols-3 gap-12 mt-16 max-w-6xl mx-auto px-6">
        {categories.map((cat) => (
          <div key={cat.name} className="group [perspective:1000px]">
            <div className="relative h-72 w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

              {/* FRONT */}
              <div className={`absolute inset-0 rounded-2xl text-white flex items-center justify-center text-2xl font-semibold shadow-xl bg-gradient-to-br ${cat.color} [backface-visibility:hidden]`}>
                {cat.name}
              </div>

              {/* BACK */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Popular in {cat.name}
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {cat.items.map((item) => (
                    <li key={item} className="hover:text-red-500 cursor-pointer transition">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
