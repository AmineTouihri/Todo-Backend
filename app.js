console.log('Task Manager App')

const connectDb=require('./db/connect')
const express=require('express')
const taskRoute=require('./routes/task')
require('dotenv').config()

const app=express()
app.use(express.static('./public'))


const port=3000;
app.use(express.json())

app.use('/hachkaton',taskRoute)

const start=()=>{
    
    

        connectDb(process.env.MANGO_URI).then(()=>{
            app.listen(port,()=>console.log(`server listening on port ${port}`));
        }).catch(error=>console.log(error))
        
    
}
start()






