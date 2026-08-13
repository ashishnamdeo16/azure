"use client";

import Link from "next/link";
import {
  getPhoneHref,
  getWhatsAppUrl,
  hasPhone,
  hasWhatsApp,
} from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type ContactActionsProps = {
  productName?: string;
  variant?: "light" | "dark" | "whatsapp";
  className?: string;
  /** Product detail: WhatsApp only. Call stays in header / mobile bar. */
  showCall?: boolean;
  labels?: {
    whatsapp?: string;
    call?: string;
    contact?: string;
  };
};

export function ContactActions({
  productName,
  variant = "dark",
  className,
  showCall = false,
  labels,
}: ContactActionsProps) {
  const whatsappUrl = getWhatsAppUrl(productName);
  const phoneHref = getPhoneHref();
  const waLabel =
    labels?.whatsapp ||
    (productName ? "Inquire About This Piece" : "Inquire on WhatsApp");
  const callLabel = labels?.call || "Call to Inquire";
  const contactLabel = labels?.contact || "Contact Us";

  const primaryClass =
    variant === "whatsapp"
      ? "btn btn-whatsapp"
      : variant === "light"
        ? "btn btn-secondary"
        : "btn btn-primary";

  const secondaryClass =
    variant === "light" ? "btn btn-secondary" : "btn btn-outline";

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {hasWhatsApp() && whatsappUrl ? (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={primaryClass}
        >
          {waLabel}
        </a>
      ) : (
        <Link href="/#contact" className={primaryClass}>
          {contactLabel}
        </Link>
      )}

      {showCall && hasPhone() && phoneHref ? (
        <a href={phoneHref} className={secondaryClass}>
          {callLabel}
        </a>
      ) : null}
    </div>
  );
}
