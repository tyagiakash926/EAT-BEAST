const planModel = require("../Model/plansModel");

function getDemoPage(req,res){
    // res.render("demo.pug")
    res.render("base.pug");
}
function getHomePage(req,res){
    res.render("homepage.pug");
}
function getLoginPage(req,res){
    res.render("loginpage.pug");
}
async function getPlansPage(req,res){
    try{
        let plans = await planModel.find();
        // console.log(plans);
        res.render("plans.pug" ,{plans:plans});
    }
    catch(error){
        console.log(error);
    } 
}
function getForgetPasswordPage(req,res){
    res.render("forgetpassword.pug");
}
module.exports.getDemoPage = getDemoPage;
module.exports.getHomePage = getHomePage;
module.exports.getLoginPage = getLoginPage;
module.exports.getPlansPage = getPlansPage;
module.exports.getForgetPasswordPage = getForgetPasswordPage;