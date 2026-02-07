import express from "express";
import {
  registerUser,
  loginUser,
  getMe,
} from "../controllers/authController.js";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  registerValidator,
  loginValidator,
} from "../validators/authValidator.js";

const router = express.Router();

router.post(
  "/register",
  registerValidator,
  registerUser
);

router.post(
  "/login",
  loginValidator,
  loginUser
);

router.get("/me", authMiddleware, getMe);

export default router;
