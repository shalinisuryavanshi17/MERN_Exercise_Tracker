const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
require('dotenv').config()
const app=express()
const port=process.env.PORT||5000
app.use(cors())
app.use(express.json())
const dbUri=process.env.ATLAS_URI
mongoose.connect(dbUri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true},function(err){
    if(err)
    {
        console.log("error connecting to db")
    }
    console.log("connection established successfully!!!!!!");
})
const exercisesRouter=require('./routes/exercises')
const usersRouter=require('./routes/users')
app.use('/exercises',exercisesRouter)
app.use('/users',usersRouter)
app.listen(port,()=>{
    console.log("listening to the port "+port)
})