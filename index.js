const express=require('express');
const PORT=process.env.PORT || 5000;
const bodyParser=require('body-parser');
const app=express();

//bodyparser
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//db connection 
require('./model/connection');


//routes
//Admin
app.use('/admin',require('./routes/admin/register'));
app.use('/admin',require('./routes/admin/login'));
app.use('/',require('./routes/admin/alladmin'));
app.use('/admin',require('./routes/admin/createservice'))

//customer
app.use('/customer',require('./routes/customer/register'));
app.use('/customer',require('./routes/customer/login'));
app.use('/customer',require('./routes/customer/availableservices'));
app.use('/customer',require('./routes/customer/servicebooking'));



app.listen(PORT,function(){
    console.log("App running ");
})
