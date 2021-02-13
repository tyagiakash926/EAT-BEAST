const express = require("express");
const { isLoggedIn ,logout } = require("../Controller/authController");
const { getDemoPage, getHomePage, getLoginPage, getPlansPage,getDetailsPage,getPaymentHistoryPage ,getForgetPasswordPage,getReviewPage, getResetPasswordPage ,getProfilePage} = require("../Controller/viewController");
const viewRouter = express.Router();
viewRouter.use(isLoggedIn);
viewRouter.route("").get(getHomePage);
viewRouter.route("/paymenthistory").get(getPaymentHistoryPage);
viewRouter.route("/details").get(getDetailsPage);
viewRouter.route("/reviews").get(getReviewPage);
viewRouter.route("/logout").get(logout);
viewRouter.route("/login").get(getLoginPage);
viewRouter.route("/plans").get(getPlansPage);
viewRouter.route("/resetpassword/:token").get(getResetPasswordPage);
viewRouter.route("/forgetpassword").get(getForgetPasswordPage);
viewRouter.route("/profile").get(getProfilePage);
module.exports = viewRouter;