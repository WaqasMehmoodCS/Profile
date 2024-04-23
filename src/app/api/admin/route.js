import connectDB from "@/utils/ConnectDB";
import Admin from "@/utils/Models/AdminModel";
import jwt from "jsonwebtoken";

import { cookies } from "next/headers";

import { NextResponse } from "next/server";
import validator from "validator";

export async function POST(request) {
  await connectDB();
  const data = await request.json();
  const { email, password } = data;
  try {
    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }
    if (validator.isEmpty(password) || !validator.isLength(password, 5)) {
      return NextResponse.json(
        { message: "Provide Password" },
        { status: 400 }
      );
    }

    const existingAdmin = await Admin.findOne({ email });

    if (!existingAdmin) {
      return NextResponse.json(
        { message: "Invalid Credentials" },
        { status: 401 }
      );
    }
    if (password !== existingAdmin.password) {
      return NextResponse.json(
        { message: "Invalid Credentials" },
        { status: 401 }
      );
    }

    try {
      const token = jwt.sign(email, process.env.NEXT_PUBLIC_JWT_KEY);
      cookies().set({
        name: "access_token",
        value: token,
        httpOnly: true,
        path: "/",
        maxAge: 60,
      });
      return NextResponse.json({ message: "Authenticated" }, { status: 200 });
    } catch (error) {
      console.log(`cookie cant be set`);
    }
  } catch (error) {
    const response = {
      message: `Invalid Request`,
      status: 400,
    };
    return NextResponse.json(response);
  }
}
