import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
// This code defines a function connectDB that connects to a MongoDB database using Mongoose. It uses async/await syntax to handle the asynchronous connection process. If the connection is successful, it logs the host of the connected database. If there is an error during the connection, it catches the error and logs the error message. This function can be called in other parts of the application to establish a connection to the database.
