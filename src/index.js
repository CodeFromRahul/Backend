import mongoose from "mongoose"
import { DB_NAME } from "./constants";

import express from "express"
const app = express();



;( async()=>{
    try {

await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
app.on("Error",(error)=>{
console.log("Error",error);
throw error;
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is listining at port ${process.env.PORT}`);
})
        
    } catch (error) {
        console.error("Your error",error)
    }
})()