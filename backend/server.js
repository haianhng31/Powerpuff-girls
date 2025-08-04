import express from "express";
import connectDB from "./connection.js";
import articlesRouter from "./routes/articleRoutes.js";

// initialize app and set middleware
const app = express();

// connect to MongoDB
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use("/api/articles", articlesRouter);

// Start server
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
