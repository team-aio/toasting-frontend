"use server";

import { auth } from "@/auth";
import { cookies } from "next/headers";

export async function sessionValid() {
  const authorization = (await cookies()).get("authorization")?.value;
  const memberId = (await cookies()).get("memberId")?.value;

  console.log(authorization);

  const session = auth();

  if (!session) {
    return false;
  }
  return {
    authorization: authorization,
    memberId:memberId,
    session: session,
    valid: true,
  };
}
