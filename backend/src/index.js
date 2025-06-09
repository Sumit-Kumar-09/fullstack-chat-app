import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
//import { app } from "socket.io";
import { app, server } from "./lib/socket.js";

dotenv.config();
// Initialize dotenv to load environment variables from .env file
// This code initializes an Express application, loads environment variables from a .env file, sets up authentication routes, and starts the server on a specified port.
//const app = express();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
// Middleware to parse incoming JSON requests
// This middleware is used to parse incoming requests with JSON payloads
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
server.listen(PORT, () => {
  console.log("Server is running on port :" + PORT);
  connectDB();
});
