import express from "express";
import authenticateRoles from "../../middleware/auth.js";
import { userList } from "../../controller/userController.js";
let userRoute = express.Router();

// User Register
userRoute.get("/user-list", authenticateRoles(['admin']), userList);

export default userRoute;
