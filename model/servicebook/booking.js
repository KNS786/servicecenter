const mongoose=require('mongoose');
const order=mongoose.Schema;

const booking=new order({
    companyname:{
        type:String
    },
    companyownername:{
      type:String
    },
    orderList:{
        type:Array,
        default:[]
    }

})

module.exports=mongoose.model('bookings',booking);

