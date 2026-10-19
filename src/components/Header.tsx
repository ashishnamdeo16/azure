"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { SocialLinks } from "@/components/SocialLinks";

type MegaLink = { label: string; href: string };

type MegaItem = {
  label: string;
  href: string;
  featured?: {
    image: string;
    title: string;
    href: string;
    caption: string;
    focal?: string;
  };
  links?: readonly MegaLink[];
};

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const [mega, setMega] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);

  if (pathname !== menuPath) {
    setMenuPath(pathname);
    if (open) setOpen(false);
    if (mega) setMega(null);
  }

  const isHome = pathname === "/";
  const solid = scrolled || open || mega !== null || !isHome;
  const onDark = !solid;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setMega(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const navTone = onDark
    ? "text-ivory hover:text-ivory/75"
    : "text-charcoal hover:text-azure";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500",
          solid
            ? "border-b border-line bg-ivory shadow-[0_1px_0_rgba(26,26,26,0.04)]"
            : "border-b border-transparent bg-transparent"
        )}
        onMouseLeave={() => setMega(null)}
      >
        <div className="container-azure flex h-[3.75rem] items-center gap-4 md:h-[4.25rem] lg:h-20 lg:gap-8">
          <button
            type="button"
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center lg:hidden",
              onDark ? "text-ivory" : "text-charcoal"
            )}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-[18px]" aria-hidden>
              <span
                className={cn(
                  "absolute left-0 top-0 block h-[1.5px] w-full origin-center rounded-full bg-current transition-transform duration-300 ease-out",
                  open && "translate-y-[6px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[6px] block h-[1.5px] w-full rounded-full bg-current transition-opacity duration-200",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[12px] block h-[1.5px] w-full origin-center rounded-full bg-current transition-transform duration-300 ease-out",
                  open && "-translate-y-[6px] -rotate-45"
                )}
              />
            </span>
          </button>

          <BrandLink onDark={onDark} onClick={() => setOpen(false)} />

          <nav
            className="hidden flex-1 items-center justify-center gap-7 xl:gap-9 lg:flex"
            aria-label="Primary"
          >
            {(siteConfig.megaNav as readonly MegaItem[]).map((item) => {
              const hasPanel = Boolean(item.links && item.links.length > 0);
              const isActive = mega === item.label;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "type-nav py-5 transition-colors",
                    navTone,
                    isActive && (onDark ? "text-ivory" : "text-azure")
                  )}
                  onMouseEnter={() => setMega(hasPanel ? item.label : null)}
                  onFocus={() => setMega(hasPanel ? item.label : null)}
                  aria-expanded={hasPanel ? isActive : undefined}
                  aria-haspopup={hasPanel || undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto hidden items-center lg:flex">
            <SocialLinks onDark={onDark} channels="contact" />
          </div>
        </div>

        {mega && (
          <MegaPanel
            item={(siteConfig.megaNav as readonly MegaItem[]).find(
              (n) => n.label === mega
            )}
            onClose={() => setMega(null)}
          />
        )}
      </header>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 bg-ivory transition-[opacity,visibility] duration-300 lg:hidden",
          open
            ? "visible pointer-events-auto opacity-100"
            : "invisible pointer-events-none opacity-0"
        )}
        aria-hidden={!open}
      >
        <div
          className="flex h-full flex-col"
          style={{
            paddingTop: "4.25rem",
            paddingBottom: "calc(5.5rem + env(safe-area-inset-bottom, 0px))",
          }}
        >
          <nav
            className="flex-1 overflow-y-auto overscroll-contain px-6"
            aria-label="Mobile"
          >
            <ul className="py-2">
              {(siteConfig.megaNav as readonly MegaItem[]).map((item) => (
                <MobileNavItem
                  key={item.label}
                  item={item}
                  open={mobileOpen === item.label}
                  onToggle={() =>
                    setMobileOpen((current) =>
                      current === item.label ? null : item.label
                    )
                  }
                  onNavigate={() => setOpen(false)}
                />
              ))}
            </ul>

            
          </nav>
        </div>
      </div>
    </>
  );
}

function BrandLink({
  onDark,
  onClick,
}: {
  onDark: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex min-w-0 items-center gap-2.5"
      aria-label="Azure Jewelry home"
    >
      <Image
        src="/images/logo.png"
        alt=""
        width={44}
        height={44}
        className="h-8 w-8 shrink-0 object-contain md:h-9 md:w-9"
        priority
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn("type-brand", onDark ? "text-ivory" : "text-charcoal")}
        >
          Azure
        </span>
        <span
          className={cn(
            "type-brand-sub mt-1",
            onDark ? "text-ivory/70" : "text-muted"
          )}
        >
          Jewelry
        </span>
      </span>
    </Link>
  );
}

function MegaPanel({
  item,
  onClose,
}: {
  item?: MegaItem;
  onClose: () => void;
}) {
  const headingId = useId();
  if (!item?.links?.length) return null;

  return (
    <div
      className="absolute inset-x-0 top-full hidden border-t border-line bg-ivory shadow-[0_24px_48px_rgba(18,18,18,0.08)] lg:block"
      role="region"
      aria-labelledby={headingId}
      onMouseEnter={() => undefined}
    >
      <div className="container-azure grid gap-12 py-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p id={headingId} className="type-nav mb-4 text-muted">
            {item.label}
          </p>
          <ul className="space-y-1">
            {item.links?.map((link) => (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="type-nav flex min-h-10 items-center text-charcoal transition-colors hover:text-azure"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {"featured" in item && item.featured ? (
          <Link
            href={item.featured.href}
            onClick={onClose}
            className="group img-frame relative aspect-[16/10] overflow-hidden bg-azure-deep lg:col-span-7"
          >
            <Image
              src={item.featured.image}
              alt={item.featured.title}
              fill
              sizes="50vw"
              className="img-zoom object-cover"
              style={{ objectPosition: item.featured.focal ?? "center" }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="type-nav text-ivory/70">{item.featured.caption}</p>
              <p className="type-subhead mt-1 text-ivory">{item.featured.title}</p>
              <span className="type-nav mt-3 inline-block text-ivory">
                Explore
              </span>
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

function MobileNavItem({
  item,
  open,
  onToggle,
  onNavigate,
}: {
  item: MegaItem;
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const hasChildren = Boolean(item.links && item.links.length > 0);

  if (!hasChildren) {
    return (
      <li>
        <Link
          href={item.href}
          onClick={onNavigate}
          className="flex min-h-12 items-center border-b border-line text-lg font-medium text-charcoal"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="border-b border-line">
      <div className="flex items-center">
        <Link
          href={item.href}
          onClick={onNavigate}
          className="flex min-h-12 flex-1 items-center text-lg font-medium text-charcoal"
        >
          {item.label}
        </Link>
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center text-muted"
          aria-expanded={open}
          aria-label={`${open ? "Collapse" : "Expand"} ${item.label}`}
          onClick={onToggle}
        >
          <span
            className={cn(
              "block text-lg leading-none transition-transform duration-200",
              open && "rotate-45"
            )}
          >
            +
          </span>
        </button>
      </div>
      {open ? (
        <ul className="space-y-0.5 pb-3 pl-1">
          {item.links?.map((link) => (
            <li key={link.href + link.label}>
              <Link
                href={link.href}
                onClick={onNavigate}
                className="flex min-h-10 items-center text-[0.9375rem] text-muted hover:text-charcoal"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}
