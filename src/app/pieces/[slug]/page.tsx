import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  getProductBySlug,
  products,
} from "@/data/products";
import { ContactActions } from "@/components/ContactActions";
import { ProductCard } from "@/components/ProductCard";
import { siteConfig } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  ogImageFor,
  productJsonLd,
} from "@/lib/seo";

type PiecePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PiecePageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return {
      title: "Piece Not Found",
      robots: { index: false, follow: false },
    };
  }

  const url = absoluteUrl(`/pieces/${product.slug}`);
  const title = `${product.name} — ${product.gemstone} ${product.category}`;
  const description = `${product.description} Inquire privately with ${siteConfig.name}.`;
  const image = ogImageFor(product.images[0], product.alt);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      title: `${product.name} | ${siteConfig.name}`,
      description,
      url,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${siteConfig.name}`,
      description,
      images: [image.url],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function PiecePage({ params }: PiecePageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const jsonLd = [
    productJsonLd(product),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Collections", path: "/collections" },
      { name: product.name, path: `/pieces/${product.slug}` },
    ]),
  ];

  return (
    <div className="bg-ivory pt-24 pb-16 md:pt-28 lg:pt-32 md:pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-azure">
        <nav
          className="mb-8 text-[0.6875rem] uppercase tracking-[0.14em] text-muted"
          aria-label="Breadcrumb"
        >
          <ol className="flex flex-wrap items-center gap-x-0">
            <li>
              <Link href="/" className="hover:text-charcoal">
                Home
              </Link>
            </li>
            <li aria-hidden className="mx-2">
              /
            </li>
            <li>
              <Link href="/collections" className="hover:text-charcoal">
                Collections
              </Link>
            </li>
            <li aria-hidden className="mx-2">
              /
            </li>
            <li className="text-charcoal" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div
              className={cn(
                "relative bg-azure-deep",
                product.portrait ? "aspect-[4/5]" : "aspect-[4/5] md:aspect-[5/4]"
              )}
            >
              <Image
                src={product.images[0]}
                alt={product.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
                style={{ objectPosition: product.focal ?? "center" }}
              />
            </div>
          </div>

          <div className="flex flex-col lg:col-span-5">
            <p className="eyebrow mb-3">{product.category}</p>
            <h1 className="type-section text-charcoal">{product.name}</h1>

            <dl className="mt-8 space-y-4 border-y border-line py-6">
              <div className="flex justify-between gap-4 text-sm">
                <dt className="text-muted">Gemstone</dt>
                <dd className="text-charcoal">{product.gemstone}</dd>
              </div>
              <div className="flex justify-between gap-4 text-sm">
                <dt className="text-muted">Collection</dt>
                <dd className="text-charcoal">{product.collection}</dd>
              </div>
              {product.certification ? (
                <div className="flex justify-between gap-4 text-sm">
                  <dt className="text-muted">Certification</dt>
                  <dd className="text-charcoal">{product.certification}</dd>
                </div>
              ) : null}
              <div className="flex justify-between gap-4 text-sm">
                <dt className="text-muted">Availability</dt>
                <dd className="text-gold">Inquire for Details</dd>
              </div>
            </dl>

            <p className="mt-6 text-base leading-relaxed text-muted">
              {product.description}
            </p>

            <div className="mt-8">
              <h2 className="font-serif text-xl text-charcoal">Craftsmanship</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {product.craftsmanship}
              </p>
            </div>

            <div className="mt-10">
              <ContactActions
                productName={product.name}
                labels={{
                  whatsapp: "Inquire About This Piece",
                  contact: "Inquire About This Piece",
                }}
              />
            </div>

            <p className="mt-6 text-xs leading-relaxed text-muted-light">
              Azure Jewelry works by private inquiry. WhatsApp messages are
              pre-filled with this piece name so our team can assist you
              promptly.
            </p>
          </div>
        </div>

        {related.length > 0 ? (
          <section className="mt-20 border-t border-line pt-16 md:mt-28">
            <p className="eyebrow mb-4">Related</p>
            <h2 className="type-section text-charcoal">
              More from {product.category}
            </h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
