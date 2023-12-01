import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'active'
  },
  role: {
    type: String,
    default: "admin",
  },
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
