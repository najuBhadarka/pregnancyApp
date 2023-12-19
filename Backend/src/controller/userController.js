import userModel from "../models/user.js";

const userList = async (req, res) => {
  const { pageNo, limit } = req.query;

  // Convert pageNo and limit to integers
  const pageNumber = parseInt(pageNo);
  const pageSize = parseInt(limit); // Default limit to 10 if not provided
  let skip = 0;
  try {
    // Calculate the skip value based on the pageNo and limit
    if (pageNumber == 0) {
      skip = 0;
    } else {
      skip = pageNumber * pageSize;
    }
    const totalUserCount = await userModel.countDocuments({
      role: "user",
      isDeleted: false,
    });
    // Fetch users with pagination
    const allUsers = await userModel
      .find({
        role: "user",
        isDeleted: false,
      })
      .skip(skip)
      .limit(pageSize);

    res.status(200).json({
      status: true,
      userList: allUsers,
      totalUserCount: totalUserCount,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { isDeleted } = req.body;

    const findUserAndUpdate = await userModel.findOneAndUpdate(
      {
        _id: userId,
      },
      {
        isDeleted: isDeleted,
      }
    );
    if (!findUserAndUpdate) {
      return res.status(404).json({ status: false, message: "User not found" });
    }
    const totalUserCount = await userModel.count({
      role: "user",
      isDeleted: false,
    });
    res
      .status(200)
      .json({
        status: true,
        message: "User deleted successfully",
        totalUserCount: totalUserCount,
      });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};
const updateUserStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;
    const updateUser = await userModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        status: status,
      },
      { new: true }
    );
    res.status(200).json({ status: true, userList: updateUser });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    let userDetails = await userModel.findById({
      _id: userId,
    });
    if (!userDetails) {
      return res.status(404).json({ status: false, message: "User not found" });
    }
    res.status(200).json({ status: true, userDetails });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

export { userList, deleteUser, updateUserStatus, getUserById };
