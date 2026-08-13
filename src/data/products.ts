export type ProductCategory =
  | "Rings"
  | "Bracelets"
  | "Earrings"
  | "Necklaces"
  | "Gemstones"
  | "Custom Jewelry";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  gemstone: string;
  description: string;
  craftsmanship: string;
  certification?: string;
  collection: string;
  featured: boolean;
  images: string[];
  alt: string;
};

export const products: Product[] = [
  {
    id: "soleil-dome-ring",
    slug: "soleil-dome-ring",
    name: "Soleil Dome Ring",
    category: "Rings",
    gemstone: "Diamond",
    description:
      "A radiant circular dome of pavé-set diamonds arranged in a sunburst motif. Sixteen diamond-encrusted rays ascend from a brilliant center stone, creating depth, movement, and enduring brilliance.",
    craftsmanship:
      "Hand-set pavé diamonds on a sculpted white-metal dome. Each ray is tapered and proportioned for continuous light return across the surface.",
    certification: "GIA Certified",
    collection: "Signature",
    featured: true,
    images: ["/images/ring-soleil.png"],
    alt: "Soleil Dome Ring by Azure Jewelry — diamond pavé sunburst ring on a reflective black surface",
  },
  {
    id: "azure-sapphire-cuff",
    slug: "azure-sapphire-cuff",
    name: "Azure Sapphire Cuff",
    category: "Bracelets",
    gemstone: "Sapphire & Diamond",
    description:
      "A masterwork cuff of vivid blue sapphire cabochons interspersed with brilliant diamonds. The organic, luminous surface reveals an open-work lattice beneath — craftsmanship visible in every detail.",
    craftsmanship:
      "Cabochon sapphires of varying scale are set in darkened metal to intensify color. Diamonds punctuate the composition; the interior lattice is hand-finished.",
    certification: "GIA Certified",
    collection: "High Jewelry",
    featured: true,
    images: ["/images/bracelet-sapphire.png"],
    alt: "Azure Sapphire Cuff by Azure Jewelry — blue sapphire and diamond bracelet on black background",
  },
  {
    id: "emerald-cascade-band",
    slug: "emerald-cascade-band",
    name: "Emerald Cascade Band",
    category: "Rings",
    gemstone: "Emerald",
    description:
      "A wide eternity-style band set with four parallel rows of square-cut emerald-green gemstones. A dense, architectural grid of color for those who favor bold, modern luxury.",
    craftsmanship:
      "Square-cut stones channel-set in polished white metal. Precise alignment creates a seamless cascade of green around the full circumference.",
    collection: "Gemstone Bands",
    featured: true,
    images: ["/images/rings-gemstone-bands.png"],
    alt: "Emerald Cascade Band by Azure Jewelry — wide ring with four rows of square-cut green gemstones",
  },
  {
    id: "tricolor-gemstone-band",
    slug: "tricolor-gemstone-band",
    name: "Tricolor Gemstone Band",
    category: "Rings",
    gemstone: "Multi-Stone",
    description:
      "Three distinct rows of color-blocked gemstones — bright orange, royal blue, and vivid magenta — set in a sculptural white-metal band. A rare, artistic composition.",
    craftsmanship:
      "Square-cut stones arranged in intentional color bands. Tight grid setting emphasizes saturation and the interplay between hues.",
    collection: "Gemstone Bands",
    featured: true,
    images: ["/images/rings-gemstone-bands.png"],
    alt: "Tricolor Gemstone Band by Azure Jewelry — orange, blue, and magenta square-cut gemstone ring",
  },
  {
    id: "magenta-pave-band",
    slug: "magenta-pave-band",
    name: "Magenta Pavé Band",
    category: "Rings",
    gemstone: "Pink Sapphire",
    description:
      "Three rows of bright magenta-pink square-cut gemstones set in a wide polished band. Saturated color and mirror-finished metal for a striking, contemporary statement.",
    craftsmanship:
      "Channel-set square stones with refined edge finishing. The interior reveals meticulous grid metalwork beneath the gemstone surface.",
    collection: "Gemstone Bands",
    featured: false,
    images: ["/images/rings-gemstone-bands.png"],
    alt: "Magenta Pavé Band by Azure Jewelry — wide ring with three rows of bright pink square-cut gemstones",
  },
];

export const collections = [
  {
    id: "rings",
    name: "Rings",
    slug: "rings",
    description: "Statement bands and sculptural diamond forms.",
    image: "/images/ring-soleil.png",
    alt: "Diamond Soleil Dome Ring",
  },
  {
    id: "bracelets",
    name: "Bracelets",
    slug: "bracelets",
    description: "High jewelry cuffs defined by gemstone presence.",
    image: "/images/bracelet-sapphire.png",
    alt: "Azure Sapphire Cuff bracelet",
  },
  {
    id: "gemstones",
    name: "Gemstones",
    slug: "gemstones",
    description: "Colored stones selected for rarity and character.",
    image: "/images/rings-gemstone-bands.png",
    alt: "Colored gemstone eternity bands",
  },
  {
    id: "custom",
    name: "Custom Jewelry",
    slug: "custom",
    description: "From concept to completion, made for you.",
    image: "/images/bracelet-sapphire.png",
    alt: "Custom high jewelry craftsmanship",
  },
] as const;

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getUniqueGemstones(): string[] {
  return [...new Set(products.map((p) => p.gemstone))];
}

export function getUniqueCategories(): ProductCategory[] {
  return [...new Set(products.map((p) => p.category))];
}
