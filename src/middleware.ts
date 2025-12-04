import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

let locales = ["en", "sk"];
let defaultLocale = "en";

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
        const locale = defaultLocale;
        return NextResponse.redirect(
            new URL(`/${locale}${pathname}`, request.url)
        );
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next) and static files
        '/((?!api|_next|favicon.ico|globals.css|icons|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
