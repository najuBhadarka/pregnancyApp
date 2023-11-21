import userModel from "../models/user.js";

const userList = async (req, res) => {
  try {
    let allUsers = await userModel.find({
      role: "user",
      isDeleted: false
    })
    res.status(200).json({ status: true, userList: allUsers });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { isDeleted } = req.body;

    const findUserAndUpdate = await userModel.findOneAndUpdate({
      _id: userId,
    },{
      isDeleted: isDeleted
    });
    if (!findUserAndUpdate) {
      return res
        .status(404)
        .json({ status: false, message: "User not found" });
    }
    res
      .status(200)
      .json({ status: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

export { userList, deleteUser };
