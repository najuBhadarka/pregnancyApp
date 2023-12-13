import express from "express";
import authenticateRoles from "../../middleware/auth.js";
import {
  deleteUser,
  userList,
  updateUserStatus,
  getUserById,
} from "../../controller/userController.js";
let userRoute = express.Router();

userRoute.get("/user-list", userList);
userRoute.put("/delete-user/:id", authenticateRoles(["admin"]), deleteUser);

userRoute.put(
  "/update-status/:id",
  authenticateRoles(["admin"]),
  updateUserStatus
);

userRoute.get(
  "/get-user-details/:id",
  authenticateRoles(["admin"]),
  getUserById
);

export default userRoute;
