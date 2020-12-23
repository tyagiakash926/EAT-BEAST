const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.cvhjx.mongodb.net/test?retryWrites=true&w=majority",
    {useNewUrlParser: true , useUnifiedTopology: true})
  .then((db)=>{
    console.log("connected to db!!!");
  });

  let planSchema = new mongoose.Schema({
      name:{
          type:String,
          required:true,
          maxlength:[40,"length is greater than 40"]
      },
      duration:{
          type:Number,
          required:true,
      },
      price:{
          type:Number,
          required:true,
      },
      discount:{
        type:Number,
        validate:{
            validator:function(){
                return this.discount < this.price;
            },
            message:"discount is more than price!!"
        }
      }
  })

  const planModel = mongoose.model("planscollection",planSchema);

  module.exports = planModel;