import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { getMapsUrl, hasLocation } from "@/lib/whatsapp";
import { SocialLinks } from "@/components/SocialLinks";
import { cn } from "@/lib/utils";

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className = cn(
    "group relative inline-block text-sm text-ivory/70 transition-colors duration-300 hover:text-ivory"
  );

  const underline = (
    <span
      className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-champagne transition-transform duration-300 ease-out group-hover:scale-x-100"
      aria-hidden
    />
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
        {underline}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
      {underline}
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const mapsUrl = getMapsUrl();

  return (
    <footer className="bg-azure-deep text-ivory">
      <div className="container-azure py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-90"
            >
              <Image
                src="/images/logo.png"
                alt="Azure Jewelry"
                width={48}
                height={48}
                className="h-12 w-12 object-contain transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <span className="flex flex-col leading-none">
                <span className="type-brand text-ivory transition-colors duration-300 group-hover:text-champagne">
                  Azure
                </span>
                <span className="type-brand-sub mt-1 text-ivory/60 transition-colors duration-300 group-hover:text-ivory/80">
                  Jewelry
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/65">
              {siteConfig.tagline}
            </p>
            <SocialLinks onDark channels="social" className="mt-8" />
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="eyebrow eyebrow-light mb-5">Explore</p>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow eyebrow-light mb-5">Address</p>
            {hasLocation() && mapsUrl ? (
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block max-w-xs text-sm leading-relaxed text-ivory/70 transition-colors duration-300 hover:text-ivory"
                aria-label={`Open ${siteConfig.contact.location} in Maps`}
              >
                {siteConfig.contact.location}
                <span
                  className="mt-2 block text-[0.625rem] uppercase tracking-[0.16em] text-ivory/40 transition-colors duration-300 group-hover:text-champagne"
                >
                  View on map
                </span>
                <span
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-champagne transition-transform duration-300 ease-out group-hover:scale-x-100"
                  aria-hidden
                />
              </a>
            ) : siteConfig.contact.location ? (
              <p className="text-sm text-ivory/55">{siteConfig.contact.location}</p>
            ) : null}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line-light pt-8 text-xs tracking-wide text-ivory/45 md:flex-row md:items-center md:justify-between">
          <p>© {year} Azure Jewelry. All rights reserved.</p>
          <p>Founded {siteConfig.founded} · Los Angeles</p>
        </div>
      </div>
    </footer>
  );
}
