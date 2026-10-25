"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { getWhatsAppUrl, hasWhatsApp } from "@/lib/whatsapp";

export function AtelierFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [playing, setPlaying] = useState(false);
  const whatsappUrl = getWhatsAppUrl("diamond link bracelet");

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        } else {
          video.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="bg-azure-deep py-20 text-ivory md:py-28" aria-labelledby="atelier-film-heading">
      <div className="container-azure">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow eyebrow-light mb-3">In Motion</p>
            <h2 id="atelier-film-heading" className="type-section text-ivory">
              Light, in every link.
            </h2>
            <p className="type-body mt-5 max-w-md text-ivory/70">
              A diamond bracelet filmed as it is meant to be seen — fire moving
              across octagonal links, metal catching quietly between the stones.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              {hasWhatsApp() && whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-explore text-ivory"
                >
                  Inquire About This Piece
                </a>
              ) : (
                <Link href="/#contact" className="link-explore text-ivory">
                  Inquire About This Piece
                </Link>
              )}
            </div>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-7">
            <figure className="mx-auto w-full max-w-[36rem]">
              <div className="relative aspect-square overflow-hidden bg-ink shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                <video
                  ref={videoRef}
                  className="h-full w-full object-cover"
                  poster="/images/diamond-bracelet-poster.png"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Film of a diamond link bracelet turning in studio light"
                >
                  <source
                    src="/videos/diamond-bracelet.mp4"
                    type="video/mp4"
                  />
                </video>
                <button
                  type="button"
                  onClick={togglePlayback}
                  className="absolute bottom-4 right-4 flex h-11 min-w-11 items-center justify-center bg-ink/70 px-3 text-xs font-medium uppercase tracking-[0.14em] text-ivory backdrop-blur-sm transition-opacity hover:bg-ink/85"
                  aria-label={playing ? "Pause film" : "Play film"}
                >
                  {playing ? "Pause" : "Play"}
                </button>
              </div>
              <figcaption className="mt-4 text-center text-xs uppercase tracking-[0.16em] text-ivory/45">
                High jewelry · Studio film
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
