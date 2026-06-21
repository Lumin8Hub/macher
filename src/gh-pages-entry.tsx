import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

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

// Set OG image dynamically so the bundled asset URL is used.
function ensureMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}
ensureMeta("property", "og:image", boxFrontAsset.url);
ensureMeta("name", "twitter:image", boxFrontAsset.url);

function App() {
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

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
