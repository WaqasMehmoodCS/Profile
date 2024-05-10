import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware() {
  try {
    const browsertoken = cookies().get("access_token")?.value;
    if (!browsertoken) {
      console.log(`no token`);
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_VERCEL_URL}/admin`,
        { status: 307 }
      );
    } else {
      console.log(`token found`);
      return NextResponse.next();
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export const config = {
  matcher: ["/admin/(.*)"],
};
