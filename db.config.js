import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
async function connectDB() {
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${process.env.DB_NAME}`
    );
    console.log(`Db connect on port`);
    return connectInstance;
  } catch (error) {
    console.log("FAIL TO  cCONNECT!!!", error);
    throw new Error("Failed to connect db ");
  }
}

export default connectDB;
