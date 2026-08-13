import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import {
  getMapsUrl,
  getPhoneHref,
  getWhatsAppUrl,
  hasEmail,
  hasLocation,
  hasPhone,
  hasWhatsApp,
} from "@/lib/whatsapp";

export function ContactSection() {
  const whatsappUrl = getWhatsAppUrl();
  const phoneHref = getPhoneHref();
  const mapsUrl = getMapsUrl();
  const { contact } = siteConfig;

  return (
    <section id="contact" className="bg-ivory-warm py-20 md:py-28">
      <div className="container-azure">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow mb-3">Contact</p>
            <h2 className="type-section text-charcoal">
              Let&apos;s Create Something Worth Remembering.
            </h2>
            <p className="type-body mt-5 max-w-lg text-muted">
              Azure Jewelry is a private atelier experience. Browse the
              collection, then inquire by WhatsApp or phone to begin a
              conversation about the piece that speaks to you.
            </p>
            {hasWhatsApp() && whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-10"
              >
                Inquire on WhatsApp
              </a>
            ) : null}
          </Reveal>

          <Reveal delay={1} className="lg:col-span-5 lg:col-start-8">
            <dl className="space-y-8 border-t border-line pt-8 lg:border-t-0 lg:pt-0">
              <div>
                <dt className="eyebrow mb-2">WhatsApp</dt>
                <dd className="text-lg text-charcoal">
                  {hasWhatsApp() && whatsappUrl ? (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-azure"
                    >
                      +1 (747) 609-6989
                    </a>
                  ) : (
                    <span className="text-muted">Available upon request</span>
                  )}
                </dd>
              </div>

              <div>
                <dt className="eyebrow mb-2">Phone</dt>
                <dd className="text-lg text-charcoal">
                  {hasPhone() && phoneHref ? (
                    <a
                      href={phoneHref}
                      className="transition-colors hover:text-azure"
                    >
                      {contact.phone}
                    </a>
                  ) : (
                    <span className="text-muted">Available upon request</span>
                  )}
                </dd>
              </div>

              <div>
                <dt className="eyebrow mb-2">Email</dt>
                <dd className="text-lg text-charcoal">
                  {hasEmail() ? (
                    <a
                      href={`mailto:${contact.email}`}
                      className="transition-colors hover:text-azure"
                    >
                      {contact.email}
                    </a>
                  ) : (
                    <span className="text-muted">Available upon request</span>
                  )}
                </dd>
              </div>

              {hasLocation() && mapsUrl ? (
                <div>
                  <dt className="eyebrow mb-2">Location</dt>
                  <dd className="text-lg text-charcoal">
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-azure"
                      aria-label={`Open ${contact.location} in Maps`}
                    >
                      {contact.location}
                    </a>
                  </dd>
                </div>
              ) : null}

              {contact.hours ? (
                <div>
                  <dt className="eyebrow mb-2">Hours</dt>
                  <dd className="text-lg text-charcoal">{contact.hours}</dd>
                </div>
              ) : null}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
