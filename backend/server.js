import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./connection.js";
import articlesRouter from "./routes/articleRoutes.js";
import providerRouter from "./routes/providerRoutes.js";
import locationRouter from "./routes/locationRoutes.js"
import cors from "cors";

// initialize app and set middleware
const app = express();
app.use(cors());
app.use(express.json());

// connect to MongoDB
const PORT = process.env.PORT || 8000;

// Routes
app.use("/api/articles", articlesRouter);
app.use("/api/providers", providerRouter);
app.use("/api/locations", locationRouter)

// Start server
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
