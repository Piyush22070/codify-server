import { singleQuestion } from "../controllers/question/singlequestion.controller.js";
import { Router } from "express";

const singleQuestionRouter = Router()
singleQuestionRouter.route("/:index").get(singleQuestion)

export default singleQuestionRouter