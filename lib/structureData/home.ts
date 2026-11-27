import {
  type Locale,
  SCHEMA_IDS,
  getLocalizedUrl,
} from "./config";
import { buildWebPageGraph } from "./webPage";

type HomeJsonLdProps = {
  locale: Locale;
  title: string;
  description: string;
};

export function buildHomeJsonLd({
  locale,
  title,
  description,
}: HomeJsonLdProps) {
  const pageUrl = getLocalizedUrl(locale);

  return buildWebPageGraph({
    locale,
    pageUrl,
    title,
    description,
    mainEntityId: SCHEMA_IDS.hotel,
  });
}
