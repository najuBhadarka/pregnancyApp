import { validationResult } from "express-validator";
import bcrypt from 'bcrypt'
import userModel from "../models/user.js";
import { generateToken, refreshToken } from "../utils/generateToken.js";

const register = (req, res) => {
    let { firstName, lastName, userName, DOB, contact, email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array().map((ele) => ({ name: ele.path, msg: ele.msg })) });
    }
    const hashPassword = bcrypt.hashSync(password, 10)
    const newUser = new userModel({
        firstName,
        lastName,
        userName,
        DOB,
        contact,
        email,
        password: hashPassword
    });

    const token = generateToken(email, newUser.role);
    refreshToken(newUser.id.toString())
    newUser.save();
    res.status(200).json({ userDetails: newUser, token });
};

const login = async (req, res) => {
    let { userName, password } = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array().map((ele) => ({ name: ele.path, msg: ele.msg })) });
    }
    let userData = await userModel.findOne({
        userName: userName
    })
    if (userData && bcrypt.compareSync(password, userData.password)) {
        const token = generateToken(userData.email, userData.role);
        refreshToken(userData.id.toString())
        res.status(200).json({ userDetails: userData, token })
    } else {
        res.status(404).json({ status: false, message: "Please enter valid credentials." })
    }
};

const adminRegister = (req, res) => {
    let { firstName, lastName, userName, DOB, contact, email, password } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10)
    const newAdmin = new userModel({
        firstName,
        lastName,
        userName,
        DOB,
        contact,
        email,
        password: hashPassword,
        role: 'admin'
    });
    const token = generateToken(email, newAdmin.role);
    refreshToken(newAdmin.id.toString())
    newAdmin.save();
    res.status(200).json({ adminDetails: newAdmin, token });
};

const updateProfile = async (req, res) => {
    const { userId } = req.params;
    const updateFields = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array().map((ele) => ({ name: ele.path, msg: ele.msg })) });
    }
    try {
        const updatedUser = await userModel.findOneAndUpdate(
            { _id: userId },
            { $set: updateFields },
            { new: true, maxTimeMS: 20000 }
        );

        if (!updatedUser) {
            return res.status(404).json({ status: false, message: 'User not found' });
        }

        return res.status(200).json({ status: true, updatedUser: updatedUser, message: 'Profile updated successfully.' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}

const forgotPassword = async (req, res) => {
    const { email } = req?.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array().map((ele) => ({ name: ele.path, msg: ele.msg })) });
    }
    try {
        const userData = await userModel.findOne({ email });
        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }
        const token = generateToken(email, userData.role);
        refreshToken(userData.id.toString())
        await userData.save();
        // sendPasswordResetEmail(userData.email, token);
        res.status(200).json({ status: true, message: 'Password reset email sent', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}


export {
    register,
    login,
    adminRegister,
    updateProfile,
    forgotPassword
};