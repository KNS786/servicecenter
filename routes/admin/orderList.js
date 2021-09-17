const express=require('express');
const router=express.Router();
const booking = require('../../model/servicebook/booking')

router.get('/orderlist',async function(req,res){
    let username=req.body.username ;
    if(!username) return res.status(400).json({msg:'Need authentication '})
    let getAllOrder=await booking.find({companyownername:username});
    if(getAllOrder.length > 0){
       return res.status(200).json({orderList:getAllOrder})
    }else{
        return res.status(200).json({msg : 'please register!'})
    }

})

module.exports=router;