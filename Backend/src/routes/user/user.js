import express from "express";
import authenticateRoles from "../../middleware/auth.js";
import { deleteUser, userList, updateUserStatus } from "../../controller/userController.js";
let userRoute = express.Router();

userRoute.get("/user-list", authenticateRoles(['admin']), userList);
userRoute.put("/delete-user/:id", authenticateRoles(['admin']), deleteUser);

userRoute.put("/update-status/:id", authenticateRoles(['admin']), updateUserStatus)

export default userRoute;
