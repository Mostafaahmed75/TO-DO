const mongoose=require('mongoose') 

const TodoSchema=new mongoose.Schema({

    todo:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    status:{
        type:Number,
        required:false,
    },
    hours:{
        type:Number,
        required:false,
    },
    minutes:{
        type:Number,
        required:false,
    },
    seconds:{
        type:Number,
        required:false,
    },
    timeobj:{
        type:Number,
        required:false,
    }
});
module.exports=new mongoose.model("Todo",TodoSchema);