import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: Request) {
  const session = await auth();
  const authorization = (await cookies()).get("authorization")?.value;
  const memberId = (await cookies()).get("memberId")?.value;

  if (!session || !authorization || !memberId) {
    const redirectUrl = new URL("/", request.url);
    redirectUrl.searchParams.set("needLogin", "true");
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /* "/profile/:path*" /* "/search/:path*" */
  ],
};
