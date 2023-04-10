import express from "express";
import Product from "../models/productModel";
import asyncHandler from "express-async-handler";

const router = express.Router();

// #description Fetch all products
// #route GET /api/products
router.get(
  "/api/products",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
  })
);

// #description Fetch single products
// #route GET /api/products/:id

router.get(
  "/api/products/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({
        message: "Product not found",
      });
    }
    res.send(product);
  })
);

export default router;
