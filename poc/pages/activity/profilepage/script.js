let edit_profile_info_btn = document.querySelector(".edit-profile-info");
let edit_profile_cancel_btn = document.querySelector("#profile-edit-cancel-btn");
let container_profile_info = document.querySelector(".container-profile-info");

edit_profile_info_btn.addEventListener("click",function(){
    container_profile_info.classList.add("side-aa")
})
edit_profile_cancel_btn.addEventListener("click",function(){
    container_profile_info.classList.remove("side-aa");
})