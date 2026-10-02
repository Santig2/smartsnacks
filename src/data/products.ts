import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  // Protein Shakes
  {
    id: "brownie-shake",
    name: "Chocolate Brownie Shake",
    slug: "brownie-shake",
    category: "protein-shakes",
    categoryLabel: "Protein Shakes",
    shortDescription: "Decadent chocolate fudge brownie shake packed with premium protein.",
    description: "Satisfy your chocolate cravings without the guilt. A rich, thick chocolate brownie shake formulated with high-quality protein for muscle recovery and meal replacement.",
    proteinAmount: "24g+ Protein",
    caloriesPlaceholder: "Low Sugar, High Protein",
    highlights: ["24g+ Protein", "Meal Replacement", "Low Sugar", "Vitamins & Minerals"],
    isFeatured: true,
    isHerbalifeBased: true,
    image: "/assets/images/brownie-shake.jpeg",
  },
  {
    id: "oreo-explosion-shake",
    name: "Cookies & Cream Explosion Shake",
    slug: "oreo-explosion-shake",
    category: "protein-shakes",
    categoryLabel: "Protein Shakes",
    shortDescription: "Classic cookies and cream blended into a creamy, high-protein treat.",
    description: "The ultimate cookies and cream experience. Blended with premium vanilla protein and real cookie pieces for a delicious and satisfying healthy shake.",
    proteinAmount: "24g+ Protein",
    caloriesPlaceholder: "Low Sugar, High Protein",
    highlights: ["24g+ Protein", "Cookie Pieces", "Meal Replacement", "Irresistible Flavor"],
    isFeatured: true,
    isHerbalifeBased: true,
    image: "/assets/images/oreo-explosion-shake.jpeg",
  },
  {
    id: "strawberry-cheesecake-shake",
    name: "Strawberry Cheesecake Shake",
    slug: "strawberry-cheesecake-shake",
    category: "protein-shakes",
    categoryLabel: "Protein Shakes",
    shortDescription: "Creamy strawberry cheesecake flavor with a graham cracker touch.",
    description: "A fan-favorite! Enjoy the rich and creamy taste of strawberry cheesecake, perfectly balanced with high-quality protein to support your goals.",
    proteinAmount: "24g+ Protein",
    caloriesPlaceholder: "Low Sugar, High Protein",
    highlights: ["24g+ Protein", "Real Strawberry Flavor", "Cheesecake Taste", "Meal Replacement"],
    isFeatured: true,
    isHerbalifeBased: true,
    image: "/assets/images/strawberry-cheesecake-shake.jpeg",
  },
  {
    id: "pistachio-shake",
    name: "Pistachio Protein Shake",
    slug: "pistachio-shake",
    category: "protein-shakes",
    categoryLabel: "Protein Shakes",
    shortDescription: "Nutty, smooth, and delicious pistachio flavored protein shake.",
    description: "A unique and sophisticated flavor profile. Our Pistachio shake delivers smooth, nutty notes along with essential daily protein for sustained energy.",
    proteinAmount: "24g+ Protein",
    caloriesPlaceholder: "Low Sugar, High Protein",
    highlights: ["24g+ Protein", "Nutty Flavor", "Meal Replacement", "Vitamins & Minerals"],
    isFeatured: false,
    isHerbalifeBased: true,
    image: "/assets/images/pistachio-shake.jpeg",
  },
  {
    id: "pumpkinbanana-shake",
    name: "Pumpkin Banana Shake",
    slug: "pumpkinbanana-shake",
    category: "protein-shakes",
    categoryLabel: "Protein Shakes",
    shortDescription: "Seasonal pumpkin spice mixed with sweet banana and clean protein.",
    description: "A comforting blend of fall pumpkin spices and sweet banana, packed with the protein you need to fuel your day.",
    proteinAmount: "24g+ Protein",
    caloriesPlaceholder: "Low Sugar, High Protein",
    highlights: ["24g+ Protein", "Seasonal Flavor", "Real Fruit Base", "Comforting Taste"],
    isFeatured: false,
    isHerbalifeBased: true,
    image: "/assets/images/pumpkinbanana-shake.jpeg",
  },
  {
    id: "tropical-pinaorange",
    name: "Tropical Piña-Orange Shake",
    slug: "tropical-pinaorange",
    category: "protein-shakes",
    categoryLabel: "Protein Shakes",
    shortDescription: "Refreshing pineapple and orange citrus protein blend.",
    description: "Escape to the tropics with this bright, citrusy blend of pineapple and orange, formulated to provide a refreshing protein boost.",
    proteinAmount: "24g+ Protein",
    caloriesPlaceholder: "Low Sugar, High Protein",
    highlights: ["24g+ Protein", "Tropical Flavor", "Refreshing", "Vitamin C Boost"],
    isFeatured: false,
    isHerbalifeBased: true,
    image: "/assets/images/tropical-pinaorange.jpeg",
  },

  // Energy Teas
  {
    id: "passionfruit-megatea",
    name: "Passion Fruit Mega Tea",
    slug: "passionfruit-megatea",
    category: "mega-teas",
    categoryLabel: "Energy Teas",
    shortDescription: "Vibrant passion fruit energy tea loaded with aloe and B-vitamins.",
    description: "Our most popular clean energy beverage! A refreshing passion fruit infusion featuring botanical extracts, B-vitamins, and soothing aloe for all-day focus without the crash.",
    proteinAmount: "Botanical Energy",
    caloriesPlaceholder: "Zero Sugar Crash",
    highlights: ["Zero Sugar Crash", "Botanical Energy", "Aloe Hydration", "Vitamin B Boost"],
    isFeatured: true,
    isHerbalifeBased: true,
    image: "/assets/images/passionfruit-megatea.jpeg",
  },
  {
    id: "mangonada-tajin-chamoy",
    name: "Energizing Mangonada",
    slug: "mangonada",
    category: "mega-teas",
    categoryLabel: "Energy Teas",
    shortDescription: "Sweet, tangy mango blended with clean energy, Tajín, and chamoy.",
    description: "An exciting and mouth-watering celebration of sweet tropical mango, citrus tang, and savory chili spices. Packed with clean energy and hydration.",
    proteinAmount: "Clean Energy",
    caloriesPlaceholder: "Zero Sugar Crash",
    highlights: ["Sweet & Tangy Mango", "Tajín & Chamoy Kick", "Refreshing Hydration", "Clean Energy"],
    isFeatured: true,
    isHerbalifeBased: true,
    image: "/assets/images/mangonada-tajin-chamoy.jpeg",
  },
  {
    id: "refreshner-drink",
    name: "Herbal Energy Refresher",
    slug: "refreshner-drink",
    category: "mega-teas",
    categoryLabel: "Energy Teas",
    shortDescription: "Light, invigorating green and black herbal tea concentrate.",
    description: "A revitalizing cup designed to support alertness, digestion, and hydration with clean botanical antioxidants. Available iced or hot.",
    proteinAmount: "Antioxidant Support",
    caloriesPlaceholder: "Low Calorie",
    highlights: ["Green & Black Tea", "Antioxidants", "Hot or Iced", "Clean Focus"],
    isFeatured: false,
    isHerbalifeBased: true,
    image: "/assets/images/refreshner-drink.jpeg",
  },

  // Bowls & Superfoods
  {
    id: "acai-bowls",
    name: "Fresh Açaí Bowls",
    slug: "acai-bowls",
    category: "acai",
    categoryLabel: "Bowls & Superfoods",
    shortDescription: "Thick organic açaí berry blend crowned with fresh fruit and granola.",
    description: "Antioxidant-dense organic açaí base topped with crisp granola, sliced strawberries, blueberries, and coconut. Delicious, energizing, and beautifully crafted.",
    proteinAmount: "Antioxidant Superfood",
    caloriesPlaceholder: "Nutrient Dense",
    highlights: ["Antioxidant-Rich", "Fresh Fruit Toppings", "Superfood Blend", "Vegan-Friendly"],
    isFeatured: true,
    isHerbalifeBased: false,
    image: "/assets/images/realacai.jpeg",
  },

  // Waffles & Protein Bakery
  {
    id: "protein-waffles",
    name: "Belgian Protein Waffles",
    slug: "protein-waffles",
    category: "waffles",
    categoryLabel: "Waffles & Bakery",
    shortDescription: "Crispy on the outside, fluffy on the inside golden waffles packed with protein.",
    description: "Satisfy your waffle cravings with zero guilt! Made fresh to order with high-protein batter and served with fresh fruit and light syrup.",
    proteinAmount: "High Protein Batter",
    caloriesPlaceholder: "Guilt-Free Indulgence",
    highlights: ["Freshly Made to Order", "High Protein", "Golden & Crisp", "Fresh Fruit"],
    isFeatured: true,
    isHerbalifeBased: true,
    image: "/assets/images/proteinwaffle.jpeg",
  },
  {
    id: "pandebono-proteina",
    name: "Pandebono de Proteína",
    slug: "pandebono-proteina",
    category: "waffles",
    categoryLabel: "Waffles & Bakery",
    shortDescription: "Traditional Colombian cheese bread, baked fresh with high-quality protein.",
    description: "Experience the authentic taste of Latin America with our healthy twist! Warm, cheesy, and soft Pandebono baked with added protein for a nutritious snack.",
    proteinAmount: "Protein Infused",
    caloriesPlaceholder: "Wholesome Snack",
    highlights: ["Authentic Flavor", "Cheese Bread", "Protein Enriched", "Baked Fresh"],
    isFeatured: true,
    isHerbalifeBased: true,
    image: "/assets/images/pandebono-proteina.jpeg",
  },

  // Coffee
  {
    id: "carmel-frappe",
    name: "Caramel Frappé High-Protein Coffee",
    slug: "carmel-frappe",
    category: "coffee",
    categoryLabel: "Protein Coffee & Brews",
    shortDescription: "Bold espresso flavor blended with rich caramel and 15g+ protein.",
    description: "Upgrade your midday boost! Real coffee notes blended with premium protein and sweet caramel for sustained mental clarity and physical fuel.",
    proteinAmount: "15g+ Protein Coffee",
    caloriesPlaceholder: "Low Sugar",
    highlights: ["Real Coffee Flavor", "15g+ Protein", "Sweet Caramel", "Mental Alertness"],
    isFeatured: true,
    isHerbalifeBased: true,
    image: "/assets/images/carmel-frappe.jpeg",
  },
  {
    id: "icedcoffee",
    name: "Classic Iced Coffee",
    slug: "icedcoffee",
    category: "coffee",
    categoryLabel: "Protein Coffee & Brews",
    shortDescription: "Smooth, aromatic roasted coffee brewed fresh over ice.",
    description: "A classic, refreshing iced brew prepared to your preference, perfect as a morning kickstarter or afternoon pick-me-up.",
    proteinAmount: "Pure Coffee",
    caloriesPlaceholder: "Low Calorie",
    highlights: ["Aromatic Roast", "Served Iced", "Daily Kickstarter", "Pure Energy"],
    isFeatured: false,
    isHerbalifeBased: false,
    image: "/assets/images/icedcoffee.jpeg",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  const normalized =
    category === "energy-teas" || category === "mega-teas"
      ? ["energy-teas", "mega-teas"]
    : category === "acai" || category === "bowls" || category === "acai-bowls"
      ? ["acai", "bowls", "acai-bowls"]
    : category === "waffles" || category === "waffles-snacks"
      ? ["waffles", "waffles-snacks"]
    : [category];

  return PRODUCTS.filter((p) => normalized.includes(p.category));
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.isFeatured);
}
