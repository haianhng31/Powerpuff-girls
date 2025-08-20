import express from "express";
import connectDB from "./connection.js";
import articlesRouter from "./routes/articleRoutes.js";
import locationRouter from "./routes/locationRoutes.js";
import cors from "cors";

// initialize app and set middleware
const app = express();
app.use(cors());

// connect to MongoDB
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/articles", articlesRouter);
app.use("/api/locations", locationRouter); 

// Test route to check server
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start server
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
