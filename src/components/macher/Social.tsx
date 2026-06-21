import { Reveal } from "./Reveal";
import { SocialIcons } from "./icons";

const socials: Array<{ label: string; href: string; Icon: (p: { className?: string }) => React.JSX.Element }> = [
  { label: "Instagram", href: "#", Icon: SocialIcons.Instagram }, // TODO: paste real URL
  { label: "TikTok", href: "#", Icon: SocialIcons.TikTok },        // TODO: paste real URL
  { label: "Facebook", href: "#", Icon: SocialIcons.Facebook },    // TODO: paste real URL
  { label: "X", href: "#", Icon: SocialIcons.X },                  // TODO: paste real URL
  { label: "YouTube", href: "#", Icon: SocialIcons.YouTube },      // TODO: paste real URL
  { label: "Community", href: "#", Icon: SocialIcons.Discord },    // TODO: paste real URL (Discord/WhatsApp)
];

export function Social() {
  return (
    <section id="social" className="relative" style={{ background: "var(--color-navy-deep)" }}>
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <Reveal>
          <p
            className="font-eyebrow text-[12px]"
            style={{ fontFamily: "var(--font-eyebrow)", color: "var(--color-steel-2)", textTransform: "uppercase", letterSpacing: "0.22em" }}
          >
            Join the Conversation
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)]"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)", lineHeight: 0.98 }}
          >
            Follow Along.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-2xl text-base md:text-lg" style={{ color: "var(--color-body)" }}>
            Follow along as Macher comes to life — art drops, design diaries, and the occasional fight about who's paying for the kiddush.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm border transition-colors"
                style={{ borderColor: "rgba(236,231,217,0.3)", color: "var(--color-cream)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(236,231,217,0.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
            <a
              href="#campaign"
              className="ml-auto inline-flex items-center justify-center rounded-sm border px-5 py-2.5 transition-colors"
              style={{
                borderColor: "rgba(236,231,217,0.45)",
                color: "var(--color-cream)",
                fontFamily: "var(--font-eyebrow)",
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                fontSize: 12,
                fontWeight: 500,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(236,231,217,0.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              Join the Newsletter
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
