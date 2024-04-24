import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path");
  console.log("path to revalidate:", path);
  if (path == null) {
    revalidatePath("/users/1");
    return Response.json({
      ok: true,
      messaeg: "users#1 revalidated.",
    });
  }
  revalidatePath(`${path}`);
  return Response.json({
    ok: true,
    messaeg: `${path} revalidated.`,
  });
}
