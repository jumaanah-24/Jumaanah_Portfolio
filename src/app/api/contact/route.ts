import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const entry = { name, email, message, receivedAt: new Date().toISOString() };

  const filePath = path.join(process.cwd(), "messages.json");
  const existing = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
    : [];

  existing.push(entry);
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), "utf-8");

  return NextResponse.json({ ok: true });
}
