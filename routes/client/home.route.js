const express= require("express")
const router=express.Router();
const controller=require("../../controllers/client/home.controller")

// router.get("/",(req,res)=>{
//     res.render("client/pages/home/index")
// });
router.get("/",controller.index)

module.exports = router