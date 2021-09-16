const express=require('express');
const router=express.Router();
const admin=require('../../model/Admin/admin')

router.post('/signup',async function(req,res){
    //check the user collection if already user present or not
    let {username,phoneno,fullname,email,password}=req.body;
    if(!email ||!fullname ||!phoneno || !password || !username || !password ) res.status(404).json({'msg':'please fill all the inputs'})
    let PresentUser=await admin.find({'email':email,'password':password});
    if(PresentUser.length > 0){
        console.log(PresentUser);
       res.status(200).json({msg:'Please login,Your already registered '})
    }
    else{
       //store new user in db
       let newUser=new admin({
           'username':username,
           'fullname':fullname,
           'phoneno':phoneno,
           'email':email,
           'password':password
       })
       await newUser.save();
       return res.status(200).json({msg:'successfully signup '})
    }

})

module.exports=router;