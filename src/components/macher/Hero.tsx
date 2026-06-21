import { useEffect, useRef } from "react";
import lifestyleAsset from "@/assets/macher-lifestyle-session.png.asset.json";
import boxFrontAsset from "@/assets/macher-box-front.png.asset.json";
import { Reveal } from "./Reveal";

export function Hero() {
  const artRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const onScroll = () => {
      const el = artRef.current;
      if (!el) return;
      const y = Math.min(window.scrollY, 400);
      el.style.transform = `translateY(${y * -0.03}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-24 md:pt-32">
      <div className="absolute inset-0 citygrid opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(80% 60% at 70% 30%, rgba(31,159,166,0.10), transparent 60%), radial-gradient(60% 50% at 10% 80%, rgba(78,124,168,0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-12 md:grid-cols-12 md:gap-8 md:pb-32 md:pt-20">
        <div className="md:col-span-7">
          <Reveal>
            <div
              className="font-eyebrow text-[12px] md:text-[13px]"
              style={{
                fontFamily: "var(--font-eyebrow)",
                color: "var(--color-steel-2)",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
              }}
            >
              The Federation Doesn't Fund the Bold
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1
              className="mt-6 text-brushed-steel font-display select-none text-[clamp(4.5rem,14vw,11rem)] leading-[0.9]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              MACHER
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p
              className="mt-6 max-w-xl text-balance text-lg leading-relaxed md:text-xl"
              style={{ color: "var(--color-cream)" }}
            >
              A semi-cooperative board game about saving a community —
              while quietly making sure you come out on top.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div
              className="mt-6 inline-flex items-center gap-2 rounded-sm border px-3 py-1.5"
              style={{ borderColor: "rgba(78,124,168,0.35)", background: "rgba(27,39,53,0.6)" }}
            >
              <span
                className="font-eyebrow text-[11px]"
                style={{
                  fontFamily: "var(--font-eyebrow)",
                  color: "var(--color-cream)",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                }}
              >
                United We Stand. Divided We Fundraise.
              </span>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#campaign"
                className="inline-flex items-center justify-center rounded-sm px-6 py-3.5 text-sm shadow-lg transition-colors"
                style={{
                  background: "var(--color-teal)",
                  color: "var(--color-navy-deep)",
                  fontFamily: "var(--font-eyebrow)",
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  fontWeight: 600,
                  boxShadow: "0 12px 40px -12px rgba(31,159,166,0.45)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-teal-bright)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-teal)")}
              >
                Notify me when we launch
              </a>
              <span className="text-sm" style={{ color: "var(--color-body)" }}>
                Coming soon to Kickstarter.
              </span>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5">
          <div ref={artRef} className="relative">
            <Reveal delay={140}>
              <figure className="relative">
                <div className="panel relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={lifestyleAsset.url}
                    alt="Players gathered around the Macher board with the illuminated Federation monolith at the center"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(15,22,32,0.02) 0%, rgba(15,22,32,0.12) 55%, rgba(15,22,32,0.52) 100%)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <p
                      className="font-eyebrow text-[10px]"
                      style={{
                        fontFamily: "var(--font-eyebrow)",
                        color: "var(--color-cream-dim)",
                        textTransform: "uppercase",
                        letterSpacing: "0.18em",
                      }}
                    >
                      Live table energy
                    </p>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-4 hidden w-40 rotate-[-5deg] overflow-hidden rounded-sm border shadow-2xl md:block">
                  <img
                    src={boxFrontAsset.url}
                    alt="Macher box front showing the Federation monolith and crowd"
                    className="aspect-[4/5] h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
