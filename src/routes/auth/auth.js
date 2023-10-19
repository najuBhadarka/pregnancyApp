import express from 'express';
import { adminRegister, login, register } from '../../controller/authController.js';
import { loginValidation, registrationValidation } from '../../validations/authValidation.js';
let authRoute = express.Router();

// User Register
authRoute.post('/register', registrationValidation, register);

// User Login
authRoute.post("/login", loginValidation, login);

// Admin Register
authRoute.post("/admin/register", adminRegister);

export default authRoute;