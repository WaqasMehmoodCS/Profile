import connectDB from "@/utils/ConnectDB";
import User from "@/utils/Models";

import { NextResponse } from "next/server";
import validator from "validator";

//POSt request
export async function POST(request) {
  await connectDB();
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

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      existingUser.message.push(message);
      const updatedUser = await existingUser.save();
      return NextResponse.json({message:'Message has been sent again'}, { status: 200 });
    }
    const user = await User.create({ email, message });
    return NextResponse.json({message:'New Message has been sent'}, { status: 200 });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.error();
  }
}
