const plans = require("../Model/plansModel.json");
const users = require("../Model/usersModel.json");
const path = require('path');
const {v4 : uuidv4} = require("uuid");
const fs = require("fs");
const { join } = require("path");
function getAllPlan(req,res){
    if(plans.length){
      res.json({
        message:"Succesfully recied plans",
        data:plans,
      });
    } else{
      res.json({
        message:"No plans available",
      });
    }
  }
function createPlan(req,res){
    let plan = req.body;
    plan.id = uuidv4();
    plans.push(plan);
    let PlansPath = path.join(__dirname,'..','Model','plansModel.json');
    fs.writeFileSync(PlansPath,JSON.stringify(plans));
    res.json({
      message:"plan created",
      data:plans,
    });
  }
  function getPlanById(req,res){
    let { id } = req.params;
    let filteredPlans = plans.filter(function(plan){
     return plan.id==id;
    });
    if(filteredPlans.length){
      res.json({
        message:"succesfully",
        data:filteredPlans[0],
      })
    } else{
      res.json({
        message:"NO plan found",
      })
    }
  }
  function updatePlanById(req,res){
    let {id} = req.params;
    let updateObj = req.body;
    let filteredPlan = plans.filter(function(plan){
      return plan.id==id;
    })
    if(filteredPlan.length){
      let plan = filteredPlan[0];
      for(key in updateObj){
        plan[key] = updateObj[key];
      }
      let PlansPath = path.join(__dirname,'..','Model','plansModel.json');
      fs.writeFileSync(PlansPath,JSON.stringify(plans));
      res.json({
        message:"update suceessfully"
      });
    } else{
      res.json({
        message:"plan not found!!",
      })
    }
  }
  function deletePlanById(req,res){
    let {id }= req.params;
    let filteredPlans = plans.filter(function(plan){
      return plan.id != id;
    });
    if(filteredPlans.length==plans.length){
      res.json({
        message:"plan not found",
      })
    }else{
        let PlansPath = path.join(__dirname,'..','Model','plansModel.json');
      fs.writeFileSync(PlansPath,JSON.stringify(filteredPlans));
      res.json({
        message:"plan deleted sucessfully",
        data:filteredPlans
      })
    }
  }

  module.exports.getAllPlan=getAllPlan;
  module.exports.createPlan=createPlan;
  module.exports.getPlanById=getPlanById;
  module.exports.updatePlanById=updatePlanById;
  module.exports.deletePlanById=deletePlanById;

//   {
//       getAlluser:getAllUser,
//       createUser:createUser   
//   }
