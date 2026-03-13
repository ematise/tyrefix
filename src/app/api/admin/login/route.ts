import { NextRequest, NextResponse } from "next/server";

async function tokenFor(password: string) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw", enc.encode(password), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(password));
  return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function POST(request: NextRequest) {
  const { password } = await request.json();
  const expected = process.env.ADMIN_PASSWORD;

  if (!expected || password !== expected) {
    return NextResponse.json({ error: "Parolă incorectă" }, { status: 401 });
  }

  const token = await tokenFor(password);
  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_token", token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete("admin_token");
  return res;
}
