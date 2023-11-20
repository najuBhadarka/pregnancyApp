import jwt from "jsonwebtoken";
import refreshTokenModel from "../models/refreshTokens.js";

const generateToken = (email, role, userId) => {
  return jwt.sign(
    {
      permissions: role == "admin" ? ["admin"] : ["user"],
      user: {
        email: email,
        role: role,
        id: userId,
      },
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "3600s",
    }
  );
};

const refreshToken = async (id) => {
  let token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: "20d",
  });
  await refreshTokenModel.create({
    userId: id,
    refreshToken: token,
  });
};

export { generateToken, refreshToken };
