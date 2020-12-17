const express = require("express");
const app = express();



app.get("/api/plans" , function(req,res){
    res.json({
        data:"All plans"
    })
})

app.listen(3000 , function(){
    console.log("Server started at prt 3000");
})