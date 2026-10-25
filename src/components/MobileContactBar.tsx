"use client";

import {
  getPhoneHref,
  getWhatsAppUrl,
  hasPhone,
  hasWhatsApp,
} from "@/lib/whatsapp";
import Link from "next/link";
import { WhatsAppIcon, PhoneIcon } from "@/components/icons";

export function MobileContactBar() {
  const whatsappUrl = getWhatsAppUrl();
  const phoneHref = getPhoneHref();

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ivory/95 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="grid grid-cols-2 divide-x divide-line">
        {hasWhatsApp() && whatsappUrl ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-14 items-center justify-center gap-2 text-sm font-medium tracking-wide text-whatsapp"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        ) : (
          <Link
            href="/#contact"
            className="flex min-h-14 items-center justify-center gap-2 text-sm font-medium tracking-wide text-whatsapp"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </Link>
        )}
        {hasPhone() && phoneHref ? (
          <a
            href={phoneHref}
            className="flex min-h-14 items-center justify-center gap-2 text-sm font-medium tracking-wide text-charcoal"
          >
            <PhoneIcon className="h-4 w-4" />
            Call
          </a>
        ) : (
          <Link
            href="/#contact"
            className="flex min-h-14 items-center justify-center gap-2 text-sm font-medium tracking-wide text-charcoal"
          >
            <PhoneIcon className="h-4 w-4" />
            Call
          </Link>
        )}
      </div>
    </div>
  );
}
