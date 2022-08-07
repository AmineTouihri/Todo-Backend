
const task=require('../models/taskModel')
const getAllTasks= async(req,res,next)=>{
    
    try {
   const     tasks =await task.find({})
       if (!tasks){
           return res.status(404).json({msg:'no data was fetched!'})
       }
       res.status(201).json({tasks})
    } catch (error) {
        res.status(500).json({error})
    }
    

}

const getOneTask=async(req,res,next)=>{


    try {

        const {id:taskId}=req.params
    
        const myTask=await task.findOne({_id:taskId})
    
        if (!task){
            return res.status(404).json({msg:'id dosen t exist ...'})
        }
        res.status(200).json({myTask})

        
    } catch (error) {
        
        res.status(500).json({error})

    }
    

}


const CreateNewTask=async(req,res,next)=>{

     task.create(req.body).then((task)=>{
        res.status(201).json(task)

     }).catch((err)=>{
        console.log(err)
        res.status(401).json(err)

     })
   
}

const UpdateTask=async(req,res,next)=>{

    try {

        const {id:taskId}=req.params
    
       const myTask=await task.findOneAndUpdate({_id:taskId},req.body,{
           new:true,
           runValidators:true
       })

       if(!myTask){
           return res.status(404).json({msg:'id doesn t exist ...'})
       }
       res.status(201).json({myTask})
        
    } catch (error) {
        res.status(500).json({error})
    }
    
}

const DelteTask=async (req,res,next)=>{

    try {
        const {id:taskId}=req.params
        const DeletedTask=await task.findOneAndDelete({_id:taskId})
        
        if (!DeletedTask){
            return res.status(404).json({msg:'id doesn t exist ...'})
        }
        res.status(200).json({DeletedTask})

    } catch (error) {
        res.status(500).json({error})
    }

}







module.exports={
    getAllTasks,CreateNewTask,UpdateTask,DelteTask,getOneTask
}