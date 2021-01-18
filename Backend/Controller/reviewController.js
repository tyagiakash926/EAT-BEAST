const userModel = require("../Model/usersModel");


async function createReview(req,res){
    try{
        let {id} = req;
        // console.log(req.body);
        let reviewObj = req.body;
        let user = await userModel.findById(id);
        console.log(user);
        // let array_of_review = user.reviewPlans;
        let newReview = {
            planId :reviewObj.planId,
            message :reviewObj.message,
            rating:reviewObj.rating,
            bookedOn:new Date() 
        }
        user.reviewPlans.push(newReview)
        await user.save({validateBeforeSave:false});
        res.json({
            message:"create review succesfully"
        })
    }
    catch(error){
        console.log(error);
        res.json({
            message:"cant create review",
            error:error
        })
    }

}

async function updateReviewById(req,res){
    try{
        let userId = req.id;
        let {message} = req.body;
        let {reviewId} = req.params;
        let user = await userModel.findById(userId);
        // console.log("user",reviewId);
        let Submittedreview = user.reviewPlans;
        let matchedReview = Submittedreview.filter((review)=>{
            return review["_id"] == reviewId;
        })
        matchedReview[0].message = message;
        // console.log(matchedReview);
        await user.save({validateBeforeSave:false});
        res.json({
            message:"Update review",
        })
    }
    catch(error){
        res.json({
            message:"Failed to update review",
            error
          })
    }   
}
async function deleteReviewById(req,res){
    try{
        let userId = req.id;
        let {reviewId} = req.params;
        let user = await userModel.findById(userId);
        // console.log("user",reviewId);
        let Submittedreview = user.reviewPlans;
        let matchedReview = Submittedreview.filter((review)=>{
            return review["_id"] != reviewId;
        })
        user.reviewPlans = matchedReview;
        await user.save({validateBeforeSave:false});
        res.json({
            message:"delete review",
        })
    }
    catch(error){
        res.json({
            message:"Failed to delete review",
            error
          })
    }   
}



module.exports.createReview = createReview;
module.exports.updateReviewById = updateReviewById;
module.exports.deleteReviewById = deleteReviewById;

