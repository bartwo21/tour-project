// **POST /api/users** - Register a user
// **POST /api/users/auth✶✶ - Authenticate a user and get token
// **POST /api/users/logout** - Logout user and clear cookie
// **GET /api/users/profile** - Get user profile
// **PUT /api/users/profile** - Update profile

import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
