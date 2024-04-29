import mongoose, {Schema} from "mongoose"
import mongooseAggregate from "mongoose-aggregate-paginate-v2"


const videoSchema = new Schema({
      
    videoFile:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    duration:{
        type:number,
        required:true,
    },
    views:{
        type:Number,
        default:0
    },
    isPublic:{
        Boolean:true,
        default:true,
    },
    owner:{
        type:mongoose.Schema.type.ObjectId,
        ref:"user",
    }



        


},{timestamps:true})


export const video = mongoose.model("video",videoSchema)