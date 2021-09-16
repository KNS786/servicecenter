const express=require('express');
const router=express.Router();
const admin=require('../../model/Admin/admin')

router.get('/alluser',async function(req,res){
    //for only view in login user only
    if(!req.body.username) res.status(400).json({msg:'please login'})
    let users=await admin.find({});
    return res.status(200).json({user:users});
})
module.exports=router;