"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const campaigns = [
  {
    id: "soleil",
    image: "/images/ring-soleil.png",
    alt: "Soleil Dome Ring — diamond pavé sunburst statement ring by Azure Jewelry",
    title: "Every Gemstone\nHas a Story",
    cta: "Explore",
    href: "/collections",
  },
  {
    id: "sapphire",
    image: "/images/bracelet-sapphire.png",
    alt: "Azure Sapphire Cuff — blue sapphire and diamond bracelet by Azure Jewelry",
    title: "High Jewelry\nSapphire Cuff",
    cta: "View Piece",
    href: "/pieces/azure-sapphire-cuff",
  },
  {
    id: "bands",
    image: "/images/rings-gemstone-bands.png",
    alt: "Colored gemstone eternity bands from Azure Jewelry",
    title: "Color. Cut.\nCharacter.",
    cta: "Shop Rings",
    href: "/collections?category=Rings",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % campaigns.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [paused]);

  const slide = campaigns[index];

  return (
    <section
      className="relative min-h-[70svh] overflow-hidden bg-ink text-ivory md:min-h-[78vh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured Azure Jewelry campaigns"
    >
      {/* Stable H1 for SEO/crawlers; campaign line remains the visual headline */}
      <h1 className="sr-only">
        Azure Jewelry — fine jewelry, exceptional gemstones, and timeless
        craftsmanship. Every gemstone has a story.
      </h1>

      {campaigns.map((campaign, i) => (
        <div
          key={campaign.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-out",
            i === index ? "opacity-100" : "opacity-0"
          )}
          aria-hidden={i !== index}
        >
          <Image
            src={campaign.image}
            alt={campaign.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={cn(
              "object-cover object-center",
              i === index && "hero-image"
            )}
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/25 to-transparent"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/20"
            aria-hidden
          />
        </div>
      ))}

      <div className="relative z-10 flex min-h-[70svh] flex-col justify-end px-0 pb-20 pt-28 md:min-h-[78vh] md:justify-center md:pb-16 md:pt-32">
        <div className="container-azure">
          <p
            className="type-hero max-w-xl whitespace-pre-line text-ivory"
            aria-live="polite"
          >
            {slide.title}
          </p>
          <div className="mt-8">
            <Link href={slide.href} className="btn btn-shop">
              {slide.cta}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center gap-2 md:bottom-8">
        {campaigns.map((campaign, i) => (
          <button
            key={campaign.id}
            type="button"
            aria-label={`Show ${campaign.title.replace(/\n/g, " ")}`}
            aria-current={i === index}
            className={cn(
              "h-1 rounded-full transition-all duration-500",
              i === index ? "w-8 bg-ivory" : "w-4 bg-ivory/40 hover:bg-ivory/70"
            )}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
