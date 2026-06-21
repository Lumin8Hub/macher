#!/usr/bin/env node
/**
 * Fetches Lovable-hosted asset binaries described by `src/assets/*.asset.json`
 * and writes them into a build-time cache directory for the GitHub Pages build.
 *
 * Idempotent — skips assets that are already cached.
 */
import { readdir, readFile, writeFile, stat, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const ASSETS_DIR = path.join(ROOT, "src", "assets");
const CACHE_DIR = path.join(ROOT, ".lovable-asset-cache");

async function exists(p) {
  try { await stat(p); return true; } catch { return false; }
}

function originForAsset(meta) {
  const projectId = meta.project_id;
  if (!projectId) throw new Error("asset.json missing project_id");
  return `https://id-preview--${projectId}.lovable.app`;
}

async function main() {
  await mkdir(CACHE_DIR, { recursive: true });
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
    const cachedPath = path.join(CACHE_DIR, binaryName);
    if (await exists(cachedPath)) continue;
    const meta = JSON.parse(await readFile(jsonPath, "utf8"));
    const url = meta.url?.startsWith("http") ? meta.url : `${originForAsset(meta)}${meta.url}`;
    process.stdout.write(`[assets] fetching ${binaryName} ... `);
    const res = await fetch(url);
    if (!res.ok) {
      console.log(`FAILED (${res.status})`);
      throw new Error(`Failed to download ${url}: ${res.status}`);
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(cachedPath, buf);
    console.log(`${buf.length} bytes`);
    downloaded++;
  }
  console.log(`[assets] done. downloaded=${downloaded}, total=${descriptors.length}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
