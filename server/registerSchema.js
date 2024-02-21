const mongoose = require("mongoose")

const register = new mongoose.Schema({
    firstName:{type:String,required:true},
    email:{type:String,unique:true,lowercase: true, required: [true, "can't be blank"] },
    password:{type:String,required:true}
})

const UserRegister = mongoose.model('UserRegister',register)


module.exports = UserRegister