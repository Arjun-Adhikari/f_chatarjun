import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all routes under the (protected) route group.
     * URL paths inside a route group do NOT include the group name,
     * so if (protected)/chats/page.tsx serves /chats, the matcher
     * targets /chats/:path*.
     *
     * Middleware is a fast UX redirect only — NOT the real security
     * boundary. Actual verification happens via the /api/auth/refresh
     * Route Handler and AuthBootstrap component.
     *
     * TODO: Every protected Server Component / Server Action must
     * independently verify the session server-side before returning
     * sensitive data (implement a server-side DAL layer for this).
     */
    "/chats/:path*",
  ],
};
