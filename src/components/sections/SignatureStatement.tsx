import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function SignatureStatement() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-ivory md:py-36">
      <div className="absolute inset-0">
        <Image
          src="/images/bracelet-sapphire.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-35"
          aria-hidden
        />
        <div className="absolute inset-0 bg-azure-deep/80" aria-hidden />
      </div>

      <div className="relative z-10 container-azure text-center">
        <Reveal>
          <p className="eyebrow eyebrow-light mb-5">Heritage</p>
          <h2 className="type-hero mx-auto max-w-4xl text-ivory">
            Three Decades of Knowledge.
            <br />
            <span className="text-champagne">One Standard of Craftsmanship.</span>
          </h2>
          <div className="gold-rule mx-auto mt-8" />
          <p className="type-subhead mx-auto mt-8 max-w-xl text-ivory/85">
            Every gemstone has a story, and every piece is created to be
            remembered.
          </p>
          <div className="mt-12 flex justify-center">
            <Link href="/#contact" className="link-explore text-ivory">
              Begin a Conversation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
