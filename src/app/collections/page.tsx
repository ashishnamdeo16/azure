import type { Metadata } from "next";
import { CatalogFilters } from "@/components/CatalogFilters";
import { Reveal } from "@/components/Reveal";
import { absoluteUrl, ogImageFor } from "@/lib/seo";
import { siteConfig } from "@/data/site";

const title = "Fine Jewelry Collections";
const description =
  "Explore Azure Jewelry collections of rings, necklaces, earrings, bracelets, and gemstone pieces. Each work is available by private inquiry via WhatsApp or phone.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: absoluteUrl("/collections"),
  },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: absoluteUrl("/collections"),
    images: [
      ogImageFor(
        "/images/rings-gemstone-bands.png",
        "Azure Jewelry colored gemstone band rings"
      ),
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
    images: ["/images/rings-gemstone-bands.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CollectionsPage() {
  return (
    <div className="bg-ivory pt-24 pb-16 md:pt-28 lg:pt-32 md:pb-20">
      <div className="container-azure">
        <Reveal>
          <p className="eyebrow mb-3">Catalog</p>
          <h1 className="type-section text-charcoal">The Collection</h1>
          <p className="type-body mt-4 max-w-xl text-muted">
            Each piece is available by inquiry. Select a work that resonates,
            then connect with Azure Jewelry on WhatsApp or by phone.
          </p>
        </Reveal>

        <section className="mt-12 md:mt-16" aria-labelledby="catalog-pieces">
          <h2 id="catalog-pieces" className="sr-only">
            Jewelry pieces
          </h2>
          <CatalogFilters />
        </section>
      </div>
    </div>
  );
}
