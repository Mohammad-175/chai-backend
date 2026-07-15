import mongoose from "mongoose";
import dns from "node:dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);

    console.log(
      `✅ MongoDB Connected: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("❌ MongoDB Connection FAILED:", error.message);
    process.exit(1);
  }
};

export default connectDB;