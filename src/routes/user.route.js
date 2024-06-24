import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";

const userRouter = Router()
userRouter.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount : 1
        }
    ]),registerUser)

export default userRouter