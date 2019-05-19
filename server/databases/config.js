const mongoose = require('mongoose');
const mongo_uri = process.env.MONGO_URL;
mongoose.connect(mongo_uri,(err)=>{
    if(err){
        throw err;
    }else{
        console.log(`Successfully connected to ${mongo_uri}`);
    }
});