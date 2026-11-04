import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tr/tr-acentalar-icin",
        destination: "/tr/acentalar-icin",
        permanent: true,
      },

      {
        source: "/en/en-deluxe-swim-up-family-rooms/",
        destination: "/en/rooms/deluxe-swimup-family-rooms",
        permanent: true,
      },

      {
        source: "/en-bettelglow-patiserrie",
        destination: "/en/restaurants/bettelglow-patisserie",
        permanent: true,
      },

       {
        source: "/en/en-deluxe-suite-rooms/",
        destination: "/en/rooms/deluxe-rooms",
        permanent: true,
      },

       {
        source: "/en/en-daily-experience/",
        destination: "/en/activities-entertainment",
        permanent: true,
      },

         {
        source: "/en-daily-experience/",
        destination: "/en/activities-entertainment",
        permanent: true,
      },

         {
        source: "/tr/tr-gunluk-deneyim/",
        destination: "/tr/aktivite-eglence",
        permanent: true,
      },

           {
        source: "/tr-gunluk-deneyim/",
        destination: "/tr/aktivite-eglence",
        permanent: true,
      },
    ];
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
