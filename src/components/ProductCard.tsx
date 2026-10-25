import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
  layout?: "editorial" | "catalog";
  headingAs?: "h2" | "h3";
};

export function ProductCard({
  product,
  priority = false,
  layout = "catalog",
  headingAs: Heading = "h3",
}: ProductCardProps) {
  const isEditorial = layout === "editorial";

  return (
    <article className="group flex h-full flex-col">
      <Link
        href={`/pieces/${product.slug}`}
        className="img-frame relative block aspect-[4/5] bg-azure-deep"
        aria-label={`View ${product.name}`}
      >
        <Image
          src={product.images[0]}
          alt={product.alt}
          fill
          sizes={
            isEditorial
              ? "(max-width: 768px) 100vw, 50vw"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          }
          className="img-zoom object-cover"
          style={{ objectPosition: product.focal ?? "center" }}
          priority={priority}
        />
        {product.certification && (
          <span className="absolute left-4 top-4 bg-ivory/95 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-charcoal">
            {product.certification}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col pt-5">
        <p className="eyebrow mb-2">{product.category}</p>
        <Heading className="type-product text-charcoal">
          <Link
            href={`/pieces/${product.slug}`}
            className="transition-colors hover:text-azure"
          >
            {product.name}
          </Link>
        </Heading>
        <p className="mt-1 text-sm text-muted">{product.gemstone}</p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted">
          {product.description}
        </p>
        <Link
          href={`/pieces/${product.slug}`}
          className="mt-4 text-xs uppercase tracking-[0.12em] text-gold transition-colors hover:text-azure"
        >
          View details
        </Link>
      </div>
    </article>
  );
}
