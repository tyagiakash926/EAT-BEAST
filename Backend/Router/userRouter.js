const express = require("express")
const userRouter = express.Router();
const {getAllUser,getUserById,updateUserById,deleteUserById,createUser} = require("../Controller/userController");
userRouter.route("").get(getAllUser).post(createUser);
userRouter.route("/:id").get(getUserById).patch(updateUserById).delete(deleteUserById);
module.exports = userRouter;