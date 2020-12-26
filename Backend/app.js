const express = require("express");
const planRouter = require("./Router/planRouter");
const userRouter  = require("./Router/userRouter");
const { json } = require("express");
const path = require('path');
const join = require("path");
const viewRouter = require("./Router/viewRouter");

const app = express();

// it tracks incoming request and see if there is data in the request => the data will be fed in req.body
app.use(express.json());
app.use(express.static("public"));
app.set("view engine" , "pug");
app.set("views", path.join(__dirname,"view"));
app.use("/api/plans" , planRouter);
app.use("/api/users" , userRouter);
app.use("" , viewRouter);

// app.httpMethod( appRoute , cb function( request , response   )      )


app.listen(3000, function () {
  console.log("server started at port 3000");
});