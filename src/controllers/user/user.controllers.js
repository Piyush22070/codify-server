import { ApiError } from "../../utils/ApiError.js"
import { asyncHandlers } from "../../utils/asyncHandler.utils.js"
import { User } from "../../models/user.model.js"
import { uploadOnCloudinary } from "../../utils/cloudinary.js"
import { ApiResponse } from "../../utils/ApiResponse.js"



//conrolleres containes the while Logic

const generateAccessTokenAndRefreshToken =  async (userId) =>{
    try{
        // here you have to write await
        const user = await User.findOne(userId)

        const accessToken = await user.generateAccessToken()
            

        // Changing the value oof userRefersh Token to genereated Tekoen 
        user.refreshToken = refreshToken
        await user.save({validateBeforeSave : false})

        return {accessToken,refreshToken} 

    }catch(e){
        throw new ApiError(500,'Something went wrong while Generating Acces Token and Refresh Token')
    }
}

const registerUser = asyncHandlers(async (req,res)=>{

    // geting the values from user
    const {username ,email,role,password,title,rank,sampleData,country} = req.body

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
        title,
        rank,
        country,
        sampleData
    })

    // cheching if object is created and removing the password and Refersh Token
    const createdUser = await User.findById(user._id).select(
        "-password --refreshToken"
    )
    if(!createdUser){
        throw new ApiError(500,"Something went Wrong (registring the user )!") 
    }

    // Sending the Response that User is Sucessfully Created
    return res.status(201).json(
        new ApiResponse(200,createdUser,"User Register Successfully !")
    )
})

const loginUser = asyncHandlers(  async (req,res) =>{

    // algo
    //req body = data
    //find user 
    // password check
    //tokens
    // send cookie


    const { email,username , password} = req.body
  
    if(!(username || email)){
        throw new ApiError(400,"username ,password is required")
    }

    // finding weather the user is present or not
    const user = await User.findOne({
        $or: [{ username: username }, { email: email }]
    });

    if(!user){
        throw new ApiError(404,"user does not exits !")
    }

    // checking the password is correct here i am using user User
    const ispasswordValid = await user.isPasswordCorrect(password)
    if(!ispasswordValid){
        throw new ApiError(401,"Password incorrect!")
    }

    // genetaring and accesing the token by passing the id
    const {accessToken,refreshToken} = generateAccessTokenAndRefreshToken(user._id)

    // sending as cookie
    // but we have the reffernce of not updated user so we have to update
    const loggedInUser = await User.findOne(user._id).select(" -password -refreshToken")

    const options = {
        httplOnly : true,
        secure : true
    }

     return res
     .status(200)
     .cookie("accessToken",accessToken,options)
     .cookie("refreshToken",refreshToken,options)
     .json(
        new ApiResponse(
            200,{
                user : loggedInUser ,accessToken,refreshToken
            },
            "User Logged In Succedfully"
        )
     )
})

const logOutUser = asyncHandlers(async (req,res)=>{
    // refershToken to undefeined
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set :{
                refreshToken : undefined
            }
        },{
            new : true
        }
    )
    const options = {
        httplOnly : true,
        secure : true
    }

    return res
    .status(200)
    .clearCookies("accessToken",options)
    .clearCookies("refreshToken",options)
    .json(new ApiResponse(200,{},"User Loged Out"))
})

export {registerUser,loginUser,logOutUser }