const express = require("express");
const { signup, login, protectRoute,forgetpassword,resetpassword } = require("../Controller/authController");
const userRouter = express.Router();
const {getAllUser,getUserById,updateUserById,deleteUserById,createUser} = require("../Controller/userController");
// userRouter.route("").get(getAllUser).post(createUser);
userRouter.route("").get(protectRoute,getUserById).patch(protectRoute,updateUserById).delete(protectRoute , deleteUserById);
userRouter.route("/forgetpassword").post(forgetpassword);
userRouter.route("/resetpassword/:token").patch(resetpassword);
userRouter.route("/signup").post(signup);
userRouter.route("/login").post(login);
module.exports = userRouter;