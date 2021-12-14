import { CATEGORIES_MAP } from "constants/categories";

export function transformSlugToTitle(slug: string) {
  if (CATEGORIES_MAP[slug]) {
    return CATEGORIES_MAP[slug];
  }

  if (!slug) return;

  return slug
    .split("-")
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");
}

export function transformTitleToSlug(title: string) {
  return title?.replace(/\s+/g, "-").toLowerCase();
}
