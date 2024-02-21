import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO);

    console.log(`DB is connected at port: ${db.connection.port}`);
    console.log(db.connection.name);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export default connectDB;
