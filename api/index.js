import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
})

app.listen(3000, ()=>{
    console.log("Server running on 3000 port")
})
