let edit_profile_info_btn = document.querySelector(".edit-profile-info");
let edit_profile_cancel_btn = document.querySelector("#profile-edit-cancel-btn");
let container_profile_info = document.querySelector(".container-profile-info");

edit_profile_info_btn.addEventListener("click",function(){
    container_profile_info.classList.add("side-aa")
})
edit_profile_cancel_btn.addEventListener("click",function(){
    container_profile_info.classList.remove("side-aa");
})

let review_edit_button = document.querySelectorAll(".my-review-section-container-1-review-edit-button");
for(let i=0;i<review_edit_button.length;i++){
    review_edit_button[i].addEventListener("click",function(){
        review_edit_button[i].classList.add("hide");
        document.querySelectorAll(".my-review-section-container-1-review-edit-button")[i].nextElementSibling.classList.remove("hide")
        document.querySelectorAll(".my-review-section-container-1-review-edit-button")[i].nextElementSibling.lastElementChild.lastElementChild.addEventListener("click",function(){
            review_edit_button[i].classList.remove("hide");
        document.querySelectorAll(".my-review-section-container-1-review-edit-button")[i].nextElementSibling.classList.add("hide")
        })
    })
}
 