const mongoose= require("mongoose");
const registerSchema = new mongoose.Schema({
   
    email:{
        type:String
    },
    password:{
        type:String
    }
})

module.exports= mongoose.model("Register",registerSchema)