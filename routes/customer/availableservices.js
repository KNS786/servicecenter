const express=require('express');
const router=express.Router();
const services=require('../../model/Admin/admin_services');

//first need authentication for login user
router.get('/allservices',async function(req,res){
    let showservices=await services.find({});
    res.status(200).json({services:showservices});

})

module.exports=router;