// require(dotenv).config({path:'./env'})

import dotevn from "dotenv"

import connectDB from "./db/index.js";

dotevn.config({path:'./env'})


connectDB()

//  we can use this aproach to connect to db
/*

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
*/