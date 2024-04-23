import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(request) {
  console.log(`middleware running`);
  const token = cookies().get("access_token")?.value;
  if (!token) {
    // No token, redirect to login or return unauthorized
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_VERCEL_URL}/admin`); // or return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_KEY);
    // You can attach user information to the request or continue
    // request.user = decoded; // for example

    return NextResponse.next(); // Continue to the requested resource
  } catch (error) {
    // Invalid token, redirect to login or return unauthorized
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_VERCEL_URL}/admin`); // or return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
}

export const config = {
  //   matcher: [`${process.env.NEXT_PUBLIC_VERCEL_URL}/admin/(.*)`], // Define where to apply the middleware
  matcher: [`/admin/(.*)`], // Define where to apply the middleware
};
