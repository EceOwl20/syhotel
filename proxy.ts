//next15'de middleware.ts dosyası

import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    "/(tr|en|de|ru)/:path*",
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
  ],
};