import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you requested could not be found on Azure Jewelry.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-ivory px-6 pt-28 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="type-section text-charcoal">
        This piece could not be found.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        Return to the collection to continue exploring Azure Jewelry.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link href="/collections" className="btn btn-primary">
          View Collection
        </Link>
        <Link href="/" className="btn btn-outline">
          Home
        </Link>
      </div>
    </div>
  );
}
