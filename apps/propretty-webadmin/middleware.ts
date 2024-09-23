import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getJwtPayload } from "./lib/session";

// 1. Specify protected and public routes
const publicRoutes = ["/login", "/signup"];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  const token = cookies().get("session")?.value;

  console.log("path: ", path, token, isPublicRoute);

  if (!token)
    return isPublicRoute
      ? NextResponse.next()
      : NextResponse.redirect(new URL("/login", req.nextUrl));

  const payload = await getJwtPayload(token);

  // 5. Redirect to /login if the user is not authenticated
  if (!isPublicRoute && !payload.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // 6. Redirect to /dashboard if the user is authenticated
  if (isPublicRoute && payload.userId) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
