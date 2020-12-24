const userModel = require("../Model/usersModel");
var jwt = require('jsonwebtoken');
const { SECRET_KEY } = require("../config/secret");

async function signup(req,res){
    try{
        // console.log(req.body);
        let user = req.body;
        let newUser =await userModel.create({
            name:user.name,
            email:user.email,
            password:user.password,
            confirmPassword:user.confirmPassword,
            role:user.role,
        });
        console.log(newUser);
        res.json({
            message: "Succesfully Signed up !!",
            data: newUser,
          });
    }
    catch(error){
        res.json({
            message: "Failed to sign up !!",
            error,
          });
    }
}
async function login(req,res){
    try{
        let {email,password} = req.body;
        let loggedInUser = await userModel.find({email});
        if(loggedInUser.length){
            let user = loggedInUser[0];
            if(user.password==password){
                // token dena h 
                const token = jwt.sign({id: user["_id"]},SECRET_KEY)
                res.json({
                    message:"LoggedIn successfully",
                    data:loggedInUser[0],
                    token
                })
            }else{
                res.json({
                    message:"Email and password didn't match"
                })
            }
        }else{
            res.json({
                message:"signUp first!!"
            })
        }
    }
    catch(error){

    }

}

async function forgetpassword(req,res){
    try{
        // email nikal do
        let {email} = req.body;
        console.log(email);
        let user = await userModel.findOne({email:email});
        console.log(user);
        if(user){
          // pwToken
          // timeset
          let token = user.createResetToken();
          console.log(token);
          await user.save({validateBeforeSave:false});
          // console.log(updatedUser);
            let resetLink = `http://localhost:3000/api/users/resetpassword/${token}`;
          res.json({
            message:"Reset Link is sent to email",
            resetLink,
          })
        }
        else{
          res.status(404).json({
            message:"User Not Found ! Please Sign up first !"
          })
        }
      }
      catch(error){
        res.json({
          message:"Failed to forget Password",
          error
        })
      }
}

async function resetpassword(req,res){
    try{
        const token = req.params.token;
        const {password , confirmPassword} = req.body;
        const user = await userModel.findOne({
          pwToken:token,
          tokenTime:{  $gt : Date.now() }
        })
        console.log(user);
        console.log(password , confirmPassword);
        if(user){
          user.resetPasswordHandler(password , confirmPassword);
          await user.save();
          res.status(200).json({
            message:"Password Reset Succesfull !!!"
          })
        }
        else{
          res.status(200).json({
            message:"Password Reset Link Expired !!!"
          })
        }
      }
      catch(error){
        res.status(404).json({
          message:"Failed to reset password",
          error
        })
      }
}

async function protectRoute(req,res,next){
    // res.json({
    //     data:req.headers
    // })
    try{
        const token = req.headers.authorization.split(" ").pop();
        console.log(token);
        const payload = jwt.verify(token,SECRET_KEY);
        console.log(payload)
        if(payload){
            req.id = payload.id;
            next();
        }else{
            res.json({
                message:"please Login"
            })
        }
    }
    catch(error){
        res.json({
            message:"please Login!!",
            error
        })
    }
}

async function isAuthorised(req,res,next){
    try{
        let id = req.id;
        let user = await userModel.findById(id);
        console.log(user);
        if(user.role == "admin"){
          next();
        }else{
          res.status(200).json({
            message:"You dont have admin rights !!!"
          })
        }
      }
      catch(error){
        resjson({
          message:"Failed to Authorize",
          error
        })
      }
}
module.exports.signup= signup;
module.exports.login= login;
module.exports.protectRoute = protectRoute;
module.exports.isAuthorised = isAuthorised;
module.exports.forgetpassword = forgetpassword;
module.exports.resetpassword = resetpassword; 