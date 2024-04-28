import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware() {
  console.log(`middleware running`);
}

export const config = {
  matcher: [`/admin/(.*)`],
};
