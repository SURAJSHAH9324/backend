// require('dotenv').config
import dotenv from "dotenv"
import connectDb from "./db/index.js"
dotenv.config({
    path:"./env"
})
connectDb();







/*
import express from "express";
const app = express();
( async() =>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       app.on(error,(error) =>{
        console.log(error);
        throw error
       })       
    } catch (error) {
        console.error("error",error);
        throw error
    }
})()*/