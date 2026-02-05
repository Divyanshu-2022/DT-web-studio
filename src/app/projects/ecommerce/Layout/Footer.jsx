export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-24 ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">ShopPro</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Premium quality products with fast shipping and trusted service.
            Discover your style with confidence.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-white font-semibold mb-4">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/#" className="hover:text-white">Men</a></li>
            <li><a href="/#" className="hover:text-white">Women</a></li>
            <li><a href="/#" className="hover:text-white">Accessories</a></li>
            <li><a href="/#" className="hover:text-white">Sale</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-4">Customer Service</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/#" className="hover:text-white">FAQ</a></li>
            <li><a href="/#" className="hover:text-white">Contact Us</a></li>
            <li><a href="/#" className="hover:text-white">Shipping</a></li>
            <li><a href="/#" className="hover:text-white">Returns</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">Stay Connected</h4>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to get updates on new arrivals and special offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 rounded-l-lg text-black"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-lg text-white hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ShopPro. All rights reserved.
      </div>
    </footer>
  );
}
