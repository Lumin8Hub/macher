import boxFrontAsset from "@/assets/macher-box-front.png.asset.json";
import boxBackAsset from "@/assets/macher-box-back.png.asset.json";
import boardOverviewAsset from "@/assets/macher-board-overview.png.asset.json";
import gameHeroAsset from "@/assets/macher-game-in-play-hero.png.asset.json";
import lifestyleAsset from "@/assets/macher-lifestyle-session.png.asset.json";
import quickReferenceAsset from "@/assets/macher-quick-reference.png.asset.json";
import rumorCardsAsset from "@/assets/macher-rumor-cards.png.asset.json";
import opEdSmearAsset from "@/assets/macher-op-ed-smear.png.asset.json";
import lashonHaraAsset from "@/assets/macher-lashon-hara.png.asset.json";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";

const items = [
  {
    label: "Box Front",
    src: boxFrontAsset.url,
    alt: "Macher box front with the Federation monolith towering above a rallying crowd",
    aspect: "aspect-[4/5]",
    caption: "The cover render: monumental, severe, and just a little absurd.",
  },
  {
    label: "At the Table",
    src: lifestyleAsset.url,
    alt: "Players gathered around the Macher board during a warmly lit play session",
    aspect: "aspect-[16/10]",
    caption: "The social texture matters: negotiation, suspicion, and table talk in motion.",
  },
  {
    label: "Board Overview",
    src: boardOverviewAsset.url,
    alt: "Full overview of the Macher board with six color-coded domains orbiting the Federation",
    aspect: "aspect-[16/10]",
    caption: "The city map where every domain has its own politics, pressure, and leverage.",
  },
  {
    label: "Game in Play",
    src: gameHeroAsset.url,
    alt: "Gameplay view of Macher with pieces, cards, tokens, and the central Federation bank",
    aspect: "aspect-[16/10]",
    caption: "A live board state with cubes, donors, activists, and too many agendas at once.",
  },
  {
    label: "Quick Reference",
    src: quickReferenceAsset.url,
    alt: "Quick reference card summarizing the turn order and three win conditions in Macher",
    aspect: "aspect-[3/4]",
    caption: "A compressed rules snapshot: crisis, hustle, reckoning — then count who actually won.",
  },
  {
    label: "Rumor Cards",
    src: rumorCardsAsset.url,
    alt: "Rumor card artwork showing an anonymous source card and the rumor deck back",
    aspect: "aspect-[16/10]",
    caption: "The deck that turns whispers into consequences.",
  },
  {
    label: "Op-Ed Smear Campaign",
    src: opEdSmearAsset.url,
    alt: "Media card titled Op-Ed Smear Campaign showing an attack op-ed and social chatter",
    aspect: "aspect-[3/4]",
    caption: "One of the media-side attacks: polished, public, and hard to retract.",
  },
  {
    label: "Lashon Hara",
    src: lashonHaraAsset.url,
    alt: "Card art for Lashon Hara with blue and red actions about rumor and interruption",
    aspect: "aspect-[3/4]",
    caption: "Rumor as gameplay mechanic — sharp, funny, and socially dangerous.",
  },
  {
    label: "Box Back",
    src: boxBackAsset.url,
    alt: "Macher box back showing the board, core pillars, and what comes inside the box",
    aspect: "aspect-[1/1]",
    caption: "The full back-of-box pitch: solve the crisis, sell out or stand up, outlast your allies.",
  },
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
                <div className={`panel relative ${it.aspect} w-full overflow-hidden`}>
                  <img
                    src={it.src}
                    alt={it.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-70"
                    aria-hidden="true"
                    style={{
                      background: "linear-gradient(180deg, rgba(15,22,32,0) 42%, rgba(15,22,32,0.34) 100%)",
                    }}
                  />
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
