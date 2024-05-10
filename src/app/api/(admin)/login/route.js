import connectDB from "@/utils/ConnectDB"; // Connect to the database
import Admin from "@/utils/Models/AdminModel"; // Import the Admin model
import { cookies } from "next/headers"; // Utility for setting/getting cookies in Next.js
import { NextResponse } from "next/server"; // Provides HTTP response helpers
import validator from "validator"; // Library for validating data (e.g., emails)
import bcrypt from "bcrypt";

// Asynchronous POST request handler
export async function POST(request) {
  // Connect to the database
  await connectDB();

  // Retrieve and parse the JSON data from the request
  const data = await request.json();
  const { email, password } = data; // Destructure email and password from request data

  try {
    // Validate the email
    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { message: "Invalid email address" }, // Error message
        { status: 400 } // HTTP status code for bad request
      );
    }

    // Validate the password (at least 6 characters)
    if (validator.isEmpty(password) || !validator.isLength(password, 6)) {
      return NextResponse.json(
        { message: "Provide Password" }, // Error message
        { status: 400 } // HTTP status code for bad request
      );
    }

    // Check if an admin with the given email exists
    const existingAdmin = await Admin.findOne({ email });
    //check provided password
    const decryptedPassword = await bcrypt.compare(
      password,
      existingAdmin.password
    );
    if (!existingAdmin || !decryptedPassword) {
      // If no admin exists or password not matched, return an error response
      return NextResponse.json(
        { message: "Invalid Credentials" }, // Error message
        { status: 401 } // HTTP status code for unauthorized
      );
    }
    cookies().set({
      name: "access_token",
      value: existingAdmin.token,
      httpOnly: true,
      path: "/",
      // maxAge: 60,
    });
    // Return a success response
    return NextResponse.json({ message: "Authenticated" }, { status: 200 });
  } catch (error) {
    // Return a generic error response for server errors
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
