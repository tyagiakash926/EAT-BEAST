const express = require("express");
const fs = require("fs");
const plans = require("./db/plans.json");
const users = require("./db/users.json");
const { v4: uuidv4 } = require("uuid");
const { json } = require("express");

const app = express();

// it tracks incoming request and see if there is data in the request => the data will be fed in req.body
app.use(express.json());

// app.httpMethod( appRoute , cb function( request , response   )      )
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.cvhjx.mongodb.net/test?retryWrites=true&w=majority",
  {useNewUrlParser: true , useUnifiedTopology: true})
.then((db)=>{
  console.log(db);
});

let planSchema = new mongoose.Schema({
  name:String,
  price:Number,
});

const planModel = mongoose.model("plancollection" , planSchema);

planModel.create({
  name:"Non vegan",
  price:50,
}).then( (plan) => {
  console.log(plan);
})
.catch((error)=>{
  console.log(error);
})



// get all user
app.get("/api/users",function(req,res){
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
})

// create user
app.post("/api/users", function(req,res){
  let user = req.body;
  user.id = uuidv4();
  users.push(user);
  fs.writeFileSync("./db/users.json",JSON.stringify(users));
  res.json({
    message:"ADDED succesfully",
    data:users,
  })
})

//get by id
app.get("/api/users/:id",function(req,res){
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
})

// update user
app.patch("/api/users/:id",function(req,res){
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
    fs.writeFileSync("./db/users.json",JSON.stringify(users));
    res.json({
      message:"update succesfully"
    })
  }else{
    res.json({
      message:"no user found"
    })
  }
})

//delte user
app.delete("/api/users/:id",function(req,res){
  let {id} = req.params;
  let filteredUsers = users.filter(function(user){
    return user.id != id;
  })
  if(filteredUsers.length==users.length){
    res.json({
      message:"USer not found",
    })
  }else{
    fs.writeFileSync("./db/users.json",JSON.stringify(filteredUsers));
    res.json({
      message:"delete sucessfully",
      data:filteredUsers
    })
  }
})


// get all plans
app.get("/api/plans" , function(req,res){
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
});


// create a plan
app.post("/api/plans",function(req,res){
  let plan = req.body;
  plan.id = uuidv4();
  plans.push(plan);
  fs.writeFileSync("./db/plans.json",JSON.stringify(plans));
  res.json({
    message:"plan created",
    data:plans,
  });
});

// get plan by id
app.get("/api/plans/:id",function(req,res){
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
})
// update a plan
app.patch("/api/plans/:id",function(req,res){
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
    fs.writeFileSync("./db/plans.json",JSON.stringify(plans));
    res.json({
      message:"update suceessfully"
    });
  } else{
    res.json({
      message:"plan not found!!",
    })
  }
})
// delete a plan by id
app.delete("/api/plans/:id",function(req,res){
  let {id }= req.params;
  let filteredPlans = plans.filter(function(plan){
    return plan.id != id;
  });
  if(filteredPlans.length==plans.length){
    res.json({
      message:"plan not found",
    })
  }else{
    fs.writeFileSync("./db/plans.json",JSON.stringify(filteredPlans));
    res.json({
      message:"plan deleted sucessfully",
      data:filteredPlans
    })
  }

})

app.listen(3000, function () {
  console.log("server started at port 3000");
});