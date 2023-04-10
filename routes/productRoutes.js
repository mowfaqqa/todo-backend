import express from "express";
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";
const router = express.Router();

// #description Fetch all products
// #route GET /api/products
router.route('/'),get(getProducts);

// description - Fetch single products
// method & route - GET /api/products/:id
router.route('/:id'),get(getProductById);
export default router;
