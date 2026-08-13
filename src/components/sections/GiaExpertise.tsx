import { Reveal } from "@/components/Reveal";

export function GiaExpertise() {
  return (
    <section className="bg-ivory-warm py-20 md:py-24">
      <div className="container-azure">
        <Reveal>
          <div className="mx-auto max-w-3xl border border-line bg-surface px-8 py-14 text-center md:px-16 md:py-16">
            <p className="eyebrow mb-6">Credential</p>
            <h2 className="type-section text-charcoal">
              GIA Graduate Gemologist
            </h2>
            <div className="gold-rule mx-auto mt-8" />
            <p className="type-body mx-auto mt-8 max-w-xl text-muted">
              Founder Johnny Kaymakamian pursued formal gemological education and
              earned his Graduate Gemologist (G.G.) certification from the
              Gemological Institute of America — grounding Azure Jewelry in
              rigorous knowledge of precious and colored stones.
            </p>
            <p className="mt-6 text-[0.6875rem] uppercase tracking-[0.18em] text-gold">
              Expertise you can trust
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
