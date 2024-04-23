import mongoose from "mongoose";

const { Schema, model } = mongoose;

const adminSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

let Admin;
try {
  // Try to get the existing model if it's already compiled
  Admin = model("Admin");
} catch (error) {
  // If the model doesn't exist, create and compile it
  Admin = model("Admin", adminSchema);
}

export default Admin;
