
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { locale as getRootLocale } from "next/root-params";

import { routing } from "@/i18n/routing";

import Header from "@/components/generalComponents/Header";
import Footer from "@/components/generalComponents/Footer";
import LiveChat from "@/components/generalComponents/LiveChat";
import CookieConsent from "@/components/generalComponents/CookieConsent";
import MobileBookingBar from "@/components/generalComponents/MobileBookingBar";

import "../globals.css";
import BackToTop from "@/components/generalComponents/BackToTop";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "SY Hotels Belek",
    template: "%s | SY Hotels Belek",
  },
  description: "SY Hotels Belek - Luxury Hotel Experience",
 icons: {
  icon: [
    {
      url: "/icon.webp",
      type: "image/webp",
    },
  ],
},
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

type LocaleLayoutProps = {
  children: ReactNode;
};

export default async function LocaleLayout({
  children,
}: LocaleLayoutProps) {
  const locale = await getRootLocale();

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="/fonts/flaticon/flaticon_hotel.min.css"
        />
      </head>

      <body className={montserrat.variable}>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
          <BackToTop />
          <LiveChat />
          <MobileBookingBar
  phoneNumber="+902422054787"
  bookingUrl="https://syhotels.platformeva.com/"
  bookNowText="Book Now"
/>
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
