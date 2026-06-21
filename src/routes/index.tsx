import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/macher/Nav";
import { Hero } from "@/components/macher/Hero";
import { Mission } from "@/components/macher/Mission";
import { HowItPlays } from "@/components/macher/HowItPlays";
import { Domains } from "@/components/macher/Domains";
import { Gallery } from "@/components/macher/Gallery";
import { Campaign } from "@/components/macher/Campaign";
import { Social } from "@/components/macher/Social";
import { Footer } from "@/components/macher/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Macher — A Board Game About Community Politics" },
      {
        name: "description",
        content:
          "A darkly funny, semi-cooperative board game about saving a Jewish community — while quietly making sure you come out on top. Coming to Kickstarter.",
      },
      { property: "og:title", content: "Macher — A Board Game About Community Politics" },
      {
        property: "og:description",
        content:
          "A darkly funny, semi-cooperative board game about saving a Jewish community — while quietly making sure you come out on top. Coming to Kickstarter.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
