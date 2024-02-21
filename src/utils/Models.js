import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    message: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

let User;

try {
  // Try to get the existing model if it's already compiled
  User = model("User");
} catch (error) {
  // If the model doesn't exist, create and compile it
  User = model("User", userSchema);
}

export default User;
