import { ApiError } from "../utils/ApiError.js"
import { asyncHandlers } from "../utils/asyncHandler.utils.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"


//conrolleres containes the while Logic
const registerUser = asyncHandlers(async (req,res)=>{

    // geting the values from user
    const {username ,email,role,password} = req.body

    // validating the data
    // normal zindgi
    // if(fullName === ""){
    //     throw new ApiError(400,"Full Name is Required")
    // }

    // mentos zindgi
    if([username ,email,role,password ].some((filed)=> filed?.trim() === "")){
        throw new ApiError(400,"All field are Required")
    }


    // checking if already present there ?
    const existedUser  =  await User.findOne({
        $or :[{username},{email}]
    })
    if(existedUser){
        throw new ApiError(409,"User with email or username already exists")
    }

    //cheching for userImages and Avatar
    const avattarLocalPath = req.files?.avatar[0]?.path
    // avatar is mandtory
    if(!avattarLocalPath){
        throw new ApiError(400,"Avatar is required")
    }

    const avatar= await uploadOnCloudinary(avattarLocalPath)

    if(!avatar){
        throw new ApiError(400,"Avatar file is Required")
    }

    // creating thr object and pushing in the database
    const user = await User.create({
        username : username.toLowerCase(),
        role,
        avatar : avatar.url,
        email,
        password,
    })

    // cheching if object is created and removing the password and Refersh Token
    const createdUser = await User.findById(user._id).select(
        "-password"
    )
    if(!createdUser){
        throw new ApiError(500,"Something went Wrong (registring the user )!") 
    }

    // Sending the Response that User is Sucessfully Created
    return res.status(201).json(
        new ApiResponse(200,createdUser,"User Register Successfully !")
    )
})

export {registerUser}