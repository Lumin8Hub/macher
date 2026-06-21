import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Standalone static SPA build for GitHub Pages.
// Bypasses TanStack Start SSR — produces a plain static bundle that GH Pages
// can serve directly. The Lovable preview / dev server is unaffected and
// continues to use the default vite.config.ts (TanStack Start).
//
// Usage:
//   node scripts/fetch-lovable-assets.mjs
//   BASE_PATH=/<repo>/ vite build --config vite.gh-pages.config.ts

// Resolves `*.asset.json` imports to a tiny module that imports the sibling
// binary as a Vite ?url asset so it gets bundled with a content hash. The
// binary must exist on disk — `scripts/fetch-lovable-assets.mjs` populates it.
function lovableAssetJsonPlugin(): Plugin {
  const PREFIX = "\0lovable-asset:";
  const SUFFIX = ".js";
  const cacheDir = path.resolve(__dirname, ".lovable-asset-cache");
  return {
    name: "lovable-asset-json",
    enforce: "pre",
    async resolveId(source, importer) {
      if (!source.endsWith(".asset.json")) return null;
      const resolved = await this.resolve(source, importer, { skipSelf: true });
      if (!resolved) return null;
      // Append .js suffix so the builtin json plugin does not claim this id.
      return PREFIX + resolved.id + SUFFIX;
    },
    load(id) {
      if (!id.startsWith(PREFIX)) return null;
      let real = id.slice(PREFIX.length).split("?")[0];
      if (real.endsWith(SUFFIX)) real = real.slice(0, -SUFFIX.length);
      const binaryName = path.basename(real).replace(/\.asset\.json$/, "");
      const cachedPath = path.join(cacheDir, binaryName);
      if (!existsSync(cachedPath)) {
        throw new Error(
          `Missing cached binary for ${binaryName}. Run \`node scripts/fetch-lovable-assets.mjs\` before building.`,
        );
      }
      const importPath = JSON.stringify(cachedPath + "?url");
      return `import url from ${importPath};\nexport default { url };\n`;
    },
  };
}

export default defineConfig({
  base: process.env.BASE_PATH || "/",
  root: __dirname,
  publicDir: false,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [lovableAssetJsonPlugin(), react(), tailwindcss()],
  build: {
    outDir: path.resolve(__dirname, "dist-gh-pages"),
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: path.resolve(__dirname, "gh-pages", "index.html"),
    },
  },
});
