const mongoose=require('mongoose')



const taskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'the name is required'],
        maxlength:20
    },
    terminated:{
        type:Boolean,
        default:false
    }
})



module.exports=mongoose.model('task',taskSchema)