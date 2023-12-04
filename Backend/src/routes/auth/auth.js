import express from "express";
import {
  adminLogin,
  forgotPassword,
  login,
  register,
  updateProfile,
  userProfile,
} from "../../controller/authController.js";
import {
  forgotPasswordValidation,
  loginValidation,
  registrationValidation,
  updateProfileValidation,
} from "../../validations/authValidation.js";
import authenticateRoles from "../../middleware/auth.js";
let authRoute = express.Router();

// User Register
authRoute.post("/register", registrationValidation, register);

// User Login
authRoute.post("/login", loginValidation, login);

authRoute.get("/user-profile", authenticateRoles(["user", "admin"]), userProfile);

// Profile Update
authRoute.put(
  "/update-profile/:userId",
  authenticateRoles(["user", "admin"]),
  updateProfileValidation,
  updateProfile
);

// forgot Password
authRoute.post("/forgot-password", forgotPasswordValidation, forgotPassword);

// Admin Register
authRoute.post("/admin/login", adminLogin);

export default authRoute;
