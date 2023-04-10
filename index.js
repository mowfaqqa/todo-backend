import express from "express"
import connectDB from "./db/connect.js"
import dotenv from "dotenv"

dotenv.config()

const app = express();

const PORT = process.env.PORT || 5000;

// // ROUTES

// app.get("/api/products", (req, res) => {
//   res.send("Products")
// });
// app.get("/api/products/:id", (req, res) => {
//   const product = products.find(p => p._id === req.params.id)
//   res.send("Product")
// });

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
