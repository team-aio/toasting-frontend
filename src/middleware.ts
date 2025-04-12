import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware() {
  const session = await auth();
  const authorization = (await cookies()).get("authorization")?.value;
  const memberId = (await cookies()).get("memberId")?.value;

  // console.log(
  //   "미들웨어에서 부른 authorization, memberId",
  //   authorization,
  //   memberId
  // );
  // 엑세스 토큰이랑, uuid가 널일경우
  if (authorization === undefined || memberId === undefined) {
    return NextResponse.redirect("https://www.toasting.io/");
  }
  // 로그인을 안했을때 만 해당
  if (!session) {
    return NextResponse.redirect("https://www.toasting.io/");
  }
}

export const config = {
  // 적용이 되는 곳 선정
  matcher: ["/profile/:path*", "/search/:path*"],
};
