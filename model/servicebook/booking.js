const mongoose=require('mongoose');
const order=mongoose.Schema;

const booking=new order({
    companyname:{
        type:String
    },
    orderList:{
        type:Array,
        default:[]
    }

})

module.exports=mongoose.model('booking',booking);

