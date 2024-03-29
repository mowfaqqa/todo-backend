import express from "express";
import protect from "../middleware/authMiddleware.js";
import { addOrderItems, getOrderByID, updateOrderToPaid } from "../controllers/orderController.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderByID);
router.route("/:id/paid").put(protect, updateOrderToPaid);

export default router;
