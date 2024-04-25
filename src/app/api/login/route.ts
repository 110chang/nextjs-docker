import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// NOTE: cookie検証
export async function GET() {
  const session = cookies().get("s")?.value;
  const ok = session === "123"; // NOTE: 本来はサーバーにセッションを問い合わせる
  if (!ok) return NextResponse.json({ ok: false }, { status: 403 });
  return NextResponse.json({ ok: true });
}

// NOTE: ログイン認証
export async function POST() {
  // NOTE: 本来は認証処理を行う
  const cookieStr = "s=123; Max-Age=6000; HttpOnly; Path=/;";
  return NextResponse.json(
    { ok: true },
    { headers: { "Set-Cookie": cookieStr } }
  );
}
