const mongoose=require('mongoose');
const admin=mongoose.Schema;
const _id=mongoose.Types.ObjectId;

const Admin=new admin({
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
   password:{
       type:String
   }

})

module.exports=mongoose.model('admin',Admin);