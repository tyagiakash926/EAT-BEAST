let ChangepwBtn = document.querySelector("#change-password-btn");
let pw = document.querySelector(".password-reset");
let cpw = document.querySelector(".Password-cfrm");

ChangepwBtn.addEventListener("click",async function(e){
    e.preventDefault();
    try{
        e.preventDefault(); // prevent page refresh

        if(pw.value && cpw){
            let token = document.URL.split("/");
            token = token[token.length-1];
            // console.log(token);
            let obj = await axios.patch( `http://localhost:3000/api/users/resetpassword/${token}` , {password:pw.value , confirmPassword:cpw.value});
            console.log(obj);
            // if(obj.data.data){
            //     window.location.href = "/";
            // }else{
            //     message.innerHTML = obj.data.message;
            // }
        }
    }
    catch(error){
        console.log(error);
    }
})