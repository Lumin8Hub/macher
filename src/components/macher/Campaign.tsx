import { Divider } from "./Divider";
import { Reveal } from "./Reveal";
import { SignupForm } from "./SignupForm";

export function Campaign() {
  return (
    <section id="campaign" className="relative">
      <Divider className="pt-20 md:pt-28" />
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <Reveal>
          <div className="panel p-8 md:p-14">
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
      </div>
    </section>
  );
}
