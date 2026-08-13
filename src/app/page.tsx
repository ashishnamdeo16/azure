import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CategoryGateways } from "@/components/sections/CategoryGateways";
import { CollectionSpotlights } from "@/components/sections/CollectionSpotlights";
import { AtelierFilm } from "@/components/sections/AtelierFilm";
import { FeaturedPieces } from "@/components/sections/FeaturedPieces";
import { GemstoneArt } from "@/components/sections/GemstoneArt";
import { Craftsmanship } from "@/components/sections/Craftsmanship";
import { GiaExpertise } from "@/components/sections/GiaExpertise";
import { OurStory } from "@/components/sections/OurStory";
import { SignatureStatement } from "@/components/sections/SignatureStatement";
import { ContactSection } from "@/components/sections/ContactSection";
import { siteConfig } from "@/data/site";
import { absoluteUrl, ogImageFor } from "@/lib/seo";

const title = `${siteConfig.name} | Fine Jewelry & Exceptional Gemstones`;
const description =
  "Azure Jewelry in Los Angeles — fine jewelry, exceptional gemstones, and timeless craftsmanship. Browse the collection and inquire by WhatsApp or phone.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/"),
    images: [
      ogImageFor(
        "/images/ring-soleil.png",
        "Azure Jewelry — Soleil Dome Ring diamond pavé statement ring"
      ),
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/ring-soleil.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGateways />
      <CollectionSpotlights />
      <AtelierFilm />
      <FeaturedPieces />
      <GemstoneArt />
      <Craftsmanship />
      <GiaExpertise />
      <OurStory />
      <SignatureStatement />
      <ContactSection />
    </>
  );
}
