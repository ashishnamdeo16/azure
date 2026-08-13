import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const stages = [
  { title: "Cutting", text: "Faceting and proportion for maximum brilliance." },
  { title: "Shaping", text: "Form guided by the gemstone’s natural character." },
  { title: "Polishing", text: "Surfaces refined until light moves freely." },
  { title: "Setting", text: "Secure, precise metalwork that honors the stone." },
  { title: "Finished Jewelry", text: "A complete piece ready to be worn and remembered." },
];

export function Craftsmanship() {
  return (
    <section id="craftsmanship" className="bg-ivory py-20 md:py-28">
      <div className="container-azure">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="eyebrow mb-3">Lapidary & Craft</p>
            <h2 className="type-section text-charcoal">
              From Rough Stone to Remarkable.
            </h2>
            <p className="type-body mt-5 text-muted">
              Azure Jewelry operates with dedicated lapidary expertise. Skilled
              artisans specialize in gemstone cutting, shaping, and polishing —
              allowing each stone to reveal its fullest brilliance before it
              becomes jewelry.
            </p>
            <p className="type-body mt-3 text-muted">
              This is not simply retail. It is an understanding of the gemstone
              itself.
            </p>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="img-frame relative mb-10 aspect-[16/11] bg-azure-deep">
                <Image
                  src="/images/bracelet-sapphire.png"
                  alt="Sapphire cuff revealing intricate open-work lattice craftsmanship"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>

            <ol className="space-y-0">
              {stages.map((stage, index) => (
                <Reveal key={stage.title} delay={(index % 3) as 0 | 1 | 2}>
                  <li className="grid grid-cols-[auto_1fr] gap-5 border-t border-line py-6 md:gap-8">
                    <span className="font-serif text-3xl text-champagne md:text-4xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="type-subhead text-charcoal">
                        {stage.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {stage.text}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
