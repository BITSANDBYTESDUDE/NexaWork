import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Route protection will be implemented in the authentication step.
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/employee/:path*",
    "/manager/:path*",
    "/admin/:path*",
  ],
};
