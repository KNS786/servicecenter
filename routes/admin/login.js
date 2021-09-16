const express=require('express');
const router=express.Router();
const admin=require('../../model/Admin/admin')

router.post('/login',async function(req,res){
    //check the user collection if already user present or not
    let {phoneno,username,email,password}=req.body;
    let PresentUser=await admin.find({$or:[{'email':email,'password':password},{'username':username,'password':password},{'phoneno':phoneno,'password':password}]})

    if(PresentUser.length > 0){
       return res.status(200).json({msg:'your successfully login'})
    }
    else{
        return res.status(404).json({msg:'please signup '})
    }

})

module.exports=router;