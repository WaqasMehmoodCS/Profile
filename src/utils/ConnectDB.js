import mongoose from "mongoose";
import dotenv from "dotenv";
const connectDB = async () => {
  dotenv.config();
  try {
    const db = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO);

    // console.log(`DB is connected at port: ${db.connection.port}`);
    // console.log(db.connection.name);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export default connectDB;
