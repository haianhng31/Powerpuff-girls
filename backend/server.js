import express from "express";
import connectDB from "./connection.js";

// initialize app and set middleware
const app = express()
app.use(express.json());

// connect to MongoDB
const PORT = process.env.PORT || 3000;

// Routes


// Start server
const startServer = async () => {
    await connectDB();
    
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();