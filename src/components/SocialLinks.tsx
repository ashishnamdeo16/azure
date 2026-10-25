import { siteConfig } from "@/data/site";
import {
  getPhoneHref,
  getWhatsAppUrl,
  hasPhone,
  hasWhatsApp,
} from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import {
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
  onDark?: boolean;
  /** all = WhatsApp + Phone + social; contact = WhatsApp + Phone; social = Instagram + Facebook only */
  channels?: "all" | "contact" | "social";
};

export function SocialLinks({
  className,
  iconClassName,
  onDark = false,
  channels = "all",
}: SocialLinksProps) {
  const whatsappUrl = getWhatsAppUrl();
  const phoneHref = getPhoneHref();
  const { instagram, facebook } = siteConfig.social;
  const showContact = channels === "all" || channels === "contact";
  const showSocial = channels === "all" || channels === "social";

  const itemFrame =
    "inline-flex h-10 w-10 items-center justify-center rounded-sm transition-all duration-300 hover:scale-110";
  const itemTone = onDark
    ? "text-ivory/85 hover:bg-ivory/10 hover:text-champagne"
    : "text-charcoal/80 hover:bg-charcoal/5 hover:text-azure";
  const itemClass = cn(itemFrame, itemTone);

  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {showContact && hasWhatsApp() && whatsappUrl ? (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            itemFrame,
            "text-whatsapp hover:bg-whatsapp/10 hover:text-whatsapp"
          )}
          aria-label="WhatsApp Azure Jewelry"
        >
          <WhatsAppIcon className={iconClassName} />
        </a>
      ) : null}

      {showContact && hasPhone() && phoneHref ? (
        <a href={phoneHref} className={itemClass} aria-label="Call Azure Jewelry">
          <PhoneIcon className={iconClassName} />
        </a>
      ) : null}

      {showSocial && instagram ? (
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(itemFrame, "hover:bg-[#e1306c]/10")}
          aria-label="Azure Jewelry on Instagram"
        >
          <InstagramIcon className={iconClassName} />
        </a>
      ) : null}

      {showSocial && facebook ? (
        <a
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            itemFrame,
            "text-facebook hover:bg-facebook/10 hover:text-facebook"
          )}
          aria-label="Azure Jewelry on Facebook"
        >
          <FacebookIcon className={iconClassName} />
        </a>
      ) : null}
    </div>
  );
}
