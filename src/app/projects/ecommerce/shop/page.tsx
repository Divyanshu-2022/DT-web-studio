import FiltersSidebar from "@/components/shop/FiltersSidebar";
import SortBar from "@/components/shop/SortBar";
import ProductCard from "@/components/shop/ProductCard";

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
      <FiltersSidebar />
      <div className="md:col-span-3">
        <SortBar />
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          {/* Map products here */}
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
