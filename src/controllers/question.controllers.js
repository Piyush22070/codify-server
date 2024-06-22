import { question } from "./demoData.js";
import { asyncHandlers } from "../utils/asyncHandler.utils.js";


const questions = asyncHandlers( async (req,res)=>{
    res.status(200).json(question)
})

export {questions}