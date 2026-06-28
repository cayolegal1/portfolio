import { NextRequest, NextResponse } from "next/server";
import { setCookieLocaleFromBrowser } from "@/i18n/utils";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const cookieLocale = request.cookies.get("locale")?.value;
  if (!cookieLocale) {
    setCookieLocaleFromBrowser(request, response);
  }

  // La página es dinámica (lee cookie/Accept-Language para el idioma), así que
  // Next responde con `no-store`, lo que desactiva el back/forward cache. Lo
  // reemplazamos por una directiva sin `no-store`: sigue sin cachearse en CDN
  // y se revalida, pero permite que el navegador restaure desde bfcache (es
  // memoria privada del propio usuario, sin riesgo para un portfolio).
  response.headers.set(
    "Cache-Control",
    "private, no-cache, max-age=0, must-revalidate",
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
