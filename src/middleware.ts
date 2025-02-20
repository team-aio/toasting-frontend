// import { auth } from "@/auth";
// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";

export async function middleware() {
  // const session = await auth();
  // const authorization = (await cookies()).get("authorization")?.value;
  // const uuid = (await cookies()).get("uuid")?.value;
  // // 엑세스 토큰이랑, uuid가 널일경우
  // if (authorization === null || uuid === null) {
  //   return NextResponse.redirect("https://fe-meetplus.vercel.app/login");
  // }
  // // 로그인을 안했을때 만 해당
  // if (!session) {
  //   return NextResponse.redirect("https://fe-meetplus.vercel.app/login");
  // }
}

export const config = {
  // 적용이 되는 곳 선정
  matcher: [],
};
