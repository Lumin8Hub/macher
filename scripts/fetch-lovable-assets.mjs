#!/usr/bin/env node
/**
 * Fetches Lovable-hosted asset binaries described by `src/assets/*.asset.json`
 * and writes them next to the JSON descriptors as real files. Used by the
 * GitHub Pages build so that asset imports resolve to bundled, hashed files
 * rather than Lovable preview URLs.
 *
 * Idempotent — skips assets that are already on disk.
 */
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = path.resolve(__dirname, "..", "src", "assets");

async function exists(p) {
  try { await stat(p); return true; } catch { return false; }
}

function originForAsset(meta) {
  // Lovable preview origin serves /__l5e/... asset paths reliably.
  const projectId = meta.project_id;
  if (!projectId) throw new Error("asset.json missing project_id");
  return `https://id-preview--${projectId}.lovable.app`;
}

async function main() {
  const entries = await readdir(ASSETS_DIR);
  const descriptors = entries.filter((f) => f.endsWith(".asset.json"));
  if (descriptors.length === 0) {
    console.log("[assets] no .asset.json descriptors found");
    return;
  }
  let downloaded = 0;
  for (const file of descriptors) {
    const jsonPath = path.join(ASSETS_DIR, file);
    const binaryName = file.replace(/\.asset\.json$/, "");
    const binaryPath = path.join(ASSETS_DIR, binaryName);
    if (await exists(binaryPath)) continue;
    const meta = JSON.parse(await readFile(jsonPath, "utf8"));
    const url = meta.url?.startsWith("http") ? meta.url : `${originForAsset(meta)}${meta.url}`;
    process.stdout.write(`[assets] fetching ${binaryName} ... `);
    const res = await fetch(url);
    if (!res.ok) {
      console.log(`FAILED (${res.status})`);
      throw new Error(`Failed to download ${url}: ${res.status}`);
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(binaryPath, buf);
    console.log(`${buf.length} bytes`);
    downloaded++;
  }
  console.log(`[assets] done. downloaded=${downloaded}, total=${descriptors.length}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
