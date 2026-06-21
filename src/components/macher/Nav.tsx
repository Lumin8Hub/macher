import { useEffect, useState } from "react";
import { FracturedStar } from "./icons";

const links = [
  { href: "#mission", label: "The Mission" },
  { href: "#how", label: "How It Plays" },
  { href: "#world", label: "The World" },
  { href: "#campaign", label: "The Campaign" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur" : "bg-transparent"
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(20,29,41,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(78,124,168,0.25)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-cream" style={{ color: "var(--color-cream)" }}>
          <FracturedStar className="h-7 w-7 text-steel" style={{ color: "var(--color-steel)" }} />
          <span className="font-display text-xl tracking-wide" style={{ fontFamily: "var(--font-display)" }}>MACHER</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-eyebrow text-[12px] text-cream-dim transition-colors hover:text-cream"
              style={{ fontFamily: "var(--font-eyebrow)", color: "var(--color-cream-dim)", textTransform: "uppercase", letterSpacing: "0.12em" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#campaign"
            className="font-eyebrow rounded-sm px-4 py-2 text-[12px] transition-colors"
            style={{
              fontFamily: "var(--font-eyebrow)",
              background: "var(--color-teal)",
              color: "var(--color-navy-deep)",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              fontWeight: 600,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-teal-bright)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-teal)")}
          >
            Notify Me
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#campaign"
            className="rounded-sm px-3 py-1.5 text-[11px]"
            style={{
              fontFamily: "var(--font-eyebrow)",
              background: "var(--color-teal)",
              color: "var(--color-navy-deep)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              fontWeight: 600,
            }}
          >
            Notify Me
          </a>
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-sm border"
            style={{ borderColor: "rgba(236,231,217,0.35)", color: "var(--color-cream)" }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden" style={{ background: "var(--color-navy)", borderTop: "1px solid rgba(78,124,168,0.25)" }}>
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b py-3 text-sm"
                style={{
                  fontFamily: "var(--font-eyebrow)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--color-cream)",
                  borderColor: "rgba(78,124,168,0.18)",
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
