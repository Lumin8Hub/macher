import { Divider } from "./Divider";
import { Reveal } from "./Reveal";

export function Mission() {
  return (
    <section id="mission" className="relative" style={{ background: "var(--color-navy-deep)" }}>
      <Divider className="pt-20 md:pt-28" />
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-32">
        <Reveal>
          <p
            className="font-eyebrow text-[12px]"
            style={{ fontFamily: "var(--font-eyebrow)", color: "var(--color-steel-2)", textTransform: "uppercase", letterSpacing: "0.22em" }}
          >
            Why We Made This
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="mt-6 font-display text-balance text-[clamp(2.5rem,6vw,4.5rem)]"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)", lineHeight: 0.98 }}
          >
            The fight is real. So is the infighting.
          </h2>
        </Reveal>

        <div className="mt-10 space-y-6 text-lg leading-relaxed md:text-[1.18rem]" style={{ color: "var(--color-body)" }}>
          <Reveal delay={120}>
            <p>
              Antisemitism is rising — on campus, in the headlines, on the street. And too often, the response from inside our own community is a committee, a turf war, and three competing press releases.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p>
              Macher is a game about exactly that — not to mock it, but to name it. The hardest obstacle to fighting hate from the outside is sometimes the way we fracture on the inside: the crabs in the bucket, the scramble for kavod, the <em>macher</em> who'd rather win the room than win the fight. Every community knows these dynamics. Almost none of us ever get to laugh at them together, out loud, around a table.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              That's the whole idea. Macher is satire with a purpose: a mirror sharp enough to recognize ourselves in, and funny enough that we can actually talk about it afterward. The tension you feel during the game is the diagnosis. The conversation it starts is the cure.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p>
              This isn't our community performed for outsiders. It's an inside game — for activists, organizers, lay leaders, students, federation pros, and anyone who's ever sat through <em>the meeting</em>. If you've lived it, you'll recognize every card. And maybe, by the end of the night, we'll all be a little better at the one thing the game refuses to let us do easily: actually work together.
            </p>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <blockquote
            className="mt-14 border-l-2 pl-6 font-display text-[clamp(1.75rem,3.6vw,2.6rem)] leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-teal-bright)",
              borderColor: "var(--color-teal)",
            }}
          >
            "The game is the diagnosis. The conversation is the cure."
          </blockquote>
        </Reveal>

        <Reveal delay={360}>
          <p className="mt-12 max-w-2xl text-base" style={{ color: "var(--color-cream-dim)" }}>
            Macher is being shaped with a panel of activists and community professionals across North America, Europe, and Australia — because it only works if it rings true.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
