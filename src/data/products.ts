import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  // 1. Protein Shakes
  {
    id: "protein-shakes-signature",
    name: "Signature Protein Shakes",
    slug: "protein-shakes",
    category: "protein-shakes",
    categoryLabel: "Protein Shakes",
    shortDescription: "Gourmet, thick, and satisfying protein shake crafted to fuel your active day with 24g+ quality protein.",
    description:
      "Our signature protein shakes blend rich flavor with balanced nutrition. High protein, low sugar, and vitamin-packed for meal replacement or post-workout recovery.",
    pricePlaceholder: "[Inquire in-store / Contact for Pricing]",
    proteinAmount: "24g+ Protein",
    caloriesPlaceholder: "[Calorie details available upon request]",
    highlights: ["24g+ Protein", "Low Sugar", "Vitamins & Minerals", "Meal Replacement"],
    isFeatured: true,
    isHerbalifeBased: true,
    image: "/assets/images/real-shakes.jpeg",
  },

  // 2. Regular Protein Shakes
  {
    id: "regular-protein-shakes",
    name: "Classic Protein Shakes",
    slug: "regular-protein-shakes",
    category: "protein-shakes",
    categoryLabel: "Protein Shakes",
    shortDescription: "Smooth, essential everyday protein shake in timeless favorite flavors.",
    description:
      "A classic formulation delivering clean daily protein in smooth, refreshing flavor profiles without heaviness.",
    pricePlaceholder: "[Inquire in-store / Contact for Pricing]",
    proteinAmount: "[Protein count available in-store]",
    caloriesPlaceholder: "[Calorie details available upon request]",
    highlights: ["Clean Protein", "Essential Daily Fuel", "Custom Add-ins"],
    isFeatured: false,
    isHerbalifeBased: true,
    image: "/assets/images/brownie-shake.jpeg",
  },

  // 3. Mega Teas
  {
    id: "mega-teas",
    name: "Mega Energy Teas",
    slug: "mega-teas",
    category: "mega-teas",
    categoryLabel: "Energy Teas",
    shortDescription: "Vibrant, layered herbal energy teas infused with metabolism-boosting botanicals and zero sugar crash.",
    description:
      "Our most popular clean energy beverage! Layered with vibrant botanical extracts, B-vitamins, and soothing aloe to keep you focused and hydrated all day.",
    pricePlaceholder: "[Inquire in-store / Contact for Pricing]",
    proteinAmount: "Clean Botanical Fuel",
    caloriesPlaceholder: "[Low Calorie / Sugar-free profile]",
    highlights: ["Zero Sugar Crash", "Botanical Energy", "Aloe Hydration", "Vitamin B Boost"],
    isFeatured: false,
    isHerbalifeBased: true,
    image: "/assets/images/passionfruit-megatea.jpeg",
  },

  // 4. Regular Tea
  {
    id: "regular-tea",
    name: "Herbal Energy Tea",
    slug: "regular-tea",
    category: "mega-teas",
    categoryLabel: "Energy Teas",
    shortDescription: "Light, invigorating green and black herbal tea concentrate served iced or hot.",
    description:
      "A revitalizing cup designed to support alertness, digestion, and hydration with clean botanical antioxidants.",
    pricePlaceholder: "[Inquire in-store / Contact for Pricing]",
    proteinAmount: "Antioxidant Support",
    caloriesPlaceholder: "[Near 0 Calories]",
    highlights: ["Green & Black Tea", "Antioxidants", "Hot or Iced"],
    isFeatured: false,
    isHerbalifeBased: true,
    image: "/assets/images/refreshner-drink.jpeg",
  },

  // 5. Açaí Bowls
  {
    id: "acai-bowls",
    name: "Fresh Açaí Bowls",
    slug: "acai-bowls",
    category: "acai",
    categoryLabel: "Bowls & Superfoods",
    shortDescription: "Thick açaí berry blend crowned with fresh sliced strawberries, blueberries, granola, and chia seeds.",
    description:
      "Antioxidant-dense organic açaí base topped with crisp granola and your favorite fresh fruits. Delicious, energizing, and refreshing.",
    pricePlaceholder: "[Inquire in-store / Contact for Pricing]",
    proteinAmount: "Antioxidant Superfood",
    caloriesPlaceholder: "[Nutrition details available in-store]",
    highlights: ["Antioxidant-Rich", "Fresh Fruit Toppings", "Superfood Blend", "Vegan-Friendly"],
    isFeatured: true,
    isHerbalifeBased: false,
    image: "/assets/images/realacai.jpeg",
  },

  // 6. Oatmeal Bowls
  {
    id: "oatmeal-bowls",
    name: "Warm Protein Oatmeal Bowls",
    slug: "oatmeal-bowls",
    category: "acai",
    categoryLabel: "Bowls & Superfoods",
    shortDescription: "Hearty rolled oats infused with premium protein and topped with nuts, seeds, and fresh fruit.",
    description:
      "A comforting, wholesome breakfast bowl packed with complex carbs and protein to sustain your energy throughout the morning.",
    pricePlaceholder: "[Inquire in-store / Contact for Pricing]",
    proteinAmount: "High Fiber & Protein",
    caloriesPlaceholder: "[Nutrition details available in-store]",
    highlights: ["Complex Carbs", "Sustained Energy", "Whole Grains"],
    isFeatured: false,
    isHerbalifeBased: true,
    image: "/assets/images/acaibowls.jpeg",
  },

  // 7. Protein Waffles
  {
    id: "protein-waffles",
    name: "Belgian Protein Waffles",
    slug: "protein-waffles",
    category: "waffles",
    categoryLabel: "Waffles & Protein Bakery",
    shortDescription: "Crispy on the outside, fluffy on the inside golden waffles packed with protein.",
    description:
      "Satisfy your waffle cravings with zero guilt! Made fresh to order with high-protein batter and topped with light syrups or fresh fruit.",
    pricePlaceholder: "[Inquire in-store / Contact for Pricing]",
    proteinAmount: "High Protein Batter",
    caloriesPlaceholder: "[Nutrition details available in-store]",
    highlights: ["Freshly Made to Order", "High Protein", "Golden & Crisp"],
    isFeatured: true,
    isHerbalifeBased: true,
    image: "/assets/images/proteinwaffle.jpeg",
  },

  // 8. Protein Brownies
  {
    id: "protein-brownies",
    name: "Fudge Protein Brownies",
    slug: "protein-brownies",
    category: "waffles",
    categoryLabel: "Waffles & Protein Bakery",
    shortDescription: "Decadent, rich chocolate fudge brownie packed with nourishing protein and lower sugar.",
    description:
      "All the deep cocoa richness of a bakery brownie, formulated with protein to support your nutrition goals.",
    pricePlaceholder: "[Inquire in-store / Contact for Pricing]",
    proteinAmount: "Protein Infused",
    caloriesPlaceholder: "[Nutrition details available in-store]",
    highlights: ["Decadent Cocoa", "Smart Indulgence", "Baked Fresh"],
    isFeatured: false,
    isHerbalifeBased: true,
    image: "/assets/images/brownie-shake.jpeg",
  },

  // 9. Protein Cookies
  {
    id: "protein-cookies",
    name: "Fresh Protein Cookies",
    slug: "protein-cookies",
    category: "waffles",
    categoryLabel: "Waffles & Protein Bakery",
    shortDescription: "Soft-baked wholesome protein cookies in irresistible classic flavors.",
    description:
      "The perfect grab-and-go snack between workout sets or busy meetings. Chewy, flavorful, and packed with wholesome goodness.",
    pricePlaceholder: "[Inquire in-store / Contact for Pricing]",
    proteinAmount: "Protein On-the-Go",
    caloriesPlaceholder: "[Nutrition details available in-store]",
    highlights: ["Soft-Baked", "Snack Size", "Post-Workout Snack"],
    isFeatured: false,
    isHerbalifeBased: true,
    image: "/assets/images/pandebono-proteina.jpeg",
  },

  // 10. Horchata
  {
    id: "specialty-horchata",
    name: "High-Protein Horchata",
    slug: "horchata",
    category: "specialties",
    categoryLabel: "Specialty Drinks",
    shortDescription: "Traditional cinnamon-rice milk flavor reimagined with a smooth, high-protein wellness twist.",
    description:
      "Warm cinnamon, aromatic vanilla, and wholesome protein come together in this beloved Latin-inspired comfort beverage.",
    pricePlaceholder: "[Inquire in-store / Contact for Pricing]",
    proteinAmount: "High Protein",
    caloriesPlaceholder: "[Nutrition details available in-store]",
    highlights: ["Authentic Cinnamon Note", "Creamy & Smooth", "Wellness Twist"],
    isFeatured: false,
    isHerbalifeBased: true,
    image: "/assets/images/oreo-explosion-shake.jpeg",
  },

  // 11. Mangonada
  {
    id: "specialty-mangonada",
    name: "Energizing Mangonada",
    slug: "mangonada",
    category: "specialties",
    categoryLabel: "Specialty Drinks",
    shortDescription: "Sweet, tangy mango puree blended with clean energy and a kick of chili-lime spice.",
    description:
      "An energizing, mouth-watering celebration of sweet tropical mango, citrus tang, and savory chili spices.",
    pricePlaceholder: "[Inquire in-store / Contact for Pricing]",
    proteinAmount: "Energy & Hydration",
    caloriesPlaceholder: "[Nutrition details available in-store]",
    highlights: ["Sweet & Tangy Mango", "Chili-Lime Kick", "Refreshing Hydration"],
    isFeatured: false,
    isHerbalifeBased: true,
    image: "/assets/images/mangonada-tajin-chamoy.jpeg",
  },

  // 12. VIP Coffee
  {
    id: "vip-coffee",
    name: "VIP High-Protein Coffee",
    slug: "vip-coffee",
    category: "coffee",
    categoryLabel: "Protein Coffee & Brews",
    shortDescription: "Bold espresso flavor combined with 15g+ protein and rich creamy indulgence without excess sugar.",
    description:
      "Upgrade your morning or midday boost! Real coffee notes blended with premium protein for sustained mental clarity and fuel.",
    pricePlaceholder: "[Inquire in-store / Contact for Pricing]",
    proteinAmount: "15g+ Protein Coffee",
    caloriesPlaceholder: "[Nutrition details available in-store]",
    highlights: ["Real Coffee Flavor", "15g+ Protein", "Mental Alertness"],
    isFeatured: false,
    isHerbalifeBased: true,
    image: "/assets/images/carmel-frappe.jpeg",
  },

  // 13. Regular Coffee
  {
    id: "regular-coffee",
    name: "Classic Fresh Brewed Coffee",
    slug: "regular-coffee",
    category: "coffee",
    categoryLabel: "Protein Coffee & Brews",
    shortDescription: "Smooth, aromatic roasted coffee brewed fresh for pure simple energy.",
    description:
      "A classic hot or iced brew prepared to your preference, perfect as a morning kickstarter or midday companion.",
    pricePlaceholder: "[Inquire in-store / Contact for Pricing]",
    proteinAmount: "Pure Coffee",
    caloriesPlaceholder: "[Near 0 Calories]",
    highlights: ["Aromatic Roast", "Hot or Iced", "Daily Kickstarter"],
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
