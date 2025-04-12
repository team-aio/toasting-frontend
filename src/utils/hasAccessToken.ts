"use server";

import { cookies } from "next/headers";

export async function hasAccessToken() {
  const authorization = (await cookies()).get("authorization")?.value;
  const memberId = (await cookies()).get("memberId")?.value;

  console.log(authorization);

  if (authorization && memberId) {
    return true;
  }

  return false;
}
