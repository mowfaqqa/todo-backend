import express from "express";
import {
  authUser
} from "../controllers/userController.js";
const router = express.Router();

// #description Fetch all products
// #route GET /api/products
router.post('/login', authUser);

export default router;
