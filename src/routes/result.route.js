import { getResult } from "../controllers/result/result.controller.js";
import { Router } from "express";

const resultRouter = Router()
resultRouter.route("/:jobId").get(getResult)

export default resultRouter