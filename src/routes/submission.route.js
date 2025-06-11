import { Router } from "express";
import { submission } from "../controllers/submission/submission.controllers.js";

const submissionRouter = Router()
submissionRouter.route("/submission").post(submission)


export default submissionRouter