import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  console.log(`response form loguto`);
  const cookie = cookies().delete("access_token");
  console.log(cookie);
  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_VERCEL_URL}/admin`, {
    status: 307,
  });
}
