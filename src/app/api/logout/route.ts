export function POST() {
  return Response.json(
    { ok: true },
    { headers: { "Set-Cookie": "s=; Max-Age=-1; Path=/;" } }
  );
}
