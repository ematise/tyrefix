import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

const DATA_DIR = path.join(process.cwd(), "src", "data");

function isSafeFile(file: string) {
  return /^[\w-]+\.json$/.test(file);
}

export async function GET(request: NextRequest) {
  const file = request.nextUrl.searchParams.get("file");

  if (file) {
    if (!isSafeFile(file)) return NextResponse.json({ error: "Invalid file" }, { status: 400 });
    const content = await fs.readFile(path.join(DATA_DIR, file), "utf-8");
    return NextResponse.json(JSON.parse(content));
  }

  const files = await fs.readdir(DATA_DIR);
  return NextResponse.json(files.filter((f) => f.endsWith(".json")));
}

export async function POST(request: NextRequest) {
  const file = request.nextUrl.searchParams.get("file");
  if (!file || !isSafeFile(file)) return NextResponse.json({ error: "Invalid file" }, { status: 400 });

  const body = await request.json();
  await fs.writeFile(path.join(DATA_DIR, file), JSON.stringify(body, null, 2), "utf-8");
  return NextResponse.json({ ok: true });
}
