import manifest from "@/data/images.json";

export type ImgMeta = { url: string; w: number; h: number };

const map = manifest as Record<string, ImgMeta>;

export function img(key: string): ImgMeta {
  const found = map[key];
  if (!found) return { url: "", w: 1200, h: 800 };
  return found;
}

export function imgs(keys: string[]): (ImgMeta & { key: string })[] {
  return keys.filter((k) => map[k]).map((k) => ({ key: k, ...map[k]! }));
}

export function ratio(key: string): number {
  const m = img(key);
  return m.w / m.h;
}
