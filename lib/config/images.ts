/**
 * Unsplash image pools used across the site.
 * All photo IDs verified to return HTTP 200 from images.unsplash.com.
 * @see https://unsplash.com
 */

export type UnsplashImage = {
  src: string;
  alt: string;
};

const unsplash = (photoId: string, width = 900): string =>
  `https://images.unsplash.com/${photoId}?w=${width}&q=80&auto=format&fit=crop`;

export const unsplashImages = {
  singapore: [
    {
      src: unsplash("photo-1537996194471-e657df975ab4"),
      alt: "Singapore city skyline and Marina Bay at night",
    },
    {
      src: unsplash("photo-1548919973-5cef591cdbc9"),
      alt: "Singapore urban skyline and waterfront",
    },
    {
      src: unsplash("photo-1555899434-94d1368aa7af"),
      alt: "Singapore architecture and cityscape",
    },
    {
      src: unsplash("photo-1626621341517-bbf3d9990a23"),
      alt: "Singapore streets and modern buildings",
    },
  ],
  china: [
    {
      src: unsplash("photo-1596422846543-75c6fc197f07"),
      alt: "Traditional Chinese architecture and scenic landscape",
    },
    {
      src: unsplash("photo-1474181487882-5abf3f0ba6c2"),
      alt: "Shanghai skyline and Huangpu River",
    },
    {
      src: unsplash("photo-1578662996442-48f60103fc96"),
      alt: "Historic Chinese landmark and cultural site",
    },
    {
      src: unsplash("photo-1469474968028-56623f02e42e"),
      alt: "Scenic mountains and nature in China",
    },
  ],
} as const;

/** Pick a random image from a country pool (new image on each page load). */
export const pickRandomUnsplash = (
  pool: readonly UnsplashImage[]
): UnsplashImage => pool[Math.floor(Math.random() * pool.length)];
