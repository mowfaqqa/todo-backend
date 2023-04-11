import express from "express";
import { authUser } from "../controllers/userController.js";
import {
  getUserProfile,
  registerUser,
} from "../controllers/userControllers.js";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();


// #Create new user
// #POST Method
router.route("/").post(registerUser);

// #Sign In
// #POST Method
router.post("/login", authUser);

// #Fetch user details
// #GET MEthod
router.route("/profile").get(protect, getUserProfile);

export default router;
