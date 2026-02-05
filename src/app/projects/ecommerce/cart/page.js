import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";

export default function CartPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
      <div className="md:col-span-2 space-y-6">
        <CartItem />
      </div>
      <CartSummary />
    </div>
  );
}
