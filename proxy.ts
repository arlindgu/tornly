import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
    // ✅ Prüfe ob API Key Cookie gesetzt ist
    const apiKey = request.cookies.get('tornly:apikey')?.value;

    // ✅ Wenn kein API Key -> redirect zu Login
    if (!apiKey) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // ✅ API Key vorhanden -> weiter zur geschützten Route
    return NextResponse.next();
}

export const config = {
    matcher: '/dashboard/:path*',  // ✅ Schützt alle /dashboard Routes
}