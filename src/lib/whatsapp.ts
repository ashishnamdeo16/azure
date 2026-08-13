import { siteConfig } from "@/data/site";
import type { Product } from "@/data/products";

export function hasWhatsApp(): boolean {
  return Boolean(siteConfig.contact.whatsapp?.trim());
}

export function hasPhone(): boolean {
  return Boolean(
    siteConfig.contact.phoneHref?.trim() || siteConfig.contact.phone?.trim()
  );
}

export function hasEmail(): boolean {
  return Boolean(siteConfig.contact.email?.trim());
}

export function hasLocation(): boolean {
  return Boolean(siteConfig.contact.location?.trim());
}

export function getPhoneHref(): string | null {
  const href = siteConfig.contact.phoneHref || siteConfig.contact.phone;
  if (!href?.trim()) return null;
  const digits = href.replace(/[^\d+]/g, "");
  return digits ? `tel:${digits}` : null;
}

/** Opens Google Maps (web or native app) on iOS, Android, and desktop. */
export function getMapsUrl(address?: string): string | null {
  const query = (address ?? siteConfig.contact.location)?.trim();
  if (!query) return null;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function buildInquiryMessage(productName?: string): string {
  if (productName) {
    return `Hello Azure Jewelry, I am interested in the ${productName}. Could you please provide more information?`;
  }
  return "Hello Azure Jewelry, I would like to inquire about your fine jewelry collection.";
}

export function getWhatsAppUrl(productName?: string): string | null {
  const number = siteConfig.contact.whatsapp?.trim();
  if (!number) return null;
  const cleaned = number.replace(/\D/g, "");
  const text = encodeURIComponent(buildInquiryMessage(productName));
  return `https://wa.me/${cleaned}?text=${text}`;
}

export function getProductWhatsAppUrl(product: Product): string | null {
  return getWhatsAppUrl(product.name);
}
