import { uploadQuestions } from "../controllers/question/uploadQuestions.controller.js";
import { Router } from "express";

const uploadQuestionsRouter = Router()
uploadQuestionsRouter.route("/upload-questions").post(uploadQuestions)
export default uploadQuestionsRouter; 