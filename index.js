import express from "express"
import connectDB from "./db/connect.js"
import dotenv from "dotenv"

import productRoutes from './routes/productRoutes.js'

dotenv.config()

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/api/products', productRoutes)

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
