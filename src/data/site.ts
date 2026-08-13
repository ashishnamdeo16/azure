/**
 * Azure Jewelry — site configuration
 * Update contact fields below when business details are available.
 * WhatsApp numbers should be digits only, country code included (e.g. "12125551234").
 */
export const siteConfig = {
  name: "Azure Jewelry",
  shortName: "AZURE",
  tagline: "Fine Jewelry • Exceptional Gemstones • Timeless Craftsmanship",
  founded: 2019,
  founder: "Johnny Kaymakamian",
  description:
    "Azure Jewelry specializes in precious, semi-precious, and GIA-certified gemstones, offering fine jewelry and comprehensive manufacturing from concept to completion. Located in Los Angeles.",
  url: "https://azurejewelry.com",

  // Contact — WhatsApp opens wa.me; phone uses tel:
  contact: {
    whatsapp: "17476096989", // +1 (747) 609-6989
    phone: "+1 (818) 934-2090",
    phoneHref: "+18189342090",
    email: "Haigk@outlook.com",
    location: "625 S Hill St Suite 130, Los Angeles, CA 90014",
    hours: "By appointment",
  },

  // Paste full profile URLs to show icons in header / footer
  social: {
    instagram: "https://www.instagram.com/Azuregemsjewelry",
    facebook: "https://www.facebook.com/Azuregemsjewelry",
  },

  nav: [
    { label: "Rings", href: "/collections?category=Rings" },
    { label: "Bracelets", href: "/collections?category=Bracelets" },
    { label: "Gemstones", href: "/#gemstones" },
    { label: "Custom", href: "/#contact" },
    { label: "Our Story", href: "/#our-story" },
    { label: "Craftsmanship", href: "/#craftsmanship" },
  ],

  megaNav: [
    {
      label: "Rings",
      href: "/collections?category=Rings",
      featured: {
        image: "/images/ring-soleil.png",
        title: "Soleil Dome Ring",
        href: "/pieces/soleil-dome-ring",
        caption: "Signature diamond pavé",
      },
      links: [
        { label: "All Rings", href: "/collections?category=Rings" },
        { label: "Soleil Dome Ring", href: "/pieces/soleil-dome-ring" },
        { label: "Emerald Cascade Band", href: "/pieces/emerald-cascade-band" },
        { label: "Tricolor Gemstone Band", href: "/pieces/tricolor-gemstone-band" },
        { label: "Magenta Pavé Band", href: "/pieces/magenta-pave-band" },
      ],
    },
    {
      label: "Bracelets",
      href: "/collections?category=Bracelets",
      featured: {
        image: "/images/bracelet-sapphire.png",
        title: "Azure Sapphire Cuff",
        href: "/pieces/azure-sapphire-cuff",
        caption: "High jewelry",
      },
      links: [
        { label: "All Bracelets", href: "/collections?category=Bracelets" },
        { label: "Azure Sapphire Cuff", href: "/pieces/azure-sapphire-cuff" },
      ],
    },
    {
      label: "Gemstones",
      href: "/#gemstones",
      featured: {
        image: "/images/rings-gemstone-bands.png",
        title: "The Art of the Gemstone",
        href: "/#gemstones",
        caption: "Color, cut, and character",
      },
      links: [
        { label: "Diamond", href: "/collections?gemstone=Diamond" },
        { label: "Sapphire & Diamond", href: "/collections?gemstone=Sapphire+%26+Diamond" },
        { label: "Emerald", href: "/collections?gemstone=Emerald" },
        { label: "Pink Sapphire", href: "/collections?gemstone=Pink+Sapphire" },
        { label: "Multi-Stone", href: "/collections?gemstone=Multi-Stone" },
      ],
    },
    {
      label: "Custom",
      href: "/#contact",
      links: [
        { label: "Inquire for a Commission", href: "/#contact" },
        { label: "From Concept to Completion", href: "/#craftsmanship" },
      ],
    },
    { label: "Our Story", href: "/#our-story" },
    { label: "Craftsmanship", href: "/#craftsmanship" },
  ],

  socialProof: {
    giaCertified: true,
    giaTitle: "GIA Graduate Gemologist",
  },
} as const;

export type SiteConfig = typeof siteConfig;
