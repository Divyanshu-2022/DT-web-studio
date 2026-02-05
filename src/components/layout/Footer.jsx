export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">DT Web Studio</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Modern websites and SEO solutions that help businesses grow,
            rank higher, and convert more customers online.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Website Development</li>
            <li>SEO Optimization</li>
            <li>Google My Business</li>
            <li>E-commerce Solutions</li>
          </ul>
        </div>

        {/* CONTACT / SOCIAL */}
        <div>
          <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
          <p className="text-sm mb-2">📍 Wrocław, Poland</p>
          <p className="text-sm mb-2">📧 divyanshutripathi7826@gmail.com</p>
          <div className="flex gap-4 mt-4 text-lg">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">💼</a>
            <a href="#" className="hover:text-white">📸</a>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DT Web Studio · All rights reserved.
      </div>
    </footer>
  );
}
