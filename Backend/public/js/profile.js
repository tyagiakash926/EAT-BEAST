let edit_profile_info_btn = document.querySelector(".edit-profile-info");
let edit_profile_cancel_btn = document.querySelector("#profile-edit-cancel-btn");
let container_profile_info = document.querySelector(".container-profile-info");
  
const profileImage = document.querySelector("#imgUpload");

function myfunction(){
    preloader.style.display="none";
  }

profileImage.addEventListener("change" , async function(e){
    e.preventDefault();
    let file = profileImage.files[0];
    console.log(file);
    let formData = new FormData();
    formData.append("user" , file);
    let obj = await axios.patch("http://localhost:3000/api/users/updateprofilephoto" , formData);
    console.log(obj);
    if(obj.data.message){
        window.location.reload();
    }
})

edit_profile_info_btn.addEventListener("click",function(){
    container_profile_info.classList.add("side-aa")
})
edit_profile_cancel_btn.addEventListener("click",function(){
    container_profile_info.classList.remove("side-aa");
})


let review_edit_button = document.querySelectorAll(".my-review-section-container-1-review-edit-button");
for(let i=0;i<review_edit_button.length;i++){
    review_edit_button[i].addEventListener("click",function(){
        review_edit_button[i].classList.add("textarea-no-see");
        document.querySelectorAll(".my-review-section-container-1-review-edit-button")[i].nextElementSibling.classList.remove("textarea-no-see")
        document.querySelectorAll(".my-review-section-container-1-review-edit-button")[i].nextElementSibling.lastElementChild.lastElementChild.addEventListener("click",function(){
            review_edit_button[i].classList.remove("textarea-no-see");
        document.querySelectorAll(".my-review-section-container-1-review-edit-button")[i].nextElementSibling.classList.add("textarea-no-see")
        })
    })
}
 
