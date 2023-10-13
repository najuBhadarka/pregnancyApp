import express from 'express';
import authRoute from './auth/auth.js';
import questionnairesRoute from './questionnaires/questionnaires.js';
let route = express.Router();

// Routes for Authentication -----------
route.use("/auth", authRoute);

// Routes for Questions Book -----------
route.use("/questionbook", questionnairesRoute);

export default route;