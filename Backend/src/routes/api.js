import express from "express";
import authRoute from "./auth/auth.js";
import questionnairesRoute from "./questionnaires/questionnaires.js";
import userRoute from "./user/user.js";
let route = express.Router();

// Routes for Authentication -----------
route.use("/auth", authRoute);

// Routes for Questions Book -----------
route.use("/questionbook", questionnairesRoute);

route.use("/user", userRoute);


export default route;
