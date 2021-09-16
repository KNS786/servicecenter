const mongoose=require('mongoose');
const services=mongoose.Schema;

const admin_services=new services({
   username:{
       type:String
   },
   services:{
       type:Array,
       default:[]
   }
     

})

module.exports=mongoose.model('admin_services',admin_services);