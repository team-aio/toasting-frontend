"use server";

import { auth } from "@/auth";
import { cookies } from "next/headers";

export async function sessionValid() {
  const authorization = (await cookies()).get("authorization")?.value;
  console.log(authorization);

  const session = auth();

  if (!session) {
    return false;
  }
  return {
    authorization: authorization,
    session: session,
    valid: true,
  };
}
