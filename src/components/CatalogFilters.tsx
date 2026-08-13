"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  products,
  getUniqueCategories,
  getUniqueGemstones,
  type Product,
  type ProductCategory,
} from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

function resolveCategory(
  value: string | null | undefined,
  categories: ProductCategory[]
): string {
  if (value && categories.includes(value as ProductCategory)) return value;
  return "All";
}

function resolveGemstone(
  value: string | null | undefined,
  gemstones: string[]
): string {
  if (value && gemstones.includes(value)) return value;
  return "All";
}

function CatalogFiltersInner() {
  const searchParams = useSearchParams();
  const categories = useMemo(() => getUniqueCategories(), []);
  const gemstones = useMemo(() => getUniqueGemstones(), []);

  const [category, setCategory] = useState<string>(() =>
    resolveCategory(searchParams.get("category"), categories)
  );
  const [gemstone, setGemstone] = useState<string>(() =>
    resolveGemstone(searchParams.get("gemstone"), gemstones)
  );

  useEffect(() => {
    setCategory(resolveCategory(searchParams.get("category"), categories));
    setGemstone(resolveGemstone(searchParams.get("gemstone"), gemstones));
  }, [searchParams, categories, gemstones]);

  const filtered: Product[] = useMemo(() => {
    return products.filter((p) => {
      const catOk = category === "All" || p.category === category;
      const gemOk = gemstone === "All" || p.gemstone === gemstone;
      return catOk && gemOk;
    });
  }, [category, gemstone]);

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-line pb-8">
        <div>
          <p className="eyebrow mb-3">Category</p>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter by category"
          >
            <button
              type="button"
              className="filter-chip"
              aria-pressed={category === "All"}
              onClick={() => setCategory("All")}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className="filter-chip"
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow mb-3">Gemstone</p>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter by gemstone"
          >
            <button
              type="button"
              className="filter-chip"
              aria-pressed={gemstone === "All"}
              onClick={() => setGemstone("All")}
            >
              All
            </button>
            {gemstones.map((g) => (
              <button
                key={g}
                type="button"
                className="filter-chip"
                aria-pressed={gemstone === g}
                onClick={() => setGemstone(g)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-8 text-sm text-muted" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={i < 2}
            />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-muted">
          No pieces match these filters. Try another category or gemstone.
        </p>
      )}
    </div>
  );
}

function CatalogFiltersFallback() {
  return (
    <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {products.slice(0, 3).map((product) => (
        <ProductCard key={product.id} product={product} priority />
      ))}
    </div>
  );
}

export function CatalogFilters() {
  return (
    <Suspense fallback={<CatalogFiltersFallback />}>
      <CatalogFiltersInner />
    </Suspense>
  );
}
