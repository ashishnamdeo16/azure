import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const journey = [
  {
    title: "Discover",
    text: "We begin with the stone — its origin, color, and character.",
  },
  {
    title: "Select",
    text: "Only gemstones with rare presence and integrity earn a place.",
  },
  {
    title: "Cut",
    text: "Precision cutting unlocks the geometry of light within.",
  },
  {
    title: "Shape",
    text: "Form follows the stone, guided by trained artisans.",
  },
  {
    title: "Polish",
    text: "Surface and brilliance are refined to their fullest expression.",
  },
  {
    title: "Create",
    text: "Setting and finish complete a piece made to endure.",
  },
];

export function GemstoneArt() {
  return (
    <section id="gemstones" className="bg-azure-deep py-20 text-ivory md:py-28">
      <div className="container-azure">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow eyebrow-light mb-3">The Art of the Gemstone</p>
            <h2 className="type-section text-ivory">
              Where rarity meets intention.
            </h2>
            <p className="type-body mt-5 text-ivory/70">
              Azure Jewelry is built on gemstone expertise. Selection, cutting,
              shaping, and polishing are not afterthoughts — they are the
              foundation of every finished piece.
            </p>
            <div className="gold-rule mt-8" />
          </Reveal>

          <Reveal delay={1} className="relative lg:col-span-7">
            <div className="img-frame relative aspect-[4/5] md:aspect-[5/4]">
              <Image
                src="/images/rings-gemstone-bands.png"
                alt="Colored gemstone bands showcasing emerald, sapphire, and pink stones"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12">
          {journey.map((step, index) => (
            <Reveal key={step.title} delay={(index % 3) as 0 | 1 | 2}>
              <div className="process-step border-t border-line-light pt-6">
                <p className="text-[0.6875rem] tracking-[0.2em] text-champagne">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="type-subhead mt-3 text-ivory">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
