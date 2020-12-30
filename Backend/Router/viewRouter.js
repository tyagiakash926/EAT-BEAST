const express = require("express");
const { isLoggedIn ,logout } = require("../Controller/authController");
const { getDemoPage, getHomePage, getLoginPage, getPlansPage ,getForgetPasswordPage, getResetPasswordPage } = require("../Controller/viewController");
const viewRouter = express.Router();
viewRouter.use(isLoggedIn);
viewRouter.route("").get(getHomePage);
viewRouter.route("/logout").get(logout);
viewRouter.route("/login").get(getLoginPage);
viewRouter.route("/plans").get(getPlansPage);
viewRouter.route("/resetpassword/:token").get(getResetPasswordPage);
viewRouter.route("/forgetpassword").get(getForgetPasswordPage);

module.exports = viewRouter;