import express from "express";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json())

// ROUTES
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// error handler middleware
app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`API listening on PORT ${PORT} `);
    });
  } catch (error) {
    console.log(error);
  }
};

// CALLING FUNCTION TO LISTEN TO SERVER
start();

// Export the Express API
module.exports = app;
