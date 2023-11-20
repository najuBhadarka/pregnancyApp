import userModel from "../models/user.js";

const userList = async (req, res) => {
  try {
    let allUsers = await userModel.find({
     role: "user"
    })
    res.status(200).json({ status: true, userList: allUsers });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

export { userList };
