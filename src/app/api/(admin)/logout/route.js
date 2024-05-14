import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  cookies().delete("access_token");
  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_VERCEL_URL}/admin`, {
    status: 307,
  });
}
