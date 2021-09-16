const mongoose=require('mongoose')
const MONGOURI=process.env.MONGOURI || "mongodb+srv://navani:ZpzJoRMRMmAgAF0s@cluster0.r0gut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(MONGOURI,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})

mongoose.connection.on('connected',()=>{
  console.log("MongoDb connected!");
})
mongoose.connection.on('error',()=>{
  console.log("Mongo db not connected");
})
