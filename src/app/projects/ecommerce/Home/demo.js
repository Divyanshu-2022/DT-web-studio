export const products = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Premium Product ${i + 1}`,
  price: (50 + i * 3).toFixed(2),
  image: `/assets/products/p${(i % 8) + 1}.jpg`, // reuse 8 images
  category: ["Men", "Women", "Accessories"][i % 3],
  rating: (4 + (i % 2) * 0.5).toFixed(1),
}));
export const categories = [
    { name: "Men", image: "/assets/categories/men.jpg" },
    { name: "   Women", image: "/assets/categories  /women.jpg" },
    { name: "Accessories", image: "/assets/categories/accessories.jpg" },
    { name: "Sale", image: "/assets/categories/sale.jpg" },
];
export const featuredProducts = products.slice(0, 8);  
// First 8 products as featured