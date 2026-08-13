import Image from "next/image";
import Link from "next/link";
import { collections } from "@/data/products";
import { Reveal } from "@/components/Reveal";

export function FeaturedCollections() {
  return (
    <section id="collections" className="bg-ivory py-20 md:py-28">
      <div className="container-azure">
        <Reveal>
          <p className="eyebrow mb-4">Collections</p>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl font-serif text-4xl text-charcoal md:text-5xl lg:text-6xl">
              A catalog of rarity and form.
            </h2>
            <Link
              href="/collections"
              className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-azure transition-colors hover:text-azure-soft"
            >
              View All Pieces →
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
          {collections.map((collection, index) => (
            <Reveal
              key={collection.id}
              delay={(index % 3) as 0 | 1 | 2}
              className={index === 0 ? "md:col-span-2" : ""}
            >
              <Link
                href={
                  collection.id === "custom"
                    ? "/#contact"
                    : `/collections?category=${encodeURIComponent(collection.name)}`
                }
                className="group relative block overflow-hidden bg-azure-deep"
              >
                <div
                  className={`img-frame relative ${
                    index === 0 ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/5] md:aspect-[5/6]"
                  }`}
                >
                  <Image
                    src={collection.image}
                    alt={collection.alt}
                    fill
                    sizes={
                      index === 0
                        ? "100vw"
                        : "(max-width: 768px) 100vw, 50vw"
                    }
                    className="img-zoom object-cover"
                    priority={index === 0}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent transition-opacity duration-500 group-hover:from-ink/85"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="eyebrow eyebrow-light mb-2">Collection</p>
                    <h3 className="font-serif text-3xl text-ivory md:text-4xl">
                      {collection.name}
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-ivory/70">
                      {collection.description}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
