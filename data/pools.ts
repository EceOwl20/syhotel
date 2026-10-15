
export type PoolItem = {
  id: string;
  imagePosition: "left" | "right";
  images: string[];
  discoverHref?: "/aquapark";
};

const POOLS_PATH = "/images/pools";

function createPoolImages(
  prefix: string,
  numbers: number[],
): string[] {
  return numbers.map(
    (number) => `${POOLS_PATH}/${prefix}-${number}.webp`,
  );
}

// MainBanner images
export const poolBannerSlides = [
  {
    src: `${POOLS_PATH}/maldiv-havuz-1.webp`,
    alt: "SY Hotels Maldives Pool",
  },
  {
    src: `${POOLS_PATH}/ablok-acik-havuz-1.webp`,
    alt: "SY Hotels Outdoor Pool",
  },
  {
    src: `${POOLS_PATH}/aquapark-1.webp`,
    alt: "SY Hotels Mega Splash Aquapark",
  },
  {
    src: `${POOLS_PATH}/kapali-havuz-2.webp`,
    alt: "SY Hotels Indoor Pool",
  },
];

export const pools: PoolItem[] = [
  // 1. Maldives Pool
  {
    id: "maldives",
    imagePosition: "left",
    images: createPoolImages(
      "maldiv-havuz",
      [1, 2, 3, 4, 5, 6],
    ),
  },

  // 2. Outdoor Pool - Block A
  {
    id: "outdoor",
    imagePosition: "right",
    images: createPoolImages(
      "ablok-acik-havuz",
      [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    ),
  },

  // 3. Outdoor Pool - Block B
  {
    id: "blockB",
    imagePosition: "left",
    images: createPoolImages("bblok-acik-havuz", [1]),
  },

  // 4. Mega Splash Aquapark
  {
    id: "aquapark",
    imagePosition: "right",
    images: createPoolImages("aquapark", [1, 2, 3]),
    discoverHref: "/aquapark",
  },

  // 5. Indoor Pool
  {
    id: "indoor",
    imagePosition: "left",
    images: createPoolImages(
      "kapali-havuz",
      [2, 3, 4, 5, 6, 7, 8, 9],
    ),
  },
];
