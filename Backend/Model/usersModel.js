const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.cvhjx.mongodb.net/test?retryWrites=true&w=majority",
    {useNewUrlParser: true , useUnifiedTopology: true})
  .then((db)=>{
    console.log("connected to db!!!");
  });

  let userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        minlength:[6,"password mustbe greater than 6 chracters"],
        required:true,
    },
    confirmPassword:{
      type:String,
      minlength:[6,"password mustbe greater than 6 chracters"],
      required:true,
      validate:{
          validator:function(){
              return this.confirmPassword == this.password;
          },
          message:"password didn't matched"
      }
    },
    role:{
        type:String,
        enum:["admin","user","delivery boy","restaurant owner"],
        default:"user"
    }
})
//it will called before create 
userSchema.pre("save" , function(){
    this.confirmPassword = undefined;
  })
const userModel = mongoose.model("userscollection",userSchema);

module.exports = userModel;