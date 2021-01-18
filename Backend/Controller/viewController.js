const planModel = require("../Model/plansModel");

async function getHomePage(req,res){
    let plans = await planModel.find();
    plans = plans.splice(0,3);
    console.log("gethomepage" , req.name)
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
    console.log("getProfile page" , req.name);
    console.log("getProfile page" , req.user)
    res.render("profile.pug" , {user:req.user,name:req.name});
}
async function getReviewPage(req,res){
    try{
        let plans = await planModel.find();
        // console.log(plans);
        res.render("reviewpage.pug" ,{name:req.name , plans:plans});
    }
    catch(error){
        console.log(error);
    } 
}


module.exports.getHomePage = getHomePage;
module.exports.getLoginPage = getLoginPage;
module.exports.getPlansPage = getPlansPage;
module.exports.getForgetPasswordPage = getForgetPasswordPage;
module.exports.getResetPasswordPage = getResetPasswordPage;
module.exports.getProfilePage = getProfilePage;
module.exports.getReviewPage= getReviewPage;