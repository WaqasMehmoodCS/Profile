import mongoose from "mongoose";

const { Schema, model } = mongoose;

// Define your schemas
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

let User;
let Admin;

// Properly handle overwriting issues
try {
  User = model("User"); // Reuse if it exists
} catch (error) {
  if (error.name === "MissingSchemaError") {
    User = model("User", userSchema); // Define if it doesn't
  } else {
    throw error; // Handle other errors
  }
}

try {
  Admin = model("Admin");
} catch (error) {
  if (error.name === "MissingSchemaError") {
    Admin = model("Admin", adminSchema);
  } else {
    throw error;
  }
}

export { User, Admin }; // Export each model individually

// import mongoose from "mongoose";

// const { Schema, model } = mongoose;

// const userSchema = new Schema(
//   {
//     email: {
//       type: String,
//       required: true,
//     },
//     message: {
//       type: Array,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );
// const adminSchema = new Schema(
//   {
//     email: {
//       type: String,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// let User;
// let Admin;

// try {
//   // Try to get the existing model if it's already compiled
//   User = model("User");
//   Admin = model("Admin");
// } catch (error) {
//   // If the model doesn't exist, create and compile it
//   User = model("User", userSchema);
//   Admin = model("Admin", adminSchema);
// }

// export default { User, Admin };