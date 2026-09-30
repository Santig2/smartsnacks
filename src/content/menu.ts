import { PRODUCTS, getProductsByCategory, getFeaturedProducts } from "@/data/products";
import { CATEGORIES } from "@/content/categories";

export const MENU_CONTENT = {
  hero: {
    badge: "Crafted Fresh in Pembroke Pines",
    title: "Fuel That Tastes Like a Treat",
    subtitle: "Every item on our menu is crafted with high-grade protein, clean botanical energy, and delicious flavor. Explore by category or visit our club today.",
  },
  categories: CATEGORIES,
  products: PRODUCTS,
  getProductsByCategory,
  getFeaturedProducts,
};
