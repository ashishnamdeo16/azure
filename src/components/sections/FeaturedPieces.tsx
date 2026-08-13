import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";

export function FeaturedPieces() {
  const featured = getFeaturedProducts();

  return (
    <section className="bg-ivory-warm py-12 md:py-16">
      <div className="container-azure">
        <Reveal>
          <h2 className="type-section text-center text-charcoal">
            The Collection
          </h2>
          <p className="type-body mx-auto mt-3 max-w-md text-center text-muted">
            Browse signature works, then inquire privately about the piece that
            speaks to you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featured.slice(0, 3).map((product, i) => (
            <Reveal key={product.id} delay={(i % 3) as 0 | 1 | 2}>
              <ProductCard product={product} priority={i === 0} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <Link href="/collections" className="btn btn-outline">
            Explore Full Collection
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
