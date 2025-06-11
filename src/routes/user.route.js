import { Router } from "express";
import { registerUser,logOutUser,loginUser } from "../controllers/user/user.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const userRouter = Router()
userRouter.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount : 1
        }
    ]),registerUser)

userRouter.route("/login").post(loginUser)

    // Secured Route
userRouter.route("/logout").post(verifyJWT,logOutUser)

export default userRouter