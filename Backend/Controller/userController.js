const plans = require("../Model/plansModel.json");
const users = require("../Model/usersModel.json");
const {v4 : uuidv4} = require("uuid");
const path = require('path');
const fs = require("fs");
const { join } = require("path");

function getAllUser(req,res){
    if(users.length){
      res.json({
        message:"Got all users successfully",
        data:users,
      })
    } else{
      res.json({
        message:"no user found"
      })
    }
  }
  function createUser(req,res){
    let user = req.body;
    user.id = uuidv4();
    users.push(user);
    let PlansPath = path.join(__dirname,'..','Model','usersModel.json');
    fs.writeFileSync(PlansPath,JSON.stringify(users));
    res.json({
      message:"ADDED succesfully",
      data:users,
    })
  }
  function getUserById(req,res){
    let {id} =req.params;
    let filteredUser = users.filter(function(user){
      return user.id==id;
    }) 
    if(filteredUser.length){
      res.json({
        message:"user found",
        data:filteredUser
      })
    }else{
      res.json({
        message:"user not found"
      })
    }
  }
  function updateUserById(req,res){
    let {id} = req.params;
    let updateObj = req.body;
    let filteredUser = users.filter(function(user){
      return user.id==id;
    })
    if(filteredUser.length){
      let user = filteredUser[0];
      for(key in updateObj){
        user[key] = updateObj[key];
      } 
      let PlansPath = path.join(__dirname,'..','Model','usersModel.json');
      fs.writeFileSync(PlansPath,JSON.stringify(users));
      res.json({
        message:"update succesfully"
      })
    }else{
      res.json({
        message:"no user found"
      })
    }
  }
  function deleteUserById(req,res){
    let {id} = req.params;
    let filteredUsers = users.filter(function(user){
      return user.id != id;
    })
    if(filteredUsers.length==users.length){
      res.json({
        message:"USer not found",
      })
    }else{
      let PlansPath = path.join(__dirname,'..','Model','usersModel.json');
      fs.writeFileSync(PlansPath,JSON.stringify(filteredUsers));
      res.json({
        message:"delete sucessfully",
        data:filteredUsers
      })
    }
  }

  module.exports.getAllUser = getAllUser;
  module.exports.createUser = createUser;
  module.exports.getUserById = getUserById;
  module.exports.updateUserById = updateUserById;
  module.exports.deleteUserById = deleteUserById;

//   {
//       getAlluser:getAllUser,
//       createUser:createUser   
//   }