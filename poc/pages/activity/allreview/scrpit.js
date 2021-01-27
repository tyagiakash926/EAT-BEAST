let alllis=document.querySelectorAll(".nav.nav-pills li");
for(let i=0;i<alllis.length;i++){
    alllis[i].addEventListener("click",function(){
        for(let j=0;j<alllis.length;j++){
            alllis[j].classList.remove("active1");
        }
        alllis[i].classList.add("active1");
    })
}