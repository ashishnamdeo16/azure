import { siteConfig } from "@/data/site";
import type { Product } from "@/data/products";

/** Known intrinsic sizes for OG/Twitter (measured from source files). */
export const imageDimensions: Record<string, { width: number; height: number }> =
  {
    "/images/ring-soleil.png": { width: 1024, height: 856 },
    "/images/bracelet-sapphire.png": { width: 996, height: 1024 },
    "/images/rings-gemstone-bands.png": { width: 1024, height: 472 },
    "/images/logo-on-light.png": { width: 668, height: 445 },
    "/images/logo-on-dark.png": { width: 653, height: 437 },
    "/images/diamond-bracelet-poster.png": { width: 480, height: 480 },
    "/images/ring-cushion-blue-dome.jpg": { width: 682, height: 1024 },
    "/images/ring-toi-et-moi-pearl.jpg": { width: 682, height: 1024 },
    "/images/earrings-arabesque-pearl.jpg": { width: 682, height: 1024 },
  };

export function absoluteUrl(path = "/"): string {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function absoluteImageUrl(src: string): string {
  if (src.startsWith("http")) return src;
  return absoluteUrl(src);
}

export function getSameAs(): string[] {
  return [siteConfig.social.instagram, siteConfig.social.facebook].filter(
    Boolean
  ) as string[];
}

export function organizationJsonLd() {
  const sameAs = getSameAs();
  const logo = absoluteImageUrl("/images/logo-on-light.png");

  return {
    "@context": "https://schema.org",
    "@type": ["JewelryStore", "LocalBusiness"],
    "@id": `${absoluteUrl("/")}#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    image: logo,
    logo,
    foundingDate: String(siteConfig.founded),
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    slogan:
      "Every gemstone has a story, and every piece is created to be remembered.",
    telephone: siteConfig.contact.phoneHref || siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "625 S Hill St Suite 130",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      postalCode: "90014",
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      description: siteConfig.contact.hours,
    },
    ...(sameAs.length ? { sameAs } : {}),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: siteConfig.contact.phoneHref,
        email: siteConfig.contact.email,
        availableLanguage: ["English"],
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    name: siteConfig.name,
    url: absoluteUrl("/"),
    description: siteConfig.description,
    publisher: { "@id": `${absoluteUrl("/")}#organization` },
    inLanguage: "en-US",
  };
}

export function productJsonLd(product: Product) {
  const url = absoluteUrl(`/pieces/${product.slug}`);
  const images = product.images.map(absoluteImageUrl);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.name,
    description: product.description,
    image: images,
    url,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    category: product.category,
    material: product.gemstone,
    ...(product.certification
      ? {
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Certification",
              value: product.certification,
            },
          ],
        }
      : {}),
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "USD",
      availability: "https://schema.org/LimitedAvailability",
      itemCondition: "https://schema.org/NewCondition",
      description: "Price upon inquiry — contact Azure Jewelry via WhatsApp or phone.",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
        "@id": `${absoluteUrl("/")}#organization`,
      },
    },
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function ogImageFor(src: string, alt: string) {
  const dims = imageDimensions[src] ?? { width: 1200, height: 630 };
  return {
    url: src,
    width: dims.width,
    height: dims.height,
    alt,
  };
}
