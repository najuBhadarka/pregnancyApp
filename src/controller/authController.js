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
        password: hashPassword,
        isAdmin: false
    });

    const token = generateToken(email);
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
        const token = generateToken(userData.email);
        refreshToken(userData.id.toString())
        res.status(200).json({ userDetails: userData, token })
    } else {
        res.status(404).json({ status: false, message: "Please enter valid credentials." })
    }
};

const adminRegister = (req, res) => {
    let { firstName, lastName, userName, DOB, contact, email, password } = req.body;
    const newAdmin = new userModel({
        firstName,
        lastName,
        userName,
        DOB,
        contact,
        email,
        password,
        isAdmin: true
    });
    const token = generateToken(email);
    refreshToken(newAdmin.id.toString())
    newAdmin.save();
    res.status(200).json({ adminDetails: newAdmin, token });
};

export { register, login, adminRegister };