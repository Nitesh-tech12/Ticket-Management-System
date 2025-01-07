const mongoose = require('mongoose')

const Createticketschema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique: true,
        required: true
    },
    title:{
        type:String,
        required: true,
    },
    product:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        require:false

    }

},{timestamps:true})

const Create = mongoose.model('Create', Createticketschema)


module.exports = Create