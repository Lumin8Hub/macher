import { Divider } from "./Divider";
import { Reveal } from "./Reveal";

const items = [
  { label: "Box Front", aspect: "aspect-[3/4]", caption: "The cover render — a Federation monolith looms over the crowd." },
  { label: "City Board", aspect: "aspect-[4/3]", caption: "Top-down city map: six color-coded domains and the Promenade." },
  { label: "The Monolith", aspect: "aspect-[3/4]", caption: "Punch-out Federation tower. Blocks line of sight; sometimes funding too." },
  { label: "Components", aspect: "aspect-[4/3]", caption: "Activist meeples, alliance cubes, influence chips." },
  { label: "Card Decks", aspect: "aspect-[4/3]", caption: "Crisis, Initiative, Federation Agenda, Public Opinion, Scandal." },
  { label: "Box Back", aspect: "aspect-[3/4]", caption: "The pillars and the rule treatment that anchored this whole site." },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative">
      <Divider className="pt-20 md:pt-28" />
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal>
          <p
            className="text-center font-eyebrow text-[12px]"
            style={{ fontFamily: "var(--font-eyebrow)", color: "var(--color-steel-2)", textTransform: "uppercase", letterSpacing: "0.22em" }}
          >
            A Look Inside the World of Macher
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="mt-4 text-center font-display text-[clamp(2.25rem,5vw,3.75rem)]"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)", lineHeight: 0.98 }}
          >
            Concept Art
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={80 + i * 60}>
              <figure className="group">
                <div
                  className={`panel relative ${it.aspect} w-full overflow-hidden`}
                  style={{ background: "linear-gradient(165deg, #1B2735, #0F1620)" }}
                >
                  <div className="absolute inset-0 citygrid opacity-40" aria-hidden="true" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-eyebrow text-[11px]"
                      style={{
                        fontFamily: "var(--font-eyebrow)",
                        color: "var(--color-cream-dim)",
                        textTransform: "uppercase",
                        letterSpacing: "0.22em",
                      }}
                    >
                      {it.label}
                    </span>
                  </div>
                </div>
                <figcaption className="mt-3 text-sm" style={{ color: "var(--color-body)" }}>
                  {it.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
