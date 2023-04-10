import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// GET ALL PRODUCTS CONTROLLER
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

// GET ALL SINGLE PRODUCT CONTROLLER
const getProductById = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductById };
