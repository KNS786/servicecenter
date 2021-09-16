const express=require('express');
const router=express.Router();
const booking = require('../../model/servicebook/booking')
const customer=require('../../model/Customer/customer1')
//user make new order 

router.post('/booking',async function(req,res){
    let {username,companyname,requiredService,deliveryDate}=req.body;
    let query={companyname:companyname,orderList:[]}
    let params={};
    let user=await customer.find({username:username});
    console.log(user);
    let orderuser={
        username:user[0].username,
        email:user[0].email,
        phoneno:user[0].phoneno,
        address:user[0].address,
        requiredService:requiredService,
        deliveryDate:deliveryDate
    }
   params['$push']={orderList:{$each:[orderuser]}};
   await booking.updateOne(query,params,{upsert:true});
   return res.status(200).json({msg:'make order successfully'})

})
router.get('/allbooking',async function(req,res){
    let all =await booking.find({});
    res.status(200).json({res : all})
})

module.exports=router;