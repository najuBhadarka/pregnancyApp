import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import userModel from "../models/user.js";
import { generateToken, refreshToken } from "../utils/generateToken.js";
import sendMail from "../utils/sendmail.js";

const register = (req, res) => {
  try {
    let { firstName, lastName, userName, DOB, contact, email, password } =
      req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array().map((ele) => ({ name: ele.path, msg: ele.msg })),
      });
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    const newUser = new userModel({
      firstName,
      lastName,
      userName,
      DOB,
      contact,
      email,
      password: hashPassword,
    });

    const token = generateToken(email, newUser.role, newUser.id);
    refreshToken(newUser.id.toString());
    newUser.save();
    res.status(200).json({ userDetails: newUser, token });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const login = async (req, res) => {
  try {
    let { userName, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array().map((ele) => ({ name: ele.path, msg: ele.msg })),
      });
    }
    let userData = await userModel.findOne({
      userName: userName,
    });
    if(userData.status == "inactive"){
      return res.status(403).json({status: false, message: "You don't have permission to access, Please contact admin"})
    }
    if (userData && bcrypt.compareSync(password, userData.password)) {
      const token = generateToken(userData.email, userData.role, userData.id);
      refreshToken(userData.id.toString());
      res.status(200).json({ userDetails: userData, token });
    } else {
      res
        .status(404)
        .json({ status: false, message: "Please enter valid credentials." });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const adminLogin = async(req, res) => {
  try {
    let { userName, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array().map((ele) => ({ name: ele.path, msg: ele.msg })),
      });
    }
    let userData = await userModel.findOne({
      userName: userName,
    });
    if (userData != null && userData.role == "admin" && userData && bcrypt.compareSync(password, userData.password)) {
      const token = generateToken(userData.email, userData.role, userData.id);
      refreshToken(userData.id.toString());
      res.status(200).json({ userDetails: userData, token });
    } else {
      res
        .status(404)
        .json({ status: false, message: "Please enter valid credentials." });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const updateFields = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array().map((ele) => ({ name: ele.path, msg: ele.msg })),
      });
    }
    const updatedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      { $set: updateFields },
      { new: true, maxTimeMS: 20000 }
    );

    if (!updatedUser) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    return res.status(200).json({
      status: true,
      updatedUser: updatedUser,
      message: "Profile updated successfully.",
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req?.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array().map((ele) => ({ name: ele.path, msg: ele.msg })),
      });
    }
    const userData = await userModel.findOne({ email });
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }
    const mailOptions = {
      from: "dilipsuthar@gmail.com",
      to: email,
      subject: "Link on the below to reset your password",
      html: `<a href='www.google.com'>Click on the link to reset password<a/>`,
    };
    sendMail(mailOptions);
    res
      .status(200)
      .json({ status: true, message: "Password reset email sent" });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const userProfile = async (req, res) => {
  try {
    let { user } = req.user;
    if(user){
      let userData = await userModel.findById(user.id);
      res.status(200).json({status: true, data: userData})
    } else {
      res.status(400).json({status: false, message: "Something went wrong"})
    }
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};
export { register, login, adminLogin, updateProfile, forgotPassword, userProfile };
