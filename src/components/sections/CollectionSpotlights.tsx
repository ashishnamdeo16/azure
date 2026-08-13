import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const shops = [
  {
    title: "Signature Rings",
    href: "/pieces/soleil-dome-ring",
    image: "/images/ring-soleil.png",
    alt: "Soleil Dome Ring",
  },
  {
    title: "High Jewelry",
    href: "/pieces/azure-sapphire-cuff",
    image: "/images/bracelet-sapphire.png",
    alt: "Azure Sapphire Cuff",
  },
];

export function CollectionSpotlights() {
  return (
    <section aria-labelledby="featured-shops-heading" className="bg-ivory pb-12 md:pb-16">
      <div className="container-azure">
        <Reveal>
          <h2
            id="featured-shops-heading"
            className="type-section text-center text-charcoal"
          >
            Featured
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-5">
          {shops.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) as 0 | 1 | 2}>
              <Link
                href={item.href}
                className="group relative block aspect-[16/11] overflow-hidden bg-azure-deep md:aspect-[5/4]"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <h3 className="type-subhead text-ivory">{item.title}</h3>
                  <span className="mt-3 inline-block text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-ivory">
                    Explore
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
