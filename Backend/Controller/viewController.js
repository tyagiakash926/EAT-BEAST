const planModel = require("../Model/plansModel");

async function getHomePage(req,res){
    let plans = await planModel.find();
    plans = plans.splice(0,3);
    res.render("homepage.pug",{name:req.name , plans:plans});
}
function getLoginPage(req,res){
    res.render("loginpage.pug",{name:req.name});
}
async function getPlansPage(req,res){
    try{
        let plans = await planModel.find();
        // console.log(plans);
        res.render("plans.pug" ,{name:req.name , plans:plans});
    }
    catch(error){
        console.log(error);
    } 
}
function getForgetPasswordPage(req,res){
    res.render("forgetpassword.pug",{name:req.name});
}

function getResetPasswordPage(req,res){
    res.render("resetpassword.pug",{name:req.name});
}
function getProfilePage(req,res){
    res.render("profile.pug");
}
module.exports.getHomePage = getHomePage;
module.exports.getLoginPage = getLoginPage;
module.exports.getPlansPage = getPlansPage;
module.exports.getForgetPasswordPage = getForgetPasswordPage;
module.exports.getResetPasswordPage = getResetPasswordPage;
module.exports.getProfilePage = getProfilePage;