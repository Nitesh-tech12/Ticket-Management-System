const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true  
     },

    email:{
        type:String,
        unique: true,
        required: true
    },
    password:{
        type:String,
        required: true,
    },
     confirmpassword:{
        type:String,
        required: true,
    },
},{timestamps:true})

const Register = mongoose.model('Register', registerSchema)


module.exports = Register