import mongoose from "mongoose";

const connectMongoDB = () => {
  try {
    const mongoDBUrl = process.env.MONGODB_URL;

    if (!mongoDBUrl) {
      throw new Error("MONGODB_URL is not defined in environment variables");
    }

    mongoose.connect(mongoDBUrl);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
