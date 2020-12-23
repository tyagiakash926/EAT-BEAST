const express = require("express");
const { signup, login, protectRoute } = require("../Controller/authController");
const userRouter = express.Router();
const {getAllUser,getUserById,updateUserById,deleteUserById,createUser} = require("../Controller/userController");
// userRouter.route("").get(getAllUser).post(createUser);
userRouter.route("").get(protectRoute,getUserById).patch(protectRoute,updateUserById).delete(protectRoute , deleteUserById);
userRouter.route("/signup").post(signup);
userRouter.route("/login").post(login);
module.exports = userRouter;