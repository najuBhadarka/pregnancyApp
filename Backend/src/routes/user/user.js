import express from "express";
import authenticateRoles from "../../middleware/auth.js";
import { deleteUser, userList } from "../../controller/userController.js";
let userRoute = express.Router();

// User Register
userRoute.get("/user-list", authenticateRoles(['admin']), userList);
userRoute.put("/delete-user/:id", authenticateRoles(['admin']), deleteUser);

export default userRoute;
