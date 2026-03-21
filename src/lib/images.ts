const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

export const IMAGES = {
  logo: `${SUPABASE_URL}/storage/v1/object/public/public-assets/qss-logo-circle.png`,
  favicon: `${SUPABASE_URL}/storage/v1/object/public/public-assets/qss-logo-favicon.png`,
  jeremyHeadshot: `${SUPABASE_URL}/storage/v1/object/public/public-assets/jeremy-headshot.png`,
  marsHeadshot: `${SUPABASE_URL}/storage/v1/object/public/public-assets/mars-headshot.png`,
} as const;

export function getImageUrl(key: keyof typeof IMAGES): string {
  return IMAGES[key];
}
