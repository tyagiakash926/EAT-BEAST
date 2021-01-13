let images=["../images/—Pngtree—a plate of caviar sushi_4679504.png" ,"../images/food-13619.png","../images/food-13559.png","../images/—Pngtree—flying cup of coffee with_5057949.png","../images/—Pngtree—mini macarons or macaroons with_3693073.png"]
let image_changer = document.querySelector(".img-changer");
window.setInterval(function(){
    let number = Math.floor(Math.random()*images.length);
    console.log(number)
    image_changer.setAttribute("src",images[number]);
  }, 2000);

  let names = ["Everyone" , "Develpoers" , "Fit Freaks" , "Vegans"];            

let changingText = document.querySelector("#changingtext");
let idx = 0;
let word = names[idx];
let text = "";
let isDeleting = false;

window.addEventListener("load" , function(){
    
  typeWords();

  function typeWords(){
    if(isDeleting && text.length ==0){
        idx = (idx+1) % names.length;
        word = names[idx];
        isDeleting = false;
    }

    if(text.length == word.length){
        isDeleting = true;
    }
      
    text = isDeleting ? word.substring(0 , text.length-1) : word.substring(0 , text.length+1);
    changingText.innerHTML = text;
    setTimeout(typeWords ,  text.length == word.length ? 1000 : 100);
}
})

  






