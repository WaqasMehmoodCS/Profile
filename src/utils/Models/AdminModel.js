import mongoose from "mongoose";
import validator from "validator"; // For additional validations

const { Schema, model } = mongoose;

const adminSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2, // Add a minimum length constraint
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (email) => validator.isEmail(email), // Ensure valid email
        message: (props) => `${props.value} is not a valid email address`,
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Add a minimum length constraint
    },
    token: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Include timestamps
);

let Admin;
try {
  Admin = model("Admin"); // Try to get the existing model
} catch (error) {
  Admin = model("Admin", adminSchema); // Compile a new model if it doesn't exist
}

export default Admin; // Export the model
