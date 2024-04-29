
import mongoose ,{Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


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

// hooks

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password,10)
    next()
})

// custom method
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)

}

userSchema.methods.generateAccessToken = function(){
  return  jwt.sign({
        email:this.email,
        username:this.username,
        _id:this._id,
        fullname:this.fullname,
    },
   process.env.ACCESS_TOKEN_SECRET,
   {
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
   }     
)
}
userSchema.methods.generateRefressToken = function(){
    return jwt.sign({
       
        _id:this._id,
        

    },
    process.env.REFRESS_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESS_TOKEN_EXPIRY
    }

)

}


   
       


       







export const user = mongoose.model("user",userSchema)