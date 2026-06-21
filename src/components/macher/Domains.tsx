import boardOverviewAsset from "@/assets/macher-board-overview.png.asset.json";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";
import {
  IconCampus,
  IconMedia,
  IconPolitics,
  IconEducation,
  IconStreet,
  IconPromenade,
} from "./icons";

const domains = [
  { name: "Campus", color: "var(--color-campus)", Icon: IconCampus, body: "High stakes, high passion, quick to ignite." },
  { name: "Media", color: "var(--color-media)", Icon: IconMedia, body: "Win the narrative, slow the panic." },
  { name: "Politics", color: "var(--color-politics)", Icon: IconPolitics, body: "Expensive to play. Powerful when you do." },
  { name: "Education", color: "var(--color-education)", Icon: IconEducation, body: "A slow burn — and hard to win back once it's lost." },
  { name: "The Street", color: "var(--color-street)", Icon: IconStreet, body: "The highest risk. Off-limits once you've gone Establishment." },
  { name: "The Promenade", color: "var(--color-promenade)", Icon: IconPromenade, body: "The safe haven, the small wins, the place to regroup." },
];

export function Domains() {
  return (
    <section id="world" className="relative" style={{ background: "var(--color-navy-deep)" }}>
      <Divider className="pt-20 md:pt-28" />
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal>
          <p
            className="text-center font-eyebrow text-[12px]"
            style={{ fontFamily: "var(--font-eyebrow)", color: "var(--color-steel-2)", textTransform: "uppercase", letterSpacing: "0.22em" }}
          >
            The World
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="mt-4 text-center font-display text-[clamp(2.25rem,5vw,3.75rem)]"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)", lineHeight: 0.98 }}
          >
            Six Domains. One City. No Safe Bets.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <figure className="panel mt-14 overflow-hidden">
            <img
              src={boardOverviewAsset.url}
              alt="Top-down Macher board showing the Federation at the center and six color-coded domains connected across the city"
              className="w-full object-cover"
              loading="lazy"
            />
          </figure>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map(({ name, color, Icon, body }, i) => (
            <Reveal key={name} delay={100 + i * 70}>
              <article
                className="group relative h-full overflow-hidden p-6 md:p-7"
                style={{
                  background: "var(--color-navy-panel)",
                  borderTop: `3px solid ${color}`,
                  border: "1px solid rgba(78,124,168,0.22)",
                  borderTopWidth: "3px",
                  borderTopColor: color,
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                  style={{
                    background: `radial-gradient(60% 60% at 80% 0%, ${color}22, transparent 70%)`,
                  }}
                />
                <Icon className="h-9 w-9" style={{ color } as React.CSSProperties} />
                <h3
                  className="mt-5 font-display text-2xl"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)", letterSpacing: "0.02em" }}
                >
                  {name.toUpperCase()}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "var(--color-body)" }}>
                  {body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
