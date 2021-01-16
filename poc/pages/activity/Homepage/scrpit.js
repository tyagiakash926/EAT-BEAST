let images=["./—Pngtree—a plate of caviar sushi_4679504.png" , "./—Pngtree—thailand food dong yin gong_3698645.png" ,"./—Pngtree—flying cup of coffee with_5057949.png","./—Pngtree—mini macarons or macaroons with_3693073.png"]
let image_changer = document.querySelector(".img-changer");
let preloader = document.getElementById("preloader");
window.setInterval(function(){
    let number = Math.floor(Math.random()*images.length);
    console.log(number)
    image_changer.setAttribute("src",images[number]);
  }, 2000);
  

function myfunction(){
  preloader.style.display="none";
}

