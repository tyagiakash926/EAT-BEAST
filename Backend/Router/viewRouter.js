const express = require("express");
const { getDemoPage, getHomePage, getLoginPage, getPlansPage } = require("../Controller/viewController");
const viewRouter = express.Router();

viewRouter.route("").get(getDemoPage);
viewRouter.route("/home").get(getHomePage);
viewRouter.route("/login").get(getLoginPage);
viewRouter.route("/plans").get(getPlansPage);

module.exports = viewRouter;