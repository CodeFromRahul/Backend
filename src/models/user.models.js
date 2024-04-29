import { watch } from "fs";
import mongoose ,{Schema, mongo} from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
       
    },
    fullname:{
        type:String,
        required:true,
        index:true,
        trim:true,
    },

    avatar:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
    },

    watchHistory:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"video",
   } ],

   password:{
    type:String,
    required:[true,"password is required"],

},

   refressToken:{
    type:String
   }

   
       


       





},{timestamps:true})


export const user = mongoose.model("user",userSchema)