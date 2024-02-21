import { NextResponse } from "next/server";
import validator from "validator";

//POSt request
export async function POST(request) {
  const data = await request.json();
  const { email, message } = data;
  try {
    // Check valid email address
    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check message is empty
    if (!message) {
      return NextResponse.json(
        { message: "Message is required" },
        { status: 400 }
      );
    }
    //return data as valid
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.error();
  }
}