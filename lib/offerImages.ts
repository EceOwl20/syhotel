
const offerImageLocales = {
  tr: { folder: "TR", suffix: "TR" },
  en: { folder: "ING", suffix: "ING" },
  de: { folder: "ALM", suffix: "ALM" },
  ru: { folder: "RUS", suffix: "RUS" },
} as const;

export function getOfferImage(
  imageNumber: number,
  locale: string
): string {
  const config =
    offerImageLocales[
      locale as keyof typeof offerImageLocales
    ] ?? offerImageLocales.tr;

  return `/images/offers/${config.folder}/Sy-Hotel-Kampanya-${imageNumber}-${config.suffix}.jpg`;
}
