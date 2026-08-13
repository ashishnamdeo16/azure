import { Reveal } from "@/components/Reveal";

const timeline = [
  {
    year: "1989",
    title: "The Beginning",
    text: "While a university student in Lebanon, Johnny begins as a sales associate for an international jewelry company — and discovers a lifelong fascination with fine jewelry and colored gemstones.",
  },
  {
    year: "2005",
    title: "Azure Gems",
    text: "Johnny establishes his first independent company, Azure Gems — built on craftsmanship, integrity, and a passion for exceptional gemstones.",
  },
  {
    year: "2019",
    title: "Azure Jewelry",
    text: "That legacy arrives in the United States. Azure Jewelry is founded, specializing in precious, semi-precious, and GIA-certified gemstones.",
  },
  {
    year: "Today",
    title: "A Complete Jewelry Journey",
    text: "From concept to completion — gemstones, lapidary craft, manufacturing, and fine jewelry distinguished by character and timeless elegance.",
  },
];

export function OurStory() {
  return (
    <section id="our-story" className="bg-ivory py-20 md:py-28">
      <div className="container-azure">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-3">Our Story</p>
          <h2 className="type-section text-charcoal">
            Three decades in the making.
          </h2>
          <p className="type-body mx-auto mt-4 max-w-2xl text-muted">
            Azure Jewelry was founded in the United States in 2019 by Johnny
            Kaymakamian — but its story began three decades earlier.
          </p>
        </Reveal>

        <ol className="mx-auto mt-16 max-w-3xl space-y-0">
          {timeline.map((item, index) => (
            <Reveal
              key={item.year}
              as="li"
              delay={(index % 3) as 0 | 1 | 2}
              className="relative grid gap-4 border-t border-line py-10 md:grid-cols-[8rem_1fr] md:gap-10"
            >
              <p className="type-section text-azure">
                {item.year}
              </p>
              <div>
                <h3 className="type-subhead text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mx-auto mt-6 max-w-2xl border-t border-line pt-12 text-center">
          <p className="type-subhead leading-snug text-charcoal">
            At Azure Jewelry, every gemstone has a story, and every piece is
            created to be remembered.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
