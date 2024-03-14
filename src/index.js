import dotenv from "dotenv"
import mongoose from "mongoose";
import {DB_NAME} from "./constant.js";
import express  from "express";
dotenv.config({
    path:'./env'
})
const app=express();

(async()=>{
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on('error',(error)=>{console.log('Error',error); 
        throw error;});
        app.listen(process.env.PORT,()=>{
            console.log(`App is running on ${process.env.PORT}`)
        })
       

    }catch(error){
        console.log("MongoDB connection failed ERROR",error)
        throw err
    }
})().then(()=>{
app.listen(process.env.PORT || 8000,()=>{
    console.log(`server is runnig on${process.env.PORT}`)
})
}).catch((err)=>{
    console.log("MongoDB connection failed !!!!",err)
})