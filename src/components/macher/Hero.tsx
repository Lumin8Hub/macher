import { useEffect, useRef } from "react";
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
      {/* faint city grid */}
      <div className="absolute inset-0 citygrid opacity-70" aria-hidden="true" />
      {/* radial vignette */}
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
            <div className="font-eyebrow text-[12px] md:text-[13px]" style={{ fontFamily: "var(--font-eyebrow)", color: "var(--color-steel-2)", textTransform: "uppercase", letterSpacing: "0.18em" }}>
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
            <div className="mt-6 inline-flex items-center gap-2 rounded-sm border px-3 py-1.5"
              style={{ borderColor: "rgba(78,124,168,0.35)", background: "rgba(27,39,53,0.6)" }}>
              <span
                className="font-eyebrow text-[11px]"
                style={{ fontFamily: "var(--font-eyebrow)", color: "var(--color-cream)", textTransform: "uppercase", letterSpacing: "0.18em" }}
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

        {/* Hero art slot */}
        <div className="md:col-span-5">
          <div ref={artRef} className="relative">
            <Reveal delay={140}>
              <div
                className="panel relative aspect-[4/5] w-full overflow-hidden"
                style={{ background: "linear-gradient(160deg, #1B2735 0%, #0F1620 100%)" }}
              >
                {/* Box-art placeholder — distressed cracked star + monolith silhouette */}
                <div className="absolute inset-0 citygrid opacity-50" aria-hidden="true" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 250" className="h-[80%] w-auto" aria-hidden="true">
                    {/* monolith */}
                    <rect x="60" y="40" width="80" height="170" fill="#243246" stroke="#4E7CA8" strokeWidth="1" />
                    <rect x="60" y="40" width="80" height="170" fill="url(#mono)" opacity="0.4" />
                    <defs>
                      <linearGradient id="mono" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#88AAD0" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#0F1620" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* cracked star carved in */}
                    <g transform="translate(100,118)" stroke="#ECE7D9" strokeWidth="1.6" fill="none" opacity="0.85">
                      <polygon points="0,-30 26,15 -26,15" />
                      <polygon points="0,30 -26,-15 26,-15" />
                      <path d="M5,-32 L-7,-2 L4,2 L-9,28" stroke="#BE2B30" strokeWidth="1.8" />
                    </g>
                    {/* crowd silhouette */}
                    <g fill="#0A0F17" stroke="#4E7CA8" strokeWidth="0.8" opacity="0.9">
                      <circle cx="30" cy="225" r="6" /><rect x="24" y="231" width="12" height="14" />
                      <circle cx="55" cy="222" r="6" /><rect x="49" y="228" width="12" height="17" />
                      <circle cx="80" cy="225" r="5" /><rect x="75" y="230" width="10" height="15" />
                      <circle cx="120" cy="223" r="6" /><rect x="114" y="229" width="12" height="16" />
                      <circle cx="148" cy="226" r="5" /><rect x="143" y="231" width="10" height="14" />
                      <circle cx="172" cy="223" r="6" /><rect x="166" y="229" width="12" height="16" />
                    </g>
                  </svg>
                </div>
                <span
                  className="absolute bottom-3 left-3 font-eyebrow text-[10px]"
                  style={{ fontFamily: "var(--font-eyebrow)", color: "var(--color-cream-dim)", letterSpacing: "0.18em", textTransform: "uppercase" }}
                >
                  Box Art / Concept Render
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
