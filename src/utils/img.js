const isUnsplash = (url) => {
  try {
    return new URL(url).hostname.endsWith("unsplash.com");
  } catch {
    return false;
  }
};

// one resized, compressed version of an Unsplash link
export function unsplash(url, width = 800, quality = 75) {
  if (!isUnsplash(url)) return url;
  const u = new URL(url);
  u.searchParams.set("w", width);
  u.searchParams.set("q", quality);
  u.searchParams.set("auto", "format");
  u.searchParams.set("fit", "crop");
  return u.toString();
}

// several sizes, so phones download the small one
export function unsplashSet(url, widths = [400, 800]) {
  if (!isUnsplash(url)) return undefined;
  return widths.map((w) => `${unsplash(url, w)} ${w}w`).join(", ");
}