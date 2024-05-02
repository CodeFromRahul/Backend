import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import {cloudinaryUpload} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";



const registerUser = asyncHandler(async(req,res)=>{
 const {fullname,email,username} = req.body
 console.log("fullName :", fullname ,"\n email :",email,"\n username:",username)
 
 if([fullname,email,username,password].some((field)=>{
    field?.trim()===""
 })){  throw new ApiError(400,"ALL field are required")}

 const existedUser = user.findOne({
    $or:[{username},{email}]
 })

 if(existedUser){
    throw new ApiError(400,"Same username")
 }



//  give a path of photo that multer posted

const avatarLocalpath = req.files?.avatar[0]?.path;
const coverImage = req.files?.coverImage[0]?.path;
 
if (!avatarLocalpath) {
    throw new ApiError(400,"Avatar s not uploaded")
    
}

const avatar = await cloudinaryUpload(avatarLocalpath)
const cover = await cloudinaryUpload(coverImage)

if (!avatarLocalpath) {
    throw new ApiError(400,"Avatar s not uploaded")
    
}

const user = await User.create({
    fullname,
    avatar:avatar.url,
    coverImage:coverImage?.url||"",
    email,
    password,
    username:username.toLowerCase(),

})

const createdUser = await user.findById(_id).select(
    "-password -refreshToken")

    if(!createdUser){
        throw new ApiError(500,"Something went wrong");
    }

    return res.status(200).json(
   new  ApiResponse(200,createdUser,"User created successfully"))
})




export {registerUser}