import { questions } from "../controllers/question/questions.controllers.js";
import { Router } from "express";

const questionRouter = Router()
questionRouter.route("/question").get(questions)


export default questionRouter

