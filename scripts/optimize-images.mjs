import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const IMAGE_DIR = "public/images/tyrefix";
const MAX_WIDTH = 1920;
const WEBP_QUALITY = 78;

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) return;

  const webpPath = filePath.replace(/\.(png|jpe?g)$/i, ".webp");
  const image = sharp(filePath);
  const meta = await image.metadata();

  let pipeline = image;
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  await pipeline.webp({ quality: WEBP_QUALITY, effort: 6 }).toFile(webpPath);

  const [srcSize, webpSize] = await Promise.all([
    stat(filePath).then((s) => s.size),
    stat(webpPath).then((s) => s.size),
  ]);

  console.log(
    `${path.basename(filePath)} (${(srcSize / 1024).toFixed(0)} KiB) -> ${path.basename(webpPath)} (${(webpSize / 1024).toFixed(0)} KiB)`,
  );
}

const files = await readdir(IMAGE_DIR);
await Promise.all(files.map((name) => optimizeFile(path.join(IMAGE_DIR, name))));
