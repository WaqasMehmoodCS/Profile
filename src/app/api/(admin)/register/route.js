import connectDB from "@/utils/ConnectDB";
import Admin from "@/utils/Models/AdminModel";
import { NextResponse } from "next/server";
import validator from "validator";
import { hash } from "bcrypt";
import { sign } from "jsonwebtoken";

const assignToken = (email) => {
  try {
    const token = sign(email, process.env.NEXT_PUBLIC_JWT_KEY);
    return token;
  } catch (error) {
    console.log(`${error.message} token can't be assigned`);
  }
};

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    const { name, email, password, confirmPassword } = data;
    const existingAdmin = await Admin.find({ email });
    if (existingAdmin.length > 0) {
      //   console.log(`admin found ${existingAdmin}`);
      return NextResponse.json(
        { message: `admin already registered` },
        { status: 409 }
      );
    }
    const validate = validator.isEmail(email);
    if (!validate || password !== confirmPassword) {
      return NextResponse.json(
        { message: `Invalid Credentials or provided passwords not matched` },
        { status: 401 }
      );
    }
    try {
      const hashPassword = await hash(password, 12);
      const token = assignToken(email);
      const addingAdmin = await Admin.create({
        name,
        email,
        password: hashPassword,
        token,
      });
      return NextResponse.json(
        { message: `New Admin Registered against ID ${addingAdmin?._id}` },
        { status: 201 }
      );
    } catch (error) {
      console.log(`error while adding admin`);
    }
  } catch (error) {
    return NextResponse.error();
  }
}
