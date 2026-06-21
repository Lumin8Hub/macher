import boxFrontAsset from "@/assets/macher-box-front.png.asset.json";
import boxBackAsset from "@/assets/macher-box-back.png.asset.json";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";
import { SignupForm } from "./SignupForm";

export function Campaign() {
  return (
    <section id="campaign" className="relative">
      <Divider className="pt-20 md:pt-28" />
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="panel grid gap-10 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-14">
          <Reveal>
            <div>
              <p
                className="font-eyebrow text-[12px]"
                style={{ fontFamily: "var(--font-eyebrow)", color: "var(--color-teal-bright)", textTransform: "uppercase", letterSpacing: "0.22em" }}
              >
                Coming Soon to Kickstarter
              </p>
              <h2
                className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)]"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)", lineHeight: 0.96 }}
              >
                Be a Founding Macher.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--color-body)" }}>
                We're launching a crowdfunding campaign to bring Macher to tables across the diaspora. Founding supporters get the game first, at the best price — with their names printed in the box. Drop your email and we'll tell you the moment we go live, and invite you to help shape the game before we print it.
              </p>

              <div className="mt-10">
                <SignupForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-5 self-start">
              <figure className="overflow-hidden rounded-sm border" style={{ borderColor: "rgba(78,124,168,0.22)" }}>
                <img
                  src={boxFrontAsset.url}
                  alt="Macher box front artwork"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </figure>
              <figure className="overflow-hidden rounded-sm border" style={{ borderColor: "rgba(78,124,168,0.22)" }}>
                <img
                  src={boxBackAsset.url}
                  alt="Macher box back showing components and gameplay summary"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </figure>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
