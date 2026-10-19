import sharp from "sharp";

const output = await sharp("src/assets/home.png")
  .resize({ width: 1000 })
  .webp({ quality: 80 })
  .toFile("src/assets/home.webp");

console.log(
  `done: ${output.width} x ${output.height}, ${Math.round(output.size / 1024)} KB`
);