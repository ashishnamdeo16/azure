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
  /** CSS object-position so the jewelry stays in frame when the photo is cropped. */
  focal?: string;
  /** Tall studio photos should keep a portrait frame on the piece page. */
  portrait?: boolean;
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
    id: "champagne-halo-ring",
    slug: "champagne-halo-ring",
    name: "Champagne Halo Ring",
    category: "Rings",
    gemstone: "Champagne Diamond",
    description:
      "A cushion-cut champagne diamond held in a halo of white diamonds, with pavé continuing down the shoulders. Warm color at the center, bright light around it.",
    craftsmanship:
      "The center stone sits in a white-metal frame of round diamonds. Pavé on the band carries that light toward the finger, so the halo reads as one continuous field.",
    collection: "Signature",
    featured: true,
    images: ["/images/ring-champagne-halo.jpg"],
    alt: "Champagne Halo Ring by Azure Jewelry — cushion-cut champagne diamond with a white diamond halo",
    focal: "center 48%",
  },
  {
    id: "wave-pave-ring",
    slug: "wave-pave-ring",
    name: "Wave Pavé Ring",
    category: "Rings",
    gemstone: "Diamond",
    description:
      "An undulating band of warm gold, each rise and fall covered in pavé-set diamonds. The silhouette moves like a wave around the finger.",
    craftsmanship:
      "Repeating arches are fully pavé-set. The metal shows only as a warm line beneath the stones, so the surface reads as continuous light.",
    collection: "Signature",
    featured: true,
    images: ["/images/ring-wave-pave.jpg"],
    alt: "Wave Pavé Ring by Azure Jewelry — undulating gold band fully set with pavé diamonds",
    focal: "center 50%",
  },
  {
    id: "cushion-blue-dome-ring",
    slug: "cushion-blue-dome-ring",
    name: "Cushion Blue Dome Ring",
    category: "Rings",
    gemstone: "Blue Gemstone & Diamond",
    description:
      "A wide dome of pavé-set diamonds, centered by a cushion-cut blue gemstone in a smooth bezel. Light across the surface, color at the heart.",
    craftsmanship:
      "The dome is fully pavé-set in white metal. The blue center sits low in a bezel, so the diamonds read as one field around it.",
    collection: "Signature",
    featured: true,
    images: ["/images/ring-cushion-blue-dome.jpg"],
    alt: "Cushion Blue Dome Ring by Azure Jewelry — pavé diamond dome with a cushion-cut blue gemstone",
    focal: "center 46%",
    portrait: true,
  },
  {
    id: "toi-et-moi-pearl-ring",
    slug: "toi-et-moi-pearl-ring",
    name: "Toi et Moi Pearl Ring",
    category: "Rings",
    gemstone: "Pearl & Diamond",
    description:
      "Two pearls set side by side — one dark, one white — joined by a ribbon of pavé diamonds. A toi-et-moi ring, built on contrast.",
    craftsmanship:
      "Each pearl is held at the shoulder by a diamond-set arc. The two colors sit together as one composition.",
    collection: "Signature",
    featured: true,
    images: ["/images/ring-toi-et-moi-pearl.jpg"],
    alt: "Toi et Moi Pearl Ring by Azure Jewelry — a dark pearl and a white pearl joined by pavé diamonds",
    focal: "center 48%",
    portrait: true,
  },
  {
    id: "spectrum-pear-necklace",
    slug: "spectrum-pear-necklace",
    name: "Spectrum Pear Necklace",
    category: "Necklaces",
    gemstone: "Fancy Color Diamond",
    description:
      "Pear-shaped links, each centered with a colored diamond — champagne, pink, yellow, and white — and framed by smaller white diamonds. Warm and cool metal alternate along the line.",
    craftsmanship:
      "Each pear link is set on its own, with a colored center and a diamond surround. The links join into a necklace that follows the line of the neck.",
    collection: "High Jewelry",
    featured: true,
    images: ["/images/necklace-fancy-color.jpg"],
    alt: "Spectrum Pear Necklace by Azure Jewelry — pear-shaped links with champagne, pink, yellow, and white diamonds",
    focal: "center 48%",
    portrait: true,
  },
  {
    id: "diamond-line-necklace",
    slug: "diamond-line-necklace",
    name: "Diamond Line Necklace",
    category: "Necklaces",
    gemstone: "Diamond",
    description:
      "A single line of round diamonds in warm gold, resting close to the collarbone. A classic necklace, quiet in form and bright in light.",
    craftsmanship:
      "Round diamonds are set in a continuous line on a warm-gold chain, proportioned to sit evenly against the neck.",
    collection: "Signature",
    featured: true,
    images: ["/images/necklace-diamond-line.jpg"],
    alt: "Diamond Line Necklace by Azure Jewelry — round diamonds set in a warm gold line on a black bust",
    focal: "center 32%",
    portrait: true,
  },
  {
    id: "arabesque-pearl-earrings",
    slug: "arabesque-pearl-earrings",
    name: "Arabesque Pearl Earrings",
    category: "Earrings",
    gemstone: "Pearl & Diamond",
    description:
      "A pair of scrolling earrings in warm gold. The open curve is lined with pavé-set diamonds and finishes in a dark pearl drop.",
    craftsmanship:
      "The scroll is openwork, with small diamonds set along the outer line. A pearl hangs from the lowest point of each earring.",
    collection: "High Jewelry",
    featured: true,
    images: ["/images/earrings-arabesque-pearl.jpg"],
    alt: "Arabesque Pearl Earrings by Azure Jewelry — scrolling gold earrings with pavé diamonds and dark pearl drops",
    focal: "center 46%",
    portrait: true,
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
