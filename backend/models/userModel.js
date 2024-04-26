const mongoose = require("mongoose");

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }, 
    first_name: {
        type:String,
        required: true
        
    },
    last_name: {
        type:String,
        required:true
    }, 
    role : {
        type:String,
        required:true
    }
})

const user = mongoose.model("user",newSchema)

module.exports=user