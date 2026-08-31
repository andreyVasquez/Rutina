// Genera los PNG del PWA a partir de public/icon-source.svg
// Uso: pnpm gen:icons
import sharp from "sharp";
import { readFileSync } from "node:fs";

const svg = readFileSync(new URL("../public/icon-source.svg", import.meta.url));

const targets = [
  ["public/pwa-192.png", 192],
  ["public/pwa-512.png", 512],
  ["public/apple-touch-icon.png", 180],
  ["public/favicon-32.png", 32],
];

for (const [file, size] of targets) {
  await sharp(svg, { density: 384 })
    .resize(size, size)
    .png()
    .toFile(file);
  console.log(`✓ ${file} (${size}×${size})`);
}
