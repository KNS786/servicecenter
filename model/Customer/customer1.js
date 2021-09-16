const mongoose=require('mongoose');
const customer1=mongoose.Schema;
const _id=mongoose.Types.ObjectId;

const Customer1=new customer1({
   id:{
       type:_id
   },
   fullname:{
       type:String
   },
   username:{
       type:String
   },
   phoneno:{
       type:Number
   },
   email:{
       type:String
   },
   address:{
       type:String
   },
   password:{
       type:String
   }

})

module.exports=mongoose.model('customer1',Customer1);