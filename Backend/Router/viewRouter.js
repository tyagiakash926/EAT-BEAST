const express = require("express");
const { getDemoPage, getHomePage, getLoginPage, getPlansPage ,getForgetPasswordPage } = require("../Controller/viewController");
const viewRouter = express.Router();

viewRouter.route("").get(getDemoPage);
viewRouter.route("/home").get(getHomePage);
viewRouter.route("/login").get(getLoginPage);
viewRouter.route("/plans").get(getPlansPage);
viewRouter.route("/forgetpassword").get(getForgetPasswordPage);

module.exports = viewRouter;