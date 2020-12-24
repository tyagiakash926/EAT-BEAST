const express = require("express");
const app = express();
const nodemailer = require("nodemailer");


async function sendEmail(){
    try {
        // object =>  info
        const transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "4b9fafa617b215",
              pass: "048a4ca92ad966"
            },
        });
    
        await transporter.sendMail({
          from: "sushant.beriwal@pepcoding.com", // sender address
          to: "abcd@test.com", // list of receivers
          subject: "Hello", // Subject line
          text: "Hello I am testing node mailer !!", // plain text body
          html: "<b>Hello I am testing this stuff !!!</b>", // html body
        });
      } catch (error) {
        return error;
      }
}

sendEmail().then(function(){
    console.log("Email Sent !!!");
})
.catch(function(error){
    console.log("Email not sent !!!!");
});

app.listen(5500, function () {
    console.log("Server started at 5500 !!");
  });