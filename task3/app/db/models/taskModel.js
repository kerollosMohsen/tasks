const mongoose = require("mongoose")
const schema=mongoose.Schema
const taskSchema = new schema({
    title:{
        type:String,
        required:true,
        trim:true, 
        unique:true

    },
    content:{
        type:String,
        required:true,
        trim:true, 
    },
    duedate:{
        type:Date,
        required:true
    },
    Status:{
        type:Boolean,
        default:false,
        // required:true

    }
})
const Task=mongoose.model("Task",taskSchema)
module.exports=Task