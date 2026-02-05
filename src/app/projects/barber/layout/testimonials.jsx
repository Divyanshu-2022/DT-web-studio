function Testimonials({ lang }) {
  const reviews = [
    {
      name: "Anna Kowalska",
      text_en: "Best Indian food in Wrocław! The butter chicken was incredible.",
      text_pl: "Najlepsze indyjskie jedzenie we Wrocławiu! Butter chicken był niesamowity.",
    },
    {
      name: "Mark Stevens",
      text_en: "Authentic flavours and great service. Highly recommend!",
      text_pl: "Autentyczne smaki i świetna obsługa. Bardzo polecam!",
    },
    {
      name: "Kasia Nowak",
      text_en: "Beautiful atmosphere and delicious biryani.",
      text_pl: "Piękna atmosfera i przepyszne biryani.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % reviews.length);
  const prev = () => setIndex((index - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-24 bg-gradient-to-br from-white to-yellow-50 text-center">
      <h2 className="text-3xl font-bold">
        {lang === "en" ? "What Our Guests Say" : "Opinie Gości"}
      </h2>

      <div className="mt-12 max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10 relative">
        <p className="text-lg text-gray-700 italic">
          “{lang === "en" ? reviews[index].text_en : reviews[index].text_pl}”
        </p>
        <p className="mt-6 font-semibold text-red-600">{reviews[index].name}</p>

        {/* Controls */}
        <div className="flex justify-center gap-6 mt-8 text-2xl">
          <button onClick={prev} className="hover:scale-110 transition">⬅️</button>
          <button onClick={next} className="hover:scale-110 transition">➡️</button>
        </div>
      </div>
    </section>
  );
}


export default Testimonials;