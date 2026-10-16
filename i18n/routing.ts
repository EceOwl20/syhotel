
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["tr", "en", "de", "ru"],

  defaultLocale: "tr",

  localePrefix: "always",

  pathnames: {
    "/": "/",

    // Deluxe Rooms
    "/rooms/deluxe-rooms": {
      tr: "/deluxe-odalar",
      en: "/rooms/deluxe-rooms",
      de: "/deluxe-zimmer",
      ru: "/номера-делюкс",
    },

    // Deluxe Family Rooms
    "/rooms/deluxe-family-rooms": {
      tr: "/deluxe-aile-odalari",
      en: "/rooms/deluxe-family-rooms",
      de: "/deluxe-familienzimmer",
      ru: "/семейные-номера-делюкс",
    },

    // Deluxe Superior Rooms
    "/rooms/deluxe-superior-rooms": {
      tr: "/deluxe-superior-odalar",
      en: "/rooms/deluxe-superior-rooms",
      de: "/deluxe-superior-zimmer",
      ru: "/номера-делюкс-супериор",
    },

    // Deluxe Swim-Up Family Rooms
    "/rooms/deluxe-swimup-family-rooms": {
      tr: "/deluxe-swimup-aile-odalari",
      en: "/rooms/deluxe-swimup-family-rooms",
      de: "/deluxe-swimup-familienzimmer",
      ru: "/семейные-номера-делюкс-свим-ап",
    },

    // Deluxe Swim-Up Rooms
    "/rooms/deluxe-swimup-rooms": {
      tr: "/deluxe-swimup-odalar",
      en: "/rooms/deluxe-swimup-rooms",
      de: "/deluxe-swimup-zimmer",
      ru: "/номера-делюкс-свим-ап",
    },

    // Deluxe Shallow Pool Rooms
    "/rooms/deluxe-shallow-pool-rooms": {
      tr: "/deluxe-sig-havuzlu-odalar",
      en: "/rooms/deluxe-shallow-pool-rooms",
      de: "/deluxe-zimmer-mit-flachwasserpool",
      ru: "/номера-делюкс-с-неглубоким-бассейном",
    },

    // Deluxe Duplex Family Rooms
    "/rooms/deluxe-duplex-family-rooms": {
      tr: "/deluxe-dubleks-aile-odalari",
      en: "/rooms/deluxe-duplex-family-rooms",
      de: "/deluxe-duplex-familien-zimmer",
      ru: "/роскошные-двухуровневые-семейные-номера",
    },

    // Deluxe Accessible Rooms
    "/rooms/deluxe-handicap-rooms": {
      tr: "/deluxe-engelli-odalari",
      en: "/rooms/deluxe-handicap-rooms",
      de: "/barrierefreie-deluxe-zimmer",
      ru: "/номера-делюкс-для-гостей-с-инвалидностью",
    },

    // Dynamic fallback
    "/rooms/[slug]": "/rooms/[slug]",

  // Mevcut 8 oda tanımın burada kalacak.

  // General pages
  "/reservation": "/reservation",
  "/pools": {
  tr: "/havuzlar",
  en: "/pools",
  de: "/schwimmbader",
  ru: "/pools",
},

"/aquapark": {
  tr: "/aquapark",
  en: "/aquapark",
  de: "/aquapark",
  ru: "/aquapark",
},

  "/beach": {
  tr: "/sahil",
  en: "/beach",
  de: "/strand",
  ru: "/пляж",
},

 "/activities": {
  tr: "/aktivite-eglence",
  en: "/activities-entertainment",
  de: "/aktivitaeten-unterhaltung",
  ru: "/razvlecheniya-i-aktivnosti",
},

  "/kids": {
  tr: "/cocuklar-icin",
  en: "/for-children",
  de: "/fuer-kinder",
  ru: "/dlya-detey",
},

  // Gastronomy
  "/bars": "/bars",
  "/restaurants": "/restaurants",
  "/court": "/court",
  "/restoran": "/restoran",
  "/pastane": "/pastane",

  // Corporate
  "/information": "/information",
  
  "/agencies": {
  tr: "/acentalar-icin",
  en: "/for-agencies",
  de: "/fuer-reisebueros",
  ru: "/для-турагентств",
},

 "/contact": {
  tr: "/iletisim",
  en: "/contact",
  de: "/kontakt",
  ru: "/контакты",
},

 "/kvkk": {
  tr: "/kisisel-verilerin-korunmasi",
  en: "/personal-data-protection",
  de: "/schutz-personenbezogener-daten",
  ru: "/защита-персональных-данных",
},

  "/sustainability": "/sustainability",
  "/surdurulebilirlik": "/surdurulebilirlik",
  "/discover": "/discover",
  "/bolgeyi-kesfedin": "/bolgeyi-kesfedin",

  // Other links used on the homepage
  "/shows": "/shows",
  "/bars/[slug]": "/bars/[slug]",
  "/restaurants/[slug]": "/restaurants/[slug]",

  "/spa-wellness": {
  tr: "/spa-wellness",
  en: "/spa-wellness",
  de: "/spa-wellness",
  ru: "/spa-wellness",
},

"/general-information": {
  tr: "/genel-bilgilendirme",
  en: "/general-information",
  de: "/allgemeine-informationen",
  ru: "/общая-информация",
},

  },
});
