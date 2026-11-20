import { headers } from "next/headers";
import { locale as getRootLocale } from "next/root-params";

import {
  getVisitorCountry,
  isTurkeyTurkishMarket,
} from "@/lib/visitorMarket";

import JivoChat from "./JivoChat";
import LiveChat from "./LiveChat";

export default async function MarketLiveChat() {
  const [requestHeaders, locale] = await Promise.all([
    headers(),
    getRootLocale(),
  ]);
  const country = getVisitorCountry(requestHeaders);

  if (isTurkeyTurkishMarket(country, locale)) {
    const widgetId = process.env.JIVO_WIDGET_ID;

    return widgetId ? <JivoChat widgetId={widgetId} /> : <LiveChat />;
  }

  return <LiveChat />;
}

