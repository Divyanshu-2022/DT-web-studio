import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white py-32 text-center">
      <h1 className="text-5xl font-bold">New Season Collection</h1>
      <p className="mt-4 text-gray-300">Discover premium quality products</p>
      <div className="mt-8 flex justify-center gap-4">
        <Link href="/shop" className="bg-white text-black px-6 py-3 rounded-lg">Shop Now</Link>
        <Link href="/shop/sale" className="border border-white px-6 py-3 rounded-lg">View Sale</Link>
      </div>
    </section>
  );
}
