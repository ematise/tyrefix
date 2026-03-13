import { NextRequest, NextResponse } from "next/server";

async function expectedToken() {
  const password = process.env.ADMIN_PASSWORD ?? "";
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw", enc.encode(password), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(password));
  return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAdminRoute =
    pathname.startsWith("/admin") || pathname.startsWith("/api/admin");

  if (!isAdminRoute) return NextResponse.next();

  // Allow the login page and login API through
  if (pathname === "/admin/login" || pathname === "/api/admin/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get("admin_token")?.value;

  if (!token || token !== await expectedToken()) {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
