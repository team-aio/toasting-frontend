"use server";

import { cookies } from "next/headers";

export async function serverSignOut() {
  (
    await // 쿠키 삭제
    cookies()
  ).delete("authorization");
  (
    await // 쿠키 삭제
    cookies()
  ).delete("memberId");
}
