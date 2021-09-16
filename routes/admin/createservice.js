const express=require('express');
const router=express.Router();
const admin_services=require('../../model/Admin/admin_services');

router.post('/createservice',async function(req,res){
     let {username,companyName,companyAddress,openingTime,closingTime,workingdays,AvailableServices}=req.body;

     if(!username) return res.status(404).json({msg:'something wrong '})
     let query={'username':username,services:[]}
     let params={};
     let info={
         "companyName":companyName,
         "companyAddress":companyAddress,
         "openingTime":openingTime,
         "closingTime":closingTime,
         "workingdays":workingdays
     }
     params['$push']={services:{$each:[info,{"AvailableServices":AvailableServices}]}}
     await admin_services.updateOne(query,params,{upsert:true });
     let val =await admin_services.find({})
     return res.status(200).json({msg:val});


})

module.exports=router;