import { Divider } from "./Divider";
import { Reveal } from "./Reveal";
import { IconBrokenHeart, IconChip, IconCube } from "./icons";

const pillars = [
  { Icon: IconBrokenHeart, title: "Solve the Crisis", body: "The community faces real threats. Work together to keep it alive." },
  { Icon: IconChip, title: "Sell Out or Stand Up", body: "Spend Influence to shape outcomes — or cash in when the price is right." },
  { Icon: IconCube, title: "Outlast Your Allies", body: "Support today. Undermine tomorrow. Be the last one with any leverage left." },
];

export function HowItPlays() {
  return (
    <section id="how" className="relative">
      <Divider className="pt-20 md:pt-28" />
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal>
          <p
            className="text-center font-eyebrow text-[12px]"
            style={{ fontFamily: "var(--font-eyebrow)", color: "var(--color-steel-2)", textTransform: "uppercase", letterSpacing: "0.22em" }}
          >
            How It Plays
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="mt-4 text-center font-display text-[clamp(2.25rem,5vw,3.75rem)]"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)", lineHeight: 0.98 }}
          >
            Three Pillars. One Fragile Coalition.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {pillars.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={120 + i * 100}>
              <div className="panel h-full p-8 md:p-10">
                <Icon className="h-12 w-12" style={{ color: "var(--color-teal)" } as React.CSSProperties} />
                <h3
                  className="mt-6 font-eyebrow text-lg"
                  style={{
                    fontFamily: "var(--font-eyebrow)",
                    color: "var(--color-teal)",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    fontWeight: 600,
                  }}
                >
                  {title}
                </h3>
                <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--color-body)" }}>
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mx-auto mt-16 max-w-3xl border-l-2 pl-6" style={{ borderColor: "rgba(78,124,168,0.35)" }}>
            <p
              className="font-eyebrow mb-3 text-[11px]"
              style={{ fontFamily: "var(--font-eyebrow)", color: "var(--color-steel-2)", textTransform: "uppercase", letterSpacing: "0.2em" }}
            >
              How a round works
            </p>
            <p className="text-base leading-relaxed md:text-lg" style={{ color: "var(--color-cream-dim)" }}>
              Each round, a <strong style={{ color: "var(--color-cream)" }}>Crisis</strong> hits one of the city's domains. You argue, bluff, and decide who'll spend to solve it — knowing every promise is non-binding. Then you make your move: organize on the ground, work the Federation for funding, or court a major donor. Then the situation gets worse. Win by becoming the <strong style={{ color: "var(--color-cream)" }}>Establishment</strong>, the <strong style={{ color: "var(--color-cream)" }}>Grassroots</strong> hero, or the <strong style={{ color: "var(--color-cream)" }}>Macher</strong> who controls the donors — before the whole thing collapses and everyone loses together.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
