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

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Use findOneAndDelete to delete the specific question by its ID
    const deletedUser = await userModel.findByIdAndDelete({ _id: userId });
    if (!deletedUser) {
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
