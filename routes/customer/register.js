const express=require('express');
const router=express.Router();
const customer=require('../../model/Customer/customer1')

router.post('/signup',async function(req,res){
    //check the user collection if already user present or not
    let {username,address,phoneno,fullname,email,password}=req.body;
    if(!email ||!fullname ||!address ||!phoneno || !password || !username || !password ) res.status(404).json({'msg':'please fill all the inputs'})
    let PresentUser=await customer.find({'email':email,'password':password});
    if(PresentUser.length > 0){
       res.status(200).json({msg:'Please login,Your already registered '})
    }
    else{
       //store new user in db
       let newUser=new customer({
           'username':username,
           'fullname':fullname,
           'phoneno':phoneno,
           'email':email,
           'address':address,
           'password':password
       })
       await newUser.save();
       return res.status(200).json({msg:'successfully signup '})
    }

})

module.exports=router;