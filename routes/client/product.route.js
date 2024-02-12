const express= require("express")
const router=express.Router();
const controller=require("../../controllers/client/product.controller")

// router.get("/",(req,res)=>{
//     res.render("client/pages/products/index")
// });
router.get("/",controller.index);

module.exports = router