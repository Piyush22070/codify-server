import { questions } from "../controllers/question.controllers.js";
import { Router } from "express";

const questionRouter = Router()
questionRouter.route("/question").get(questions)


export default questionRouter

