import mongoose from "mongoose";
const { Schema, model } = mongoose;

const resumeSchema = new Schema(
  {
    size: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastModified: {
      type: Date,
    },
  },
  { timestamps: true } // Include timestamps
);

let Resume;
try {
  Resume = model("Resume"); // Try to get the existing model
} catch (error) {
  Resume = model("Resume", resumeSchema); // Compile a new model if it doesn't exist
}

export default Resume; // Export the model
