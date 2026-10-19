import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const categories: {
  name: string;
  href: string;
  image: string;
  alt: string;
  focal?: string;
}[] = [
  {
    name: "Rings",
    href: "/collections?category=Rings",
    image: "/images/ring-soleil.png",
    alt: "Diamond Soleil Dome Ring",
  },
  {
    name: "Necklaces",
    href: "/collections?category=Necklaces",
    image: "/images/necklace-diamond-line.jpg",
    alt: "Diamond Line Necklace",
    focal: "center 36%",
  },
  {
    name: "Bracelets",
    href: "/collections?category=Bracelets",
    image: "/images/bracelet-sapphire.png",
    alt: "Azure Sapphire Cuff",
  },
  {
    name: "Gemstones",
    href: "/#gemstones",
    image: "/images/rings-gemstone-bands.png",
    alt: "Colored gemstone bands",
  },
];

export function CategoryGateways() {
  return (
    <section aria-labelledby="shop-category-heading" className="bg-ivory py-12 md:py-16">
      <div className="container-azure">
        <Reveal>
          <h2
            id="shop-category-heading"
            className="type-section text-center text-charcoal"
          >
            Shop by Category
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-8">
          {categories.map((item, index) => (
            <Reveal key={item.name} delay={(index % 3) as 0 | 1 | 2}>
              <Link
                href={item.href}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative aspect-square w-full max-w-[220px] overflow-hidden rounded-full bg-ivory-warm">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 45vw, 220px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ objectPosition: item.focal ?? "center" }}
                  />
                </div>
                <span className="type-category mt-4 text-charcoal">
                  {item.name}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
