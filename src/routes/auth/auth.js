import express from 'express';
import { adminRegister, forgotPassword, login, register, updateProfile } from '../../controller/authController.js';
import { forgotPasswordValidation, loginValidation, registrationValidation, updateProfileValidation } from '../../validations/authValidation.js';
let authRoute = express.Router();

// User Register
authRoute.post('/register', registrationValidation, register);

// User Login
authRoute.post("/login", loginValidation, login);

// Profile Update
authRoute.put('/update-profile/:userId', updateProfileValidation, updateProfile);

// forgot Password
authRoute.post('/forgot-password', forgotPasswordValidation, forgotPassword)

// Admin Register
authRoute.post("/admin/register", adminRegister);

export default authRoute;