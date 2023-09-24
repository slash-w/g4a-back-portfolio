import User from "../../models/Users.js";

export default async (req, res, next) => {
  try {
    // Retrieve all users from the "users" collection
    const users = await User.find();

    // Send the list of users as a response
    return res.status(200).json({
      success: true,
      message: "All users retrieved",
      users: users,
    });
  } catch (error) {
    console.error("An error occurred in getUserInfo controller:", error);
    next(error);
  }
};
