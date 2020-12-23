const express = require("express")
const planRouter = express.Router();
const {createPlan , getAllPlan,getPlanById,updatePlanById,deletePlanById} = require("../Controller/planController");
planRouter.route("").get(getAllPlan).post(createPlan);
planRouter.route("/:id").get(getPlanById).patch(updatePlanById).delete(deletePlanById);


module.exports = planRouter;