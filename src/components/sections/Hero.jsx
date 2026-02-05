export default function Hero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block mb-4 px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
            Web Development & SEO in Wrocław
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Modern Websites That <br />
            <span className="text-blue-600">Bring Real Customers</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            I help local businesses grow online with fast, SEO-optimized websites,
            clean design, and proven Google ranking strategies.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700">
              Free Consultation
            </a>
            <a href="#projects" className="border px-8 py-3 rounded-lg hover:bg-gray-50">
              View Work
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="font-semibold text-lg mb-4">Why DT Web Studio?</h3>
          <ul className="space-y-3 text-gray-600">
            <li>⚡ Fast & SEO-ready websites</li>
            <li>📈 Google visibility & local ranking</li>
            <li>📱 Mobile-first design</li>
            <li>🤝 Clear communication & support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
