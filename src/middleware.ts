import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

const withBasicAuth =
  (middleware: NextMiddleware) => (req: NextRequest, event: NextFetchEvent) => {
    if (!process.env.ENABLE_BASIC_AUTH) return middleware(req, event);

    const basicAuth = req.headers.get("authorization");
    if (basicAuth) {
      const auth = basicAuth.split(" ")[1];
      const [user, pwd] = Buffer.from(auth, "base64").toString().split(":");

      if (
        user === process.env.BASIC_AUTH_USER &&
        pwd === process.env.BASIC_AUTH_PASSWORD
      ) {
        return middleware(req, event);
      }
    }

    return new Response("Auth required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Private Room"',
      },
    });
  };

export default withBasicAuth(() => NextResponse.next());

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
