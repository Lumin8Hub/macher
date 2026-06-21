import { FracturedStar } from "./icons";

const ticks = [
  "var(--color-campus)",
  "var(--color-media)",
  "var(--color-politics)",
  "var(--color-education)",
  "var(--color-street)",
  "var(--color-promenade)",
];

const links = [
  { href: "#mission", label: "The Mission" },
  { href: "#how", label: "How It Plays" },
  { href: "#world", label: "The World" },
  { href: "#campaign", label: "The Campaign" },
  { href: "#privacy", label: "Privacy" },
  { href: "mailto:hello@machergame.com", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative" style={{ background: "var(--color-navy-deep)", borderTop: "1px solid rgba(78,124,168,0.22)" }}>
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <FracturedStar className="h-9 w-9" style={{ color: "var(--color-cream)" } as React.CSSProperties} />
            <div>
              <p
                className="font-display text-xl"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)", letterSpacing: "0.04em" }}
              >
                FRACTURED STAR GAMES
              </p>
              <p className="text-xs" style={{ color: "var(--color-cream-dim)" }}>Built for the people who actually show up.</p>
            </div>
          </div>

          {/* domain ticks */}
          <div className="flex items-center gap-3" aria-hidden="true">
            {ticks.map((c, i) => (
              <FracturedStar key={i} className="h-5 w-5" style={{ color: c } as React.CSSProperties} />
            ))}
          </div>
        </div>

        <nav className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm transition-colors"
              style={{
                color: "var(--color-cream-dim)",
                fontFamily: "var(--font-eyebrow)",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                fontSize: 12,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-cream)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-cream-dim)")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="mt-10 flex flex-col gap-2 border-t pt-6 text-xs md:flex-row md:items-center md:justify-between" style={{ borderColor: "rgba(78,124,168,0.18)", color: "var(--color-cream-dim)" }}>
          <p>© 2026 Fractured Star Games.</p>
          <p>hello@machergame.com</p>
        </div>
      </div>
    </footer>
  );
}
