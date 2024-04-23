import connectDB from "@/utils/ConnectDB"; // Connect to the database
import Admin from "@/utils/Models/AdminModel"; // Import the Admin model
import jwt from "jsonwebtoken"; // Library for working with JSON Web Tokens
import { cookies } from "next/headers"; // Utility for setting/getting cookies in Next.js
import { NextResponse } from "next/server"; // Provides HTTP response helpers
import validator from "validator"; // Library for validating data (e.g., emails)

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

    if (!existingAdmin) {
      // If no admin exists, return an error response
      return NextResponse.json(
        { message: "Invalid Credentials" }, // Error message
        { status: 401 } // HTTP status code for unauthorized
      );
    }

    // Check if the provided password matches the existing admin's password
    if (password !== existingAdmin.password) {
      return NextResponse.json(
        { message: "Invalid Credentials" }, // Error message
        { status: 401 } // HTTP status code for unauthorized
      );
    }

    // Try to create a JSON Web Token (JWT) and set it as a cookie
    try {
      const token = jwt.sign(email, process.env.NEXT_PUBLIC_JWT_KEY); // Sign JWT with a key
      cookies().set({
        name: "access_token", // Name of the cookie
        value: token, // Value of the cookie (JWT)
        httpOnly: true, // Prevents client-side scripts from accessing the cookie
        path: "/", // Cookie is valid across the whole domain
        // maxAge: 60, // Cookie will expire in 60*5 seconds
      });

      // Return a success response
      return NextResponse.json({ message: "Authenticated" }, { status: 200 });
    } catch (error) {
      console.log(`cookie cant be set`); // Log if there's an issue setting the cookie
    }
  } catch (error) {
    console.log(error); // Log unexpected errors

    // Return a generic error response for server errors
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
