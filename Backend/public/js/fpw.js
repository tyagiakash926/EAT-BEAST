let resetB = document.querySelector(".ghost-r");
let forgetB = document.querySelector(".ghost-f");
let bcontainer = document.querySelector(".bcontainer");


resetB.addEventListener("click",function(){
    bcontainer.classList.add("active");
})
forgetB.addEventListener("click",function(){
    bcontainer.classList.remove("active");
})