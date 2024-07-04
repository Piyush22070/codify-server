import { asyncHandlers } from "../utils/asyncHandler.utils.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from 'jsonwebtoken'
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandlers(async (req,_,next)=>{

    try {
       const token = req.cookies?.accesToken || req.header("Authorization")?.replace("Bearer","")
        
       if(!token){
            throw new ApiError(401,"Unautorised request !")
       }
       const decodeToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

       const user = await User.findById(decodeToken?._id).select("-password -refreshToken")

       if(!user){
        throw new ApiError(401,"Invalid Access Token")
       }

    // adding the user to request 
       req.user = user
       next()
    } catch (error) {
        throw new ApiError(401,error?.message || "Invalid acces Token")
    }
})