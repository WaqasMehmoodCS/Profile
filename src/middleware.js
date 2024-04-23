import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware() {
  const verifyToken = (token) => {
    try {
      if (token === process.env.NEXT_PUBLIC_JWT_TOKEN) {
        return true;
      } else {
        console.log(`token didnt matched`);
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const token = cookies().get("access_token")?.value;
  try {
    if (!token) {
      // No token, redirect to login or return unauthorized
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_VERCEL_URL}/admin`
      );
    }
    const tokenMatchResult = verifyToken(token);
    if (!tokenMatchResult) {
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_VERCEL_URL}/admin`
      );
    } else {
      return NextResponse.next();
    }
  } catch (error) {
    console.log(error);
  }
}
export const config = {
  matcher: [`/admin/(.*)`], // Define where to apply the middleware
};
