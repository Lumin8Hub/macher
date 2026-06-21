import boxFrontAsset from "@/assets/macher-box-front.png.asset.json";
import { Campaign } from "@/components/macher/Campaign";
import { Domains } from "@/components/macher/Domains";
import { Footer } from "@/components/macher/Footer";
import { Gallery } from "@/components/macher/Gallery";
import { Hero } from "@/components/macher/Hero";
import { HowItPlays } from "@/components/macher/HowItPlays";
import { Mission } from "@/components/macher/Mission";
import { Nav } from "@/components/macher/Nav";
import { Social } from "@/components/macher/Social";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Macher Board Game | Community Politics" },
      {
        name: "description",
        content:
          "Macher is a semi-cooperative board game about community politics, fragile alliances, and saving the city without losing your edge.",
      },
      { property: "og:title", content: "Macher Board Game | Community Politics" },
      {
        property: "og:description",
        content:
          "A darkly funny, semi-cooperative board game about saving a community while quietly making sure you come out on top.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: boxFrontAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: boxFrontAsset.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Mission />
        <HowItPlays />
        <Domains />
        <Gallery />
        <Campaign />
        <Social />
      </main>
      <Footer />
    </>
  );
}
